import { Principle } from "@/types";

export const principlesData: Principle[] = [
  {
    id: "people-first",
    number: "01",
    title: "Start with people, not features",
    subtitle: "Empathy before architecture",
    description:
      "Every workflow, tool, or product exists to serve real human motivations and alleviate real human friction. Understanding emotional and operational blockers reveals why standard solutions often get rejected.",
    realWorldTransfer:
      "Conducting in-depth candidate & stakeholder discovery interviews to uncover hidden hesitations and misaligned expectations.",
    keyArtifact: "Candidate journey mapping & qualitative interview rubrics.",
    tags: ["User Discovery", "Empathy", "Interviewing"],
  },
  {
    id: "frame-problem",
    number: "02",
    title: "Frame the real problem before solving",
    subtitle: "Root causes over surface symptoms",
    description:
      "When stakeholders demand an immediate fix, the presented problem is often merely a symptom of broken upstream assumptions. Real value comes from asking the uncomfortable clarifying questions first.",
    realWorldTransfer:
      "Reframing impossible hiring briefs into structured capability scorecards based on actual team bottlenecks.",
    keyArtifact: "Problem definition canvas & stakeholder alignment matrix.",
    tags: ["Problem Framing", "Systems Thinking", "Root Cause Analysis"],
  },
  {
    id: "evidence-led",
    number: "03",
    title: "Evidence over assumption & intuition",
    subtitle: "Signals, market data, and feedback loops",
    description:
      "Opinions are cheap; market data and structured behavioral signals are not. Building consensus requires anchoring decisions in verifiable trends and rapid feedback loops rather than subjective bias.",
    realWorldTransfer:
      "Utilizing salary benchmarking, market mapping, and post-interview data to guide executive compensation decisions.",
    keyArtifact: "Benchmarking datasets & feedback telemetry loops.",
    tags: ["Market Intelligence", "Data-Informed", "Feedback Loops"],
  },
  {
    id: "actionable-complexity",
    number: "04",
    title: "Make complexity actionable",
    subtitle: "Ruthless prioritization under constraints",
    description:
      "Product work is fundamentally about navigating constrained resources, conflicting timelines, and imperfect information. Great execution means distilling ambiguity into clear sequential steps.",
    realWorldTransfer:
      "Managing 15+ concurrent specialized hiring searches with conflicting priorities, tight deadlines, and regulatory constraints.",
    keyArtifact: "Prioritization matrices & end-to-end workflow maps.",
    tags: ["Prioritization", "Cross-Functional Execution", "Workflow Optimization"],
  },
];
