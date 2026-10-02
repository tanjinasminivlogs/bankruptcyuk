/**
 * SERVICE FEES PAGE.
 *
 * All copy comes from `src/content/fees.ts`. Tier names, amounts, durations,
 * descriptions and footnotes are rendered verbatim and in the supplied order;
 * `duration` is omitted entirely when it is `null`. The featured tier is
 * distinguished visually only — no badge, urgency or value claim, because none
 * was supplied.
 *
 * Payment details were NOT supplied. `paymentMethods[0].detail` and `[1].detail`
 * are `null` and surface as `CopyPlaceholder` panels built from each method own
 * `pendingCopyNote`. No bank name, account holder, sort code, account number,
 * IBAN, BIC/SWIFT or payment URL is invented anywhere on this page, and every
 * call to action routes to `/contact` rather than a checkout.
 */

import type { Metadata } from "next";

import PaymentMethodCard from "@/components/fees/PaymentMethodCard";
import PricingCard from "@/components/fees/PricingCard";
import Button from "@/components/ui/Button";
import Callout from "@/components/ui/Callout";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/ui/SectionLabel";
import { feesIntro, paymentMethods, pricingCta, pricingTiers } from "@/content/fees";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.serviceFees.title,
  description: pageSeo.serviceFees.description,
  alternates: { canonical: "/service-fees" },
};

/**
 * Per-tier call-to-action labels, keyed by the client own tier name so a label
 * can only ever be derived from supplied wording. `pricingCta` is the fallback
 * for every other tier.
 */
const TIER_CTA: Record<string, string> = {
  "Initial Consultation": "Book a Consultation",
};

function tierCta(name: string): string {
  return TIER_CTA[name] ?? pricingCta;
}

export default function ServiceFeesPage() {
  return (
    <>
      <Section id="page-top" tone="cream" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(201,164,92,0.14),transparent_58%)]"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">Service Fees</SectionLabel>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance text-navy sm:text-5xl lg:text-[3.5rem]">
            {feesIntro.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-slate-600 sm:text-xl">
            {feesIntro.subtitle}
          </p>
        </div>
      </Section>

      <Section id="fees" tone="mist">
        <SectionHeading
          eyebrow="Pricing"
          title="Fixed Fees For Every Engagement"
          lede="The fees below are the fixed service fees charged for each engagement. Where a fee does not cover a cost, that cost is stated in the note at the foot of the card."
        />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 100} className="h-full">
              <PricingCard tier={tier} ctaLabel={tierCta(tier.name)} ctaHref="/contact" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Callout tone="info" title="Costs not included in these fees" className="mt-12">
            <p>
              Government charges, High Court fees, court costs and third-party disbursements
              are excluded from the fees shown above unless specifically stated in the note
              at the foot of that card. Payment details are provided once an engagement is
              confirmed.
            </p>
          </Callout>
        </Reveal>
      </Section>

      <Section id="payment" tone="white">
        <SectionHeading
          eyebrow="Payment"
          title="How To Pay"
          lede="The following payment methods are available. Where payment details were not supplied with this page, they are shown as pending rather than filled in."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paymentMethods.map((method, index) => (
            <Reveal key={method.title} delay={index * 100} className="h-full">
              <PaymentMethodCard method={method} index={index} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="enquire" tone="navy" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,164,92,0.12),transparent_60%)]"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <SectionLabel tone="dark" className="justify-center">
            Next Step
          </SectionLabel>

          <SectionHeading
            tone="dark"
            align="center"
            title={pricingCta}
            lede="If you are unsure which service applies, or what your own circumstances require, contact us and it can be discussed before any fee applies."
            className="mt-5"
          />

          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Button href="/contact" variant="light" size="lg">
              {pricingCta}
            </Button>
            <Button
              href="/bankruptcy"
              variant="ghost"
              size="lg"
              className="text-cream decoration-cream/35 hover:text-cream hover:decoration-cream"
            >
              Read The Bankruptcy Guide
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}