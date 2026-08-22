"use client";

import React, { useEffect } from "react";
import { Artefact } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  X,
  Clock,
  Calendar,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Share2,
} from "lucide-react";

interface ArtefactModalProps {
  artefact: Artefact | null;
  onClose: () => void;
}

export const ArtefactModal: React.FC<ArtefactModalProps> = ({ artefact, onClose }) => {
  // Lock body scroll and listen for ESC key
  useEffect(() => {
    if (!artefact) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Update URL hash without scroll jumping
    window.history.replaceState(null, "", `#artefact-${artefact.slug}`);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.history.replaceState(null, "", "#artefacts");
    };
  }, [artefact, onClose]);

  if (!artefact) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="artefact-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-canvas rounded-2xl border border-border shadow-paper-lg flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface shrink-0">
          <div className="flex items-center gap-2">
            <Badge variant="accent" size="sm">
              {artefact.typeLabel}
            </Badge>
            <span className="font-mono text-xs text-ink-muted">
              {artefact.readingTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-ink-secondary hover:text-ink hover:bg-canvas-subtle transition-colors focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8 divide-y divide-border">
          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-ink-muted">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {artefact.publishedAt}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                {artefact.methodology}
              </span>
            </div>

            <h1
              id="artefact-modal-title"
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink font-normal leading-tight"
            >
              {artefact.title}
            </h1>

            <div className="p-4 rounded-xl bg-canvas-subtle border-l-4 border-accent space-y-1">
              <div className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                Central Problem Statement
              </div>
              <p className="font-serif text-base sm:text-lg text-ink italic leading-snug">
                &ldquo;{artefact.oneLineProblem}&rdquo;
              </p>
            </div>
          </div>

          {/* Placeholder Content Warning */}
          {artefact.isPlaceholder && (
            <div className="pt-8">
              <div className="p-6 rounded-xl bg-highlight/80 border border-highlight-border space-y-3">
                <div className="flex items-center gap-2 text-sm font-mono text-ink font-bold">
                  <AlertTriangle className="w-4 h-4 text-accent" />
                  <span>[CONTENT PLACEHOLDER: CAROLINE ACTION REQUIRED]</span>
                </div>
                <p className="text-sm font-sans text-ink leading-relaxed">
                  {artefact.placeholderMessage}
                </p>
                <div className="text-xs font-mono text-ink-secondary bg-surface/80 p-3 rounded-lg border border-border">
                  💡 <strong>How to publish this artefact:</strong> Edit the corresponding entry in{" "}
                  <code>src/data/artefacts.ts</code> and populate the 11-step case study structure.
                </div>
              </div>
            </div>
          )}

          {/* Complete 11-Step Case Study Layout */}
          {artefact.caseStudy && (
            <div className="pt-8 space-y-8 font-sans">
              {/* 1. Context & 2. Problem */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-accent font-bold">
                    01 / CONTEXT
                  </span>
                  <h3 className="font-serif text-lg font-medium text-ink">
                    Operating Environment
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {artefact.caseStudy.context}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs text-accent font-bold">
                    02 / PROBLEM FRAMING
                  </span>
                  <h3 className="font-serif text-lg font-medium text-ink">
                    The Underlying Friction
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {artefact.caseStudy.problem}
                  </p>
                </div>
              </div>

              {/* 3. Observations & 4. Assumptions */}
              <div className="space-y-4">
                <span className="font-mono text-xs text-accent font-bold">
                  03 / OBSERVATIONS & 04 / ASSUMPTIONS TESTED
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
                    <div className="font-medium text-xs font-mono text-ink uppercase">
                      Direct Observations
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                      {artefact.caseStudy.observations.map((obs, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span>{obs}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
                    <div className="font-medium text-xs font-mono text-ink uppercase">
                      Assumption vs Reality
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                      {artefact.caseStudy.assumptions.map((ass, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 shrink-0" />
                          <span>{ass}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Evidence & Research */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-accent font-bold">
                  05 / EVIDENCE & RESEARCH
                </span>
                <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
                  <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                    {artefact.caseStudy.evidenceResearch.map((ev, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span>{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 6. Stakeholder Needs */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-accent font-bold">
                  06 / STAKEHOLDER MATRIX & CONSTRAINTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {artefact.caseStudy.stakeholderNeeds.map((sn, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-canvas-subtle border border-border space-y-1.5"
                    >
                      <div className="font-serif text-sm font-medium text-ink">
                        {sn.stakeholder}
                      </div>
                      <p className="text-xs text-ink-secondary leading-snug">
                        <strong>Need:</strong> {sn.need}
                      </p>
                      <p className="text-[11px] font-mono text-ink-muted">
                        <strong>Constraint:</strong> {sn.constraint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Options Considered & 8. Prioritisation Trade-offs */}
              <div className="space-y-4">
                <span className="font-mono text-xs text-accent font-bold">
                  07 / OPTIONS CONSIDERED & 08 / TRADE-OFFS
                </span>
                <div className="space-y-2.5">
                  {artefact.caseStudy.optionsConsidered.map((opt, i) => (
                    <div
                      key={i}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm ${
                        opt.selected
                          ? "bg-sage-light/60 border-sage text-ink"
                          : "bg-surface border-border text-ink-secondary"
                      }`}
                    >
                      <div className="flex items-center justify-between font-medium">
                        <span>{opt.option}</span>
                        {opt.selected && (
                          <Badge variant="sage" size="sm">
                            Selected Path
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-ink-muted mt-1">
                        Evaluation: {opt.evaluation}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border text-xs sm:text-sm text-ink-secondary">
                  <strong>Trade-off Rationale:</strong> {artefact.caseStudy.prioritisationTradeoffs}
                </div>
              </div>

              {/* 9. Proposed Solution */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-accent font-bold">
                  09 / PROPOSED SOLUTION
                </span>
                <div className="p-5 rounded-xl bg-surface border border-border space-y-2">
                  <h4 className="font-serif text-lg font-normal text-ink">
                    The Lightweight Operational Solution
                  </h4>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {artefact.caseStudy.proposedSolution}
                  </p>
                </div>
              </div>

              {/* 10. Success Metrics */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-accent font-bold">
                  10 / MEASURING SUCCESS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {artefact.caseStudy.successMetrics.map((sm, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-surface border border-border space-y-1"
                    >
                      <div className="font-mono text-xs text-accent font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {sm.metric}
                      </div>
                      <div className="font-serif text-base text-ink font-medium">
                        {sm.targetIndicator}
                      </div>
                      <p className="text-[11px] text-ink-muted leading-tight">
                        {sm.whyItMatters}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 11. Learnings & Next Tests */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-accent font-bold">
                  11 / WHAT I LEARNED & WHAT TO TEST NEXT
                </span>
                <div className="p-4 rounded-xl bg-canvas-subtle border border-border text-sm text-ink-secondary leading-relaxed">
                  {artefact.caseStudy.learningsAndNextTests}
                </div>
              </div>
            </div>
          )}

          {/* Editorial Key Takeaways */}
          {artefact.editorialTakeaways && (
            <div className="pt-8 space-y-3">
              <span className="font-mono text-xs text-accent font-bold uppercase">
                Product Thinker Takeaways
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {artefact.editorialTakeaways.map((takeaway, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface border border-border text-xs sm:text-sm text-ink font-serif italic"
                  >
                    &ldquo;{takeaway}&rdquo;
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-6 flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {artefact.tags.map((tag) => (
                <Badge key={tag} variant="default" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button variant="secondary" size="sm" onClick={onClose}>
              Close Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
