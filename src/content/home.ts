/**
 * HOME PAGE COPY.
 *
 * Client-supplied copy is transcribed verbatim. `null` fields are content the
 * client has not yet supplied and MUST be replaced with their copy, never invented.
 */

import { globalExperience, type GlobalExperience } from "@/content/about";

export interface HomeHero {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface HomeIntro {
  heading: string;
  body: string[] | null;
  approach: string[];
  cta: string;
  pendingCopyNote: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  cta: string;
  href: string;
  imageLabel: string;
}

/** Home hero. All copy verbatim from the client brief. */
export const homeHero: HomeHero = {
  eyebrow: "Confidential • Professional • Practical",
  title: "Practical Guidance for Financial Challenges & UK Business",
  description:
    "Professional support for individuals facing financial difficulties and entrepreneurs looking to establish, develop and grow their business in the UK.",
  primaryCta: "Book a Consultation",
  secondaryCta: "Explore Our Services",
};

/** Intro block. `approach` is the client-supplied three-line method, verbatim. */
export const homeIntro: HomeIntro = {
  heading: "Experience Built Around Business, Finance & Problem Solving",
  body: null,
  approach: [
    "Understand the problem.",
    "Analyse the situation carefully.",
    "Work towards a realistic and practical solution.",
  ],
  cta: "Read My Story",
  pendingCopyNote:
    "Client introductory prose around the three approach lines was not supplied in the brief. The heading, approach lines and CTA are verbatim. Insert the client's supplied text; do not draft new personal claims.",
};

/** Home timeline heading. The page imports the `timeline` array from `@/content/about`. */
export const homeTimeline = {
  title: "Professional Journey",
} as const;

/** Home global perspective. This is the same object as `globalExperience` in about.ts, not a copy. */
export const homeGlobal: GlobalExperience = globalExperience;

/** Home services grid. Three cards, verbatim. */
export const homeServices = {
  heading: "How We Can Help",
  items: [
    {
      title: "UK Bankruptcy",
      description:
        "Understand your financial position, bankruptcy process, potential consequences and available alternatives.",
      cta: "Explore Bankruptcy Guidance",
      href: "/bankruptcy",
      imageLabel: "Professional financial consultation",
    },
    {
      title: "UK Business Solutions",
      description:
        "Support with establishing and developing a business in the United Kingdom.",
      cta: "Explore Business Solutions",
      href: "/business-solutions",
      imageLabel: "UK company and modern office",
    },
    {
      title: "Business Development & Risk",
      description:
        "Support with growth opportunities, business development, risk assessment and practical problem solving.",
      cta: "Explore Business Services",
      href: "/business-solutions",
      imageLabel: "Business meeting and growth planning",
    },
  ] satisfies ServiceCard[],
} as const;