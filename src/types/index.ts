export interface Profile {
  name: string;
  roleTitle: string;
  location: string;
  currentStatus: string;
  email: string;
  linkedin: string;
  github?: string;
  cvPath?: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroInteractivePill: string;
  narrativeLead: string;
  narrativeSections: {
    title: string;
    content: string;
    highlight?: string;
  }[];
}

export interface MentalModelStep {
  step: string;
  title: string;
  shortDescription: string;
  questionPrompt: string;
  recruitmentParallel: string;
  productCompetency: string;
}

export interface Principle {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  realWorldTransfer: string;
  keyArtifact: string;
  tags: string[];
}

export interface ExperienceRole {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  domain: string;
  companyContext: string;
  coreResponsibilities: string[];
  productLens: {
    headline: string;
    competency: string;
    explanation: string;
  };
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details?: string;
}

export interface BridgeItem {
  id: string;
  priorDomainActivity: string;
  priorContext: string;
  productDiscipline: string;
  transferRationale: string;
  iconName: string;
}

export interface CaseStudySections {
  context: string;
  problem: string;
  observations: string[];
  assumptions: string[];
  evidenceResearch: string[];
  stakeholderNeeds: {
    stakeholder: string;
    need: string;
    constraint: string;
  }[];
  optionsConsidered: {
    option: string;
    evaluation: string;
    selected: boolean;
  }[];
  prioritisationTradeoffs: string;
  proposedSolution: string;
  successMetrics: {
    metric: string;
    whyItMatters: string;
    targetIndicator: string;
  }[];
  learningsAndNextTests: string;
}

export interface Artefact {
  slug: string;
  title: string;
  type: 'case-study' | 'teardown' | 'essay' | 'discovery' | 'experiment' | 'framework';
  typeLabel: string;
  oneLineProblem: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
  isPlaceholder?: boolean;
  placeholderMessage?: string;
  methodology: string;
  caseStudy?: CaseStudySections;
  editorialTakeaways?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  numberPrefix?: string;
}
