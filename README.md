# 🤖 AI Lab for Kids!

A gamified, single-page web app that teaches children about Artificial Intelligence through interactive missions, drag-and-drop training, and a quiz. No build tools or dependencies — just open `index.html` in a browser.

---

## Features

- **3 Mission Activities** — themed mini-games that each unlock a badge and +75 XP
- **Robot Training Workshop** — drag-and-drop data into a robot brain, then test what it learned
- **AI Quiz** — 5 questions with hints, per-answer feedback, and a results celebration
- **10 Badges** — earned by completing activities and hitting milestones
- **6 Progression Levels** — from Junior Scientist up to AI Genius, driven by XP
- **Bilingual** — full English / French support with a flag toggle
- **Persistent progress** — state saved to `localStorage`, survives page refresh
- **"Next Activity" flow** — after each completion a button guides to the next activity (Health → Planet → Helper → Training → Quiz → Badges)

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
| Quiz (any score) | 5 questions, +50 XP per correct answer | +100 base | quiz-starter |
| Quiz perfect score | Score 5/5 | +200 bonus | ai-genius |

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
  quizBest: -1,    // Best quiz score (–1 = never played)
  qScore: 0,       // Current quiz session score
  qCurrent: 0,     // Current question index
  qAnswered: false,
  hintUsed: false
}
```

---

## Tech Stack

- Vanilla HTML, CSS, JavaScript — no frameworks, no build step
- Google Fonts (Nunito)
- `localStorage` for persistence
