import type { ElementType, ReactNode } from "react";

import { cx } from "@/lib/cx";

export interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  /** `dark` is for navy backgrounds. */
  tone?: "light" | "dark";
  /** Renders the short gold rule ahead of the label. */
  rule?: boolean;
  as?: ElementType;
}

/** Small uppercase gold eyebrow label with an optional leading hairline rule. */
export function SectionLabel({
  children,
  className,
  tone = "light",
  rule = true,
  as,
}: SectionLabelProps) {
  const Tag = (as ?? "p") as ElementType;
  const dark = tone === "dark";

  return (
    <Tag
      className={cx(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]",
        dark ? "text-gold-light" : "text-gold",
        className,
      )}
    >
      {rule ? (
        <span
          aria-hidden="true"
          className={cx(
            "h-px w-8 shrink-0",
            dark ? "bg-gold-light/70" : "bg-gold",
          )}
        />
      ) : null}
      <span>{children}</span>
    </Tag>
  );
}

export default SectionLabel;