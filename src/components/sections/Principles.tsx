import React from "react";
import { principlesData } from "@/data/principles";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

/** Deliberately uneven spans so the grid reads editorial, not template. */
const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function Principles() {
  return (
    <section id="mindset" className="section-y relative overflow-hidden bg-paper">
      <div className="absolute inset-0 hairline-grid-paper opacity-60" aria-hidden="true" />

      <div className="shell relative">
        <SectionHeading
          index="01"
          eyebrow="Operating principles"
          title={
            <>
              Four rules that survived <em className="italic text-ember-deep">real</em> constraints.
            </>
          }
          intro="Not borrowed frameworks. These are the habits that decided outcomes when timelines, budgets and human expectations were all pulling in different directions."
        />

        <ul className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {principlesData.map((principle, index) => (
            <Reveal
              key={principle.id}
              as="li"
              delay={index * 0.07}
              className={cn("group", SPANS[index % SPANS.length])}
            >
              <article
                data-index={principle.number}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-card border border-paper-line bg-paper-card p-7 sm:p-9",
                  "transition-[transform,box-shadow,border-color] duration-[var(--dur-base)] ease-editorial",
                  "hover:-translate-y-1 hover:border-ember/40 hover:shadow-lift-lg",
                  // Decorative watermark numeral — a pseudo-element so it stays
                  // out of the accessibility tree entirely.
                  "before:pointer-events-none before:absolute before:-right-4 before:-top-8",
                  "before:font-display before:text-[8rem] before:leading-none before:text-ink/[0.045]",
                  "before:transition-colors before:duration-[var(--dur-base)] before:content-[attr(data-index)]",
                  "group-hover:before:text-ember/10",
                )}
              >
                <p className="type-label text-ember-deep">{principle.subtitle}</p>

                <h3 className="type-heading mt-4 max-w-md text-balance text-ink">
                  {principle.title}
                </h3>

                <p className="mt-4 max-w-prose text-[0.9375rem] leading-relaxed text-graphite">
                  {principle.description}
                </p>

                <div className="mt-7 space-y-4 border-t border-paper-line pt-6">
                  <div className="flex gap-4">
                    <span className="mt-1.5 h-px w-6 shrink-0 bg-ember" aria-hidden="true" />
                    <div>
                      <p className="type-label text-graphite-muted">Where it was earned</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink">
                        {principle.realWorldTransfer}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="mt-1.5 h-px w-6 shrink-0 bg-sage" aria-hidden="true" />
                    <div>
                      <p className="type-label text-graphite-muted">Artefact produced</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink">
                        {principle.keyArtifact}
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {principle.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
