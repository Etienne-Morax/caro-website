import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/ui/Marquee";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { ProductBridge } from "@/components/sections/ProductBridge";
import { ArtefactsSection } from "@/components/sections/ArtefactsSection";
import { Contact } from "@/components/sections/Contact";

const MARQUEE_ITEMS = [
  "Stakeholder discovery",
  "Problem framing",
  "Trade-off analysis",
  "Journey mapping",
  "Market intelligence",
  "Ruthless prioritisation",
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <Header />

      <main className="flex-1">
        {/* 00 — Noir hero + signature reasoning loop */}
        <Hero />

        {/* Ember transition band: ink → paper */}
        <Marquee items={MARQUEE_ITEMS} />

        {/* 01 — Operating principles */}
        <Principles />

        {/* 02 — The pivot narrative */}
        <About />

        {/* 03 — Verified experience, read through a product lens */}
        <Experience />

        {/* 04 — Translation matrix */}
        <ProductBridge />

        {/* 05 — Case studies & artefacts */}
        <ArtefactsSection />

        {/* 06 — Contact */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
