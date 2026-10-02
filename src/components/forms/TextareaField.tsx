/**
 * Native textarea specialisation of `Field`.
 *
 * Vertically resizable so a long enquiry stays readable, and never
 * horizontally resizable so it cannot break the layout at 375px.
 */

import type { TextareaHTMLAttributes } from "react";

import { cx } from "@/lib/cx";
import Field, { type FieldProps } from "./Field";

export interface TextareaFieldProps extends Omit<FieldProps, "children" | "type"> {
  rows?: number;
  textareaProps?: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    | "id"
    | "name"
    | "required"
    | "rows"
    | "placeholder"
    | "aria-describedby"
    | "aria-invalid"
    | "className"
  >;
}

export function TextareaField({
  rows = 6,
  defaultValue,
  className,
  controlClassName,
  textareaProps,
  ...field
}: TextareaFieldProps) {
  return (
    <Field {...field} className={className} controlClassName={controlClassName}>
      {(control) => (
        <textarea
          {...textareaProps}
          {...control}
          rows={rows}
          defaultValue={defaultValue}
          className={cx(control.className, "min-h-40 resize-y")}
        />
      )}
    </Field>
  );
}

export default TextareaField;