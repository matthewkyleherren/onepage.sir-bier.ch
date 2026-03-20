"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { clsx } from "clsx";

interface SplitParagraphProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  splitBy?: "word" | "line" | "char";
}

export function SplitParagraph({
  children,
  className,
  delay = 0,
  staggerDelay = 0.03,
  splitBy = "word",
}: SplitParagraphProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if (typeof children === "string") {
      if (splitBy === "char") {
        setWords(children.split(""));
      } else {
        setWords(children.split(" "));
      }
    }
  }, [children, splitBy]);

  if (typeof children !== "string") {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={clsx("c-split-paragraph", className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className="c-split-paragraph_word"
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.645, 0.045, 0.355, 1],
              delay: delay + index * staggerDelay,
            }}
          >
            {word}
            {splitBy !== "char" && index < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.645, 0.045, 0.355, 1],
          delay,
        }}
      >
        <Component className={className}>{children}</Component>
      </motion.div>
    </div>
  );
}
