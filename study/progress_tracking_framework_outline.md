# Study Progress Tracking Framework Outline

## Goal
Turn the study site into a coherent learning loop where meaningful learning actions count toward progress and give immediate feedback. Progress should feel motivating, not fake: watching videos, passing quizzes, writing recall answers, completing labs, and deliberately marking a module done should all have visible status.

## Core Principles
- Track actions that prove engagement, not passive scrolling.
- Keep the rail progress simple enough to understand at a glance.
- Keep detailed status close to the thing being practiced.
- Use one shared implementation wherever possible.
- Page-specific changes must preserve existing content, videos, quizzes, recall prompts, labs, and styling.
- No agent should rewrite unrelated UI or alter quiz/recall content unless explicitly asked.

## Progress Categories
Each page should track five categories:

1. Modules
   - Existing `data-progress-key` checkboxes remain the manual "I can explain this module" marker.
   - This is still the highest-weight item because it represents deliberate completion.

2. Videos
   - Existing watched-video buttons already write progress keys such as `video:<youtubeId>:<start>`.
   - These count toward the page progress.
   - The UI should keep showing watched/unwatched state after refresh.

3. Quizzes
   - Each paginated quiz counts as complete when every question has an answer.
   - Quiz score should be stored in `localStorage`.
   - The module should show quiz status, for example `Quiz: 8/10 answered, 6 correct`.
   - Page progress should include quiz completion, not perfect score. Score is feedback, not a gate.
   - Optional stretch: show "review recommended" when score is below 70%.

4. Free Recall
   - Each free-recall prompt counts as attempted when the textarea has non-trivial text.
   - Each prompt counts as validated when the validator returns a final verdict.
   - Store verdict summaries locally.
   - Page progress should count recall attempts or validations depending on implementation difficulty:
     - Minimum acceptable: count answered recall prompts.
     - Better: count validated recall prompts.
   - Do not reveal hidden reference answers before the user answers.

5. Labs / Interactive Components
   - Labs count as touched when the user changes a tab, clicks next/back, changes a slider/input, or toggles a lab option.
   - Labs count as complete only when the user explicitly clicks a small `Mark lab done` control or completes a known final step.
   - Use explicit lab-done controls as the default because automated lab completion can be misleading.

## Progress Weighting
Use a transparent checklist model rather than mysterious weighted percentages.

Recommended page progress denominator:
- module done checkboxes
- watched videos
- completed quizzes
- validated/attempted recall prompts
- completed labs

Every item counts as one unit. This is simple, explainable, and motivating.

The progress detail text should summarize categories, for example:

`3/5 modules, 4/7 videos, 2/5 quizzes, 6/10 recalls, 1/3 labs complete.`

If space is tight in the rail, show:

`16/30 study actions complete.`

and put the category breakdown in a compact expanded panel or tooltip-like details block.

## Shared Data Model
Use the existing page progress key:

`<page>-study-progress-v1`

Store all progress in that object:

```json
{
  "module-key": true,
  "video:youtubeId:start": true,
  "quiz:<quizKey>": {
    "answered": 10,
    "total": 10,
    "correct": 7,
    "complete": true,
    "updatedAt": "2026-06-06T..."
  },
  "recall:<recallKey>": {
    "attempted": true,
    "validated": true,
    "verdict": "partial",
    "updatedAt": "2026-06-06T..."
  },
  "lab:<labKey>": true
}
```

Important:
- Do not remove existing quiz answer storage immediately. Existing `studyQuiz:<path>:<quizKey>` can remain as the answer store.
- Mirror quiz completion into the page progress object so the rail and landing page can count it.
- Recall textarea content can remain in `<page>-study-recall-v1`; mirror attempted/validated status into the page progress object.

## Shared JS Requirements
Update `study/assets/study.js` so it provides reusable helpers:

- `getPageProgress(page = currentPage)`
- `setPageProgressValue(key, value, page = currentPage)`
- `collectQuizProgressKeys()`
- `collectRecallProgressKeys()`
- `collectLabProgressKeys()`
- `progressSummary(page)`
- `updateProgressUi()`

`progressSummary(page)` should return:

```js
{
  moduleDone,
  moduleTotal,
  videoDone,
  videoTotal,
  quizDone,
  quizTotal,
  recallDone,
  recallTotal,
  labDone,
  labTotal,
  done,
  total,
  percent
}
```

## Quiz Integration
`renderQuizPager(container, set, options)` must:
- Determine quiz key from `options.storageKey`, `data-quiz`, `data-pui-quiz`, or `data-ssu-quiz`.
- Store answers as it already does.
- After every answer, mirror summary into page progress:
  - key: `quiz:<quizKey>`
  - value: `{ answered, total, correct, complete, updatedAt }`
- Call `updateProgressUi()`.
- Display a compact status line in the quiz header:
  - `Answered 4/10 · 3 correct`
  - On completion: `Complete · 7/10 correct`

## Recall Integration
For every textarea with `data-recall`:
- On input, if the trimmed text is long enough, mirror:
  - key: `recall:<recallKey>`
  - value: `{ attempted: true, validated: false, updatedAt }`
- On successful validator final response, mirror:
  - key: `recall:<recallKey>`
  - value: `{ attempted: true, validated: true, verdict, updatedAt }`
- Count a recall as done when `validated` is true.
- If validator is unavailable, keep attempted state visible but do not pretend it is validated.

## Lab Integration
For each page, topic agents should identify interactive lab containers and add:
- stable `data-lab-key="<page>-<specific-lab>"`
- a small `Mark lab done` button if no natural completion exists

Shared JS should:
- initialize `[data-lab-key]`
- render or wire a lab-done button
- store `lab:<labKey>` in page progress
- update button state after refresh

Do not add lab tracking to plain static explanation boxes. Track only genuinely interactive components.

## UI Requirements
- Keep the rail progress percentage.
- Improve the rail detail text with category breakdown.
- Add compact badges near quiz/recall/lab sections:
  - `Not started`
  - `In progress`
  - `Complete`
  - `Review`
- Do not make the UI noisy. Small labels and status rows are enough.
- Do not create new landing hero sections or marketing copy.
- Use existing CSS tokens and component style.

## Landing Page Requirements
The landing page should show per-question progress using the same `progressSummary(page)` logic:
- percent
- actions complete out of total
- optional short category detail if available

The landing page should not duplicate "recent" sections.

## Topic Agent Responsibilities
Each topic agent should work only in its assigned page unless explicitly told otherwise.

For assigned page:
1. Inspect every module.
2. List all quizzes and ensure their keys match the module/topic.
3. List all `data-recall` prompts.
4. Identify interactive labs that deserve progress tracking.
5. Add `data-lab-key` to each interactive lab container.
6. Do not edit shared JS/CSS unless assigned as the shared-framework agent.
7. Do not remove content, videos, recall templates, or quiz questions.
8. Final response must list:
   - files changed
   - quizzes found
   - recall prompts found
   - labs marked with `data-lab-key`
   - anything that should not count toward progress and why

## Test Plan
For every changed page:
- Load the page through `http://127.0.0.1:8765/study/<page>.html`.
- Answer one quiz question and confirm progress updates.
- Complete one quiz and confirm score and progress persist after refresh.
- Type a recall answer and confirm attempted state persists.
- If validator is available, validate a recall and confirm validated state persists.
- Mark one lab done and confirm progress persists after refresh.
- Check desktop and mobile widths for no horizontal overflow.
- Run `node --check study/assets/study.js`.

## Asset Versioning
After implementation, bump all `study/*.html` asset query strings from the current version to a new version, for example:

`progress-framework-1`

This prevents stale JS/CSS in the browser.
