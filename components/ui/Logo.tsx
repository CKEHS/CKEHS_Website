import Image from "next/image";
import { site } from "@/lib/site";

// The official Creative Kids lockup (crest + wordmark + tagline). It already
// contains the school name, so we render the artwork alone — no extra text.
// Intrinsic size is 1567×459; height is set per placement, width follows.
const SRC = {
  dark: "/logo.png", // navy wordmark — for light backgrounds
  light: "/logo-white.png", // white wordmark — for dark backgrounds
} as const;

type Props = {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "dark", className = "h-11 w-auto", priority = false }: Props) {
  return (
    <Image
      src={SRC[variant]}
      alt={`${site.name} logo`}
      width={1567}
      height={459}
      priority={priority}
      className={className}
    />
  );
}
