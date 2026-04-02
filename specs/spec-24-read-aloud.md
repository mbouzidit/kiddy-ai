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

When TTS is **on**, the app automatically speaks:

| Trigger | Text spoken |
|---|---|
| Screen shown | Screen title (e.g. "Missions", "Quiz") |
| Quiz question rendered | The question text |
| Quiz feedback (correct/wrong) | "Correct!" / "Try again" |
| Mission detail opened | Mission title + first sentence of description |
| Game instruction panel | Instruction text |
| Badge awarded | "You earned the [badge name] badge!" |

### How it works

- Uses `window.speechSynthesis.speak(utterance)`.
- Each speak call cancels any previous utterance first (`speechSynthesis.cancel()`).
- `SpeechSynthesisUtterance.lang` is set from `S.lang`: `'en-US'` or `'fr-FR'`.
- A utility function `speak(text)` in `utils.js` handles the cancel + speak pattern.
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

- `js/state.js` — add `tts: false` default
- `js/utils.js` — add `speak(text)` helper
- `js/data.js` — add translation keys
- `js/nav.js` — add TTS toggle button
- `css/screens.css` — style TTS button (matches lang toggle)
- `js/screens/quiz.js` — call `speak()` on question render + feedback
- `js/screens/missions.js` — call `speak()` on mission detail open
- `js/screens/dashboard.js` — call `speak()` on screen show
- `js/games/*.js` — call `speak()` on instruction/result render

## Acceptance Criteria

- [ ] Speaker toggle button appears in nav, hidden if `speechSynthesis` unsupported
- [ ] Toggling persists across page reload
- [ ] Quiz questions are read aloud when TTS is on
- [ ] Quiz correct/wrong feedback is spoken
- [ ] Language switch mid-session changes the voice language immediately
- [ ] Cancels previous speech before starting a new one (no overlap)
- [ ] No errors when TTS is off or browser lacks support
