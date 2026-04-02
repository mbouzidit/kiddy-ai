# Spec 11 — Internationalisation (EN / FR)

## Goal
The entire app is available in English and French. The player can switch language at any time using the flag toggle. All UI text updates instantly without a page reload.

---

## Language Toggle

- Fixed top-right button group: 🇬🇧 and 🇫🇷 flag buttons.
- Active language button has a blue background highlight.
- Clicking a flag calls `setLang(l)` → persists to `S.lang`, calls `applyLang()`.

---

## Translation System

### `t(key)` helper (`i18n.js`)
Returns `T[S.lang][key]`, falling back to `T.en[key]`, then the key itself if missing.

### `_t(id, val)` helper
Sets `textContent` of a DOM element by ID. No-op if element not found.

### `applyLang()` (`i18n.js`)
Called on language switch and on every screen load. Updates:
- Language toggle button active state
- All static translatable elements by ID (splash, profile, dashboard, missions, training, quiz intro, quiz, results, badges, bottom nav)
- Re-calls `onLoad` for the currently active screen (so dynamic content re-renders in the new language)

---

## Translation Data (`T` object in `data.js`)

Two top-level keys: `T.en` and `T.fr`. Every user-facing string has an entry in both.

Dynamic content (games, mission details) uses `S.lang` inline:
```js
const label = S.lang === 'fr' ? item.fr : item.en;
// or with fallback:
const label = item[S.lang] || item.en;
```

---

## Adding New Strings

1. Add the key to **both** `T.en` and `T.fr` in `data.js`.
2. Use `t('key')` in JS, or add `_t('element-id', L.key)` in `applyLang()` for static elements.
3. Never hardcode display strings in JS or HTML.

---

## State
| Field | Value |
|---|---|
| `S.lang` | `'en'` (default) or `'fr'` |

---

## Acceptance Criteria
- [ ] All text updates immediately on language switch without reload
- [ ] Active language button is visually distinguished
- [ ] Language choice persists across sessions (saved in `S.lang`)
- [ ] Dynamic game content (fact cards, question text, option labels) also switches language
- [ ] Fallback to English if a French key is missing
