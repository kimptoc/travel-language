/* Shared site behaviour: nav toggle, speech playback, checklists, week progress badges */

(function () {
  "use strict";

  function onReady(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".course-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Speech synthesis helper — used by [data-speak] buttons and flashcards.js
  function speak(text, lang) {
    if (!("speechSynthesis" in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      var utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang || "ja-JP";
      utter.rate = 0.9;
      window.speechSynthesis.speak(utter);
    } catch (e) {
      /* speech synthesis unsupported or blocked — fail silently */
    }
  }
  window.TravelLang = window.TravelLang || {};
  window.TravelLang.speak = speak;

  // Renders a vocab table body from a list of { <textKey>, romaji, en, notes }
  // into a <tbody> element, wiring speak buttons directly (works for content
  // injected after DOMContentLoaded, unlike the static [data-speak] scan).
  // textKey lets each course use its own field name for the target-language
  // text (Japanese data uses "jp", Korean data uses "kr", etc).
  function renderVocabRows(tbody, list, lang, textKey) {
    var key = textKey || "jp";
    list.forEach(function (item) {
      var tr = document.createElement("tr");

      var tdJp = document.createElement("td");
      tdJp.className = "jp";
      tdJp.textContent = item[key];

      var tdRomaji = document.createElement("td");
      tdRomaji.className = "romaji";
      tdRomaji.textContent = item.romaji;

      var tdEn = document.createElement("td");
      tdEn.textContent = item.en;

      var tdNotes = document.createElement("td");
      tdNotes.className = "notes";
      tdNotes.textContent = item.notes || "";

      var tdBtn = document.createElement("td");
      var speakBtn = document.createElement("button");
      speakBtn.type = "button";
      speakBtn.className = "speak-btn";
      speakBtn.textContent = "🔊";
      speakBtn.addEventListener("click", function () {
        speak(item[key], lang || "ja-JP");
      });
      tdBtn.appendChild(speakBtn);

      tr.appendChild(tdJp);
      tr.appendChild(tdRomaji);
      tr.appendChild(tdEn);
      tr.appendChild(tdNotes);
      tr.appendChild(tdBtn);
      tbody.appendChild(tr);
    });
  }
  window.TravelLang.renderVocabRows = renderVocabRows;

  function initSpeakButtons() {
    document.querySelectorAll("[data-speak]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        speak(btn.getAttribute("data-speak"), btn.getAttribute("data-speak-lang") || "ja-JP");
      });
    });
  }

  // Checklists: any <ul class="checklist" id="..."> with checkbox <input data-id="...">
  // persists checked state to localStorage and shows a progress bar if
  // a sibling element with [data-progress-for="<id>"] exists.
  function initChecklists() {
    document.querySelectorAll("ul.checklist[id]").forEach(function (list) {
      var storageKey = "checklist:" + list.id;
      var saved = {};
      try {
        saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      } catch (e) {
        saved = {};
      }

      var boxes = list.querySelectorAll('input[type="checkbox"]');
      boxes.forEach(function (box) {
        var id = box.getAttribute("data-id") || box.id;
        if (saved[id]) box.checked = true;
        box.addEventListener("change", function () {
          saved[id] = box.checked;
          localStorage.setItem(storageKey, JSON.stringify(saved));
          updateProgress();
        });
      });

      function updateProgress() {
        var total = boxes.length;
        var done = 0;
        boxes.forEach(function (b) {
          if (b.checked) done++;
        });
        var bar = document.querySelector('[data-progress-for="' + list.id + '"] .progress-bar-fill');
        var label = document.querySelector('[data-progress-for="' + list.id + '"] .progress-label');
        var pct = total ? Math.round((done / total) * 100) : 0;
        if (bar) bar.style.width = pct + "%";
        if (label) label.textContent = done + " / " + total + " complete";
      }

      updateProgress();
    });
  }

  // Week-complete toggle buttons: <button data-week-complete="japanese:week3">
  // and matching badges on the course index: <span data-week-badge="japanese:week3">
  function weekProgressKey(course) {
    return "progress:" + course;
  }

  function getWeekProgress(course) {
    try {
      return JSON.parse(localStorage.getItem(weekProgressKey(course)) || "{}");
    } catch (e) {
      return {};
    }
  }

  function setWeekProgress(course, data) {
    localStorage.setItem(weekProgressKey(course), JSON.stringify(data));
  }

  function initWeekCompleteButtons() {
    document.querySelectorAll("[data-week-complete]").forEach(function (btn) {
      var parts = btn.getAttribute("data-week-complete").split(":");
      var course = parts[0], week = parts[1];
      var progress = getWeekProgress(course);

      function render() {
        if (progress[week]) {
          btn.textContent = "✓ Week marked complete";
          btn.classList.add("secondary");
        } else {
          btn.textContent = "Mark this week complete";
          btn.classList.remove("secondary");
        }
      }
      render();

      btn.addEventListener("click", function () {
        progress[week] = !progress[week];
        setWeekProgress(course, progress);
        render();
      });
    });
  }

  function initWeekBadges() {
    document.querySelectorAll("[data-week-badge]").forEach(function (el) {
      var parts = el.getAttribute("data-week-badge").split(":");
      var course = parts[0], week = parts[1];
      var progress = getWeekProgress(course);
      if (progress[week]) {
        el.textContent = "✓ Complete";
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });
    // Also mark the nav week-circle links as "done"
    document.querySelectorAll(".week-links a[data-week]").forEach(function (a) {
      var parts = a.getAttribute("data-week").split(":");
      var course = parts[0], week = parts[1];
      var progress = getWeekProgress(course);
      if (progress[week]) a.classList.add("done");
    });
  }

  onReady(function () {
    initNavToggle();
    initSpeakButtons();
    initChecklists();
    initWeekCompleteButtons();
    initWeekBadges();
  });
})();
