import { BagniHotelRomaPageBody } from "@/components/luna/pulizie-hotel-roma/bagni/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pulizie Bagni Hotel Roma | Igienizzazione Professionale Camere e Aree Comuni — Luna Service",
  description:
    "Pulizia e igienizzazione professionale dei bagni del tuo hotel a Roma. Protocolli certificati, prodotti specifici per ogni superficie, verifica qualità a fine intervento.",
  path: "/pulizie-hotel-roma/bagni/",
});
export default function PulizieBagniHotelRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Con quale frequenza vanno igienizzati i bagni delle camere di un hotel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I bagni delle camere occupate vanno puliti e igienizzati ogni giorno, durante il riassetto giornaliero. I bagni post check-out ricevono una pulizia più approfondita prima del check-in successivo. Una pulizia profonda — detartratura, trattamento delle fughe, controllo del sigillante — va eseguita almeno una volta a settimana per le camere ad alta rotazione. Luna Service calibra le frequenze sulla categoria della struttura e sul tasso di occupazione.",
        },
      },
      {
        "@type": "Question",
        name: "Quali prodotti usate per igienizzare i bagni degli hotel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utilizziamo prodotti professionali certificati, selezionati in base ai materiali specifici di ogni struttura. Per le superfici sanitarie standard usiamo disinfettanti a base di ipoclorito o ammonio quaternario con il tempo di contatto appropriato all'efficacia. Per il marmo e le superfici delicate usiamo detergenti neutri specifici. Tutti i prodotti hanno schede di sicurezza disponibili e sono conformi alle normative italiane per l'uso in ambienti professionali.",
        },
      },
      {
        "@type": "Question",
        name: "Come garantite che ogni bagno sia davvero igienizzato e non solo pulito visivamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La differenza tra pulizia visiva e igienizzazione reale sta nel prodotto, nel tempo di contatto e nella sequenza operativa. Il nostro protocollo prevede l'applicazione del disinfettante con un tempo di contatto minimo di cinque minuti prima dell'asciugatura, la sequenza operativa dall'alto verso il basso per evitare contaminazioni crociate e una verifica finale documentata su checklist per ogni bagno.",
        },
      },
      {
        "@type": "Question",
        name: "Gestite anche i bagni delle aree comuni con alta frequenza di utilizzo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. I bagni delle aree comuni — lobby, ristorante, palestra — ricevono un piano di manutenzione continua con interventi a cadenza regolare durante l'orario operativo dell'hotel. La frequenza è calibrata sull'intensità di utilizzo: un bagno della lobby di un hotel con alto traffico richiede un intervento ogni due ore, non una volta al giorno.",
        },
      },
      {
        "@type": "Question",
        name: "Fornite documentazione degli interventi per eventuali ispezioni ASL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service fornisce a ogni hotel cliente una documentazione delle procedure operative adottate: checklist degli interventi effettuati, prodotti utilizzati con relative schede di sicurezza e frequenze dei trattamenti. Questa documentazione può essere messa a disposizione in caso di ispezione ASL o di audit interno.",
        },
      },
    ],
  };

  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-hotel-roma/bagni/"]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie Bagni Hotel Roma",
    serviceType: "Pulizia e igienizzazione bagni hotel",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://lunaserviceroma.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <BagniHotelRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
