import SectionLabel from "@/components/ui/SectionLabel";
import { contactHero } from "@/content/contact";
import { siteConfig } from "@/content/site";

/**
 * Contact page hero. The single `h1` for the route.
 *
 * Copy is client-supplied: the gold eyebrow is `contactHero.subtitle`
 * ("Confidential • Professional • Practical") and the lede is the site
 * tagline. No response-time promise, availability claim or office hours are
 * added, because none were supplied.
 */
export function ContactHero() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <SectionLabel tone="dark" className="justify-center">
        {contactHero.subtitle}
      </SectionLabel>

      <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance text-cream sm:text-5xl lg:text-[3.5rem]">
        {contactHero.title}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-slate-300 sm:text-xl">
        {siteConfig.tagline}
      </p>
    </div>
  );
}

export default ContactHero;