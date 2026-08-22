import { NavItem } from "@/types";

export const siteConfig = {
  name: "Caroline",
  roleTitle: "Product-Minded Operator & Transitioning PM",
  location: "London, UK",
  statusLabel: "London · Exploring Product Opportunities",
  metaTitle: "Caroline — Product-Minded Operator & Transition Portfolio",
  metaDescription:
    "Caroline's product portfolio. Translating 4+ years of talent acquisition, stakeholder discovery, and complex workflow execution into structured product thinking.",
  email: "caroline.recruitment.product@example.com", // Contact placeholder for Caroline's actual email
  linkedin: "https://www.linkedin.com/in/caroline-portfolio-product",
  cvDownloadUrl: "#contact", // Will anchor or trigger CV request
  navItems: [
    { label: "Overview", href: "#overview", numberPrefix: "00" },
    { label: "Mindset", href: "#mindset", numberPrefix: "01" },
    { label: "About", href: "#about", numberPrefix: "02" },
    { label: "Experience", href: "#experience", numberPrefix: "03" },
    { label: "Bridge", href: "#bridge", numberPrefix: "04" },
    { label: "Artefacts", href: "#artefacts", numberPrefix: "05" },
    { label: "Contact", href: "#contact", numberPrefix: "06" },
  ] as NavItem[],
  copyright: `© ${new Date().getFullYear()} Caroline. Built with intentional product craft.`,
};
