import type { Metadata } from "next";
import { SanificazioneHotelRomaPageBody } from "@/components/luna/pulizie-hotel-roma/sanificazione/sections";

export const metadata: Metadata = {
  title: "Sanificazione Camere Hotel Roma | Ozono e Nebulizzazione Professionale — Luna Service",
  description:
    "Sanificazione professionale delle camere del tuo hotel a Roma con ozono e nebulizzazione. Protocollo certificato, documentazione inclusa, efficace su batteri e virus.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-hotel-roma/sanificazione/",
  },
};

export default function SanificazioneCamereHotelRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual è la differenza tra pulizia e sanificazione in un hotel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La pulizia rimuove lo sporco visibile dalle superfici attraverso detergenti e azione meccanica. La sanificazione è un processo più ampio che combina pulizia e disinfezione secondo un protocollo documentato, con l'obiettivo di ridurre la carica microbica — batteri, virus, funghi, allergeni — a livelli di sicurezza definiti da normativa. La sanificazione tratta anche l'aria e le superfici non raggiungibili dalla pulizia manuale ordinaria.",
        },
      },
      {
        "@type": "Question",
        name: "Come funziona la sanificazione con ozono?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il generatore di ozono produce O₃ che si diffonde in ogni angolo della camera, raggiungendo superfici, tessuti e aria. L'ozono distrugge la struttura cellulare di batteri, virus e funghi attraverso ossidazione e neutralizza odori persistenti. La camera non può essere occupata durante il trattamento. Dopo il tempo di esposizione calibrato sulla cubatura, segue un periodo di areazione controllata prima del rientro degli ospiti. Luna Service rilascia certificazione dell'intervento con tutti i parametri tecnici.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo rimane inutilizzabile una camera dopo la sanificazione con ozono?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I tempi tecnici variano in base alla dimensione della camera e alla concentrazione utilizzata. In media, per una camera standard di hotel, il trattamento richiede 1–2 ore e il periodo di areazione successivo 1–2 ore aggiuntive. La camera è quindi agibile dopo 2–4 ore dall'inizio del trattamento. Luna Service programma gli interventi negli orari di minor impatto sull'operatività — tipicamente nelle ore notturne o nei momenti di bassa occupazione.",
        },
      },
      {
        "@type": "Question",
        name: "Con quale frequenza va eseguita la sanificazione in un hotel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non esiste una frequenza universale: dipende dalla categoria della struttura, dal tasso di occupazione, dalla tipologia di ospiti e dalle politiche igieniche adottate. Come riferimento generale, le strutture di categoria superiore integrano la sanificazione mensile o trimestrale come manutenzione preventiva. Situazioni specifiche — soggiorni prolungati, ospiti con patologie, aperture stagionali — richiedono interventi puntuali aggiuntivi. Luna Service aiuta ogni struttura a definire il piano di sanificazione più appropriato.",
        },
      },
      {
        "@type": "Question",
        name: "La certificazione rilasciata è valida per le ispezioni ASL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La certificazione di Luna Service documenta il protocollo adottato, i prodotti utilizzati con schede di sicurezza, i parametri tecnici dell'intervento e la qualifica degli operatori. È un documento che dimostra l'adozione di misure professionali di igiene ambientale e può essere presentato in sede di ispezione ASL come parte della documentazione del sistema qualità della struttura.",
        },
      },
      {
        "@type": "Question",
        name: "Offrite la sanificazione anche per aree comuni e non solo per le camere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Il servizio di sanificazione di Luna Service copre tutte le aree dell'hotel: camere, bagni, aree comuni, lobby, sala colazione, ristorante, palestra, spa e uffici. Per ogni area viene definito il metodo più appropriato — ozono o nebulizzazione — e il piano orario che minimizza l'impatto sull'operatività della struttura.",
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
        name: "Sanificazione Camere Hotel Roma",
        item: "https://www.lunaservice.it/pulizie-hotel-roma/sanificazione/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sanificazione Camere Hotel Roma",
    serviceType: "Sanificazione professionale camere hotel",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <SanificazioneHotelRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
