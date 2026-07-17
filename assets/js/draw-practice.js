/* Draw & assess practice: a canvas drawing pad that scores a hand-drawn
   character against the target glyph rendered from a system font.

   Scoring is a rough shape-overlap heuristic (Dice coefficient between
   downsampled ink masks, each normalised to a common scale/position) —
   not real handwriting recognition, but enough to tell "close" from
   "not close" for practice purposes.

   Usage: TravelLang.initDrawPractice({
     containerId: "hiragana-draw",
     list: HIRAGANA,   // [{ char, romaji }, ...]
     lang: "ja-JP"
   });
*/
(function () {
  "use strict";

  window.TravelLang = window.TravelLang || {};

  var GRID = 48;          // sampling resolution used for scoring
  var CANVAS_SIZE = 260;  // on-screen drawing surface, in canvas pixels
  var ALPHA_THRESHOLD = 24;
  // Bounding-box normalisation scales small ink up to a common size, which
  // means a tiny scribble can otherwise balloon into a solid blob that
  // coincidentally covers most characters' strokes. Require a minimum
  // drawn size before scoring so that trick can't inflate the score.
  var MIN_SPAN_FRACTION = 0.3;

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function cssVar(name, fallback) {
    var val = getComputedStyle(document.documentElement).getPropertyValue(name);
    return (val && val.trim()) || fallback;
  }

  // Finds the bounding box of "inked" (sufficiently opaque) pixels in an
  // ImageData-backed canvas context, or null if nothing was drawn.
  function inkBBox(ctx, w, h) {
    var data = ctx.getImageData(0, 0, w, h).data;
    var minX = w, minY = h, maxX = -1, maxY = -1;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        if (data[(y * w + x) * 4 + 3] > ALPHA_THRESHOLD) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    if (maxX < 0) return null;
    return { minX: minX, minY: minY, maxX: maxX, maxY: maxY };
  }

  // Crops to the ink bounding box and rescales it into a centred GRIDxGRID
  // mask (filling ~80% of the grid, same convention used to render the
  // target glyph) so position/size differences don't unfairly tank the score.
  function normalisedMask(sourceCanvas, bbox) {
    var out = document.createElement("canvas");
    out.width = GRID;
    out.height = GRID;
    var octx = out.getContext("2d");
    var bw = bbox.maxX - bbox.minX + 1;
    var bh = bbox.maxY - bbox.minY + 1;
    var scale = (GRID * 0.8) / Math.max(bw, bh);
    var dw = bw * scale, dh = bh * scale;
    var dx = (GRID - dw) / 2, dy = (GRID - dh) / 2;
    octx.drawImage(sourceCanvas, bbox.minX, bbox.minY, bw, bh, dx, dy, dw, dh);
    return octx.getImageData(0, 0, GRID, GRID).data;
  }

  function glyphMask(ch) {
    var c = document.createElement("canvas");
    c.width = GRID;
    c.height = GRID;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold " + Math.round(GRID * 0.74) +
      "px 'Noto Sans JP','Hiragino Kaku Gothic ProN','Yu Gothic',sans-serif";
    ctx.fillText(ch, GRID / 2, GRID / 2 + GRID * 0.03);
    var bbox = inkBBox(ctx, GRID, GRID);
    if (!bbox) return ctx.getImageData(0, 0, GRID, GRID).data;
    return normalisedMask(c, bbox);
  }

  function diceScore(maskA, maskB) {
    var inter = 0, sumA = 0, sumB = 0;
    for (var i = 0; i < GRID * GRID; i++) {
      var a = maskA[i * 4 + 3] > ALPHA_THRESHOLD ? 1 : 0;
      var b = maskB[i * 4 + 3] > ALPHA_THRESHOLD ? 1 : 0;
      if (a && b) inter++;
      sumA += a;
      sumB += b;
    }
    if (sumA + sumB === 0) return 0;
    return (2 * inter) / (sumA + sumB);
  }

  function scoreVerdict(pct) {
    if (pct >= 75) return { cls: "good", text: "Great match!" };
    if (pct >= 50) return { cls: "ok", text: "Getting there — compare stroke shape and balance." };
    return { cls: "low", text: "Not quite — try tracing the guide first." };
  }

  function initDrawPractice(opts) {
    var container = document.getElementById(opts.containerId);
    if (!container || !opts.list || !opts.list.length) return;

    var lang = opts.lang || "ja-JP";
    var order = shuffle(opts.list.map(function (_, i) { return i; }));
    var idx = 0;
    var maskCache = {};
    var hasInk = false;
    var drawing = false;

    container.innerHTML =
      '<div class="draw-practice">' +
      '  <div class="draw-target">' +
      '    <span class="draw-target-char"></span>' +
      '    <span class="draw-target-romaji"></span>' +
      '    <button type="button" class="speak-btn" data-act="speak">🔊</button>' +
      "  </div>" +
      '  <div class="draw-canvas-wrap">' +
      '    <div class="draw-guide"></div>' +
      '    <canvas class="draw-canvas" width="' + CANVAS_SIZE + '" height="' + CANVAS_SIZE + '"></canvas>' +
      "  </div>" +
      '  <label class="draw-guide-toggle"><input type="checkbox" checked> Show faint guide</label>' +
      '  <div class="flashcard-toolbar" style="justify-content:center;">' +
      '    <button type="button" data-act="clear">↺ Clear</button>' +
      '    <button type="button" class="primary" data-act="check">✓ Check my drawing</button>' +
      '    <button type="button" data-act="next">🔀 New character</button>' +
      "  </div>" +
      '  <div class="draw-result" aria-live="polite"></div>' +
      "</div>";

    var targetChar = container.querySelector(".draw-target-char");
    var targetRomaji = container.querySelector(".draw-target-romaji");
    var guide = container.querySelector(".draw-guide");
    var guideToggle = container.querySelector(".draw-guide-toggle input");
    var canvas = container.querySelector(".draw-canvas");
    var resultEl = container.querySelector(".draw-result");
    var ctx = canvas.getContext("2d");

    function currentItem() {
      return opts.list[order[idx]];
    }

    function maskFor(ch) {
      if (!maskCache[ch]) maskCache[ch] = glyphMask(ch);
      return maskCache[ch];
    }

    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hasInk = false;
      resultEl.innerHTML = "";
      resultEl.className = "draw-result";
    }

    function render() {
      var item = currentItem();
      targetChar.textContent = item.char;
      targetRomaji.textContent = item.romaji || "";
      guide.textContent = item.char;
      clearCanvas();
    }

    function relPos(e) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height)
      };
    }

    function strokeStart(e) {
      e.preventDefault();
      drawing = true;
      hasInk = true;
      if (canvas.setPointerCapture) {
        try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      }
      ctx.strokeStyle = cssVar("--text", "#23282e");
      ctx.lineWidth = CANVAS_SIZE * 0.05;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      var p = relPos(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + 0.1, p.y + 0.1);
      ctx.stroke();
    }

    function strokeMove(e) {
      if (!drawing) return;
      e.preventDefault();
      var p = relPos(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }

    function strokeEnd() {
      drawing = false;
    }

    canvas.addEventListener("pointerdown", strokeStart);
    canvas.addEventListener("pointermove", strokeMove);
    canvas.addEventListener("pointerup", strokeEnd);
    canvas.addEventListener("pointercancel", strokeEnd);
    canvas.addEventListener("pointerleave", function (e) { if (drawing) strokeEnd(e); });

    guideToggle.addEventListener("change", function () {
      guide.style.visibility = guideToggle.checked ? "visible" : "hidden";
    });

    container.querySelector('[data-act="speak"]').addEventListener("click", function () {
      if (window.TravelLang.speak) window.TravelLang.speak(currentItem().char, lang);
    });
    container.querySelector('[data-act="clear"]').addEventListener("click", clearCanvas);
    container.querySelector('[data-act="next"]').addEventListener("click", function () {
      idx++;
      if (idx >= order.length) {
        order = shuffle(order);
        idx = 0;
      }
      render();
    });
    container.querySelector('[data-act="check"]').addEventListener("click", function () {
      if (!hasInk) {
        resultEl.className = "draw-result low";
        resultEl.innerHTML = "<p>Draw the character first, then check.</p>";
        return;
      }
      var bbox = inkBBox(ctx, canvas.width, canvas.height);
      if (!bbox) {
        resultEl.className = "draw-result low";
        resultEl.innerHTML = "<p>Draw the character first, then check.</p>";
        return;
      }
      var span = Math.max(bbox.maxX - bbox.minX, bbox.maxY - bbox.minY);
      if (span < CANVAS_SIZE * MIN_SPAN_FRACTION) {
        resultEl.className = "draw-result low";
        resultEl.innerHTML = "<p>Draw the character a bit bigger to fill more of the box, then check again.</p>";
        return;
      }
      var drawnMask = normalisedMask(canvas, bbox);
      var target = maskFor(currentItem().char);
      var pct = Math.round(diceScore(drawnMask, target) * 100);
      var verdict = scoreVerdict(pct);
      resultEl.className = "draw-result " + verdict.cls;
      resultEl.innerHTML =
        '<div class="progress-bar"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>' +
        "<p>" + pct + "% match — " + verdict.text + "</p>";
    });

    render();
  }

  window.TravelLang.initDrawPractice = initDrawPractice;
})();
