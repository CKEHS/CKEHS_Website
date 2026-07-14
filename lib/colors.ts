// Tailwind only emits classes it can see as literal strings, so content-driven
// accent colours (phases, values, events…) are mapped to full class names here.

export type Accent = "sky" | "sun" | "coral" | "mint" | "navy";

export const bg: Record<Accent, string> = {
  sky: "bg-sky",
  sun: "bg-sun",
  coral: "bg-coral",
  mint: "bg-mint",
  navy: "bg-navy",
};

export const text: Record<Accent, string> = {
  sky: "text-sky",
  sun: "text-sun",
  coral: "text-coral",
  mint: "text-mint",
  navy: "text-navy",
};

export const borderTop: Record<Accent, string> = {
  sky: "border-t-sky",
  sun: "border-t-sun",
  coral: "border-t-coral",
  mint: "border-t-mint",
  navy: "border-t-navy",
};

export const border: Record<Accent, string> = {
  sky: "border-sky",
  sun: "border-sun",
  coral: "border-coral",
  mint: "border-mint",
  navy: "border-navy",
};

// Sun is a light accent, so text on it must be navy for contrast.
export const onColorText: Record<Accent, string> = {
  sky: "text-white",
  sun: "text-navy",
  coral: "text-white",
  mint: "text-white",
  navy: "text-white",
};
