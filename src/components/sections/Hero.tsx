import React from "react";
import { profileData } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { InteractiveProductLoop } from "./InteractiveProductLoop";
import { ArrowDown, FileText, Sparkles, MapPin } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-border"
    >
      {/* Subtle paper background texture */}
      <div className="absolute inset-0 bg-notebook-grid opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          {/* Status & Location Pill */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <Badge variant="mono" size="md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1" />
              PRODUCT-MINDED OPERATOR
            </Badge>
            <Badge variant="default" size="md" className="hidden sm:inline-flex">
              <MapPin className="w-3 h-3 text-ink-muted" />
              <span>London · Bilingual FR/EN</span>
            </Badge>
          </div>

          {/* Core Master Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-ink leading-[1.12]">
            {profileData.heroHeadline}
          </h1>

          {/* Subheadline & Value Proposition */}
          <p className="mt-6 text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans font-normal max-w-2xl">
            {profileData.heroSubheadline}
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button
              href="#artefacts"
              variant="editorial"
              size="lg"
              icon={<Sparkles className="w-4 h-4" />}
            >
              Explore my thinking
            </Button>

            <Button
              href="#experience"
              variant="secondary"
              size="lg"
              icon={<FileText className="w-4 h-4" />}
            >
              View verified experience
            </Button>
          </div>
        </div>

        {/* Signature Interactive Device */}
        <div className="mt-14 sm:mt-16">
          <InteractiveProductLoop />
        </div>
      </div>
    </section>
  );
};
