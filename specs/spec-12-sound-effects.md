# Spec 12 — Sound Effects

## Goal
Add audio feedback to make the app more engaging and encouraging for kids. Sounds play on button clicks and on key completion moments to reward progress.

---

## Approach

Use the **Web Audio API** to synthesise all sounds programmatically — no audio files, no external assets, no build step. A single `js/sound.js` module exposes a `playSound(name)` function.

Sounds are generated as short synthesised tones (oscillator + envelope). Volume is kept low and friendly. The system must:
- Be completely optional — if Web Audio API is unavailable, fail silently
- Respect a global mute toggle the player can switch on/off
- Persist mute preference in `S.muted` (saved to localStorage)

---

## Sound Inventory

| Name | Trigger | Character |
|---|---|---|
| `click` | Any button tap/click | Short soft tick |
| `correct` | Correct answer (quiz, games) | Rising two-tone ding |
| `wrong` | Wrong answer | Low short buzz |
| `complete` | Mission complete, training complete | Short upward fanfare (3 notes) |
| `badge` | Badge earned | Bright chime |
| `levelup` | XP crosses a new level threshold | Ascending sparkle run |

---

## Mute Toggle

- A 🔊/🔇 button added to the top bar (next to the language toggle).
- Clicking it toggles `S.muted` and updates the icon.
- When muted, `playSound()` returns immediately without producing audio.
- Default: unmuted.

---

## Integration Points

| File | Change |
|---|---|
| `js/sound.js` | New file — Web Audio engine + `playSound(name)` |
| `js/state.js` | Add `muted: false` to `S` |
| `index.html` | Add mute button to top bar; add `<script src="js/sound.js">` |
| `js/utils.js` | Call `playSound('badge')` inside `earn()` |
| `js/games/health.js` | `playSound('correct'/'wrong')` on match result |
| `js/games/planet.js` | `playSound('correct'/'wrong')` on sort result |
| `js/games/helper.js` | `playSound('correct'/'wrong')` on scenario pick |
| `js/screens/missions.js` | `playSound('complete')` inside `completeMission()` |
| `js/screens/training.js` | `playSound('complete')` when training reaches 100% |
| `js/screens/quiz.js` | `playSound('correct'/'wrong')` in `checkAnswer()`; `playSound('complete')` in `finishQuiz()` |
| `js/utils.js` | `playSound('levelup')` when `addXP()` causes a level change |
| `css/base.css` | Style for mute button (mirrors `.lang-btn`) |

---

## State
| Field | Type | Default |
|---|---|---|
| `S.muted` | boolean | `false` |

---

## Acceptance Criteria
- [ ] All sounds play on their triggers when unmuted
- [ ] No sound plays when `S.muted === true`
- [ ] Mute state persists across page reload
- [ ] App works normally with no audio errors when Web Audio API is unavailable
- [ ] Mute button icon reflects current state (🔊 / 🔇)
- [ ] No audio files are added — all sounds are synthesised via Web Audio API
