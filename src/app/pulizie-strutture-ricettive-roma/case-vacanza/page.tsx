import type { Metadata } from "next";
import { PulizieCaseVacanzaRomaPageBody } from "@/components/luna/pulizie-strutture-ricettive-roma/case-vacanza/sections";

export const metadata: Metadata = {
  title: "Pulizie Case Vacanza Roma | Affitti Brevi e Airbnb — Luna Service",
  description:
    "Servizio di pulizia professionale per case vacanza e affitti brevi a Roma. Interventi tra check-out e check-in, report fotografico, gestione da remoto. Preventivo gratuito.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-strutture-ricettive-roma/case-vacanza/",
  },
};

export default function PulizieCaseVacanzaRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto costa la pulizia di una casa vacanza a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il costo dipende dalla dimensione dell'appartamento, dal numero di bagni, dalla frequenza dei cambi e dai servizi inclusi — come la gestione della biancheria, il report fotografico o il rifornimento dei consumabili. Luna Service non applica tariffe standard: ogni preventivo è costruito sull'unità specifica. Il preventivo è gratuito e viene formulato entro poche ore dal primo contatto.",
        },
      },
      {
        "@type": "Question",
        name: "Chi si occupa di aprire l'appartamento se non sono presente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'accesso viene gestito con le modalità concordate durante l'onboarding: cassetta di sicurezza con codice, chiavi digitali, portineria o altra soluzione adatta alla tua struttura. Una volta definita la modalità di accesso, il processo funziona in autonomia senza che tu debba intervenire.",
        },
      },
      {
        "@type": "Question",
        name: "Riuscite a fare le pulizie tra un check-out e un check-in dello stesso giorno?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. È il tipo di intervento più frequente nel nostro servizio per affitti brevi. Per gestire al meglio le finestre strette è importante comunicarci gli orari di check-out e check-in con almeno 24 ore di anticipo. Per le finestre molto brevi — meno di due ore — è necessario un preavviso adeguato per organizzare la squadra.",
        },
      },
      {
        "@type": "Question",
        name: "Come funziona il report fotografico e a cosa serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Al termine di ogni intervento il nostro operatore fotografa tutte le aree dell'appartamento e invia le foto via WhatsApp o email entro pochi minuti. Il report ti permette di verificare la qualità del lavoro da remoto e ti fornisce documentazione fotografica dello stato dell'appartamento al momento del check-in dell'ospite — utile in caso di contestazioni su piattaforma.",
        },
      },
      {
        "@type": "Question",
        name: "Gestite anche la biancheria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, su richiesta. Gestiamo il ritiro della biancheria sporca dopo ogni check-out, la consegna alla lavanderia convenzionata e la redistribuzione nell'appartamento prima del check-in successivo. Per chi gestisce più unità è un servizio che elimina una complessità logistica significativa.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate anche con property manager che gestiscono più appartamenti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service lavora con property manager che gestiscono da due a oltre venti unità a Roma. Per chi gestisce volumi significativi proponiamo accordi di servizio dedicati con un unico punto di contatto per tutte le unità e tariffe proporzionate ai volumi. Contattaci direttamente via WhatsApp per discutere le tue esigenze specifiche.",
        },
      },
      {
        "@type": "Question",
        name: "Cosa fate se trovate un danno o un oggetto dimenticato durante le pulizie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Segnaliamo immediatamente al gestore qualsiasi anomalia riscontrata durante l'intervento: danni agli arredi, guasti agli elettrodomestici, oggetti dimenticati dagli ospiti. La segnalazione avviene via WhatsApp con foto dell'anomalia, nel rispetto dei tempi necessari per intervenire prima dell'arrivo del prossimo ospite.",
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
        name: "Pulizie Case Vacanza Roma",
        item: "https://www.lunaservice.it/pulizie-strutture-ricettive-roma/case-vacanza/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie Case Vacanza Roma",
    serviceType: "Pulizie professionali per case vacanza e affitti brevi",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <PulizieCaseVacanzaRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
