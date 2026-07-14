import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections";
import { events } from "@/lib/content";
import * as c from "@/lib/colors";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "What's happening at Creative Kids Academy — Open Day, the Robotics & Art Exhibition, the Parents–Teachers Forum and more.",
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-powder py-14">
        <Container className="max-w-2xl text-center">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-sky">
            What&rsquo;s on
          </span>
          <h1 className="mt-3 font-fred text-4xl font-bold text-navy sm:text-5xl">
            News &amp; events
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            There&rsquo;s always something happening at Creative Kids. Here&rsquo;s
            what&rsquo;s coming up on the calendar.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((e) => {
            const accent = e.color as c.Accent;
            return (
              <article
                key={e.title}
                className={`overflow-hidden rounded-[24px] border-2 border-line bg-white ${c.borderTop[accent]} border-t-[6px]`}
              >
                <div className={`px-6 py-5 ${c.bg[accent]} ${c.onColorText[accent]}`}>
                  <div className="font-fred text-lg font-bold">{e.date}</div>
                </div>
                <div className="p-6">
                  <h2 className="font-fred text-xl font-bold text-navy">{e.title}</h2>
                  <p className="mt-2 leading-relaxed text-ink-soft">{e.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>

      {/* Results portal callout */}
      <Container className="pb-16">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-mist p-8 sm:p-10">
          <div>
            <SectionHeading
              center={false}
              eyebrow="For parents"
              title="Check your child's results online"
            />
            <p className="mt-3 max-w-lg text-ink-soft">
              Termly reports and results are available any time through our Edves
              parent portal.
            </p>
          </div>
          <ButtonLink
            href="https://ckehs.edves.net/parents/"
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open results portal
          </ButtonLink>
        </div>
      </Container>

      <CtaBand
        title="Don't miss what's next"
        text="Follow us or get in touch to stay up to date with school life."
        cta="Contact us"
        href="/contact"
      />
    </>
  );
}
