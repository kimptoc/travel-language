/* Generic flashcard deck component.
   Usage: TravelLang.initFlashcards({
     containerId: "kana-deck",
     deckId: "japanese:hiragana",
     deck: [{ main: "あ", sub: "", back: "a", backSub: "", speak: "あ", lang: "ja-JP" }, ...],
     shuffleDefault: true
   });
*/
(function () {
  "use strict";

  window.TravelLang = window.TravelLang || {};

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

  function knownKey(deckId) {
    return "flashcards-known:" + deckId;
  }

  function loadKnown(deckId) {
    try {
      return JSON.parse(localStorage.getItem(knownKey(deckId)) || "[]");
    } catch (e) {
      return [];
    }
  }

  function saveKnown(deckId, list) {
    localStorage.setItem(knownKey(deckId), JSON.stringify(list));
  }

  function ratingKey(deckId) {
    return "flashcards-rating:" + deckId;
  }

  function loadRatings(deckId) {
    try {
      return JSON.parse(localStorage.getItem(ratingKey(deckId)) || "{}");
    } catch (e) {
      return {};
    }
  }

  function saveRatings(deckId, ratings) {
    localStorage.setItem(ratingKey(deckId), JSON.stringify(ratings));
  }

  var RATING_EMOJI = { 1: "😕", 2: "🙂", 3: "😄" };
  var supportsRecording = !!(
    navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia &&
    window.MediaRecorder
  );

  function initFlashcards(opts) {
    var container = document.getElementById(opts.containerId);
    if (!container || !opts.deck || !opts.deck.length) return;

    var deckId = opts.deckId || opts.containerId;
    var order = opts.deck.map(function (_, i) { return i; });
    var known = loadKnown(deckId);
    var ratings = loadRatings(deckId);
    var onlyUnknown = false;
    var idx = 0;
    var flipped = false;

    var mediaRecorder = null;
    var activeStream = null;
    var audioChunks = [];
    var isRecording = false;
    var recordingUrl = null;
    var recordingToken = 0;

    container.innerHTML =
      '<div class="flashcard-toolbar">' +
      '  <button type="button" data-act="shuffle">🔀 Shuffle</button>' +
      '  <button type="button" data-act="toggle-unknown">🎯 Practice unknown only</button>' +
      '  <button type="button" data-act="reset">↺ Reset progress</button>' +
      "</div>" +
      '<div class="flashcard-stage">' +
      '  <div class="flashcard" tabindex="0" role="button" aria-label="Flip card">' +
      '    <div class="flashcard-inner">' +
      '      <div class="flashcard-face front">' +
      '        <div class="main"></div>' +
      '        <div class="sub"></div>' +
      '        <div class="hint"></div>' +
      '        <div class="face-actions">' +
      '          <button type="button" class="speak-btn face-speak">🔊 Listen</button>' +
      '          <button type="button" class="speak-btn face-record" hidden>🎙️ Record yourself</button>' +
      "        </div>" +
      '        <audio class="face-playback" hidden controls></audio>' +
      '        <div class="rate-row" hidden>' +
      '          <span class="rate-label">How did that sound?</span>' +
      '          <button type="button" class="rate-btn" data-rate="1" title="Needs work" aria-label="Needs work">😕</button>' +
      '          <button type="button" class="rate-btn" data-rate="2" title="OK" aria-label="OK">🙂</button>' +
      '          <button type="button" class="rate-btn" data-rate="3" title="Great" aria-label="Great">😄</button>' +
      "        </div>" +
      '        <div class="rate-last"></div>' +
      "      </div>" +
      '      <div class="flashcard-face back">' +
      '        <div class="main"></div>' +
      '        <div class="sub"></div>' +
      "      </div>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      '<div class="flashcard-toolbar" style="justify-content:center;">' +
      '  <button type="button" data-act="prev">← Prev</button>' +
      '  <button type="button" class="primary" data-act="unknown">Still learning</button>' +
      '  <button type="button" class="primary" data-act="known">✓ I know this</button>' +
      '  <button type="button" data-act="next">Next →</button>' +
      "</div>" +
      '<p class="flashcard-progress"></p>';

    var card = container.querySelector(".flashcard");
    var frontMain = container.querySelector(".front .main");
    var frontSub = container.querySelector(".front .sub");
    var frontHint = container.querySelector(".front .hint");
    var backMain = container.querySelector(".back .main");
    var backSub = container.querySelector(".back .sub");
    var faceSpeak = container.querySelector(".face-speak");
    var faceRecord = container.querySelector(".face-record");
    var facePlayback = container.querySelector(".face-playback");
    var rateRow = container.querySelector(".rate-row");
    var rateLast = container.querySelector(".rate-last");
    var progressEl = container.querySelector(".flashcard-progress");

    if (supportsRecording) faceRecord.hidden = false;

    function activeOrder() {
      if (!onlyUnknown) return order;
      var filtered = order.filter(function (i) { return known.indexOf(i) === -1; });
      return filtered.length ? filtered : order;
    }

    function currentRealIndex() {
      var seq = activeOrder();
      return seq[idx];
    }

    function stopRecording() {
      if (mediaRecorder && isRecording) mediaRecorder.stop();
      if (activeStream) {
        activeStream.getTracks().forEach(function (t) { t.stop(); });
        activeStream = null;
      }
      isRecording = false;
      mediaRecorder = null;
    }

    function resetRecordingUI() {
      recordingToken++;
      stopRecording();
      audioChunks = [];
      if (recordingUrl) {
        URL.revokeObjectURL(recordingUrl);
        recordingUrl = null;
      }
      facePlayback.hidden = true;
      facePlayback.removeAttribute("src");
      rateRow.hidden = true;
      faceRecord.textContent = "🎙️ Record yourself";
      faceRecord.classList.remove("recording");
    }

    function updateRateLast() {
      var rating = ratings[currentRealIndex()];
      rateLast.textContent = rating ? "Last self-rating: " + RATING_EMOJI[rating] : "";
    }

    function render() {
      var seq = activeOrder();
      if (idx >= seq.length) idx = 0;
      if (idx < 0) idx = seq.length - 1;
      var item = opts.deck[seq[idx]];
      flipped = false;
      card.classList.remove("flipped");
      resetRecordingUI();
      frontMain.textContent = item.main;
      frontSub.textContent = item.sub || "";
      frontHint.textContent = item.hint || "";
      backMain.textContent = item.back;
      backSub.textContent = item.backSub || "";
      faceSpeak.setAttribute("data-speak-text", item.speak || item.main);
      faceSpeak.setAttribute("data-speak-lang", item.lang || "ja-JP");
      updateRateLast();
      progressEl.textContent =
        (idx + 1) + " / " + seq.length +
        (onlyUnknown ? " (unknown only)" : "") +
        " · " + known.length + " marked known";
    }

    function go(delta) {
      idx += delta;
      render();
    }

    function markKnown(isKnown) {
      var realIndex = currentRealIndex();
      var pos = known.indexOf(realIndex);
      if (isKnown && pos === -1) known.push(realIndex);
      if (!isKnown && pos !== -1) known.splice(pos, 1);
      saveKnown(deckId, known);
      go(1);
    }

    card.addEventListener("click", function () {
      flipped = !flipped;
      card.classList.toggle("flipped", flipped);
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });

    faceSpeak.addEventListener("click", function (e) {
      e.stopPropagation();
      if (window.TravelLang.speak) {
        window.TravelLang.speak(faceSpeak.getAttribute("data-speak-text"), faceSpeak.getAttribute("data-speak-lang"));
      }
    });

    faceRecord.addEventListener("click", function (e) {
      e.stopPropagation();
      if (isRecording) {
        stopRecording();
        return;
      }
      var token = recordingToken;
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        if (token !== recordingToken) {
          stream.getTracks().forEach(function (t) { t.stop(); });
          return;
        }
        activeStream = stream;
        audioChunks = [];
        var recorder = new MediaRecorder(stream);
        mediaRecorder = recorder;
        recorder.addEventListener("dataavailable", function (e2) {
          if (e2.data && e2.data.size) audioChunks.push(e2.data);
        });
        recorder.addEventListener("stop", function () {
          if (token !== recordingToken) return;
          if (recordingUrl) URL.revokeObjectURL(recordingUrl);
          var blob = new Blob(audioChunks, { type: recorder.mimeType || "audio/webm" });
          recordingUrl = URL.createObjectURL(blob);
          facePlayback.src = recordingUrl;
          facePlayback.hidden = false;
          rateRow.hidden = false;
          faceRecord.textContent = "🎙️ Record again";
          faceRecord.classList.remove("recording");
        });
        recorder.start();
        isRecording = true;
        faceRecord.textContent = "⏹️ Stop recording";
        faceRecord.classList.add("recording");
      }).catch(function (err) {
        if (token !== recordingToken) return;
        rateLast.textContent =
          err && err.name === "NotAllowedError"
            ? "Microphone permission denied — allow access in your browser settings to record."
            : "Microphone unavailable on this device.";
      });
    });

    rateRow.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest(".rate-btn") : null;
      if (!btn) return;
      e.stopPropagation();
      ratings[currentRealIndex()] = Number(btn.getAttribute("data-rate"));
      saveRatings(deckId, ratings);
      updateRateLast();
    });

    container.querySelector('[data-act="prev"]').addEventListener("click", function () { go(-1); });
    container.querySelector('[data-act="next"]').addEventListener("click", function () { go(1); });
    container.querySelector('[data-act="known"]').addEventListener("click", function () { markKnown(true); });
    container.querySelector('[data-act="unknown"]').addEventListener("click", function () { markKnown(false); });
    container.querySelector('[data-act="shuffle"]').addEventListener("click", function () {
      order = shuffle(order);
      idx = 0;
      render();
    });
    container.querySelector('[data-act="toggle-unknown"]').addEventListener("click", function (e) {
      onlyUnknown = !onlyUnknown;
      e.target.classList.toggle("primary", onlyUnknown);
      idx = 0;
      render();
    });
    container.querySelector('[data-act="reset"]').addEventListener("click", function () {
      known = [];
      saveKnown(deckId, known);
      render();
    });

    if (opts.shuffleDefault) order = shuffle(order);
    render();
  }

  window.TravelLang.initFlashcards = initFlashcards;
})();
