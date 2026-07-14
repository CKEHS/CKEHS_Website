"use client";

import { useSyncExternalStore } from "react";

// Year-derived values must reflect the *visitor's* current year, not the year
// the site was built. On a static build `new Date()` runs once at build time and
// then freezes, so these read the year on the client instead.
//
// useSyncExternalStore is the hydration-safe way to do this: the server (and the
// first client paint) render `fallback` — the build-time year passed in from a
// server component — then the client swaps in the real current year with no
// hydration mismatch and no no-JS breakage.

const subscribe = () => () => {};

function useClientYear(fallback: number) {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(), // client
    () => fallback, // server / no-JS
  );
}

export function CurrentYear({ fallback }: { fallback: number }) {
  return <>{useClientYear(fallback)}</>;
}

export function YearsSince({
  since,
  fallback,
  suffix = "+",
}: {
  since: number;
  fallback: number;
  suffix?: string;
}) {
  return (
    <>
      {useClientYear(fallback) - since}
      {suffix}
    </>
  );
}
