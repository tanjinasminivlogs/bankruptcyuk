/**
 * Native select specialisation of `Field`.
 *
 * Always renders a first, disabled `value=""` placeholder option so an
 * untouched select is detectable on the server. Options come from the field
 * config, never hardcoded.
 */

import type { SelectHTMLAttributes } from "react";

import { cx } from "@/lib/cx";
import Field, { type FieldProps } from "./Field";

export interface SelectFieldProps extends Omit<FieldProps, "children" | "type"> {
  /** Verbatim option labels, in supplied order. */
  options: readonly string[];
  /** Text of the disabled placeholder option. */
  placeholder: string;
  selectProps?: Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    | "id"
    | "name"
    | "required"
    | "aria-describedby"
    | "aria-invalid"
    | "className"
  >;
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
    >
      <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SelectField({
  options,
  placeholder,
  defaultValue,
  className,
  controlClassName,
  selectProps,
  ...field
}: SelectFieldProps) {
  return (
    <Field
      {...field}
      className={className}
      controlClassName={cx(controlClassName, "appearance-none pr-11")}
    >
      {(control) => (
        <div className="relative">
          <select
            {...selectProps}
            {...control}
            defaultValue={defaultValue ?? ""}
            className={control.className}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <Chevron />
        </div>
      )}
    </Field>
  );
}

export default SelectField;