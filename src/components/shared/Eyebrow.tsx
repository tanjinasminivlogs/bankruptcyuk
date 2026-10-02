/**
 * SECTION EYEBROW — shared, reusable.
 *
 * Consolidates the former per-page `HomeEyebrow` and `AboutEyebrow`, which were
 * functionally identical. Gold is an accent only: on light bands the label is
 * muted slate with a navy hairline rule, so small gold type never sits on cream
 * or white. Gold-light is reserved for the navy bands.
 */

import type { ReactNode } from "react";

import SectionLabel from "@/components/ui/SectionLabel";
import { cx } from "@/lib/cx";

export interface EyebrowProps {
  children: ReactNode;
  /** `dark` is for navy backgrounds. */
  tone?: "light" | "dark";
  className?: string;
}

const LIGHT_OVERRIDE = "text-slate-500 [&>span:first-child]:bg-navy/30";

export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <SectionLabel
      tone={tone}
      className={cx(tone === "dark" ? undefined : LIGHT_OVERRIDE, className)}
    >
      {children}
    </SectionLabel>
  );
}

export default Eyebrow;
