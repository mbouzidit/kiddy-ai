# Spec 17 — Mission Mini-Game Replay XP

## Goal

After completing a mission, the mini-game is still playable but awards no XP. A small session bonus encourages kids to replay games for practice without inflating persistent XP indefinitely.

## Behaviour

- Completing a mission mini-game for the **first time** awards +75 XP as before.
- **Replaying** a completed mission mini-game awards +25 XP **once per page session** (not persisted).
- "Once per session" is tracked via a plain JS `Set` of mission IDs replayed this session: `_replayedThisSession`.
- The toast for replay reads: `"🔄 Replay Bonus! +25 XP"` — reuses `res_replay_xp` key from spec-16.
- The replay bonus fires from `completeMission()`. Since `completeMission()` already guards first-time completion (`if (S.missions.includes(id)) return`), a parallel path handles the replay case.

## State

No persistent state changes. `_replayedThisSession` is a module-level `Set` in `missions.js`.

## Translations

Reuses `res_replay_xp` from spec-16 — no additional keys needed.

## Acceptance Criteria

- [ ] Replaying a completed mission mini-game the first time in a session awards +25 XP
- [ ] Replaying the same mission a second time in the same session awards no XP
- [ ] Session `Set` resets on page reload (no persistence)
- [ ] First-time completion still awards +75 XP + badge as before
- [ ] Works across all three games (health, planet, helper)
