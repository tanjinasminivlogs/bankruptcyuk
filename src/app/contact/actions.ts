"use server";

import {
  validateContactSubmission,
  type SubmissionResult,
} from "@/lib/validation";

/**
 * Contact enquiry server action.
 *
 * Validates the submission and returns a typed result for `useActionState`.
 *
 * ---------------------------------------------------------------------
 * DELIVERY INTEGRATION IS NOT CONNECTED - MUST BE CONFIGURED BEFORE LAUNCH
 * ---------------------------------------------------------------------
 * No email provider and no CRM are connected to this action. Validation runs
 * and the result below is returned, but nothing is transmitted, queued or
 * stored anywhere. Before this page goes live someone must:
 *   1. add a delivery transport (an email provider or CRM API) and pass the
 *      validated `values` into it;
 *   2. confirm with the client which recipient address enquiries are sent to;
 *   3. replace the success `message` with copy that is true of the live
 *      delivery behaviour, and remove the "no backend wired up" note that the
 *      contact page renders from `responseNote`;
 *   4. decide how failed deliveries are surfaced to the visitor.
 *
 * Until then the success copy must not claim that an email was sent.
 */
export async function submitContactEnquiry(
  previousState: SubmissionResult,
  formData: FormData,
): Promise<SubmissionResult> {
  const result = validateContactSubmission(previousState, formData);

  if (result.status !== "success") {
    return result;
  }

  // Valid submission. No transport is connected yet - see the note above.
  // Values are intentionally not logged or persisted in this stub.

  return {
    status: "success",
    errors: {},
    message:
      "Thank you. Your enquiry has been received and a response will follow.",
  };
}
