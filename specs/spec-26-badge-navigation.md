# Spec 26 — Badge Click Navigation

## Goal
Make badges actionable. When a child clicks a badge (earned or locked), they are taken directly to the activity that awards it — so they can complete it for the first time or replay it without manually navigating through menus.

---

## Behaviour

- Each badge that maps to a navigable activity becomes **clickable**.
- Clicking navigates immediately using the existing `nav()` or `showMission()` helpers.
- `first-steps` (profile creation) has no destination — it remains non-interactive.
- Clickable badges show a **pointer cursor** on hover and a subtle **scale-up** animation on the circle to signal interactivity.

### Badge → Destination mapping

| Badge ID | Destination |
|---|---|
| `first-steps` | _(none — already done at profile creation)_ |
| `ai-explorer` | `nav('missions')` |
| `health-hero` | `showMission('health')` |
| `planet-pro` | `showMission('planet')` |
| `smart-helper` | `showMission('helper')` |
| `nav-master` | `showMission('labyrinth')` |
| `mission-master` | `nav('missions')` |
| `data-detective` | `nav('training')` |
| `robot-trainer` | `nav('training')` |
| `quiz-starter` | `nav('quiz')` |
| `ai-genius` | `nav('quiz')` |
| `bias-buster` _(expert)_ | `showMission('bias')` |
| `adversarial-pro` _(expert)_ | `showMission('adversarial')` |

---

## Implementation

**`js/screens/badges.js`**
- Add a `BADGE_DEST` constant (outside `loadBadges`) mapping badge IDs to arrow functions.
- In `loadBadges()`, after building each `wrap` div, look up `BADGE_DEST[b.id]`. If found, add class `clickable` and attach a click listener.

**`css/screens.css`**
- `.bdg-item.clickable { cursor:pointer; }`
- `.bdg-item.clickable:hover .bdg-circle { transform:scale(1.12); }`

---

## State
No state changes — navigation only.

---

## Translations
No new keys required.

---

## Acceptance Criteria
- [ ] Clicking a mission badge opens the corresponding mission detail screen
- [ ] Clicking a training badge opens the training screen
- [ ] Clicking a quiz badge opens the quiz screen
- [ ] Clicking `first-steps` badge does nothing (no pointer cursor)
- [ ] Hovering a clickable badge shows pointer cursor and circle scales up
- [ ] Works correctly in all three age modes (Junior / Explorer / Expert)
- [ ] Expert-only badges (`bias-buster`, `adversarial-pro`) navigate to their missions in expert mode
