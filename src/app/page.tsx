import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { ProductBridge } from "@/components/sections/ProductBridge";
import { ArtefactsSection } from "@/components/sections/ArtefactsSection";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-canvas text-ink selection:bg-accent-light selection:text-accent">
      {/* Persistent Navigation */}
      <Header />

      {/* Main One-Page Product Journey */}
      <main className="flex-1">
        {/* 00. Hero & Signature Interactive Mental Model */}
        <Hero />

        {/* 01. Product Mindset: 4 Core Principles */}
        <Principles />

        {/* 02. About: The Authentic Career Pivot Narrative */}
        <About />

        {/* 03. Experience: Verified Facts + Product Lens */}
        <Experience />

        {/* 04. Experience-to-Product Bridge: Transferable Matrix */}
        <ProductBridge />

        {/* 05. Selected Artefacts & 11-Step Case Studies */}
        <ArtefactsSection />

        {/* 06. Contact & Direct Next Steps */}
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}
