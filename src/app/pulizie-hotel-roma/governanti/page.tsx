import type { Metadata } from "next";
import { GovernantiHotelRomaPageBody } from "@/components/luna/pulizie-hotel-roma/governanti/sections";

export const metadata: Metadata = {
  title: "Servizio Governanti Hotel Roma | Figure Qualificate per Housekeeping — Luna Service",
  description:
    "Governanti d'albergo professionali a Roma: coordinamento housekeeping, controllo qualità camere, gestione del personale di piano. Esperienza certificata, preventivo gratuito.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-hotel-roma/governanti/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual è la differenza tra una cameriera ai piani e una governante d'albergo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cameriera ai piani esegue operativamente le pulizie e il riassetto delle camere assegnate. La governante coordina il reparto: pianifica i turni, assegna le camere al personale, supervisiona la qualità degli interventi, gestisce il magazzino e le forniture, coordina con gli altri reparti e risponde alla direzione per i risultati del reparto. È la differenza tra chi esegue il lavoro e chi organizza e garantisce che il lavoro venga fatto al livello richiesto.",
      },
    },
    {
      "@type": "Question",
      name: "In quanto tempo potete fornire una governante sostituta in caso di assenza improvvisa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per le sostituzioni urgenti siamo in grado di fornire una governante entro 24-48 ore dalla richiesta su Roma e provincia. Per le sostituzioni programmate — ferie, maternità, dimissioni con preavviso — organizziamo un passaggio di consegne strutturato tra la governante uscente e la nostra professionista, per garantire continuità operativa senza interruzioni per il reparto.",
      },
    },
    {
      "@type": "Question",
      name: "La governante di Luna Service conosce i principali sistemi di property management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le nostre governanti hanno familiarità con i principali PMS alberghieri utilizzati sul mercato italiano: Opera, Protel, Scrigno e altri sistemi diffusi. In caso di PMS specifico della struttura, organizziamo una sessione di formazione dedicata prima dell'avvio del servizio.",
      },
    },
    {
      "@type": "Question",
      name: "È possibile richiedere una governante con competenze linguistiche specifiche?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. In fase di richiesta è possibile indicare le competenze linguistiche necessarie — inglese, francese, spagnolo, tedesco, arabo o altre lingue in base alla tipologia di ospiti della struttura. Selezioniamo la professionista più adatta al profilo specifico richiesto.",
      },
    },
    {
      "@type": "Question",
      name: "Come avviene il trasferimento di conoscenze se la mia governante interna torna dopo un periodo di assenza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Al termine di ogni incarico di sostituzione, la governante di Luna Service prepara un documento di passaggio di consegne: stato del reparto, modifiche alle procedure adottate durante il periodo, segnalazioni in sospeso, aggiornamenti sul personale di piano, stato del magazzino. Questo documento garantisce che la governante interna riprenda il servizio con piena consapevolezza di tutto ciò che è accaduto durante la sua assenza.",
      },
    },
    {
      "@type": "Question",
      name: "Gestite anche la formazione del personale di piano oltre al coordinamento operativo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Su richiesta, la governante di Luna Service può condurre sessioni di formazione per il personale di piano — sia per i nuovi inserimenti che per il personale già in servizio che necessita di aggiornamento sulle procedure o di miglioramento degli standard qualitativi. La formazione viene strutturata sugli standard specifici della struttura cliente.",
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
      name: "Servizio Governanti Hotel Roma",
      item: "https://www.lunaservice.it/pulizie-hotel-roma/governanti/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servizio Governanti Hotel Roma",
  serviceType: "Governanti d'albergo e coordinamento housekeeping",
  areaServed: "Roma",
  provider: {
    "@type": "Organization",
    name: "Luna Service",
    url: "https://www.lunaservice.it/",
  },
};

export default function GovernantiHotelRomaPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <GovernantiHotelRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
