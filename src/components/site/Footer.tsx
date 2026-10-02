import Link from "next/link";
import type { ReactElement } from "react";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import { cx } from "@/lib/cx";

import Logo from "./Logo";

const COLUMN_HEADING =
  "text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-cream/60";

const LINK_BASE = "text-cream/75 transition-colors duration-200 hover:text-cream";

const LINK_HOVER_UNDERLINE =
  "underline decoration-gold/45 decoration-1 underline-offset-[5px] transition-[text-decoration-color] duration-200 hover:decoration-gold";

/** `siteConfig.website` is a full URL; the visible label drops the scheme. */
const WEBSITE_LABEL = siteConfig.website.replace(/^https?:\/\//, "");

export function Footer(): ReactElement {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-cream">
      {/* Restrained watermark wordmark. Decorative only, never announced. */}
      <span
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute -bottom-6 right-0 hidden select-none whitespace-nowrap",
          "font-display text-[7rem] font-semibold leading-none text-cream/[0.035] lg:block",
        )}
      >
        BankruptcyUK
      </span>

      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4 lg:gap-10 lg:py-24">
          <div>
            <Logo tone="light" showDescriptor />
            <p className={cx("mt-6 max-w-xs text-sm leading-relaxed", LINK_BASE)}>
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className={COLUMN_HEADING}>Navigation</h2>
            <ul className="mt-6 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={cx(LINK_BASE, LINK_HOVER_UNDERLINE)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h2 className={COLUMN_HEADING}>Services</h2>
            <ul className="mt-6 space-y-3">
              {siteConfig.services.map((service) => (
                <li key={`${service.href}::${service.label}`}>
                  <Link href={service.href} className={cx(LINK_BASE, LINK_HOVER_UNDERLINE)}>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={COLUMN_HEADING}>Contact</h2>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={siteConfig.phoneHref} className={cx(LINK_BASE, LINK_HOVER_UNDERLINE)}>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.emailHref} className={cx(LINK_BASE, LINK_HOVER_UNDERLINE)}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.website} className={cx(LINK_BASE, LINK_HOVER_UNDERLINE)}>
                  {WEBSITE_LABEL}
                </a>
              </li>
            </ul>
          </div>

          {/*
            Social profiles are intentionally not rendered. The client supplied
            none, so `siteConfig.social` is empty; inventing profile URLs here
            would publish addresses that may not exist.
          */}
        </div>

        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent"
        />

        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="text-sm text-cream/60">{siteConfig.copyright}</p>

          <nav aria-label="Footer legal">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {siteConfig.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cx(LINK_BASE, LINK_HOVER_UNDERLINE, "text-sm")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;