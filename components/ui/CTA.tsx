"use client";

import { clsx } from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type CTAVariant = "text" | "filled" | "outline" | "none";

interface CTAProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
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
          >
            {innerContent}
          </a>
        </span>
      );
    }

    if (scrollTo) {
      return (
        <span className={clsx(baseClasses, variantClass, className)}>
          <a href={href} className="c-cta-inner">
            {innerContent}
          </a>
        </span>
      );
    }

    return (
      <span className={clsx(baseClasses, variantClass, className)}>
        <Link href={href} className="c-cta-inner">
          {innerContent}
        </Link>
      </span>
    );
  }

  return (
    <span className={clsx(baseClasses, variantClass, className)}>
      <button onClick={onClick} className="c-cta-inner">
        {innerContent}
      </button>
    </span>
  );
}
