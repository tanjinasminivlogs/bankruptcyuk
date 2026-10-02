"use client";

import { useEffect, useRef, useState } from "react";

import { cx } from "@/lib/cx";

export interface CountUpProps {
  to?: number;
  /** Animation length in milliseconds. */
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function decimalsOf(value: number): number {
  if (Number.isInteger(value)) return 0;
  const [, fraction = ""] = Math.abs(value).toString().split(".");
  return fraction.length;
}

function format(value: number, decimals: number): string {
  return value.toLocaleString("en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Counts up to `to` once it scrolls into view. The final value is what the
 * server renders, so the number is correct without JavaScript and to crawlers.
 */
export function CountUp({
  to = 57,
  duration = 1600,
  className,
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const decimals = decimalsOf(to);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (window.matchMedia(REDUCED_MOTION).matches || duration <= 0) {
      setValue(to);
      return;
    }

    let frame = 0;
    let startedAt: number | null = null;
    let observer: IntersectionObserver | null = null;

    const tick = (timestamp: number) => {
      if (startedAt === null) startedAt = timestamp;

      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setValue(to * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      frame = requestAnimationFrame(tick);
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry || !entry.isIntersecting) return;

          observer?.disconnect();
          observer = null;
          frame = requestAnimationFrame(tick);
        },
        { threshold: 0.4 },
      );

      observer.observe(node);
    }

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={nodeRef} className={cx("tabular-nums", className)}>
      {`${prefix}${format(value, decimals)}${suffix}`}
    </span>
  );
}

export default CountUp;