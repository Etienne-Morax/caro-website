import React from "react";
import { bridgeData } from "@/data/bridge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sparkles, CheckCheck } from "lucide-react";

export const ProductBridge: React.FC = () => {
  return (
    <section id="bridge" className="py-20 sm:py-28 border-b border-border bg-canvas-subtle/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          category="Skill Translation Matrix"
          title="The experience-to-product bridge"
          subtitle="Translating day-to-day talent advisory execution into direct product management competencies."
          annotation="Transferable Parallels, Not Fabricated Claims"
        />

        <div className="rounded-2xl bg-surface border border-border overflow-hidden shadow-paper">
          {/* Table Header for Desktop */}
          <div className="hidden md:grid md:grid-cols-12 bg-canvas-subtle/80 px-6 py-3.5 border-b border-border text-[11px] font-mono uppercase tracking-wider text-ink-muted">
            <div className="col-span-5">Prior Operational Domain Activity</div>
            <div className="col-span-1 text-center">➔</div>
            <div className="col-span-6">Transferable Product Discipline & Rationale</div>
          </div>

          {/* Matrix Rows */}
          <div className="divide-y divide-border">
            {bridgeData.map((item, idx) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 hover:bg-canvas-subtle/30 transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
              >
                {/* Prior Activity Column */}
                <div className="md:col-span-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-accent font-semibold">
                      0{idx + 1}.
                    </span>
                    <div className="font-serif text-base font-medium text-ink">
                      {item.priorDomainActivity}
                    </div>
                  </div>
                  <p className="text-xs text-ink-secondary leading-relaxed font-sans pl-5">
                    {item.priorContext}
                  </p>
                </div>

                {/* Arrow Divider */}
                <div className="hidden md:flex md:col-span-1 items-center justify-center pt-2 text-ink-muted">
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>

                {/* Product Discipline Column */}
                <div className="md:col-span-6 space-y-1.5 bg-canvas-subtle/60 md:bg-transparent p-3.5 md:p-0 rounded-xl md:rounded-none border md:border-none border-border-subtle">
                  <div className="flex items-center gap-2">
                    <Badge variant="accent" size="sm">
                      {item.productDiscipline}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans pt-1">
                    {item.transferRationale}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callout within the Card */}
          <div className="bg-canvas-subtle/90 px-6 py-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-ink-secondary">
            <div className="flex items-center gap-2">
              <CheckCheck className="w-4 h-4 text-sage" />
              <span>
                Rooted in 1,000+ stakeholder debriefs, complex candidate journeys, and SLA constraints.
              </span>
            </div>
            <a
              href="#artefacts"
              className="font-mono text-xs text-accent font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>See this thinking in action in Artefacts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
