"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  poster?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  poster,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("has-modal-open");
      videoRef.current?.play();
    } else {
      document.documentElement.classList.remove("has-modal-open");
      videoRef.current?.pause();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="c-video-modal modal is-active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
        >
          <motion.div
            className="c-video-modal_container"
            initial={{ clipPath: "inset(100% 20% 0)" }}
            animate={{ clipPath: "inset(0)" }}
            exit={{ clipPath: "inset(100% 20% 0)" }}
            transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
          >
            <div className="c-video-modal_inner">
              <div className="c-video-modal_slot">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={poster}
                  controls
                  playsInline
                  className="w-full h-auto max-h-[80vh]"
                />
              </div>
            </div>
          </motion.div>

          <motion.button
            className="c-video-modal_close"
            onClick={onClose}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            aria-label="Close video"
          >
            <Icon name="close" size={24} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
