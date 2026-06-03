import { HotelPageBody } from "@/components/luna/pulizie-hotel-roma/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { hotelPageContent } from "@/components/luna/pulizie-hotel-roma/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pulizie Hotel Roma | Servizio Professionale per Alberghi — Luna Service",
  description:
    "Impresa di pulizie per hotel a Roma con squadre dedicate, standard alberghieri professionali e calendario sincronizzato ai tuoi check-in. Preventivo gratuito con sopralluogo.",
  path: "/pulizie-hotel-roma/",
});
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

  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-hotel-roma/"]);

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
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <HotelPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
