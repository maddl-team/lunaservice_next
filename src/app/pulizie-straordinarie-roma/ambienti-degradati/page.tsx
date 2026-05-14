import type { Metadata } from "next";
import { PuliziaAmbientiDegradatiRomaPageBody } from "@/components/luna/pulizie-straordinarie-roma/ambienti-degradati/sections";

export const metadata: Metadata = {
  title: "Pulizia Ambienti Molto Sporchi e Degradati Roma | Intervento Discreto — Luna Service",
  description:
    "Pulizia professionale di ambienti molto sporchi o in stato di degrado a Roma. Intervento discreto, senza giudizi, con la massima riservatezza. Preventivo gratuito.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-straordinarie-roma/ambienti-degradati/",
  },
};

export default function PuliziaAmbientiDegradatiRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Intervenite davvero su qualsiasi tipo di situazione, anche le più difficili?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Non esiste una situazione in cui Luna Service si rifiuta di intervenire per ragioni legate allo stato dell'ambiente. Abbiamo gestito interventi in molti contesti diversi, anche in situazioni di degrado molto avanzato. L'unico limite è la sicurezza degli operatori: in presenza di rischi specifici — amianto, contaminazioni chimiche particolari — è necessaria una valutazione preliminare per definire le misure di sicurezza appropriate.",
        },
      },
      {
        "@type": "Question",
        name: "Come garantite la riservatezza verso i vicini e il condominio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il nostro personale non discute con terzi — vicini, portieri, passanti — le caratteristiche o le ragioni dell'intervento. Lavoriamo con la discrezione di chi sa che il rispetto della privacy del cliente è parte del servizio. Su richiesta organizziamo gli interventi in orari che minimizzano la visibilità — mattina presto, pomeriggio tardo — e utilizziamo mezzi non brandizzati.",
        },
      },
      {
        "@type": "Question",
        name: "Cosa succede agli oggetti e agli effetti personali che si trovano nell'ambiente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prima di iniziare qualsiasi operazione, definiamo insieme le istruzioni per la gestione degli oggetti: cosa conservare, cosa imballare, cosa smaltire. In assenza di indicazioni specifiche, adottiamo criteri prudenziali — conserviamo tutto ciò che potrebbe avere valore o significato personale e smaltismo solo materiali chiaramente inutilizzabili. Nulla viene smaltito senza istruzioni esplicite per gli oggetti di possibile valore.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo richiede un intervento su un ambiente molto sporco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dipende dalla superficie, dall'entità del degrado e dai trattamenti specifici necessari. Per un appartamento standard in condizioni di sporco significativo ma non estremo, un intervento completo richiede generalmente una o due giornate di lavoro con squadra adeguata. Per situazioni più complesse i tempi si allungano e vengono definiti durante il sopralluogo. Il preventivo include sempre una stima dei tempi.",
        },
      },
      {
        "@type": "Question",
        name: "Posso richiedere un sopralluogo senza impegnarmi a fare i lavori?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Il sopralluogo è gratuito e non vincolante. Puoi decidere di non procedere dopo il sopralluogo senza nessun costo e senza nessuna pressione. Siamo consapevoli che alcune situazioni richiedono tempo per essere affrontate — e rispettiamo i tuoi tempi.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate anche quando l'intervento riguarda una persona anziana o in difficoltà che non ha richiesto direttamente il servizio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, in coordinamento con i familiari o con gli operatori sociali responsabili. In questi casi è importante che ci sia una persona di riferimento — un familiare, un tutore, un amministratore di sostegno — che autorizza l'intervento e gestisce il rapporto con Luna Service. Lavoriamo nel rispetto della persona che vive nell'ambiente, con la sensibilità che queste situazioni richiedono.",
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
        name: "Pulizie Straordinarie Roma",
        item: "https://www.lunaservice.it/pulizie-straordinarie-roma/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pulizia Ambienti Molto Sporchi e Degradati Roma",
        item: "https://www.lunaservice.it/pulizie-straordinarie-roma/ambienti-degradati/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizia Ambienti Molto Sporchi e Degradati Roma",
    serviceType: "Pulizia professionale di ambienti degradati",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <PuliziaAmbientiDegradatiRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
