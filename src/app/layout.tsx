import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import ScrollToTop from "@/components/site/ScrollToTop";
import { defaultMetadataBase, pageSeo } from "@/content/seo";
import { siteConfig } from "@/content/site";
import { cx } from "@/lib/cx";
import { body, display } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: defaultMetadataBase,
  /**
   * Identity title template. Next requires a `template` key whenever `title`
   * uses the object form, so it cannot simply be omitted. Every route
   * publishes a complete, brand-suffixed title from `pageSeo`, so a
   * "%s | BankruptcyUK" template doubled the brand in the rendered
   * `<title>` (e.g. "About | BankruptcyUK | BankruptcyUK"). "%s" passes
   * each child title through unchanged.
   */
  title: {
    default: pageSeo.home.title,
    template: "%s",
  },
  description: pageSeo.home.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_GB",
    url: siteConfig.website,
    title: pageSeo.home.title,
    description: pageSeo.home.description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

/**
 * Organisation structured data.
 *
 * Only facts supplied by the client appear here: name, website, email, phone and
 * founder. No postal address, VAT number, awards, accreditations or `sameAs`
 * profiles are asserted, because none were supplied. No OG image URL is set for
 * the same reason.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.website,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={cx(body.variable, display.variable)}>
      <body className="flex min-h-screen flex-col">
        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <ScrollToTop />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}



