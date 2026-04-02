# Spec 22 — Expert Game: Spot the Bias

## Goal

Teach Expert (12-14) players to identify AI bias through 3 real-world scenario examples. Players classify each AI decision as Biased, Fair, or Uncertain — developing critical thinking about AI ethics.

## Behaviour

- Accessible as a 4th mission card in Expert mode only (visible on the missions screen below the 3 current missions)
- 3 scenarios shown one at a time (like Smart Helper)
- Each scenario shows: context description, AI decision made, and 3 classification buttons
- On answer: correct classification revealed + explanation
- Score tracked (out of 3)
- All 3 correct → earns `bias-buster` badge + 100 XP
- Partial scores: +25 XP per correct answer

## Scenarios — `BIAS_SCENARIOS`

```js
[
  {
    char: '💼',
    en: "A company uses AI to screen job applications. It selected 80% male candidates and 20% female. The AI was trained on 10 years of past hires — which were mostly male.",
    fr: "Une entreprise utilise l'IA pour trier les candidatures. Elle a sélectionné 80% d'hommes. L'IA a été entraînée sur 10 ans d'embauches passées — majoritairement masculines.",
    correct: 'biased',
    expl: { en: "Biased! The AI learned that 'good employees = male' from historical data. Biased input → biased output. Fixing this requires diverse training data.", fr: "Biaisé ! L'IA a appris que 'bon employé = homme' depuis des données historiques. Entrée biaisée → sortie biaisée. La solution : des données d'entraînement diversifiées." }
  },
  {
    char: '🎵',
    en: "A music app recommends the same popular chart songs to all users regardless of age or taste, because it has no listening history for them yet.",
    fr: "Une appli musicale recommande les mêmes chansons populaires à tous les nouveaux utilisateurs, n'ayant pas encore leur historique.",
    correct: 'uncertain',
    expl: { en: "Uncertain. It's not biased (treating everyone equally) but it's not personalised either. Without data, AI must start somewhere — but should improve quickly.", fr: "Incertain. Ce n'est pas biaisé (traitement égal) mais ce n'est pas personnalisé. Sans données, l'IA doit commencer quelque part — mais doit s'améliorer vite." }
  },
  {
    char: '📷',
    en: "A facial recognition AI is 99% accurate on light-skinned faces but only 65% accurate on darker skin tones. The training dataset had 90% light-skinned photos.",
    fr: "Une IA de reconnaissance faciale est précise à 99% sur les peaux claires mais à 65% sur les peaux foncées. Le jeu d'entraînement contenait 90% de photos à peau claire.",
    correct: 'biased',
    expl: { en: "Biased! The AI reflects the imbalance in its training data. This causes real harm — imagine it being used by police! Diverse data is essential.", fr: "Biaisé ! L'IA reflète le déséquilibre de ses données. Cela cause de vrais torts — imagine son usage par la police ! Des données diversifiées sont essentielles." }
  }
]
```

## Answer Options

3 buttons per scenario (same for all scenarios):
- 🔴 `sg_biased` — "Biased" / "Biaisé"
- 🟢 `sg_fair` — "Fair" / "Juste"
- 🟡 `sg_uncertain` — "Uncertain" / "Incertain"

## State

- No new persistent state fields
- Score tracked in `bsState` (module-level object in bias.js), not persisted
- Badge + XP award via existing `earn()` + `addXP()`

## Mission Card Integration (Expert mode only)

- `loadMissions()` in missions.js checks `if (_mode === 'expert')` and renders a 4th card for Bias Detector
- Card style: dark purple gradient, id: `'bias'`, badge: `'bias-buster'`
- `launchMissionGame('bias')` calls `buildBiasGame(gw, id, done)`
- `completeMission('bias')` awards per-scenario XP (via bias.js completing each scenario)

## New Translation Keys

| Key | EN | FR |
|---|---|---|
| `bs_title` | `"Spot the Bias! 🔐"` | `"Détecte le Biais ! 🔐"` |
| `bs_inst` | `"Is this AI decision Biased, Fair, or Uncertain?"` | `"Cette décision IA est-elle Biaisée, Juste ou Incertaine ?"` |
| `bs_biased` | `"🔴 Biased"` | `"🔴 Biaisé"` |
| `bs_fair` | `"🟢 Fair"` | `"🟢 Juste"` |
| `bs_uncertain` | `"🟡 Uncertain"` | `"🟡 Incertain"` |
| `bs_correct` | `"Correct! ✅"` | `"Correct ! ✅"` |
| `bs_wrong` | `"Not quite… 🤔"` | `"Pas tout à fait… 🤔"` |
| `bs_done` | `"🔐 Bias detected! Well done!"` | `"🔐 Biais détecté ! Bravo !"` |
| `m_bias_ttl` | `"Bias Detector"` | `"Détecteur de Biais"` |
| `m_bias_desc` | `"Can you spot when AI is being unfair?"` | `"Peux-tu repérer quand l'IA est injuste ?"` |

## Acceptance Criteria

- [ ] 4th mission card "Bias Detector" visible in Expert mode only
- [ ] 3 scenarios play sequentially (one at a time)
- [ ] Each scenario shows 3 classification buttons
- [ ] Correct answer + explanation shown after each answer
- [ ] Score tracked; `bias-buster` badge earned on 3/3
- [ ] Partial XP (+25 per correct) even without perfect score
- [ ] Card shows "✅ Completed!" after first completion
- [ ] Works in EN and FR
