# Spec 10 — Badges & Progression

## Goal
Motivate players through a visible achievement system. Badges are earned by completing activities and milestones. XP accumulates across all activities and determines the player's level title.

---

## Badges Screen

- Header shows current level name and XP progress bar toward next level.
- Grid of all 10 badge cards.
- **Earned badges**: full colour, icon visible.
- **Locked badges**: grayed out, icon replaced with 🔒.

---

## Badge List (`BADGES` in `data.js`)

| ID | Name | How Earned |
|---|---|---|
| `first-steps` | First Steps | Create profile |
| `ai-explorer` | AI Explorer | Visit missions list for first time |
| `health-hero` | Health Hero | Complete Health Hero mission |
| `planet-pro` | Planet Pro | Complete Planet Protector mission |
| `smart-helper` | Smart Helper | Complete Smart Helper mission |
| `mission-master` | Mission Master | Complete all 3 missions |
| `robot-trainer` | Robot Trainer | Complete training (reach 100%) |
| `data-detective` | Data Detective | Complete training (reach 100%) |
| `quiz-starter` | Quiz Starter | Complete any quiz |
| `ai-genius` | AI Genius | Score 5/5 on quiz |

---

## Earning Badges (`earn(id)` in `utils.js`)

1. If `id` is already in `S.badges`, return (idempotent).
2. Push `id` to `S.badges`.
3. Show toast: "🏅 Badge earned: [badge name]".
4. `save()`.

---

## XP Levels (`LEVELS` in `data.js`)

6 tiers based on total XP:

| Level | Title (EN) | Title (FR) | XP Required |
|---|---|---|---|
| 0 | Junior Scientist | Scientifique Junior | 0 |
| 1 | AI Explorer | Explorateur IA | 200 |
| 2 | Data Detective | Détective Data | 500 |
| 3 | Robot Trainer | Entraîneur Robot | 800 |
| 4 | AI Master | Maître IA | 1200 |
| 5 | AI Genius! 🌟 | Génie IA ! 🌟 | 1600 |

`getLevel()` in `utils.js` returns the current level object based on `S.xp`.

> **Note**: Maximum earnable XP from all activities is ~1,075 XP, so level 5 (1600 XP) cannot be reached with the current activity set alone.

---

## XP Awards Summary

| Action | XP |
|---|---|
| Profile created | +50 |
| Each mission completed | +75 |
| All 3 missions (bonus) | +100 |
| Training completed | +150 |
| Each correct quiz answer | +50 |
| Quiz completion (base) | +100 |
| Perfect quiz score (5/5) | +200 |

**Maximum possible XP**: 50 + (3×75) + 100 + 150 + (5×50) + 100 + 200 = **1,075 XP**

---

## Progress Bar (Dashboard & Badges screens)

- Fills from current level's XP floor to next level's XP ceiling.
- Formula: `(S.xp - level.min) / (nextLevel.min - level.min) × 100%`
- At max level (AI Genius): bar is full, special message shown.

---

## State
| Field | Change |
|---|---|
| `S.badges` | IDs pushed by `earn()` |
| `S.xp` | Incremented by `addXP(n)` |

---

## Translations
`bdg_title`, `bdg_lvl_lbl`, `badge_prefix`

## Acceptance Criteria
- [ ] `earn()` is idempotent — calling it twice for the same badge has no effect
- [ ] Badge grid shows locked state for unearned badges
- [ ] XP progress bar updates immediately after earning XP
- [ ] Level title updates once XP crosses a threshold
- [ ] Toast fires when a badge is earned
