/**
 * OVERSEAS-CLIENT PANEL.
 *
 * The eight-step process is the client-supplied `process` list, verbatim and in
 * order. `body` is null, so the missing supporting copy is shown as a dark
 * `CopyPlaceholder`. The immigration note is reproduced verbatim and is framed
 * as a qualification: it must never imply that BankruptcyUK provides
 * regulated immigration or visa services.
 */

import Callout from "@/components/ui/Callout";
import CopyPlaceholder from "@/components/ui/CopyPlaceholder";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import { immigrationNote, internationalEntrepreneurs } from "@/content/business";

const internationalBody: string[] | null = internationalEntrepreneurs.body;
const process: readonly string[] = internationalEntrepreneurs.process;

export function InternationalPanelSection() {
  return (
    <div>
      {internationalBody ? (
        <Prose tone="dark" className="max-w-2xl">
          {internationalBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Prose>
      ) : (
        <CopyPlaceholder
          tone="dark"
          label="Panel copy pending"
          note={internationalEntrepreneurs.pendingCopyNote}
          lines={3}
          className="mt-8 max-w-2xl"
        />
      )}

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((step, index) => (
          <Reveal as="li" key={step} delay={index * 60} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-6">
              <span
                aria-hidden="true"
                className="block h-px w-full bg-gradient-to-r from-gold/70 to-transparent"
              />

              <span className="mt-5 flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 font-display text-sm font-semibold tabular-nums text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-4 text-[0.95rem] font-medium leading-snug text-cream">{step}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-10 rounded-2xl border border-white/12 bg-white/[0.04] p-1">
        <Callout tone="info" className="[&_p]:text-slate-200">
          <p>{immigrationNote}</p>
        </Callout>
      </div>
    </div>
  );
}

export default InternationalPanelSection;