/**
 * ABOUT PAGE.
 *
 * Every fact on this page comes from `src/content/about.ts` (client-supplied or
 * explicitly interim), `src/content/site.ts` or `src/content/seo.ts`. Nothing
 * else may be asserted: no testimonials, awards, certifications, statistics
 * other than the 57 countries, legal qualifications, regulatory status or
 * guarantees. Every `null` field is surfaced with a `CopyPlaceholder` so it is
 * unambiguous that the client's own wording is still to come.
 */

import type { Metadata } from "next";

import Eyebrow from "@/components/shared/Eyebrow";
import GlobalExperience from "@/components/shared/GlobalExperience";
import Timeline from "@/components/shared/Timeline";
import Button from "@/components/ui/Button";
import Callout from "@/components/ui/Callout";
import CopyPlaceholder from "@/components/ui/CopyPlaceholder";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutHero, education, myStory, philosophy, lookingAhead, timeline } from "@/content/about";
import { pageSeo } from "@/content/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  alternates: { canonical: "/about" },
};

/**
 * The About hero headline was not supplied in the brief, so the visible h1 is
 * a neutral, purely descriptive page-structure heading rather than drafted
 * client copy.
 */
const HERO_TITLE = "About BankruptcyUK";
const HERO_LEDE = "The person, the experience and the approach behind the practice.";

/** Restrained opening quotation glyph for the philosophy quote. */
const QUOTE_MARK = "\u201C";

/** Derived verbatim from the 2023 timeline entry — no narrative is invented. */
const entrepreneurshipEntry = timeline.find(
  (entry) => entry.role === "Entrepreneurship & Consultancy",
);

/** Verbatim founder sentence from the interim `myStory` copy. */
const founderFact =
  myStory.body?.find((paragraph) => paragraph.includes("founder of BankruptcyUK")) ?? null;

