"use client";

import React, { useState } from "react";
import { bridgeData } from "@/data/bridge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { iconRegistry, ArrowRightIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function ProductBridge() {
  const [activeId, setActiveId] = useState(bridgeData[0].id);

  const active = bridgeData.find((item) => item.id === activeId) ?? bridgeData[0];
  const ActiveIcon = iconRegistry[active.iconName];

  return (
    <section id="bridge" className="section-y relative bg-paper">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Translation matrix"
          title="Same instinct, different vocabulary."
          intro="Pick any line of prior work. The panel shows the product discipline it maps to, and why the transfer is real rather than aspirational."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Selector rail */}
          <Reveal className="lg:col-span-5" direction="left">
            <ul className="flex flex-col" role="list">
              {bridgeData.map((item) => {
                const isActive = item.id === activeId;
                const Icon = iconRegistry[item.iconName];
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "group flex w-full items-center gap-4 border-t border-paper-line py-5 text-left transition-colors duration-[var(--dur-fast)]",
                        isActive ? "border-t-ember" : "hover:border-t-ink/30",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-pill border transition-colors duration-[var(--dur-fast)]",
                          isActive
                            ? "border-ember bg-ember text-ink"
                            : "border-paper-line text-graphite-muted group-hover:border-ink/30 group-hover:text-ink",
                        )}
                      >
                        {Icon ? <Icon className="h-[1.125rem] w-[1.125rem]" /> : null}
                      </span>

                      <span
                        className={cn(
                          "flex-1 text-[0.9375rem] font-medium leading-snug transition-colors duration-[var(--dur-fast)]",
                          isActive ? "text-ink" : "text-graphite group-hover:text-ink",
                        )}
                      >
                        {item.priorDomainActivity}
                      </span>

                      <ArrowRightIcon
                        className={cn(
                          "h-4 w-4 shrink-0 transition-all duration-[var(--dur-fast)] ease-editorial",
                          isActive
                            ? "translate-x-0 text-ember opacity-100"
                            : "-translate-x-2 text-graphite-faint opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Detail panel */}
          <Reveal className="lg:col-span-7" direction="right" delay={0.08}>
            <div className="sticky top-28 overflow-hidden rounded-card border border-paper-line bg-ink p-8 shadow-lift-lg sm:p-10">
              <div className="aurora opacity-60" aria-hidden="true" />

              <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-pill bg-ember text-ink">
                    {ActiveIcon ? <ActiveIcon className="h-5 w-5" /> : null}
                  </span>

                  <p className="type-label mt-7 text-paper/55">What she did</p>
                  <p className="mt-2 font-display text-xl text-paper sm:text-2xl">
                    {active.priorDomainActivity}
                  </p>
                  <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-paper/55">
                    {active.priorContext}
                  </p>

                  <div className="my-8 flex items-center gap-4">
                    <span className="h-px flex-1 bg-paper/15" aria-hidden="true" />
                    <span className="type-label text-ember">translates to</span>
                    <span className="h-px flex-1 bg-paper/15" aria-hidden="true" />
                  </div>

                  <p className="type-label text-paper/55">Product discipline</p>
                  <p className="mt-2 font-display text-2xl text-ember sm:text-3xl">
                    {active.productDiscipline}
                  </p>
                  <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-paper/60">
                    {active.transferRationale}
                  </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
