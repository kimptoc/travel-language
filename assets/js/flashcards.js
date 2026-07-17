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

  function initFlashcards(opts) {
    var container = document.getElementById(opts.containerId);
    if (!container || !opts.deck || !opts.deck.length) return;

    var deckId = opts.deckId || opts.containerId;
    var order = opts.deck.map(function (_, i) { return i; });
    var known = loadKnown(deckId);
    var onlyUnknown = false;
    var idx = 0;
    var flipped = false;

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
      '        <button type="button" class="speak-btn face-speak">🔊 Listen</button>' +
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
    var progressEl = container.querySelector(".flashcard-progress");

    function activeOrder() {
      if (!onlyUnknown) return order;
      var filtered = order.filter(function (i) { return known.indexOf(i) === -1; });
      return filtered.length ? filtered : order;
    }

    function render() {
      var seq = activeOrder();
      if (idx >= seq.length) idx = 0;
      if (idx < 0) idx = seq.length - 1;
      var item = opts.deck[seq[idx]];
      flipped = false;
      card.classList.remove("flipped");
      frontMain.textContent = item.main;
      frontSub.textContent = item.sub || "";
      frontHint.textContent = item.hint || "";
      backMain.textContent = item.back;
      backSub.textContent = item.backSub || "";
      faceSpeak.setAttribute("data-speak-text", item.speak || item.main);
      faceSpeak.setAttribute("data-speak-lang", item.lang || "ja-JP");
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
      var seq = activeOrder();
      var realIndex = seq[idx];
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
