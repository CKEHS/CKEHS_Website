"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { events } from "@/lib/content";
import { formatEventDate, eventStartOfDay } from "@/lib/dates";
import * as c from "@/lib/colors";

// Today's date has to be read in the browser, otherwise a static build would
// freeze it and events would never expire. The snapshot is truncated to
// day-granularity on purpose: React re-invokes getSnapshot after every
// commit to check for consistency, and a millisecond-precision value (e.g.
// raw Date.now()) never matches between those calls — that mismatch forces
// another re-render every time, looping forever. Truncated to a day, it's
// stable except right at midnight.
const subscribe = () => () => {};
function startOfToday(now: number): number {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}
function getTodaySnapshot(): number {
  return startOfToday(Date.now());
}
function useToday(fallback: number) {
  return useSyncExternalStore(subscribe, getTodaySnapshot, () => startOfToday(fallback));
}

const cardShell =
  "grid overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_12px_34px_rgba(18,40,75,0.08)] md:grid-cols-2";
const imgWrap = "relative aspect-[16/10] md:aspect-auto md:min-h-[320px]";
const bodyWrap = "flex flex-col justify-center p-8 sm:p-10";
const linkCls = "mt-5 w-fit font-fred font-semibold text-sky transition-colors hover:text-navy";

export function EventsCarousel({ nowFallback }: { nowFallback: number }) {
  const today = useToday(nowFallback);

  // Only events today or later, soonest first.
  const upcoming = events
    .filter((e) => eventStartOfDay(e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  const count = upcoming.length;
  const [index, setIndex] = useState(0);
  const active = count ? index % count : 0;

  // Auto-advance while there's more than one event.
  useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  if (count === 0) {
    return (
      <div className={cardShell}>
        <div className={imgWrap}>
          <Image
            src="/photos/assembly.jpg"
            alt="Creative Kids pupils at a school gathering"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className={bodyWrap}>
          <span className="inline-flex w-fit rounded-full bg-powder px-4 py-1.5 text-[13px] font-extrabold text-sky">
            Events
          </span>
          <h3 className="mt-4 font-fred text-2xl font-bold text-navy sm:text-3xl">
            More events coming soon
          </h3>
          <p className="mt-3 leading-relaxed text-ink-soft">
            We&rsquo;re busy planning our next Open Day, exhibitions and family
            gatherings. In the meantime, take a look back at what we&rsquo;ve
            been up to.
          </p>
          <Link href="/news" className={linkCls}>
            See past events →
          </Link>
        </div>
      </div>
    );
  }

  const ev = upcoming[active];
  const accent = ev.color as c.Accent;

  return (
    <div>
      <div className={cardShell}>
        <div className={imgWrap}>
          {/* key forces a fresh fade as the slide changes */}
          <Image
            key={ev.image}
            src={ev.image}
            alt={ev.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="animate-fade-up object-cover"
          />
        </div>
        <div className={bodyWrap}>
          <span
            className={`inline-flex w-fit rounded-full px-4 py-1.5 text-[13px] font-extrabold ${c.bg[accent]} ${c.onColorText[accent]}`}
          >
            {formatEventDate(ev.date)}
          </span>
          <h3 className="mt-4 font-fred text-2xl font-bold text-navy sm:text-3xl">
            {ev.title}
          </h3>
          <p className="mt-3 leading-relaxed text-ink-soft">{ev.desc}</p>
          <Link href="/news" className={linkCls}>
            See all events →
          </Link>
        </div>
      </div>

      {count > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {upcoming.map((e, i) => (
            <button
              key={e.date}
              type="button"
              aria-label={`Show ${e.title}`}
              aria-current={i === active}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === active ? "w-7 bg-sky" : "w-2.5 bg-line hover:bg-sky/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
