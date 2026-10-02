/**
 * BANKRUPTCY GUIDE COPY (England and Wales).
 *
 * Client-supplied copy is transcribed verbatim. Every `body` below is `null`
 * because the long-form section text was NOT supplied in the brief — it MUST be
 * replaced with the client's supplied copy, never invented. This is legal
 * information: do not generate, summarise or paraphrase replacement text.
 */

export interface BankruptcySection {
  id: string;
  index: number;
  step?: string;
  title: string;
  /** null until the client supplies the body copy. Never fabricate legal text. */
  body: string[] | null;
  pendingCopyNote: string;
  /** Optional short label for the sticky table of contents, e.g. "Overview" / "Step 1" / "Aftercare" */
  tocGroup: "Overview" | "Preparing" | "Steps" | "After" | "Options" | "Next";
}

/** Standing disclaimer shown on bankruptcy surfaces. Paragraphs are verbatim client copy. */
export const bankruptcyDisclaimer = {
  title: "Important Information",
  paragraphs: [
    "This website provides general information about bankruptcy in England and Wales and is not a substitute for independent legal, insolvency or regulated debt advice.",
    "Bankruptcy can have serious consequences for your property, assets, income, business interests and credit record.",
    "Before applying for bankruptcy, you should consider obtaining advice from an appropriately qualified and regulated debt adviser, insolvency practitioner or legal professional.",
    "Rules, fees and government procedures can change. Always check the latest information with the official GOV.UK / Insolvency Service guidance before submitting an application.",
  ],
  checked: "Information checked against current GOV.UK guidance: August 2026.",
} as const;

/** Page hero. The intro paragraph was not supplied by the client. */
export const bankruptcyHero = {
  eyebrow: "BankruptcyUK",
  title: "UK Bankruptcy Guidance",
  subtitle: "A Step-by-Step Guide to Bankruptcy in England & Wales",
  intro: null,
  pendingCopyNote:
    "Client intro paragraph for the bankruptcy hero was not supplied in the brief. Insert the client's own wording verbatim; do not draft legal content.",
} as const;

const pending = (title: string): string =>
  `Client body copy for "${title}" not supplied in the brief. This is legal information about England and Wales — insert the client's supplied text verbatim. Do not generate or summarise replacement legal text.`;

