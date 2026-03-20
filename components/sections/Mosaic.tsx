"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LazyImage } from "@/components/ui/LazyImage";

interface MosaicImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface MosaicProps {
  images: MosaicImage[];
  id?: string;
}

export function Mosaic({ images, id }: MosaicProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds for different columns
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Split images into 3 columns
  const columns = [
    images.slice(0, Math.ceil(images.length / 3)),
    images.slice(Math.ceil(images.length / 3), Math.ceil((images.length / 3) * 2)),
    images.slice(Math.ceil((images.length / 3) * 2)),
  ];

  const columnMotion = [y1, y2, y3];

  return (
    <section
      ref={containerRef}
      id={id}
      className="c-mosaic"
      data-theme="light"
    >
      <div className="c-mosaic_inner">
        <div className="c-mosaic_grid">
          {columns.map((column, colIndex) => (
            <motion.div
              key={colIndex}
              className="c-mosaic_column"
              style={{ y: columnMotion[colIndex] }}
            >
              {column.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="c-mosaic_item"
                >
                  <LazyImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    cover
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
