import type { Metadata } from "next";
import { Container } from "@/components/ui/Section";
import { EnquiryForm } from "@/components/EnquiryForm";
import { admissionSteps } from "@/lib/content";
import * as c from "@/lib/colors";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Joining Creative Kids Academy is easy. Enquire, visit, apply and get settled — our admissions team calls every family back within 24 hours.",
};

export default function AdmissionsPage() {
  return (
    <>
      <section className="bg-powder py-14">
        <Container className="max-w-2xl text-center">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-sky">
            Admissions
          </span>
          <h1 className="mt-3 font-fred text-4xl font-bold text-navy sm:text-5xl">
            Joining is easy as 1–2–3
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            We keep the process warm and simple — here&rsquo;s how it works.
          </p>
        </Container>
      </section>

      {/* Steps */}
      <Container className="pt-16">
        <ol className="grid gap-4 sm:grid-cols-3">
          {admissionSteps.map((s, i) => {
            const accent = (["sky", "sun", "coral"] as c.Accent[])[i % 3];
            return (
              <li key={s.n} className="rounded-[24px] border-2 border-line bg-white p-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl font-fred text-xl font-bold ${c.bg[accent]} ${c.onColorText[accent]}`}>
                  {s.n}
                </div>
                <h3 className="mt-4 font-fred text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </li>
            );
          })}
        </ol>
      </Container>

      {/* Form */}
      <Container className="max-w-2xl py-14 pb-24">
        <div className="rounded-[32px] border border-line bg-mist p-6 sm:p-10">
          <h2 className="font-fred text-2xl font-bold text-navy sm:text-3xl">
            Start your application
          </h2>
          <p className="mb-6 mt-2 text-ink-soft">
            Fill this in and our admissions team will call you within 24 hours.
          </p>
          <EnquiryForm kind="admissions" />
        </div>
      </Container>
    </>
  );
}
