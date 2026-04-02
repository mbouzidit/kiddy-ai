# Spec 04 — Missions System

## Goal
Three themed missions each teach a real-world AI application through a short fact sheet and an embedded mini-game. Completing a mission awards XP and a badge. Completing all three gives a bonus badge.

---

## Mission List Screen

- Shows 3 mission cards: Health Hero, Planet Protector, Smart Helper.
- Each card shows a pill badge: "+75 XP · Learn More →" if not completed, "✅ Completed!" if done.
- Earning the `ai-explorer` badge is triggered on first visit to this screen.

---

## Mission Detail Screen (dynamic)

Built entirely via `innerHTML` in `showMission(id)`. Contains:
1. **Hero banner** — gradient background, icon, title, back button (→ `missions`).
2. **Fact cards** — 3–4 info cards with icon, heading, and paragraph.
3. **"Play the Mini-Game!" button** — launches the game inline; disabled and labelled "✅ Already Completed!" if mission is done.
4. **Inline game area** (`#md-game`) — hidden until game is launched; fact section is hidden when game is shown.

---

## Completion Flow

`completeMission(id)`:
1. Guard: if `S.missions` already includes `id`, return immediately (no double-reward).
2. Push `id` to `S.missions`.
3. Award +75 XP, earn the mission's badge, show toast, call `save()`.
4. If `S.missions.length >= 3`: after 1.4 s, earn `mission-master` badge + 100 XP bonus.
5. After 0.8 s, call `_showNextMissionBtn(id)` — appends a "Next Activity" button.

### Next Activity Button (`_showNextMissionBtn`)
| Completed mission | Button text | Destination |
|---|---|---|
| `health` | "Next: Planet Protector →" | `showMission('planet')` |
| `planet` | "Next: Smart Helper →" | `showMission('helper')` |
| `helper` | "Next: Training Workshop →" | `nav('training')` |

---

## Missions Data (`MISSIONS_DATA` in `data.js`)

Each entry: `{ title, title_fr, ico, grad, facts, facts_fr, badge }`

| ID | Icon | Badge |
|---|---|---|
| `health` | 🏥 | `health-hero` |
| `planet` | 🌱 | `planet-pro` |
| `helper` | 🤝 | `smart-helper` |

---

## State
| Field | Change |
|---|---|
| `S.missions` | ID pushed on completion |
| `S.xp` | +75 per mission, +100 bonus for all 3 |
| `S.badges` | Mission badge + `mission-master` when all 3 done |

---

## Translations
`m_title`, `m_sub`, `m_h_ttl`, `m_h_desc`, `m_p_ttl`, `m_p_desc`, `m_s_ttl`, `m_s_desc`, `mis_pill`, `mis_done`, `mis_btn`, `mis_btn_done`, `mis_btn_after`, `mis_toast`, `mis_master`, `mg_play`, `mg_done`, `mis_next_planet`, `mis_next_helper`, `mis_next_training`

## Acceptance Criteria
- [ ] Mission pill shows "✅ Completed!" after completion across sessions
- [ ] `completeMission` is idempotent — calling it twice has no effect
- [ ] "Next Activity" button appears ~0.8 s after completing the game
- [ ] Completing all 3 missions triggers `mission-master` badge and +100 XP bonus
- [ ] `ai-explorer` badge is earned on first visit to the missions list
