/**
 * CONTACT PAGE COPY AND FORM FIELD CONFIGURATION.
 *
 * Client-supplied copy is transcribed verbatim. Fields marked `null` are content
 * the client has not yet supplied — they MUST be replaced with their copy or a
 * real backend value, never invented.
 */

export interface ContactHero {
  title: string;
  subtitle: string;
}

export interface ContactField {
  name: "fullName" | "email" | "phone" | "service" | "message";
  label: string;
  /** HTML input type. Textareas and selects render from `control`. */
  type: "text" | "email" | "tel";
  control: "input" | "select" | "textarea";
  required: boolean;
  autocomplete?: string;
  options?: readonly string[];
}

/** Contact page hero. Verbatim. */
export const contactHero: ContactHero = {
  title: "Let's Talk About Your Financial Situation",
  subtitle: "Confidential • Professional • Practical",
};

/** Options for the "Service Required" select. Verbatim, client-supplied order. */
export const serviceOptions = [
  "Bankruptcy Guidance",
  "Business Setup",
  "Business Development",
  "Risk Assessment",
  "Service Fees",
  "General Enquiry",
] as const;

/** Enquiry form field configuration. Labels and order are verbatim. */
export const contactFields: readonly ContactField[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    control: "input",
    required: true,
    autocomplete: "name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    control: "input",
    required: true,
    autocomplete: "email",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    control: "input",
    required: false,
    autocomplete: "tel",
  },
  {
    name: "service",
    label: "Service Required",
    type: "text",
    control: "select",
    required: true,
    options: serviceOptions,
  },
  {
    name: "message",
    label: "Message",
    type: "text",
    control: "textarea",
    required: true,
  },
] as const;

/** Consent line shown beneath the form. Verbatim. */
export const consentText =
  "I understand that submitting this form does not create a legal or professional advisory relationship.";

/** Button labels. Verbatim. */
export const submitLabel = "Send Enquiry";
export const secondaryCta = "Book a Consultation";

/**
 * Implementation status note for the page and for whoever wires the backend.
 * No form delivery mechanism exists yet.
 */
export const responseNote =
  "The enquiry form currently has no backend wired up: submission is handled by a server action stub only, so no message is delivered yet. An email delivery or CRM integration must be added, with the recipient confirmed by the client. Field specifications for the additional forms referenced in the brief (Daily Task and Job Form) were not supplied, so those forms cannot be built yet." as const;