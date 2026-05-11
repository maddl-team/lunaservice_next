import type { Metadata } from "next";
import { StruttureRicettiveRomaPageBody } from "@/components/luna/pulizie-strutture-ricettive-roma/sections";

export const metadata: Metadata = {
  title: "Pulizie Strutture Ricettive Roma | B&B, Case Vacanza, Affittacamere — Luna Service",
  description:
    "Impresa di pulizie per strutture ricettive a Roma: B&B, case vacanza, affittacamere e ostelli. Servizio flessibile, interventi tra check-in e check-out, preventivo gratuito.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-strutture-ricettive-roma/",
  },
};

export default function PulizieStruttureRicettiveRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Lavorate anche con strutture piccole, come un B&B con due o tre camere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service lavora con strutture di ogni dimensione, dal singolo appartamento su Airbnb al B&B con dieci camere. Per le strutture più piccole proponiamo soluzioni flessibili calibrate sulla frequenza reale dei cambi, senza costi fissi sproporzionati rispetto ai volumi.",
        },
      },
      {
        "@type": "Question",
        name: "Riuscite a intervenire tra un check-out e il check-in dello stesso giorno?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, è esattamente il tipo di intervento per cui siamo organizzati. Riceviamo le informazioni sui tuoi check-out e check-in e organizziamo gli interventi nelle finestre disponibili. Per le finestre molto strette — meno di due ore — è importante comunicarcelo con almeno 24 ore di anticipo per garantire la copertura.",
        },
      },
      {
        "@type": "Question",
        name: "Gestite la biancheria da letto e da bagno?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Su richiesta gestiamo l'intero ciclo della biancheria: raccolta, consegna alla lavanderia convenzionata e redistribuzione nella struttura prima del prossimo check-in. È un servizio aggiuntivo che può essere integrato nel contratto o richiesto su base occasionale.",
        },
      },
      {
        "@type": "Question",
        name: "Posso gestire il servizio da remoto senza essere presente in struttura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Molti dei nostri clienti gestiscono case vacanza e affitti brevi a Roma senza essere fisicamente presenti — alcuni vivono in un'altra città. Luna Service gestisce il servizio autonomamente: accede alla struttura con le modalità concordate, esegue l'intervento, avvisa il gestore a lavoro completato con report fotografico su richiesta.",
        },
      },
      {
        "@type": "Question",
        name: "Fate anche il report fotografico dopo le pulizie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, su richiesta. Al termine di ogni intervento il nostro operatore documenta fotograficamente lo stato della struttura e invia le foto via WhatsApp o email entro pochi minuti. È una documentazione utile sia per il controllo qualità da remoto che per eventuali contestazioni su piattaforma.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto costa il servizio di pulizia per un B&B o una casa vacanza a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il costo dipende dalla dimensione della struttura, dal numero di camere o unità, dalla frequenza degli interventi e dai servizi inclusi. Luna Service non applica tariffe standard: ogni preventivo è costruito sulla struttura specifica dopo un primo contatto. Compila il form per ricevere una proposta personalizzata.",
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
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie Strutture Ricettive Roma",
    serviceType: "Pulizie professionali per strutture ricettive",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[#fbf9f3] text-[#161714]">
      <StruttureRicettiveRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
