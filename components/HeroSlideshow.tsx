"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDE_MS = 5000;

export function HeroSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), SLIDE_MS);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <Image
      key={images[index]}
      src={images[index]}
      alt={alt}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 560px"
      className="animate-fade-in object-cover"
    />
  );
}