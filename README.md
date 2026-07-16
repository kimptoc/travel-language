# travel-language

Practical, itinerary-driven language courses, hosted as a static site on GitHub Pages.

**Live site:** https://kimptoc.github.io/travel-language/

First course: **Tokyo Foundation** — a 9-week survival + courtesy Japanese course for a
two-week Tokyo trip (see `courses/japanese/`). The site is structured to support additional
languages/courses later without changes to the shared framework.

## Structure

```
index.html                    Landing page — lists available language courses
assets/css/style.css          Shared styling
assets/js/main.js             Nav, checklists, speech playback, per-week progress tracking
assets/js/flashcards.js       Reusable flashcard deck component
courses/<language>/           One folder per language course
  index.html                  Course overview (week roadmap)
  data.js                     Vocab/kana data for the course
  week1.html … week9.html     Weekly lessons
  reference-card.html         Printable/phone quick-reference card
```

To add another language, copy the `courses/japanese/` folder as a template, swap in new
`data.js` content and week pages, and add a card for it on the root `index.html`.

This is a plain HTML/CSS/JS static site — no build step, no dependencies. Flashcard "known"
status, checklists, and week-complete markers are all stored in the visitor's browser
(`localStorage`); there's no backend or account system.

## Running locally

Just open `index.html` in a browser, or serve the folder locally, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000/`.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml`, which builds and deploys the site
on every push to `main`. To activate it (one-time setup):

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` — the workflow will publish the site automatically.

The site will be available at the URL shown on that Settings page (typically
`https://<owner>.github.io/<repo>/`).
