/**
 * PRIVACY POLICY.
 *
 * Plain-English, modest and non-specific. The only personal data this site
 * genuinely handles is what a visitor types into the contact form, so that is
 * the only data described here. No analytics, hosting, data-controller or
 * retention detail is asserted: the gaps the client has not yet supplied are
 * surfaced as a `Callout` rather than invented.
 */

import type { Metadata } from "next";

import LegalPage, { LegalClause } from "@/components/legal/LegalPage";
import Callout from "@/components/ui/Callout";
import { pageSeo } from "@/content/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: pageSeo.privacy.title,
  description: pageSeo.privacy.description,
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "August 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lede="How we handle the personal information you choose to send us through this website."
      lastUpdated={LAST_UPDATED}
    >
      <p>
        {siteConfig.name} is a small UK consultancy. We keep our handling of personal
        information deliberately simple: we collect what you send us, we use it to reply and
        to help you, and we do not sell it or pass it around. This policy explains that in
        plain English.
      </p>

      <p>
        The site operator referred to in this policy is {siteConfig.name}, which trades at{" "}
        {siteConfig.domain}. If you have any question about your information, please use the
        contact details at the end of this page.
      </p>

      <Callout tone="info" title="To be confirmed before launch" className="mt-8">
        <p>
          The following operational details were not supplied to us and are therefore not
          stated here: the full identity of the data controller, the identity of the hosting
          provider, the retention periods that apply to enquiry records, and any registration
          or notification that may be required. These must be confirmed and added by the
          client before this page goes live. Nothing has been assumed or filled in on their
          behalf.
        </p>
      </Callout>

      <LegalClause id="information-we-collect" title="Information we collect">
        <p>
          This website is a guidance and information site. The only way it collects personal
          information is when you choose to send an enquiry using the contact form. To reply
          properly we ask for the following:
        </p>
        <ul>
          <li>
            <strong>Your name</strong> - so we know who we are replying to.
          </li>
          <li>
            <strong>Your email address</strong> - so our reply can reach you.
          </li>
          <li>
            <strong>Your telephone number</strong> - optional, and only if you would prefer we
            call you.
          </li>
          <li>
            <strong>The service you are asking about</strong> - so your enquiry reaches the
            right part of the work.
          </li>
          <li>
            <strong>Your message</strong> - the details you choose to tell us about your
            situation or requirements.
          </li>
        </ul>
        <p>
          We ask only for what is needed to respond. If you would prefer to speak to us rather
          than write, please call or email us directly and we will use only what is needed to
          have that conversation.
        </p>
        <p>
          Please do not send us account numbers, passwords, National Insurance numbers or
          copies of identity documents through the form or by email unless we have specifically
          asked you to and have explained how they will be handled.
        </p>
      </LegalClause>

      <LegalClause id="how-we-use-your-information" title="How we use your information">
        <p>
          We use the information you send us for two purposes, and no others: to respond to
          your enquiry, and to provide the consultancy or guidance you have asked for. If that
          leads to an ongoing working relationship, we keep using the information for as long
          as that relationship lasts.
        </p>
        <p>
          We do not use your details to build a marketing list, and we do not pass them to
          advertising networks.
        </p>
      </LegalClause>

      <LegalClause id="cookies-and-analytics" title="Cookies and analytics">
        <p>
          This website is not a marketing or tracking platform. To our knowledge no
          advertising, remarketing or behavioural analytics cookies are knowingly set, and no
          third-party advertising or tracking scripts are knowingly embedded. The site is
          intended to work without cookies, so you should be able to read every page without
          accepting any.
        </p>
        <p>
          Any technical information that a web server necessarily records in order to deliver a
          page - such as an IP address in a server log - is handled by our hosting provider as
          a normal part of operating a website.
        </p>
        <Callout tone="info" title="Details to be confirmed" className="mt-6">
          <p>
            The precise cookie and analytics position has not been verified for this build.
            Before launch the client should confirm whether any analytics or tag management
            tooling is in use, list any cookies actually set, and complete the required cookie
            notice. The wording above is a best description of the intended design, not a
            verified technical audit.
          </p>
        </Callout>
      </LegalClause>

      <LegalClause id="sharing-your-information" title="Who else sees your information">
        <p>
          We treat everything you send us as confidential. We share it outside {siteConfig.name}{" "}
          only where it is genuinely necessary in order to respond to you or to deliver work you
          have asked for - for example, a specialist adviser we involve with your consent, or a
          service provider such as our email hosting.
        </p>
        <p>
          We will not disclose your circumstances to a third party for any other reason, unless
          we are required to do so by law or by a competent authority, in which case we will
          tell you as soon as we are able to.
        </p>
      </LegalClause>

      <LegalClause id="how-long-we-keep-information" title="How long we keep your information">
        <p>
          We keep enquiry records only for as long as they are needed to deal with your enquiry
          and to meet any legal or record-keeping obligation that applies. If your enquiry leads
          to an ongoing relationship, the relevant records are kept for the duration of that
          relationship and afterwards only for as long as required.
        </p>
        <p>
          If you would like us to delete the information you have sent us, ask us and we will
          do so where we are able to, and we will tell you if there is a reason we cannot.
        </p>
      </LegalClause>

      <LegalClause id="keeping-your-information-secure" title="How we keep your information secure">
        <p>
          We take reasonable care over the personal information held on our systems, in line
          with what a small professional practice would be expected to do. Access is limited to
          the people who need it, and the contact details and enquiries you send us are held
          through our email and hosting providers rather than on our own equipment.
        </p>
        <p>
          Please note that no method of transmission or storage is completely secure. We do
          not claim that information sent over the internet can be guaranteed to be private,
          and we ask that you do not send us anything especially sensitive through an initial
          enquiry.
        </p>
      </LegalClause>

      <LegalClause id="your-rights" title="Your rights">
        <p>
          You have the right to ask us what personal information we hold about you, to have
          inaccurate information corrected, and to ask us to delete information we no longer
          have a reason to keep. You also have the right to complain to the UK Information
          Commissioner&apos;s Office if you are not satisfied with how we have handled your
          information. Contact us using the details below and we will deal with your request
          promptly and in any event within the timescales the law requires.
        </p>
      </LegalClause>

      <LegalClause id="contacting-us" title="How to contact us">
        <p>
          Questions about this policy, or about anything we hold, can be sent to us at{" "}
          <a href={siteConfig.emailHref}>{siteConfig.email}</a> or discussed by telephone on{" "}
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>. If you would prefer to raise a
          privacy question through our contact form, you can also{" "}
          <a href="/contact">contact us online</a>.
        </p>
      </LegalClause>

      <LegalClause id="changes-to-this-policy" title="Changes to this policy">
        <p>
          We may update this policy from time to time, for example if the site changes or if
          the law changes. The date at the top of this page shows when it was last revised, and
          the updated version will always be the one published on this page.
        </p>
      </LegalClause>
    </LegalPage>
  );
}
