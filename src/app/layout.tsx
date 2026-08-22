import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
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
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-ink antialiased selection:bg-accent-light selection:text-accent">
        {children}
      </body>
    </html>
  );
}
