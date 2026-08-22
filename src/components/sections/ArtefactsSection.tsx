"use client";

import React, { useEffect, useState } from "react";
import { artefactsData } from "@/data/artefacts";
import { Artefact } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { ArtefactModal } from "@/components/artefacts/ArtefactModal";
import { cn } from "@/lib/utils";

const featured = artefactsData.find((item) => item.featured);
const rest = artefactsData.filter((item) => !item.featured);

export function ArtefactsSection() {
  const [openArtefact, setOpenArtefact] = useState<Artefact | null>(null);

  /** Deep link support: /#artefact-<slug> opens the reader on load. */
  useEffect(() => {
    const slug = window.location.hash.replace("#artefact-", "");
    if (!slug || !window.location.hash.startsWith("#artefact-")) return;
    const match = artefactsData.find((item) => item.slug === slug);
    if (match) setOpenArtefact(match);
  }, []);

  return (
    <section id="artefacts" className="section-y relative bg-paper-sunk">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Selected artefacts"
          title="Reasoning, shown in full."
          intro="Each case study runs the same eleven steps — context, framing, evidence, options, trade-offs, metrics, learnings. No polished conclusions without the working underneath."
        />

        {/* Featured */}
        {featured ? (
          <Reveal delay={0.08}>
            <button
              type="button"
              onClick={() => setOpenArtefact(featured)}
              className="group mt-16 grid w-full grid-cols-1 overflow-hidden rounded-card border border-ink/10 bg-ink text-left shadow-lift-lg transition-transform duration-[var(--dur-base)] ease-editorial hover:-translate-y-1 lg:grid-cols-12"
            >
              <div className="relative grain flex flex-col justify-between gap-10 p-8 sm:p-12 lg:col-span-7">
                <div className="aurora opacity-70" aria-hidden="true" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone="ember-on-ink">{featured.typeLabel}</Badge>
                    <span className="text-xs text-paper/60">
                      {featured.publishedAt} · {featured.readingTime}
                    </span>
                  </div>

                  <h3 className="type-title mt-7 max-w-2xl text-balance text-paper">
                    {featured.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-paper/55">
                    {featured.summary}
                  </p>
                </div>

                <span className="relative inline-flex items-center gap-3 text-ember">
                  <span className="type-label">Open the full reader</span>
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-[var(--dur-fast)] ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>

              <div className="relative flex flex-col justify-center gap-6 border-t border-paper/10 bg-paper/[0.03] p-8 sm:p-12 lg:col-span-5 lg:border-l lg:border-t-0">
                <div>
                  <p className="type-label text-paper/55">The question</p>
                  <p className="mt-3 font-display text-xl italic leading-snug text-paper sm:text-2xl">
                    “{featured.oneLineProblem}”
                  </p>
                </div>

                <div className="border-t border-paper/10 pt-6">
                  <p className="type-label text-paper/55">Method</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    {featured.methodology}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {featured.tags.slice(0, 4).map((tag) => (
                    <li key={tag}>
                      <Badge tone="ink">{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          </Reveal>
        ) : null}

        {/* Remaining artefacts */}
        <ul className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((artefact, index) => (
            <Reveal key={artefact.slug} as="li" delay={index * 0.06}>
              <button
                type="button"
                onClick={() => setOpenArtefact(artefact)}
                className={cn(
                  "group flex h-full w-full flex-col rounded-card border border-paper-line bg-paper-card p-7 text-left",
                  "transition-[transform,box-shadow,border-color] duration-[var(--dur-base)] ease-editorial",
                  "hover:-translate-y-1 hover:border-ember/40 hover:shadow-lift",
                  artefact.isPlaceholder && "border-dashed",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <Badge tone={artefact.isPlaceholder ? "sage" : "ember"}>
                    {artefact.typeLabel}
                  </Badge>
                  <ArrowUpRightIcon className="h-4 w-4 text-graphite-faint transition-all duration-[var(--dur-fast)] ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                </div>

                <h3 className="type-heading mt-6 text-balance text-ink">{artefact.title}</h3>

                <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-graphite">
                  {artefact.summary}
                </p>

                <p className="mt-6 border-t border-paper-line pt-4 text-xs text-graphite-muted">
                  {artefact.publishedAt} · {artefact.readingTime}
                </p>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <ArtefactModal artefact={openArtefact} onClose={() => setOpenArtefact(null)} />
    </section>
  );
}
