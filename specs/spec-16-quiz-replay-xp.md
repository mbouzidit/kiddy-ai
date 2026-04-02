# Spec 16 — Quiz Replay XP Incentive

## Goal

After a player achieves a perfect quiz score, replaying the quiz gives 0 XP. Adding a small replay bonus keeps the quiz worth revisiting, especially since the question pool is now randomised (spec-15).

## Behaviour

- The first quiz run awards XP as before (base +100, +50 per correct, +200 if 5/5).
- Replays (run 2, 3, 4) award +25 XP each, regardless of score, at quiz completion.
- From replay 4 onward no bonus XP is awarded (soft cap: 3 replay bonuses total).
- The replay XP toast reads the existing `tr_toast`-style message: `"+25 XP Replay Bonus! 🔄"` — new translation key `res_replay_xp`.
- The existing best-score tracking (`S.quizBest`) is unchanged; it still updates if the player beats it.

## State

| Field | Change |
|---|---|
| `S.quizPlays` | New integer — counts completed quiz runs (incremented at quiz finish). Default: 0. |

## Translations

| Key | EN | FR |
|---|---|---|
| `res_replay_xp` | `"🔄 Replay Bonus! +25 XP"` | `"🔄 Bonus rejeu ! +25 XP"` |

## Acceptance Criteria

- [ ] `S.quizPlays` starts at 0 and increments by 1 on each `finishQuiz()` call
- [ ] Run 1 (quizPlays goes 0→1): no replay XP
- [ ] Runs 2–4 (quizPlays 1→2, 2→3, 3→4): +25 XP + `res_replay_xp` toast each
- [ ] Run 5+ (quizPlays ≥ 4): no additional replay XP
- [ ] `S.quizPlays` persists across page reloads (saved via `save()` in `finishQuiz`)
- [ ] Reset wipes `S.quizPlays` back to 0
