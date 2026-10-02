"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";

import { cx } from "@/lib/cx";

export interface AccordionItem {
  id: string;
  title: string;
  /** Rendered as a small gold label ahead of the title, e.g. a step number. */
  step?: string | number;
  meta?: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  type?: "single" | "multiple";
  /** Only meaningful with `type="multiple"`. */
  allowMultiple?: boolean;
  defaultOpenId?: string;
  /** Namespaces generated element ids so multiple instances stay unique. */
  idPrefix?: string;
  /** Heading level wrapping each trigger so the document outline stays valid. */
  headingLevel?: 2 | 3;
  className?: string;
}

function initialOpenIds(
  items: AccordionItem[],
  defaultOpenId: string | undefined,
  multi: boolean,
): string[] {
  const ids = items.filter((item) => item.defaultOpen).map((item) => item.id);

  if (defaultOpenId && items.some((item) => item.id === defaultOpenId)) {
    ids.push(defaultOpenId);
  }

  return multi ? ids : ids.slice(0, 1);
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cx(
        "h-5 w-5 shrink-0 transition-transform duration-300 ease-out",
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

/**
 * Accessible disclosure list for the guide. Height animates via
 * `grid-template-rows: 0fr -> 1fr`, so no measurement pass is required.
 */
export function Accordion({
  items,
  type = "single",
  allowMultiple = true,
  defaultOpenId,
  idPrefix = "accordion",
  headingLevel = 3,
  className,
}: AccordionProps) {
  const multi = type === "multiple" && allowMultiple;
  const [openIds, setOpenIds] = useState<string[]>(() =>
    initialOpenIds(items, defaultOpenId, multi),
  );

  const HeadingTag = headingLevel === 2 ? "h2" : "h3";

  const toggle = useCallback(
    (id: string) => {
      setOpenIds((current) => {
        const isOpen = current.includes(id);

        if (multi) {
          return isOpen
            ? current.filter((openId) => openId !== id)
            : [...current, id];
        }

        return isOpen ? [] : [id];
      });
    },
    [multi],
  );

  const rows = useMemo(
    () =>
      items.map((item) => ({
        item,
        open: openIds.includes(item.id),
        triggerId: `${idPrefix}-${item.id}-trigger`,
        panelId: `${idPrefix}-${item.id}-panel`,
      })),
    [items, openIds, idPrefix],
  );

  return (
    <div
      className={cx(
        "divide-y divide-slate-200/80 border-y border-slate-200/80",
        className,
      )}
    >
      {rows.map(({ item, open, triggerId, panelId }) => (
        <div key={item.id} className="group relative">
          <span
            aria-hidden="true"
            className={cx(
              "absolute left-0 top-1/2 w-px -translate-y-1/2 bg-gold transition-all duration-300 ease-out",
              open ? "h-10 opacity-100" : "h-0 opacity-0",
            )}
          />

          <HeadingTag className="m-0">
            <button
              id={triggerId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className={cx(
                "flex w-full items-center gap-4 py-5 pl-5 pr-1 text-left sm:gap-5 sm:py-6 sm:pl-6 sm:pr-2",
                "transition-colors duration-300",
                open ? "text-navy" : "text-navy-800 hover:text-navy",
              )}
            >
              {item.step !== undefined ? (
                <span className="w-10 shrink-0 text-xs font-semibold uppercase tabular-nums tracking-[0.18em] text-gold sm:w-12">
                  {item.step}
                </span>
              ) : null}

              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg leading-snug text-balance sm:text-xl">
                  {item.title}
                </span>
                {item.meta ? (
                  <span className="mt-1 block text-sm text-slate-500">
                    {item.meta}
                  </span>
                ) : null}
              </span>

              <span
                aria-hidden="true"
                className={cx(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                  open
                    ? "border-gold text-gold"
                    : "border-slate-200 text-navy-800 group-hover:border-gold",
                )}
              >
                <Chevron open={open} />
              </span>
            </button>
          </HeadingTag>

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
              <div className="pb-6 pl-5 pr-1 sm:pb-8 sm:pl-6 sm:pr-8">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;