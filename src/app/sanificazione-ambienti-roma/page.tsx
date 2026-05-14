import type { Metadata } from "next";
import { SanificazioneAmbientiRomaPageBody } from "@/components/luna/sanificazione-ambienti-roma/sections";

export const metadata: Metadata = {
  title: "Sanificazione Ambienti Roma | Ozono e Nebulizzazione Professionale — Luna Service",
  description:
    "Sanificazione professionale di ambienti a Roma con ozono e nebulizzazione. Hotel, uffici, condomini, privati. Certificazione dell'intervento rilasciata. Preventivo gratuito.",
  alternates: {
    canonical: "https://www.lunaservice.it/sanificazione-ambienti-roma/",
  },
};

export default function SanificazioneAmbientiRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual è la differenza tra sanificazione e disinfezione?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La disinfezione riduce la carica batterica e virale sulle superfici trattate direttamente con prodotti chimici specifici. La sanificazione è un processo più ampio che combina pulizia e disinfezione secondo un protocollo documentato con l'obiettivo di portare la carica microbica complessiva — superfici e aria — a livelli di sicurezza definiti da normativa. La sanificazione include il trattamento dell'aria e delle superfici non raggiungibili manualmente, e produce documentazione certificabile. La disinfezione no.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto dura una sanificazione professionale con ozono?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I tempi dipendono dalla cubatura dell'ambiente. Per un appartamento standard o un ufficio di medie dimensioni, il trattamento con ozono richiede 1–2 ore di esposizione più 1–2 ore di areazione prima del rientro — quindi 2–4 ore totali dall'inizio del trattamento. Per superfici superiori ai 200 mq i tempi si allungano proporzionalmente. Luna Service programma gli interventi negli orari di minor impatto sull'utilizzo dell'ambiente — sera, notte o fine settimana.",
        },
      },
      {
        "@type": "Question",
        name: "La sanificazione con ozono è sicura per le persone e gli animali?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'ozono ad alte concentrazioni è irritante per le vie respiratorie — per questo l'ambiente non può essere occupato durante il trattamento. Dopo il periodo di areazione controllata — 1–2 ore — l'ozono si riduce spontaneamente a ossigeno molecolare e l'ambiente è sicuro per persone e animali. Non rimangono residui chimici nell'ambiente. Luna Service certifica il tempo di sicurezza per il rientro in ogni certificazione di intervento.",
        },
      },
      {
        "@type": "Question",
        name: "Con quale frequenza va eseguita la sanificazione?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dipende dalla tipologia dell'ambiente e dall'intensità di utilizzo. Per gli ambienti ad alto traffico — hotel, uffici, strutture sanitarie — la sanificazione mensile o trimestrale è una pratica di manutenzione preventiva sempre più diffusa. Per le abitazioni private, una sanificazione semestrale o annuale è generalmente sufficiente come manutenzione. Situazioni specifiche — post malattia, apertura dopo lunga assenza, presenza di allergeni — richiedono interventi puntuali aggiuntivi.",
        },
      },
      {
        "@type": "Question",
        name: "La certificazione di sanificazione è valida per le ispezioni ASL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La certificazione di Luna Service documenta il protocollo adottato, i prodotti utilizzati con schede di sicurezza allegate, i parametri tecnici dell'intervento e la qualifica degli operatori. È un documento che dimostra l'adozione di misure professionali di igiene ambientale e può essere presentato in sede di ispezione ASL come parte della documentazione del sistema qualità della struttura. La validità specifica dipende dalle normative applicabili al tipo di struttura e dalla ASL competente per territorio.",
        },
      },
      {
        "@type": "Question",
        name: "Offrite la sanificazione anche per ambienti di piccole dimensioni come un appartamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service esegue interventi di sanificazione su ambienti di qualsiasi dimensione — dal monolocale al complesso aziendale. Per gli ambienti di piccole dimensioni il costo è proporzionalmente ridotto e i tempi di intervento sono più brevi. Il protocollo adottato e la certificazione rilasciata sono gli stessi indipendentemente dalla dimensione dell'ambiente.",
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
        name: "Sanificazione Ambienti Roma",
        item: "https://www.lunaservice.it/sanificazione-ambienti-roma/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sanificazione Ambienti Roma",
    serviceType: "Sanificazione professionale con ozono e nebulizzazione",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <SanificazioneAmbientiRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
