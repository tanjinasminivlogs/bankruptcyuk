import type { ElementType, ReactNode } from "react";

import { cx } from "@/lib/cx";

export type ContainerSize = "narrow" | "default" | "wide";

export interface ContainerProps {
  /** Element to render. Defaults to a `div`. */
  as?: ElementType;
  size?: ContainerSize;
  className?: string;
  children?: ReactNode;
}

const SIZE_CLASSES: Record<ContainerSize, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-[1280px]",
};

/** Centred, gutter-padded max-width wrapper for every band of page content. */
export function Container({
  as,
  size = "default",
  className,
  children,
}: ContainerProps) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      className={cx(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        SIZE_CLASSES[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default Container;