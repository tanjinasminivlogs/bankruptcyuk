import { cx } from "@/lib/cx";
import SectionLabel from "./SectionLabel";

export interface SectionHeadingProps {
  eyebrow?: string;
  /** Always rendered as an `h2`; page-level `h1`s live in the page files. */
  title: string;
  lede?: string;
  align?: "left" | "center";
  /** `dark` is for navy backgrounds. */
  tone?: "dark" | "light";
  className?: string;
  headingClassName?: string;
  ledeClassName?: string;
  id?: string;
}

/** Editorial section heading: gold eyebrow, display-serif `h2`, optional lede. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  className,
  headingClassName,
  ledeClassName,
  id,
}: SectionHeadingProps) {
  const centred = align === "center";
  const dark = tone === "dark";

  return (
    <div
      className={cx(
        centred ? "flex flex-col items-center text-center" : "flex flex-col",
        className,
      )}
    >
      {eyebrow ? (
        <SectionLabel tone={tone} className={centred ? "justify-center" : undefined}>
          {eyebrow}
        </SectionLabel>
      ) : null}

      <h2
        id={id}
        className={cx(
          "font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance",
          "sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-cream" : "text-navy",
          eyebrow ? "mt-5" : undefined,
          headingClassName,
        )}
      >
        {title}
      </h2>

      {lede ? (
        <p
          className={cx(
            "mt-5 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            dark ? "text-slate-300" : "text-slate-600",
            ledeClassName,
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;