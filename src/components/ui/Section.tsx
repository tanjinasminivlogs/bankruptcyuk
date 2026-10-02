import type { ReactNode } from "react";

import { cx } from "@/lib/cx";
import Container, { type ContainerSize } from "./Container";

export type SectionTone = "cream" | "white" | "mist" | "navy" | "navy-800" | "none";

export interface SectionProps {
  id?: string;
  tone?: SectionTone;
  width?: ContainerSize;
  className?: string;
  /** Classes merged onto the inner `Container` only. */
  containerClassName?: string;
  children?: ReactNode;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  cream: "bg-cream",
  white: "bg-white",
  mist: "bg-mist",
  navy: "bg-navy text-cream",
  "navy-800": "bg-navy-800 text-cream",
  none: "",
};

/** Full-bleed page band: background tone, vertical rhythm and inner container. */
export function Section({
  id,
  tone = "cream",
  width = "default",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx(
        "py-16 sm:py-20 lg:py-28",
        TONE_CLASSES[tone],
        className,
      )}
    >
      <Container size={width} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

export default Section;