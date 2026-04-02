# Specs Index

This folder contains feature specifications for AI Lab for Kids. Write or update a spec here **before** developing a new feature or making a significant change.

## Existing Specs

| File | Feature |
|---|---|
| [spec-01-app-shell.md](spec-01-app-shell.md) | Architecture, global state, routing, persistence |
| [spec-02-onboarding.md](spec-02-onboarding.md) | Splash screen + profile creation |
| [spec-03-dashboard.md](spec-03-dashboard.md) | Main hub, XP display, navigation cards |
| [spec-04-missions.md](spec-04-missions.md) | Mission list, detail, completion flow, next-activity button |
| [spec-05-game-health-hero.md](spec-05-game-health-hero.md) | Health Hero matching mini-game |
| [spec-06-game-planet-protector.md](spec-06-game-planet-protector.md) | Planet Protector sorting mini-game |
| [spec-07-game-smart-helper.md](spec-07-game-smart-helper.md) | Smart Helper scenario mini-game |
| [spec-08-training-workshop.md](spec-08-training-workshop.md) | Drag-and-drop robot training + test phase |
| [spec-09-quiz.md](spec-09-quiz.md) | Quiz questions, scoring, hints, results |
| [spec-10-badges-progression.md](spec-10-badges-progression.md) | Badges, XP levels, progression system |
| [spec-11-i18n.md](spec-11-i18n.md) | Bilingual support (EN/FR), language toggle |
| [spec-12-sound-effects.md](spec-12-sound-effects.md) | Sound effects — button clicks, correct/wrong, completions, badges |
| [spec-13-reset.md](spec-13-reset.md) | Reset / New User — wipe progress and start fresh |
| [spec-14-drag-drop-games.md](spec-14-drag-drop-games.md) | Drag-and-drop for Health Hero & Planet Protector mini-games |
| [spec-15-quiz-more-questions.md](spec-15-quiz-more-questions.md) | Expanded 10-question pool with random 5-per-run sampling |
| [spec-16-quiz-replay-xp.md](spec-16-quiz-replay-xp.md) | +25 XP replay bonus for quiz runs 2–4 |
| [spec-17-mission-replay-xp.md](spec-17-mission-replay-xp.md) | +25 XP session replay bonus for completed mission mini-games |
| [spec-18-accessibility.md](spec-18-accessibility.md) | ARIA labels, live regions, keyboard drag-and-drop (Training) |
| [spec-19-age-modes.md](spec-19-age-modes.md) | 3 independent age modes (Junior/Explorer/Expert), mode-select screen, isolated storage |
| [spec-20-junior-mode.md](spec-20-junior-mode.md) | Junior (4-8) content: simplified quiz, 3-pair Health Hero, 6-item Planet Sort, 4 levels |
| [spec-21-expert-mode.md](spec-21-expert-mode.md) | Expert (12-14) content: deep quiz, 6-pair Health Hero, 4-cat Planet Sort, 7 levels, 4 badges |
| [spec-22-game-bias-detector.md](spec-22-game-bias-detector.md) | Expert game: Spot the Bias — classify AI decisions as Biased/Fair/Uncertain |
| [spec-23-game-adversarial.md](spec-23-game-adversarial.md) | Expert game: Adversarial Challenge — find the modification that fools an AI |
| [spec-24-read-aloud.md](spec-24-read-aloud.md) | Read Aloud — browser TTS via `speechSynthesis`, no API keys, EN/FR voices |
| [spec-25-game-labyrinth.md](spec-25-game-labyrinth.md) | Robot Navigator — maze game teaching AI pathfinding/navigation, all 3 modes |
| [spec-26-badge-navigation.md](spec-26-badge-navigation.md) | Badge click navigation — clicking a badge goes to its related activity |
| [spec-27-badge-info-popup.md](spec-27-badge-info-popup.md) | Badge info popup — badges without nav show a popup with description + TTS |

## Spec Format

Each spec should include:

```markdown
# Spec XX — Feature Name

## Goal
Why this feature exists.

## Behaviour
How it works in detail.

## State
Which fields in S are read/written.

## Translations
Which keys in data.js T are needed.

## Acceptance Criteria
- [ ] Testable, observable conditions
```
