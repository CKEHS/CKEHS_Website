"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-line bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center gap-4 px-5 py-3.5 sm:px-6">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo priority className="h-10 w-auto sm:h-12" />
        </Link>

        {/* Desktop links */}
        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2.5 font-fred text-[15px] transition-colors hover:bg-powder ${
                isActive(item.href)
                  ? "bg-powder font-semibold text-navy"
                  : "font-medium text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/admissions" variant="accent" size="md" className="ml-2">
            Apply now
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-2xl border-2 border-line bg-white lg:hidden"
        >
          <span className="block h-[3px] w-5.5 rounded bg-navy" style={{ width: "1.375rem" }} />
          <span className="block h-[3px] rounded bg-sky" style={{ width: "1.375rem" }} />
          <span className="block h-[3px] rounded bg-sun" style={{ width: "1.375rem" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-1.5 border-t-2 border-line px-4 pb-4 pt-2 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3.5 text-left font-fred text-[17px] font-semibold ${
                isActive(item.href) ? "bg-powder text-navy" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href="/admissions"
            variant="accent"
            size="lg"
            className="mt-1.5 w-full"
            onClick={() => setOpen(false)}
          >
            Apply now
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
