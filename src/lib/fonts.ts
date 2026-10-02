/**
 * SELF-HOSTED TYPEFACES.
 *
 * Playfair Display (display serif) and Inter (body sans) are committed to
 * `src/app/fonts` as WOFF2 latin-subset files and loaded with `next/font/local`.
 *
 * This replaces `next/font/google`, which downloads the fonts over the network
 * during `next build`. Any build machine without outbound access to Google
 * failed to compile, and a build could not be reproduced offline. Self-hosting
 * removes that dependency entirely while producing the same two families, the
 * same `--font-playfair` / `--font-inter` CSS variables and the same
 * `font-display: swap` behaviour.
 *
 * Both files are the variable versions of each family, so the 400-700 weight
 * range is served from a single WOFF2 file per family.
 *
 * Licensing: both families are published by their authors under the SIL Open
 * Font License 1.1. See `src/app/fonts/FONT-LICENSES.md`.
 */

import localFont from "next/font/local";

export const display = localFont({
  src: "./fonts/playfair-display-latin-variable.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-playfair",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: false,
});

export const body = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
  adjustFontFallback: false,
});
