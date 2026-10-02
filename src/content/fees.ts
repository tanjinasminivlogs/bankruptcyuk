/**
 * SERVICE FEES COPY.
 *
 * Client-supplied copy is transcribed verbatim. Amounts, durations, footnotes
 * and payment method wording are verbatim. Account / IBAN / sort-code / payment
 * link details were NOT supplied — those `detail` fields are `null` and MUST be
 * filled from the client, never invented.
 */

export interface PricingTier {
  amount: string;
  name: string;
  price: string;
  duration: string | null;
  description: string;
  footnote: string;
  featured: boolean;
}

export interface PaymentMethod {
  title: string;
  body: string;
  detail: string | null;
  pendingCopyNote: string;
}

/** Fees page intro. */
export const feesIntro = {
  title: "Our Fixed Service Fees",
  subtitle: "Clear and transparent pricing with no unnecessary surprises.",
} as const;

/** The three client-supplied price tiers. `duration` is the short line under the name; omit when null. */
export const pricingTiers: PricingTier[] = [
  {
    amount: "£49",
    name: "Initial Consultation",
    price: "49",
    duration: "Up to 20 minutes.",
    description:
      "A focused consultation to discuss circumstances, requirements, options and next steps.",
    footnote:
      "Payment must be made in advance through the secure online payment link.",
    featured: false,
  },
  {
    amount: "£3,990",
    name: "Personal / Sole Trader Bankruptcy",
    price: "3990",
    duration: null,
    description:
      "Comprehensive consultancy and support service for individuals and sole traders.",
    footnote:
      "Government charges, High Court fees, court costs and third-party disbursements are excluded unless specifically stated.",
    featured: true,
  },
  {
    amount: "£9,950",
    name: "UK Business Set-Up",
    price: "9950",
    duration: "Complete End-to-End Service",
    description:
      "Support from initial planning through completion of UK business establishment.",
    footnote:
      "Government fees, third-party charges, banking fees, professional fees and other disbursements not specifically included may be payable separately.",
    featured: false,
  },
];

/** Primary call-to-action label on the fees page. */
export const pricingCta = "Discuss Your Requirements";

/**
 * Payment method panels. Only one `detail` was supplied (proof of payment for
 * the consultation). Bank name, account holder, sort code, account number, IBAN
 * and the secure payment link were NOT provided by the client — do not invent them.
 */
export const paymentMethods: PaymentMethod[] = [
  {
    title: "UK Bank Transfer",
    body: "Payments can be made directly to the UK bank account.",
    detail: null,
    pendingCopyNote:
      "Client UK bank details were not supplied in the brief. Insert the client's account name, bank name, sort code and account number verbatim; never invent payment details.",
  },
  {
    title: "EU Bank Transfer",
    body: "Payments from EU countries can be made through IBAN bank transfer where applicable.",
    detail: null,
    pendingCopyNote:
      "Client IBAN / SWIFT details were not supplied in the brief. Insert the client's IBAN and any BIC/SWIFT information verbatim; never invent payment details.",
  },
  {
    title: "Initial Consultation Payment",
    body: "£49 consultation fee paid through the secure online payment link.",
    detail: "After payment, client shares proof of payment.",
    pendingCopyNote:
      "The secure online payment link URL was not supplied in the brief. Insert the client's own payment link verbatim; never invent or guess a payment URL.",
  },
];