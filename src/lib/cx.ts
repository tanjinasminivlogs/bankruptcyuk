/**
 * Dependency-free className joiner.
 *
 * Accepts strings plus the falsy values that conditional class expressions
 * produce (`cond && "x"`, `maybe ?? undefined`) and joins the rest with single
 * spaces. No Tailwind conflict resolution is performed — later classes simply
 * win in the cascade, so callers should order overrides last.
 */
export function cx(...parts: Array<string | false | null | undefined>): string {
  let className = "";

  for (const part of parts) {
    if (!part) continue;
    className = className === "" ? part : `${className} ${part}`;
  }

  return className;
}

export default cx;
