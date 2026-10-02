import type { PaymentMethod } from "@/content/fees";
import { cx } from "@/lib/cx";

import Button from "@/components/ui/Button";
import CopyPlaceholder from "@/components/ui/CopyPlaceholder";

export interface PaymentMethodCardProps {
  method: PaymentMethod;
  /** Zero-based position; rendered as a muted editorial index. */
  index: number;
  /** Optional secondary action, e.g. requesting the payment link. */
  action?: { label: string; href: string };
}

/**
 * One payment method panel. `body` is rendered verbatim. When `detail` is
 * `null` the missing bank / IBAN details are shown as a `CopyPlaceholder`
 * built from that method's `pendingCopyNote` — never invented here.
 */
export function PaymentMethodCard({ method, index, action }: PaymentMethodCardProps) {
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-mist p-7">
      <p aria-hidden="true" className="font-display text-sm tracking-[0.2em] text-slate-400">
        {indexLabel}
      </p>

      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy">
        {method.title}
      </h3>

      <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">{method.body}</p>

      {method.detail ? (
        <div className={cx("mt-auto border-t border-slate-200 pt-5")}>
          <p className="text-sm leading-relaxed text-slate-600">{method.detail}</p>

          {action ? (
            <Button href={action.href} variant="ghost" size="md" className="mt-4 -ml-2">
              {action.label}
            </Button>
          ) : null}
        </div>
      ) : (
        <CopyPlaceholder
          lines={2}
          note={method.pendingCopyNote}
          label="Payment details to be supplied"
          className="mt-auto p-5"
        />
      )}
    </article>
  );
}

export default PaymentMethodCard;