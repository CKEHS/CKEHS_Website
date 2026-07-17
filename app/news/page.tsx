import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections";
import { EventsGridSlideshow } from "@/components/EventsGridSlideshow";
import { events } from "@/lib/content";

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
        <EventsGridSlideshow events={events} nowFallback={new Date().getTime()} />
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
