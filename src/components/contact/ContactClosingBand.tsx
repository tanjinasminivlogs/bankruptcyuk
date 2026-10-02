import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactHero } from "@/content/contact";

import ContactDetails from "./ContactDetails";

/**
 * Closing reassurance band.
 *
 * Repeats only what has been supplied: the positioning line, the contact
 * details and the published £49 initial consultation. No response time,
 * availability or guarantee is claimed.
 */
export function ContactClosingBand() {
  return (
    <Section id="next-steps" tone="navy">
      <Reveal>
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow={contactHero.subtitle}
          title="Speak with us in confidence"
          lede="Our initial consultation is £49 and lasts up to 20 minutes. Every fee is published on our service fees page, so you can review the cost before you get in touch."
        />
      </Reveal>

      <Reveal delay={80}>
        <ContactDetails className="mt-12" />
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 flex justify-center">
          <Button href="/service-fees" variant="light" size="lg">
            View Service Fees
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

export default ContactClosingBand;