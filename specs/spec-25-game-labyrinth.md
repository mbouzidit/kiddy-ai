# Spec 25 — Robot Navigator (Labyrinth Game)

## Goal

Add a robot-navigation maze game that teaches how AI agents perceive and move through environments — the foundation of self-driving cars, delivery robots, and autonomous drones.

---

## Behaviour

### Game Overview

The player guides a robot (🤖) through a grid maze to reach the exit (🏁). Each move teaches that AI must evaluate its surroundings and choose the best path — just like real autonomous robots do.

### Game Entry Point

- Appears as the 4th mission card (after Smart Helper) on the Missions screen for **all three modes**
- Mission ID: `'labyrinth'`
- Badge ID: `'nav-master'`
- Card gradient: `linear-gradient(135deg,#1A237E,#7E57C2)`
- Card icon: 🤖

### Grid & Difficulty

| Mode | Grid | Walls | Feature |
|------|------|-------|---------|
| Junior | 5×5 | Few, pre-defined paths | "Hint" button shows next step |
| Explorer | 8×8 | Moderate complexity | Move counter shown |
| Expert | 12×12 | Dense walls | Fog-of-war: only tiles within 1 step of player are visible |

### Maze Representation

Mazes are stored as 2D arrays of 0 (open) and 1 (wall). Player starts at `[0,0]`, exit at `[rows-1, cols-1]`. Multiple maze variants can be stored per mode; one is picked at random each play.

### Controls

- **Keyboard:** Arrow keys (↑ ↓ ← →)
- **Mobile / touch:** On-screen d-pad (▲ ▼ ◀ ▶ buttons rendered below the maze)
- Movement is blocked by walls and grid boundaries
- Keyboard listener is added on game start and removed on completion / nav away

### Expert Fog-of-War

All tiles start with class `lab-fog` (visually hidden). On each move, tiles within Manhattan distance ≤ 1 of the player are revealed (class removed). Previously revealed tiles stay revealed.

### Junior Hint

A "💡 Hint" button runs a simple BFS from player position to exit and highlights the next step tile with class `lab-hint` for 1 second.

### Completion

When the robot reaches the exit tile:
1. Play success sound (`playWin()`)
2. Display in-game message with move count (Explorer/Expert)
3. Call `completeMission('labyrinth')` — awards 75 XP + `nav-master` badge (first time), or 25 XP replay bonus (subsequent times)
4. Show "Back to Missions" button: `nav('missions')`

### Next-Mission Chain

In `_showNextMissionBtn()` in `missions.js`, extend `nextMap`:
```js
{ health: 'planet', planet: 'helper', helper: 'labyrinth' }
```

---

## State

| Field | Usage |
|-------|-------|
| `S.missions` | Checked/pushed with `'labyrinth'` id |
| `S.xp` | Incremented via `addXP()` |
| `S.badges` | Extended via `earn('nav-master')` |

No new persistent state fields are needed.

---

## New Data

### `MISSIONS_DATA` entry (all three mode objects)

```js
labyrinth: {
  id:'labyrinth', badge:'nav-master',
  grad:'linear-gradient(135deg,#1A237E,#7E57C2)',
  icon:'🤖', title:'Robot Navigator', title_fr:'Navigateur Robot',
  facts: [ /* 3 AI/robotics fact cards */ ],
  facts_fr: [ /* French versions */ ]
}
```

### `BADGES` entry

```js
{ id:'nav-master', ico:'🤖', en:'Nav Master', fr:'Maître Navigateur',
  desc_en:'Guided the robot through the maze!',
  desc_fr:'Tu as guidé le robot dans le labyrinthe !' }
```

### Maze data

```js
const LABYRINTH_JUNIOR = [ /* one or more 5×5 arrays */ ];
const LABYRINTH_EXPLORER = [ /* one or more 8×8 arrays */ ];
const LABYRINTH_EXPERT = [ /* one or more 12×12 arrays */ ];
const LABYRINTH_BY_MODE = { junior: LABYRINTH_JUNIOR, explorer: LABYRINTH_EXPLORER, expert: LABYRINTH_EXPERT };
```

---

## Translations

Keys to add to `T` in `data.js` (both `en` and `fr`):

| Key | EN | FR |
|-----|----|----|
| `lab_title` | Robot Navigator | Navigateur Robot |
| `lab_inst` | Guide the robot 🤖 to the exit 🏁! | Guide le robot 🤖 vers la sortie 🏁 ! |
| `lab_hint_btn` | 💡 Hint | 💡 Indice |
| `lab_moves` | Moves: | Déplacements : |
| `lab_win` | Amazing! Robot reached the exit! | Incroyable ! Le robot a atteint la sortie ! |
| `lab_fog_info` | Expert: only nearby tiles visible | Expert : seules les cases proches sont visibles |
| `lab_back` | Back to Missions | Retour aux Missions |

---

## Files Changed

| File | Change |
|------|--------|
| `js/data.js` | Maze arrays, mission entries ×3, badge, translations |
| `js/games/labyrinth.js` | New game module |
| `js/screens/missions.js` | Dispatcher + nextMap |
| `index.html` | Mission card + `<script>` tag |
| `css/games.css` | Maze grid + tile styles + d-pad |
| `README.md` | Document new game |

---

## Acceptance Criteria

- [ ] Labyrinth mission card appears on Missions screen in Junior, Explorer, and Expert modes
- [ ] Mission detail shows 3 fact cards with EN/FR content
- [ ] Clicking "Play" renders the maze with correct grid size per mode
- [ ] Arrow keys move the robot; walls and boundaries block movement
- [ ] On-screen d-pad works on mobile / touch
- [ ] Reaching the exit triggers win state: XP, badge, toast
- [ ] Re-playing awards 25 XP replay bonus (once per session)
- [ ] Expert mode: non-adjacent tiles are fogged; they reveal on approach
- [ ] Junior mode: hint button highlights the next correct step
- [ ] Explorer mode: move counter is displayed
- [ ] "Back to Missions" button after completion returns to missions screen
- [ ] `helper → labyrinth` next-mission button appears after completing Smart Helper
- [ ] All strings appear correctly in both EN and FR
- [ ] No hardcoded display strings — all use `t()` or `S.lang` fallback
