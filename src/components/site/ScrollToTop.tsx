"use client";

import { useEffect, useRef, useState } from "react";

import { cx } from "@/lib/cx";

const REVEAL_AFTER = 600;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const handleScroll = (): void => {
      if (frameRef.current !== 0) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = 0;
        setVisible(window.scrollY > REVEAL_AFTER);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== 0) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }
    };
  }, []);

  // Fade the button in once it has been mounted, so its entrance is a transition
  // rather than a pop.
  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => setEntered(true), 20);
    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  const scrollUp = (): void => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Back to top"
      className={cx(
        "fixed right-4 bottom-5 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full",
        "border border-navy/10 bg-cream/90 text-navy/70 shadow-[0_10px_24px_-18px_rgba(11,31,51,0.7)] backdrop-blur-sm",
        "transition-[opacity,transform,color,background-color] duration-300 ease-out",
        "hover:bg-navy hover:text-cream sm:right-7 sm:bottom-7",
        entered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4"
      >
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

export default ScrollToTop;