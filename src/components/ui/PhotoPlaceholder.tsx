/**
 * Placeholder surface for photography.
 *
 * Replace with a verified, freely-licensed image (Unsplash/Pexels) by passing
 * `src`/children. Do not add unverified URLs.
 */

import type { CSSProperties, ReactNode } from "react";

import { cx } from "@/lib/cx";

export type PhotoRatio = "16/9" | "4/3" | "3/2" | "1/1" | "21/9";

export interface PhotoPlaceholderProps {
  /** Short descriptive concept, e.g. "London financial district". */
  label: string;
  /** Descriptive alt text exposed to assistive technology. */
  alt: string;
  ratio?: PhotoRatio;
  className?: string;
  /** Surfaced as `data-priority` for future responsive image loading. */
  priority?: boolean;
  caption?: string;
  /** Dims the label and icon for text-led compositions. */
  overlay?: boolean;
  /** A real `next/image` or `<img>`; rendered above the placeholder surface. */
  children?: ReactNode;
}

const RATIO_CLASSES: Record<PhotoRatio, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
};

const SURFACE_STYLE: CSSProperties = {
  backgroundImage: [
    "radial-gradient(circle at 22% 16%, rgba(224,196,94,0.18), transparent 46%)",
    "radial-gradient(circle at 84% 82%, rgba(201,164,92,0.14), transparent 52%)",
    "linear-gradient(145deg, #102a43 0%, #0b1f33 58%, #081829 100%)",
  ].join(", "),
};

const GRID_STYLE: CSSProperties = {
  backgroundImage: [
    "linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px)",
    "linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "56px 56px",
};

const IMAGE_LAYER_CLASSES =
  "[&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:object-center";

/**
 * Premium, deliberately art-directed stand-in for a licensed photograph.
 * Renders identically on the server; no external assets are referenced.
 */
export function PhotoPlaceholder({
  label,
  alt,
  ratio = "16/9",
  className,
  priority = false,
  caption,
  overlay = false,
  children,
}: PhotoPlaceholderProps) {
  const hasImage = Boolean(children);

  return (
    <figure className={cx("group/photo", className)} data-priority={priority ? "true" : "false"}>
      <div
        className={cx(
          "relative overflow-hidden rounded-2xl bg-navy-900",
          RATIO_CLASSES[ratio],
        )}
        role={hasImage ? undefined : "img"}
        aria-label={hasImage ? undefined : alt}
      >
        <div className="absolute inset-0" style={SURFACE_STYLE} aria-hidden="true" />
        <div className="absolute inset-0" style={GRID_STYLE} aria-hidden="true" />

        {hasImage ? (
          <div
            className={cx("absolute inset-0 transition-transform duration-700 ease-out group-hover/photo:scale-[1.02]", IMAGE_LAYER_CLASSES)}
          >
            {children}
          </div>
        ) : (
          <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 py-12 text-center">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              aria-hidden="true"
              focusable="false"
              className={cx("h-9 w-9 text-gold/80", overlay && "text-gold-light")}
            >
              <rect x="8" y="13" width="32" height="22" rx="2" />
              <path d="M8 28.5 16.5 21l6.5 5.5 7-6.5 6 5.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="31.5" cy="20" r="2.25" />
            </svg>

            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold/90">
              {label}
            </p>
          </div>
        )}

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl inset-ring-1 inset-ring-gold/25"
        />
        {overlay ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent"
          />
        ) : null}
      </div>

      {caption ? (
        <figcaption className="mt-3 text-sm text-slate-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export default PhotoPlaceholder;