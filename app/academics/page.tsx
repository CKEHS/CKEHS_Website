import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections";
import { LevelTabs } from "@/components/LevelTabs";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "From crèche to senior secondary, Creative Kids Academy blends Montessori with the Nigerian and British curricula — preparing children for BECE, WAEC and NECO with creativity at the core.",
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
            Pick a stage to see how we help children thrive at every age — with a
            curriculum that keeps creativity at the heart of strong academics.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <Suspense fallback={<div className="h-96" />}>
          <LevelTabs />
        </Suspense>
      </Container>

      <CtaBand
        title="Find the right stage for your child"
        text="Not sure where your child fits? Our team will happily guide you."
        cta="Talk to admissions"
        href="/admissions"
      />
    </>
  );
}
