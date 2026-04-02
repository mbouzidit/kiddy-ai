# Spec 03 — Dashboard

## Goal
The main hub of the app. Shows the player's identity, current XP and level, a progress bar, and four cards that launch each major activity. Also displays a dynamic robot speech bubble ("Sparky") with rotating motivational messages.

---

## Layout

```
┌─────────────────────────────────┐
│  🤖 [Sparky message]   [ava] XP │
│  THE AI LAB DASHBOARD           │
│  Choose your mission, [name]!   │
│                                 │
│  [🌍 Missions] [🦾 Training]    │
│  [🎯 Quiz]     [🏆 Badges]      │
│                                 │
│  ▓▓▓▓▓▓░░░░  0 / 200 XP        │
└─────────────────────────────────┘
```

---

## Behaviour

### On Load (`loadDashboard`)
- Displays `S.ava` and `S.name`.
- Shows current XP chip (`⚡ {xp} XP`).
- Computes level via `getLevel()` and renders XP progress bar toward next level threshold.
- If player has reached max level, shows "MAX LEVEL" message instead of progress bar numbers.
- Picks a random message from `T[lang].sparky` array (substituting `{n}` with `S.name`) for the speech bubble.
- Animates floating lab background elements.

### Navigation Cards
| Card | Destination |
|---|---|
| 🌍 How AI Helps Us | `missions` |
| 🦾 Training Workshop | `training` |
| 🎯 AI Quiz Challenge | `quiz-intro` |
| 🏆 Achievement Gallery | `badges` |

### Progress Bar
- Fills proportionally between current level's XP floor and the next level's XP threshold.
- At max level the bar is full and shows a special message.

---

## State Read
`S.ava`, `S.name`, `S.xp`, `S.lang`

---

## Translations
`d_title`, `d_sect`, `dc1`–`dc4`, `d_prog_lbl`, `d_max`, `d_to`, `sparky[]`

## Acceptance Criteria
- [ ] Player name and avatar are visible on load
- [ ] XP chip reflects current `S.xp`
- [ ] Progress bar fills correctly relative to current level thresholds
- [ ] Sparky shows a different message each visit (random pick)
- [ ] All four cards navigate to the correct screens
