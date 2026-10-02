/**
 * HOME PAGE.
 *
 * Every fact comes from `src/content/home.ts`, `src/content/about.ts`,
 * `src/content/site.ts` or `src/content/seo.ts`. Nothing else is asserted: no
 * testimonials, awards, certifications, client counts, success rates, legal
 * qualifications, regulatory status or guarantees. The only statistic shown
 * anywhere is the client-supplied 57 countries.
 *
 * Each `null` field is surfaced with a `CopyPlaceholder` so it is unambiguous
 * that the client's own wording is still to come.
 */

import type { Metadata } from "next";
import Link from "next/link";

import Eyebrow from "@/components/shared/Eyebrow";
import GlobalExperience from "@/components/shared/GlobalExperience";
import Timeline from "@/components/shared/Timeline";
import Button from "@/components/ui/Button";
import CopyPlaceholder from "@/components/ui/CopyPlaceholder";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { homeGlobal, homeHero, homeIntro, homeServices, homeTimeline } from "@/content/home";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.home.title,
  description: pageSeo.home.description,
  alternates: { canonical: "/" },
};

/**
 * The client headline is kept verbatim. It is only *broken* across two lines so
 * "UK Business" can carry a restrained gold hairline; no words are reworded.
 */
const HERO_BREAK_INDEX = homeHero.title.lastIndexOf(" & ");
const HERO_HEAD = HERO_BREAK_INDEX > 0 ? homeHero.title.slice(0, HERO_BREAK_INDEX) : homeHero.title;
const HERO_TAIL = HERO_BREAK_INDEX > 0 ? homeHero.title.slice(HERO_BREAK_INDEX + 3) : null;

/** Neutral closing-band wording. Deliberately carries no factual claim. */
const CLOSING_HEADING = "Ready to take the first step?";
const CLOSING_LINE = "Speak to us about your circumstances.";

export default function HomePage() {
  return (
    <>
      {/* A. HERO */}
      <section id="hero" className="relative overflow-hidden bg-navy py-20 sm:py-28 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(201,164,92,0.16),transparent_58%)]"
        />

        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow tone="dark" className="justify-center lg:justify-start">{homeHero.eyebrow}</Eyebrow>

              <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-cream sm:text-5xl lg:text-6xl xl:text-7xl">
                {HERO_HEAD}
                {HERO_TAIL ? (
                  <>
                    {" &"}
                    <br className="hidden sm:block" />{" "}
                    <span className="relative inline-block whitespace-nowrap">
                      {HERO_TAIL}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-px w-full bg-gold/70"
                      />
                    </span>
                  </>
                ) : null}
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-pretty text-slate-300 sm:text-lg">
                {homeHero.description}
              </p>

              <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/contact" variant="primary" size="lg">
                  {homeHero.primaryCta}
                </Button>
                <Button href="#services" variant="light" size="lg">
                  {homeHero.secondaryCta}
                </Button>
              </div>
            </div>

            <Reveal delay={80}>
              <PhotoPlaceholder
                label="London financial district"
                alt="Placeholder image concept: the London financial district. No photograph has been supplied for this page yet."
                ratio="4/3"
                overlay
                priority
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* B. INTRODUCTION */}
      <Section id="introduction" tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Eyebrow>Approach</Eyebrow>

            <SectionHeading title={homeIntro.heading} className="mt-5" />

            <ol className="mt-10 space-y-7">
              {homeIntro.approach.map((line, index) => (
                <li key={line} className="flex gap-5 border-l border-slate-200 pl-6">
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl font-semibold leading-none text-gold tabular-nums sm:text-3xl"
                  >
                    {`0${index + 1}`}
                  </span>
                  <p className="font-display text-xl font-medium leading-snug tracking-tight text-navy sm:text-2xl">
                    {line}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            {homeIntro.body ? (
              <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-[1.0625rem]">
                {homeIntro.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <CopyPlaceholder
                label="Introduction copy pending"
                heading="A little more about the approach"
                note={homeIntro.pendingCopyNote}
                lines={4}
              />
            )}

            <div className="mt-10">
              <Button href="/about" variant="secondary" size="lg">
                {homeIntro.cta}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* C. PROFESSIONAL TIMELINE */}
      <Section id="professional-journey" tone="cream">
        <Eyebrow>Career</Eyebrow>

        <SectionHeading
          title={homeTimeline.title}
          lede="Roles, periods and organisations are reproduced exactly as they were supplied. Where the brief did not include an employer or a description, that gap is shown as pending rather than filled in."
          className="mt-5"
        />

        <Timeline />
      </Section>

      {/* D. GLOBAL EXPERIENCE */}
      <Section
        id="global-perspective"
        tone="navy"
        className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] shadow-[0_0_0_5rem_rgba(255,255,255,0.02),0_0_0_10rem_rgba(255,255,255,0.015)] sm:h-[48rem] sm:w-[48rem]"
        />

        <Eyebrow tone="dark" className="justify-center">
          Perspective
        </Eyebrow>

        <GlobalExperience data={homeGlobal} headingLevel={2} align="center" />
      </Section>

      {/* E. SERVICES */}
      <Section id="services" tone="mist">
        <Eyebrow>Services</Eyebrow>

        <SectionHeading title={homeServices.heading} className="mt-5" />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {homeServices.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 100} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_28px_60px_-40px_rgba(11,31,51,0.55)]">
                <PhotoPlaceholder
                  label={item.imageLabel}
                  alt={`Placeholder image concept: ${item.imageLabel.charAt(0).toLowerCase()}${item.imageLabel.slice(1)}. No photograph has been supplied for this section yet.`}
                  ratio="3/2"
                />

                <h3 className="mt-8 font-display text-2xl font-semibold leading-snug tracking-tight text-navy">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-7 inline-flex min-h-11 items-center gap-2 self-start text-[0.95rem] font-medium text-navy transition-colors duration-200 hover:text-navy-800"
                >
                  <span className="underline decoration-gold/50 underline-offset-[6px] transition-[text-decoration-color] duration-200 group-hover:decoration-gold">
                    {item.cta}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                    className="h-4 w-4 text-gold transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="M5 12h13M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* F. CLOSING CTA BAND */}
      <section
        id="get-in-touch"
        className="relative overflow-hidden bg-navy-800 py-16 sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,164,92,0.12),transparent_62%)]"
        />

        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center sm:px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            align="center"
            title={CLOSING_HEADING}
            lede={CLOSING_LINE}
          />

          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Button href="/contact" variant="light" size="lg">
              Book a Consultation
            </Button>

            <Link
              href="/service-fees"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/35 px-7 text-base font-medium tracking-wide text-cream transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.65)]"
            >
              View Service Fees
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



