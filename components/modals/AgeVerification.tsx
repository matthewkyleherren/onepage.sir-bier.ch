"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { CTA } from "@/components/ui/CTA";

const STORAGE_KEY = "sir-bier-age-verified";

export function AgeVerification() {
  const [isVerified, setIsVerified] = useState(true); // Start true to avoid flash
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const verified = localStorage.getItem(STORAGE_KEY);
    setIsVerified(verified === "true");
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isVerified) {
      document.documentElement.classList.add("is-age-verification-done");
      document.documentElement.classList.add("is-ready");
    } else {
      document.documentElement.classList.remove("is-age-verification-done");
    }
  }, [isVerified]);

  const handleVerify = (verified: boolean) => {
    if (verified) {
      localStorage.setItem(STORAGE_KEY, "true");
      setIsVerified(true);
    } else {
      // Redirect to responsible drinking page
      window.location.href = "https://www.responsibility.org/";
    }
  };

  // Don't render anything until we've checked localStorage
  if (!isReady) return null;

  return (
    <AnimatePresence>
      {!isVerified && (
        <motion.div
          className="c-age-verification"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
        >
          <div className="c-age-verification_content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.645, 0.045, 0.355, 1] }}
            >
              <Logo showLogotype className="-logotype-visible mb-fluid-xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
              className="text-center"
            >
              <h2 className="text-heading-sm mb-fluid-sm">
                Welcome to SIR BIER
              </h2>
              <p className="text-body-md mb-fluid-md opacity-70">
                Are you of legal drinking age in your country of residence?
              </p>
            </motion.div>

            <motion.div
              className="c-age-verification_buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
            >
              <CTA
                variant="filled"
                onClick={() => handleVerify(true)}
                className="min-w-[120px]"
              >
                Yes
              </CTA>
              <CTA
                variant="outline"
                onClick={() => handleVerify(false)}
                className="min-w-[120px]"
              >
                No
              </CTA>
            </motion.div>

            <motion.p
              className="text-mono-xs mt-fluid-xl opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              By entering this site, you agree to our Terms & Conditions and Privacy Policy.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
