"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { phases, type PhaseId } from "@/lib/content";
import * as c from "@/lib/colors";

export function LevelTabs() {
  const params = useSearchParams();
  const initial = (params.get("stage") as PhaseId) || "primary";
  const start = phases.some((p) => p.id === initial) ? initial : "primary";
  const [active, setActive] = useState<PhaseId>(start);

  const cur = phases.find((p) => p.id === active) ?? phases[2];
  const accent = cur.color as c.Accent;

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {phases.map((p) => {
          const on = p.id === active;
          const a = p.color as c.Accent;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p.id)}
              aria-pressed={on}
              className={`cursor-pointer rounded-full border-2 px-5 py-2.5 font-fred text-[15px] font-semibold transition-colors ${
                on
                  ? `${c.bg[a]} ${c.border[a]} ${c.onColorText[a]}`
                  : "border-line bg-white text-ink hover:border-sky"
              }`}
            >
              {p.name}
            </button>
          );
        })}
      </div>

      {/* Detail */}
      <div className="mt-9 flex flex-wrap items-stretch gap-9 rounded-[32px] bg-mist p-6 sm:p-10">
        <div className="flex-1 basis-[300px]">
          <span className={`inline-block rounded-full px-4 py-1.5 text-[13px] font-extrabold tracking-wide ${c.bg[accent]} ${c.onColorText[accent]}`}>
            {cur.age}
          </span>
          <h2 className="mt-4 font-fred text-3xl font-bold text-navy sm:text-4xl">{cur.name}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{cur.desc}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {cur.points.map((pt) => (
              <li key={pt} className="flex items-start gap-3">
                <span className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full text-[13px] font-bold ${c.bg[accent]} ${c.onColorText[accent]}`}>
                  ✓
                </span>
                <span className="font-semibold leading-snug text-ink">{pt}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`/admissions?stage=${cur.id}`}
            className="mt-7 inline-flex rounded-full bg-sky px-7 py-3.5 font-fred font-semibold text-white shadow-[0_5px_0_var(--color-sky-700)] transition-transform active:translate-y-1 active:shadow-none"
          >
            Apply for {cur.short}
          </Link>
        </div>

        <div className="min-w-[280px] flex-1 basis-[300px]">
          <div className="relative aspect-square overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_18px_44px_rgba(18,40,75,0.16)]">
            <Image
              src={cur.image}
              alt={cur.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
