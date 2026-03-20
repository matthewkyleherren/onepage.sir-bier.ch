"use client";

import { clsx } from "clsx";

interface RailProps {
  items: string[];
  className?: string;
  speed?: number;
}

export function Rail({ items, className, speed = 20 }: RailProps) {
  // Duplicate items for seamless scrolling
  const duplicatedItems = [...items, ...items];

  return (
    <div className={clsx("c-rail", className)}>
      <div
        className="c-rail_inner"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="c-rail_item text-heading-3xl"
            aria-hidden={index >= items.length}
          >
            {item}
          </span>
        ))}
      </div>
      {/* Duplicate track for seamless loop */}
      <div
        className="c-rail_inner"
        style={{
          animationDuration: `${speed}s`,
        }}
        aria-hidden
      >
        {duplicatedItems.map((item, index) => (
          <span key={index} className="c-rail_item text-heading-3xl">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
