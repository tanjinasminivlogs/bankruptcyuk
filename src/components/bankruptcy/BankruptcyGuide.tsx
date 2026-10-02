"use client";

/**
 * CORE OF THE BANKRUPTCY PAGE: a sticky, grouped table of contents beside the
 * 24-section disclosure list.
 *
 * Owns the open-panel state (so a table-of-contents link can open its target)
 * and the active-section marker, which is driven by an IntersectionObserver
 * rather than a scroll handler.
 */

import { useCallback, useEffect, useState } from "react";

import { bankruptcySteps } from "@/content/bankruptcy";

import BankruptcyToc from "./BankruptcyToc";
import GuideAccordion from "./GuideAccordion";

const FIRST_SECTION_ID = bankruptcySteps[0]?.id ?? null;

export function BankruptcyGuide() {
  const [openIds, setOpenIds] = useState<string[]>(() =>
    FIRST_SECTION_ID === null ? [] : [FIRST_SECTION_ID],
  );
  const [activeId, setActiveId] = useState<string | null>(FIRST_SECTION_ID);

  useEffect(() => {
    const nodes = bankruptcySteps
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    if (nodes.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        const inView = bankruptcySteps.find((section) => visible.has(section.id));
        if (inView) {
          setActiveId(inView.id);
          return;
        }

        // Nothing inside the reading band: keep the marker on the last section
        // that has already scrolled past it rather than blanking the TOC.
        let passed: string | null = null;
        for (const node of nodes) {
          if (node.getBoundingClientRect().top <= window.innerHeight * 0.4) {
            passed = node.id;
          }
        }

        setActiveId(passed ?? FIRST_SECTION_ID);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
    );

    for (const node of nodes) observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const toggle = useCallback((id: string) => {
    setOpenIds((current) =>
      current.includes(id)
        ? current.filter((openId) => openId !== id)
        : [...current, id],
    );
  }, []);

  const navigate = useCallback((id: string) => {
    setOpenIds((current) =>
      current.includes(id) ? current : [...current, id],
    );
  }, []);

  return (
    <div className="mt-10 lg:mt-14">
      <div className="lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12 xl:gap-16">
        <BankruptcyToc
          variant="desktop"
          sections={bankruptcySteps}
          activeId={activeId}
          onNavigate={navigate}
        />

        <div className="min-w-0">
          <BankruptcyToc
            variant="mobile"
            sections={bankruptcySteps}
            activeId={activeId}
            onNavigate={navigate}
          />

          <div className="mt-8 lg:mt-0">
            <GuideAccordion
              sections={bankruptcySteps}
              openIds={openIds}
              onToggle={toggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankruptcyGuide;