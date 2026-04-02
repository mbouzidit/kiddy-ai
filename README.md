# 🤖 AI Lab for Kids!

A gamified, single-page web app that teaches children about Artificial Intelligence through interactive missions, drag-and-drop training, and a quiz. No build tools or dependencies — just open `index.html` in a browser.

---

## Age Modes

The app supports **3 independent age modes**, each with its own profile, progress, and content:

| Mode | Ages | Quiz | Missions | Health Hero | Planet Sort | Levels |
|---|---|---|---|---|---|---|
| 🐣 Junior | 4–8 | 5 simplified TF/MC3 | 3 facts/mission | 3 pairs | 6 items, 2 categories | 4 levels |
| 🚀 Explorer | 8–12 | 5 of 10 sampled | 4 facts/mission | 4 pairs | 9 items, 3 categories | 6 levels |
| 🧠 Expert | 12–14 | 5 of 10 deep questions | 6 facts + ethics | 6 pairs | 12 items, 4 categories | 7 levels |

Modes are selected at the start (Splash → Mode Select → Profile → Dashboard). Each mode is **fully isolated** in localStorage — progress in one mode is unaffected by another.

Expert mode also includes two exclusive games: **Spot the Bias** and **Adversarial Challenge**.

---

## Features

- **3 Age Modes** — Junior (4–8), Explorer (8–12), Expert (12–14) with isolated profiles and content
- **4 Mission Activities** — themed mini-games that each unlock a badge and +75 XP; replaying awards +25 XP (once per session)
- **Robot Training Workshop** — drag-and-drop data into a robot brain, train to 100%, then test what it learned (with completion summary)
- **AI Quiz** — 5 questions sampled from a pool (5 for Junior, 10 for Explorer/Expert); hints, per-answer feedback, results celebration; +25 XP replay bonus for runs 2–4
- **Robot Navigator** — maze game (5×5 / 8×8 / 12×12 by mode): navigate the robot to the exit using arrow keys or d-pad; Expert fog-of-war; Junior hint button; earns `nav-master` badge + 75 XP
- **Expert: Spot the Bias** — 3 scenarios: label each AI decision as Biased / Fair / Uncertain; earn `bias-buster` badge + 100 XP
- **Expert: Adversarial Challenge** — 3 scenarios: pick which change fools the AI; earn `adversarial-pro` badge + 75 XP
- **10 Base Badges + 4 Expert Badges** — earned by completing activities and hitting milestones
- **Mode-specific Progression Levels** — Junior (4 levels), Explorer (6 levels), Expert (7 levels)
- **Bilingual** — full English / French support with a flag toggle
- **Persistent progress** — each mode's state saved to `localStorage` with mode-specific keys; `ailab_mode` pointer tracks active mode
- **"Next Activity" flow** — after each completion a button guides to the next activity
- **Sound effects** — synthesised audio feedback via Web Audio API (no audio files)
- **Mute toggle** — 🔊/🔇 button in the top bar, preference saved to localStorage
- **Reset progress** — wipes the current mode's progress only; other modes unaffected
- **Accessibility** — ARIA labels on all interactive elements, `aria-live` toast notifications, keyboard navigation in Training Workshop

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
├── index.html              # App shell — all screens
├── css/
│   ├── base.css            # Variables, reset, shared components
│   ├── screens.css         # Per-screen styles
│   └── games.css           # Mini-game styles
└── js/
    ├── data.js             # All constants: translations (EN/FR), levels, badges, quiz questions,
    │                       # mission data, and all mode-specific variants (*_BY_MODE)
    ├── state.js            # Global state S + mode-aware localStorage save/load
    ├── utils.js            # XP, badge earning, toast notifications, confetti
    ├── i18n.js             # t() helper + applyLang() to re-render on language switch
    ├── nav.js              # Screen routing (nav, onLoad)
    ├── main.js             # App entry point
    ├── screens/
    │   ├── splash.js       # Animated welcome screen
    │   ├── mode-select.js  # Age mode selection (Junior / Explorer / Expert)
    │   ├── profile.js      # Name + avatar picker
    │   ├── dashboard.js    # Main hub with mode-aware progress bar
    │   ├── missions.js     # Mission list, launcher, completion flow
    │   ├── training.js     # Drag-and-drop training + test phase
    │   ├── quiz.js         # Quiz questions, scoring, results
    │   └── badges.js       # Achievement gallery (shows Expert badges in Expert mode)
    └── games/
        ├── health.js       # Health Hero — match AI solutions to health problems (3/4/6 pairs by mode)
        ├── planet.js       # Planet Protector — sort AI tools into categories (2/3/4 cats by mode)
        ├── helper.js       # Smart Helper — pick the right AI for each scenario
        ├── labyrinth.js    # Robot Navigator — maze game (5×5/8×8/12×12, fog-of-war Expert, hint Junior)
        ├── bias.js         # Spot the Bias — Expert only (3 scenarios)
        └── adversarial.js  # Adversarial Challenge — Expert only (3 scenarios)
```

---

## App Flow

```
Splash
  └─ Mode Select (Junior / Explorer / Expert)
        └─ Profile (name + avatar)
              └─ Dashboard
                    ├─ Missions → Health Hero → Planet Protector → Smart Helper → Robot Navigator
                    │             └─ [Expert only] Bias Detector + Adversarial Challenge
                    ├─ Training Workshop
                    ├─ Quiz → Results
                    └─ Badges
```

---

## Activities & Rewards

| Activity | Mechanic | XP | Badge |
|---|---|---|---|
| Health Hero | Match health problems to AI solutions (3/4/6 pairs by mode) | +75 | health-hero |
| Planet Protector | Sort AI tools into categories (2/3/4 cats by mode) | +75 | planet-pro |
| Smart Helper | Pick the best AI tool for 3 scenarios | +75 | smart-helper |
| Robot Navigator | Navigate the maze (5×5/8×8/12×12 by mode) | +75 | nav-master |
| All 4 missions | Bonus for completing all missions | +100 | mission-master |
| Training Workshop | Drag 8 items into the robot brain, then train to 100% | +150 | robot-trainer, data-detective |
| Quiz (any score) | 5 questions sampled from pool, +50 XP per correct answer | +100 base | quiz-starter |
| Quiz perfect score | Score 5/5 | +200 bonus | ai-genius |
| Quiz replays (runs 2–4) | +25 XP per replay regardless of score | +25 | — |
| Mission replays | Replay a completed mission mini-game (once per session) | +25 | — |
| Spot the Bias *(Expert)* | Correctly label all 3 bias scenarios | +100 | bias-buster |
| Adversarial Challenge *(Expert)* | Correctly identify all 3 adversarial inputs | +75 | adversarial-pro |

---

## Storage Keys

| Mode | Key |
|---|---|
| Explorer | `ailab_v4` (backward-compatible) |
| Junior | `ailab_v4_junior` |
| Expert | `ailab_v4_expert` |
| Active mode pointer | `ailab_mode` |

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
  quizPlays: 0,    // Total completed quiz runs (used for replay XP cap)
  qScore: 0,       // Current quiz session score
  qCurrent: 0,     // Current question index
  qQuestions: [],  // Sampled 5-question subset for current quiz run
  qAnswered: false,
  hintUsed: false,
  muted: false     // Sound muted preference
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
