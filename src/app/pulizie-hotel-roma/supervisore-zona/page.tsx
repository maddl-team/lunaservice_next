import type { Metadata } from "next";
import { SupervisoreZonaHotelRomaPageBody } from "@/components/luna/pulizie-hotel-roma/supervisore-zona/sections";

export const metadata: Metadata = {
  title: "Supervisore di Zona Hotel Roma | Monitoraggio e Controllo Qualità — Luna Service",
  description:
    "Supervisore di zona per hotel a Roma: monitoraggio costante dell'andamento dei lavori, figure qualificate con anni di esperienza su strutture di livello. Preventivo gratuito.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-hotel-roma/supervisore-zona/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual è la differenza tra supervisore di zona e governante d'albergo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La governante coordina il reparto housekeeping: pianifica i turni, assegna le camere al personale, gestisce il magazzino e le forniture, forma i nuovi inserimenti. Il suo scope è specificamente il reparto pulizie. Il supervisore di zona ha uno scope più ampio: presidia la qualità operativa di un'intera area dell'hotel — che include housekeeping ma anche facchinaggio, accoglienza, stato delle aree comuni, coordinamento tra reparti. È una figura di livello superiore che monitora l'esperienza complessiva dell'ospite in una zona della struttura, non solo la qualità delle pulizie.",
      },
    },
    {
      "@type": "Question",
      name: "Il supervisore di zona sostituisce la governante?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, sono figure complementari con funzioni diverse. La governante gestisce operativamente il reparto housekeeping dall'interno. Il supervisore di zona monitora la qualità dell'output e presidia il coordinamento tra i reparti dall'esterno. In molte strutture di medie dimensioni le due funzioni vengono coperte dalla stessa persona; nelle strutture di categoria superiore o con volumi elevati le due figure operano in modo distinto e complementare. Luna Service può fornire entrambe separatamente o in combinazione, in base alle esigenze specifiche della struttura.",
      },
    },
    {
      "@type": "Question",
      name: "Quante camere può supervisionare efficacemente un supervisore di zona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dipende dalla complessità della struttura, dalla distribuzione degli spazi e dalla frequenza di rotazione degli ospiti. Come riferimento operativo generale: un supervisore di zona con full-time dedicato è in grado di coprire efficacemente una zona di 40-60 camere con aree comuni. Per strutture più grandi o con più piani, è necessario un piano di copertura con più supervisori o con turni a rotazione. Luna Service dimensiona il servizio sulla struttura specifica durante il sopralluogo.",
      },
    },
    {
      "@type": "Question",
      name: "Come viene misurata l'efficacia del supervisore di zona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'efficacia si misura su più piani: quantitativamente, attraverso la percentuale di non conformità rilevate per turno e i tempi medi di correzione — indicatori che tendono a migliorare nel tempo con un presidio costante; qualitativamente, attraverso l'andamento del rating sulla pulizia sulle piattaforme di booking — che riflette l'esperienza reale degli ospiti; operativamente, attraverso la riduzione delle escalation che raggiungono la direzione — perché i problemi vengono risolti prima di arrivare a quel livello.",
      },
    },
    {
      "@type": "Question",
      name: "Il supervisore di zona di Luna Service usa strumenti digitali per il monitoraggio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. I nostri supervisori utilizzano checklist operative digitali su dispositivo mobile per la documentazione delle ispezioni in tempo reale, la comunicazione dello stato camere e la produzione del report di fine turno. Il sistema utilizzato può essere integrato con il PMS dell'hotel su richiesta, per garantire che lo stato delle camere sia sempre aggiornato in modo coerente tra i diversi sistemi della struttura.",
      },
    },
    {
      "@type": "Question",
      name: "È possibile richiedere il supervisore di zona solo per i periodi di alta occupazione?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Luna Service può strutturare il servizio su base stagionale o su periodi specifici — alta stagione, eventi, picchi di occupazione — per le strutture che non richiedono un presidio continuativo durante tutto l'anno. Questa configurazione flessibile permette di beneficiare del presidio qualitativo nei momenti in cui è più necessario senza sostenere il costo di una figura full-time nelle fasi di bassa attività.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lunaservice.it/" },
    { "@type": "ListItem", position: 2, name: "Pulizie Hotel Roma", item: "https://www.lunaservice.it/pulizie-hotel-roma/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Servizio Supervisore di Zona Hotel Roma",
      item: "https://www.lunaservice.it/pulizie-hotel-roma/supervisore-zona/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servizio Supervisore di Zona Hotel Roma",
  serviceType: "Supervisione di zona e controllo qualità per hotel",
  areaServed: "Roma",
  provider: {
    "@type": "Organization",
    name: "Luna Service",
    url: "https://www.lunaservice.it/",
  },
};

export default function SupervisoreZonaHotelRomaPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <SupervisoreZonaHotelRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
