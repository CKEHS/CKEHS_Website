import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Section";
import { ValueCards, CtaBand } from "@/components/sections";
import * as c from "@/lib/colors";
import { timeline, staff, clubs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Since 2008, Creative Kids Academy has grown from four toddlers into a full nursery-to-secondary school in Kubwa, Abuja — blending Montessori with the Nigerian and British curricula.",
};

const pillars = [
  {
    title: "Our mission",
    body: "To identify and grow every child's innate abilities, raising confident, creative learners who love discovering the world — and are ready for whatever comes next.",
    className: "bg-sky text-white",
    sub: "text-powder",
  },
  {
    title: "Our vision",
    body: "To build future leaders with creative minds — unlocking the excellence inherent in every child.",
    className: "bg-sun text-navy",
    sub: "text-navy/80",
  },
  {
    title: "Our promise",
    body: "Small classes, caring teachers, and a safe, joyful campus your family can trust every single day.",
    className: "bg-navy text-white",
    sub: "text-powder/90",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-powder py-16">
        <Container className="max-w-3xl text-center">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-sky">
            Our story
          </span>
          <h1 className="mt-3 font-fred text-4xl font-bold text-navy sm:text-5xl">
            Learning that feels like play
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Since {site.founded}, Creative Kids has grown from a small class of
            four toddlers into a full nursery-to-secondary school — but our
            belief hasn&rsquo;t changed: children learn best when they&rsquo;re
            happy, safe and free to be curious. Our curriculum and programmes are
            designed to identify and grow each child&rsquo;s innate abilities
            while immersing them in a rich culture of learning.
          </p>
        </Container>
      </section>

      {/* Mission / vision / promise */}
      <Container className="grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className={`rounded-[26px] p-8 ${p.className}`}>
            <div className="font-fred text-2xl font-bold">{p.title}</div>
            <p className={`mt-3 leading-relaxed ${p.sub}`}>{p.body}</p>
          </div>
        ))}
      </Container>

      {/* Approach + image */}
      <section className="bg-mist py-16">
        <Container className="flex flex-wrap items-center gap-12">
          <div className="flex-1 basis-[320px]">
            <SectionHeading
              center={false}
              eyebrow="Our approach"
              title="Montessori roots, world-class curriculum"
            />
            <p className="mt-4 leading-relaxed text-ink-soft">
              We blend the Montessori method with the Nigerian and British
              (Cambridge) curricula for children aged two to seventeen. Alongside
              strong academics, we teach the skills that build character and
              solve real-life problems — which is why so many of our little ones
              are joining words by age three.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {clubs.map((club) => (
                <li key={club} className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-mint text-xs font-bold text-white">
                    ✓
                  </span>
                  <span className="font-semibold text-navy">{club}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-w-[280px] flex-1 basis-[320px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_18px_44px_rgba(18,40,75,0.16)]">
              <Image
                src="/photos/about-approach.jpg"
                alt="A teacher working closely with pupils at Creative Kids Academy"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <Container className="py-16">
        <SectionHeading eyebrow="Our journey" title="How we grew" />
        <ol className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((m, i) => {
            const accent = (["coral", "sun", "mint", "sky"] as c.Accent[])[i % 4];
            return (
              <li key={m.year} className="rounded-[24px] border-2 border-line bg-white p-6">
                <div className={`inline-flex rounded-full px-4 py-1.5 font-fred text-lg font-bold ${c.bg[accent]} ${c.onColorText[accent]}`}>
                  {m.year}
                </div>
                <h3 className="mt-3 font-fred text-lg font-bold text-navy">{m.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{m.desc}</p>
              </li>
            );
          })}
        </ol>
      </Container>

      {/* Staff */}
      <section className="bg-mist py-16">
        <Container>
          <SectionHeading eyebrow="Our people" title="Meet the team" />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((s) => (
              <div key={s.name} className="flex items-center gap-4 rounded-[22px] bg-white p-5 shadow-[0_8px_24px_rgba(18,40,75,0.06)]">
                <span className={`flex h-14 w-14 flex-none items-center justify-center rounded-2xl font-fred text-2xl font-bold ${c.bg[s.color as c.Accent]} ${c.onColorText[s.color as c.Accent]}`}>
                  {s.initial}
                </span>
                <span>
                  <span className="block font-fred text-lg font-bold text-navy">{s.name}</span>
                  <span className="block text-sm font-bold text-ink-soft">{s.role}</span>
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <Container className="py-16">
        <SectionHeading eyebrow="What we stand for" title="Our values" />
        <div className="mt-11">
          <ValueCards />
        </div>
      </Container>

      <CtaBand
        title="Ready to join the family?"
        text="We'd love to show you around and introduce your child to their new school."
        cta="Start your application"
        href="/admissions"
      />
    </>
  );
}
