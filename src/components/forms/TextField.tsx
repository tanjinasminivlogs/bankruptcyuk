/**
 * Thin text input specialisation of `Field`.
 */

import Field, { type FieldProps } from "./Field";

export type TextFieldProps = Omit<FieldProps, "children">;

export function TextField(props: TextFieldProps) {
  return <Field {...props} />;
}

export default TextField;