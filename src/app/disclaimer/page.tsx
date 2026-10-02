/**
 * DISCLAIMER.
 *
 * The "Important Information" block at the top of this page is CLIENT-SUPPLIED
 * COPY and is rendered from `bankruptcyDisclaimer` in `src/content/bankruptcy.ts`
 * - the paragraphs are mapped in their original order so they are reproduced
 * verbatim and are never reworded, shortened or reordered. Do not edit that
 * block here; change the source content file instead.
 *
 * The clauses below it are general, plainly-worded qualifications. They make no
 * claim of regulated status, authorisation, registration or guaranteed outcome,
 * and the wording beyond the supplied block is flagged as still to be settled.
 */

import type { Metadata } from "next";

import LegalPage, { LegalClause } from "@/components/legal/LegalPage";
import Callout from "@/components/ui/Callout";
import { bankruptcyDisclaimer } from "@/content/bankruptcy";
import { pageSeo } from "@/content/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: pageSeo.disclaimer.title,
  description: pageSeo.disclaimer.description,
  alternates: { canonical: "/disclaimer" },
};

const LAST_UPDATED = "August 2026";

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      lede="The important limitations on the general information published on this website, and where to obtain qualified help."
      lastUpdated={LAST_UPDATED}
    >
      <p>
        We would rather be clear with you than reassuring. The information on this website is
        general: it is written to help you understand how bankruptcy and related processes
        work in England and Wales, and to help you ask better questions of the professionals
        you choose. It is not advice about your situation, and it cannot be.
      </p>

      <Callout tone="warning" title={bankruptcyDisclaimer.title} className="mt-8">
        {bankruptcyDisclaimer.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <p className="border-t border-slate-200 pt-3 text-slate-600">
          {bankruptcyDisclaimer.checked}
        </p>
      </Callout>

      <Callout tone="info" title="Wording still to be confirmed" className="mt-6">
        <p>
          Only the &ldquo;Important Information&rdquo; block above was supplied by the client,
          and it is reproduced exactly as given. The further disclaimers below are a
          plain-English drafting structure, not approved client wording, and must be reviewed
          and settled before the site goes live.
        </p>
      </Callout>

      <LegalClause id="general-information" title="General information only">
        <p>
          This website is published for general information purposes. It is not tailored to your
          circumstances, and it does not take account of your finances, your debts, your
          business, your liabilities or your objectives. Every situation is different, and
          general information can only ever be a starting point.
        </p>
      </LegalClause>

      <LegalClause id="not-advice" title="No legal, insolvency, debt, tax or financial advice">
        <p>
          Nothing on this website is legal, insolvency, regulated debt, tax or financial advice,
          and none of it should be treated as such. We do not assess individual cases, we do
          not review documents, and we do not recommend a course of action in respect of any
          particular person or business.
        </p>
      </LegalClause>

      <LegalClause id="no-relationship" title="No adviser or client relationship is created">
        <p>
          Using this website, reading its content, or sending us an enquiry creates no
          professional relationship of any kind between you and {siteConfig.name}. No
          attorney&ndash;client, adviser&ndash;client or similar duty of care arises, and no
          such relationship is created unless and until it is separately agreed in writing.
        </p>
        <p>
          Please do not send confidential or time-critical material through the contact form or
          by email in the belief that it is being handled as part of an engagement.
        </p>
      </LegalClause>

      <LegalClause id="our-status" title="Our status">
        <p>
          {siteConfig.name} is not a law firm, an insolvency practitioner, a licensed
          intermediary or a regulated financial adviser, and we hold no regulatory authorisation
          that would make us one. We are a consultancy publishing general information and
          providing general support. This is stated plainly so that no one is misled about the
          nature of what we publish or the help we can give.
        </p>
        <p>
          If your situation requires a regulated professional, please approach one directly.
          We will always tell you when that is the case rather than encouraging you to rely on
          this website instead.
        </p>
      </LegalClause>

      <LegalClause id="no-guaranteed-outcomes" title="No guaranteed outcomes">
        <p>
          We give no guarantee of any outcome and no assurance that following the steps
          described on this site will produce a particular result. Bankruptcy applications are
          decided by the adjudicator; relief from debt is decided by the Insolvency Service;
          business, licensing and immigration outcomes are decided by the relevant authority.
          Nothing published here changes how any of those decisions are made.
        </p>
        <p>
          Fees, timelines, rules and government procedures can all change. Any figure or
          timescale shown elsewhere on this site is indicative and is not a commitment.
        </p>
      </LegalClause>

      <LegalClause id="information-may-change" title="Information may become outdated">
        <p>
          We aim to keep the information on this site accurate and current, but we cannot
          guarantee that it is complete, up to date, or free from error at any particular time.
          Content is checked against official guidance periodically, and the date of the most
          recent check is shown on the page concerned.
        </p>
        <p>
          Because these matters change frequently, please verify anything you intend to rely on
          against the current official source - GOV.UK, the Insolvency Service, Companies House
          or HM Revenue &amp; Customs - and take your own professional advice for your own
          circumstances.
        </p>
      </LegalClause>

      <LegalClause id="external-links" title="External links">
        <p>
          Where this site links to a website we do not control, including official government
          services, we are not responsible for that website, its availability, its content or
          the way it handles your information. A link is provided for convenience and does not
          mean we endorse or control the destination.
        </p>
      </LegalClause>

      <LegalClause id="independent-advice" title="Content is not a substitute for advice">
        <p>
          The content of this website is not a substitute for independent professional advice
          from a qualified and regulated solicitor, insolvency practitioner or regulated debt
          adviser who can consider your individual circumstances. Please seek that advice before
          you take any step that could affect your property, assets, income, business or credit
          record.
        </p>
      </LegalClause>

      <LegalClause id="questions" title="Questions and contact">
        <p>
          If anything on this website is unclear, or if you are unsure whether a matter needs a
          regulated professional, please ask before you act. You can reach us at{" "}
          <a href={siteConfig.emailHref}>{siteConfig.email}</a>, by telephone on{" "}
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>, or through our{" "}
          <a href="/contact">contact page</a>.
        </p>
      </LegalClause>
    </LegalPage>
  );
}
