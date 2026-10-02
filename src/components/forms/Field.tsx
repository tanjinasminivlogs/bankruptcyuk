/**
 * REUSABLE FIELD PRIMITIVE.
 *
 * Every control on the site is built from this so labels, hints, errors and
 * `aria` wiring can never drift between forms. See `README.md` in this folder
 * for how to add a form using these primitives.
 */

import type { InputHTMLAttributes, ReactNode } from "react";

import { cx } from "@/lib/cx";

export type FieldControlType = "text" | "email" | "tel" | "number" | "url" | "search";

/**
 * Shared control styling. White input on a cream or white band, mist border,
 * rounded-xl, 48px minimum height, and a clear error state. The visible gold
 * focus ring comes from the global `:focus-visible` rule in `globals.css`.
 */
export const FIELD_CONTROL_CLASS =
  "block w-full min-h-12 rounded-xl border border-mist bg-white px-4 py-3 text-[0.95rem] leading-relaxed text-ink shadow-sm transition-colors duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-gold disabled:cursor-not-allowed disabled:opacity-60";

/** Applied instead of the mist border when the field is invalid. */
export const FIELD_CONTROL_ERROR_CLASS =
  "border-red-500/70 bg-red-50/50 focus:border-red-500";

export interface FieldDomIds {
  controlId: string;
  hintId: string;
  errorId: string;
  describedBy: string | undefined;
}

/**
 * Stable ids for a field's control, hint and error so `htmlFor` and
 * `aria-describedby` can never point at a missing element.
 */
export function fieldDomIds(
  name: string,
  hasHint: boolean,
  hasError: boolean,
): FieldDomIds {
  const controlId = `${name}-field`;
  const hintId = `${name}-hint`;
  const errorId = `${name}-error`;

  const describedBy = [hasHint ? hintId : null, hasError ? errorId : null]
    .filter((value): value is string => Boolean(value))
    .join(" ");

  return { controlId, hintId, errorId, describedBy: describedBy || undefined };
}

/** Props handed to a custom control so it stays wired to its label and state. */
export interface FieldControlBinding {
  id: string;
  name: string;
  required: boolean;
  placeholder: string | undefined;
  "aria-describedby": string | undefined;
  "aria-invalid": true | undefined;
  className: string;
}

export interface FieldProps {
  label: string;
  name: string;
  type?: FieldControlType;
  required?: boolean;
  placeholder?: string;
  /** Optional help text, linked with `aria-describedby`. */
  hint?: string;
  /** Error message; rendered with `role="alert"` and sets `aria-invalid`. */
  error?: string;
  autoComplete?: string;
  defaultValue?: string;
  className?: string;
  labelClassName?: string;
  /** Extra classes merged onto the control. */
  controlClassName?: string;
  /**
   * Render a custom control (select, textarea) instead of the default input.
   * The child receives the ids and aria attributes it must apply; see
   * `SelectField` and `TextareaField`.
   */
  children?: (control: FieldControlBinding) => ReactNode;
  /** Extra attributes forwarded to the default input only. */
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "id"
    | "name"
    | "type"
    | "required"
    | "placeholder"
    | "autoComplete"
    | "defaultValue"
    | "aria-describedby"
    | "aria-invalid"
    | "className"
  >;
}

/**
 * Accessible field wrapper: a real `<label for>`, an optional hint, the control,
 * and an optional `role="alert"` error. Renders an `<input>` unless `children`
 * supplies a different control.
 */
export function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  hint,
  error,
  autoComplete,
  defaultValue,
  className,
  labelClassName,
  controlClassName,
  children,
  inputProps,
}: FieldProps) {
  const ids = fieldDomIds(name, Boolean(hint), Boolean(error));
  const controlClass = cx(
    FIELD_CONTROL_CLASS,
    error ? FIELD_CONTROL_ERROR_CLASS : undefined,
    controlClassName,
  );

  return (
    <div className={cx("flex min-w-0 flex-col", className)}>
      <label htmlFor={ids.controlId} className={cx("text-sm font-medium text-navy", labelClassName)}>
        {label}
        {required ? (
          <>
            <span aria-hidden="true" className="text-navy/60"> *</span>
            <span className="sr-only"> (required)</span>
          </>
        ) : null}
      </label>

      {hint ? (
        <p id={ids.hintId} className="mt-1.5 text-xs leading-relaxed text-slate-500">
          {hint}
        </p>
      ) : null}

      {children ? (
        children({
          id: ids.controlId,
          name,
          required,
          placeholder,
          "aria-describedby": ids.describedBy,
          "aria-invalid": error ? true : undefined,
          className: controlClass,
        })
      ) : (
        <input
          {...inputProps}
          id={ids.controlId}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          aria-describedby={ids.describedBy}
          aria-invalid={error ? true : undefined}
          className={controlClass}
        />
      )}

      {error ? (
        <p id={ids.errorId} role="alert" className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default Field;