"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LazyImage } from "@/components/ui/LazyImage";

const TRIPTYCH_IMAGES = [
  {
    src: "/images/triptych-1.jpg",
    alt: "The Bottle - Front view",
    aspectRatio: "17/21",
  },
  {
    src: "/images/triptych-2.jpg",
    alt: "The Bottle - Detail",
    aspectRatio: "17/21",
  },
  {
    src: "/images/triptych-3.jpg",
    alt: "The Bottle - Side view",
    aspectRatio: "17/21",
  },
];

export function Triptych() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      id="the-bottle"
      className="c-triptych py-fluid-5xl light"
    >
      <div className="container">
        {/* Header */}
        <div className="grid-container mb-fluid-2xl">
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <motion.span
              className="text-mono-xs opacity-60 mb-fluid-xs block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.6, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              The Bottle
            </motion.span>
            <motion.h2
              className="text-heading-lg mb-fluid-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Designed with purpose
            </motion.h2>
            <motion.p
              className="text-body-md opacity-70"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.7, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Every curve, every detail speaks to our commitment to excellence.
              A vessel worthy of what it holds.
            </motion.p>
          </div>
        </div>

        {/* Images */}
        <div className="grid-container">
          {TRIPTYCH_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              className="col-span-12 md:col-span-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.15,
                ease: [0.645, 0.045, 0.355, 1],
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: image.aspectRatio }}
              >
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  cover
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
