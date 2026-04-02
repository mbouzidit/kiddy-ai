# Spec 18 — Accessibility: ARIA Labels & Keyboard Support

## Goal

The app currently has no ARIA labels, making it unusable for screen reader users. Interactive drag-and-drop games have no keyboard alternative, excluding users who cannot use a mouse or touch screen.

## Behaviour

### Phase 1 — ARIA labels (static elements in index.html)
- All `<button>` elements get descriptive `aria-label` attributes where the visible text alone is insufficient.
- Navigation buttons (`←` back, language toggles, mute, reset) get explicit labels.
- Screen regions get `role="main"` / `role="navigation"` where appropriate.
- Dynamic content areas (toast, score, progress bar) get `aria-live="polite"`.

### Phase 2 — ARIA on dynamically built game elements
- Drag items in Health Hero, Planet Protector, Training Workshop get `role="button"`, `tabindex="0"`, and `aria-label` describing the item.
- Drop zones get `role="region"` and `aria-label`.
- Match/sort result announcements are added to an `aria-live` region.

### Phase 3 — Keyboard drag-and-drop (Training Workshop only, as simplest)
- Draggable items respond to `Enter`/`Space` to "pick" the item (highlights it).
- While an item is picked, pressing `Enter`/`Space` again drops it into the drop zone.
- Escape cancels the pick.
- Visual indicator (CSS class `keyboard-picked`) shows the currently held item.

Games Health Hero and Planet Protector are complex pair/zone matching — keyboard support for those is deferred (out of scope for this spec).

## State

No state changes.

## Translations

| Key | EN | FR |
|---|---|---|
| `a11y_back` | `"Go back"` | `"Retour"` |
| `a11y_lang_en` | `"Switch to English"` | `"Passer en anglais"` |
| `a11y_lang_fr` | `"Switch to French"` | `"Passer en français"` |
| `a11y_mute` | `"Toggle sound"` | `"Activer/désactiver le son"` |
| `a11y_drag_item` | `"Drag item: {n}"` | `"Élément à glisser : {n}"` |
| `a11y_drop_zone` | `"Drop zone"` | `"Zone de dépôt"` |

## Acceptance Criteria

- [ ] All navigation buttons have meaningful `aria-label`
- [ ] Language toggle buttons have `aria-pressed` state reflecting current language
- [ ] Mute button has `aria-pressed` reflecting muted state
- [ ] Toast element has `aria-live="polite"`
- [ ] Training drag items have `role="button"` and `tabindex="0"`
- [ ] Training drop zone has `aria-label` and `aria-dropeffect="move"`
- [ ] Keyboard pick (Enter/Space) → drop (Enter/Space) works in Training Workshop
- [ ] Escape cancels keyboard pick in Training Workshop
