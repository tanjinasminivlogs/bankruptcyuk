"use client";

import { useActionState, useState } from "react";

import { submitContactEnquiry } from "@/app/contact/actions";
import CheckboxField from "@/components/forms/CheckboxField";
import SelectField from "@/components/forms/SelectField";
import TextField from "@/components/forms/TextField";
import TextareaField from "@/components/forms/TextareaField";
import Button from "@/components/ui/Button";
import {
  consentText,
  contactFields,
  secondaryCta,
  serviceOptions,
  submitLabel,
} from "@/content/contact";
import { CONSENT_FIELD, IDLE_SUBMISSION } from "@/lib/validation";

import ContactStatus from "./ContactStatus";

/**
 * Enquiry form, rendered entirely from the `contactFields` config so the copy
 * lives in one place and adding a field needs no markup changes.
 *
 * Native browser validation is disabled (`noValidate`) so every problem is
 * reported through the single server-validated error summary, which is the
 * accessible pattern for forms of this length.
 */

const SELECT_PLACEHOLDER = "Please select a service";

const PLACEHOLDERS: Record<string, string> = {
  fullName: "Your full name",
  email: "name@example.com",
  phone: "Optional",
  message: "Tell us about your situation or your requirements.",
};

export function ContactEnquiryForm() {
  const [state, formAction, pending] = useActionState(submitContactEnquiry, IDLE_SUBMISSION);
  const [resend, setResend] = useState(false);

  const showSuccess = state.status === "success" && !resend;

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(11,31,51,0.5)] sm:p-8 lg:p-10">
      <h3 className="font-display text-2xl font-semibold tracking-tight text-navy">
        Tell us how we can help
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Fields marked with an asterisk are required.
      </p>

      <ContactStatus
        state={state}
        onResend={state.status === "success" ? () => setResend(true) : undefined}
        className={state.status === "idle" ? undefined : "mt-6"}
      />

      {!showSuccess ? (
        <form action={formAction} noValidate className="mt-8">
          <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {contactFields.map((field) => {
              const shared = {
                name: field.name,
                label: field.label,
                required: field.required,
                error: state.errors[field.name],
                defaultValue: state.values?.[field.name] || undefined,
                className: field.control === "textarea" ? "sm:col-span-2" : undefined,
              };

              if (field.control === "select") {
                return (
                  <SelectField
                    key={field.name}
                    {...shared}
                    options={field.options ?? serviceOptions}
                    placeholder={SELECT_PLACEHOLDER}
                  />
                );
              }

              if (field.control === "textarea") {
                return (
                  <TextareaField
                    key={field.name}
                    {...shared}
                    rows={6}
                    placeholder={PLACEHOLDERS[field.name]}
                  />
                );
              }

              return (
                <TextField
                  key={field.name}
                  {...shared}
                  type={field.type}
                  autoComplete={field.autocomplete}
                  placeholder={PLACEHOLDERS[field.name]}
                />
              );
            })}
          </div>

          <CheckboxField
            name={CONSENT_FIELD}
            required
            label={consentText}
            error={state.errors[CONSENT_FIELD]}
            className="mt-6"
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={pending}
            aria-busy={pending}
            className="mt-8 w-full sm:w-auto"
          >
            {submitLabel}
          </Button>
        </form>
      ) : null}

      {!showSuccess ? (
        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button href="/service-fees" variant="secondary" size="md">
            {secondaryCta}
          </Button>
          <span className="text-sm text-slate-500">Fixed fees are published in full.</span>
        </div>
      ) : null}
    </div>
  );
}

export default ContactEnquiryForm;