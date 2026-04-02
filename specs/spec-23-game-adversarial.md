# Spec 23 — Expert Game: Adversarial Challenge

## Goal

Teach Expert (12-14) players how adversarial attacks fool AI systems. Players choose which modification would confuse a described AI — revealing that AI "sees" differently from humans.

## Behaviour

- Accessible as a 5th mission card in Expert mode only (after Bias Detector)
- 3 scenarios shown one at a time
- Each scenario describes an AI's classification and offers 3 possible modifications
- Player picks which modification would fool the AI
- On answer: explanation revealed showing why the AI gets confused
- Score tracked (out of 3)
- All 3 correct → earns `adversarial-pro` badge + 75 XP
- Completing both this and Bias Detector → auto-earn `ethics-guardian` badge

## Scenarios — `ADVERSARIAL_SCENARIOS`

```js
[
  {
    char: '🛑',
    en: "An AI in a self-driving car correctly identifies a STOP sign. Which change would fool it into thinking it's a speed limit sign?",
    fr: "L'IA d'une voiture autonome reconnaît un panneau STOP. Quel changement la ferait confondre avec un panneau de limitation de vitesse ?",
    opts: [
      { en: '🖌️ Paint it bright red', fr: '🖌️ Le peindre en rouge vif', ok: false },
      { en: '📎 Add small stickers in specific corners', fr: '📎 Ajouter de petits autocollants dans des coins précis', ok: true },
      { en: '🌧️ Get it wet in the rain', fr: '🌧️ Le mouiller sous la pluie', ok: false }
    ],
    expl: { en: "AI detects specific pixel patterns, not meaning. Tiny stickers in exact spots can shift those patterns enough to fool it — invisible to humans!", fr: "L'IA détecte des patterns de pixels, pas le sens. De petits autocollants aux bons endroits modifient ces patterns suffisamment pour la tromper — invisible pour un humain !" }
  },
  {
    char: '📧',
    en: "An AI spam filter blocks emails containing 'FREE MONEY NOW'. Which rewrite tricks the filter into letting it through?",
    fr: "Un filtre anti-spam bloque les emails contenant 'ARGENT GRATUIT MAINTENANT'. Quelle réécriture trompe le filtre ?",
    opts: [
      { en: '✉️ Send it at midnight instead of morning', fr: '✉️ L\'envoyer à minuit plutôt le matin', ok: false },
      { en: '🔡 Write: Fr33 M0ney N0w (replace letters with numbers)', fr: '🔡 Écrire : Arg3nt Gratu1t M4intenant', ok: true },
      { en: '🖼️ Put the message inside an image', fr: '🖼️ Mettre le message dans une image', ok: false }
    ],
    expl: { en: "Spam filters look for exact text patterns. Replacing letters with similar-looking numbers bypasses the filter — the AI can't read '0' as 'o' unless trained for it!", fr: "Les filtres cherchent des patterns textuels exacts. Remplacer des lettres par des chiffres similaires contourne le filtre — l'IA ne lit pas '0' comme 'o' sans entraînement spécifique !" }
  },
  {
    char: '🐱',
    en: "An AI image classifier says this is a cat with 98% confidence. Which change tricks it into classifying it as a dog?",
    fr: "Un classifieur IA dit que c'est un chat avec 98% de certitude. Quel changement le ferait classer comme un chien ?",
    opts: [
      { en: '🔄 Rotate the image 90 degrees', fr: '🔄 Faire pivoter l\'image de 90 degrés', ok: false },
      { en: '🎨 Add specific invisible pixel noise (adversarial perturbation)', fr: '🎨 Ajouter un bruit de pixels invisible (perturbation adversariale)', ok: true },
      { en: '⬛ Make the image black and white', fr: '⬛ Convertir l\'image en noir et blanc', ok: false }
    ],
    expl: { en: "Adversarial perturbation: tiny changes to specific pixels, invisible to human eyes, completely flip an AI's prediction. This shows AI doesn't truly 'see' — it detects statistical patterns!", fr: "Perturbation adversariale : de minuscules changements de pixels, invisibles à l'œil humain, renversent la prédiction. L'IA ne 'voit' pas vraiment — elle détecte des patterns statistiques !" }
  }
]
```

## State

- Score tracked in `advState` (module-level in adversarial.js), not persisted
- Badge + XP via `earn()` + `addXP()`
- `ethics-guardian` auto-check after `adversarial-pro` earned: `if (S.badges.includes('bias-buster')) earn('ethics-guardian')`

## Mission Card Integration (Expert mode only)

- 5th mission card after Bias Detector on missions screen
- Card style: dark teal gradient, id: `'adversarial'`, badge: `'adversarial-pro'`
- `launchMissionGame('adversarial')` calls `buildAdversarialGame(gw, id, done)`

## New Translation Keys

| Key | EN | FR |
|---|---|---|
| `adv_title` | `"Adversarial Challenge! 🎯"` | `"Défi Adversarial ! 🎯"` |
| `adv_inst` | `"Which change would fool this AI?"` | `"Quel changement tromperait cette IA ?"` |
| `adv_correct` | `"You fooled the AI! ✅"` | `"Tu as trompé l'IA ! ✅"` |
| `adv_wrong` | `"Not quite — the AI wasn't fooled."` | `"Pas tout à fait — l'IA n'a pas été trompée."` |
| `adv_done` | `"🎯 Adversarial Master!"` | `"🎯 Maître Adversarial !"` |
| `m_adv_ttl` | `"Adversarial Challenge"` | `"Défi Adversarial"` |
| `m_adv_desc` | `"Can you trick an AI into making the wrong decision?"` | `"Peux-tu tromper une IA pour lui faire prendre la mauvaise décision ?"` |

## Acceptance Criteria

- [ ] 5th mission card "Adversarial Challenge" visible in Expert mode only
- [ ] 3 scenarios play sequentially
- [ ] 3 options per scenario, one correct
- [ ] Explanation shown after each answer
- [ ] `adversarial-pro` badge earned on 3/3
- [ ] `ethics-guardian` auto-earned when both `bias-buster` + `adversarial-pro` are in S.badges
- [ ] Works in EN and FR
