/**
 * A SINGLE BUSINESS SERVICE PANEL.
 *
 * Titles, bullet lists (`items`, `subItems`), the bank `note` and the `highlight`
 * pull-quote are reproduced verbatim from `src/content/business.ts`, in the
 * supplied order. `body` is null for all eight services, so the missing
 * descriptive copy is surfaced with a compact `CopyPlaceholder` - it is never
 * drafted, implied or filled in.
 */

import Callout from "@/components/ui/Callout";
import CopyPlaceholder from "@/components/ui/CopyPlaceholder";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import type { BusinessService } from "@/content/business";
import { cx } from "@/lib/cx";

/** Decorative gold tick. The list text itself carries the meaning. */
function Tick() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
      focusable="false"
      className="mt-[0.32rem] h-3.5 w-3.5 shrink-0 text-gold"
    >
      <path d="M3.25 8.5 6.5 11.75 12.75 4.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export interface BusinessServicePanelProps {
  service: BusinessService;
  index: number;
}

export function BusinessServicePanel({ service, index }: BusinessServicePanelProps) {
  const flipped = index % 2 === 1;
  const hasItems = service.items.length > 0;
  const hasSubItems = Array.isArray(service.subItems) && service.subItems.length > 0;

  return (
    <Reveal delay={index * 80}>
      <article
        id={service.id}
        className={cx(
          "scroll-mt-28 rounded-3xl border p-6 sm:p-8 lg:p-10",
          flipped ? "border-slate-200/80 bg-mist" : "border-slate-200 bg-white",
        )}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className={cx(flipped ? "lg:order-2" : undefined)}>
            <p
              aria-hidden="true"
              className="font-display text-5xl font-semibold leading-none tabular-nums text-gold/90 sm:text-6xl"
            >
              {service.number}
            </p>

            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-balance text-navy sm:text-3xl">
              {service.title}
            </h3>

            <span aria-hidden="true" className="mt-6 block h-px w-14 bg-gold/70" />

            {service.highlight ? (
              <blockquote className="mt-8 rounded-2xl bg-navy px-6 py-6">
                <span aria-hidden="true" className="block h-px w-10 bg-gold" />
                <p className="mt-4 font-display text-xl leading-snug text-cream sm:text-2xl">
                  {service.highlight}
                </p>
              </blockquote>
            ) : null}

            {service.body ? (
              <Prose className="mt-8">{service.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Prose>
            ) : (
              <CopyPlaceholder
                tone="light"
                label="Service copy pending"
                note={service.pendingCopyNote}
                lines={2}
                className="mt-8"
              />
            )}
          </div>

          <div className={cx(flipped ? "lg:order-1" : undefined)}>
            {hasItems ? (
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-700">
                    <Tick />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {hasSubItems ? (
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {service.subItems?.map((subItem) => (
                  <li
                    key={subItem}
                    className="rounded-xl border border-slate-200 bg-cream px-3 py-5 text-center text-sm font-medium leading-snug text-navy"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            ) : null}

            {service.note ? (
              <Callout tone="info" className="mt-8">
                <p>{service.note}</p>
              </Callout>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default BusinessServicePanel;