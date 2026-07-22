import fs from "node:fs";
import path from "node:path";
import { Container, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import {
  StatBand,
  ValueCards,
  Testimonials,
  PhaseCards,
  CtaBand,
} from "@/components/sections";
import { EventsCarousel } from "@/components/EventsCarousel";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { site } from "@/lib/site";

const HERO_DIR = path.join(process.cwd(), "public/photos/hero");
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

function getHeroImages(): string[] {
  return fs
    .readdirSync(HERO_DIR)
    .filter((f) => IMAGE_EXT.test(f))
    .sort()
    .map((f) => `/photos/hero/${f}`);
}

export default function HomePage() {
  const heroImages = getHeroImages();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-powder">
        <div className="pointer-events-none absolute -left-10 -top-16 h-56 w-56 rounded-full bg-sky/60 opacity-60 animate-floaty" />
        <div
          className="pointer-events-none absolute -bottom-12 right-[8%] h-28 w-28 bg-sun/60 opacity-50 animate-floaty2"
          style={{ borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%" }}
        />
        <div className="pointer-events-none absolute right-[14%] top-10 h-6 w-6 rounded-full bg-coral opacity-70 animate-floaty" />

        <Container className="relative flex flex-wrap items-center gap-11 py-16 lg:py-20">
          <div className="animate-fade-up flex-1 basis-[380px]">
            <span className="inline-block rounded-full bg-white px-4 py-2 text-[13px] font-extrabold uppercase tracking-[0.1em] text-sky shadow-[0_4px_14px_rgba(18,40,75,0.08)]">
              Crèche · Nursery · Primary · Secondary
            </span>
            <h1 className="mt-5 font-fred text-4xl font-bold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
              Where creative minds <span className="text-sky">dream</span>,{" "}
              <span className="text-sun">explore</span> &amp;{" "}
              <span className="text-coral">lead</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              A nurturing environment for your child — a warm, creative learning
              home in Kubwa, Abuja, raising confident, curious children from age
              two through senior secondary.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <ButtonLink href="/admissions" variant="primary" size="lg">
                Enrol your child
              </ButtonLink>
              <ButtonLink href="/academics" variant="outline" size="lg">
                Explore programmes
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-w-[300px] flex-1 basis-[360px]">
            <div className="absolute left-4 top-4 h-full w-full rounded-[34px] bg-sun" />
            <div className="relative aspect-[3/2] overflow-hidden rounded-[34px] border-[6px] border-white shadow-[0_24px_50px_rgba(18,40,75,0.22)]">
              <HeroSlideshow images={heroImages} alt="Creative Kids Academy pupils" />
            </div>
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-[20px] bg-white px-5 py-3.5 shadow-[0_12px_30px_rgba(18,40,75,0.16)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7f7ee]">
                <span className="font-fred text-xl font-bold text-mint">★</span>
              </span>
              <span>
                <span className="block font-fred font-bold text-navy">
                  Since {site.founded}
                </span>
                <span className="block text-xs font-bold text-ink-soft">
                  of joyful learning
                </span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* PHASES */}
      <Container className="pb-4 pt-20">
        <SectionHeading
          eyebrow="One school, every stage"
          title="A place to belong at every age"
        />
        <div className="mt-10">
          <PhaseCards />
        </div>
      </Container>

      <StatBand />

      {/* EVENTS */}
      <Container className="py-16">
        <SectionHeading
          eyebrow="What's on"
          title="Happening at Creative Kids"
        />
        <div className="mt-10">
          <EventsCarousel nowFallback={new Date().getTime()} />
        </div>
      </Container>

      {/* VALUES */}
      <section className="bg-mist py-20">
        <Container>
          <SectionHeading
            eyebrow="Why families choose us"
            title="Big on care. Bigger on curiosity."
          />
          <div className="mt-11">
            <ValueCards />
          </div>
        </Container>
      </section>

      <Testimonials />

      <CtaBand />
    </>
  );
}
