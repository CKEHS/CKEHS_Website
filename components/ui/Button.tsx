import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "accent" | "outline" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-fred font-semibold " +
  "transition-transform duration-150 active:translate-y-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-[17px]",
};

// Softer press than the concept's chunky 3-D buttons: a small shadow that
// collapses on active, so it reads playful but still grown-up.
const variants: Record<Variant, string> = {
  primary: "bg-sky text-white shadow-[0_5px_0_var(--color-sky-700)] active:shadow-none hover:brightness-105",
  accent: "bg-sun text-navy shadow-[0_5px_0_var(--color-sun-700)] active:shadow-none hover:brightness-105",
  outline: "bg-white text-navy border-2 border-[#cfe6f7] hover:border-sky",
  light: "bg-white/15 text-white border-2 border-white/30 hover:bg-white/25",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
