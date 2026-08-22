"use client";

import React, { useState } from "react";
import { mentalModelSteps } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Eye, Crosshair, Compass, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const stepIcons = [
  <Eye key="0" className="w-4 h-4" />,
  <Crosshair key="1" className="w-4 h-4" />,
  <Compass key="2" className="w-4 h-4" />,
  <CheckCircle2 key="3" className="w-4 h-4" />,
];

export const InteractiveProductLoop: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = mentalModelSteps[activeStepIndex];

  return (
    <div className="w-full rounded-2xl bg-surface border border-border p-5 sm:p-7 shadow-paper hover:shadow-paper-hover transition-all duration-300">
      {/* Header of the interactive module */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="highlight">INTERACTIVE FRAMEWORK</Badge>
          <span className="font-mono text-xs text-ink-muted">
            The Product Reasoning Loop
          </span>
        </div>
        <span className="text-xs font-sans text-ink-faint hidden sm:inline">
          Click any phase to inspect the methodology
        </span>
      </div>

      {/* 4 Interactive Phase Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-5">
        {mentalModelSteps.map((step, idx) => {
          const isSelected = idx === activeStepIndex;
          return (
            <button
              key={step.step}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={cn(
                "group text-left p-3 rounded-xl border transition-all duration-200 relative overflow-hidden focus-visible:ring-2 focus-visible:ring-accent",
                isSelected
                  ? "bg-canvas-subtle border-accent/70 shadow-sm"
                  : "bg-surface hover:bg-canvas-subtle/50 border-border"
              )}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
              )}
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={cn(
                    "font-mono text-[11px] font-semibold transition-colors",
                    isSelected ? "text-accent" : "text-ink-muted group-hover:text-ink"
                  )}
                >
                  PHASE {step.step}
                </span>
                <span
                  className={cn(
                    "transition-colors",
                    isSelected ? "text-accent" : "text-ink-faint group-hover:text-ink-muted"
                  )}
                >
                  {stepIcons[idx]}
                </span>
              </div>
              <div className="font-serif text-base font-medium text-ink">
                {step.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Panel */}
      <div className="bg-canvas-subtle/70 rounded-xl p-4 sm:p-6 border border-border-subtle mt-4 space-y-4 animate-in fade-in duration-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/60 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent font-semibold">
                PHASE {activeStep.step}
              </span>
              <span className="text-border-strong">/</span>
              <h3 className="font-serif text-xl text-ink font-normal">
                {activeStep.title}
              </h3>
            </div>
            <p className="text-sm text-ink-secondary mt-0.5 font-sans">
              {activeStep.shortDescription}
            </p>
          </div>

          <Badge variant="sage" size="md">
            {activeStep.productCompetency}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Core Question Prompt */}
          <div className="p-3.5 rounded-lg bg-surface border border-border">
            <div className="font-mono text-[11px] uppercase tracking-wider text-ink-muted mb-1">
              Guiding Product Question
            </div>
            <p className="font-serif text-base text-ink italic">
              &ldquo;{activeStep.questionPrompt}&rdquo;
            </p>
          </div>

          {/* Operational & Discovery Parallel */}
          <div className="p-3.5 rounded-lg bg-surface border border-border">
            <div className="font-mono text-[11px] uppercase tracking-wider text-accent mb-1 flex items-center gap-1">
              <span>Transferable Experience Foundation</span>
              <ArrowRight className="w-3 h-3" />
            </div>
            <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-snug">
              {activeStep.recruitmentParallel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
