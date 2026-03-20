"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CTA } from "@/components/ui/CTA";
import { InlineVideo } from "@/components/ui/InlineVideo";
import { VideoModal } from "@/components/modals/VideoModal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section
        ref={ref}
        id="hero"
        className="c-hero relative h-svh w-full overflow-hidden dark"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <InlineVideo
            src="/videos/hero.mp4"
            poster="/images/hero-poster.jpg"
            className="w-full h-full"
            cover
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-fluid-3xl">
          <div className="container">
            <div className="grid-container">
              <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                <motion.h1
                  className="text-heading-xl mb-fluid-md text-white"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.645, 0.045, 0.355, 1],
                  }}
                >
                  Brewed, differently.
                </motion.h1>

                <motion.p
                  className="text-body-lg mb-fluid-lg text-white/80 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.645, 0.045, 0.355, 1],
                  }}
                >
                  Sir Bier is a Swiss premium brew made with the best process.
                  An exchange of natural forces from sky to earth, bottled.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-fluid-md justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.645, 0.045, 0.355, 1],
                  }}
                >
                  <CTA href="#philosophy" variant="filled" scrollTo>
                    Discover our story
                  </CTA>
                  <CTA
                    variant="outline"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    Watch the film
                  </CTA>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="c-scroll-indicator">
            <span className="c-scroll-indicator_line" />
          </div>
        </motion.div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videos/hero.mp4"
      />
    </>
  );
}
