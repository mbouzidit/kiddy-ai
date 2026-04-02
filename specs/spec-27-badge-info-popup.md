# Spec 27 — Badge Info Popup

## Goal
Make every badge interactive. Badges linked to an activity navigate to it (existing behaviour). Badges with no navigable destination show an info popup explaining how to earn the badge, and read it aloud if TTS is enabled.

---

## Behaviour

### Click rules
| Badge has nav destination | Behaviour |
|---|---|
| Yes | Navigate immediately (unchanged) |
| No | Show badge info popup + speak |

Badges without a destination: `first-steps`, `neural-master`, `ethics-guardian`.

All badges show pointer cursor + hover scale (already applied).

### Popup content
- Badge icon (coloured if earned, grey if locked)
- Badge name
- Status: "✅ Earned!" or "🔒 Not yet earned"
- "HOW TO EARN:" label
- Description (how to earn it, or "Coming soon…" for unbuilt badges)

### TTS
`speak()` is called with `"<name>. <desc>"` when the popup opens.  
Cancelled when the popup closes.

### Dismiss
- Click the ✕ button
- Click the overlay background

---

## Data changes

`desc` and `desc_fr` fields added to every entry in `BADGES` and `BADGES_EXPERT` in `data.js`.

---

## State
No state changes — display only.

---

## Translations
Three new keys in `T`:
- `bdg_popup_earned` — "✅ Earned!" / "✅ Obtenu !"
- `bdg_popup_locked` — "🔒 Not yet earned" / "🔒 Pas encore obtenu"
- `bdg_popup_how` — "How to earn:" / "Comment l'obtenir :"

---

## Acceptance Criteria
- [ ] Clicking a badge with a nav destination still navigates (no popup)
- [ ] Clicking `first-steps`, `neural-master`, `ethics-guardian` shows popup
- [ ] Popup shows correct icon colour (earned = badge colours, locked = grey)
- [ ] Popup shows correct status label (earned / locked)
- [ ] Popup shows description in the current language (EN/FR)
- [ ] TTS enabled → popup opening reads name + description aloud
- [ ] TTS disabled → popup opens silently
- [ ] Clicking overlay background closes popup and stops speech
- [ ] Clicking ✕ button closes popup and stops speech
