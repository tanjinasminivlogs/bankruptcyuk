import type { ReactNode } from "react";

import { cx } from "@/lib/cx";

export interface CalloutProps {
  title?: string;
  /** `info` is navy-tinted, `warning` is warm amber-tinted. */
  tone?: "info" | "warning";
  className?: string;
  children?: ReactNode;
}

const TONE_CLASSES = {
  info: "border-l-gold bg-navy/[0.035] text-slate-700",
  warning: "border-l-amber-500/70 bg-amber-50/70 text-slate-700",
} as const;

const GLYPH_CLASSES = {
  info: "text-gold",
  warning: "text-amber-600",
} as const;

function InfoGlyph() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
      className="h-[1.15rem] w-[1.15rem] shrink-0"
    >
      <circle cx="10" cy="10" r="7.75" />
      <path d="M10 9.25v4.5" strokeLinecap="round" />
      <circle cx="10" cy="6.5" r="0.85" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WarningGlyph() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
      className="h-[1.15rem] w-[1.15rem] shrink-0"
    >
      <path d="M10 3.4 17.4 16.4H2.6L10 3.4Z" strokeLinejoin="round" />
      <path d="M10 8.4v3.2" strokeLinecap="round" />
      <circle cx="10" cy="13.9" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Restrained notice panel for disclaimers and qualification notes. */
export function Callout({
  title,
  tone = "info",
  className,
  children,
}: CalloutProps) {
  const Glyph = tone === "info" ? InfoGlyph : WarningGlyph;

  return (
    <aside
      role="note"
      className={cx(
        "rounded-r-xl border-l-2 py-5 pl-6 pr-5 sm:py-6 sm:pl-7 sm:pr-6",
        TONE_CLASSES[tone],
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span className={cx("mt-0.5", GLYPH_CLASSES[tone])}>
          <Glyph />
        </span>

        <div className="min-w-0 flex-1">
          {title ? (
            <p className="font-display text-base font-semibold tracking-tight text-navy">
              {title}
            </p>
          ) : null}
          <div className={cx("text-sm leading-relaxed sm:text-[0.95rem]", "[&>*:first-child]:mt-0", "[&>*:last-child]:mb-0", "[&_p+p]:mt-3", "[&_strong]:font-semibold [&_strong]:text-navy")}>
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Callout;