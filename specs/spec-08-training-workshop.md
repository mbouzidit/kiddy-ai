# Spec 08 — Training Workshop

## Goal
Teach players the concept of training an AI model with data through a drag-and-drop interaction, followed by a simulated training animation, and then a test phase to verify what the robot "learned".

---

## Phases

### Phase 1 — Data Collection (Drag & Drop)

- Left panel ("Data Sources"): 8 emoji items from `DRAG_EMOJIS`.
- Right panel ("Robot Brain"): a drop zone.
- Player drags items from left to right (mouse drag or touch drag).
- Each successfully dropped item:
  - Appears in the drop zone display.
  - Is marked `used` (grayed out, no longer draggable) in the source grid.
  - Increments `S.trCount`.
  - Shows a random robot "thought bubble" emoji (🤔 📥 💡 🧐) for 2.2 s.
  - Calls `save()`.
- "Start Training!" button is disabled until at least 1 item is dropped.

**Touch support**: a ghost element follows the finger; drop is detected by checking if `touchend` coordinates land inside the drop zone bounds.

### Phase 2 — Training Animation

Triggered by clicking "Start Training!":
- Button is disabled immediately, label changes to "⏳ Training in progress…".
- Robot emoji cycles through frames: 🤖 😮 🤩 😎 🤯 (every 400 ms).
- Progress bar animates from current % to 100% (increments of 2% every 60 ms).
- Progress stat text updates live: "LEARNING PROGRESS: X%".
- On reaching 100%:
  - Robot shows 🎉.
  - `S.trDone = true`, `save()`.
  - Badges earned: `robot-trainer`, `data-detective`.
  - +150 XP awarded.
  - Toast: "🎉 Training Complete! +150 XP".
  - Button label → "✅ Training Complete!" (disabled).
  - Completion card (`#tr-done`) becomes visible.
  - "Next: Take the Quiz!" button (`#tr-next-btn`) becomes visible.
  - After 800 ms, Phase 3 is built.

### Phase 3 — Test Phase

Shown after training completes (also restored on screen re-load if `S.trDone`):
- Grid of all 8 emoji items from `DRAG_EMOJIS`.
- Player taps each item to reveal if the robot "knows" it:
  - **Index < `S.trCount`** (was in training data) → green, label "I know this! 🎉", robot bubble 🎉.
  - **Index >= `S.trCount`** (was not dragged) → orange, label "Still learning...", robot bubble 🤔.
- Once an item is revealed it cannot be tapped again.

---

## Persistence / Restore

On `loadTraining()`:
- Items already dragged (`i < S.trCount`) are rendered as `used` immediately.
- Drop zone is repopulated from `DRAG_EMOJIS[0..S.trCount-1]`.
- If `S.trDone`: completion card, "Next" button, and test phase are all shown on load.

---

## Next Activity Button

After training completes (or on re-load if already done), `#tr-next-btn` is shown with label from `t('tr_next_quiz')` and navigates to `quiz-intro`.

---

## State
| Field | Change |
|---|---|
| `S.trCount` | +1 per dropped item |
| `S.trDone` | `true` when training animation reaches 100% |
| `S.xp` | +150 on training complete |
| `S.badges` | `robot-trainer`, `data-detective` added |

---

## Translations
`tr_title`, `tr_sub`, `tr_dp`, `tr_rp`, `tr_hint`, `tr_added`, `tr_drop`, `tr_prog`, `tr_start`, `tr_going`, `tr_done_btn`, `tr_done_title`, `tr_done_desc`, `tr_toast`, `tr_test_title`, `tr_test_sub`, `tr_known`, `tr_unknown`, `tr_next_quiz`

## Acceptance Criteria
- [ ] "Start Training!" is disabled until at least 1 item is dropped
- [ ] Dropped items are marked as used and cannot be dragged again
- [ ] Touch drag works on mobile (ghost follows finger, drop detected by coordinates)
- [ ] Progress bar animates smoothly to 100%
- [ ] Test phase distinguishes items that were trained vs. not trained
- [ ] All state is correctly restored on screen re-visit
- [ ] "Next: Take the Quiz!" button appears after training completes
