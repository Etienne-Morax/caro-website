import React from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section-y relative bg-paper-sunk">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="The narrative"
          title="Why the pivot is a continuation, not a restart."
        />

        {/* Editorial drop-cap lead */}
        <Reveal delay={0.1}>
          <p className="mt-14 max-w-4xl font-display text-2xl leading-[1.4] text-ink text-pretty sm:text-3xl md:text-[2.1rem] [&::first-letter]:float-left [&::first-letter]:mr-3 [&::first-letter]:mt-1 [&::first-letter]:font-display [&::first-letter]:text-[4.5rem] [&::first-letter]:leading-[0.78] [&::first-letter]:text-ember-deep">
            {profileData.narrativeLead}
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-16 md:gap-20">
          {profileData.narrativeSections.map((section, index) => (
            <Reveal key={section.title} delay={0.05}>
              <article className="grid grid-cols-1 gap-6 border-t border-paper-line pt-8 md:grid-cols-12 md:gap-10">
                <header className="md:col-span-4">
                  <p className="type-label text-ember-deep">0{index + 1}</p>
                  <h3 className="type-heading mt-3 text-balance text-ink">{section.title}</h3>
                </header>

                <div className="md:col-span-8">
                  <p className="max-w-prose text-[1.0625rem] leading-[1.72] text-graphite text-pretty">
                    {section.content}
                  </p>

                  {section.highlight ? (
                    <p className="mt-6 border-l-2 border-ember pl-5 font-display text-xl italic leading-snug text-ink sm:text-2xl">
                      {section.highlight}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
