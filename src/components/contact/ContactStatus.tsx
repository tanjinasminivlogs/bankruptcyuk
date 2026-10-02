"use client";

import { contactFields } from "@/content/contact";
import { CONSENT_FIELD, type SubmissionResult } from "@/lib/validation";

/**
 * Success / error UI for the enquiry form.
 *
 * The live region is always mounted and only its contents change, so the
 * outcome of a submission is announced without stealing focus. The error
 * summary links directly to each invalid field using the ids assigned by
 * `Field` / `CheckboxField`.
 */

const FIELD_LABELS: Record<string, string> = {
  ...Object.fromEntries(contactFields.map((field) => [field.name, field.label])),
  [CONSENT_FIELD]: "Consent statement",
};

function labelFor(name: string): string {
  return FIELD_LABELS[name] ?? name;
}

function SuccessGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.3 2.6 2.6L16 9.4" />
    </svg>
  );
}

function AlertGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.6v5.2" />
      <circle cx="12" cy="16.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SuccessPanel({ message, onResend }: { message: string; onResend?: () => void }) {
  return (
    <div className="rounded-2xl border border-gold/45 bg-white p-7 sm:p-8">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
        <SuccessGlyph />
      </span>

      <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-navy">
        Thank you — your enquiry is with us
      </h3>

      <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-700">{message}</p>

      {onResend ? (
        <button
          type="button"
          onClick={onResend}
          className="mt-6 inline-flex min-h-12 items-center rounded-full border border-navy/30 px-6 text-[0.95rem] font-medium tracking-wide text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
        >
          Send another enquiry
        </button>
      ) : null}
    </div>
  );
}

function ErrorSummary({ message, errors }: { message: string; errors: Record<string, string> }) {
  const entries = Object.entries(errors);

  return (
    <div className="rounded-2xl border border-red-500/50 bg-red-50/70 p-6 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 text-red-700">
          <AlertGlyph />
        </span>

        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold tracking-tight text-navy">{message}</h3>

          {entries.length > 0 ? (
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              {entries.map(([name, errorMessage]) => (
                <li key={name} className="min-w-0">
                  <a
                    href={`#${name}-field`}
                    className="inline-flex min-h-11 items-center underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
                  >
                    <span className="font-medium text-navy">{labelFor(name)}</span>
                    <span className="text-slate-500">: {errorMessage}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export interface ContactStatusProps {
  state: SubmissionResult;
  /** Shown on the success panel to return to an empty form. */
  onResend?: () => void;
  className?: string;
}

export function ContactStatus({ state, onResend, className }: ContactStatusProps) {
  return (
    <div aria-live="polite" aria-atomic="true" className={className}>
      {state.status === "success" ? (
        <SuccessPanel
          message={state.message ?? "Your enquiry has been received and a response will follow."}
          onResend={onResend}
        />
      ) : null}

      {state.status === "error" ? (
        <ErrorSummary
          message={state.message ?? "Please check the highlighted fields and try again."}
          errors={state.errors}
        />
      ) : null}
    </div>
  );
}

export default ContactStatus;