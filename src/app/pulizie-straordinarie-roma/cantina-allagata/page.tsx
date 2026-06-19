import { PuliziaCantinaAllagataRomaPageBody } from "@/components/luna/pulizie-straordinarie-roma/cantina-allagata/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pulizia Cantina Allagata Roma | Intervento Urgente e Professionale — Luna Service",
  description:
    "Cantina allagata a Roma? Luna Service interviene in 24–48 ore: rimozione acqua, pulizia fango, asciugatura e igienizzazione professionale. Preventivo gratuito, massima urgenza.",
  path: "/pulizie-straordinarie-roma/cantina-allagata/",
});
export default function PuliziaCantinaAllagataRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto tempo avete per intervenire dopo un allagamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prima si interviene, meglio è. Nelle prime ore l'acqua si diffonde e i danni si limitano all'area direttamente colpita. Dopo 24–48 ore inizia la formazione di muffe sulle superfici organiche. Dopo 72 ore i danni da umidità diventano significativi e più difficili da reversire. Luna Service è in grado di intervenire entro 24–48 ore dalla richiesta su Roma e provincia. Per le urgenze assolute, contattaci direttamente via WhatsApp per verificare la disponibilità immediata.",
        },
      },
      {
        "@type": "Question",
        name: "Cosa fate se l'acqua è ancora presente nella cantina?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La rimozione dell'acqua libera è la prima fase dell'intervento. Utilizziamo aspiratori industriali e pompe di drenaggio specifiche per ambienti confinati. Puoi contattarci anche quando l'acqua è ancora presente: valutiamo la situazione e organizziamo l'intervento di conseguenza.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenite anche per allagamenti da scarichi fognari?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Gli allagamenti da acque reflue richiedono un protocollo di sanificazione professionale oltre alla semplice pulizia, perché le acque fognarie contengono agenti patogeni che contaminano tutte le superfici. Luna Service gestisce questo tipo di intervento con prodotti igienizzanti specifici, DPI appropriati per gli operatori e certificazione dell'intervento.",
        },
      },
      {
        "@type": "Question",
        name: "Fornite documentazione per la pratica assicurativa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Forniamo documentazione fotografica dello stato della cantina prima e dopo l'intervento, descrizione delle operazioni eseguite e fattura con descrizione analitica del servizio. Ti consigliamo di contattare la tua compagnia assicurativa prima dell'intervento per ricevere indicazioni specifiche sulla documentazione richiesta dalla tua polizza.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenite anche nei fine settimana e nei giorni festivi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Per le emergenze siamo operativi anche nei fine settimana e nei giorni festivi. La disponibilità varia in base al tipo di intervento e al periodo: contattaci via WhatsApp per verificare la copertura nella data specifica.",
        },
      },
      {
        "@type": "Question",
        name: "Dopo la pulizia come si previene la formazione di muffe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dopo l'intervento di pulizia e asciugatura professionale, applichiamo un trattamento antimuffa preventivo sulle superfici più vulnerabili. Per prevenire il ritorno dell'umidità nel lungo periodo è importante risolvere la causa dell'allagamento — tubatura, impermeabilizzazione, scarichi — e garantire una ventilazione adeguata alla cantina. Luna Service si occupa della pulizia e del trattamento antimuffa: la risoluzione strutturale della causa va affidata al tecnico competente.",
        },
      },
    ],
  };

  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-straordinarie-roma/cantina-allagata/"]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizia Cantina Allagata Roma",
    serviceType: "Intervento urgente su cantine allagate",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://lunaserviceroma.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <PuliziaCantinaAllagataRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
