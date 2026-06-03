import { ContattiPageBody } from "@/components/luna/contatti/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { sitePhoneE164 } from "@/lib/contact";

export const metadata = createPageMetadata({
  title: "Contatti | Luna Service — Impresa di Pulizie Roma",
  description:
    "Contatta Luna Service per un preventivo gratuito sulle pulizie professionali a Roma. Rispondiamo entro poche ore. Disponibili anche su WhatsApp.",
  path: "/contatti/",
});
export default function ContattiPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Luna Service",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${sitePhoneE164}`,
      contactType: "customer service",
      availableLanguage: "Italian",
      areaServed: "Roma",
    },
  };

  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/contatti/"]);

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <ContattiPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
