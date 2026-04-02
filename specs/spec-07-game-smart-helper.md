# Spec 07 — Mini-Game: Smart Helper

## Goal
Teach players about AI assistive technology by presenting 3 character scenarios and asking the player to pick the best AI tool for each situation.

---

## Mechanic

**Linear scenario flow** — one scenario at a time:
1. Scenario card shows: character emoji, situation description, 3–4 option buttons.
2. Player taps an option:
   - **Correct** → button turns green, toast "Correct! ✅", score increments.
   - **Wrong** → tapped button turns red, correct button is revealed green after 350 ms, toast "Not quite…".
   - All buttons disabled after any selection.
3. The explanation text (`sc-expl`) and "Next →" button slide in after answering.
4. Player taps "Next →" to advance (`scNext()`).
5. On the last scenario, the "Next" button label changes to "🎉 You helped everyone!".
6. After the last `scNext()` call, the scenario area is hidden and `#sc-final` is shown with the success banner and complete button.

---

## Data (`HELPER_SCENARIOS` in `data.js`)

3 scenarios, each with:
```js
{
  char: '👩‍🦯',          // Character emoji
  en: '...',           // Situation description (English)
  fr: '...',           // Situation description (French)
  opts: [              // Answer options
    { en, fr, ok: true/false }
  ],
  expl: { en, fr }     // Explanation shown after answering
}
```

Each scenario has exactly one `ok: true` option.

---

## Completion

The complete button in `#sc-final` calls `completeMission('helper')`. If already done, button is replaced with "✅ Mission Already Completed!".

---

## State touched
`scState` (module-level, not persisted): `{ current, score, answered }`
Completion handled by `completeMission('helper')`.

---

## Translations
`sg_title`, `sg_inst`, `sg_of`, `sg_correct`, `sg_wrong`, `sg_done`, `sg_next`, `mis_btn`, `mis_btn_done`, `mis_btn_after`

## Acceptance Criteria
- [ ] One scenario is shown at a time
- [ ] All option buttons are disabled after first selection
- [ ] Correct answer is always revealed (even if player was wrong)
- [ ] Explanation appears after answering
- [ ] "Next" button label changes to completion text on the last scenario
- [ ] Final success screen appears after advancing past the last scenario
- [ ] Already-completed state shows disabled button
