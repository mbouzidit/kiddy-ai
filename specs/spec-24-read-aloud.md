# Spec 24 — Read Aloud (Text-to-Speech)

## Goal

Let kids (especially younger ones) hear instructions, questions, and feedback read aloud using the browser's built-in `speechSynthesis` API — no internet, no API keys, no cost.

## Behaviour

### Toggle

- A speaker button (`🔊` / `🔇`) lives in the top nav bar, next to the language toggle.
- Clicking it flips `S.tts` (boolean) and calls `save()`.
- State persists across sessions.
- Default: **off**.

### What gets read

**Auto-read** (fires when TTS is on, triggered by the app):

| Trigger | Text spoken |
|---|---|
| Any screen navigation | Previous speech cancelled; screen title spoken (250ms delay so game/quiz auto-reads win) |
| Quiz question rendered | The question text |
| Quiz feedback | "Correct!" / "Try again!" |
| Mission detail opened | Mission title |
| Mission fact card `🔊` button | Card heading + body (always works, bypasses S.tts via `speakOnce`) |
| Game started (Health/Planet/Helper) | Game instruction text |
| Game feedback (correct/wrong match) | "All matched!" / "Try again!" etc. |
| Expert game scenario rendered (Bias/Adversarial) | Scenario context + decision/question |
| Expert game feedback | "Correct!" / "Not quite…" |
| Badge awarded | "You earned the [badge name] badge!" |

**Tap-to-read** (fires on any click when TTS is on):

A single global click listener (capture phase) reads the text of any tapped element matching: `button`, `h1–h4`, `p`, `.match-lbl`, `.sort-item`, `.sc-desc`, `.game-inst`, `.game-title`, `.ms-mode-card`, `.fact-body`, `.opt-btn`, `.bs-btn`, `.sc-opt`, `.adv-btn`, `.nav-item`. Skips `#lang-toggle` and `.fact-speak-btn` (which handle their own speech).

Game feedback calls (`speak(feedback)`) fire in the onclick phase and cancel the button text (spoken in capture), so feedback always wins.

### How it works

- Uses `window.speechSynthesis.speak(utterance)`.
- Each `speak()` call cancels any previous utterance first (`speechSynthesis.cancel()`).
- `SpeechSynthesisUtterance.lang` is set from `S.lang`: `'en-US'` or `'fr-FR'`.
- `speak(text)` in `utils.js`: respects `S.tts` flag — no-op when off.
- `speakOnce(text)` in `utils.js`: always speaks regardless of `S.tts` — for explicit user-tap actions (fact card `🔊` buttons).
- `nav()` in `nav.js`: calls `speechSynthesis.cancel()` at start; schedules title speak with `setTimeout(..., 250)` after `onLoad`.
- If `S.tts` is false or `window.speechSynthesis` is not available, `speak()` is a no-op.

### Graceful degradation

- If the browser doesn't support `speechSynthesis`, the toggle button is hidden.

## State

| Field | Type | Default | Description |
|---|---|---|---|
| `S.tts` | boolean | `false` | TTS enabled flag |

## Translations

| Key | EN | FR |
|---|---|---|
| `tts_on` | `"Read aloud: on"` | `"Lecture à voix haute : activée"` |
| `tts_off` | `"Read aloud: off"` | `"Lecture à voix haute : désactivée"` |
| `tts_correct` | `"Correct!"` | `"Correct !"` |
| `tts_wrong` | `"Try again!"` | `"Réessaie !"` |
| `tts_badge` | `"You earned the {badge} badge!"` | `"Tu as gagné le badge {badge} !"` |

## Files changed

- `js/state.js` — `tts: false` default
- `js/utils.js` — `speak(text)`, `speakOnce(text)`, `toggleTts()`, `_applyTtsBtn()`; `earn()` speaks badge
- `js/data.js` — translation keys: `tts_correct`, `tts_wrong`, `tts_badge`, `a11y_tts_on/off`, `a11y_speak_card`
- `index.html` — `📖/📢` TTS toggle button in `#lang-toggle`
- `js/i18n.js` — `applyLang()` updates TTS button aria-label
- `js/main.js` — `_applyTtsBtn()` on init; global click-to-read listener (capture phase)
- `js/nav.js` — `_SCREEN_SPEAK` map; `speechSynthesis.cancel()` at nav start; title speak with 250ms delay
- `css/screens.css` — `.fact-speak-btn` styles; `position:relative` on `.fact-card`
- `js/screens/quiz.js` — `speak(qText)` on render; `speak(feedback)` on answer
- `js/screens/missions.js` — `speak(title)` on open; `🔊` per fact card via `speakOnce()` + event delegation
- `js/screens/dashboard.js` — `doReset()` preserves `tts`
- `js/games/health.js` — `speak(hg_inst)` on start; `speak(hg_done/hg_wrong)` on feedback
- `js/games/planet.js` — `speak(pg_inst)` on start; `speak(pg_done)` on complete
- `js/games/helper.js` — `speak(scenario)` on render; `speak(sg_correct/sg_wrong)` on pick
- `js/games/bias.js` — `speak(context + decision)` on render; `speak(bs_correct/bs_wrong)` on answer
- `js/games/adversarial.js` — `speak(context + question)` on render; `speak(adv_correct/adv_wrong)` on answer

## Acceptance Criteria

- [ ] `📖` toggle button appears in nav bar; hidden if `speechSynthesis` unsupported
- [ ] Toggling `S.tts` persists across page reload
- [ ] Navigating to any screen cancels ongoing speech; title is spoken 250ms later
- [ ] Quiz questions are read aloud when TTS is on
- [ ] Quiz answer feedback is spoken
- [ ] All game instructions are spoken when game starts
- [ ] Game correct/wrong feedback is spoken
- [ ] Expert game (Bias/Adversarial) scenario text is spoken on each round
- [ ] Fact card `🔊` buttons always work (regardless of S.tts toggle)
- [ ] Tapping any button/text when TTS is on reads it aloud
- [ ] Language switch changes the voice language immediately
- [ ] No speech overlap — each call cancels previous
- [ ] No errors when TTS is off or browser lacks support
