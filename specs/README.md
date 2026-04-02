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
