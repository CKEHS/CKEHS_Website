// Turns an ISO day ("2026-06-09") into a friendly label ("9 June 2026").
// The explicit locale + options keep the output identical on server and client,
// so it never triggers a hydration mismatch. The "T00:00:00" forces local-time
// parsing so the day doesn't slip backwards in some timezones.
export function formatEventDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Start-of-day timestamp for `iso`, used to decide when an event has passed.
export function eventStartOfDay(iso: string): number {
  return new Date(`${iso}T00:00:00`).getTime();
}
