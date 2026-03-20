"use client";

import { clsx } from "clsx";
import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";

type CTAVariant = "text" | "filled" | "outline" | "none";

interface CTAProps {
  children: ReactNode;
  href?: string;
  onClick?: (e?: MouseEvent) => void;
  variant?: CTAVariant;
  className?: string;
  external?: boolean;
  scrollTo?: boolean;
}

export function CTA({
  children,
  href,
  onClick,
  variant = "text",
  className,
  external = false,
  scrollTo = false,
}: CTAProps) {
  const baseClasses = "c-cta";
  const variantClass = `-variant-${variant}`;

  const handleClick = (e: MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  const innerContent = (
    <span className="c-cta-content">{children}</span>
  );

  if (href) {
    if (external) {
      return (
        <span className={clsx(baseClasses, variantClass, className)}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="c-cta-inner"
            onClick={handleClick}
          >
            {innerContent}
          </a>
        </span>
      );
    }

    if (scrollTo) {
      return (
        <span className={clsx(baseClasses, variantClass, className)}>
          <a href={href} className="c-cta-inner" onClick={handleClick}>
            {innerContent}
          </a>
        </span>
      );
    }

    return (
      <span className={clsx(baseClasses, variantClass, className)}>
        <Link href={href} className="c-cta-inner" onClick={handleClick}>
          {innerContent}
        </Link>
      </span>
    );
  }

  return (
    <span className={clsx(baseClasses, variantClass, className)}>
      <button onClick={handleClick} className="c-cta-inner">
        {innerContent}
      </button>
    </span>
  );
}
