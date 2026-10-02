import type { ReactNode } from "react";

import { cx } from "@/lib/cx";

export interface ProseProps {
  children: ReactNode;
  className?: string;
  /** `dark` is for navy backgrounds. */
  tone?: "light" | "dark";
}

const LIGHT_CLASSES = [
  "text-ink",
  "[&_p]:mt-5 [&_p]:leading-[1.75]",
  "[&_p:first-child]:mt-0",
  "[&_h3]:mt-10 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-navy",
  "[&_h4]:mt-8 [&_h4]:font-display [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-navy",
  "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
  "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
  "[&_li]:leading-[1.7] [&_li::marker]:text-gold",
  "[&_ul>li::marker]:text-gold [&_ol>li::marker]:text-gold",
  "[&_li>p]:mt-3",
  "[&_li>p:first-child]:mt-0",
  "[&_strong]:font-semibold [&_strong]:text-navy",
  "[&_a]:font-medium [&_a]:text-navy [&_a]:underline [&_a]:decoration-gold [&_a]:decoration-1",
  "[&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:decoration-2",
  "[&_hr]:my-10 [&_hr]:border-slate-200",
].join(" ");

const DARK_CLASSES = [
  "text-slate-300",
  "[&_p]:mt-5 [&_p]:leading-[1.75]",
  "[&_p:first-child]:mt-0",
  "[&_h3]:mt-10 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-cream",
  "[&_h4]:mt-8 [&_h4]:font-display [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-cream",
  "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
  "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
  "[&_li]:leading-[1.7] [&_li::marker]:text-gold",
  "[&_ul>li::marker]:text-gold [&_ol>li::marker]:text-gold",
  "[&_li>p]:mt-3",
  "[&_li>p:first-child]:mt-0",
  "[&_strong]:font-semibold [&_strong]:text-cream",
  "[&_a]:font-medium [&_a]:text-cream [&_a]:underline [&_a]:decoration-gold [&_a]:decoration-1",
  "[&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:decoration-2",
  "[&_hr]:my-10 [&_hr]:border-white/15",
].join(" ");

/** Rich-text measure and rhythm without the typography plugin. */
export function Prose({ children, className, tone = "light" }: ProseProps) {
  return (
    <div
      className={cx(
        "text-base sm:text-[1.0625rem]",
        tone === "dark" ? DARK_CLASSES : LIGHT_CLASSES,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Prose;