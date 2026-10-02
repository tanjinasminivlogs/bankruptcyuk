import { cx } from "@/lib/cx";

export interface CopyPlaceholderProps {
  heading?: string;
  note?: string;
  /** Number of skeleton bars. */
  lines?: number;
  /** `dark` is for navy backgrounds. */
  tone?: "light" | "dark";
  label?: string;
  className?: string;
}

const DEFAULT_NOTE =
  "Final wording will be supplied and approved by the client. This panel is a deliberate placeholder and is not published content.";

const BAR_WIDTHS = ["96%", "88%", "72%", "91%", "64%", "84%"];

/**
 * Deliberate, visibly-unfinished stand-in for client copy that has not been
 * supplied. Must be replaced with approved client copy - never invented.
 */
export function CopyPlaceholder({
  heading,
  note = DEFAULT_NOTE,
  lines = 3,
  tone = "light",
  label = "Client copy to be inserted",
  className,
}: CopyPlaceholderProps) {
  const dark = tone === "dark";
  const bars = Array.from({ length: Math.max(1, lines) }, (_, index) => index);

  return (
    <div
      data-placeholder="copy"
      className={cx(
        "rounded-2xl border border-dashed p-6 sm:p-8",
        dark
          ? "border-white/15 bg-white/[0.04]"
          : "border-slate-200 bg-white",
        className,
      )}
    >
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        <span aria-hidden="true" className="h-px w-8 shrink-0 bg-gold" />
        <span>{label}</span>
      </p>

      {heading ? (
        <p
          className={cx(
            "mt-4 font-display text-xl font-semibold tracking-tight sm:text-2xl",
            dark ? "text-cream" : "text-navy",
          )}
        >
          {heading}
        </p>
      ) : null}

      <p
        className={cx(
          "mt-3 max-w-prose text-sm leading-relaxed",
          dark ? "text-slate-400" : "text-slate-500",
        )}
      >
        {note}
      </p>

      <div aria-hidden="true" className="mt-6 space-y-3">
        {bars.map((index) => (
          <span
            key={index}
            className={cx(
              "block h-2.5 rounded-full",
              dark ? "bg-white/10" : "bg-slate-200/70",
            )}
            style={{ width: BAR_WIDTHS[index % BAR_WIDTHS.length] }}
          />
        ))}
      </div>
    </div>
  );
}

export default CopyPlaceholder;