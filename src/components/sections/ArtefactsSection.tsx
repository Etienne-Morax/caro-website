"use client";

import React, { useState } from "react";
import { artefactsData } from "@/data/artefacts";
import { Artefact } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArtefactModal } from "@/components/artefacts/ArtefactModal";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  FileSearch,
} from "lucide-react";
import { cn } from "@/lib/utils";

const filterCategories = [
  { label: "All Thinking", value: "all" },
  { label: "Case Studies", value: "case-study" },
  { label: "UX Teardowns", value: "teardown" },
  { label: "Product Essays", value: "essay" },
  { label: "Frameworks", value: "discovery" },
];

export const ArtefactsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeArtefact, setActiveArtefact] = useState<Artefact | null>(null);

  const filteredArtefacts = artefactsData.filter((art) => {
    if (selectedFilter === "all") return true;
    return art.type === selectedFilter;
  });

  return (
    <section id="artefacts" className="py-20 sm:py-28 border-b border-border bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          category="Selected Thinking & Artefacts"
          title="Tangible evidence of product craft"
          subtitle="Real problem breakdowns, UX teardowns, and mental model frameworks demonstrating structured discovery, trade-off analysis, and outcome measurement."
          annotation="Modular Product Artefacts"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist">
          {filterCategories.map((tab) => {
            const isSelected = selectedFilter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedFilter(tab.value)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-sans transition-all duration-150 border focus-visible:ring-2 focus-visible:ring-accent",
                  isSelected
                    ? "bg-ink text-canvas border-ink font-medium shadow-sm"
                    : "bg-surface text-ink-secondary border-border hover:bg-canvas-subtle hover:text-ink"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Artefacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArtefacts.map((art) => (
            <div
              key={art.slug}
              onClick={() => setActiveArtefact(art)}
              className={cn(
                "group cursor-pointer rounded-2xl bg-surface border border-border p-6 sm:p-7 shadow-paper hover:shadow-paper-hover transition-all duration-200 flex flex-col justify-between relative overflow-hidden",
                art.featured && "md:col-span-2 border-accent/40 bg-surface"
              )}
            >
              {art.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
              )}

              <div>
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={art.featured ? "accent" : art.isPlaceholder ? "highlight" : "default"}
                      size="sm"
                    >
                      {art.typeLabel}
                    </Badge>
                    <span className="font-mono text-xs text-ink-muted">
                      {art.readingTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-ink-muted">
                    <Calendar className="w-3 h-3 text-ink-faint" />
                    <span>{art.publishedAt}</span>
                  </div>
                </div>

                {/* Title and Problem Statement */}
                <div className="mt-4 space-y-2.5">
                  <h3
                    className={cn(
                      "font-serif font-normal text-ink group-hover:text-accent transition-colors",
                      art.featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                    )}
                  >
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-ink-secondary leading-relaxed">
                    {art.summary}
                  </p>

                  <div className="p-3 rounded-lg bg-canvas-subtle/80 border border-border-subtle mt-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold block mb-0.5">
                      Core Question Addressed:
                    </span>
                    <p className="font-serif text-xs sm:text-sm text-ink italic">
                      &ldquo;{art.oneLineProblem}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags & Read Action */}
              <div className="mt-6 pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {art.tags.map((tag) => (
                    <Badge key={tag} variant="default" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-accent font-semibold group-hover:translate-x-1 transition-transform">
                  <span>{art.isPlaceholder ? "Inspect placeholder" : "Read case study"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Modal */}
        <ArtefactModal
          artefact={activeArtefact}
          onClose={() => setActiveArtefact(null)}
        />
      </div>
    </section>
  );
};
