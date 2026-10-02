"use client";

/**
 * DISCLOSURE LIST for the 24-section bankruptcy guide.
 *
 * Every `body` in `src/content/bankruptcy.ts` is `null`, so no section body copy
 * exists yet. Each panel therefore renders the supplied title plus a
 * `CopyPlaceholder` carrying that section's own `pendingCopyNote`. No legal text
 * is ever generated, summarised or paraphrased here.
 *
 * This is an owned implementation of the shared `Accordion` contract rather than
 * a composition of it, for two reasons:
 *
 * 1. The TOC must resolve. `Accordion` namespaces its ids onto the trigger and
 *    the panel only, so there is no stable element carrying the section id that
 *    `#${section.id}` links to. Here the id sits on the row wrapper itself, so
 *    every table-of-contents link lands exactly at the top of its section.
 * 2. The active-section tracking must be able to open a panel, which needs
 *    controlled open state.
 *
 * The a11y contract matches `Accordion`: a real `button` with `aria-expanded`
 * and `aria-controls`, a `role="region"` panel labelled by its trigger, an `h3`
 * wrapping the trigger, and a `grid-template-rows` height animation.
 */

import CopyPlaceholder from "@/components/ui/CopyPlaceholder";
import Prose from "@/components/ui/Prose";
import type { BankruptcySection } from "@/content/bankruptcy";
import { cx } from "@/lib/cx";

export interface GuideAccordionProps {
  sections: BankruptcySection[];
  /** Ids of the sections whose panels are currently open. */
  openIds: string[];
  onToggle: (id: string) => void;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cx(
        "h-5 w-5 shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none",
        open ? "rotate-180" : "rotate-0",
      )}
    >
      <path
        d="M5 7.75 10 12.75 15 7.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GuideAccordion({
  sections,
  openIds,
  onToggle,
}: GuideAccordionProps) {
  return (
    <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
      {sections.map((section) => {
        const open = openIds.includes(section.id);
        const triggerId = `bankruptcy-${section.id}-trigger`;
        const panelId = `bankruptcy-${section.id}-panel`;

        return (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={triggerId}
            data-guide-section={section.index}
            className="group relative scroll-mt-28"
          >
            <span
              aria-hidden="true"
              className={cx(
                "absolute left-0 top-1/2 w-px -translate-y-1/2 bg-gold transition-all duration-300 ease-out motion-reduce:transition-none",
                open ? "h-10 opacity-100" : "h-0 opacity-0",
              )}
            />

            <h3 className="m-0">
              <button
                id={triggerId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => onToggle(section.id)}
                className={cx(
                  "flex w-full items-center gap-4 py-5 pl-5 pr-1 text-left sm:gap-5 sm:py-6 sm:pl-6 sm:pr-2",
                  "transition-colors duration-200",
                  open ? "text-navy" : "text-navy-800 hover:text-navy",
                )}
              >
                <span className="min-w-0 flex-1">
                  {section.step ? (
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {section.step}
                    </span>
                  ) : null}

                  <span className="block font-display text-lg font-semibold leading-snug tracking-tight text-balance sm:text-xl">
                    {section.title}
                  </span>

                  <span className="mt-1 block text-sm text-slate-500">
                    {section.tocGroup}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={cx(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                    open
                      ? "border-gold text-gold"
                      : "border-slate-200 text-navy-800 group-hover:border-gold",
                  )}
                >
                  <Chevron open={open} />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              inert={!open}
              className={cx(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-7 pl-5 pr-4 sm:pb-9 sm:pl-6 sm:pr-8">
                  <Prose>
                    <CopyPlaceholder
                      label="Section copy pending"
                      heading={`Section ${section.index}: ${section.title}`}
                      note={section.pendingCopyNote}
                      lines={3}
                    />
                  </Prose>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default GuideAccordion;