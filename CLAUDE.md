# Claude Rules — AI Lab for Kids

## Specs Policy (MANDATORY)

Before developing any new feature or making a significant change, a spec must exist in the `specs/` folder. If one doesn't exist yet:
1. Write the spec first (`specs/spec-XX-feature-name.md`).
2. Add it to `specs/README.md` index.
3. Get confirmation before starting implementation.

For small bug fixes or pure style changes a spec is not required.

---

## README Policy (enforced by Stop hook)

A `Stop` hook automatically prompts a README check at the end of every response.

- **If the change affects features, structure, flow, screens, activities, rewards, state, or any user-facing behaviour** → update `README.md`.
- **If no update is needed** → tell the user why in one line.

Never silently skip the check.

---

## Project Conventions

- **No build tools** — vanilla HTML/CSS/JS only. Do not introduce npm packages, bundlers, or frameworks.
- **Single entry point** — everything runs from `index.html`. Do not create additional HTML files.
- **Script load order matters** — dependencies in `index.html` are ordered: data → state → utils → i18n → screens → games → nav → main. Respect this order when adding new scripts.
- **Global state via `S`** — all persistent data lives in the `S` object (`state.js`). Add new fields there; do not create separate global variables for persistent state.
- **Translations always in pairs** *(enforced by Stop hook)* — every new user-facing string must have both an `en` and `fr` entry in `data.js`. Never hardcode display strings directly in JS or HTML.
- **`t()` for all UI text** *(enforced by Stop hook)* — use the `t('key')` helper for any string shown to the user. Dynamic content must use `S.lang` with fallback to `.en`.
- **`save()` after state mutations** — always call `save()` after modifying `S`.
- **No external assets** — icons are emoji, no image files or icon fonts.

## Code Style

- Match the surrounding code style (spacing, naming, comment headers).
- Keep functions small and focused.
- Do not add comments unless the logic is non-obvious.
- Do not add error handling for internal code paths — only validate at real boundaries (user input).
