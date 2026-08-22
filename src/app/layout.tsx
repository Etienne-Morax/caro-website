import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#131519",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://caroline-portfolio.com"),
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "Product Management",
    "Product Thinking",
    "Talent Acquisition Transition",
    "Stakeholder Discovery",
    "User Research",
    "Workflow Optimization",
    "Product Portfolio",
    "Caroline",
    "London Product Manager",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://caroline-portfolio.com",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    siteName: `${siteConfig.name} — Product Portfolio`,
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Turning messy human problems into clear product decisions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    images: ["/og-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.roleTitle,
    description: siteConfig.metaDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
    sameAs: [siteConfig.linkedin],
  };

  return (
    <html lang="en" className={`${sans.variable} ${display.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ink text-graphite antialiased">
        <a
          href="#overview"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-pill focus:bg-ember focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
