"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { EventItem } from "@/lib/content";
import { formatEventDate, eventStartOfDay } from "@/lib/dates";
import * as c from "@/lib/colors";

const PAGE_SIZE_DESKTOP = 3;
const SLIDE_MS = 10000;

// Today's date has to be read in the browser, otherwise a static build would
// freeze it and events would never move from upcoming to past. The snapshot
// is truncated to day-granularity on purpose: React re-invokes getSnapshot
// after every commit to check for consistency, and a millisecond-precision
// value (e.g. raw Date.now()) never matches between those calls — that
// mismatch forces another re-render every time, looping forever. Truncated
// to a day, it's stable except right at midnight.
const subscribe = () => () => {};
function getTodaySnapshot(): number {
  return startOfToday(Date.now());
}
function useToday(fallback: number) {
  return useSyncExternalStore(subscribe, getTodaySnapshot, () => startOfToday(fallback));
}

// Below the `md` breakpoint, page one event at a time instead of three —
// matches Tailwind's `md:grid-cols-3` used for the card grid itself. Starts
// at the desktop count (matching SSR) and corrects after mount.
function useItemsPerPage() {
  const [n, setN] = useState(PAGE_SIZE_DESKTOP);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setN(mq.matches ? PAGE_SIZE_DESKTOP : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return n;
}

function startOfToday(now: number): number {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function chunk<T>(arr: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < arr.length; i += size) pages.push(arr.slice(i, i + size));
  return pages;
}

function EventCard({ e }: { e: EventItem }) {
  const accent = e.color as c.Accent;
  return (
    <article className={`overflow-hidden rounded-[24px] border-2 border-line bg-white ${c.borderTop[accent]} border-t-[6px]`}>
      <div className={`px-6 py-5 ${c.bg[accent]} ${c.onColorText[accent]}`}>
        <div className="font-fred text-lg font-bold">{formatEventDate(e.date)}</div>
      </div>
      <div className="p-6">
        <h2 className="font-fred text-xl font-bold text-navy">{e.title}</h2>
        <p className="mt-2 leading-relaxed text-ink-soft">{e.desc}</p>
      </div>
    </article>
  );
}

// Pages through `items` `perPage` at a time (one on mobile, three from `md`
// up), auto-advancing every 10s once there's more than one page. The parent
// remounts this via `key` on both `tab` and `perPage` changes, so paging
// always restarts at 0 rather than carrying over an index that may not
// exist in the new list.
function EventsPager({
  items,
  perPage,
  emptyMessage,
}: {
  items: EventItem[];
  perPage: number;
  emptyMessage: string;
}) {
  const pages = chunk(items, perPage);
  const pageCount = pages.length;
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (pageCount <= 1) return;
    const t = setInterval(() => setPage((p) => (p + 1) % pageCount), SLIDE_MS);
    return () => clearInterval(t);
  }, [pageCount]);

  if (pageCount === 0) {
    return (
      <p className="rounded-[24px] border-2 border-line bg-white p-8 text-center leading-relaxed text-ink-soft">
        {emptyMessage}
      </p>
    );
  }

  const active = pages[page] ?? [];

  return (
    <div>
      <div key={page} className="grid animate-fade-in gap-5 md:grid-cols-3">
        {active.map((e) => (
          <EventCard key={e.title} e={e} />
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show page ${i + 1}`}
              aria-current={i === page}
              onClick={() => setPage(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === page ? "w-7 bg-sky" : "w-2.5 bg-line hover:bg-sky/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function EventsGridSlideshow({
  events,
  nowFallback,
}: {
  events: EventItem[];
  nowFallback: number;
}) {
  const today = useToday(nowFallback);
  const perPage = useItemsPerPage();

  const upcoming = events
    .filter((e) => eventStartOfDay(e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = events
    .filter((e) => eventStartOfDay(e.date) < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const groups = { upcoming, past };

  return (
    <div>
      <div className="flex justify-center gap-2">
        {(["upcoming", "past"] as const).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            aria-current={tab === id}
            className={`rounded-full px-5 py-2 font-fred text-sm font-bold capitalize transition-colors ${
              tab === id ? "bg-navy text-white" : "bg-mist text-ink-soft hover:bg-line"
            }`}
          >
            {id} ({groups[id].length})
          </button>
        ))}
      </div>

      <div className="mt-8">
        <EventsPager
          key={`${tab}-${perPage}`}
          items={groups[tab]}
          perPage={perPage}
          emptyMessage={
            tab === "upcoming"
              ? "More events coming soon — check back for what's next."
              : "No past events yet."
          }
        />
      </div>
    </div>
  );
}
