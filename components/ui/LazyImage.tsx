"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { clsx } from "clsx";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  cover?: boolean;
  priority?: boolean;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  containerClassName,
  cover = true,
  priority = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "c-image relative",
        cover && "-cover",
        "-lazy-load",
        isLoaded && "is-loaded",
        isInView && "is-inview",
        containerClassName
      )}
    >
      <div className="c-image_inner relative w-full h-full">
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={clsx("c-image_img", className)}
            style={{ objectFit: cover ? "cover" : "contain" }}
            onLoad={() => setIsLoaded(true)}
            loading={priority ? "eager" : "lazy"}
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={clsx("c-image_img", className)}
            style={{ objectFit: cover ? "cover" : "contain" }}
            onLoad={() => setIsLoaded(true)}
            loading={priority ? "eager" : "lazy"}
            priority={priority}
          />
        )}
      </div>
    </div>
  );
}
