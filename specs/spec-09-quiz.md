# Spec 09 — Quiz

## Goal
Test the player's AI knowledge with 5 questions. Each correct answer earns XP and a star. A perfect score unlocks a bonus badge. Players can replay to beat their best score.

---

## Screens

### Quiz Intro (`quiz-intro`)
- Shows rules (4 bullet points).
- Shows best score: "X/5 ⭐" or "Not played yet" if `S.quizBest === -1`.
- "Start Quiz!" button calls `startQuiz()`.

### Quiz (`quiz`)
- `startQuiz()` resets `S.qScore`, `S.qCurrent`, `S.qAnswered`, `S.hintUsed`, calls `save()`, navigates to `quiz`.
- On load, `renderQ()` is called.

### Quiz Results (`quiz-results`)
- Shows score, title, stars, XP earned.
- Two buttons: "Play Again" (→ `startQuiz()`) and "Go to My Badges" (→ `badges`).

---

## Question Rendering (`renderQ`)

1. Updates star row (earned stars filled, remaining empty).
2. Updates counter: "Question X of 5".
3. Shows character emoji and question text.
4. Resets hint button and hint box.
5. Hides feedback panel and "Next" button.
6. Builds answer buttons based on question type:
   - **`tf`** (true/false): two buttons in a 2-column grid.
   - **`mc3`** (multiple choice, 3 options): single-column list.
   - **`mc4`** (multiple choice, 4 options): 2-column grid.

---

## Answer Checking (`checkAnswer`)

1. Guard: if `S.qAnswered`, return.
2. Set `S.qAnswered = true`.
3. If correct: `S.qScore++`, +50 XP.
4. Highlight all buttons: correct answer → green, wrong selection → red.
5. All buttons disabled.
6. Show feedback panel (✅/❌ icon, title, explanation).
7. Animate the newly earned star if correct.
8. Show "Next Question!" button.
9. `save()`.

---

## Hint System

- One hint available per quiz session (`S.hintUsed`).
- Clicking "💡 Hint" reveals `q.hint` text in `#qz-hint-box` and disables the button.
- Using the hint does not affect scoring.

---

## Finishing (`finishQuiz`)

Called when `S.qCurrent >= QUESTIONS.length` (after last `nextQ()`):
1. Update `S.quizBest` if current score is higher.
2. Earn `quiz-starter` badge, +100 XP base.
3. If score === 5: earn `ai-genius` badge, +200 XP bonus.
4. `save()`, navigate to `quiz-results`, fire `confetti()`.

---

## Results Display (`loadResults`)

- Score line: "X/5 Correct!!"
- Title: from `res_titles[score]` array (index 0–5), or special HTML for score 5.
- Stars: filled emojis for correct + empty for wrong.
- XP: `score × 50 + 100 + (score === 5 ? 200 : 0)`.

---

## Questions Data (`QUESTIONS` in `data.js`)

5 questions, each:
```js
{
  type: 'tf' | 'mc3' | 'mc4',
  char: '🤖',         // Decorative emoji
  text: '...',        // Question text (EN)
  text_fr: '...',     // Question text (FR)
  correct: 'true'|'false'|0|1|2|3,  // Correct answer
  opts: [{ lbl, cls, en, fr }],      // mc3/mc4 only
  hint: '...',        // Hint text (EN)
  hint_fr: '...',     // Hint text (FR)
  expl: '...',        // Explanation (EN)
  expl_fr: '...'      // Explanation (FR)
}
```

---

## State
| Field | Change |
|---|---|
| `S.qScore` | Reset to 0 on start; +1 per correct answer |
| `S.qCurrent` | Reset to 0 on start; +1 per `nextQ()` |
| `S.qAnswered` | Reset to false per question; true after answering |
| `S.hintUsed` | Reset to false on start; true after hint used |
| `S.quizBest` | Updated at finish if score improves |
| `S.xp` | +50 per correct, +100 base at finish, +200 bonus for 5/5 |
| `S.badges` | `quiz-starter` always at finish; `ai-genius` for 5/5 |

---

## Translations
`qi_lbl`, `qi_title`, `qi_sub`, `qi_r1`–`qi_r4`, `qi_best_lbl`, `qi_best_none`, `qi_btn`, `qz_title`, `qz_q_of`, `qz_true`, `qz_false`, `qz_next`, `qz_correct`, `qz_wrong`, `qz_hint_btn`, `res_lbl`, `res_correct_sfx`, `res_play`, `res_badges`, `res_xp_sfx`, `res_titles[]`, `res_genius`

## Acceptance Criteria
- [ ] Best score is shown on intro screen and persists across sessions
- [ ] "Next Question!" button only appears after answering
- [ ] Correct answer is always highlighted green, even if player was wrong
- [ ] Hint can only be used once per session; button is disabled after use
- [ ] `finishQuiz` is idempotent within a session (cannot be called twice)
- [ ] Confetti fires on results screen
- [ ] "Play Again" resets all session state and restarts from question 1
