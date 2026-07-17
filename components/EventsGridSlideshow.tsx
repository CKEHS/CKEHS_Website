"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { EventItem } from "@/lib/content";
import { formatEventDate, eventStartOfDay } from "@/lib/dates";
import * as c from "@/lib/colors";

const PAGE_SIZE = 3;
const SLIDE_MS = 10000;

// "Now" has to be read in the browser, otherwise a static build would freeze
// today's date and events would never move from upcoming to past.
// useSyncExternalStore keeps SSR (using the build-time `fallback`) hydration-safe.
const subscribe = () => () => {};
function useNow(fallback: number) {
  return useSyncExternalStore(subscribe, () => Date.now(), () => fallback);
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

// Pages through `items` three at a time, auto-advancing every 10s once
// there are more than three. Mounting with a fresh `key` (see the `tab`
// switch below) restarts paging at 0 rather than carrying over an index
// that may not exist in the new list.
function EventsPager({ items, emptyMessage }: { items: EventItem[]; emptyMessage: string }) {
  const pages = chunk(items, PAGE_SIZE);
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
  const now = useNow(nowFallback);
  const today = startOfToday(now);

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
          key={tab}
          items={groups[tab]}
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
