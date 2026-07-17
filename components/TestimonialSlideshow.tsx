"use client";

import { useEffect, useState } from "react";
import * as c from "@/lib/colors";
import type { Testimonial } from "@/lib/content";

const SLIDE_MS = 7000;
const bg = ["bg-powder", "bg-[#fff6d6]", "bg-[#e7f7ee]"];
const avatar: c.Accent[] = ["sky", "sun", "mint"];

export function TestimonialSlideshow({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const t = testimonials[index];

  return (
    <div className="mx-auto mt-11 max-w-2xl">
      <figure key={t.name} className={`animate-fade-in rounded-[24px] p-8 sm:p-10 ${bg[index % bg.length]}`}>
        <div className="font-fred text-5xl leading-none text-sun" style={{ height: 22 }}>
          &ldquo;
        </div>
        <blockquote className="mt-3 text-lg font-semibold leading-relaxed text-navy">{t.quote}</blockquote>
        <figcaption className="mt-5 flex items-center gap-3">
          <span
            className={`flex h-11 w-11 flex-none items-center justify-center rounded-full font-fred text-lg font-bold ${c.bg[avatar[index % avatar.length]]} ${c.onColorText[avatar[index % avatar.length]]}`}
          >
            {t.initial}
          </span>
          <span>
            <span className="block font-fred font-bold text-navy">{t.name}</span>
            <span className="block text-xs font-bold text-ink-soft">{t.role}</span>
          </span>
        </figcaption>
      </figure>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((tm, i) => (
          <button
            key={tm.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial from ${tm.name}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-sky" : "w-2.5 bg-[#dbe7f3]"}`}
          />
        ))}
      </div>
    </div>
  );
}
