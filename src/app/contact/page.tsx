import type { Metadata } from "next";

import ContactClosingBand from "@/components/contact/ContactClosingBand";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactEnquiryForm from "@/components/contact/ContactEnquiryForm";
import ContactHero from "@/components/contact/ContactHero";
import Callout from "@/components/ui/Callout";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { responseNote } from "@/content/contact";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  alternates: { canonical: "/contact" },
};

/**
 * The public half of `responseNote`. The remaining sentence is an internal
 * build note about field specifications that were never supplied, so it is
 * kept out of the visitor-facing copy.
 */
const deliveryNote = responseNote.split("Field specifications")[0].trim();

const DETAILS_LEDE =
  "Call, email or visit the website, whichever is easiest for you. The details below are the only ones we publish.";

const FORM_LEDE =
  "Complete the form below and we will come back to you. Every field is checked before your enquiry is accepted.";

export default function ContactPage() {
  return (
    <>
      <Section tone="none" className="bg-navy-900">
        <ContactHero />
      </Section>

      <Section id="details" tone="mist">
        <Reveal>
          <SectionHeading eyebrow="Contact details" title="Speak with us directly" lede={DETAILS_LEDE} />
        </Reveal>

        <Reveal delay={80}>
          <ContactDetails className="mt-12" />
        </Reveal>
      </Section>

      <Section id="enquiry" tone="cream">
        <Reveal>
          <SectionHeading eyebrow="Enquiry form" title="Send an enquiry" lede={FORM_LEDE} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <Reveal>
            <ContactEnquiryForm />
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-8">
              <ContactDetails
                heading="Prefer to talk?"
                headingLevel="h3"
                cardHeadingLevel="p"
                columns="sm:grid-cols-2 lg:grid-cols-1"
              />

              <Callout title="About this form">{deliveryNote}</Callout>
            </div>
          </Reveal>
        </div>
      </Section>

      <ContactClosingBand />
    </>
  );
}