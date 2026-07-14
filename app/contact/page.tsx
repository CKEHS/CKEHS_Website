import type { Metadata } from "next";
import { Container } from "@/components/ui/Section";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";
import * as c from "@/lib/colors";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Visit Creative Kids Academy at Plot L182 Ellicot Citi Street, Kubwa Extension III, Abuja. Call, email or message us — our doors are always open to families.",
};

const cards = [
  {
    mark: "⌂",
    title: "Visit",
    accent: "sky" as c.Accent,
    lines: [site.address.line, site.address.city],
    sub: "Open Mon–Fri, 8:00am – 3:00pm",
  },
  {
    mark: "☎",
    title: "Call",
    accent: "sun" as c.Accent,
    lines: site.phones.map((p) => p.display),
    sub: "Admissions team, 8am – 3pm",
  },
  {
    mark: "✉",
    title: "Email",
    accent: "coral" as c.Accent,
    lines: [site.emails.primary, site.emails.secondary],
    sub: "We reply within 24 hours",
  },
];

const mapQuery = encodeURIComponent(
  `${site.address.line}, ${site.address.city}, ${site.address.country}`,
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-powder py-14">
        <Container className="max-w-2xl text-center">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-sky">
            Visit us
          </span>
          <h1 className="mt-3 font-fred text-4xl font-bold text-navy sm:text-5xl">
            Come say hello
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Our doors are always open to families. Reach out any way you like.
          </p>
        </Container>
      </section>

      {/* Contact cards */}
      <Container className="grid gap-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="rounded-[24px] border border-[#eef5fb] bg-white p-7 shadow-[0_10px_28px_rgba(18,40,75,0.07)]">
            <div className={`flex h-13 w-13 items-center justify-center rounded-2xl ${c.bg[card.accent]}`} style={{ height: "3.25rem", width: "3.25rem" }}>
              <span className={`font-fred text-2xl font-bold ${c.onColorText[card.accent]}`}>{card.mark}</span>
            </div>
            <h3 className="mt-4 font-fred text-lg font-bold text-navy">{card.title}</h3>
            {card.lines.map((line) => (
              <p key={line} className="font-semibold text-ink">{line}</p>
            ))}
            <p className="mt-1 text-[13px] text-ink-soft">{card.sub}</p>
          </div>
        ))}
      </Container>

      {/* WhatsApp + hours */}
      <Container className="grid gap-5 pb-14 lg:grid-cols-2">
        <div className="flex flex-col justify-center rounded-[28px] bg-[#e7f7ee] p-8">
          <h2 className="font-fred text-2xl font-bold text-navy">Prefer to chat?</h2>
          <p className="mt-2 max-w-md text-ink-soft">
            Message us on WhatsApp and we&rsquo;ll get right back to you — perfect
            for quick questions about admissions or a visit.
          </p>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-mint px-7 py-3.5 font-fred font-semibold text-white shadow-[0_5px_0_#279a5d] transition-transform active:translate-y-1 active:shadow-none"
          >
            Chat with us on WhatsApp
          </a>
        </div>

        <div className="rounded-[28px] border border-line bg-white p-8">
          <h2 className="font-fred text-2xl font-bold text-navy">Opening hours</h2>
          <ul className="mt-4 divide-y divide-line">
            {site.hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between py-3">
                <span className="font-fred font-semibold text-navy">{h.day}</span>
                <span className="text-ink-soft">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Map */}
      <Container className="pb-14">
        <div className="overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_16px_40px_rgba(18,40,75,0.12)]">
          <iframe
            title="Creative Kids Academy location"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>

      {/* Form */}
      <Container className="max-w-2xl pb-24">
        <div className="rounded-[32px] border border-line bg-mist p-6 sm:p-10">
          <h2 className="font-fred text-2xl font-bold text-navy sm:text-3xl">Send us a message</h2>
          <p className="mb-6 mt-2 text-ink-soft">
            Have a question? Drop us a note and we&rsquo;ll reply within 24 hours.
          </p>
          <EnquiryForm kind="enquiry" />
        </div>
      </Container>
    </>
  );
}
