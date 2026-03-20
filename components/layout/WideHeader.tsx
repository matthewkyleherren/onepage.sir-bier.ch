"use client";

import { useEffect, useState } from "react";
import { useScroll } from "@/components/providers/ScrollProvider";
import { Logo } from "@/components/ui/Logo";
import { CTA } from "@/components/ui/CTA";
import { Icon } from "@/components/ui/Icon";
import { clsx } from "clsx";

const NAV_LINKS_LEFT = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#the-bottle", label: "The bottle" },
  { href: "#vodka", label: "Sir Bier" },
  { href: "#seltzers", label: "Beers" },
];

const NAV_LINKS_RIGHT = [
  { href: "#mocktails", label: "Drivers" },
  { href: "#creators", label: "Creators" },
];

export function WideHeader() {
  const { scrollY, scrollDirection } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Set ready after mount for transitions
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide header on scroll down, show on scroll up
    if (scrollY < 100) {
      setIsVisible(true);
    } else if (scrollDirection === "down") {
      setIsVisible(false);
    } else if (scrollDirection === "up") {
      setIsVisible(true);
    }
  }, [scrollY, scrollDirection]);

  return (
    <header
      className={clsx(
        "c-wide-header light",
        "header-handler",
        isVisible && isReady && "is-active"
      )}
    >
      <nav className="grid-container items-center">
        {/* Left Nav */}
        <ul className="col-span-6 flex items-center gap-fluid-lg text-mono-xs">
          {NAV_LINKS_LEFT.map((link) => (
            <li key={link.href} className="text-theme">
              <CTA href={link.href} variant="text" scrollTo>
                {link.label}
              </CTA>
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <CTA
          href="#"
          variant="text"
          scrollTo
          className="text-theme pointer-events-auto fixed top-fluid-md left-1/2 -translate-x-1/2 transform z-10"
        >
          <Logo showLogotype className="pointer-events-auto" />
        </CTA>

        {/* Right Nav */}
        <ul className="col-span-6 flex items-center justify-end gap-fluid-lg text-mono-xs">
          {NAV_LINKS_RIGHT.map((link) => (
            <li key={link.href} className="text-theme">
              <CTA href={link.href} variant="text" scrollTo>
                {link.label}
              </CTA>
            </li>
          ))}
          <li className="text-theme">
            <CTA
              href="https://www.aupalevodka.shop"
              variant="text"
              external
            >
              Where to buy?
            </CTA>
          </li>
          <li>
            <div className="c-language-switcher -variant-text relative">
              <select
                aria-label="Language"
                name="language-switcher"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="c-language-switcher-select appearance-none bg-transparent pr-6 cursor-pointer text-mono-xs"
              >
                <option value="en" lang="en">
                  English
                </option>
                <option value="fr" lang="fr">
                  Francais
                </option>
              </select>
              <span className="c-language-switcher-icon absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icon name="dropdown" size="0.6em" />
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
