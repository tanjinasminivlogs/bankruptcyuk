/**
 * PROFESSIONAL WORK EXPERIENCE TIMELINE — shared, reusable.
 *
 * Drives the client-supplied `timeline` from `src/content/about.ts` with a
 * CSS-only vertical rule: on mobile the markers sit in a left gutter with the
 * period above the role; from `lg` the period moves into a dedicated column
 * and the rule becomes the content column border.
 *
 * Every `description` is currently `null`, so each entry renders a compact
 * `CopyPlaceholder` carrying that entry's own `pendingCopyNote`. No employer,
 * responsibility, client or date is ever invented here.
 */

import CopyPlaceholder from "@/components/ui/CopyPlaceholder";
import Reveal from "@/components/ui/Reveal";
import { timeline, type TimelineEntry } from "@/content/about";
import { cx } from "@/lib/cx";

export interface TimelineProps {
  /** Defaults to the client-supplied professional timeline. */
  entries?: TimelineEntry[];
  className?: string;
}

const MARKER_CLASSES =
  "h-3 w-3 rounded-full border-2 border-gold bg-white shadow-[0_0_0_3px_rgba(201,164,92,0.16)]";

export function Timeline({ entries = timeline, className }: TimelineProps) {
  return (
    <ol className={cx("relative mt-12 space-y-9 lg:mt-14 lg:space-y-12", className)}>
      {/* Mobile spine. The desktop rule is the content column border. */}
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-2 top-3 w-px bg-gradient-to-b from-gold/45 via-slate-200 to-slate-200 lg:hidden"
      />

      {entries.map((entry, index) => (
        <Reveal
          as="li"
          key={`${entry.period}-${entry.role}`}
          delay={index * 90}
          className="relative pl-8 lg:pl-0"
        >
          <span
            aria-hidden="true"
            className={cx("absolute left-2 top-2 -translate-x-1/2 lg:hidden", MARKER_CLASSES)}
          />

          <div className="lg:grid lg:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] lg:gap-x-12">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] tabular-nums text-navy/55">
              <span aria-hidden="true" className="h-px w-6 shrink-0 bg-gold/70" />
              {entry.period}
            </p>

            <div className="relative mt-4 border-l border-slate-200 pl-8 lg:mt-0 lg:pl-10">
              <span
                aria-hidden="true"
                className={cx(
                  "absolute -left-[6.5px] top-1.5 hidden lg:block",
                  MARKER_CLASSES,
                )}
              />

              <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-navy sm:text-2xl">
                {entry.role}
              </h3>

              <p
                className={cx(
                  "mt-2 text-sm sm:text-[0.95rem]",
                  entry.organisation ? "text-slate-600" : "text-slate-400",
                )}
              >
                {entry.organisation ?? "Organisation not stated"}
              </p>

              {entry.description ? (
                <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600">
                  {entry.description}
                </p>
              ) : (
                <CopyPlaceholder
                  label="Role description pending"
                  note={entry.pendingCopyNote}
                  lines={2}
                  className="mt-6 p-5 sm:p-6"
                />
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export default Timeline;
