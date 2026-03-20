"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { SplitParagraph, AnimatedText } from "@/components/ui/SplitParagraph";
import { LazyImage } from "@/components/ui/LazyImage";

const STORY_CHAPTERS = [
  {
    id: "philosophy",
    title: "Philosophy",
    subtitle: "The Art of Brewing",
    description:
      "Every great beer begins with a philosophy. Ours is simple: respect the process, honor the ingredients, and never compromise on quality. From the Swiss Alps to your glass, every step matters.",
    image: "/images/story-1.jpg",
  },
  {
    id: "ingredients",
    title: "Pure Ingredients",
    subtitle: "Nature's Finest",
    description:
      "Glacier valley water sourced beneath the Swiss Alps. The purest barley, the finest hops. Each ingredient selected for its exceptional quality and character.",
    image: "/images/story-2.jpg",
  },
  {
    id: "process",
    title: "The Process",
    subtitle: "Brewed to Perfection",
    description:
      "Brewed to the highest standard using traditional methods refined over generations. Our master brewers combine ancient wisdom with modern precision.",
    image: "/images/story-3.jpg",
  },
  {
    id: "result",
    title: "The Result",
    subtitle: "Pure Chemistry",
    description:
      "Ultimate purity that's pure chemistry. A beer that transcends expectations, delivering an experience that honors the craft and delights the senses.",
    image: "/images/story-4.jpg",
  },
];

function StoryChapter({
  chapter,
  index,
}: {
  chapter: (typeof STORY_CHAPTERS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      id={chapter.id}
      className={`c-story-chapter py-fluid-3xl ${isEven ? "light" : "dark"}`}
    >
      <div className="container">
        <div className="grid-container items-center">
          {/* Image */}
          <motion.div
            className={`col-span-12 md:col-span-6 ${
              isEven ? "md:order-1" : "md:order-2"
            }`}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
            }}
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <LazyImage
                src={chapter.image}
                alt={chapter.title}
                fill
                cover
                className="scale-110"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div
            className={`col-span-12 md:col-span-5 ${
              isEven ? "md:order-2 md:col-start-8" : "md:order-1"
            } mt-fluid-lg md:mt-0`}
          >
            <motion.span
              className="text-mono-xs opacity-60 mb-fluid-xs block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.6, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {chapter.subtitle}
            </motion.span>

            <AnimatedText
              as="h2"
              className="text-heading-md mb-fluid-md"
              delay={0.3}
            >
              {chapter.title}
            </AnimatedText>

            <motion.p
              className="text-body-md opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {chapter.description}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Story() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="c-story">
      {/* Intro */}
      <div className="c-story_intro py-fluid-5xl light" id="philosophy">
        <div className="container">
          <div className="grid-container">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <SplitParagraph
                className="text-heading-lg mb-fluid-lg"
                delay={0.2}
              >
                An exchange of natural forces from sky to earth, bottled.
              </SplitParagraph>
              <motion.p
                className="text-body-lg opacity-70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover the story behind SIR BIER
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters */}
      {STORY_CHAPTERS.map((chapter, index) => (
        <StoryChapter key={chapter.id} chapter={chapter} index={index} />
      ))}
    </section>
  );
}
