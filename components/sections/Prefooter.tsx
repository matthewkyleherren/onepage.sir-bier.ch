"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InlineVideo } from "@/components/ui/InlineVideo";
import { SplitParagraph } from "@/components/ui/SplitParagraph";
import { CTA } from "@/components/ui/CTA";

interface PrefooterProps {
  headline: string;
  subheadline: string;
  description: string;
  videoSrc?: string;
  videoPoster?: string;
  ctaText?: string;
  ctaHref?: string;
  id?: string;
}

export function Prefooter({
  headline,
  subheadline,
  description,
  videoSrc,
  videoPoster,
  ctaText,
  ctaHref,
  id,
}: PrefooterProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={containerRef}
      id={id}
      className="c-prefooter"
      data-theme="accent"
    >
      <div className="c-prefooter_inner container">
        <div className="c-prefooter_content">
          <div className="c-prefooter_text">
            <span className="c-prefooter_label text-mono-xs uppercase">
              {subheadline}
            </span>
            <h2 className="c-prefooter_headline text-heading-lg">
              {headline}
            </h2>
            <div className="c-prefooter_description text-body-md">
              <SplitParagraph>{description}</SplitParagraph>
            </div>
            {ctaText && ctaHref && (
              <div className="c-prefooter_cta">
                <CTA href={ctaHref} variant="text">
                  {ctaText}
                </CTA>
              </div>
            )}
          </div>

          {videoSrc && (
            <motion.div className="c-prefooter_media" style={{ y: videoY }}>
              <InlineVideo
                src={videoSrc}
                poster={videoPoster}
                autoPlay
                loop
                muted
                playsInline
                cover
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
