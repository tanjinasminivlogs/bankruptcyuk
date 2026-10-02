"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import { cx } from "@/lib/cx";

import Logo from "./Logo";

const SCROLL_THRESHOLD = 24;

const DESKTOP_LINK_BASE =
  "group relative inline-flex items-center pt-1 pb-2 text-[0.9375rem] font-medium tracking-[0.01em] transition-colors duration-200";

const DESKTOP_RULE =
  "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gold transition-transform duration-200 ease-out";

const MOBILE_LINK_BASE =
  "relative flex min-h-12 items-center pl-4 text-[1.0625rem] font-medium transition-colors duration-200";

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Compact the header once the page has scrolled, throttled to one state
  // update per animation frame so scrolling never thrashes layout.
  useEffect(() => {
    let frame = 0;

    const handleScroll = (): void => {
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };
  }, []);

  // Close the mobile panel on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Escape closes the panel and returns focus to the toggle that opened it.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setMenuOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Scroll lock. Added and removed symmetrically, with the scrollbar gutter
  // preserved, and restored by the effect cleanup on unmount so the page never
  // restores at the wrong offset.
  useEffect(() => {
    if (!menuOpen) return;

    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const gutter = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (gutter > 0) {
      body.style.paddingRight = `${gutter}px`;
    }

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [menuOpen]);

  // Release the panel and its scroll lock when the viewport crosses to desktop.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");

    const handleChange = (event: MediaQueryListEvent): void => {
      if (event.matches) setMenuOpen(false);
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300 ease-out",
        scrolled
          ? "border-b border-navy/10 bg-cream/95 shadow-[0_12px_32px_-28px_rgba(11,31,51,0.75)] backdrop-blur-md"
          : "border-b border-transparent bg-cream/80 backdrop-blur-sm",
      )}
    >
      <a
        href="#main-content"
        className="sr-only rounded-full focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-cream"
      >
        Skip to main content
      </a>

      <Container size="wide">
        <div
          className={cx(
            "flex items-center justify-between gap-4 transition-[padding] duration-300 ease-out",
            scrolled ? "py-2.5" : "py-4",
          )}
        >
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            <nav aria-label="Main">
              <ul className="flex items-center gap-7">
                {siteConfig.nav.map((item) => {
                  const active = isActiveRoute(pathname, item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cx(
                          DESKTOP_LINK_BASE,
                          active ? "text-navy" : "text-ink/70 hover:text-navy",
                        )}
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={cx(
                            DESKTOP_RULE,
                            active
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Button href="/contact" size="md" className="shrink-0">
              Book a Consultation
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((previous) => !previous)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-navy transition-colors duration-200 hover:bg-mist lg:hidden"
          >
            <span className="relative block h-5 w-6" aria-hidden="true">
              <span
                className={cx(
                  "absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out",
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cx(
                  "absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200",
                  menuOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cx(
                  "absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out",
                  menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        id={panelId}
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        className={cx(
          "absolute inset-x-0 top-full overflow-hidden border-b border-navy/10 bg-cream transition-[max-height,opacity,visibility] duration-300 ease-out lg:hidden",
          menuOpen
            ? "visible max-h-[34rem] opacity-100 shadow-[0_28px_48px_-32px_rgba(11,31,51,0.6)]"
            : "invisible max-h-0 opacity-0",
        )}
      >
        <Container size="wide" className="pb-8">
          <nav aria-label="Mobile" className="border-t border-navy/10 pt-2">
            <ul className="flex flex-col">
              {siteConfig.nav.map((item) => {
                const active = isActiveRoute(pathname, item.href);

                return (
                  <li key={item.href} className="border-b border-navy/10 last:border-b-0">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cx(
                        MOBILE_LINK_BASE,
                        active ? "text-navy" : "text-ink/75 hover:text-navy",
                      )}
                    >
                      {item.label}
                      {active ? (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 bg-gold"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 flex flex-col gap-4">
            <Button href="/contact" size="lg" className="w-full">
              Book a Consultation
            </Button>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 text-base font-medium text-navy underline decoration-gold/50 underline-offset-[6px] transition-colors duration-200 hover:decoration-gold"
            >
              {siteConfig.phone}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;