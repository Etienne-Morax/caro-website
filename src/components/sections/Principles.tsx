import React from "react";
import { principlesData } from "@/data/principles";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Principles: React.FC = () => {
  return (
    <section id="mindset" className="py-20 sm:py-28 border-b border-border bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          category="Product Mindset"
          title="How I think about problems"
          subtitle="Four core operating principles developed across 4+ years of high-velocity discovery, stakeholder negotiation, and operational delivery."
          annotation="Evidence-led problem solving"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principlesData.map((principle) => (
            <div
              key={principle.id}
              className="group rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-paper hover:shadow-paper-hover transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                  <span className="font-mono text-xs font-semibold text-accent tracking-wider">
                    PRINCIPLE {principle.number}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {principle.tags.map((tag) => (
                      <Badge key={tag} variant="default" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="font-serif text-2xl font-normal text-ink group-hover:text-accent transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs font-mono text-ink-muted uppercase tracking-wider mt-1">
                    {principle.subtitle}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-ink-secondary leading-relaxed font-sans">
                    {principle.description}
                  </p>
                </div>
              </div>

              {/* Real World Transfer Annotation Box */}
              <div className="mt-6 pt-4 border-t border-border-subtle bg-canvas-subtle/60 rounded-xl p-3.5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-sage font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Real-World Grounding</span>
                </div>
                <p className="text-xs text-ink-secondary leading-normal font-sans">
                  {principle.realWorldTransfer}
                </p>
                <div className="text-[11px] font-mono text-ink-faint flex items-center gap-1 pt-1 border-t border-border-subtle">
                  <span>Supporting Artefact:</span>
                  <span className="text-ink-muted italic">{principle.keyArtifact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
