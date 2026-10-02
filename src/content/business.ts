/**
 * BUSINESS SOLUTIONS COPY.
 *
 * Client-supplied copy is transcribed verbatim. `body` fields are `null`
 * because the supporting prose was NOT supplied in the brief — they MUST be
 * replaced with the client's own copy, never invented. Bullet lists (`items`,
 * `subItems`) are verbatim and must not be reworded, reordered or extended.
 */

export interface BusinessService {
  number: string;
  id: string;
  title: string;
  items: string[];
  subItems?: string[];
  note?: string;
  highlight?: string;
  body: string[] | null;
  pendingCopyNote: string;
}

/** Page hero. `intro` is the single client-supplied paragraph, verbatim. */
export const businessHero = {
  title: "Start Your Business in the UK — We Handle the Process From Start to Finish",
  subtitle: "Your Complete UK Business Setup Partner",
  intro:
    "This service can support people based in the UK or overseas with establishing and developing a UK business.",
  pendingCopyNote:
    "Client supplied one intro paragraph only. Any additional hero or supporting prose must be inserted from the client's copy; do not draft new marketing claims.",
} as const;

const pending = (title: string): string =>
  `Client body copy for "${title}" was not supplied in the brief. Insert the client's supplied text verbatim; do not generate replacement marketing or advisory copy.`;

/** The eight business service panels, in client-supplied order. Titles and bullets are verbatim. */
export const businessServices: BusinessService[] = [
  {
    number: "01",
    id: "business-setup",
    title: "Business Setup",
    items: [
      "Company formation",
      "Business structure guidance",
      "Companies House registration",
      "Registered office requirements",
      "Business planning",
      "Business documentation",
      "Understanding regulatory requirements",
    ],
    body: null,
    pendingCopyNote: pending("Business Setup"),
  },
  {
    number: "02",
    id: "tax-and-accounting-setup",
    title: "Tax & Accounting Setup",
    items: [
      "HMRC registration",
      "Corporation Tax registration",
      "VAT registration where applicable",
      "PAYE registration where required",
      "Accounting setup",
      "Bookkeeping arrangements",
      "Connecting with appropriate accountants and tax professionals",
    ],
    body: null,
    pendingCopyNote: pending("Tax & Accounting Setup"),
  },
  {
    number: "03",
    id: "business-bank-account",
    title: "Business Bank Account",
    items: [
      "Business bank account requirements",
      "Supporting documentation",
      "Banking requirements",
      "Suitable banking providers",
    ],
    note: "Bank approval is always subject to the bank's own eligibility, verification and compliance checks.",
    body: null,
    pendingCopyNote: pending("Business Bank Account"),
  },
  {
    number: "04",
    id: "commercial-property",
    title: "Commercial Property",
    items: [],
    subItems: [
      "Offices",
      "Shops",
      "Restaurants",
      "Warehouses",
      "Salons",
      "Clinics",
      "Showrooms",
      "Workshops",
    ],
    body: null,
    pendingCopyNote: pending("Commercial Property"),
  },
  {
    number: "05",
    id: "complete-business-setup",
    title: "Complete Business Setup",
    items: [
      "Business address",
      "Branding",
      "Logo",
      "Website",
      "Business email",
      "Telephone systems",
      "Business cards",
      "Marketing materials",
      "Suppliers",
      "Operational systems",
      "Insurance requirements",
      "Licences and permissions where applicable",
      "Recruitment and staffing support",
    ],
    body: null,
    pendingCopyNote: pending("Complete Business Setup"),
  },
  {
    number: "06",
    id: "digital-marketing-and-customer-growth",
    title: "Digital Marketing & Customer Growth",
    items: [
      "Website development",
      "Social media",
      "Online advertising",
      "Content marketing",
      "Search visibility",
      "Lead generation",
      "Customer acquisition",
      "Branding",
      "Marketing strategy",
    ],
    body: null,
    pendingCopyNote: pending("Digital Marketing & Customer Growth"),
  },
  {
    number: "07",
    id: "business-development",
    title: "Business Development",
    items: [
      "Increasing sales",
      "Finding new customers",
      "Developing new services",
      "Entering new markets",
      "Building partnerships",
      "Creating additional revenue streams",
      "Improving business processes",
      "Improving profitability",
      "Business expansion",
    ],
    body: null,
    pendingCopyNote: pending("Business Development"),
  },
  {
    number: "08",
    id: "risk-assessment",
    title: "Risk Assessment",
    items: [
      "Financial risks",
      "Cash-flow risks",
      "Operational risks",
      "Market competition",
      "Supplier risks",
      "Customer risks",
      "Staffing risks",
      "Compliance considerations",
      "Expansion risks",
    ],
    highlight: "Identify the risk. Understand the impact. Plan the solution.",
    body: null,
    pendingCopyNote: pending("Risk Assessment"),
  },
];

/** Overseas-client panel. `process` is the client-supplied step list, verbatim. */
export const internationalEntrepreneurs = {
  title: "Build Your Business in the UK From Overseas",
  body: null,
  pendingCopyNote:
    "Client body copy for the overseas panel was not supplied in the brief. Insert the client's supplied text verbatim; do not generate new immigration, tax or legal statements.",
  process: [
    "UK Company Setup",
    "Tax & Accounting",
    "Banking",
    "Commercial Property",
    "Business Operations",
    "Branding",
    "Marketing",
    "Business Development",
  ],
} as const;

/**
 * Client-supplied requirement statement. It notes that specialists MAY be needed
 * for immigration or visa matters — it must never be presented as a claim that
 * BankruptcyUK provides regulated immigration services.
 */
export const immigrationNote =
  "For immigration or visa matters, suitably authorised specialists may be required.";