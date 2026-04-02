# Spec 02 — Onboarding (Splash + Profile)

## Goal
First-time players are welcomed with an animated splash screen, then asked to enter a name and pick an avatar before entering the app. This creates a personalised experience and gates the rest of the content.

---

## Screen: Splash

### Behaviour
- Animated background: floating circles and twinkling stars rendered on a canvas/DOM via `splash.js`.
- Displays the app title, tagline, and a "Start Adventure!" button.
- Clicking the button navigates to the `profile` screen.
- If the player already has a saved name, the button still goes to `profile` (no auto-skip on splash).

### Translations
`sp_sub`, `sp_tag`, `sp_btn`

---

## Screen: Profile

### Behaviour
- Player enters their name (2–20 characters).
- Player selects one avatar from a grid of 20 emoji characters (`AVATARS` array in `data.js`).
- The "Let's Go!" button is **disabled** until a valid name is entered.
- Pressing Enter in the name field triggers the same action as clicking the button.
- On submit (`createProfile()`):
  - `S.name` and `S.ava` are set.
  - +50 XP awarded.
  - `first-steps` badge earned.
  - `save()` called.
  - Navigates to `dashboard`.

### Validation
- Name must be at least 2 characters (trimmed).
- No avatar selection required to enable the button — a default avatar (`🧑`) is pre-selected.

### State
| Field | Set on |
|---|---|
| `S.name` | Profile submit |
| `S.ava` | Avatar click (defaults to `🧑`) |
| `S.xp` | +50 on submit |
| `S.badges` | `first-steps` added on submit |

### Translations
`pr_title`, `pr_sub`, `pr_ph` (input placeholder), `pr_ava`, `pr_btn`

## Acceptance Criteria
- [ ] "Let's Go!" is disabled when name field is empty or < 2 chars
- [ ] Pressing Enter submits the form
- [ ] Selected avatar is visually highlighted
- [ ] After submit, player lands on dashboard with their name and avatar visible
- [ ] `first-steps` badge is in `S.badges` after first profile creation
