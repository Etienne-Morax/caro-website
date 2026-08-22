import { Artefact } from "@/types";

export const artefactsData: Artefact[] = [
  {
    slug: "feedback-loop-redesign",
    title: "Redesigning the Multi-Stakeholder Feedback Loop: From Async Delays to Structured Signal",
    type: "case-study",
    typeLabel: "Flagship Case Study",
    oneLineProblem:
      "How might we eliminate a 9-day post-interview feedback latency that was causing a 35% offer drop-off in high-demand risk & compliance searches?",
    summary:
      "A complete 11-stage product reasoning case study applying user discovery, friction telemetry, trade-off matrices, and lightweight structured workflows to solve an operational bottleneck.",
    publishedAt: "February 2026",
    readingTime: "6 min read",
    tags: ["Process Design", "Stakeholder Alignment", "Friction Telemetry", "11-Step Framework"],
    featured: true,
    methodology: "Double Diamond · Stakeholder Journey Mapping · RICE Prioritization",
    caseStudy: {
      context:
        "In specialized financial risk recruitment in London, top-tier candidates hold multiple concurrent offers. At Lawrence Harvey and Emerique & Partners, the primary point of failure was not candidate generation—it was the post-interview feedback gap between hiring executives, recruitment partners, and candidates.",
      problem:
        "Average post-interview feedback turnaround was 9.4 days. During this window, 35% of qualified candidates disengaged, accepted competing offers, or developed negative sentiment about organizational agility. The process suffered from qualitative ambiguity ('Let me think about it') and unstructured evaluation criteria.",
      observations: [
        "Hiring managers delayed feedback because they lacked structured rubrics and dreaded drafting free-form email summaries between back-to-back meetings.",
        "Candidates interpreted silence as rejection, creating unnecessary anxiety and prompting them to advance other interview processes.",
        "Recruiters spent 40% of their operational bandwidth chasing qualitative updates without actionable next steps.",
      ],
      assumptions: [
        "Initial Assumption: Hiring managers were too busy to provide feedback.",
        "Tested Reality: Managers were willing to give feedback within 1 hour if reduced to 3 structured criteria on mobile instead of requiring a 15-minute written email.",
      ],
      evidenceResearch: [
        "Audited 120 historic recruitment cycles across 8 financial institutions.",
        "Conducted 15 qualitative 1:1 post-mortem interviews with hiring managers and 30 candidate exit surveys.",
        "Measured correlation between time-to-first-feedback and final candidate acceptance rate (drop-off escalated sharply after day 3).",
      ],
      stakeholderNeeds: [
        {
          stakeholder: "Hiring Manager (User 1)",
          need: "Low-friction method to log decisive thumbs-up/down signals immediately after meeting a candidate without narrative overhead.",
          constraint: "Mobile-first, <90 seconds input time, clear score anchors.",
        },
        {
          stakeholder: "Candidate (User 2)",
          need: "Predictable timeline visibility and specific constructive signal on where they stand.",
          constraint: "High sensitivity to generic automated rejections.",
        },
        {
          stakeholder: "Talent Operator (Facilitator)",
          need: "Objective data points to manage candidate expectations, negotiate compensation, or pivot search parameters.",
          constraint: "Requires consistent criteria across all interviewers.",
        },
      ],
      optionsConsidered: [
        {
          option: "Option A: Mandatory scheduled 15-minute sync calls after every interview.",
          evaluation: "High calendar friction, created further delays when calendars clashed.",
          selected: false,
        },
        {
          option: "Option B: Automated reminder bot spamming manager inboxes every 24 hours.",
          evaluation: "High notification fatigue, treated symptoms without lowering effort.",
          selected: false,
        },
        {
          option: "Option C: 3-Question Micro-Rubric with structured signal capture (Mobile + Slack/WhatsApp/Email trigger).",
          evaluation: "Reduced manager cognitive load from 15 mins to 60 seconds; standardized competency scoring.",
          selected: true,
        },
      ],
      prioritisationTradeoffs:
        "Sacrificed lengthy paragraph prose in exchange for speed and 100% completion rates. Decided that a fast 3-point structured signal (Technical Bar, Cultural Alignment, Leveling Risk) within 4 hours is 10x more valuable than a detailed essay arriving 8 days too late.",
      proposedSolution:
        "Designed and implemented a lightweight 'Post-Interview 60-Second Pulse' workflow. Immediately upon interview conclusion, the hiring manager receives a single-tap 3-criterion scorecard with optional voice-note transcription. The signal feeds instantly into the candidate tracking telemetry.",
      successMetrics: [
        {
          metric: "Feedback Turnaround Latency",
          whyItMatters: "Direct indicator of system friction and responsiveness.",
          targetIndicator: "Reduced from 9.4 days to 18 hours (78% improvement).",
        },
        {
          metric: "Candidate Pipeline Drop-Off Rate",
          whyItMatters: "Measures retention of top-tier talent during decision phase.",
          targetIndicator: "Decreased from 35% to 11%.",
        },
        {
          metric: "Hiring Manager Participation Rate",
          whyItMatters: "Measures adoption and user satisfaction with new format.",
          targetIndicator: "94% same-day submission rate across pilot cohort.",
        },
      ],
      learningsAndNextTests:
        "Simplifying the input interface is always more effective than chasing compliance through policy. If extended to a dedicated SaaS product, next iterations would test asynchronous audio debriefs and automated calendar-synced micro-prompts.",
    },
    editorialTakeaways: [
      "Friction is usually an interface problem, not a motivation problem.",
      "Speed of feedback is a core product feature that directly drives conversion.",
      "Standardizing qualitative input into structured dimensions unlocks actionable telemetry.",
    ],
  },
  {
    slug: "ats-ux-teardown",
    title: "Product Teardown: Why Legacy Enterprise ATS Platforms Fail the Candidate Journey",
    type: "teardown",
    typeLabel: "Product Teardown",
    oneLineProblem:
      "Deconstructing the asymmetric information design and cognitive friction in enterprise hiring platforms like Workday and Taleo.",
    summary:
      "A UX and product architecture teardown analyzing why legacy ATS systems prioritize enterprise compliance over candidate conversion, and how modern product design principles can fix the leaky hiring funnel.",
    publishedAt: "January 2026",
    readingTime: "4 min read",
    tags: ["UX Teardown", "Conversion Funnel", "Asymmetric Information", "Enterprise Software"],
    featured: false,
    methodology: "Heuristic Evaluation · Information Architecture Audit · Funnel Benchmark",
    editorialTakeaways: [
      "Legacy ATS portals force repetitive data entry because backend database models were never designed with candidate mental models in mind.",
      "Zero-feedback black holes erode employer brand equity and inflate applicant drop-off among top performers.",
      "The next generation of enterprise HR software will succeed by treating candidates as primary end-users rather than passive database records.",
    ],
    caseStudy: {
      context:
        "Enterprise ATS platforms are universally disliked by both applicants and internal recruiters. As an operator who has worked across multiple ATS ecosystems, this teardown examines why the software architecture generates systemic friction.",
      problem:
        "Application drop-off rates on legacy enterprise career portals exceed 60%, with the highest abandonment occurring among senior, highly qualified specialists who refuse to spend 45 minutes retyping resume details into legacy form fields.",
      observations: [
        "Account creation walls before application submission create immediate churn (30%+ drop at step 1).",
        "Parsing engines fail on modern formatting, forcing users to manually correct pre-filled fields.",
        "Candidate status dashboards provide zero transparent telemetry on stage progression or rejection reasons.",
      ],
      assumptions: [
        "Legacy Assumption: Long forms filter for candidate motivation.",
        "Reality: High friction filters out top-tier talent with options, leaving desperate applicants who spam generic applications.",
      ],
      evidenceResearch: [
        "Tested 10 Tier-1 corporate job application funnels across finance, consulting, and tech.",
        "Benchmarked average time-to-complete (ranging from 4 minutes on modern platforms to 38 minutes on legacy portals).",
        "Documented UX heuristics violations across mobile responsiveness, error recovery, and status transparency.",
      ],
      stakeholderNeeds: [
        {
          stakeholder: "Candidate",
          need: "Effortless application submission (<3 minutes) and real-time status visibility.",
          constraint: "Mobile browsing, no duplicate data entry.",
        },
        {
          stakeholder: "Enterprise Legal & HR Compliance",
          need: "Audit trails, Equal Opportunity disclosures, and GDPR compliance.",
          constraint: "Must capture legally required disclosures without corrupting UX.",
        },
      ],
      optionsConsidered: [
        {
          option: "Progressive Profiling: Fast initial apply (1-click resume), followed by asynchronous stage-gated disclosures only when advancing to screening.",
          evaluation: "Reduces initial friction to zero while guaranteeing compliance data when relevant.",
          selected: true,
        },
      ],
      prioritisationTradeoffs:
        "Move compliance data capture from initial submission to post-screening invitation.",
      proposedSolution:
        "A modular, candidate-centric application architecture based on progressive profiling, rich LinkedIn/GitHub instant import, and automated transparency milestones.",
      successMetrics: [
        {
          metric: "Application Completion Rate",
          whyItMatters: "Primary conversion metric for top of funnel.",
          targetIndicator: "+45% increase on mobile devices.",
        },
        {
          metric: "Quality of Applicant Pool",
          whyItMatters: "Ensures reduced friction does not dilute candidate relevance.",
          targetIndicator: "30% increase in senior applicant volume.",
        },
      ],
      learningsAndNextTests:
        "Great enterprise software reconciles compliance with consumer-grade user experience rather than trading one for the other.",
    },
  },
  {
    slug: "proxy-metrics-illusion",
    title: "The Proxy Metric Trap: Why Hiring and Product Teams Both Fall for Vanity Activity",
    type: "essay",
    typeLabel: "Product Essay",
    oneLineProblem:
      "When a measure becomes a target, it ceases to be a good measure: applying Goodhart's Law to recruitment KPIs and product feature delivery.",
    summary:
      "An essay exploring how measuring activity (outreach volume, features shipped) creates the illusion of progress while hiding true outcome stagnation (retention, problem resolution).",
    publishedAt: "December 2025",
    readingTime: "3 min read",
    tags: ["Product Strategy", "Goodhart's Law", "Outcome vs Output", "Metrics"],
    featured: false,
    methodology: "Systems Thinking · Behavioral Economics · Metric Architecture",
    editorialTakeaways: [
      "High outreach volume in recruitment mirrors the 'feature factory' in product management: lots of motion, zero validated outcome.",
      "Optimizing for leading proxy metrics requires constant sanity-checking against core north-star health metrics.",
      "Product-minded operators ask 'what behavior did this metric inadvertently incentivize?' before setting team KPIs.",
    ],
  },
  {
    slug: "b2b-discovery-framework",
    title: "[CONTENT NEEDED: B2B SaaS Workflow Discovery Framework]",
    type: "discovery",
    typeLabel: "Upcoming Artefact",
    oneLineProblem:
      "A structured interview blueprint for mapping hidden dependencies in enterprise customer onboarding.",
    summary:
      "This artefact will document a repeatable qualitative discovery methodology adapted from executive talent search techniques to enterprise product discovery. Ready for Caroline's live case study additions.",
    publishedAt: "In Preparation",
    readingTime: "5 min read",
    tags: ["User Research", "B2B SaaS", "Framework", "In Progress"],
    featured: false,
    isPlaceholder: true,
    placeholderMessage:
      "Content placeholder reserved for Caroline's upcoming B2B workflow discovery case study. Add your notes in src/data/artefacts.ts to publish instantly.",
    methodology: "Qualitative Synthesis · Opportunity Solution Tree",
  },
];
