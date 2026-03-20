"use client";

import { useRef, useEffect, useState } from "react";
import { clsx } from "clsx";

interface InlineVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  cover?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

export function InlineVideo({
  src,
  poster,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  cover = true,
  onPlay,
  onPause,
}: InlineVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView && autoPlay) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
      });
      onPlay?.();
    } else if (!isInView) {
      videoRef.current.pause();
      onPause?.();
    }
  }, [isInView, autoPlay, onPlay, onPause]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "c-inline-video",
        cover && "-cover",
        isLoaded && "is-loaded",
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        onLoadedData={() => setIsLoaded(true)}
        className="c-inline-video_video"
        style={{
          width: "100%",
          height: "100%",
          objectFit: cover ? "cover" : "contain",
        }}
      />
    </div>
  );
}
