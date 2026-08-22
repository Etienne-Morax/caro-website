# Caroline — Product Portfolio Website

A one-page personal product portfolio website designed to reposition Caroline's professional narrative from talent advisory and operations toward **Product Thinking**.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## Quick Start

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 2. Run Development Server
```bash
pnpm dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
pnpm build
# or
npm run build
```

---

## Content Management (Zero-Code Edits)

All text, experience records, principles, and case studies are separated into structured TypeScript files inside `src/data/`:

| File | Purpose | What to Edit |
| :--- | :--- | :--- |
| `src/data/site.ts` | Global configuration | Email, LinkedIn URL, site title, navigation links |
| `src/data/profile.ts` | Hero & Narrative | Headlines, transition narrative paragraphs, interactive mental model steps |
| `src/data/principles.ts` | Product Mindset | The 4 core operating principles, real-world examples, method tags |
| `src/data/experience.ts` | Verified Experience | Lawrence Harvey, Emerique & Partners, Ecolab details + Product Lens annotations + Education |
| `src/data/bridge.ts` | Translation Matrix | Prior operational activities mapped to product disciplines |
| `src/data/artefacts.ts` | Case Studies & Teardowns | Full 11-step case studies, teardowns, essays, and upcoming placeholder notes |

---

## How to Publish a New Case Study / Artefact

1. Open `src/data/artefacts.ts`.
2. Refer to [`ARTEFACT_TEMPLATE.md`](./ARTEFACT_TEMPLATE.md) for the complete 11-step case study format.
3. Add your new object to the `artefactsData` array.
4. Save the file. The new artefact will immediately appear on the website and inside the interactive modal reader.

---

## Key Features & Architecture

Visual direction: **"Ink & Ember"** — a near-black cinematic hero, an ember
transition band, the argument set on warm ivory paper, and an ink close. See
[`DESIGN_RATIONALE.md`](./DESIGN_RATIONALE.md).

- **Signature interactive device**: the 4-beat reasoning loop (`01 Observe → 02 Frame → 03 Explore → 04 Decide`) in the hero, auto-advancing until the visitor takes over.
- **Experience read through a product lens**: verbatim factual records, with the product interpretation visually separated in an ember panel.
- **Translation matrix**: interactive mapping from each piece of prior work to the product discipline it transfers to.
- **11-step case-study reader**: modal with focus capture/restore, `Escape` to close, and deep links (`#artefact-[slug]`).
- **Accessibility**: 0 axe violations (WCAG 2.1 AA), full keyboard navigation, `prefers-reduced-motion` support.
- **No animation library**: entrances are CSS transitions toggled by a class, so content is never left invisible mid-flight. 130 kB First Load JS.

### Design system

| Where | What |
| :--- | :--- |
| `src/app/globals.css` | Colour, spacing, motion tokens (`oklch`, `clamp`); type scale; atmosphere and reveal utilities |
| `tailwind.config.ts` | The same palette exposed as Tailwind colours |
| `src/components/ui/` | Primitives: `Button`, `Badge`, `Reveal`, `SectionHeading`, `Marquee`, `Icons` |
| `src/components/sections/` | One file per page section |

> Tailwind only emits opacity modifiers in multiples of 5 (`text-paper/55`, not `/58`).

## QA scripts

Run these against the QA build, which uses its own `.next-qa` directory so it
can run next to `pnpm dev` without clobbering it:

```bash
pnpm qa:build && pnpm qa:serve   # http://localhost:4321

# Screenshots at 375 / 768 / 1440 for every section
BASE_URL=http://localhost:4321 OUT_DIR=./screenshots node scripts/screenshots.mjs

# axe-core accessibility audit, section by section + the modal
BASE_URL=http://localhost:4321 node scripts/a11y.mjs

# Composite colour-contrast audit (resolves oklch, blends every background layer)
BASE_URL=http://localhost:4321 node scripts/contrast.mjs

# Horizontal overflow at 320–1920 + modal smoke test
BASE_URL=http://localhost:4321 OUT_DIR=./screenshots node scripts/qa.mjs
```

> If the dev server ever renders black-on-black, it is serving a stale build
> (usually because a production build overwrote `.next`). Run `pnpm dev:clean`.

---

## Documentation & Reports

- [`ARTEFACT_TEMPLATE.md`](./ARTEFACT_TEMPLATE.md): Step-by-step case study authoring guide.
- [`CONTENT_GAPS.md`](./CONTENT_GAPS.md): Checklist of verified CV facts vs optional personal customizations.
- [`QA_REPORT.md`](./QA_REPORT.md): Accessibility, responsiveness, and build test validation.
- [`DESIGN_RATIONALE.md`](./DESIGN_RATIONALE.md): Design system concept and 3-perspective recruiter critique.
