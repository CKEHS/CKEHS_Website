import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections";
import { gallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A peek into life at Creative Kids Academy — Cultural Day, sports, robotics, the arts and everyday learning in Kubwa, Abuja.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-powder py-14">
        <Container className="max-w-2xl text-center">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-sky">
            School life
          </span>
          <h1 className="mt-3 font-fred text-4xl font-bold text-navy sm:text-5xl">
            A peek into our days
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            From Cultural Day to the science lab — a glimpse of the joy, learning
            and community that make Creative Kids feel like home.
          </p>
        </Container>
      </section>

      <Container className="py-14">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g) => (
            <figure
              key={g.src}
              className={`group relative overflow-hidden rounded-[22px] border-[5px] border-white shadow-[0_12px_30px_rgba(18,40,75,0.1)] ${
                g.wide ? "col-span-2" : ""
              }`}
            >
              <Image
                src={g.src}
                alt={g.label}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent px-4 pb-3 pt-8 font-fred text-sm font-semibold text-white">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>

      <CtaBand
        title="Want to see it in person?"
        text="Book a visit and experience the Creative Kids atmosphere for yourself."
        cta="Book a visit"
        href="/contact"
      />
    </>
  );
}
