import type { Metadata } from "next";
import { PreventivoHotelRomaPageBody } from "@/components/luna/pulizie-hotel-roma/preventivo/sections";

export const metadata: Metadata = {
  title: "Preventivo Pulizie Hotel Roma | Gratuito e Senza Impegno — Luna Service",
  description:
    "Richiedi un preventivo gratuito per le pulizie del tuo hotel a Roma. Sopralluogo incluso, proposta personalizzata entro 48 ore. Nessun costo fisso, nessun impegno.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-hotel-roma/preventivo/",
  },
};

export default function PreventivoPulizieHotelRomaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lunaservice.it/" },
      { "@type": "ListItem", position: 2, name: "Pulizie Hotel Roma", item: "https://www.lunaservice.it/pulizie-hotel-roma/" },
      { "@type": "ListItem", position: 3, name: "Preventivo", item: "https://www.lunaservice.it/pulizie-hotel-roma/preventivo/" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Preventivo Pulizie Hotel Roma",
    serviceType: "Preventivo pulizie hotel a Roma",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[#fbf9f3] text-[#161714]">
      <PreventivoHotelRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
