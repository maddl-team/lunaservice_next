import { PulizieStraordinarieRomaPageBody } from "@/components/luna/pulizie-straordinarie-roma/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pulizie Straordinarie Roma | Interventi Urgenti e Specializzati — Luna Service",
  description:
    "Pulizie straordinarie a Roma: sgrosso post ristrutturazione, balconi con escrementi di piccioni, cantine allagate, ambienti degradati. Intervento rapido, preventivo gratuito.",
  path: "/pulizie-straordinarie-roma/",
});
export default function PulizieStraordinarieRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Cosa si intende per pulizia straordinaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La pulizia straordinaria è un intervento professionale che va oltre la manutenzione ordinaria degli ambienti. Si tratta di situazioni specifiche — post ristrutturazione, post allagamento, rimozione di escrementi di animali, ambienti molto sporchi o degradati — che richiedono attrezzature specializzate, prodotti specifici e personale formato per quel tipo di intervento. A differenza delle pulizie ordinarie, la pulizia straordinaria è generalmente un intervento una tantum o occasionale, non ricorrente.",
        },
      },
      {
        "@type": "Question",
        name: "In quanto tempo potete intervenire a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per gli interventi urgenti siamo in grado di organizzare la squadra entro 24–48 ore dalla richiesta su Roma e provincia. Per le urgenze assolute — allagamenti in corso, situazioni di emergenza igienica — contattaci direttamente via WhatsApp per verificare la disponibilità immediata. Per gli interventi non urgenti programmiamo la data più conveniente per il cliente.",
        },
      },
      {
        "@type": "Question",
        name: "Fate il sopralluogo prima di dare un preventivo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per gli interventi più complessi — sgrosso post ristrutturazione, ambienti degradati, situazioni particolari — effettuiamo sempre un sopralluogo gratuito prima di formulare il preventivo. Per gli interventi più standardizzati — come la pulizia di un balcone da escrementi di piccioni di dimensioni contenute — siamo spesso in grado di fornire una stima preliminare già dalla descrizione. In ogni caso il preventivo definitivo viene formulato dopo aver valutato la situazione reale.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenite anche su situazioni di degrado avanzato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service interviene su ambienti in qualsiasi stato di sporco o degrado — senza eccezioni e senza giudizi. Sappiamo che alcune situazioni sono difficili da descrivere e ancora più difficili da affrontare: il nostro approccio è sempre professionale, discreto e rispettoso. Contattaci descrivendo la situazione — anche in modo approssimativo — e troveremo insieme la soluzione più adeguata.",
        },
      },
      {
        "@type": "Question",
        name: "Fornite documentazione dell'intervento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, su richiesta. Per gli interventi straordinari forniamo documentazione fotografica dello stato dell'ambiente prima e dopo l'intervento, descrizione delle operazioni eseguite e dei prodotti utilizzati. Questa documentazione può essere utile per pratiche assicurative, per la gestione condominiale o per qualsiasi altra necessità amministrativa.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate anche nei fine settimana e nei giorni festivi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Per le situazioni urgenti siamo operativi anche nei fine settimana e nei giorni festivi. La disponibilità varia in base al tipo di intervento e al periodo: contattaci via WhatsApp per verificare la copertura nella data specifica.",
        },
      },
    ],
  };

  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-straordinarie-roma/"]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie Straordinarie Roma",
    serviceType: "Pulizie straordinarie e interventi specializzati",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <PulizieStraordinarieRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
