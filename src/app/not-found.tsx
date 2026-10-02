/**
 * NOT FOUND (404).
 *
 * A calm, self-explanatory page: what happened, how to get back, and a full
 * list of the main pages so a visitor is never stranded. No invented content.
 */

import type { Metadata } from "next";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { pageSeo } from "@/content/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: pageSeo.notFound.title,
  description: pageSeo.notFound.description,
};

const MAIN_PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Bankruptcy", href: "/bankruptcy" },
  { label: "Business Solutions", href: "/business-solutions" },
  { label: "Service Fees", href: "/service-fees" },
  { label: "Contact", href: "/contact" },
] as const;

const LINK_CLASS =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-navy-800";

export default function NotFound() {
  return (
    <Section
      id="page-top"
      tone="cream"
      width="narrow"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,164,92,0.12),transparent_60%)]"
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <SectionLabel className="justify-center" rule={false}>
          Error 404
        </SectionLabel>

        <p
          aria-hidden="true"
          className="mt-6 font-display text-6xl font-semibold leading-none tracking-tight text-navy/10 sm:text-7xl"
        >
          404
        </p>

        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance text-navy sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-600">
          The page you were looking for doesn&apos;t exist or has moved. It may have been
          renamed, or the link that brought you here may be out of date.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Visit Contact
          </Button>
        </div>

        <div className="mt-14 w-full border-t border-slate-200 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">
            Main pages
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {MAIN_PAGES.map((page) => (
              <li key={page.href}>
                <a href={page.href} className={LINK_CLASS}>
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 max-w-md text-sm leading-relaxed text-slate-500">
          If you were looking for something in particular, please call us on{" "}
          <a
            href={siteConfig.phoneHref}
            className="font-medium text-navy underline decoration-gold underline-offset-4"
          >
            {siteConfig.phone}
          </a>{" "}
          or email{" "}
          <a
            href={siteConfig.emailHref}
            className="font-medium text-navy underline decoration-gold underline-offset-4"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
