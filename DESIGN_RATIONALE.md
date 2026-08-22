# Design Rationale — "Ink & Ember"

## The direction

A recruiter opens this site between two meetings. It has about four seconds to
say *"this person thinks like a product person"* before it says anything else.
So the page is built as a piece of editorial print, not a template portfolio:

**Ink → Paper → Ink.** A cinematic near-black hero opens the story, an ember
band carries the reader across, the body of the argument is set on warm ivory
paper like a printed feature, and the close returns to ink. That tonal arc is
the structure — it tells the reader where they are without a single label.

This is deliberately *not* a dark-mode site. The dark passages are the framing
device; the substance is read on paper, where long-form text belongs.

## Palette

Authored in `oklch()` so the accent stays perceptually consistent against both
canvases (`src/app/globals.css`, `tailwind.config.ts`).

| Token | Value | Role |
| :--- | :--- | :--- |
| `ink` | `oklch(0.152 0.011 264)` | Hero, experience, contact, footer |
| `paper` / `paper-sunk` | `oklch(0.972 0.010 88)` / `0.945` | Reading surfaces, alternating |
| `graphite` / `graphite-muted` | `0.34` / `0.455` | Body copy, meta |
| `ember` | `oklch(0.685 0.175 45)` | The single signal colour |
| `ember-deep` | `oklch(0.505 0.152 40)` | Same signal, AA-safe on paper |
| `sage` | `oklch(0.485 0.068 165)` | Second-order marker (evidence, selected path) |

Ember is used semantically, never decoratively: it marks *the product reading*
of something — the product lens on each role, the discipline a prior skill maps
to, the current step of the reasoning loop.

## Typography

Two families, no more. **Instrument Serif** carries every display line — high
contrast, real editorial voice, and an italic used as emphasis rather than
decoration ("clear product decisions", pull quotes, the problem statements).
**Inter Tight** handles body and UI. Labels are letter-spaced small caps
(`.type-label`) instead of a third monospace family.

All sizes are fluid (`clamp()`), so the layout never snaps between breakpoints.

## Composition

- **Grid-breaking, not card-grid.** Principles run 7/5 · 5/7 spans with a
  watermark numeral bleeding past the card edge. About is a two-column
  editorial spread with a drop cap. Experience is a meta rail against a wide
  substance column.
- **Depth through surface, not shadow spam.** Ink panels sit on paper
  (bridge, featured artefact), paper panels sit on ink (modal). Shadows appear
  only where an element genuinely lifts.
- **Atmosphere:** an animated `aurora` gradient wash, a fixed SVG grain overlay,
  and hairline grids masked with a radial fade. Enough texture to feel printed,
  never enough to compete with text.

## Motion

Every entrance is a **CSS transition toggled by a class**, never a JS animation
loop. If the animation frame budget is starved, the end state still applies —
content can never be left invisible mid-flight. Only `transform`, `opacity` and
`filter` animate. `prefers-reduced-motion` renders everything at final state.

This is also why `framer-motion` was removed: it cost 46 kB of JS and made
visibility depend on a running animation loop.

## Interaction

- **The reasoning loop** (hero) is the signature device: four beats that
  auto-advance until the visitor takes over, then hold. Proper `tablist`
  semantics, roving tab index.
- **The translation matrix** (bridge) makes the transferable-skills argument
  interactive — pick a line of prior work, read the discipline it maps to.
- **The 11-step reader** is a modal with focus capture and restore, `Escape`
  to close, and URL-hash deep links (`#artefact-<slug>`).

## Recruiter critique — three passes

1. **"Is this a designer trying to be a PM?"** No: every visual device carries
   an argument. The ember annotations, the translation matrix and the 11-step
   reader all exist to make reasoning legible, not to decorate.
2. **"Can I skim it in 60 seconds?"** The tonal arc plus numbered sections plus
   the signal strip give a skim path; the reader is opt-in.
3. **"Does anything overstate the experience?"** The experience records are
   verbatim facts; the product reading is visually separated as interpretation
   (ember panel), never blended into the record.
