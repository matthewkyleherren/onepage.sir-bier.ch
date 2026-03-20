"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { CTA } from "@/components/ui/CTA";
import { clsx } from "clsx";

const MENU_LINKS = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#the-bottle", label: "The bottle" },
  { href: "#vodka", label: "Sir Bier" },
  { href: "#seltzers", label: "Beers" },
  { href: "#mocktails", label: "Drivers" },
  { href: "#creators", label: "Creators" },
];

export function NarrowHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogotype, setShowLogotype] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("has-modal-open");
      document.documentElement.setAttribute("data-menu-open", "true");
    } else {
      document.documentElement.classList.remove("has-modal-open");
      document.documentElement.removeAttribute("data-menu-open");
    }
  }, [isMenuOpen]);

  const handleLogoClick = () => {
    setShowLogotype(!showLogotype);
    if (!showLogotype) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="c-narrow-header light">
        <nav className="container">
          <ul className="flex items-center justify-between">
            <li>
              <CTA
                href="https://www.aupalevodka.shop"
                variant="text"
                external
                className="text-mono-xs"
              >
                Where to buy?
              </CTA>
            </li>
            <li className="absolute left-1/2 -translate-x-1/2">
              <button
                onClick={handleLogoClick}
                className="c-narrow-header-logo"
              >
                <Logo showLogotype={showLogotype} />
              </button>
            </li>
            <li>
              <button
                className={clsx("c-menu-button", isMenuOpen && "-active")}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="c-menu-button_content">Menu</span>
                <div className="c-menu-button_icon">
                  <span />
                  <span />
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="c-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
          >
            <div className="c-menu-overlay_inner accent">
              <div className="c-menu-overlay_content container">
                <menu>
                  <ul className="c-menu-overlay_links">
                    {MENU_LINKS.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                          ease: [0.645, 0.045, 0.355, 1],
                        }}
                      >
                        <CTA
                          href={link.href}
                          variant="text"
                          scrollTo
                          onClick={handleMenuLinkClick}
                          className="text-heading-xs w-full"
                        >
                          {link.label}
                        </CTA>
                      </motion.li>
                    ))}
                  </ul>
                </menu>

                <motion.div
                  className="c-menu-overlay_footer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <CTA
                    href="https://www.aupalevodka.shop"
                    variant="filled"
                    external
                  >
                    Where to buy?
                  </CTA>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
