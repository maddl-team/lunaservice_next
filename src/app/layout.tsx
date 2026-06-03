import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  variable: "--font-luna-sans",
  subsets: ["latin"],
});

/** Titoli: Plus Jakarta Sans (mappato su `font-serif` in Tailwind / globals) */
const display = Plus_Jakarta_Sans({
  variable: "--font-luna-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-luna-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luna Service — Pulizie professionali per hotel a Roma",
    template: "%s",
  },
  description:
    "Impresa di pulizie a Roma specializzata in hotel, B&B, case vacanza e condomini. Squadre dedicate, intervento entro 24h, preventivo gratuito.",
  openGraph: {
    siteName: "Luna Service",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
