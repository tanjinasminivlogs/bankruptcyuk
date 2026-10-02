/**
 * SITE-WIDE BUSINESS FACTS — single source of truth.
 *
 * Client-supplied copy is transcribed verbatim. `null` fields are content the
 * client has not yet supplied and MUST be replaced with their copy, never invented.
 *
 * NOTE: the email address below intentionally preserves the client's supplied
 * spelling ("bankcrucyuk.org"). Do not "correct" it without client approval.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceLink {
  label: string;
  href: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  website: string;
  founder: string;
  tagline: string;
  copyright: string;
  guidanceChecked: string;
  nav: NavLink[];
  services: ServiceLink[];
  legalLinks: NavLink[];
  social: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "BankruptcyUK",
  domain: "BankruptcyUK.org",
  phone: "+44 7440 020743",
  phoneHref: "tel:+447440020743",
  email: "admin@bankcrucyuk.org",
  emailHref: "mailto:admin@bankcrucyuk.org",
  website: "https://www.bankruptcyuk.org",
  founder: "Mohamed Zain",
  tagline: "Professional support and guidance for individuals and businesses in the UK.",
  copyright: "© 2026 BankruptcyUK. All rights reserved.",
  guidanceChecked: "Information checked against current GOV.UK guidance: August 2026.",

  /** Primary site navigation, in client-supplied order. */
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Bankruptcy", href: "/bankruptcy" },
    { label: "Business Solutions", href: "/business-solutions" },
    { label: "Service Fees", href: "/service-fees" },
    { label: "Contact", href: "/contact" },
  ],

  /** Footer "Services" column. Business services all resolve to /business-solutions. */
  services: [
    {
      label: "UK Bankruptcy",
      href: "/bankruptcy",
      description: "Step-by-step guidance on bankruptcy in England and Wales.",
    },
    {
      label: "Business Setup",
      href: "/business-solutions",
      description: "Support with establishing a business in the United Kingdom.",
    },
    {
      label: "Business Development",
      href: "/business-solutions",
      description: "Practical support with growth, processes and profitability.",
    },
    {
      label: "Risk Assessment",
      href: "/business-solutions",
      description: "Identifying financial, operational and market risks.",
    },
  ],

  /** Footer legal / policy links. */
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],

  // No social media profiles were supplied by the client. Intentionally empty —
  // do not invent or guess profile URLs.
  social: [],
};

export default siteConfig;