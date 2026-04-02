# Spec 19 — Age Modes: Junior / Explorer / Expert

## Goal

Give users a choice of 3 independent age-appropriate modes at the very start of the app. Each mode has its own profile, progress, content, and XP path. Switching modes does not erase other modes' progress.

## Behaviour

### Mode Select Screen
- Shown when no saved profile exists for any mode (first run), or on return from splash when no active mode has a complete profile
- 3 large cards: 🐣 Junior (4-8), 🚀 Explorer (8-12), 🧠 Expert (12-14)
- Selecting a card calls `setMode(m)` then navigates to `profile`

### Returning Users
- On startup, `main.js` reads `localStorage('ailab_mode')` → sets `_mode`
- Then calls `load()` to populate S
- If `S.name` is set → `nav('dashboard')` directly
- Else → `nav('splash')`

### Splash
- "Start Adventure!" button → `nav('mode-select')` (not profile directly)

### Reset
- `doReset()` wipes only the **active** mode's state
- Navigates to `nav('splash')` so the user can pick a mode again (or re-enter the same one)

## State

| Field | Change |
|---|---|
| `_mode` | Module-level `let` in `state.js` — not persisted in S, but in `localStorage('ailab_mode')` |

No change to the `S` object shape.

## Storage Keys

| Mode | localStorage key |
|---|---|
| `'junior'` | `ailab_v4_junior` |
| `'explorer'` | `ailab_v4` (backward-compatible) |
| `'expert'` | `ailab_v4_expert` |
| Active mode pointer | `ailab_mode` |

## Translations

| Key | EN | FR |
|---|---|---|
| `ms_title` | `"Who's Playing Today?"` | `"Qui joue aujourd'hui ?"` |
| `ms_sub` | `"Choose your learning level"` | `"Choisis ton niveau d'apprentissage"` |
| `ms_junior` | `"🐣 Junior"` | `"🐣 Junior"` |
| `ms_junior_sub` | `"Ages 4–8 · Simple & fun"` | `"4–8 ans · Simple et amusant"` |
| `ms_explorer` | `"🚀 Explorer"` | `"🚀 Explorateur"` |
| `ms_explorer_sub` | `"Ages 8–12 · Learn & discover"` | `"8–12 ans · Apprendre et découvrir"` |
| `ms_expert` | `"🧠 Expert"` | `"🧠 Expert"` |
| `ms_expert_sub` | `"Ages 12–14 · Deep & challenging"` | `"12–14 ans · Profond et challengeant"` |

## New Files

- `js/screens/mode-select.js` — `initModeSelect()` function
- `#screen-mode-select` in `index.html`

## Acceptance Criteria

- [ ] Mode-select screen shows 3 cards with names and age ranges
- [ ] Selecting Junior/Explorer/Expert sets `_mode` and navigates to profile
- [ ] Each mode's progress is stored in a separate localStorage key
- [ ] Splash "Start Adventure!" → mode-select (not directly to profile)
- [ ] On return: if `S.name` exists for current mode → go straight to dashboard
- [ ] Reset only affects active mode; other modes' data untouched
- [ ] EN/FR translations work on mode-select screen
