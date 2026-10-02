"use client";

/**
 * TABLE OF CONTENTS for the 24-section bankruptcy guide.
 *
 * Desktop (`lg+`): a sticky, grouped sidebar in the left column with the active
 * section marked by a gold left rule plus `aria-current="true"` - the border and
 * weight change carries the state as well as the colour, so it is never
 * colour-only.
 *
 * Mobile: a compact sticky bar showing the current section with a disclosure
 * that reveals the same grouped list in a scrollable panel. The long desktop
 * list is never rendered below `lg`.
 *
 * Links point at `#${section.id}`. `GuideAccordion` puts exactly that id on each
 * section wrapper, so every link resolves to a real element in the rendered
 * markup. Navigation is intercepted to apply a header/sticky-bar aware offset
 * and to move focus to the target trigger for keyboard and screen-reader users.
 */

import { useState, type MouseEvent } from "react";

import type { BankruptcySection } from "@/content/bankruptcy";
import { cx } from "@/lib/cx";

export interface BankruptcyTocProps {
  sections: BankruptcySection[];
  activeId: string | null;
  /** Called with the section id so the caller can open the matching panel. */
  onNavigate: (id: string) => void;
  variant: "desktop" | "mobile";
}

/** Vertical offset left above the target when a TOC link is followed. */
const DESKTOP_OFFSET = 112;
const MOBILE_OFFSET = 176;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

const MOBILE_PANEL_ID = "bankruptcy-toc-mobile-panel";

type TocGroup = BankruptcySection["tocGroup"];

const GROUP_ORDER: readonly TocGroup[] = [
  "Overview",
  "Preparing",
  "Steps",
  "After",
  "Options",
  "Next",
];

interface TocBlock {
  group: TocGroup;
  items: BankruptcySection[];
}

function buildBlocks(sections: BankruptcySection[]): TocBlock[] {
  return GROUP_ORDER.map((group) => ({
    group,
    items: sections.filter((section) => section.tocGroup === group),
  })).filter((block) => block.items.length > 0);
}

function indexLabel(index: number): string {
  return index < 10 ? `0${index}` : String(index);
}

export function BankruptcyToc({
  sections,
  activeId,
  onNavigate,
  variant,
}: BankruptcyTocProps) {
  const [open, setOpen] = useState(false);
  const blocks = buildBlocks(sections);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string): void => {
    event.preventDefault();
    onNavigate(id);

    const target = document.getElementById(id);
    if (!target) return;

    const offset = variant === "desktop" ? DESKTOP_OFFSET : MOBILE_OFFSET;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    const behavior = window.matchMedia(REDUCED_MOTION).matches ? "auto" : "smooth";

    window.scrollTo({ top, behavior });

    const trigger = target.querySelector<HTMLButtonElement>("button[aria-expanded]");
    trigger?.focus({ preventScroll: true });

    if (variant === "mobile") setOpen(false);
  };

  const renderList = (itemClassName: string) =>
    blocks.map((block) => (
      <li key={block.group} className="mt-6 first:mt-0">
        <p className="px-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
          {block.group}
        </p>

        <ul className="mt-2.5 space-y-0.5">
          {block.items.map((section) => {
            const isActive = activeId === section.id;

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(event) => handleClick(event, section.id)}
                  className={cx(
                    "flex items-baseline gap-2 border-l-2 pl-3 pr-2 transition-colors duration-200",
                    itemClassName,
                    isActive
                      ? "border-gold bg-navy/[0.045] font-semibold text-navy"
                      : "border-transparent text-slate-600 hover:border-slate-300 hover:text-navy",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cx(
                      "shrink-0 text-[0.7rem] tabular-nums",
                      isActive ? "text-navy/60" : "text-slate-400",
                    )}
                  >
                    {indexLabel(section.index)}
                  </span>
                  <span className="min-w-0">{section.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    ));

  if (variant === "mobile") {
    const activeSection = sections.find((section) => section.id === activeId);
    const activeTitle = activeSection
      ? `${indexLabel(activeSection.index)} · ${activeSection.title}`
      : "Guide contents";

    return (
      <div className="sticky top-24 z-30 -mx-5 border-y border-navy/10 bg-cream px-5 sm:-mx-6 sm:px-6 lg:hidden">
        <div className="flex items-center justify-between gap-3 py-2">
          <div className="min-w-0">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Section {activeSection ? activeSection.index : 1} of {sections.length}
            </p>
            <p className="truncate text-sm font-medium text-navy">{activeTitle}</p>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={MOBILE_PANEL_ID}
            onClick={() => setOpen((previous) => !previous)}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-navy/20 px-4 text-sm font-medium text-navy transition-colors duration-200 hover:border-gold"
          >
            Sections
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              focusable="false"
              className={cx(
                "h-4 w-4 transition-transform duration-300",
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
          </button>
        </div>

        <div
          id={MOBILE_PANEL_ID}
          hidden={!open}
          className="max-h-[60vh] overflow-y-auto border-t border-navy/10 pb-3"
        >
          <ul>{renderList("py-2 text-sm leading-snug")}</ul>
        </div>
      </div>
    );
  }

  return (
    <nav aria-label="Guide contents" className="hidden lg:block">
      <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pb-6 pr-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">
          On this page
        </p>
        <ul className="mt-6">{renderList("py-1.5 text-[0.875rem] leading-snug")}</ul>
      </div>
    </nav>
  );
}

export default BankruptcyToc;