import type { Metadata } from "next";
import Link from "next/link";

import BankruptcyGuide from "@/components/bankruptcy/BankruptcyGuide";
import Button from "@/components/ui/Button";
import Callout from "@/components/ui/Callout";
import CopyPlaceholder from "@/components/ui/CopyPlaceholder";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  bankruptcyDisclaimer,
  bankruptcyHero,
} from "@/content/bankruptcy";
import { pageSeo } from "@/content/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: pageSeo.bankruptcy.title,
  description: pageSeo.bankruptcy.description,
  alternates: { canonical: "/bankruptcy" },
};

function GuideArrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
      className="h-4 w-4"
    >
      <path
        d="M10 4v12m0 0 5-5m-5 5-5-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BankruptcyPage() {
  return (
    <>
      <Section tone="none" className="bg-navy-900 pt-14 sm:pt-20 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel tone="dark">{bankruptcyHero.eyebrow}</SectionLabel>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance text-cream sm:text-5xl lg:text-[4rem]">
              {bankruptcyHero.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-300 sm:text-xl">
              {bankruptcyHero.subtitle}
            </p>

            {bankruptcyHero.intro ? (
              <p className="mt-5 max-w-xl leading-relaxed text-pretty text-slate-300">
                {bankruptcyHero.intro}
              </p>
            ) : (
              <CopyPlaceholder
                tone="dark"
                lines={3}
                note={bankruptcyHero.pendingCopyNote}
                className="mt-8 max-w-xl"
              />
            )}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="light" size="lg">
                Book a Consultation
              </Button>

              <a
                href="#guide"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/35 px-7 text-base font-medium tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light"
              >
                <GuideArrow />
                Jump to the guide
              </a>
            </div>
          </div>

          <PhotoPlaceholder
            ratio="4/3"
            label="Financial documents and paperwork"
            alt="A calm, orderly desk with neatly organised financial documents and paperwork"
          />
        </div>
      </Section>

      <Section tone="mist" width="narrow" className="py-12 sm:py-14">
        <Reveal>
          <Callout title={bankruptcyDisclaimer.title} tone="info">
            {bankruptcyDisclaimer.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="mt-5 border-t border-navy/10 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/70">
                {bankruptcyDisclaimer.checked}
              </p>
            </div>
          </Callout>
        </Reveal>
      </Section>

      <Section id="guide" tone="cream" className="pt-14 sm:pt-16 lg:pt-20">
        <SectionHeading
          eyebrow="The Guide"
          title="The Step-by-Step Guide"
          lede="Twenty-four sections covering bankruptcy in England and Wales, in the order you would work through them. Open any section to read it, or use the contents to move straight to what you need."
        />

        <BankruptcyGuide />

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-slate-500">
          The structure and section titles are final. Each section is marked as
          pending until the client&apos;s own approved wording is inserted — no
          replacement legal text has been drafted in its place.
        </p>
      </Section>

      <Section tone="navy" className="pt-14 sm:pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel tone="dark">Next Steps</SectionLabel>

            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance text-cream sm:text-4xl lg:text-[2.75rem]">
              Speak to Us Before You Decide
            </h2>

            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-slate-300">
              <p>{siteConfig.tagline}</p>

              <p>
                Alongside this bankruptcy guidance we provide business setup,
                business development and risk assessment support for UK
                businesses.
              </p>

              <p>
                If you are weighing up bankruptcy — or whether bankruptcy is the
                right route for you at all — a confidential initial conversation
                can help you understand the options before you commit to
                anything. There is a fixed-fee initial consultation; current
                figures are published on our service fees page.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="light" size="lg">
                Book a Consultation
              </Button>

              <Link
                href="/service-fees"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream/35 px-7 text-base font-medium tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light"
              >
                View Service Fees
              </Link>
            </div>

            <p className="mt-7 text-sm text-slate-400">
              Prefer to talk first?{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-medium text-cream underline decoration-gold/50 underline-offset-[6px] transition-colors duration-200 hover:decoration-gold"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>

          <Reveal>
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-7 sm:p-9">
              <p className="font-display text-base font-semibold tracking-tight text-cream">
                {bankruptcyDisclaimer.title}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                The full disclaimer for this website, including the limits of the
                information published here and guidance on obtaining qualified
                regulated help, is published on its own page.
              </p>

              <Link
                href="/disclaimer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gold-light underline decoration-gold/40 underline-offset-[6px] transition-colors duration-200 hover:decoration-gold"
              >
                Read the full disclaimer
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  focusable="false"
                  className="h-4 w-4"
                >
                  <path
                    d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}