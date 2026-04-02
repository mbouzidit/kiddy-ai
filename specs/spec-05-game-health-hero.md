# Spec 05 — Mini-Game: Health Hero

## Goal
Teach players about AI in healthcare by matching 4 health problems to their AI solutions.

---

## Mechanic

**Click-to-match** across two columns:
1. Player taps an item in the left column (health problem) — it becomes selected (highlighted).
2. Player taps an item in the right column (AI solution).
3. If the pair is correct → both items turn green and are locked (`matched` class). Score increments.
4. If the pair is wrong → both items flash red and deselect. Toast: "Try again! 💪".
5. Tapping a second item in the same column swaps the selection.

Right column items are **shuffled randomly** on each game load.

---

## Completion

When `matched === 4` (all pairs found):
- 400 ms delay, then:
  - Success banner (`#mg-success`) slides in with 🎉 and "All matched! Amazing work!".
  - "Complete Mission!" button (`#mg-cmp-btn`) becomes visible.
  - `confettiSmall()` fires.

If the mission is **already completed** when the game is launched, the complete button is replaced with a disabled "✅ Mission Already Completed!" button.

---

## Data (`HEALTH_PAIRS` in `data.js`)

4 pairs, each with:
- `prob`: `{ ico, en, fr }` — the health problem
- `sol`: `{ ico, en, fr }` — the AI solution

---

## State touched
None directly — completion is handled by `completeMission('health')` called from the button.

---

## Translations
`hg_title`, `hg_inst`, `hg_prob`, `hg_sol`, `hg_done`, `hg_wrong`, `mis_btn`, `mis_btn_done`, `mis_btn_after`

## Acceptance Criteria
- [ ] Right column is shuffled on each launch
- [ ] Correct match locks both items and cannot be re-selected
- [ ] Wrong match flashes red and clears selection after 550 ms
- [ ] Score counter updates after each correct match
- [ ] Success banner and complete button appear only after all 4 pairs are matched
- [ ] Already-completed state shows disabled button instead of complete button
