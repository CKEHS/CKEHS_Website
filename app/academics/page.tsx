import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import {
  Store,
  Languages,
  Bot,
  Music,
  Trophy,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections";
import { LevelTabs } from "@/components/LevelTabs";
import { activities } from "@/lib/content";
import * as c from "@/lib/colors";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "From crèche to senior secondary, Creative Kids Academy blends Montessori with the Nigerian and British curricula — preparing children for BECE, WAEC and NECO with creativity at the core.",
};

const activityIcon: Record<string, LucideIcon> = {
  Store,
  Languages,
  Bot,
  Music,
  Trophy,
  FlaskConical,
};

export default function AcademicsPage() {
  return (
    <>
      <section className="bg-powder py-14">
        <Container className="max-w-3xl text-center">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-sky">
            Programmes
          </span>
          <h1 className="mt-3 font-fred text-4xl font-bold text-navy sm:text-5xl">
            From first steps to final exams
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            A curriculum that grows with your child — from crèche right through to
            senior secondary, with creativity at the heart of strong academics.
          </p>
        </Container>
      </section>

      {/* Our approach */}
      <section className="py-16">
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
              strong academics, we teach the skills that build character and solve
              real-life problems — which is why so many of our little ones are
              joining words by age three.
            </p>
          </div>
          <div className="relative min-w-[280px] flex-1 basis-[320px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_18px_44px_rgba(18,40,75,0.16)]">
              <Image
                src="/photos/academics-approach.jpg"
                alt="Pupils and their teacher during a hands-on learning activity at Creative Kids Academy"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Stages */}
      <section className="bg-mist py-16">
        <Container>
          <SectionHeading
            eyebrow="Our stages"
            title="A programme for every age"
            intro="Pick a stage to see how we help children thrive at each step of the journey."
          />
          <div className="mt-10">
            <Suspense fallback={<div className="h-96" />}>
              <LevelTabs />
            </Suspense>
          </div>
        </Container>
      </section>

      {/* Activities */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Beyond the classroom"
            title="Clubs & activities"
            intro="Learning at Creative Kids reaches well beyond lessons — these activities are part of every child's education."
          />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => {
              const Icon = activityIcon[a.icon];
              const accent = a.color as c.Accent;
              return (
                <div
                  key={a.name}
                  className="rounded-[24px] border border-[#eef5fb] bg-white p-7 shadow-[0_10px_30px_rgba(18,40,75,0.06)]"
                >
                  <div
                    className={`flex items-center justify-center rounded-2xl ${c.bg[accent]}`}
                    style={{ height: "3.25rem", width: "3.25rem" }}
                  >
                    <Icon className={`h-6 w-6 ${c.onColorText[accent]}`} strokeWidth={2.2} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-fred text-xl font-bold text-navy">{a.name}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Find the right stage for your child"
        text="Not sure where your child fits? Our team will happily guide you."
        cta="Talk to admissions"
        href="/admissions"
      />
    </>
  );
}
