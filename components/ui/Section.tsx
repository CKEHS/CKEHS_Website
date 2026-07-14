import type { ReactNode } from "react";

// Standard page width — matches the concept's 1200px content column.
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = true,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : ""} ${className}`}>
      {eyebrow && (
        <span className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-sky">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-fred text-3xl font-bold text-navy sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>
      )}
    </div>
  );
}

// A reusable coloured icon tile used by values, contact cards, steps, etc.
export function IconTile({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-13 w-13 items-center justify-center rounded-2xl ${className}`}
      style={{ height: "3.25rem", width: "3.25rem" }}
    >
      <span className="font-fred text-2xl font-bold">{children}</span>
    </div>
  );
}
