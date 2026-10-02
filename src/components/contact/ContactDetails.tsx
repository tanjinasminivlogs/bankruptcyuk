import type { ReactElement } from "react";

import { siteConfig } from "@/content/site";
import { cx } from "@/lib/cx";

/**
 * Contact detail links.
 *
 * Phone, email and website are the only details supplied. No postal address,
 * office hours or availability has been invented. The email address keeps the
 * client's supplied spelling exactly as recorded in `siteConfig`.
 */

export type ContactChannel = "phone" | "email" | "website";

export interface ContactLink {
  channel: ContactChannel;
  /** Card heading. */
  label: string;
  /** Screen-reader description of the action. */
  hint: string;
  /** Visible value. */
  value: string;
  href: string;
  external: boolean;
}

export const contactLinks: readonly ContactLink[] = [
  {
    channel: "phone",
    label: "Phone",
    hint: "Call BankruptcyUK",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    external: false,
  },
  {
    channel: "email",
    label: "Email",
    hint: "Email BankruptcyUK",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    external: false,
  },
  {
    channel: "website",
    label: "Website",
    hint: "Visit the BankruptcyUK website",
    value: "www.bankruptcyuk.org",
    href: siteConfig.website,
    external: true,
  },
];

function PhoneGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      <path d="M7.6 3.8h-2A2.6 2.6 0 0 0 3 6.5C3 14.1 9.9 21 17.5 21a2.6 2.6 0 0 0 2.7-2.6v-2a1.5 1.5 0 0 0-1.2-1.5l-2.5-.5a1.5 1.5 0 0 0-1.5.6l-.8 1.2a11.7 11.7 0 0 1-5.2-5.2l1.2-.8a1.5 1.5 0 0 0 .6-1.5l-.5-2.5a1.5 1.5 0 0 0-1.5-1.2Z" />
    </svg>
  );
}

function EnvelopeGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.8 7 7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
    </svg>
  );
}

function GlobeGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.4 12h17.2" />
      <path d="M12 3.4c2.2 2.4 3.4 5.4 3.4 8.6s-1.2 6.2-3.4 8.6c-2.2-2.4-3.4-5.4-3.4-8.6S9.8 5.8 12 3.4Z" />
    </svg>
  );
}

const GLYPHS: Record<ContactChannel, () => ReactElement> = {
  phone: PhoneGlyph,
  email: EnvelopeGlyph,
  website: GlobeGlyph,
};

export interface ContactDetailCardProps {
  link: ContactLink;
  /** Card titles are `h3` unless they sit under an existing `h3`. */
  headingLevel?: "h3" | "p";
  className?: string;
}

/** Single contact card: glyph, label heading and a full tap-target link. */
export function ContactDetailCard({
  link,
  headingLevel = "h3",
  className,
}: ContactDetailCardProps) {
  const Glyph = GLYPHS[link.channel];
  const Heading = headingLevel;

  return (
    <a
      href={link.href}
      className={cx(
        "group flex min-h-12 items-start gap-4 rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-[0_18px_40px_-26px_rgba(11,31,51,0.55)]",
        className,
      )}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="mt-1 shrink-0 text-gold">
        <Glyph />
      </span>

      <span className="min-w-0">
        <Heading className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {link.label}
        </Heading>
        <span className="mt-1.5 block break-words font-display text-lg font-semibold tracking-tight text-navy underline decoration-gold/45 underline-offset-[6px] group-hover:decoration-gold">
          {link.value}
        </span>
        <span className="sr-only">{link.hint}</span>
      </span>
    </a>
  );
}

export interface ContactDetailsProps {
  className?: string;
  /** Optional heading rendered above the cards. */
  heading?: string;
  /** Level for that heading. Defaults to `h3`. */
  headingLevel?: "h3" | "p";
  /** Level for each card title. Defaults to `headingLevel`. */
  cardHeadingLevel?: "h3" | "p";
  columns?: "sm:grid-cols-2 lg:grid-cols-3" | "sm:grid-cols-2 lg:grid-cols-1" | "sm:grid-cols-2";
}

/** Grid of the supplied contact channels. */
export function ContactDetails({
  className,
  heading,
  headingLevel = "h3",
  cardHeadingLevel,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
}: ContactDetailsProps) {
  const cardLevel = cardHeadingLevel ?? headingLevel;

  return (
    <div className={className}>
      {heading ? <Heading level={headingLevel}>{heading}</Heading> : null}

      <ul className={cx("grid gap-4", heading ? "mt-6" : undefined, columns)}>
        {contactLinks.map((link) => (
          <li key={link.channel} className="min-w-0">
            <ContactDetailCard link={link} headingLevel={cardLevel} className="h-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Heading({ level, children }: { level: "h3" | "p"; children: string }) {
  if (level === "p") {
    return (
      <p className="font-display text-xl font-semibold tracking-tight text-navy">{children}</p>
    );
  }

  return (
    <h3 className="font-display text-xl font-semibold tracking-tight text-navy">{children}</h3>
  );
}

export default ContactDetails;