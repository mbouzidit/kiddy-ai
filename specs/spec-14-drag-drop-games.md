# Spec 14 — Drag-and-Drop Mini-Games (Health Hero & Planet Protector)

## Goal

Replace the tap/click interaction in both mini-games with native drag-and-drop (mouse + touch) to make them more tactile and attractive for kids.

---

## Health Hero — Drag to Match

### Layout

Two rows of cards:

- **Top row (draggable):** 4 health-problem cards (`ml-N`), shuffled randomly
- **Bottom row (drop zones):** 4 solution drop zones (`mr-N`), in a fixed order

### Mechanic

1. Child drags a problem card from the top row.
2. A ghost clone follows the finger/cursor.
3. Child drops the card onto a solution zone.
4. **Correct pair** → problem card flies into its slot (lands inside the zone), both turn green (`matched`), locked. Score increments.
5. **Wrong pair** → problem card shakes red, returns to its original position. Toast: `hg_wrong`.
6. When all 4 are matched → success banner + complete button + `confettiSmall()`.

### Visual

- Drop zones show a dashed border and a light background when the dragged card hovers over them (`drag-over` class).
- Matched zones show the problem card overlaid on the solution zone in green.

---

## Planet Protector — Drag to Sort

### Layout

- **Item area:** 9 draggable pills at the top (same visual as current `.sort-item`)
- **Category zones:** 3 larger drop zones at the bottom, each clearly labeled

### Mechanic

1. Child drags an item pill.
2. Ghost clone follows touch/cursor.
3. Child drops onto a category zone.
4. **Correct category** → item teleports into the zone (appended as a small chip inside), category flashes green, counter increments, score increments.
5. **Wrong category** → item shakes, returns to pill area.
6. When all 9 placed → success banner + complete button + `confettiSmall()`.

---

## Shared Drag Engine

Both games reuse the same pattern already established in `training.js`:
- `ondragstart` / `ondragover` / `ondrop` for mouse
- `touchstart` / `touchmove` / `touchend` for touch (ghost clone positioned via `clientX/Y`)

Each game manages its own drag state object (no global conflicts).

---

## State touched

None directly — completion via `completeMission('health')` / `completeMission('planet')` (unchanged).

---

## Translations

No new keys needed. Existing keys `hg_*` and `pg_*` remain in use.

---

## CSS

New classes added to `games.css`:

| Class | Purpose |
|---|---|
| `.drag-over` | Drop zone highlight when a dragged item hovers over it |
| `.match-prob` | Draggable problem card (top row, Health Hero) |
| `.match-zone` | Solution drop zone (bottom row, Health Hero) |
| `.match-zone.matched` | Locked green zone with problem card inside |
| `.sort-zone` | Category drop zone (Planet Protector) |
| `.sort-zone.drag-over` | Highlight on hover |
| `.sort-chip` | Small item chip placed inside a category zone after correct drop |

---

## Acceptance Criteria

- [ ] Health Hero: problem cards are draggable (mouse + touch)
- [ ] Health Hero: correct drop locks the pair green and updates score
- [ ] Health Hero: wrong drop shakes and returns the card to origin
- [ ] Health Hero: all 4 matched → success banner + complete button
- [ ] Planet Protector: item pills are draggable (mouse + touch)
- [ ] Planet Protector: correct drop places chip inside category zone and updates score
- [ ] Planet Protector: wrong drop shakes and returns item to pill area
- [ ] Planet Protector: all 9 sorted → success banner + complete button
- [ ] Already-completed state shows disabled button for both games
- [ ] Both games work on mobile (touch events)
- [ ] EN/FR translations apply correctly
