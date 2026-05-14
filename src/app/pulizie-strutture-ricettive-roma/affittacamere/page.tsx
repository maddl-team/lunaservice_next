import type { Metadata } from "next";
import { PulizieAffittacamereRomaPageBody } from "@/components/luna/pulizie-strutture-ricettive-roma/affittacamere/sections";

export const metadata: Metadata = {
  title: "Pulizie Affittacamere Roma | Servizio Professionale su Misura — Luna Service",
  description:
    "Servizio di pulizia professionale per affittacamere a Roma. Interventi flessibili tra check-in e check-out, discrezione garantita, preventivo gratuito su misura.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-strutture-ricettive-roma/affittacamere/",
  },
};

export default function PulizieAffittacamereRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto costa la pulizia di un affittacamere a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il costo dipende dal numero di camere, dalla configurazione dei bagni, dalla presenza di spazi condivisi e dalla frequenza degli interventi. Luna Service propone contratti flessibili calibrati sull'occupazione reale — non su un numero fisso di interventi settimanali. Il preventivo è gratuito e viene formulato dopo un primo confronto sulle tue esigenze specifiche.",
        },
      },
      {
        "@type": "Question",
        name: "Come gestite la discrezione se il proprietario vive nella stessa abitazione?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il nostro personale è formato per lavorare in ambienti domestici abitati con la massima discrezione. Gli operatori intervengono esclusivamente nelle aree concordate — camere degli ospiti, bagni, spazi comuni inclusi nel contratto — senza accedere ad altre parti dell'abitazione. Gli orari degli interventi vengono concordati con il proprietario per minimizzare l'interferenza con la vita quotidiana.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate anche con affittacamere con una sola camera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service lavora con affittacamere di ogni dimensione, incluse le strutture con una sola camera. Per le realtà più piccole proponiamo soluzioni flessibili calibrate sui volumi reali, senza strutture di costo sproporzionate. Anche una singola camera merita un servizio professionale — e spesso è quella in cui la qualità della pulizia ha l'impatto maggiore sul rating.",
        },
      },
      {
        "@type": "Question",
        name: "Riuscite a intervenire tra un check-out e il check-in dello stesso giorno?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Organizziamo l'intervento nella finestra disponibile tra check-out e check-in, comunicandoci gli orari con almeno 24 ore di anticipo. Per le finestre molto brevi è necessario un preavviso adeguato per garantire la copertura con il team giusto.",
        },
      },
      {
        "@type": "Question",
        name: "Il contratto è rigido o posso adattarlo alla mia occupazione?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I nostri contratti per affittacamere sono flessibili per definizione: il servizio si attiva in base ai tuoi check-out reali, non secondo un calendario fisso. Nei periodi di alta occupazione il servizio gira a pieno ritmo. Nei periodi di bassa stagione si riduce di conseguenza — e i costi si adeguano. Non paghi per interventi che non ti servono.",
        },
      },
      {
        "@type": "Question",
        name: "Gestite anche il bagno condiviso tra ospiti e proprietario?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, se incluso nel contratto. La pulizia del bagno condiviso viene inserita nel piano degli interventi con una frequenza adeguata alla configurazione specifica — numero di persone che lo usano, orari di utilizzo, standard atteso. La pianificazione tiene conto delle esigenze sia degli ospiti che del proprietario.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lunaservice.it/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pulizie Strutture Ricettive Roma",
        item: "https://www.lunaservice.it/pulizie-strutture-ricettive-roma/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pulizie Affittacamere Roma",
        item: "https://www.lunaservice.it/pulizie-strutture-ricettive-roma/affittacamere/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie Affittacamere Roma",
    serviceType: "Pulizie professionali per affittacamere",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <PulizieAffittacamereRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
