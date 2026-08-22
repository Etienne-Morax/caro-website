# QA Report — "Ink & Ember" redesign

Run against the **QA production build** (`.next-qa`, isolated from the dev
server), Chrome via Playwright. Reproduce with the scripts in `scripts/`.

```bash
pnpm qa:build && pnpm qa:serve   # serves .next-qa on :4321
BASE_URL=http://localhost:4321 OUT_DIR=./screenshots node scripts/screenshots.mjs
BASE_URL=http://localhost:4321 node scripts/a11y.mjs
BASE_URL=http://localhost:4321 node scripts/contrast.mjs
BASE_URL=http://localhost:4321 OUT_DIR=./screenshots node scripts/qa.mjs
```

## Accessibility — axe-core (WCAG 2.0/2.1 A + AA)

**0 violations**, audited section by section (each scrolled into view so axe
samples the real painted background) plus the case-study modal.

Manual checks:

- Skip link to `#overview`, visible on focus.
- Reasoning loop uses `tablist`/`tab`/`tabpanel` with a roving tab index.
- Modal: focus moves to the close button on open and returns to the trigger on
  close; `Escape` closes; body scroll is locked.
- `:focus-visible` ring (2px ember, 3px offset) on every interactive element.
- Decorative layers (`aurora`, grain, hairline grids, watermark numerals) are
  `aria-hidden` or CSS pseudo-elements, so none reach the a11y tree.

## Colour contrast

Independent composite check (`scripts/contrast.mjs`, resolves oklch through a
canvas and composites every background layer): **1 reported failure, a known
false positive** — the "C" wordmark glyph sits over an ember disc drawn as a
sibling element, so the script cannot see the disc. Actual ratio ≈ 5.9:1.

Fixed during the pass: `graphite-muted` darkened to `oklch(0.455)`,
`ember-deep` to `oklch(0.505)`, faint `text-paper/*` steps raised to ≥ 55%, and
the featured-card badge given an on-ink variant.

> Note: Tailwind only emits opacity steps in multiples of 5. `text-paper/58`
> and `border-paper/12` silently produced no CSS. Keep opacity modifiers on the
> 5-step scale.

## Responsive

No horizontal overflow at **320 / 375 / 768 / 1024 / 1440 / 1920**.
`overflow-x: clip` on `html, body` (not `hidden`, which would break the bridge
panel's `position: sticky`).

## Motion

- `prefers-reduced-motion: reduce`: all 37 reveal elements render at final
  state, hero opacity 1, aurora and marquee animations disabled.
- Entrance animations are CSS transitions toggled by a class, so a starved
  frame budget cannot leave content invisible.

## Performance

| | Before | After |
| :--- | :--- | :--- |
| First Load JS (`/`) | 176 kB | **130 kB** |

Under the 150 kB landing-page budget. `framer-motion` and `lucide-react` were
removed (icons are now a local SVG set). Two font families, `display: swap`.

## Known gaps

- `siteConfig.email` and `siteConfig.linkedin` are still placeholders — see
  [`CONTENT_GAPS.md`](./CONTENT_GAPS.md).
- No `/og-preview.png` yet; metadata references it.
- Lighthouse field metrics (LCP/INP/CLS) not measured here — worth running once
  the site is deployed on real hosting.

## Build-directory isolation

A production build and a running dev server must not share `.next`: the build
overwrites the dev server's chunks and stylesheet, which shows up in the browser
as **black text on the dark canvas** (no Tailwind classes resolve, so colours
fall back to the UA defaults).

`next.config.ts` reads `distDir` from `NEXT_DIST_DIR`, so the QA build lives in
`.next-qa` and can run alongside `pnpm dev`:

```bash
pnpm dev            # http://localhost:3000, .next
pnpm qa:build       # .next-qa
pnpm qa:serve       # http://localhost:4321, .next-qa
```

If a dev server ever renders unstyled (black on black), it is serving a stale
build: `pnpm dev:clean` wipes `.next` and restarts it.
