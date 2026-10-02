"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

import { cx } from "@/lib/cx";

export interface RevealProps {
  children: ReactNode;
  /** Milliseconds the element stays hidden before it transitions in. */
  delay?: number;
  /** Vertical travel in px. Mapped to a static utility to stay purge-safe. */
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}

const OFFSET_CLASSES: Record<number, string> = {
  8: "translate-y-2",
  12: "translate-y-3",
  16: "translate-y-4",
  24: "translate-y-6",
  32: "translate-y-8",
  48: "translate-y-12",
};

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/**
 * Fade-up on scroll that only ever enhances: the server render and every
 * render before hydration are the final visible state, so the content stays
 * readable when JavaScript never runs and for reduced-motion visitors.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: RevealProps) {
  const Tag = as;
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!node) return;

    if (window.matchMedia(REDUCED_MOTION).matches) {
      setRevealed(true);
      return;
    }

    const bounds = node.getBoundingClientRect();
    const inViewport = bounds.top < window.innerHeight && bounds.bottom > 0;

    if (inViewport || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [node]);

  const hidden = armed && !revealed;

  return (
    <Tag
      ref={setNode}
      style={
        delay > 0 ? ({ transitionDelay: `${delay}ms` } as CSSProperties) : undefined
      }
      className={cx(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        hidden ? cx("opacity-0", OFFSET_CLASSES[y] ?? OFFSET_CLASSES[24]) : "translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default Reveal;