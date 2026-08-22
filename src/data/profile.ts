import { Profile, MentalModelStep } from "@/types";

export const profileData: Profile = {
  name: "Caroline",
  roleTitle: "Product-Minded Operator & Problem Solver",
  location: "London, UK",
  currentStatus: "Exploring Junior / Associate Product Roles in London & Remote",
  email: "caroline.recruitment.product@example.com",
  linkedin: "https://www.linkedin.com/in/caroline-portfolio-product",
  cvPath: "/caroline-cv.pdf",
  heroHeadline: "Turning messy human problems into clear product decisions.",
  heroSubheadline:
    "Bilingual operator with 4+ years bridging stakeholder demands, candidate journeys, and operational workflows. Now channeling proven discovery and prioritization instincts into product thinking.",
  heroInteractivePill: "How I approach ambiguity",
  narrativeLead:
    "For the past four years across London and Paris, my daily work has lived at the intersection of conflicting priorities: hiring managers needing specialized talent yesterday, candidates navigating opaque hiring funnels, and business leaders balancing risk and budget.",
  narrativeSections: [
    {
      title: "Where I come from",
      content:
        "My career started in Talent Acquisition and Recruitment Coordination across hyper-regulated industries (Audit, Risk, Compliance, and Life Sciences) at Lawrence Harvey, Emerique & Partners, and Ecolab. Across 1,000+ stakeholder interviews and candidate evaluations, I became obsessed with the underlying systems rather than just filling vacancies.",
      highlight: "Obsessed with why workflows fail, not just treating the symptoms.",
    },
    {
      title: "The pivot to product thinking",
      content:
        "When a hiring pipeline broke down, the issue was rarely lack of talent; it was poor requirement discovery, unaligned feedback loops, or fragmented candidate journeys. I found myself naturally mapping user friction, structuring decision matrices, and designing lightweight processes to resolve root problems.",
      highlight: "Translating qualitative user friction into structured decision frameworks.",
    },
    {
      title: "What I bring to a product team",
      content:
        "I do not bring vanity product jargon. I bring battle-tested stakeholder management, high-velocity qualitative interviewing skills, comfort with ambiguity, and a relentless focus on delivering measurable clarity under real constraints.",
      highlight: "Execution rigor paired with deep human empathy.",
    },
  ],
};

export const mentalModelSteps: MentalModelStep[] = [
  {
    step: "01",
    title: "Observe",
    shortDescription: "Listen for unstated friction behind explicit requests.",
    questionPrompt: "What are people actually struggling with versus what they say they want?",
    recruitmentParallel: "Uncovering the real team pain point beyond a generic job description.",
    productCompetency: "Qualitative User & Stakeholder Discovery",
  },
  {
    step: "02",
    title: "Frame",
    shortDescription: "Deconstruct the core constraint and define the true problem.",
    questionPrompt: "Are we solving the root cause or merely polishing a symptom?",
    recruitmentParallel: "Re-aligning misaligned hiring manager expectations with market realities.",
    productCompetency: "Problem Framing & Opportunity Sizing",
  },
  {
    step: "03",
    title: "Explore",
    shortDescription: "Evaluate trade-offs across competing user and business needs.",
    questionPrompt: "What are the second-order effects of this choice on other stakeholders?",
    recruitmentParallel: "Balancing hiring speed, compensation bands, and technical bar.",
    productCompetency: "Options Evaluation & Trade-off Analysis",
  },
  {
    step: "04",
    title: "Decide",
    shortDescription: "Commit to high-conviction actions backed by tangible feedback loops.",
    questionPrompt: "How do we validate our hypothesis with the lowest possible friction?",
    recruitmentParallel: "Iterating interview rubrics based on post-debrief candidate signal.",
    productCompetency: "Execution, Alignment & Iterative Learning",
  },
];
