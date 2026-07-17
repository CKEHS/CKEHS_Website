"use client";

import { useEffect, useRef, useState } from "react";

// Scales an element in from 75% as it scrolls into view, once. `delay` lets
// callers stagger a sequence (e.g. timeline steps) so they zoom in one after
// another rather than all at once.
export function RevealZoom({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-500 ease-out motion-reduce:transition-none ${visible ? "scale-100 opacity-100" : "scale-75 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
