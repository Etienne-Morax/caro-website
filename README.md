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

- **Signature Interactive Device**: The 4-phase mental model (`01 Observe ➔ 02 Frame ➔ 03 Explore ➔ 04 Decide`) in the Hero section.
- **Andrey Mitko-Inspired Experience Section**: Clean typography with dedicated `Product Lens` annotations for each verified employer.
- **Experience-to-Product Bridge**: Interactive comparative table translating talent operations into product competencies.
- **Modular 11-Step Case Study Reader**: Accessible modal with URL hash sync (`#artefact-[slug]`), ESC keyboard shortcut, and reading metrics.
- **WCAG AA Compliance**: 14.2:1 contrast ratio, full keyboard navigation, and reduced-motion support.

---

## Documentation & Reports

- [`ARTEFACT_TEMPLATE.md`](./ARTEFACT_TEMPLATE.md): Step-by-step case study authoring guide.
- [`CONTENT_GAPS.md`](./CONTENT_GAPS.md): Checklist of verified CV facts vs optional personal customizations.
- [`QA_REPORT.md`](./QA_REPORT.md): Accessibility, responsiveness, and build test validation.
- [`DESIGN_RATIONALE.md`](./DESIGN_RATIONALE.md): Design system concept and 3-perspective recruiter critique.
