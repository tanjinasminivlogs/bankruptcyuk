/**
 * SHARED FORM VALIDATION.
 *
 * Deliberately dependency-free: no validation library is installed and none
 * should be added. Rules are derived from the field configuration in
 * `src/content/*` so that adding a field to a config automatically brings its
 * "required" and type rules with it.
 *
 * Adding another form:
 *  1. Define its fields in a config file (see `src/content/contact.ts`).
 *  2. Write a `validateXSubmission(previousState, formData)` function that
 *     reuses the shared helpers below and returns a `SubmissionResult`.
 *  3. Call it from a `"use server"` action.
 */

import { contactFields } from "@/content/contact";

/** Status of a submission, suitable for driving UI with `useActionState`. */
export type SubmissionStatus = "idle" | "error" | "success";

/** Typed result returned by every server action in the project. */
export interface SubmissionResult {
  status: SubmissionStatus;
  /** Field `name` -> human readable message. Empty unless status is "error". */
  errors: Record<string, string>;
  /** Form level message: the error summary, or the success confirmation. */
  message?: string;
  /** Submitted values, so a failed attempt can be repopulated. */
  values?: Record<string, string>;
}

/** Name of the consent checkbox on the enquiry form. */
export const CONSENT_FIELD = "consent";

/** The neutral, pre-submission state passed to `useActionState`. */
export const IDLE_SUBMISSION: SubmissionResult = { status: "idle", errors: {} };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const CHECKED_VALUES = new Set(["on", "true", "1", "yes"]);

/** Trimmed string value for a key, or "" when the key is absent or a File. */
export function readField(formData: FormData, key: string): string {
  const raw = formData.get(key);
  return typeof raw === "string" ? raw.trim() : "";
}

/** True when a checkbox input was ticked. */
export function isChecked(formData: FormData, key: string): boolean {
  const raw = formData.get(key);
  return typeof raw === "string" && CHECKED_VALUES.has(raw.trim().toLowerCase());
}

/**
 * Shape check only - deliberately not an attempt to prove an address exists.
 * Catches the obvious typos ("a@b", "a b@c.com") without being fussy.
 */
export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value);
}

/** Rejects anything that is not plausibly a UK or international phone number. */
export function isValidPhone(value: string): boolean {
  return /^[+()\-\s\d]{7,25}$/.test(value);
}


/** Field level message, derived entirely from the field config. */
function validateField(
  formData: FormData,
  field: { name: string; label: string; required: boolean },
): string | undefined {
  const value = readField(formData, field.name);

  if (field.required && value === "") {
    return `${field.label} is required.`;
  }

  if (value === "") return undefined;

  if (field.name === "email" && !isValidEmail(value)) {
    return "Email must be a valid email address, for example name@example.com.";
  }

  if (field.name === "phone" && !isValidPhone(value)) {
    return "Phone must be a valid number, using digits and + ( ) - only.";
  }

  return undefined;
}

/** The supplied select options, used to reject tampered or unknown values. */
function optionsForSelect(): readonly string[] {
  const selectField = contactFields.find((field) => field.control === "select");
  return selectField?.options ?? [];
}

/**
 * Validates the contact enquiry form.
 *
 * Field rules come from `contactFields`, so the rendered form and this
 * validator share one source of truth. `previousState` is reused only to keep
 * what the visitor already typed if a later attempt leaves a field empty.
 */
export function validateContactSubmission(
  previousState: SubmissionResult,
  formData: FormData,
): SubmissionResult {
  const options = optionsForSelect();
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};

  for (const field of contactFields) {
    const submitted = readField(formData, field.name);
    const previous = previousState.values?.[field.name];

    values[field.name] = submitted || previous || "";

    const message = validateField(formData, field);
    if (message) errors[field.name] = message;
  }

  // The select's first option is a disabled placeholder with value "", so an
  // untouched select is caught by the required rule above. Values that are not
  // one of the supplied options are rejected as well.
  const service = values.service;
  if (service && !options.includes(service)) {
    errors.service = "Select a service from the list.";
  }

  if (!isChecked(formData, CONSENT_FIELD)) {
    errors[CONSENT_FIELD] = "Please confirm that you understand this statement.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      errors,
      message: "Please check the highlighted fields and try again.",
      values,
    };
  }

  return { status: "success", errors: {}, values };
}