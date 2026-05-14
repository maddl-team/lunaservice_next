import type { Metadata } from "next";
import { AreeServitePageBody } from "@/components/luna/aree-servite/sections";

export const metadata: Metadata = {
  title: "Aree Servite a Roma | Impresa di Pulizie Luna Service — Zone e Quartieri",
  description:
    "Luna Service opera su tutta Roma e provincia: centro storico, quartieri residenziali e periferia. Scopri le zone coperte e richiedi il preventivo gratuito.",
  alternates: {
    canonical: "https://www.lunaservice.it/aree-servite/",
  },
};

export default function AreeServitePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Luna Service",
    areaServed: [
      { "@type": "City", name: "Roma" },
      { "@type": "AdministrativeArea", name: "Città Metropolitana di Roma Capitale" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lunaservice.it/" },
      { "@type": "ListItem", position: 2, name: "Aree Servite", item: "https://www.lunaservice.it/aree-servite/" },
    ],
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <AreeServitePageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
