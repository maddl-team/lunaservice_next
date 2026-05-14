import type { Metadata } from "next";
import { ChiSiamoPageBody } from "@/components/luna/chi-siamo/sections";

export const metadata: Metadata = {
  title: "Chi Siamo | Luna Service — Impresa di Pulizie Professionali a Roma",
  description:
    "Luna Service è l'impresa di pulizie professionali a Roma specializzata in hotel, strutture ricettive e condomini. Scopri chi siamo, come lavoriamo e perché ci scelgono.",
  alternates: {
    canonical: "https://www.lunaservice.it/chi-siamo/",
  },
};

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
      streetAddress: "[indirizzo]",
      addressLocality: "Roma",
      addressRegion: "RM",
      postalCode: "[CAP]",
      addressCountry: "IT",
    },
    telephone: "[numero]",
    email: "[email]",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lunaservice.it/" },
      { "@type": "ListItem", position: 2, name: "Chi Siamo", item: "https://www.lunaservice.it/chi-siamo/" },
    ],
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <ChiSiamoPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
