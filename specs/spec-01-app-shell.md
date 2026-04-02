# Spec 01 — App Shell, State & Routing

## Goal
A single-page application with no build step. All screens live in one `index.html` file and are shown/hidden via a JS router. Player progress is persisted across sessions using `localStorage`.

## Architecture

- **No framework, no bundler** — vanilla HTML, CSS, JavaScript.
- **One HTML file** — all 10 screens are `div.screen` elements; only one has the `active` class at a time.
- **Script load order** (hard dependency chain):
  1. `data.js` — constants and translations
  2. `state.js` — global state `S` + persistence
  3. `utils.js` — XP, badges, toast, confetti
  4. `i18n.js` — `t()` helper and `applyLang()`
  5. Screen modules (`splash`, `profile`, `dashboard`)
  6. Game modules (`health`, `planet`, `helper`) — must load before `missions.js`
  7. Remaining screens (`missions`, `training`, `quiz`, `badges`)
  8. `nav.js` — router
  9. `main.js` — entry point

## Global State (`S`)

Defined in `state.js`. All persistent data lives here.

```js
S = {
  name: '',         // Player name (string)
  ava: '🧑',        // Selected avatar emoji
  xp: 0,           // Total XP earned
  lang: 'en',      // Active language: 'en' | 'fr'
  badges: [],      // Array of earned badge IDs
  missions: [],    // Completed mission IDs: 'health' | 'planet' | 'helper'
  trDone: false,   // Training completed
  trCount: 0,      // Items dragged into robot brain (0–8)
  quizBest: -1,    // Best quiz score (-1 = never played)
  qScore: 0,       // Current quiz session score
  qCurrent: 0,     // Current question index
  qAnswered: false,// Whether current question is answered
  hintUsed: false  // Whether hint was used this quiz session
}
```

`save()` serialises `S` to `localStorage`. `load()` restores it on startup.

## Routing

`nav(id)` in `nav.js`:
1. Removes `active` from the current screen.
2. Adds `active` to `#screen-{id}`.
3. Calls `onLoad(id)` to trigger the screen's init function.
4. Updates the active state on the bottom navigation bar.

`NAV_MAP` maps each screen ID to its bottom-nav item ID.

## Screens

| Screen ID | Description |
|---|---|
| `splash` | Animated welcome screen |
| `profile` | Name input + avatar picker |
| `dashboard` | Main hub with 4 activity cards |
| `missions` | List of 3 mission cards |
| `mission-detail` | Dynamic mission detail + embedded game (innerHTML) |
| `training` | Drag-and-drop robot training |
| `quiz-intro` | Quiz rules and best score |
| `quiz` | Active quiz (questions) |
| `quiz-results` | Score celebration |
| `badges` | Achievement gallery |

## Acceptance Criteria
- [ ] Only one screen is visible at a time
- [ ] Navigating to a screen always triggers its `onLoad` callback
- [ ] All state changes call `save()` before the function returns
- [ ] On hard reload, `S` is restored from `localStorage` and the app starts at splash
