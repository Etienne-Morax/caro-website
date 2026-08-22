import React from "react";
import { experienceData, educationData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      data-tone="ink"
      className="grain section-y relative overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 hairline-grid opacity-50" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-ember/[0.07] to-transparent"
      />

      <div className="shell relative">
        <SectionHeading
          onInk
          index="03"
          eyebrow="Verified experience"
          title="Three roles, one consistent job: make ambiguous demand executable."
          intro="Each record below is factual. The ember annotation underneath is the product reading of that work — the competency it actually built."
        />

        <ol className="mt-16 flex flex-col">
          {experienceData.map((role, index) => (
            <Reveal key={role.id} as="li" delay={0.05}>
              <article className="group grid grid-cols-1 gap-8 border-t border-paper/15 py-10 transition-colors duration-[var(--dur-base)] hover:border-ember/40 md:grid-cols-12 md:gap-10 md:py-14">
                {/* Meta rail */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="type-label tabular-nums text-ember">0{index + 1}</span>
                    {role.isCurrent ? (
                      <span className="inline-flex items-center gap-1.5 rounded-pill border border-ember/40 px-2.5 py-0.5 text-[0.6875rem] font-semibold text-ember">
                        <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                        Current
                      </span>
                    ) : null}
                  </div>

                  <h3 className="type-heading mt-4 text-paper">{role.company}</h3>
                  <p className="mt-2 text-sm text-paper/60">{role.period}</p>
                  <p className="text-sm text-paper/60">{role.location}</p>
                  <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
                    {role.companyContext}
                  </p>
                </div>

                {/* Substance */}
                <div className="md:col-span-8">
                  <p className="font-display text-xl text-paper sm:text-2xl">{role.role}</p>
                  <p className="mt-2 type-label text-paper/55">{role.domain}</p>

                  <ul className="mt-7 space-y-3.5">
                    {role.coreResponsibilities.map((item) => (
                      <li key={item} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-px w-5 shrink-0 bg-paper/25 transition-colors duration-[var(--dur-base)] group-hover:bg-ember"
                        />
                        <span className="text-[0.9375rem] leading-relaxed text-paper/65">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Product lens */}
                  <div className="mt-8 rounded-card border border-ember/25 bg-ember/[0.06] p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="type-label text-ember">Product lens</span>
                      <span className="text-sm text-paper/55">·</span>
                      <span className="text-sm font-medium text-paper/70">
                        {role.productLens.competency}
                      </span>
                    </div>
                    <p className="mt-3 font-display text-lg text-paper sm:text-xl">
                      {role.productLens.headline}
                    </p>
                    <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-paper/55">
                      {role.productLens.explanation}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        {/* Education */}
        <Reveal delay={0.05}>
          <div className="mt-14 border-t border-paper/15 pt-10">
            <p className="type-label text-paper/55">Education</p>
            <dl className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {educationData.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-card border border-paper/10 bg-paper/[0.03] p-6"
                >
                  <dt className="font-display text-lg text-paper">{item.degree}</dt>
                  <dd className="mt-2 text-sm text-paper/60">
                    {item.institution} · {item.location} · {item.period}
                  </dd>
                  {item.details ? (
                    <dd className="mt-3 text-sm leading-relaxed text-paper/55">{item.details}</dd>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
