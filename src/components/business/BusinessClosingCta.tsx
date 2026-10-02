/**
 * CLOSING CALL TO ACTION BAND.
 *
 * Navigation only. No promises, timelines, fees or eligibility claims are made
 * here; the page makes no claim beyond the client-supplied copy.
 */

import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";

export function BusinessClosingCta() {
  return (
    <Section id="business-cta" tone="mist">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <SectionLabel className="justify-center">Next step</SectionLabel>

        <SectionHeading
          align="center"
          title="Discuss Your UK Business Requirements"
          className="mt-5"
        />

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
          <Button href="/service-fees" variant="secondary" size="lg">
            See Our Fixed Service Fees
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

export default BusinessClosingCta;