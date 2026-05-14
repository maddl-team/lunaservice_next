import type { Metadata } from "next";
import { PulizieOstelliRomaPageBody } from "@/components/luna/pulizie-strutture-ricettive-roma/ostelli/sections";

export const metadata: Metadata = {
  title: "Pulizie Ostelli e Dormitori Roma | Servizio Professionale ad Alto Volume — Luna Service",
  description:
    "Servizio di pulizia professionale per ostelli, dormitori e strutture per gruppi a Roma. Squadre dimensionate sui volumi, interventi rapidi, standard igienici garantiti.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-strutture-ricettive-roma/ostelli/",
  },
};

export default function PulizieOstelliRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Con quale frequenza vanno puliti i bagni comuni di un ostello?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I bagni comuni di un ostello ad alta occupazione richiedono interventi multipli durante la giornata — non una pulizia unica. Come riferimento generale, un bagno comune usato da più di dieci persone al giorno richiede almeno tre interventi: mattina presto prima delle partenze, a metà giornata e sera. Per strutture con occupazione molto alta la frequenza può essere superiore. Luna Service definisce il piano di manutenzione dei bagni comuni durante il sopralluogo, in base al numero di bagni, al numero di ospiti e agli orari di picco.",
        },
      },
      {
        "@type": "Question",
        name: "Come gestite la pulizia dei dormitori quando ci sono ancora ospiti presenti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il nostro protocollo per i dormitori include procedure precise per la gestione degli effetti personali degli ospiti ancora presenti: gli oggetti personali vengono spostati con cura per consentire la pulizia dello spazio e riposizionati con ordine. Gli operatori sono formati per lavorare nei dormitori con la discrezione e il rispetto necessari in uno spazio condiviso da persone che potrebbero ancora stare dormendo o riposando.",
        },
      },
      {
        "@type": "Question",
        name: "Quanti operatori mandate per un ostello con cinquanta posti letto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il numero dipende dalla configurazione della struttura, dalla finestra temporale disponibile e dal volume di check-out giornalieri. Non esiste un rapporto fisso operatori/posti letto: lo stabiliamo durante il sopralluogo in base alla realtà specifica della struttura. L'obiettivo è sempre che il servizio sia completato nei tempi necessari senza compromettere lo standard.",
        },
      },
      {
        "@type": "Question",
        name: "Gestite anche la cucina comune e le aree relax?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. La cucina comune e le aree relax rientrano nel piano di intervento con frequenze adattate agli orari di utilizzo. La cucina comune riceve almeno due interventi al giorno — mattina e sera — con pulizia profonda periodica di frigoriferi, fornelli e superfici. Le aree relax e le sale comuni vengono mantenute attraverso interventi distribuiti nell'arco della giornata.",
        },
      },
      {
        "@type": "Question",
        name: "Il servizio è economicamente sostenibile per un ostello con margini ridotti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service costruisce i preventivi per ostelli calibrati sui volumi reali e sulle ore effettive di servizio necessarie. Il costo mensile è trasparente e prevedibile — senza sorprese. Quando si confronta con il costo reale della gestione interna — stipendi, contributi, attrezzature, sostituzioni, formazione — l'outsourcing professionale è spesso comparabile o più conveniente, con il vantaggio di eliminare tutta la complessità operativa della gestione del personale.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate anche con dormitori universitari e studentati?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. I dormitori universitari e gli studentati hanno esigenze diverse dagli ostelli turistici: ospiti a lungo termine, presenza continuativa, piano di pulizia ricorrente piuttosto che interventi a ogni check-out. Luna Service progetta il servizio sulla realtà specifica di queste strutture, con pulizia settimanale delle camere, manutenzione continua dei bagni e delle aree comuni e interventi straordinari al cambio degli ospiti a fine semestre o a fine anno accademico.",
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
        name: "Pulizie Ostelli e Dormitori Roma",
        item: "https://www.lunaservice.it/pulizie-strutture-ricettive-roma/ostelli/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie Ostelli e Dormitori Roma",
    serviceType: "Pulizie professionali per ostelli e dormitori",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <PulizieOstelliRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
