import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";

import { cx } from "@/lib/cx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "light";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
}

export type LinkButtonProps = ButtonStyleProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children"> & {
    href: string;
  };

export type NativeButtonProps = ButtonStyleProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children" | "type"> & {
    href?: undefined;
    type?: "button" | "submit";
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-cream shadow-sm hover:bg-navy-800 hover:ring-1 hover:ring-gold hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-20px_rgba(11,31,51,0.65)]",
  secondary:
    "border border-navy/30 bg-transparent text-navy hover:border-gold hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-22px_rgba(11,31,51,0.55)]",
  ghost:
    "text-navy underline decoration-gold/45 underline-offset-[6px] hover:decoration-gold hover:-translate-y-0.5",
  light:
    "bg-cream text-navy shadow-sm hover:bg-white hover:ring-1 hover:ring-gold/70 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.55)]",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-6 text-[0.95rem]",
  lg: "min-h-12 px-7 text-base",
};

const DISABLED = "pointer-events-none opacity-50";

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === "string";
}

/**
 * Primary call to action. Renders a `next/link` when `href` is supplied,
 * otherwise a native `button`. All variants share a 44px minimum tap target.
 */
export function Button(props: ButtonProps): ReactElement {
  if (isLinkButton(props)) {
    const { href, variant = "primary", size = "md", className, children, ...rest } = props;

    return (
      <Link
        href={href}
        className={cx(BASE, VARIANTS[variant], SIZES[size], className)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    className,
    children,
    type = "button",
    disabled,
    ...rest
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={cx(
        BASE,
        VARIANTS[variant],
        SIZES[size],
        disabled ? DISABLED : undefined,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;