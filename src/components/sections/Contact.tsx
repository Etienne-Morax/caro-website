import React from "react";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRightIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";

const NEXT_STEPS = [
  {
    title: "A 20-minute problem walk-through",
    detail:
      "Bring a live product problem. I will show the questions I would ask first and how I would frame it.",
  },
  {
    title: "Associate / Junior PM conversations",
    detail:
      "London or remote, product teams where discovery and stakeholder ambiguity are the hard part.",
  },
  {
    title: "The written record",
    detail:
      "Full CV and the raw case-study notes behind each artefact are available on request.",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      data-tone="ink"
      className="grain section-y relative overflow-hidden bg-ink"
    >
      <div className="aurora opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 hairline-grid opacity-40" aria-hidden="true" />

      <div className="shell relative">
        <SectionHeading
          onInk
          index="06"
          eyebrow="Next step"
          title="Give me a messy problem. I will give you the structure back."
        />

        {/* Oversized mailto */}
        <Reveal delay={0.1}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group mt-14 flex flex-wrap items-baseline gap-x-5 gap-y-3 border-b border-paper/15 pb-8 transition-colors duration-[var(--dur-base)] hover:border-ember"
          >
            <MailIcon className="h-6 w-6 shrink-0 text-ember" />
            <span className="type-title break-all text-paper transition-colors duration-[var(--dur-base)] group-hover:text-ember">
              {siteConfig.email}
            </span>
            <ArrowUpRightIcon className="h-6 w-6 shrink-0 text-paper/55 transition-transform duration-[var(--dur-base)] ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ember" />
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <p className="type-label text-paper/55">Currently</p>
            <p className="mt-4 max-w-md font-display text-2xl leading-snug text-paper">
              {profileData.currentStatus}
            </p>
            <p className="mt-3 text-sm text-paper/60">
              {profileData.location} · Bilingual English / French
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2.5 rounded-pill border border-paper/25 px-5 py-3 text-sm font-semibold text-paper transition-colors duration-[var(--dur-fast)] hover:border-ember hover:text-ember"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-[var(--dur-fast)] ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=Product%20conversation`}
                className="inline-flex items-center gap-2.5 rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-ink shadow-ember transition-transform duration-[var(--dur-fast)] ease-editorial hover:-translate-y-0.5"
              >
                Start a conversation
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.12}>
            <ol className="flex flex-col">
              {NEXT_STEPS.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-1 gap-3 border-t border-paper/15 py-6 sm:grid-cols-12 sm:gap-6"
                >
                  <span className="type-label tabular-nums text-ember sm:col-span-2">
                    0{index + 1}
                  </span>
                  <div className="sm:col-span-10">
                    <p className="font-display text-lg text-paper sm:text-xl">{step.title}</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper/50">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
