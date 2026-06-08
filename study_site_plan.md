# Static HTML Study Framework For PAL

## Summary

Build a local, learning-friendly static HTML study framework for the first question, PAL, then reuse the same pattern for the remaining exam questions. The first implementation creates a polished PAL learning page with embedded videos, timestamped watch segments, flashcards, quizzes, and interactive algorithm previews.

The learning design uses evidence-backed strategies: retrieval practice and feedback from CMU's Eberly Center, Cornell's recommendations for retrieval/interleaving/spaced practice, and faded worked examples from the CAFE cognitive load toolkit.

## Key Changes

- Create `study/index.html` as the study hub and progress overview.
- Create `study/pal.html` as the full PAL learning page.
- Create `study/assets/study.css` for the shared visual system.
- Create `study/assets/study.js` for flashcards, quizzes, progress, video timestamp controls, and algorithm previews.
- Update the PAL companion Markdown to link to the HTML page and act as the video/source checklist.

## PAL Page Structure

- Top page summary with a 2-4 hour full pass, 30 minute panic pass, progress tracker, and five-module checklist.
- Each module includes:
  - embedded videos with timestamp buttons and fallback links,
  - oral recall bullets,
  - a short explanation before formal details,
  - flashcards,
  - focused multiple-choice questions with instant feedback,
  - one free-recall prompt.
- Interactive previews include:
  - graph representation toggle,
  - MST stepper,
  - union-find stepper,
  - SCC stepper,
  - search-tree comparison lab,
  - KMP prefix table and edit-distance grid.

## Video Selection Rules

- Prefer short, high-quality videos when they clearly cover the exam topic.
- If a short video is weak, use a respected course video but embed only the relevant timestamped segment.
- Accept a video only if it is roughly 5-20 minutes, or if it is a longer university/course lecture with a timestamped segment no longer than about 20 minutes.
- Mark longer or optional enrichment videos clearly.

## Test Plan

- Open `study/pal.html` locally and verify that videos, timestamp controls, flashcards, quizzes, progress, and previews work.
- Check desktop and mobile layout.
- Confirm links from `exam_questions.md`, `common/README.md`, and `common/01_pal_watch_and_remember.md`.
- Do a final content pass against the PAL formal notes.

## Assumptions

- Use plain static HTML/CSS/JS, no npm/Vite dependency.
- Use focused checks rather than a heavy quiz app.
- First deliverable is PAL only; later questions reuse the same template.
- Progress is local-only in the browser through `localStorage`.

## Learning Sources

- Cornell Learning Strategies Center: <https://lsc.cornell.edu/how-to-study/studying-for-and-taking-exams/effective-study-strategies/>
- Carnegie Mellon Eberly Center: <https://www.cmu.edu/teaching/resources/instructionalstrategies/activelearningstrategies/retrievalpractice/index.html>
- CAFE Toolkit: <https://cafe.cognitiveload.com.au/kb/fadedworkedexamples>
