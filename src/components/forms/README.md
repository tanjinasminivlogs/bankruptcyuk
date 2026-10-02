# Form primitives

Reusable, accessible building blocks for every form on the site. Nothing in
this folder is page-specific, and nothing here knows about the contact page.

## Components

| File                 | Purpose                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| `Field.tsx`          | Accessible wrapper: real `<label for>`, optional hint via `aria-describedby`, `role="alert"` error, `aria-invalid`, shared control styling. Renders an `<input>` unless a `children` render prop supplies another control. |
| `TextField.tsx`      | Text / email / tel / number inputs. Thin pass-through to `Field`.                              |
| `SelectField.tsx`    | Native `<select>` with a first, disabled `value=""` placeholder option so an untouched select is detectable server-side. |
| `TextareaField.tsx`  | Vertically resizable `<textarea>` (never horizontally resizable, so it cannot break the 375px layout). |
| `CheckboxField.tsx`  | Consent-style checkbox with a real label, `hints` and `role="alert"` error, and a 44px tap target. Uses the same id scheme as `Field`. |

`FIELD_CONTROL_CLASS`, `FIELD_CONTROL_ERROR_CLASS` and `fieldDomIds` are
exported from `Field.tsx` for anything that needs to style a control or build a
matching error summary link (`#${name}-field`).

## Adding another form

The contact page is the reference implementation. It is driven entirely by
field configuration rather than hand-written markup:

1. **Add a field config** in `src/content/<page>.ts` using the same shape as
   `ContactField` in `src/content/contact.ts` - `name`, `label`, `type`,
   `control` (`input` | `select` | `textarea`), `required`, optional
   `options` and `autocomplete`.
2. **Render it** by mapping over that config and choosing `TextField`,
   `SelectField` or `TextareaField` per `control`. No new markup is needed per
   field.
3. **Validate it** in `src/lib/validation.ts` with a
   `validateXSubmission(previousState, formData)` function returning the
   `SubmissionResult` type. Required and type rules can be read from the config.
4. **Wire an action** in `src/app/<page>/actions.ts` (`"use server"`) that calls
   the validator and returns its typed result.
5. **Show the outcome** with `useActionState` plus a status region that renders a
   success panel or an error summary whose links point at the invalid fields.

Field-level rules (`required`, email shape, phone shape, option membership) are
shared by `src/lib/validation.ts`, so a new form inherits them by reusing those
helpers rather than by copying them.

## Forms still to be built

The brief also refers to a **Daily Task / Job Form**, a **copy-from-another-website
request form**, and further form requirements. **Their field specifications were
not supplied by the client**, so no fields have been guessed and no pages have
been built for them. Once the specifications arrive, each one is a config file
plus a validator and an action composed from the primitives above - no new
component is expected.

## Conventions

- Labels, option text, consent text and button labels come from `src/content/*`
  verbatim. Never invent or paraphrase them in a component.
- Native browser validation is disabled on long forms (`noValidate`) so all
  problems surface in one server-validated error summary.
- Errors are announced: `role="alert"` on the message, `aria-invalid` on the
  control, and an `aria-live="polite"` region around the whole status area.
- Fields that are never given a value must render a `CopyPlaceholder`, not
  lorem ipsum or an invented fact.