import { ChiSiamoPageBody } from "@/components/luna/chi-siamo/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import {
  siteAddressLocality,
  siteAddressRegion,
  siteAddressStreet,
  siteEmail,
  sitePhoneE164,
  sitePostalCode,
} from "@/lib/contact";

export const metadata = createPageMetadata({
  title: "Chi Siamo | Luna Service — Impresa di Pulizie Professionali a Roma",
  description:
    "Luna Service è l'impresa di pulizie professionali a Roma specializzata in hotel, strutture ricettive e condomini. Scopri chi siamo, come lavoriamo e perché ci scelgono.",
  path: "/chi-siamo/",
});
export default function ChiSiamoPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    name: "Luna Service",
    description:
      "Impresa di pulizie professionali a Roma specializzata in hotel, strutture ricettive, condomini e interventi straordinari.",
    url: "https://www.lunaservice.it",
    logo: "https://www.lunaservice.it/images/logo.png",
    image: "https://www.lunaservice.it/images/team.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteAddressStreet,
      addressLocality: siteAddressLocality,
      addressRegion: siteAddressRegion,
      postalCode: sitePostalCode,
      addressCountry: "IT",
    },
    telephone: `+${sitePhoneE164}`,
    email: siteEmail,
    areaServed: {
      "@type": "City",
      name: "Roma",
    },
    sameAs: [
      "https://www.google.com/maps/[profilo GBP]",
      "[profilo Facebook]",
      "[profilo LinkedIn]",
    ],
  };

  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/chi-siamo/"]);

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <ChiSiamoPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
