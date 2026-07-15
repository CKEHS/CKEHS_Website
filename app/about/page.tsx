import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections";
import * as c from "@/lib/colors";
import { timeline, team, director } from "@/lib/content";
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

      {/* Director's message */}
      <section className="bg-mist py-16">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="A word from our Director" title="Welcome to Creative Kids" />
          <div className="mt-8 grid gap-6 md:grid-cols-[260px_1fr] md:items-start">
            {/* Portrait (her photo, or the crest as a branded placeholder) */}
            <div className="relative mx-auto aspect-[3/4] w-52 overflow-hidden rounded-[24px] border-[6px] border-white shadow-[0_14px_36px_rgba(18,40,75,0.16)] md:mx-0 md:w-full">
              {director.photo ? (
                <Image src={director.photo} alt={director.name} fill sizes="260px" className="object-cover object-top" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-navy p-6">
                  <Image src="/logo-white.png" alt="Creative Kids Academy" width={280} height={80} className="w-full" />
                </div>
              )}
            </div>

            {/* Message + signature */}
            <div className="rounded-[24px] border border-line bg-white p-7 shadow-[0_10px_30px_rgba(18,40,75,0.06)] sm:p-9">
              <div className="space-y-4 leading-relaxed text-ink-soft">
                {director.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-fred first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-sky"
                        : ""
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-6 border-t border-line pt-5">
                <div className="font-fred text-lg font-bold text-navy">{director.name}</div>
                <div className="text-sm font-bold text-sky">{director.role}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Our people"
            title="School Leadership Team"
            intro="Every staff member at Creative Kids plays a critical role in delivering our vision of excellent education."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((s) => (
              <div
                key={s.name}
                className="overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_8px_24px_rgba(18,40,75,0.06)]"
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
        </Container>
      </section>

      <CtaBand
        title="Ready to join the family?"
        text="We'd love to show you around and introduce your child to their new school."
        cta="Start your application"
        href="/admissions"
      />
    </>
  );
}
