/**
 * BUSINESS SOLUTIONS PAGE.
 *
 * All copy on this page comes from `src/content/business.ts` (client-supplied or
 * explicitly pending) and `src/content/seo.ts`. The eight service titles, their
 * bullet lists, the bank note, the risk highlight and the overseas process steps
 * are reproduced verbatim and in the supplied order.
 *
 * `body` is null for all eight services and for the overseas panel, so each of
 * those gaps is surfaced with a `CopyPlaceholder` - structure first, client copy
 * second. No service description, guarantee, timeline, success rate, testimonial,
 * regulatory status or outcome claim has been written.
 */

import type { Metadata } from "next";

import BusinessClosingCta from "@/components/business/BusinessClosingCta";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessServicePanel from "@/components/business/BusinessServicePanel";
import InternationalPanelSection from "@/components/business/InternationalPanelSection";
import ServiceJumpNav from "@/components/business/ServiceJumpNav";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { businessServices, internationalEntrepreneurs } from "@/content/business";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.businessSolutions.title,
  description: pageSeo.businessSolutions.description,
  alternates: { canonical: "/business-solutions" },
};

export default function BusinessSolutionsPage() {
  return (
    <>
      <BusinessHero />

      <Section id="business-services" tone="cream">
        <SectionHeading
          eyebrow="What we cover"
          title="Business Setup & Growth Services"
        />

        <ServiceJumpNav />

        <div className="mt-12 space-y-6 lg:space-y-8">
          {businessServices.map((service, index) => (
            <BusinessServicePanel key={service.id} service={service} index={index} />
          ))}
        </div>
      </Section>

      <Section
        id="business-overseas"
        tone="navy"
        width="wide"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(201,164,92,0.14),transparent_58%)]"
        />

        <div className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Overseas clients"
            title={internationalEntrepreneurs.title}
          />

          <InternationalPanelSection />
        </div>
      </Section>

      <BusinessClosingCta />
    </>
  );
}