import React from "react";

interface MarqueeProps {
  items: string[];
}

/**
 * Ember transition band between the noir hero and the paper body.
 * Duplicated track + 50% translate keeps the loop seamless.
 */
export function Marquee({ items }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-ember-deep/40 bg-ember py-4">
      <div className="flex w-max animate-marquee items-center will-change-transform" aria-hidden="true">
        {track.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-display text-xl text-ink sm:text-2xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-ink/40" />
          </span>
        ))}
      </div>
      <p className="sr-only">{items.join(", ")}</p>
    </div>
  );
}
