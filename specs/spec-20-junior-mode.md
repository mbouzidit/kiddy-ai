# Spec 20 — Junior Mode (Ages 4-8)

## Goal

Provide a simplified, age-appropriate experience for young children (4-8 years). Shorter text, simpler mechanics, fewer choices, and a reachable XP path.

## Content Rules

- Quiz: TF and MC3 only (no MC4 — too many options)
- Questions: max 12 words each
- No technical vocabulary: no "reinforcement learning", "machine learning", "algorithm"
- Mission facts: 3 per mission (not 4), simple language
- Health Hero: 3 pairs (not 4)
- Planet Sort: 6 items, 2 categories (Energy + Ocean only)
- Training Workshop: unchanged (8 emojis, same)
- Smart Helper: unchanged (same 3 scenarios, language already child-friendly)

## Quiz — `QUESTIONS_JUNIOR`

| # | Type | EN text | Correct |
|---|---|---|---|
| 1 | TF | "AI can help doctors spot sickness really fast. True or False?" | true |
| 2 | TF | "Your phone understands your voice because of AI. True or False?" | true |
| 3 | MC3 | "How does a robot learn?" | 🔄 Trying again and again |
| 4 | TF | "AI is only found in big computers. True or False?" | false |
| 5 | TF | "AI can make songs and drawings all by itself. True or False?" | true |

All questions require full bilingual content (text_fr, expl, expl_fr, hint, hint_fr). MC3 needs opts + opts_fr.

## Games

### `HEALTH_PAIRS_JUNIOR` (3 pairs)
- Cancer in X-ray → AI Image Scanner
- Heart rate risk → AI Smart Watch
- Complex surgery → AI Surgery Robot
*(Drop: No medicine yet / AI Drug Discovery)*

### `PLANET_CATS_JUNIOR` (2 categories)
- Energy ⚡
- Oceans 🌊
*(Drop: Wildlife)*

### `PLANET_ITEMS_JUNIOR` (6 items, 3 per category)
- Energy: Solar Optimizer ☀️, Wind AI Grid 💨, CO₂ Monitor 🌡️
- Oceans: Plastic Drone 🚁, Turtle Tracker 🐢, Coral Monitor 🪸

## Levels — `LEVELS_JUNIOR`

```js
{ name:'Little Explorer',  name_fr:'Petit Explorateur',  min:0   }
{ name:'AI Discoverer',    name_fr:'Découvreur IA',      min:100 }
{ name:'Junior Scientist', name_fr:'Scientifique Junior', min:250 }
{ name:'AI Star! ⭐',      name_fr:'Étoile IA ! ⭐',    min:450 }
```

Max reachable XP with perfect play: ~750 → reaches "Junior Scientist" comfortably.

## State

Uses same `S` object fields. `_mode = 'junior'` routes all getters to Junior data.

## Acceptance Criteria

- [ ] Junior quiz only shows TF and MC3 questions from `QUESTIONS_JUNIOR`
- [ ] Junior Health Hero shows exactly 3 pairs
- [ ] Junior Planet Sort shows 6 items and 2 categories
- [ ] Junior levels cap at 450 XP max threshold
- [ ] All Junior content displays correctly in both EN and FR
- [ ] Explorer and Expert modes unaffected
