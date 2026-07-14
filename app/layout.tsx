import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Creative Kids Academy is a nursery-to-secondary school in Kubwa, Abuja, nurturing curious, confident children from age two through WAEC — a warm, creative environment where every child is known by name.",
  keywords: [
    "Creative Kids Academy",
    "school in Kubwa",
    "school in Abuja",
    "nursery Abuja",
    "primary school Abuja",
    "secondary school Kubwa",
    "Montessori Abuja",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "A nurturing, creative nursery-to-secondary school in Kubwa, Abuja.",
    url: site.url,
    siteName: site.name,
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
