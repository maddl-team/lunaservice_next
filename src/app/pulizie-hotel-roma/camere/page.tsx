import { CamereHotelRomaPageBody } from "@/components/luna/pulizie-hotel-roma/camere/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pulizie Camere Hotel Roma | Riassetto e Igienizzazione Professionale — Luna Service",
  description:
    "Servizio professionale di pulizia e riassetto camere per hotel a Roma. Checklist operativa certificata, operatori formati per ambienti alberghieri, supervisore dedicato.",
  path: "/pulizie-hotel-roma/camere/",
});
export default function PulizieCamereHotelRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Con quale frequenza vanno pulite le camere di un hotel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le camere occupate da ospiti in soggiorno prolungato vanno riassettate ogni giorno. Le camere post check-out richiedono una pulizia completa prima del check-in successivo. La pulizia profonda periodica — su materassi, tende, superfici difficili — va eseguita con cadenza settimanale o mensile in base alla categoria e all'occupazione della struttura. Luna Service calibra le frequenze sulla realtà operativa del tuo hotel.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo richiede la pulizia di una camera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il tempo dipende dalla tipologia di intervento e dalla dimensione della camera. Un riassetto standard richiede mediamente 20–30 minuti per camera. Una pulizia completa post check-out richiede 35–50 minuti. Una pulizia profonda periodica può richiedere fino a 90 minuti per camera. Luna Service dimensiona il team in modo che i tempi non interferiscano mai con i check-in programmati.",
        },
      },
      {
        "@type": "Question",
        name: "Cosa succede se un operatore è assente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La sostituzione è a carico di Luna Service. Tu non gestisci le assenze, non cerchi sostituzioni, non ritardi il servizio. Il supervisore organizza la copertura autonomamente e il servizio viene erogato regolarmente.",
        },
      },
      {
        "@type": "Question",
        name: "Posso richiedere una pulizia straordinaria con breve preavviso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Per picchi di occupazione imprevisti, eventi speciali o situazioni di emergenza igienica, Luna Service è in grado di intervenire con squadre rinforzate su Roma con 24–48 ore di preavviso.",
        },
      },
      {
        "@type": "Question",
        name: "Come comunico al team le preferenze specifiche della mia struttura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Attraverso il supervisore dedicato. Prima dell'avvio del servizio, il supervisore raccoglie tutte le indicazioni operative della tua struttura — dai materiali ai protocolli interni, dagli orari preferiti alle priorità di intervento — e le traduce in istruzioni operative per il team. Ogni aggiornamento o modifica viene gestito sempre dallo stesso referente.",
        },
      },
    ],
  };

  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-hotel-roma/camere/"]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie Camere Hotel Roma",
    serviceType: "Pulizia e riassetto camere hotel",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <CamereHotelRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
