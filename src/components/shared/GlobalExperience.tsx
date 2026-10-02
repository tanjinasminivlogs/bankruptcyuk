/**
 * GLOBAL TRAVEL EXPERIENCE — shared, reusable 57-countries panel.
 *
 * Designed for a navy band. The 57-countries figure is the only statistic shown
 * anywhere on the site and comes straight from `globalExperience.number`.
 * `body` is currently `null`, so the panel renders a `CopyPlaceholder` carrying
 * the pending note rather than drafted prose.
 *
 * Gold is used only as hairlines and on the dark band: never as small text on
 * cream or white.
 */

import CountUp from "@/components/ui/CountUp";
import CopyPlaceholder from "@/components/ui/CopyPlaceholder";
import Reveal from "@/components/ui/Reveal";
import { globalExperience, type GlobalExperience as GlobalExperienceData } from "@/content/about";
import { cx } from "@/lib/cx";

export interface GlobalExperienceProps {
  /** Defaults to the client-supplied global-experience content. */
  data?: GlobalExperienceData;
  /** `h3` when the page already owns the surrounding `h2`. */
  headingLevel?: 2 | 3;
  align?: "left" | "center";
  className?: string;
}

export function GlobalExperience({
  data = globalExperience,
  headingLevel = 3,
  align = "center",
  className,
}: GlobalExperienceProps) {
  const centred = align === "center";
  const Heading = (headingLevel === 2 ? "h2" : "h3") as "h2" | "h3";

  return (
    <Reveal className={cx("mt-12 lg:mt-14", className)}>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-10">
        <div className={cx(centred ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
          <p className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2">
            <CountUp
              to={data.number}
              className="font-display text-6xl font-semibold leading-none tracking-tight text-cream sm:text-7xl lg:text-8xl"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light sm:text-sm">
              Countries
            </span>
          </p>

          <Heading className="mt-8 font-display text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
            {data.title}
          </Heading>

          {data.leadIn ? (
            <p
              className={cx(
                "mt-5 text-[1.0625rem] leading-relaxed text-pretty text-slate-300",
                centred ? "mx-auto max-w-2xl" : "max-w-2xl",
              )}
            >
              {data.leadIn}
            </p>
          ) : null}

          {data.aspects.length > 0 ? (
            <ul
              className={cx(
                "mt-8 flex flex-wrap gap-2.5",
                centred ? "justify-center" : undefined,
              )}
            >
              {data.aspects.map((aspect) => (
                <li
                  key={aspect}
                  className="rounded-full border border-gold/25 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                >
                  {aspect}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {data.body ? (
          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-[1.0625rem] leading-relaxed text-slate-300">
            {data.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <CopyPlaceholder
            tone="dark"
            label="Client copy pending"
            heading="The wider perspective"
            note={data.pendingCopyNote}
            lines={3}
            className="mx-auto mt-10 max-w-3xl text-left p-6 sm:p-8"
          />
        )}
      </div>
    </Reveal>
  );
}

export default GlobalExperience;

