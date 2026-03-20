"use client";

import { clsx } from "clsx";

interface RailProps {
  text: string;
  className?: string;
  speed?: number;
}

export function Rail({ text, className, speed = 20 }: RailProps) {
  // Duplicate text enough times to ensure seamless loop
  const items = Array(8).fill(text);

  return (
    <div className={clsx("c-rail", className)}>
      <div
        className="c-rail_inner"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="c-rail_item text-heading-3xl"
            aria-hidden={index > 0}
          >
            {item}
          </span>
        ))}
      </div>
      {/* Duplicate for seamless loop */}
      <div
        className="c-rail_inner"
        style={{
          animationDuration: `${speed}s`,
        }}
        aria-hidden
      >
        {items.map((item, index) => (
          <span key={index} className="c-rail_item text-heading-3xl">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
