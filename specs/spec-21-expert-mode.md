# Spec 21 — Expert Mode (Ages 12-14)

## Goal

Provide a challenging, intellectually stimulating experience for teenagers (12-14 years). Deeper AI concepts (bias, NLP, ethics, neural networks), harder games, extended progression, and 4 exclusive badges.

## Content Rules

- Quiz: all types (TF, MC3, MC4), advanced vocabulary
- Mission facts: 6 per mission (4 current + 2 with ethical angle)
- Health Hero: 6 pairs (4 current + 2 expert-only)
- Planet Sort: 12 items, 4 categories (add Emissions 🌡️)
- 7 XP levels (max 2100 XP threshold)
- 4 Expert-only badges earned via new games

## Quiz — `QUESTIONS_EXPERT` (10 questions, sample 5 per run)

| # | Type | Topic | Correct answer |
|---|---|---|---|
| 1 | MC4 | What is AI bias? | Unfair patterns from bad training data |
| 2 | TF | Neural networks work exactly like the human brain | false |
| 3 | MC4 | What is an adversarial example? | Image that tricks AI |
| 4 | MC3 | What is overfitting? | AI memorises training data |
| 5 | TF | NLP lets AI understand and generate human language | true |
| 6 | MC4 | Why does facial recognition fail on some skin tones? | Biased training data |
| 7 | MC3 | What is transfer learning? | Reusing knowledge from one task |
| 8 | TF | AI systems are always objective and neutral | false |
| 9 | MC3 | What does an AI need to master chess? | Millions of games + trial and error |
| 10 | MC4 | Which measure most reduces AI bias? | Diverse, representative training data |

All with full bilingual content.

## Mission Facts — `MISSIONS_DATA_EXPERT`

6 facts per mission. First 4 are the current Explorer facts (reused). Last 2 are expert-only:

**Health Hero (facts 5-6):**
- 🧬 "Genetic Prediction: AI can read your DNA to predict future illness — but is it always ethical to know?"
- ⚖️ "AI Bias in Healthcare: AI trained mostly on men's data may miss diseases in women. Diverse data saves lives."

**Planet Protector (facts 5-6):**
- 📡 "Satellite AI: AI analyses satellite images to detect illegal mining and deforestation — privacy vs. protection?"
- ♻️ "Carbon AI: AI models optimise industrial processes to cut CO₂ emissions by up to 40%."

**Smart Helper (facts 5-6):**
- 🔒 "Privacy Trade-off: AI assistants record your voice to learn from it — is convenience worth sharing your data?"
- 💡 "Access Gap: AI tools help disabled people enormously, but cost is high. Who should pay?"

## Games

### `HEALTH_PAIRS_EXPERT` (6 pairs)
Current 4 pairs + 2 new:
- Chronic pain → AI Pain Predictor 🧠
- Mental health struggle → AI Therapy Bot 💬

### `PLANET_CATS_EXPERT` (4 categories)
Energy ⚡, Oceans 🌊, Wildlife 🐘, Emissions 🌡️

### `PLANET_ITEMS_EXPERT` (12 items, 3 per category)
Current 9 items + 3 new Emissions items:
- CO₂ Tracker 📊 (cat: Emissions)
- Methane Sensor 🔬 (cat: Emissions)
- Carbon Cap AI ♻️ (cat: Emissions)

## Levels — `LEVELS_EXPERT`

```js
{ name:'Curious Coder',       name_fr:'Codeur Curieux',      min:0    }
{ name:'AI Explorer',         name_fr:'Explorateur IA',      min:200  }
{ name:'Data Detective',      name_fr:'Détective Data',      min:500  }
{ name:'Algorithm Architect', name_fr:'Architecte Algo',     min:900  }
{ name:'Neural Engineer',     name_fr:'Ingénieur Neural',    min:1300 }
{ name:'Ethics Guardian',     name_fr:'Gardien Éthique',     min:1700 }
{ name:'AI Visionary! 🌟',   name_fr:'Visionnaire IA ! 🌟', min:2100 }
```

## Expert-Only Badges (`BADGES_EXPERT`, appended to `BADGES` array)

| id | name | name_fr | ico | Earned by |
|---|---|---|---|---|
| `bias-buster` | Bias Buster | Chasseur de Biais | 🔐 | Complete Spot the Bias (spec-22) |
| `neural-master` | Neural Master | Maître Neural | 🧠 | Score 5/5 on Expert quiz without hints |
| `adversarial-pro` | Adversarial Pro | Pro Adversarial | 🎯 | Complete Adversarial Challenge (spec-23) |
| `ethics-guardian` | Ethics Guardian | Gardien Éthique | ⚖️ | Complete both bias + adversarial games |

`neural-master` is earned in `finishQuiz()` when `_mode === 'expert'` and `S.qScore === 5 && !S.hintUsed`.

`ethics-guardian` is earned when both `bias-buster` and `adversarial-pro` are in `S.badges`.

## Acceptance Criteria

- [ ] Expert quiz pool contains exactly 10 questions, 5 sampled per run
- [ ] Expert Health Hero shows 6 pairs
- [ ] Expert Planet Sort shows 12 items and 4 categories
- [ ] Expert mission detail shows 6 facts per mission
- [ ] Expert levels display correctly up to 7 levels
- [ ] `neural-master` earned on Expert perfect quiz with no hint used
- [ ] `ethics-guardian` auto-earned when both prerequisite badges are earned
- [ ] Expert badges visible in badge gallery (Expert mode only)
- [ ] Junior/Explorer modes unaffected
