"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";

interface ScrollContextValue {
  lenis: Lenis | null;
  scrollY: number;
  scrollDirection: "up" | "down" | null;
  isScrolling: boolean;
}

const ScrollContext = createContext<ScrollContextValue>({
  lenis: null,
  scrollY: 0,
  scrollDirection: null,
  isScrolling: false,
});

export function useScroll() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Add lenis class to html
    document.documentElement.classList.add("lenis", "lenis-smooth");

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll, velocity }: { scroll: number; velocity: number }) => {
      setScrollY(scroll);
      setIsScrolling(Math.abs(velocity) > 0.01);
      
      if (scroll > lastScrollY.current) {
        setScrollDirection("down");
      } else if (scroll < lastScrollY.current) {
        setScrollDirection("up");
      }
      
      lastScrollY.current = scroll;
    });

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        lenis: lenisRef.current,
        scrollY,
        scrollDirection,
        isScrolling,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
