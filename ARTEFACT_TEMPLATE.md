# Product Artefact Publishing Template

This template guides Caroline in creating and publishing new product case studies, teardowns, or essays on the portfolio website.

All artefacts are stored as structured TypeScript objects in `src/data/artefacts.ts`.

---

## 1. Case Study Structure (11-Step Product Narrative)

Copy and paste this template block into `src/data/artefacts.ts`:

```typescript
{
  slug: "your-case-study-slug",
  title: "Title of the Problem or Case Study",
  type: "case-study", // 'case-study' | 'teardown' | 'essay' | 'discovery' | 'experiment'
  typeLabel: "Flagship Case Study",
  oneLineProblem: "How might we [action] [user/problem] without [constraint]?",
  summary: "A concise 2-sentence overview of the operational challenge and solution.",
  publishedAt: "Month Year",
  readingTime: "5 min read",
  tags: ["User Research", "Process Design", "Trade-offs"],
  featured: false, // Set to true to highlight on the homepage grid
  methodology: "Method 1 · Method 2 · Method 3",
  caseStudy: {
    // 01. Operating Environment
    context: "Describe the company context, market dynamics, and team setup.",

    // 02. Problem Framing
    problem: "What was breaking? What were the symptoms vs root causes?",

    // 03. Observations
    observations: [
      "First key behavior observed in the field.",
      "Second friction point identified.",
      "Third breakdown in the workflow."
    ],

    // 04. Assumptions Tested
    assumptions: [
      "Initial assumption: What everyone thought was true.",
      "Tested reality: What the evidence actually proved."
    ],

    // 05. Evidence & Research
    evidenceResearch: [
      "Quant: Audited 100+ historic records.",
      "Qual: Conducted 10 in-depth 1:1 stakeholder interviews.",
      "Data: Correlated turnaround time with pipeline drop-off."
    ],

    // 06. Stakeholder Matrix & Constraints
    stakeholderNeeds: [
      {
        stakeholder: "Primary User",
        need: "Core emotional or operational need.",
        constraint: "Time, budget, or tool limitation."
      },
      {
        stakeholder: "Business Leader",
        need: "Strategic alignment or risk minimization.",
        constraint: "Regulatory or governance boundary."
      }
    ],

    // 07. Options Considered & Selection
    optionsConsidered: [
      {
        option: "Option A: The high-effort traditional approach",
        evaluation: "Why this was too slow or high-friction.",
        selected: false
      },
      {
        option: "Option B: The lightweight structured approach",
        evaluation: "Why this balanced speed, effort, and signal.",
        selected: true
      }
    ],

    // 08. Prioritisation & Trade-offs
    prioritisationTradeoffs: "What was sacrificed in order to achieve the primary goal?",

    // 09. Proposed Solution
    proposedSolution: "The concrete workflow, tool, or process implemented.",

    // 10. Measuring Success
    successMetrics: [
      {
        metric: "Primary Outcome Metric",
        whyItMatters: "Why this metric reflects real value.",
        targetIndicator: "e.g., -60% latency / +30% satisfaction"
      }
    ],

    // 11. Learnings & Next Iterations
    learningsAndNextTests: "What was learned, what surprised you, and what would you test next?"
  },
  editorialTakeaways: [
    "First memorable product takeaway.",
    "Second insight on human behavior or systems."
  ]
}
```

---

## 2. Product Teardown or Essay Structure

For shorter UX critiques or opinion pieces without the full 11-step case study, simply omit the `caseStudy` key or supply the relevant subset:

```typescript
{
  slug: "product-teardown-example",
  title: "Product Teardown: Deconstructing...",
  type: "teardown",
  typeLabel: "Product Teardown",
  oneLineProblem: "Why does [Product X] struggle with [Friction Y]?",
  summary: "A critique of the information architecture and conversion funnel.",
  publishedAt: "Month Year",
  readingTime: "3 min read",
  tags: ["UX Teardown", "Conversion", "Enterprise"],
  methodology: "Heuristic Evaluation · UX Audit",
  editorialTakeaways: [
    "Key takeaway 1",
    "Key takeaway 2",
    "Key takeaway 3"
  ]
}
```
