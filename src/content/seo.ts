/**
 * METADATA / SEO COPY.
 *
 * Client-supplied copy is transcribed verbatim. Descriptions marked as derived
 * are written from the actual page content only — they must never be replaced
 * with invented claims (e.g. no regulated/FCA-authorised status is claimed).
 */

export interface PageSeo {
  title: string;
  description: string;
}

/** Base URL used to resolve relative canonical/metadata paths. */
export const defaultMetadataBase = new URL("https://www.bankruptcyuk.org");

/** Per-route SEO title + description. Keep every description under ~160 characters. */
export const pageSeo = {
  home: {
    title: "BankruptcyUK | Bankruptcy Guidance & UK Business Solutions",
    description:
      "Professional guidance for individuals facing financial difficulties and entrepreneurs establishing, developing and growing businesses in the UK.",
  },
  about: {
    title: "About | BankruptcyUK",
    description:
      "Meet Mohamed Zain, founder of BankruptcyUK, and read about his professional journey, philosophy and approach to financial and business support.",
  },
  bankruptcy: {
    title: "UK Bankruptcy Guidance | BankruptcyUK",
    description:
      "A 24-part step-by-step guide to bankruptcy in England and Wales, covering applications, assets, debts, restrictions and discharge.",
  },
  businessSolutions: {
    title: "UK Business Setup & Development | BankruptcyUK",
    description:
      "Business setup, tax and banking, commercial property, branding and marketing support for people establishing and growing a UK business.",
  },
  serviceFees: {
    title: "Service Fees | BankruptcyUK",
    description:
      "Clear fixed fees for an initial consultation, personal or sole trader bankruptcy support, and end-to-end UK business set-up.",
  },
  contact: {
    title: "Contact | BankruptcyUK",
    description:
      "Contact BankruptcyUK to discuss your financial situation or UK business requirements with a confidential, professional conversation.",
  },
  privacy: {
    title: "Privacy Policy | BankruptcyUK",
    description:
      "How BankruptcyUK handles personal information submitted through this website, including contact and enquiry form details.",
  },
  terms: {
    title: "Terms & Conditions | BankruptcyUK",
    description:
      "The terms that apply to your use of the BankruptcyUK website and to enquiries submitted through it.",
  },
  disclaimer: {
    title: "Disclaimer | BankruptcyUK",
    description:
      "Important limitations on the general information published by BankruptcyUK, and advice on obtaining qualified regulated help.",
  },
  notFound: {
    title: "Page Not Found | BankruptcyUK",
    description: "The page you were looking for could not be found on the BankruptcyUK website.",
  },
} as const satisfies Record<string, PageSeo>;

export type PageSeoKey = keyof typeof pageSeo;