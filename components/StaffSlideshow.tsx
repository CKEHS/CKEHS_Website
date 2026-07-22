"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import * as c from "@/lib/colors";
import type { Staff } from "@/lib/content";

const SLIDE_MS = 6000;
// Matches the Tailwind sm (640px) / lg (1024px) breakpoints used below. Below
// lg the team is paginated as a slideshow; at lg and up everyone shows at once.
function itemsPerViewFor(width: number, total: number) {
  if (width >= 1024) return total;
  if (width >= 640) return 2;
  return 1;
}

function useItemsPerView(total: number) {
  const [itemsPerView, setItemsPerView] = useState(() =>
    typeof window === "undefined" ? total : itemsPerViewFor(window.innerWidth, total)
  );

  useEffect(() => {
    const onResize = () => setItemsPerView(itemsPerViewFor(window.innerWidth, total));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [total]);

  return itemsPerView;
}

export function StaffSlideshow({ staff }: { staff: Staff[] }) {
  const itemsPerView = useItemsPerView(staff.length);

  const pages = useMemo(() => {
    const chunks: Staff[][] = [];
    for (let i = 0; i < staff.length; i += itemsPerView) {
      chunks.push(staff.slice(i, i + itemsPerView));
    }
    return chunks;
  }, [staff, itemsPerView]);

  const [page, setPage] = useState(0);

  // The slide layout changes at each breakpoint, so the page count changes too.
  useEffect(() => setPage(0), [itemsPerView]);

  useEffect(() => {
    if (pages.length < 2) return;
    const t = setInterval(() => setPage((p) => (p + 1) % pages.length), SLIDE_MS);
    return () => clearInterval(t);
  }, [pages.length]);

  const current = pages[page] ?? [];

  return (
    <div>
      <div key={page} className="flex animate-fade-up flex-wrap justify-center gap-5">
        {current.map((s) => (
          <div
            key={s.name}
            className="w-full shrink-0 grow-0 overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_8px_24px_rgba(18,40,75,0.06)] sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(25%-0.9375rem)]"
          >
            <div className="relative aspect-[4/5]">
              {s.photo ? (
                <Image src={s.photo} alt={s.name} fill sizes="(max-width:1024px) 50vw, 300px" className="object-cover object-top" />
              ) : (
                <div className={`flex h-full w-full items-center justify-center ${c.bg[s.color as c.Accent]}`}>
                  <span className={`font-fred text-5xl font-bold ${c.onColorText[s.color as c.Accent]}`}>{s.initial}</span>
                </div>
              )}
            </div>
            <div className="p-5">
              <div className="font-fred text-lg font-bold text-navy">{s.name}</div>
              <div className={`mt-0.5 text-sm font-bold ${c.text[s.color as c.Accent]}`}>{s.role}</div>
            </div>
          </div>
        ))}
      </div>

      {pages.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show team slide ${i + 1}`}
              aria-current={i === page}
              onClick={() => setPage(i)}
              className={`h-2.5 rounded-full transition-all ${i === page ? "w-7 bg-sky" : "w-2.5 bg-line hover:bg-sky/40"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}