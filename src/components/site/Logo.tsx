import Link from "next/link";
import type { ReactElement } from "react";

import { cx } from "@/lib/cx";

export type LogoTone = "dark" | "light";

export interface LogoProps {
  /** `light` is intended for navy backgrounds. */
  tone?: LogoTone;
  /** Wraps the wordmark in a link. Defaults to `/`. Pass `null` for a bare wordmark. */
  href?: string | null;
  className?: string;
  /** Shows the small-caps descriptor line beneath the wordmark. */
  showDescriptor?: boolean;
  /** Overrides the default descriptor copy. */
  descriptor?: string;
}

const DEFAULT_DESCRIPTOR = "Practical Guidance & UK Business";

const WORDMARK_BASE =
  "font-display text-[1.375rem] font-semibold leading-none tracking-[-0.015em] sm:text-[1.5rem]";

const TONE_TEXT: Record<LogoTone, string> = {
  dark: "text-navy",
  light: "text-cream",
};

const TONE_DESCRIPTOR: Record<LogoTone, string> = {
  dark: "text-ink/65",
  light: "text-cream/70",
};

/**
 * The BankruptcyUK wordmark: "Bankruptcy" in the display serif with "UK" set in
 * the gold accent, plus an optional small-caps descriptor line. Uses
 * `currentColor` discipline so a single component reads correctly on both light
 * and navy surfaces.
 */
export function Logo({
  tone = "dark",
  href = "/",
  className,
  showDescriptor = false,
  descriptor = DEFAULT_DESCRIPTOR,
}: LogoProps): ReactElement {
  const wordmark = (
    <span className={cx(WORDMARK_BASE, TONE_TEXT[tone])}>
      <span className="sr-only">BankruptcyUK</span>
      <span aria-hidden="true">Bankruptcy</span>
      <span aria-hidden="true" className="text-gold">
        UK
      </span>
    </span>
  );

  const content = showDescriptor ? (
    <span className="flex flex-col gap-1.5">
      {wordmark}
      <span
        className={cx(
          "text-[0.625rem] font-medium uppercase leading-none tracking-[0.24em]",
          TONE_DESCRIPTOR[tone],
        )}
      >
        {descriptor}
      </span>
    </span>
  ) : (
    wordmark
  );

  const classes = cx("inline-flex shrink-0 items-center", className);

  if (!href) {
    return <span className={classes}>{content}</span>;
  }

  return (
    <Link
      href={href}
      aria-label="BankruptcyUK — home"
      className={cx(classes, "rounded-sm transition-opacity duration-200 hover:opacity-80")}
    >
      {content}
    </Link>
  );
}

export default Logo;