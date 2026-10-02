/**
 * ABOUT PAGE COPY (founder biography, timeline, philosophy).
 *
 * Client-supplied copy is transcribed verbatim. Where the brief supplied only
 * short facts, `null` is used for prose that was never supplied — those fields
 * MUST be replaced with the client's copy, never invented. Do not add employers,
 * clients, dates, qualifications or responsibilities that the client has not given.
 */

export interface AboutHero {
  title: string | null;
  subtitle: string | null;
  pendingCopyNote: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  organisation: string | null;
  description: string | null;
  pendingCopyNote: string;
}

export interface EducationEntry {
  qualification: string;
  institution: string | null;
}

export interface MyStory {
  heading: string;
  body: string[] | null;
  pendingCopyNote: string;
}

export interface Philosophy {
  heading: string;
  quote: string[];
  quoteText: string;
  body: string[] | null;
  pendingCopyNote: string;
}

export interface LookingAhead {
  heading: string;
  body: string[] | null;
  pendingCopyNote: string;
}

export interface GlobalExperience {
  number: number;
  title: string;
  leadIn: string;
  body: string[] | null;
  pendingCopyNote: string;
  aspects: string[];
}

/** About page hero. The headline was not supplied in the brief. */
export const aboutHero: AboutHero = {
  title: null,
  subtitle: null,
  pendingCopyNote:
    "Client headline and sub-headline for the About hero were not supplied in the brief. Insert the client's own wording verbatim; do not draft replacement copy.",
};

const timelinePending = (period: string, role: string, organisation: string | null): string =>
  organisation === null
    ? `Client description for "${role}" (${period}) was not supplied in the brief, and no employer was given. Insert the client's supplied text verbatim, and only add an employer name if the client supplies it — never invent one.`
    : `Client description for "${role}" at ${organisation} (${period}) was not supplied in the brief. Insert the client's supplied text verbatim; do not invent responsibilities, clients or dates.`;

/** Professional journey, verbatim. Employers were not supplied for entries 4 and 5. */
export const timeline: TimelineEntry[] = [
  {
    period: "2009 – 2011",
    role: "Revenue Officer",
    organisation: "DLR environment",
    description: null,
    pendingCopyNote: timelinePending("2009 – 2011", "Revenue Officer", "DLR environment"),
  },
  {
    period: "2011 – 2014",
    role: "Finance Analyst",
    organisation: "Serco DLR Risk Assessment & Planning",
    description: null,
    pendingCopyNote: timelinePending(
      "2011 – 2014",
      "Finance Analyst",
      "Serco DLR Risk Assessment & Planning",
    ),
  },
  {
    period: "2014 – 2017",
    role: "Financial Adviser",
    organisation: "Keolis & Amey",
    description: null,
    pendingCopyNote: timelinePending("2014 – 2017", "Financial Adviser", "Keolis & Amey"),
  },
  {
    period: "2017 – 2022",
    role: "Business Development & Risk Assessment",
    organisation: null,
    description: null,
    pendingCopyNote: timelinePending(
      "2017 – 2022",
      "Business Development & Risk Assessment",
      null,
    ),
  },
  {
    period: "2023 – Present",
    role: "Entrepreneurship & Consultancy",
    organisation: null,
    description: null,
    pendingCopyNote: timelinePending("2023 – Present", "Entrepreneurship & Consultancy", null),
  },
];

/** Education and training, verbatim. Three entries have no institution in the brief. */
export const education: EducationEntry[] = [
  { qualification: "A Levels", institution: "Stonebridge College" },
  {
    qualification: "Business Management",
    institution: "University of Sunderland, London Campus",
  },
  {
    qualification: "MBA in International Business Management",
    institution: "University of Sunderland, London Campus",
  },
  { qualification: "OCR Level 1, 2 and 3 law-related studies", institution: null },
  { qualification: "Level 3 Childcare training", institution: null },
  { qualification: "Conflict Management training", institution: null },
];

/**
 * "My Story". The brief supplied facts but not the full biography, so `body`
 * below is an interim assembly of brief-supplied facts ONLY. Replace it with the
 * client's own biography text as soon as it is received.
 */
export const myStory: MyStory = {
  heading: "My Story",
  body: [
    "Mohamed Zain is a British national. He has Portuguese and Asian heritage, and he was raised in East London.",
    "His professional journey includes finance, business, risk management, personal development and entrepreneurship, and his experience spans different professional environments.",
    "He is the founder of BankruptcyUK, providing practical guidance for financial challenges and UK business.",
  ],
  pendingCopyNote:
    "INTERIM COPY: the full client biography was not supplied in the brief. The paragraphs above are assembled from brief-supplied facts only. Replace with the client's supplied biography verbatim; do not add new facts, dates, employers, clients or qualifications.",
};

/** Personal philosophy. The quote lines are client-supplied and verbatim. */
const philosophyQuoteLines: string[] = [
  "Live honestly.",
  "Work hard.",
  "Keep learning.",
  "Take opportunities.",
  "Help others.",
  "And make your life meaningful.",
];

export const philosophy: Philosophy = {
  heading: "My Philosophy About Life",
  quote: philosophyQuoteLines,
  quoteText: philosophyQuoteLines.join("\n"),
  body: null,
  pendingCopyNote:
    "Client body copy explaining the philosophy was not supplied in the brief. The six quote lines above are verbatim client copy. Insert the client's supplied text verbatim; do not write new personal narrative.",
};

/** Forward-looking section. */
export const lookingAhead: LookingAhead = {
  heading: "Looking Ahead",
  body: null,
  pendingCopyNote:
    "Client \"Looking Ahead\" copy was not supplied in the brief. Insert the client's supplied text verbatim; do not invent future plans, dates or commitments.",
};

/** Global perspective panel. `aspects` and `leadIn` are built only from brief-supplied facts. */
export const globalExperience: GlobalExperience = {
  number: 57,
  title: "A Global Perspective",
  leadIn:
    "Travelling has helped develop an understanding of different cultures, lifestyles, traditions, perspectives and people, and has developed adaptability and open-mindedness.",
  body: null,
  pendingCopyNote:
    "Client body copy for the global perspective panel was not supplied in the brief. The leadIn sentence and aspects list above are built only from brief-supplied facts. Replace or extend with the client's supplied text verbatim; do not add countries, employers or dates that were not given.",
  aspects: [
    "different cultures",
    "lifestyles",
    "traditions",
    "perspectives",
    "people",
    "adaptability",
    "open-mindedness",
  ],
};