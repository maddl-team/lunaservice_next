import type { Metadata } from "next";
import { PulizieCondominialiRomaPageBody } from "@/components/luna/pulizie-condominiali-roma/sections";

export const metadata: Metadata = {
  title: "Pulizie Condominiali Roma | Servizio Professionale per Amministratori — Luna Service",
  description:
    "Impresa di pulizie condominiali a Roma per scale, aree comuni, garage e giardini. Contratti continuativi per amministratori di condominio. Preventivo gratuito.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-condominiali-roma/",
  },
};

export default function PulizieCondominialiRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Con quale frequenza vanno pulite le scale di un condominio a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La frequenza dipende dalla tipologia dell'edificio, dal numero di condomini e dal traffico nelle parti comuni. Come riferimento generale: per i condomini di piccole dimensioni con meno di dieci unità, una pulizia settimanale è generalmente adeguata. Per i condomini di medie dimensioni, due interventi settimanali garantiscono uno standard migliore. Per gli edifici con alto traffico — portineria, attività commerciali, molti condomini — possono essere necessari tre o più interventi settimanali. Luna Service definisce la frequenza durante il sopralluogo in base alla realtà specifica dell'edificio.",
        },
      },
      {
        "@type": "Question",
        name: "Il contratto di pulizie deve essere approvato dall'assemblea condominiale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Il contratto per la pulizia delle parti comuni rientra nella gestione ordinaria del condominio ed è di competenza dell'assemblea condominiale, che lo approva con le maggioranze previste dal Codice Civile. L'amministratore presenta il preventivo in assemblea per l'approvazione prima di procedere con la firma del contratto. Luna Service fornisce tutta la documentazione necessaria per la presentazione in assemblea: preventivo dettagliato, descrizione dei servizi, frequenze, costo mensile e costo annuale.",
        },
      },
      {
        "@type": "Question",
        name: "Cosa succede se un operatore non si presenta per il turno concordato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La sostituzione è interamente a carico di Luna Service. L'amministratore non riceve telefonate di operatori assenti e non deve cercare sostituzioni. Il referente operativo gestisce la copertura internamente e il servizio viene erogato come concordato. Se per cause eccezionali un intervento non può essere effettuato nella data prevista, il referente avvisa l'amministratore in anticipo e riprogramma l'intervento nel più breve tempo possibile.",
        },
      },
      {
        "@type": "Question",
        name: "Fornite documentazione degli interventi per l'assemblea condominiale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. A cadenza mensile o trimestrale forniamo all'amministratore un report degli interventi effettuati: date, aree trattate, eventuali anomalie riscontrate e azioni correttive adottate. È un documento che l'amministratore può portare in assemblea come rendiconto del servizio, dimostrando trasparenza nella gestione delle pulizie condominiali.",
        },
      },
      {
        "@type": "Question",
        name: "Gestite anche gli interventi straordinari oltre al servizio ordinario?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service gestisce sia il servizio continuativo ordinario che gli interventi straordinari sulle parti comuni — sgrosso post ristrutturazione, pulizia post evento, emergenze igieniche. Avere un unico fornitore per entrambi significa meno interlocutori per l'amministratore e maggiore coerenza nel servizio.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate con più condomini dello stesso amministratore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Molti dei nostri clienti nel segmento condominiale sono amministratori professionali che gestiscono più condomini. Per gli amministratori con più edifici proponiamo un accordo di servizio dedicato con gestione centralizzata: un unico punto di contatto per tutti gli edifici, fatturazione consolidata e reportistica per condominio. Contattaci per discutere le tue esigenze specifiche.",
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
        name: "Pulizie Condominiali Roma",
        item: "https://www.lunaservice.it/pulizie-condominiali-roma/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie Condominiali Roma",
    serviceType: "Pulizie condominiali per amministratori",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <PulizieCondominialiRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