/** The 24 bankruptcy guide sections, in client-supplied order. Titles are verbatim. */
export const bankruptcySteps: BankruptcySection[] = [
  {
    id: "what-is-bankruptcy",
    index: 1,
    title: "What Is Bankruptcy?",
    body: null,
    pendingCopyNote: pending("What Is Bankruptcy?"),
    tocGroup: "Overview",
  },
  {
    id: "who-can-apply-for-bankruptcy",
    index: 2,
    title: "Who Can Apply for Bankruptcy?",
    body: null,
    pendingCopyNote: pending("Who Can Apply for Bankruptcy?"),
    tocGroup: "Overview",
  },
  {
    id: "before-considering-bankruptcy",
    index: 3,
    title: "Before Considering Bankruptcy",
    body: null,
    pendingCopyNote: pending("Before Considering Bankruptcy"),
    tocGroup: "Preparing",
  },
  {
    id: "step-01-understand-your-financial-position",
    index: 4,
    step: "Step 1",
    title: "Step 1 – Understand Your Financial Position",
    body: null,
    pendingCopyNote: pending("Step 1 – Understand Your Financial Position"),
    tocGroup: "Steps",
  },
  {
    id: "step-02-review-your-assets",
    index: 5,
    step: "Step 2",
    title: "Step 2 – Review Your Assets",
    body: null,
    pendingCopyNote: pending("Step 2 – Review Your Assets"),
    tocGroup: "Steps",
  },
  {
    id: "step-03-review-your-income",
    index: 6,
    step: "Step 3",
    title: "Step 3 – Review Your Income",
    body: null,
    pendingCopyNote: pending("Step 3 – Review Your Income"),
    tocGroup: "Steps",
  },
  {
    id: "step-04-check-your-business-position",
    index: 7,
    step: "Step 4",
    title: "Step 4 – Check Your Business Position",
    body: null,
    pendingCopyNote: pending("Step 4 – Check Your Business Position"),
    tocGroup: "Steps",
  },
  {
    id: "step-05-prepare-your-information",
    index: 8,
    step: "Step 5",
    title: "Step 5 – Prepare Your Information",
    body: null,
    pendingCopyNote: pending("Step 5 – Prepare Your Information"),
    tocGroup: "Steps",
  },
  {
    id: "step-06-complete-the-bankruptcy-application",
    index: 9,
    step: "Step 6",
    title: "Step 6 – Complete the Bankruptcy Application",
    body: null,
    pendingCopyNote: pending("Step 6 – Complete the Bankruptcy Application"),
    tocGroup: "Steps",
  },
  {
    id: "step-07-the-adjudicator-reviews-your-application",
    index: 10,
    step: "Step 7",
    title: "Step 7 – The Adjudicator Reviews Your Application",
    body: null,
    pendingCopyNote: pending("Step 7 – The Adjudicator Reviews Your Application"),
    tocGroup: "Steps",
  },
  {
    id: "step-08-after-the-bankruptcy-order",
    index: 11,
    step: "Step 8",
    title: "Step 8 – After the Bankruptcy Order",
    body: null,
    pendingCopyNote: pending("Step 8 – After the Bankruptcy Order"),
    tocGroup: "Steps",
  },
  {
    id: "step-09-what-happens-to-your-assets",
    index: 12,
    step: "Step 9",
    title: "Step 9 – What Happens to Your Assets?",
    body: null,
    pendingCopyNote: pending("Step 9 – What Happens to Your Assets?"),
    tocGroup: "Steps",
  },
  {
    id: "step-10-your-home",
    index: 13,
    step: "Step 10",
    title: "Step 10 – Your Home",
    body: null,
    pendingCopyNote: pending("Step 10 – Your Home"),
    tocGroup: "Steps",
  },
  {
    id: "step-11-your-bank-accounts",
    index: 14,
    step: "Step 11",
    title: "Step 11 – Your Bank Accounts",
    body: null,
    pendingCopyNote: pending("Step 11 – Your Bank Accounts"),
    tocGroup: "Steps",
  },
  {
    id: "step-12-your-debts",
    index: 15,
    step: "Step 12",
    title: "Step 12 – Your Debts",
    body: null,
    pendingCopyNote: pending("Step 12 – Your Debts"),
    tocGroup: "Steps",
  },
  {
    id: "step-13-bankruptcy-restrictions",
    index: 16,
    step: "Step 13",
    title: "Step 13 – Bankruptcy Restrictions",
    body: null,
    pendingCopyNote: pending("Step 13 – Bankruptcy Restrictions"),
    tocGroup: "Steps",
  },
  {
    id: "step-14-credit-record",
    index: 17,
    step: "Step 14",
    title: "Step 14 – Credit Record",
    body: null,
    pendingCopyNote: pending("Step 14 – Credit Record"),
    tocGroup: "Steps",
  },
  {
    id: "step-15-how-long-does-bankruptcy-last",
    index: 18,
    step: "Step 15",
    title: "Step 15 – How Long Does Bankruptcy Last?",
    body: null,
    pendingCopyNote: pending("Step 15 – How Long Does Bankruptcy Last?"),
    tocGroup: "Steps",
  },
  {
    id: "step-16-what-happens-after-discharge",
    index: 19,
    step: "Step 16",
    title: "Step 16 – What Happens After Discharge?",
    body: null,
    pendingCopyNote: pending("Step 16 – What Happens After Discharge?"),
    tocGroup: "After",
  },
  {
    id: "bankruptcy-restrictions-can-be-extended",
    index: 20,
    title: "Bankruptcy Restrictions Can Be Extended",
    body: null,
    pendingCopyNote: pending("Bankruptcy Restrictions Can Be Extended"),
    tocGroup: "After",
  },
  {
    id: "can-bankruptcy-be-cancelled",
    index: 21,
    title: "Can Bankruptcy Be Cancelled?",
    body: null,
    pendingCopyNote: pending("Can Bankruptcy Be Cancelled?"),
    tocGroup: "Options",
  },
  {
    id: "bankruptcy-is-not-always-the-best-option",
    index: 22,
    title: "Bankruptcy Is Not Always the Best Option",
    body: null,
    pendingCopyNote: pending("Bankruptcy Is Not Always the Best Option"),
    tocGroup: "Options",
  },
  {
    id: "how-we-can-help",
    index: 23,
    title: "How We Can Help",
    body: null,
    pendingCopyNote: pending("How We Can Help"),
    tocGroup: "Next",
  },
  {
    id: "take-the-first-step",
    index: 24,
    title: "Take the First Step",
    body: null,
    pendingCopyNote: pending("Take the First Step"),
    tocGroup: "Next",
  },
];