import type { Metadata } from "next";
import { ContattiPageBody } from "@/components/luna/contatti/sections";

export const metadata: Metadata = {
  title: "Contatti | Luna Service — Impresa di Pulizie Roma",
  description:
    "Contatta Luna Service per un preventivo gratuito sulle pulizie professionali a Roma. Rispondiamo entro poche ore. Disponibili anche su WhatsApp.",
  alternates: {
    canonical: "https://www.lunaservice.it/contatti/",
  },
};

export default function ContattiPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Luna Service",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "[numero]",
      contactType: "customer service",
      availableLanguage: "Italian",
      areaServed: "Roma",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lunaservice.it/" },
      { "@type": "ListItem", position: 2, name: "Contatti", item: "https://www.lunaservice.it/contatti/" },
    ],
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <ContattiPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
