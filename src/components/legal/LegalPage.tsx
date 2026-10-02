/**
 * SHARED LEGAL DOCUMENT LAYOUT.
 *
 * Server component used by the Privacy, Terms and Disclaimer pages so the three
 * documents share one calm, editorial reading experience: a restrained navy
 * header carrying the page `h1`, then a narrow-measure body where each clause is
 * a semantic `<section>` with an `h2` from `SectionHeading` and its copy inside
 * `Prose`.
 *
 * The in-page table of contents is derived from the `LegalClause` children and
 * only renders when a document has five or more clauses. It is a quiet list of
 * anchor links - never sticky.
 */

import { Children, isValidElement, type ReactNode } from "react";

import { cx } from "@/lib/cx";
import Prose from "@/components/ui/Prose";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/ui/SectionLabel";

export interface LegalClauseProps {
  /** Anchor id - also the table-of-contents target. */
  id: string;
  /** Clause heading, rendered as an `h2`. */
  title: string;
  children?: ReactNode;
}

export interface LegalPageProps {
  eyebrow: string;
  /** Rendered as the page's single `h1`. */
  title: string;
  lede?: string;
  /** Short date line, e.g. "August 2026". */
  lastUpdated?: string;
  children?: ReactNode;
}

interface ClauseEntry {
  id: string;
  title: string;
}

/** One clause: a semantic section, an `h2` heading and its body copy. */
export function LegalClause({ id, title, children }: LegalClauseProps) {
  return (
    <section id={id} className="scroll-mt-28 pt-12 first:pt-0">
      <SectionHeading
        id={`${id}-heading`}
        title={title}
        headingClassName="[font-size:1.5rem] sm:[font-size:1.75rem]"
      />

      <Prose className="mt-5">{children}</Prose>
    </section>
  );
}

/**
 * Collect the clauses passed as direct children so the table of contents is
 * built from the document itself rather than a second, duplicate list.
 */
function collectClauses(children: ReactNode): ClauseEntry[] {
  const clauses: ClauseEntry[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement<LegalClauseProps>(child) && child.type === LegalClause) {
      clauses.push({ id: child.props.id, title: child.props.title });
    }
  });

  return clauses;
}

function TableOfContents({ clauses }: { clauses: ClauseEntry[] }) {
  return (
    <nav
      aria-label="On this page"
      className="rounded-2xl border border-slate-200 bg-white/70 p-6 sm:p-7"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">
        On this page
      </p>

      <ol className="mt-4 space-y-3">
        {clauses.map((clause) => (
          <li key={clause.id} className="flex gap-3 text-[0.95rem] leading-snug">
            <span aria-hidden="true" className="mt-[0.5rem] h-px w-4 shrink-0 bg-gold" />
            <a
              href={`#${clause.id}`}
              className="text-slate-600 underline decoration-gold/45 underline-offset-4 transition-colors hover:text-navy hover:decoration-gold"
            >
              {clause.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Consistent document shell for the site's legal and policy pages. */
export function LegalPage({
  eyebrow,
  title,
  lede,
  lastUpdated,
  children,
}: LegalPageProps) {
  const clauses = collectClauses(children);
  const showToc = clauses.length >= 5;

  return (
    <>
      <Section id="page-top" tone="navy" width="narrow" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(201,164,92,0.14),transparent_58%)]"
        />

        <div className="relative">
          <SectionLabel tone="dark">{eyebrow}</SectionLabel>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance text-cream sm:text-5xl">
            {title}
          </h1>

          {lede ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-slate-300">
              {lede}
            </p>
          ) : null}

          {lastUpdated ? (
            <p className={cx("text-sm text-slate-400", lede ? "mt-5" : "mt-6")}>
              Last updated: {lastUpdated}
            </p>
          ) : null}
        </div>
      </Section>

      <Section id="legal-content" tone="cream" width="narrow">
        {showToc ? (
          <div className="mb-12">
            <TableOfContents clauses={clauses} />
          </div>
        ) : null}

        <Prose>{children}</Prose>
      </Section>
    </>
  );
}

export default LegalPage;
