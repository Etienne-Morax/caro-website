import { ExperienceRole, EducationItem } from "@/types";

export const experienceData: ExperienceRole[] = [
  {
    id: "lawrence-harvey",
    company: "Lawrence Harvey",
    role: "Recruitment Consultant — Audit, Risk & Finance",
    period: "April 2025 – Present",
    location: "London, United Kingdom",
    isCurrent: true,
    domain: "Specialist Recruitment & Talent Advisory",
    companyContext:
      "Global recruitment agency specializing in niche technology, risk, audit, and financial services placements.",
    coreResponsibilities: [
      "Led end-to-end stakeholder discovery with hiring leaders to define nuanced role requirements and resolve misalignments across complex corporate hierarchies.",
      "Managed multiple concurrent full-cycle searches under strict timeline and compliance constraints across London financial institutions.",
      "Delivered quantitative and qualitative market intelligence, compensation benchmarking, and talent availability reports to advise executive hiring strategies.",
      "Owned the end-to-end candidate journey from sourcing to structured competency assessments, negotiation, and onboarding feedback.",
    ],
    productLens: {
      headline: "Multi-Stakeholder Discovery & Constraint Management",
      competency: "Stakeholder Alignment & Sizing",
      explanation:
        "Translating ambiguous hiring briefs into precise competency criteria is identical to framing user requirements and validating product feasibility before building.",
    },
  },
  {
    id: "emerique-partners",
    company: "Emerique & Partners",
    role: "Recruitment Consultant — Compliance, Audit & Risk",
    period: "March 2024 – April 2025",
    location: "London, United Kingdom",
    isCurrent: false,
    domain: "Private Equity, Asset Management & Investment Banking",
    companyContext:
      "Boutique executive search consultancy focused on senior compliance, governance, and risk professionals in Tier-1 financial institutions.",
    coreResponsibilities: [
      "Partnered directly with Heads of Compliance and Chief Risk Officers to scope strategic regulatory hires across private equity and asset managers.",
      "Conducted structured, competency-based interviews to evaluate candidates against tight technical and cultural parameters.",
      "Established systematic post-interview feedback loops with clients and candidates to rapidly iterate search profiles.",
      "Monitored regulatory shifts (FCA/PRA guidelines) to anticipate emerging skill shortages and build proactive talent pipelines.",
    ],
    productLens: {
      headline: "Iterative Feedback Loops & Market Sensing",
      competency: "Market Research & Continuous Discovery",
      explanation:
        "Using post-interview debrief data to calibrate search criteria operates exactly like running sprint retrospectives and iterative usability tests.",
    },
  },
  {
    id: "ecolab",
    company: "Ecolab",
    role: "Talent Acquisition & HR Coordinator",
    period: "June 2022 – February 2024",
    location: "Paris, France",
    isCurrent: false,
    domain: "Global Water, Hygiene & Infection Prevention Solutions (Fortune 500)",
    companyContext:
      "Global sustainability and industrial hygiene leader with over 47,000 employees worldwide.",
    coreResponsibilities: [
      "Coordinated full-lifecycle talent acquisition and employee onboarding processes across French business units.",
      "Supported HR advisory operations, workforce planning, and talent pipeline reporting during the large-scale Bioquell-Ecolab post-merger integration.",
      "Audited and maintained HR information system data integrity, documentation compliance, and employee lifecycle workflows.",
      "Facilitated learning and development initiatives, streamlining training scheduling and collecting employee experience feedback.",
    ],
    productLens: {
      headline: "Systems Architecture & Change Operations",
      competency: "Service Blueprinting & Systems Thinking",
      explanation:
        "Managing operational transitions during a corporate merger requires understanding inter-departmental dependencies, data contracts, and user resistance — core tenets of platform product management.",
    },
  },
];

export const educationData: EducationItem[] = [
  {
    institution: "Higher Education Institution",
    degree: "Master's Degree / Postgraduate Studies in HR & International Business",
    location: "Paris / London",
    period: "Verified",
    details: "Bilingual English / French professional proficiency.",
  },
  {
    institution: "University Faculty",
    degree: "Bachelor's Degree in Business Administration & Management",
    location: "France",
    period: "Verified",
    details: "Core modules in organizational behavior, statistics, economics, and business law.",
  },
];