export default function AboutPage() {
  return (
    <>
      <Section id="page-top" tone="navy" width="wide" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(201,164,92,0.16),transparent_58%)]"
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow tone="dark">The practice</Eyebrow>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-balance text-cream sm:text-5xl lg:text-[3.75rem]">
              {HERO_TITLE}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-300 sm:text-xl">
              {HERO_LEDE}
            </p>

            <CopyPlaceholder
              tone="dark"
              label="Hero copy pending"
              note={aboutHero.pendingCopyNote}
              lines={2}
              className="mt-10 max-w-xl border-white/12 bg-white/[0.03] p-6"
            />
          </div>

          <Reveal delay={80}>
            <PhotoPlaceholder
              label="East London"
              alt="Placeholder image concept: the London skyline and the East London cityscape. No photograph has been supplied for this page yet."
              ratio="4/3"
              overlay
            />
          </Reveal>
        </div>
      </Section>

      <Section id="my-story" tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">
          <div>
            <Eyebrow>Background</Eyebrow>

            <SectionHeading title={myStory.heading} className="mt-5" />

            <Prose className="mt-8 max-w-2xl">
              {(myStory.body ?? []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Prose>

            <CopyPlaceholder
              heading="Full biography"
              label="Biography pending"
              note={`The summary above is interim. ${myStory.pendingCopyNote}`}
              lines={3}
              className="mt-10 max-w-2xl"
            />
          </div>

          <Reveal delay={80} className="lg:sticky lg:top-28">
            <PhotoPlaceholder
              label="Founder portrait"
              alt="Portrait photograph placeholder for Mohamed Zain. No photograph of the founder has been supplied, and no image is displayed in its place."
              ratio="4/3"
            />
          </Reveal>
        </div>
      </Section>

      <Section id="education" tone="white">
        <Eyebrow>Training</Eyebrow>

        <SectionHeading
          title="Education & Professional Development"
          className="mt-5"
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {education.map((entry, index) => (
            <Reveal as="li" key={entry.qualification} delay={index * 60} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-cream p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-navy sm:text-xl">
                  {entry.qualification}
                </h3>
                <p
                  className={
                    entry.institution
                      ? "mt-3 text-sm text-slate-600 sm:text-[0.95rem]"
                      : "mt-3 text-sm text-slate-400"
                  }
                >
                  {entry.institution ?? "Institution not stated"}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Callout tone="info" title="About this information" className="mt-10 max-w-3xl">
          <p>
            The education and training listed above is the information provided to us by
            the client and is reproduced here as supplied. No further qualifications,
            institutions or dates have been added.
          </p>
          <p>
            This page does not state or imply any professional status, authorisation or
            regulatory position. If you need advice from a regulated professional, please
            ask us and we will point you to the appropriate route.
          </p>
        </Callout>
      </Section>

      <Section id="experience" tone="cream">
        <Eyebrow>Career</Eyebrow>

        <SectionHeading
          title="Professional Work Experience"
          lede="Roles, periods and employers are reproduced exactly as they were supplied. Where the brief did not include an employer or a description, that gap is shown as pending rather than filled in."
          className="mt-5"
        />

        <Timeline />
      </Section>

      <Section id="entrepreneurship" tone="mist">
        <Eyebrow>Practice</Eyebrow>

        <SectionHeading title="Entrepreneurship & Business" className="mt-5" />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Prose className="max-w-2xl">
            {entrepreneurshipEntry ? (
              <p>
                {entrepreneurshipEntry.period} — {entrepreneurshipEntry.role}.
              </p>
            ) : null}
            {founderFact ? <p>{founderFact}</p> : null}
          </Prose>

          <CopyPlaceholder
            heading="The full story"
            label="Narrative pending"
            note="The client supplied the section heading and the timeline entry shown on the left, but not a longer narrative. The client's own wording will be inserted here verbatim; no business story, client list, revenue figure or achievement has been added."
            lines={3}
            className="self-start"
          />
        </div>
      </Section>

      <Section id="global-experience" tone="navy-800">
        <Eyebrow tone="dark">Perspective</Eyebrow>

        <SectionHeading
          tone="dark"
          title="Global Travel Experience"
          className="mt-5"
        />

        <GlobalExperience headingLevel={3} align="left" />
      </Section>

      <Section id="philosophy" tone="navy" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,164,92,0.12),transparent_60%)]"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow tone="dark" className="justify-center">
            Personal
          </Eyebrow>

          <SectionHeading
            tone="dark"
            align="center"
            title={philosophy.heading}
            className="mt-5"
          />

          <Reveal delay={60}>
            <figure className="mt-12">
              <span
                aria-hidden="true"
                className="mx-auto block h-14 w-px bg-gradient-to-b from-gold/70 to-transparent"
              />

              <blockquote className="mt-10">
                <span
                  aria-hidden="true"
                  className="block font-display text-5xl leading-none text-gold/70"
                >
                  {QUOTE_MARK}
                </span>

                <span className="mt-2 block space-y-4 font-display text-2xl font-medium leading-relaxed text-cream sm:text-3xl lg:text-4xl">
                  {philosophy.quote.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>

                <span
                  aria-hidden="true"
                  className="mx-auto mt-10 block h-14 w-px bg-gradient-to-b from-transparent to-gold/70"
                />
              </blockquote>

              <figcaption className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                {siteConfig.founder}
              </figcaption>
            </figure>
          </Reveal>

          <CopyPlaceholder
            tone="dark"
            label="Philosophy copy pending"
            note={philosophy.pendingCopyNote}
            lines={3}
            className="mt-12 text-left"
          />
        </div>
      </Section>

      <Section id="looking-ahead" tone="cream" width="narrow">
        <Eyebrow>Next</Eyebrow>

        <SectionHeading title={lookingAhead.heading} className="mt-5" />

        <CopyPlaceholder
          label="Section copy pending"
          note={lookingAhead.pendingCopyNote}
          lines={3}
          className="mt-10"
        />
      </Section>

      <Section id="get-in-touch" tone="mist">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow className="justify-center">Contact</Eyebrow>

          <SectionHeading
            align="center"
            title={`Contact ${siteConfig.name}`}
            lede={siteConfig.tagline}
            className="mt-5"
          />

          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Button href="/contact" size="lg">
              Book a Consultation
            </Button>
            <Button href="/service-fees" variant="secondary" size="lg">
              Service Fees
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
