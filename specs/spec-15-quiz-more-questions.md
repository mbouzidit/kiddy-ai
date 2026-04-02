# Spec 15 — Quiz: Expanded Question Pool (Random Sampling)

## Goal

The current quiz has exactly 5 questions, making it trivially exhaustable. Expanding the pool to 10 questions and sampling 5 randomly per run increases educational replay value and keeps the quiz feeling fresh.

## Behaviour

- `QUESTIONS` array in `data.js` grows from 5 to 10 questions.
- At quiz start, a random subset of 5 questions is drawn (no repeats within a single run) and stored in `S.qQuestions`.
- All subsequent quiz logic (next question, scoring, hints) operates on `S.qQuestions` instead of the full `QUESTIONS` array.
- Question types supported: `tf` (true/false), `mc3` (3-choice), `mc4` (4-choice) — no new types needed.

## State

| Field | Change |
|---|---|
| `S.qQuestions` | New field — array of 5 question objects sampled at quiz start |

`S.qQuestions` is reset to `[]` each time the quiz starts and is not relevant to persist (transient session data). However it must exist in the default state shape to avoid undefined checks.

## Translations

All 5 new questions require bilingual content inline in `data.js` (same structure as existing questions: `text`, `text_fr`, `expl`, `expl_fr`, `hint`, `hint_fr`, and `opts`/`opts_fr` for multiple choice).

No new top-level `T` keys are needed.

## New Questions (content)

6. **TF** — "AI can create music, paintings, and stories all by itself." → TRUE  
   Expl: Generative AI like DALL·E and Suno can produce art, images, and music from text prompts!

7. **MC3** — "What is machine learning?" → "🤖 Teaching computers to learn from data"  
   (distractors: "📺 Fixing broken machines" / "🎓 School for robots")

8. **TF** — "AI always makes perfect decisions and never makes mistakes." → FALSE  
   Expl: AI can be wrong! It depends on the quality of its training data and how it was designed.

9. **MC4** — "Which AI skill helps a phone understand your spoken words?" →  
   "🗣️ Speech Recognition" (distractors: Computer Vision / Recommendation Engine / Reinforcement Learning)

10. **MC3** — "How does a music app know which songs you'll like?" →  
    "📊 AI analyses your listening history" (distractors: "🎲 Random selection" / "📞 It asks your friends")

## Acceptance Criteria

- [ ] `QUESTIONS` array has exactly 10 entries, all with `en`/`fr` content
- [ ] Each quiz run samples exactly 5 unique questions from the pool
- [ ] Question order is random each run
- [ ] All question types (`tf`, `mc3`, `mc4`) can appear in a sampled run
- [ ] Scoring and hints work correctly on sampled questions
- [ ] Perfect score (5/5) still earns `ai-genius` badge
- [ ] Language switch mid-quiz shows correct language for current question
