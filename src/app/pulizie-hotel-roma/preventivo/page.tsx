import { PreventivoHotelRomaPageBody } from "@/components/luna/pulizie-hotel-roma/preventivo/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Preventivo Pulizie Hotel Roma | Gratuito e Senza Impegno — Luna Service",
  description:
    "Richiedi un preventivo gratuito per le pulizie del tuo hotel a Roma. Sopralluogo incluso, proposta personalizzata entro 48 ore. Nessun costo fisso, nessun impegno.",
  path: "/pulizie-hotel-roma/preventivo/",
});
export default function PreventivoPulizieHotelRomaPage() {
  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-hotel-roma/preventivo/"]);

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
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <PreventivoHotelRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
