/**
 * BUSINESS SOLUTIONS HERO.
 *
 * Copy is verbatim from `businessHero` in `src/content/business.ts`: the h1
 * title, the subtitle and the single supplied intro paragraph. Nothing is
 * added, implied or promised here - the hero makes no claim about outcomes,
 * speed, approval or eligibility.
 */

import Button from "@/components/ui/Button";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { businessHero } from "@/content/business";

export function BusinessHero() {
  return (
    <Section
      id="business-hero"
      tone="navy"
      width="wide"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(201,164,92,0.16),transparent_58%)]"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <SectionLabel tone="dark">Business Solutions</SectionLabel>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-balance text-cream sm:text-5xl lg:text-[3.5rem]">
            {businessHero.title}
          </h1>

          <p className="mt-6 text-pretty text-xl font-medium leading-snug text-cream/90 sm:text-2xl">
            {businessHero.subtitle}
          </p>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            {businessHero.intro}
          </p>

          <div className="mt-10 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Button href="/contact" size="lg">
              Book a Consultation
            </Button>
            <Button href="/service-fees" variant="light" size="lg">
              View Service Fees
            </Button>
          </div>
        </div>

        <Reveal delay={80}>
          <PhotoPlaceholder
            label="London office"
            alt="Placeholder image concept: a UK company and a modern office in London. No photograph has been supplied for this page yet."
            ratio="4/3"
            overlay
          />
        </Reveal>
      </div>
    </Section>
  );
}

export default BusinessHero;