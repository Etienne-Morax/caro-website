"use client";

import React, { useEffect, useRef } from "react";
import { Artefact } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { CloseIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface ArtefactModalProps {
  artefact: Artefact | null;
  onClose: () => void;
}

/** Numbered step header used throughout the 11-step reader. */
function StepLabel({ children }: { children: React.ReactNode }) {
  return <p className="type-label text-ember-deep">{children}</p>;
}

export function ArtefactModal({ artefact, onClose }: ArtefactModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!artefact) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.history.replaceState(null, "", `#artefact-${artefact.slug}`);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.history.replaceState(null, "", "#artefacts");
      previouslyFocused.current?.focus();
    };
  }, [artefact, onClose]);

  if (!artefact) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/70 backdrop-blur-md sm:items-center sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="artefact-modal-title"
      onClick={onClose}
    >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-card border border-paper-line bg-paper shadow-lift-lg sm:rounded-card"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Sticky bar */}
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-paper-line bg-paper-card px-5 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <Badge tone="ember">{artefact.typeLabel}</Badge>
                <span className="text-xs text-graphite-muted">{artefact.readingTime}</span>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-pill border border-paper-line text-graphite transition-colors duration-[var(--dur-fast)] hover:border-ink/40 hover:text-ink"
              >
                <span className="sr-only">Close case study</span>
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto px-5 py-8 sm:px-8 md:px-12">
              <header className="max-w-3xl">
                <p className="text-xs text-graphite-muted">
                  {artefact.publishedAt} · {artefact.methodology}
                </p>

                <h2
                  id="artefact-modal-title"
                  className="type-title mt-4 text-balance text-ink"
                  style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}
                >
                  {artefact.title}
                </h2>

                <div className="mt-7 border-l-2 border-ember bg-ember-wash py-4 pl-5 pr-4">
                  <StepLabel>Central problem statement</StepLabel>
                  <p className="mt-2 font-display text-lg italic leading-snug text-ink sm:text-xl">
                    “{artefact.oneLineProblem}”
                  </p>
                </div>
              </header>

              {artefact.isPlaceholder ? (
                <div className="mt-8 rounded-card border border-sage/30 bg-sage-light p-6">
                  <p className="type-label text-sage">Draft in progress</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink">
                    {artefact.placeholderMessage}
                  </p>
                  <p className="mt-4 rounded-lg border border-sage/20 bg-paper-card p-3 text-xs leading-relaxed text-graphite">
                    To publish: populate the 11-step structure for this entry in{" "}
                    <code className="text-ink">src/data/artefacts.ts</code>.
                  </p>
                </div>
              ) : null}

              {artefact.caseStudy ? (
                <div className="mt-12 space-y-12">
                  {/* 01 / 02 */}
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <section>
                      <StepLabel>01 — Context</StepLabel>
                      <h3 className="type-heading mt-3 text-ink">Operating environment</h3>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-graphite">
                        {artefact.caseStudy.context}
                      </p>
                    </section>
                    <section>
                      <StepLabel>02 — Problem framing</StepLabel>
                      <h3 className="type-heading mt-3 text-ink">The underlying friction</h3>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-graphite">
                        {artefact.caseStudy.problem}
                      </p>
                    </section>
                  </div>

                  {/* 03 / 04 */}
                  <section>
                    <StepLabel>03 — Observations · 04 — Assumptions tested</StepLabel>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        {
                          title: "Direct observations",
                          items: artefact.caseStudy.observations,
                          dot: "bg-ember",
                        },
                        {
                          title: "Assumption vs reality",
                          items: artefact.caseStudy.assumptions,
                          dot: "bg-sage",
                        },
                      ].map((block) => (
                        <div
                          key={block.title}
                          className="rounded-card border border-paper-line bg-paper-card p-5"
                        >
                          <p className="type-label text-graphite-muted">{block.title}</p>
                          <ul className="mt-3 space-y-2.5">
                            {block.items.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span
                                  aria-hidden="true"
                                  className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", block.dot)}
                                />
                                <span className="text-sm leading-relaxed text-graphite">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 05 */}
                  <section>
                    <StepLabel>05 — Evidence &amp; research</StepLabel>
                    <ul className="mt-4 divide-y divide-paper-line rounded-card border border-paper-line bg-paper-card">
                      {artefact.caseStudy.evidenceResearch.map((item) => (
                        <li key={item} className="flex gap-3 p-5">
                          <span className="mt-1.5 h-px w-5 shrink-0 bg-sage" aria-hidden="true" />
                          <span className="text-sm leading-relaxed text-graphite">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* 06 */}
                  <section>
                    <StepLabel>06 — Stakeholder matrix &amp; constraints</StepLabel>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {artefact.caseStudy.stakeholderNeeds.map((need) => (
                        <div
                          key={need.stakeholder}
                          className="rounded-card border border-paper-line bg-paper-sunk p-5"
                        >
                          <p className="font-display text-lg text-ink">{need.stakeholder}</p>
                          <p className="mt-3 text-sm leading-relaxed text-graphite">{need.need}</p>
                          <p className="mt-3 border-t border-paper-line pt-3 text-xs leading-relaxed text-graphite-muted">
                            Constraint — {need.constraint}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 07 / 08 */}
                  <section>
                    <StepLabel>07 — Options considered · 08 — Trade-offs</StepLabel>
                    <ul className="mt-4 space-y-3">
                      {artefact.caseStudy.optionsConsidered.map((option) => (
                        <li
                          key={option.option}
                          className={cn(
                            "rounded-card border p-5",
                            option.selected
                              ? "border-sage/40 bg-sage-light"
                              : "border-paper-line bg-paper-card",
                          )}
                        >
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <p className="text-[0.9375rem] font-medium text-ink">{option.option}</p>
                            {option.selected ? <Badge tone="sage">Selected path</Badge> : null}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-graphite">
                            {option.evaluation}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 border-l-2 border-ink/20 pl-5 text-[0.9375rem] leading-relaxed text-graphite">
                      <span className="font-medium text-ink">Trade-off rationale — </span>
                      {artefact.caseStudy.prioritisationTradeoffs}
                    </p>
                  </section>

                  {/* 09 */}
                  <section>
                    <StepLabel>09 — Proposed solution</StepLabel>
                    <div className="mt-4 rounded-card border border-ink/10 bg-ink p-7">
                      <p className="font-display text-xl text-paper sm:text-2xl">
                        The lightweight operational solution
                      </p>
                      <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-paper/60">
                        {artefact.caseStudy.proposedSolution}
                      </p>
                    </div>
                  </section>

                  {/* 10 */}
                  <section>
                    <StepLabel>10 — Measuring success</StepLabel>
                    <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {artefact.caseStudy.successMetrics.map((metric) => (
                        <div
                          key={metric.metric}
                          className="rounded-card border border-paper-line bg-paper-card p-5"
                        >
                          <dt className="type-label text-ember-deep">{metric.metric}</dt>
                          <dd className="mt-3 font-display text-lg leading-snug text-ink">
                            {metric.targetIndicator}
                          </dd>
                          <dd className="mt-2 text-xs leading-relaxed text-graphite-muted">
                            {metric.whyItMatters}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>

                  {/* 11 */}
                  <section>
                    <StepLabel>11 — Learnings &amp; next tests</StepLabel>
                    <p className="mt-4 rounded-card border border-paper-line bg-paper-sunk p-6 text-[0.9375rem] leading-relaxed text-graphite">
                      {artefact.caseStudy.learningsAndNextTests}
                    </p>
                  </section>
                </div>
              ) : null}

              {artefact.editorialTakeaways ? (
                <section className="mt-12">
                  <StepLabel>Product takeaways</StepLabel>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {artefact.editorialTakeaways.map((takeaway) => (
                      <p
                        key={takeaway}
                        className="border-t-2 border-ember pt-4 font-display text-lg italic leading-snug text-ink"
                      >
                        “{takeaway}”
                      </p>
                    ))}
                  </div>
                </section>
              ) : null}

              <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-paper-line pt-6">
                <ul className="flex flex-wrap gap-2">
                  {artefact.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-pill border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-[var(--dur-fast)] hover:border-ink/60"
                >
                  Close case study
                </button>
              </footer>
            </div>
          </div>
    </div>
  );
}
