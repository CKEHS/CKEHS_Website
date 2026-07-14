import Link from "next/link";
import { nav, site } from "@/lib/site";
import { CurrentYear } from "@/components/ui/DynamicYear";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-navy px-5 pb-8 pt-14 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1100px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <span className="inline-flex rounded-2xl bg-white px-4 py-3">
            <Logo variant="dark" className="h-10 w-auto" />
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-powder/90">
            Nurturing joyful, curious learners in Kubwa, Abuja since {site.founded}.
            Crèche through senior secondary.
          </p>
        </div>

        <div>
          <div className="mb-4 font-fred text-[15px] font-bold text-sun">Explore</div>
          <ul className="flex flex-col gap-2.5 text-sm font-semibold text-powder/90">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-4 font-fred text-[15px] font-bold text-sun">Get in touch</div>
          <ul className="flex flex-col gap-2.5 text-sm font-semibold text-powder/90">
            <li>{site.address.line}</li>
            <li>{site.address.city}</li>
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="hover:text-white">
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.emails.primary}`} className="hover:text-white">
                {site.emails.primary}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-4 font-fred text-[15px] font-bold text-sun">Quick links</div>
          <ul className="flex flex-col gap-2.5 text-sm font-semibold text-powder/90">
            <li>
              <a href={site.resultsPortal} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Check results portal
              </a>
            </li>
            <li>
              <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1100px] border-t border-white/15 pt-6 text-center text-[13px] text-powder/70">
        © <CurrentYear fallback={new Date().getFullYear()} /> {site.name} · Made with care in Kubwa, Abuja
      </div>
    </footer>
  );
}
