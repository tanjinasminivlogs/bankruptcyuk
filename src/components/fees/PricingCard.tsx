import type { PricingTier } from "@/content/fees";
import { cx } from "@/lib/cx";

import Button from "@/components/ui/Button";

export interface PricingCardProps {
  tier: PricingTier;
  /** Never implies an online checkout — every tier routes to /contact. */
  ctaLabel: string;
  ctaHref?: string;
}

/**
 * One fixed-fee tier. Every string is rendered verbatim from `PricingTier`;
 * `duration` is omitted entirely when the client supplied `null`.
 *
 * The featured tier is distinguished purely visually (navy field, gold hairline,
 * slight lift) — no badge, no urgency language, no value claim.
 */
export function PricingCard({ tier, ctaLabel, ctaHref = "/contact" }: PricingCardProps) {
  const featured = tier.featured;

  return (
    <article
      className={cx(
        "flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 sm:p-8",
        featured
          ? "border-gold/45 bg-navy text-cream shadow-[0_30px_60px_-36px_rgba(11,31,51,0.8)] lg:-mt-4"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-gold/55 hover:shadow-[0_26px_50px_-32px_rgba(11,31,51,0.5)]",
      )}
    >
      <h3
        className={cx(
          "font-display text-xl font-semibold tracking-tight sm:text-[1.4rem]",
          featured ? "text-cream" : "text-navy",
        )}
      >
        {tier.name}
      </h3>

      <p
        className={cx(
          "mt-6 font-display text-4xl font-semibold leading-none tracking-tight sm:text-5xl",
          featured ? "text-cream" : "text-navy",
        )}
      >
        {tier.amount}
      </p>

      {tier.duration ? (
        <p
          className={cx(
            "mt-4 text-sm font-medium tracking-wide",
            featured ? "text-slate-300" : "text-slate-500",
          )}
        >
          {tier.duration}
        </p>
      ) : null}

      <p
        className={cx(
          "mt-5 text-[0.95rem] leading-relaxed",
          featured ? "text-slate-300" : "text-slate-600",
        )}
      >
        {tier.description}
      </p>

      <div
        className={cx(
          "mt-auto border-t pt-6",
          featured ? "border-white/15" : "border-slate-200",
        )}
      >
        <p className={cx("text-sm leading-relaxed", featured ? "text-slate-300" : "text-slate-500")}>
          {tier.footnote}
        </p>
      </div>

      <Button
        href={ctaHref}
        variant={featured ? "light" : "secondary"}
        className="mt-7 w-full"
      >
        {ctaLabel}
      </Button>
    </article>
  );
}

export default PricingCard;