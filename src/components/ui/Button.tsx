import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outlineDark" | "maroon" | "gold" | "navy";
  size?: "md" | "sm";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 ease-out min-h-11 hover:scale-[1.04]";

const variants = {
  primary: "bg-gold text-ink hover:bg-gold-light",
  outline: "border border-ivory/70 text-ivory hover:bg-ivory/10",
  outlineDark: "border border-ink-soft/40 text-ink hover:bg-cream",
  maroon: "bg-maroon text-ivory hover:bg-maroon-dark",
  gold: "bg-gold text-ivory shadow-sm hover:bg-gold-dark",
  navy: "bg-[#12233F] text-ivory shadow-sm hover:bg-[#1B335C]",
};

const sizes = {
  md: "px-7 py-3.5 text-sm",
  sm: "px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
