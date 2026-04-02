# 🤖 AI Lab for Kids!

A gamified, single-page web app that teaches children about Artificial Intelligence through interactive missions, drag-and-drop training, and a quiz. No build tools or dependencies — just open `index.html` in a browser.

---

## Features

- **3 Mission Activities** — themed mini-games that each unlock a badge and +75 XP; replaying awards +25 XP (once per session)
- **Robot Training Workshop** — drag-and-drop data into a robot brain, train to 100%, then test what it learned (with completion summary)
- **AI Quiz** — 10-question pool, 5 sampled randomly per run; hints, per-answer feedback, results celebration; +25 XP replay bonus for runs 2–4
- **10 Badges** — earned by completing activities and hitting milestones
- **6 Progression Levels** — from Junior Scientist up to AI Genius (max: 1,075 XP with perfect play reaches Level 5 "AI Master")
- **Bilingual** — full English / French support with a flag toggle
- **Persistent progress** — state saved to `localStorage`, survives page refresh
- **"Next Activity" flow** — after each completion a button guides to the next activity (Health → Planet → Helper → Training → Quiz → Badges)
- **Sound effects** — synthesised audio feedback via Web Audio API (no audio files): button clicks, correct/wrong answers, completions, badge earned, level-up
- **Mute toggle** — 🔊/🔇 button in the top bar, preference saved to localStorage
- **Reset progress** — wipe all progress and start fresh from the dashboard; language and sound preferences are preserved
- **Accessibility** — ARIA labels on all interactive elements, `aria-live` toast notifications, keyboard navigation in bottom nav and Training Workshop drag-and-drop

---

## Getting Started

```bash
# No install needed — just serve the files
npx serve .
# or open index.html directly in your browser
```

---

## Project Structure

```
kiddy-ai/
├── index.html              # App shell — all 10 screens
├── css/
│   ├── base.css            # Variables, reset, shared components
│   ├── screens.css         # Per-screen styles
│   └── games.css           # Mini-game styles
└── js/
    ├── data.js             # All constants: translations (EN/FR), levels, badges, quiz questions, mission data
    ├── state.js            # Global state object S + localStorage save/load
    ├── utils.js            # XP, badge earning, toast notifications, confetti
    ├── i18n.js             # t() helper + applyLang() to re-render on language switch
    ├── nav.js              # Screen routing (nav, onLoad)
    ├── main.js             # App entry point
    ├── screens/
    │   ├── splash.js       # Animated welcome screen
    │   ├── profile.js      # Name + avatar picker
    │   ├── dashboard.js    # Main hub
    │   ├── missions.js     # Mission list, launcher, completion flow
    │   ├── training.js     # Drag-and-drop training + test phase
    │   ├── quiz.js         # Quiz questions, scoring, results
    │   └── badges.js       # Achievement gallery
    └── games/
        ├── health.js       # Health Hero — match AI solutions to health problems
        ├── planet.js       # Planet Protector — sort AI tools into categories
        └── helper.js       # Smart Helper — pick the right AI for each scenario
```

---

## Screens & Flow

```
Splash → Profile → Dashboard
                      ├─ Missions → Health Hero → Planet Protector → Smart Helper
                      ├─ Training Workshop
                      ├─ Quiz → Results
                      └─ Badges
```

---

## Activities & Rewards

| Activity | Mechanic | XP | Badge |
|---|---|---|---|
| Health Hero | Match 4 health problems to AI solutions | +75 | health-hero |
| Planet Protector | Sort 9 AI tools into 3 categories | +75 | planet-pro |
| Smart Helper | Pick the best AI tool for 3 scenarios | +75 | smart-helper |
| All 3 missions | Bonus for completing all missions | +100 | mission-master |
| Training Workshop | Drag 8 items into the robot brain, then train to 100% | +150 | robot-trainer, data-detective |
| Quiz (any score) | 5 of 10 questions sampled randomly, +50 XP per correct answer | +100 base | quiz-starter |
| Quiz perfect score | Score 5/5 | +200 bonus | ai-genius |
| Quiz replays (runs 2–4) | +25 XP per replay regardless of score | +25 | — |
| Mission replays | Replay a completed mission mini-game (once per session) | +25 | — |

---

## State Object

All progress lives in `S` (defined in `state.js`) and is persisted to `localStorage`:

```js
S = {
  name: '',         // Player name
  ava: '🧑',        // Selected avatar emoji
  xp: 0,           // Total XP
  lang: 'en',      // 'en' | 'fr'
  badges: [],      // Earned badge IDs
  missions: [],    // Completed mission IDs: ['health', 'planet', 'helper']
  trDone: false,   // Training completed
  trCount: 0,      // Items dragged (0–8)
  quizBest: -1,      // Best quiz score (–1 = never played)
  quizPlays: 0,      // Total completed quiz runs (used for replay XP cap)
  qScore: 0,         // Current quiz session score
  qCurrent: 0,       // Current question index
  qQuestions: [],    // Sampled 5-question subset for current quiz run
  qAnswered: false,
  hintUsed: false,
  muted: false        // Sound muted preference
}
```

---

## Specs

Feature specifications live in [`specs/`](specs/). Each major feature has a spec describing its goal, behaviour, state, translations, and acceptance criteria. See [`specs/README.md`](specs/README.md) for the full index.

New features must have a spec written and agreed upon **before** implementation begins.

---

## Tech Stack

- Vanilla HTML, CSS, JavaScript — no frameworks, no build step
- Google Fonts (Nunito)
- `localStorage` for persistence
