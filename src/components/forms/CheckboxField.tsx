/**
 * Checkbox specialisation.
 *
 * Uses the same id / `aria-describedby` / `role="alert"` rules as `Field` but
 * lays the label out beside the box, which is the expected pattern for a
 * consent statement. The box keeps a 44px minimum tap target.
 */

import type { InputHTMLAttributes, ReactNode } from "react";

import { cx } from "@/lib/cx";
import { fieldDomIds } from "./Field";

export interface CheckboxFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "id" | "name" | "type" | "required" | "className" | "aria-describedby" | "aria-invalid"
  > {
  /** Visible label, associated with the box by a real `for`. */
  label: ReactNode;
  name: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  labelClassName?: string;
}

export function CheckboxField({
  label,
  name,
  required = false,
  hint,
  error,
  className,
  labelClassName,
  defaultChecked,
  ...inputProps
}: CheckboxFieldProps) {
  const ids = fieldDomIds(name, Boolean(hint), Boolean(error));

  return (
    <div className={cx("flex min-w-0 flex-col", className)}>
      <div
        className={cx(
          "flex items-start gap-3 rounded-xl border p-4 transition-colors duration-200",
          error ? "border-red-500/70 bg-red-50/50" : "border-mist bg-white",
        )}
      >
        <input
          {...inputProps}
          id={ids.controlId}
          name={name}
          type="checkbox"
          required={required}
          defaultChecked={defaultChecked}
          aria-describedby={ids.describedBy}
          aria-invalid={error ? true : undefined}
          className={cx(
            "mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-slate-300 accent-navy",
          )}
        />

        <label
          htmlFor={ids.controlId}
          className={cx(
            "cursor-pointer text-sm leading-relaxed text-slate-700",
            labelClassName,
          )}
        >
          {label}
          {required ? (
            <>
              <span aria-hidden="true" className="text-navy/60"> *</span>
              <span className="sr-only"> (required)</span>
            </>
          ) : null}
        </label>
      </div>

      {hint ? (
        <p id={ids.hintId} className="mt-2 text-xs leading-relaxed text-slate-500">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={ids.errorId} role="alert" className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default CheckboxField;