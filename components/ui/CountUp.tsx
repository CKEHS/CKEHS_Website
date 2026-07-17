"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1400;

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// Renders `end` immediately (so no-JS / pre-hydration paint shows the real
// number, matching SSR output). Once scrolled into view, resets to 0 and
// counts back up — the animation is a client-side enhancement, not load-bearing.
export function CountUp({
  end,
  prefix = "",
  suffix = "",
}: {
  end: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(end);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame: number;
    const step = (start: number, now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      setValue(Math.round(end * easeOutExpo(t)));
      if (t < 1) frame = requestAnimationFrame((n) => step(start, n));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setValue(0);
        frame = requestAnimationFrame((start) => step(start, start));
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
