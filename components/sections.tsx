import Link from "next/link";
import {
  Baby,
  Shapes,
  BookOpen,
  FlaskConical,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { YearsSince } from "@/components/ui/DynamicYear";
import * as c from "@/lib/colors";
import { stats, values, testimonials, phases, type PhaseId } from "@/lib/content";

// One icon per school stage, shown in the phase card's coloured tile.
const phaseIcon: Record<PhaseId, LucideIcon> = {
  creche: Baby,
  nursery: Shapes,
  primary: BookOpen,
  junior: FlaskConical,
  senior: GraduationCap,
};

// Coloured icon tile (52px), text colour picked for contrast on its accent.
function Tile({ accent, children }: { accent: c.Accent; children: React.ReactNode }) {
  return (
    <div className={`flex h-13 w-13 items-center justify-center rounded-2xl ${c.bg[accent]}`} style={{ height: "3.25rem", width: "3.25rem" }}>
      <span className={`font-fred text-2xl font-bold ${c.onColorText[accent]}`}>{children}</span>
    </div>
  );
}

export function StatBand() {
  return (
    <Container className="py-14">
      <div className="relative grid gap-8 overflow-hidden rounded-[32px] bg-navy px-6 py-11 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-sky/30" />
        <div className="pointer-events-none absolute -bottom-12 left-[10%] h-28 w-28 rounded-full bg-sun/20" />
        {stats.map((s) => (
          <div key={s.label} className="relative z-10 text-center">
            <div className="font-fred text-4xl font-bold leading-none text-sun sm:text-5xl">
              {s.sinceYear ? (
                <YearsSince since={s.sinceYear} fallback={new Date().getFullYear()} />
              ) : (
                s.num
              )}
            </div>
            <div className="mt-2 text-[15px] font-bold text-powder">{s.label}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export function ValueCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((v) => (
        <div key={v.title} className="rounded-[24px] border border-[#eef5fb] bg-white p-7 shadow-[0_10px_30px_rgba(18,40,75,0.06)]">
          <Tile accent={v.color as c.Accent}>{v.mark}</Tile>
          <h3 className="mt-4 font-fred text-xl font-bold text-navy">{v.title}</h3>
          <p className="mt-2 leading-relaxed text-ink-soft">{v.desc}</p>
        </div>
      ))}
    </div>
  );
}

const testiBg = ["bg-powder", "bg-[#fff6d6]", "bg-[#e7f7ee]"];
const testiAvatar: c.Accent[] = ["sky", "sun", "mint"];

export function Testimonials() {
  return (
    <Container className="py-16">
      <SectionHeading eyebrow="Loved by parents" title="Words from our families" />
      <div className="mt-11 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={t.name} className={`rounded-[24px] p-7 ${testiBg[i % 3]}`}>
            <div className="font-fred text-5xl leading-none text-sun" style={{ height: 22 }}>
              &ldquo;
            </div>
            <blockquote className="mt-3 font-semibold leading-relaxed text-navy">{t.quote}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-full font-fred text-lg font-bold ${c.bg[testiAvatar[i % 3]]} ${c.onColorText[testiAvatar[i % 3]]}`}>
                {t.initial}
              </span>
              <span>
                <span className="block font-fred font-bold text-navy">{t.name}</span>
                <span className="block text-xs font-bold text-ink-soft">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}

export function PhaseCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {phases.map((p) => {
        const Icon = phaseIcon[p.id];
        const accent = p.color as c.Accent;
        return (
        <Link
          key={p.id}
          href={`/academics?stage=${p.id}`}
          className={`group rounded-[24px] border-2 border-[#eef5fb] bg-white p-6 shadow-[0_10px_26px_rgba(18,40,75,0.06)] transition-transform hover:-translate-y-2 border-t-[6px] ${c.borderTop[accent]}`}
        >
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.bg[accent]}`}>
            <Icon className={`h-6 w-6 ${c.onColorText[accent]}`} strokeWidth={2.2} aria-hidden />
          </div>
          <h3 className="mt-4 font-fred text-xl font-bold text-navy">{p.name}</h3>
          <div className="mt-1 text-[13px] font-bold text-ink-soft">{p.age}</div>
          <div className="mt-3 text-[13px] font-extrabold text-sky">Explore →</div>
        </Link>
        );
      })}
    </div>
  );
}

export function CtaBand({
  title = "Come see the magic for yourself",
  text = "Book a campus tour and meet the teachers who'll help your child shine.",
  cta = "Book a visit",
  href = "/contact",
}: {
  title?: string;
  text?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <Container className="py-6 pb-20">
      <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-sky to-navy px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute left-[8%] top-6 h-20 w-20 rounded-full bg-sun/50" />
        <div className="pointer-events-none absolute bottom-5 right-[10%] h-12 w-12 rounded-full bg-coral/60" />
        <h2 className="relative z-10 font-fred text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="relative z-10 mx-auto mt-4 max-w-lg text-lg text-powder">{text}</p>
        <ButtonLink href={href} variant="accent" size="lg" className="relative z-10 mt-7">
          {cta}
        </ButtonLink>
      </div>
    </Container>
  );
}
