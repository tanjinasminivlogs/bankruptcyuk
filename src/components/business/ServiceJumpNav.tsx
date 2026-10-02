/**
 * IN-PAGE JUMP NAV FOR THE EIGHT SERVICES.
 *
 * Structural navigation only. The horizontal scroller is bled to the viewport
 * gutter with a negative margin mirrored by equal padding, so the anchors stay
 * reachable at 375px while the page itself never overflows horizontally.
 */

import { businessServices } from "@/content/business";

export function ServiceJumpNav() {
  return (
    <nav
      aria-label="Business services on this page"
      className="-mx-5 mt-10 overflow-x-auto px-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
    >
      <ol className="flex w-max items-stretch gap-2.5 pb-1">
        {businessServices.map((service) => (
          <li key={service.id}>
            <a
              href={"#" + service.id}
              className="flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition-colors duration-200 hover:border-gold hover:bg-cream"
            >
              <span
                aria-hidden="true"
                className="font-display text-sm font-semibold tabular-nums text-navy"
              >
                {service.number}
              </span>
              <span className="whitespace-nowrap">{service.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default ServiceJumpNav;