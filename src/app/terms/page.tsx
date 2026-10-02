/**
 * TERMS & CONDITIONS.
 *
 * A plain-English starting structure, deliberately not presented as a final
 * legal document. Nothing here asserts regulated status, authorisation,
 * registration or any guaranteed outcome, and the draft status is flagged in
 * the notice at the top of the page.
 */

import type { Metadata } from "next";

import LegalPage, { LegalClause } from "@/components/legal/LegalPage";
import Callout from "@/components/ui/Callout";
import { pageSeo } from "@/content/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: pageSeo.terms.title,
  description: pageSeo.terms.description,
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "August 2026";

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      lede="The terms that apply when you use this website or send us an enquiry through it."
      lastUpdated={LAST_UPDATED}
    >
      <p>
        These terms set out the basis on which {siteConfig.name} makes this website available
        and handles an enquiry sent through it. They are written to be read rather than to be
        impressive. If anything here is unclear, please ask us before you rely on it.
      </p>

      <Callout tone="warning" title="This is a draft, not a final document" className="mt-8">
        <p>
          The client&apos;s own terms were not supplied to us for this build. What follows is a
          plain-English starting structure written to reflect the way this site actually
          works, and it must be reviewed and settled by a qualified legal adviser before the
          site goes live. Please do not treat it as the client&apos;s final, legally agreed
          terms.
        </p>
      </Callout>

      <LegalClause id="acceptance-of-these-terms" title="Acceptance of these terms">
        <p>
          By using this website, or by sending us an enquiry through it, you agree to these
          terms. If you do not accept them, please do not use the site or send us an enquiry.
          We may update these terms from time to time, and the version published here is the
          version that applies.
        </p>
      </LegalClause>

      <LegalClause id="what-this-site-is" title="What this site is, and what it is not">
        <p>
          This website provides general information and consultancy support. It is not a
          regulated legal, insolvency or financial service, and nothing on it should be read as
          advice given to you personally about your circumstances.
        </p>
        <p>
          {siteConfig.name} is not a law firm, an insolvency practitioner or a regulated
          financial adviser, and nothing on this site should be taken to suggest that it is.
          Where a matter needs a regulated professional, we will say so and point you towards
          the appropriate route.
        </p>
        <p>
          Bankruptcy, debt, tax and business decisions have consequences that depend entirely
          on your own situation. Please read the information here as background, and take
          qualified advice before you act on anything.
        </p>
      </LegalClause>

      <LegalClause id="no-client-relationship" title="No client relationship is formed by an enquiry">
        <p>
          Using this website does not make you a client of {siteConfig.name}. Equally, sending
          an enquiry - by form, email or telephone - does not create a client relationship, and
          does not oblige either of us to act.
        </p>
        <p>
          A professional relationship begins only when both of us have agreed the scope of the
          work and the terms on which it will be carried out. Until that point, please treat
          anything you have sent us as an enquiry that we may or may not be able to take on.
        </p>
      </LegalClause>

      <LegalClause id="no-guarantee-of-outcomes" title="No guarantee of any outcome">
        <p>
          Nothing on this site is a promise or guarantee of a result. We cannot and do not
          guarantee that a bankruptcy application will be approved, that any relief from debt
          will be granted, that a business will succeed or become profitable, or that any
          immigration, licensing or regulatory outcome will follow from taking a particular
          step. Decisions of that kind rest with the relevant court, adjudicator, regulator or
          authority.
        </p>
        <p>
          Any fees, timelines or processes described are indicative of how such matters
          generally work in England and Wales, and they can change.
        </p>
      </LegalClause>

      <LegalClause id="your-responsibility" title="Your responsibility for decisions you make">
        <p>
          You are responsible for the decisions you take. Before acting on anything published
          here, or on the basis of a conversation with us, please check the current official
          guidance and take your own independent advice from an appropriately qualified and
          regulated professional who can consider your full circumstances.
        </p>
        <p>
          We are not responsible for decisions you make in reliance on this website, and we
          cannot be held responsible for losses that arise from acting on general information
          without such advice.
        </p>
      </LegalClause>

      <LegalClause id="intellectual-property" title="Intellectual property">
        <p>
          The text, layout, design and other content of this website belong to {siteConfig.name}{" "}
          or to the person who has licensed it to us. You may read, print and share the pages
          for your own personal or internal business use.
        </p>
        <p>
          You may not reproduce substantial parts of the content, or use it commercially,
          without our written permission. Third-party names, logos and materials remain the
          property of their respective owners.
        </p>
      </LegalClause>

      <LegalClause id="limitation-of-liability" title="Limitation of liability">
        <p>
          We take care in preparing the information on this site, but we do not promise that it
          is complete, current or free from error. To the extent that the law allows us to do
          so, we exclude liability for any loss arising from your use of, or reliance on, this
          website or the information it contains.
        </p>
        <p>
          Nothing in these terms limits our liability for death or personal injury caused by
          negligence, for fraud, or for anything else that cannot lawfully be limited. Your
          statutory rights as a consumer are unaffected.
        </p>
      </LegalClause>

      <LegalClause id="third-party-links" title="Links to other websites">
        <p>
          Where this site links to another website - for example GOV.UK, Companies House, HM
          Revenue &amp; Customs or the Insolvency Service - that website is outside our
          control. We are not responsible for its content, its availability or its privacy
          practices, and linking to it does not mean we endorse it.
        </p>
        <p>
          Official government sources are the authority on the law and procedures described
          on this site. Please verify anything important for your own circumstances directly
          with the relevant official source rather than relying on a summary.
        </p>
      </LegalClause>

      <LegalClause id="changes-to-these-terms" title="Changes to these terms">
        <p>
          We may revise these terms to reflect changes in the site or in the law. Any change
          takes effect when it is published on this page, and the date shown at the top gives
          the version that applies. Continuing to use the site after a change means you accept
          the revised terms.
        </p>
      </LegalClause>

      <LegalClause id="contacting-us" title="Contacting us and governing law">
        <p>
          Questions about these terms can be sent to{" "}
          <a href={siteConfig.emailHref}>{siteConfig.email}</a> or raised by telephone on{" "}
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>. You can also{" "}
          <a href="/contact">contact us online</a>.
        </p>
        <p>
          These terms are governed by the law of England and Wales, and any dispute arising
          from them or from your use of this website is subject to the exclusive jurisdiction of
          the courts of England and Wales.
        </p>
      </LegalClause>
    </LegalPage>
  );
}
