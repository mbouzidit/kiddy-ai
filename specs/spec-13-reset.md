# Spec 13 — Reset / New User

## Goal
Allow a player to wipe all progress and start fresh as a new user — useful for shared devices, kids wanting a clean start, or testing.

---

## Entry Point

A "Reset" button accessible from the **dashboard** (bottom of the page body, subtle styling so it is not accidentally tapped during normal play).

---

## Confirmation Step

Resetting is irreversible. Before wiping state, show an inline confirmation banner that replaces the reset button:

```
⚠️  [Cancel]  [Yes, reset everything]
```

- **Cancel** → banner disappears, reset button reappears, nothing changes.
- **Yes, reset everything** → wipe state, navigate to splash.

No native `confirm()` dialog — use an in-page UI element to stay consistent with the app's style.

---

## What Gets Reset

Everything in `S` is returned to its initial default:

```js
S = {
  name: '', ava: '🧑', xp: 0, lang: S.lang,  // keep language choice
  badges: [], missions: [],
  quizBest: -1, trDone: false, trCount: 0,
  qScore: 0, qCurrent: 0, qAnswered: false,
  hintUsed: false, muted: S.muted             // keep mute preference
}
```

`localStorage` entry is cleared and re-saved with defaults.

> Language and mute preferences are preserved — they are device preferences, not player progress.

---

## Post-Reset Flow

After reset:
1. `save()` persists the blank state.
2. `nav('splash')` — player lands on the welcome screen as if first visit.

---

## Translations

| Key | EN | FR |
|---|---|---|
| `reset_btn` | `🗑️ Reset Progress` | `🗑️ Réinitialiser` |
| `reset_confirm` | `All progress will be lost. Are you sure?` | `Toute la progression sera perdue. Êtes-vous sûr ?` |
| `reset_cancel` | `Cancel` | `Annuler` |
| `reset_yes` | `Yes, reset everything` | `Oui, tout réinitialiser` |

---

## Files to Change

| File | Change |
|---|---|
| `js/data.js` | Add 4 translation keys to `T.en` and `T.fr` |
| `js/screens/dashboard.js` | Add `showResetConfirm()` and `doReset()` functions |
| `index.html` | Add reset button + confirm banner to dashboard screen |
| `js/i18n.js` | Add `_t()` calls for reset button and confirm text in `applyLang()` |
| `css/screens.css` | Style for reset button and confirm banner |

---

## Acceptance Criteria
- [ ] Reset button is visible on the dashboard but visually de-emphasised
- [ ] Tapping reset shows an inline confirmation, does NOT reset immediately
- [ ] Cancel returns to normal dashboard state
- [ ] Confirm wipes all `S` fields except `lang` and `muted`, clears localStorage, navigates to splash
- [ ] After reset, profile screen is shown and player must enter name again
- [ ] Language and mute preference survive reset
