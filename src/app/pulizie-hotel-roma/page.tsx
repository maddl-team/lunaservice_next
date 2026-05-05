import type { Metadata } from "next";
import { HotelPageBody } from "@/components/luna/pulizie-hotel-roma/sections";
import { hotelPageContent } from "@/components/luna/pulizie-hotel-roma/content";

export const metadata: Metadata = {
  title: "Pulizie Hotel Roma | Servizio Professionale per Alberghi — Luna Service",
  description:
    "Impresa di pulizie per hotel a Roma con squadre dedicate, standard alberghieri certificati e calendario sincronizzato ai tuoi check-in. Preventivo gratuito con sopralluogo.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-hotel-roma/",
  },
};

export default function PulizieHotelRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hotelPageContent.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lunaservice.it/" },
      { "@type": "ListItem", position: 2, name: "Pulizie Hotel Roma", item: "https://www.lunaservice.it/pulizie-hotel-roma/" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie Hotel Roma",
    serviceType: "Servizio professionale di pulizie per hotel",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[#fbf9f3] text-[#161714]">
      <HotelPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
