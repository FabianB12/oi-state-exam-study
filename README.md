# OI State Exam Study App

Static study app for Open Informatics state-exam preparation, focused on the common section and the AI specialization.

## Open The App

Start at `study/index.html`.

On GitHub Pages, the repository root redirects there automatically.

## Contents

- `study/`: interactive HTML study app, timetable, quizzes, labs, videos, and progress tracking.
- `common/`: common-section source notes and PDFs.
- `ai/`: AI-specialization source notes and PDFs.
- `exam_questions.md`: original question list.
- `student_reported_relevant_questions.md`: filtered previous-student question reports.

## Local Recall Validator

The study app itself is static and works on GitHub Pages. The AI free-recall validator is intentionally local-only because it needs an OpenRouter API key.

To use validation locally:

```bash
export OPENROUTER_API_KEY="..."
node study/recall-validator-server.mjs
```

Then serve the app locally, for example:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/study/index.html`.
