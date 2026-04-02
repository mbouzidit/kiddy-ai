# Spec 06 — Mini-Game: Planet Protector

## Goal
Teach players about AI and the environment by sorting 9 AI tools into 3 categories.

---

## Mechanic

**Tap-to-select, tap-to-place** two-step interaction:
1. Player taps an item from the item list — it becomes selected.
2. Player taps a category tile to place the item.
3. **Correct category** → item gets `sorted` class (grayed out, non-interactive), category flashes green, category counter increments, score increments.
4. **Wrong category** → item gets `wrong` class (red shake), clears after 550 ms. Selection is cleared.
5. Tapping an already-selected item deselects it.

---

## Completion

When `sorted === 9` (all items placed correctly):
- 400 ms delay, then:
  - Success banner (`#sort-success`) slides in with 🌍 and "Planet saved! All sorted!".
  - "Complete Mission!" button (`#sort-cmp-btn`) becomes visible.
  - `confettiSmall()` fires.

---

## Data (`data.js`)

**`PLANET_CATS`** — 3 categories, each with `{ ico, en, fr, bg, color }`:
| Index | Category |
|---|---|
| 0 | Energy |
| 1 | Climate |
| 2 | Wildlife |

**`PLANET_ITEMS`** — 9 items, each with `{ ico, en, fr, cat }` where `cat` is the correct category index (0–2), 3 items per category.

---

## State touched
None directly — completion handled by `completeMission('planet')`.

---

## Translations
`pg_title`, `pg_inst`, `pg_done`, `pg_score`, `mis_btn`, `mis_btn_done`, `mis_btn_after`

## Acceptance Criteria
- [ ] Each category shows a running count of correctly placed items
- [ ] Wrong placement causes a shake animation and clears selection
- [ ] Sorted items are visually distinct (grayed out) and cannot be re-selected
- [ ] Score counter shows "Sorted: X / 9"
- [ ] Success banner and complete button appear only after all 9 items are sorted
- [ ] Already-completed state shows disabled button
