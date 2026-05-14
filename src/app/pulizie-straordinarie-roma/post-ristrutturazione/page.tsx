import type { Metadata } from "next";
import { SgrossoPostRistrutturazioneRomaPageBody } from "@/components/luna/pulizie-straordinarie-roma/post-ristrutturazione/sections";

export const metadata: Metadata = {
  title: "Sgrosso Post Ristrutturazione Roma | Pulizia Dopo Lavori Edili — Luna Service",
  description:
    "Sgrosso professionale post ristrutturazione a Roma. Rimozione polvere edile, residui di calce, silicone e vernice. Intervento rapido, preventivo gratuito con sopralluogo.",
  alternates: {
    canonical: "https://www.lunaservice.it/pulizie-straordinarie-roma/post-ristrutturazione/",
  },
};

export default function SgrossoPostRistrutturazioneRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Cos'è lo sgrosso post ristrutturazione?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lo sgrosso post ristrutturazione è un intervento di pulizia professionale specializzato che viene eseguito dopo la conclusione dei lavori edili, prima che l'ambiente torni agibile. Include la rimozione della polvere edile con aspiratori industriali, la rimozione dei residui specifici del cantiere — calce, silicone, vernice, adesivi — e una pulizia di finitura completa di tutte le superfici. È un intervento diverso dalla pulizia ordinaria per attrezzature, prodotti e sequenza operativa.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto costa lo sgrosso post ristrutturazione a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il costo dipende dalla superficie dell'ambiente, dall'entità dei lavori eseguiti, dal tipo di materiali presenti e dalla complessità dei residui da rimuovere. Luna Service non applica tariffe al metro quadro standard perché ogni cantiere è diverso: il preventivo viene formulato dopo la descrizione della situazione o, per gli interventi più complessi, dopo un sopralluogo gratuito.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo impiegate a fare lo sgrosso di un appartamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Come riferimento orientativo: un appartamento fino a 50 mq richiede 4–6 ore con squadra standard. Un appartamento da 100 mq richiede una giornata intera. Per superfici superiori o per cantieri con residui particolarmente complessi i tempi si allungano. Per le situazioni urgenti possiamo organizzare squadre rinforzate per completare il lavoro nei tempi richiesti.",
        },
      },
      {
        "@type": "Question",
        name: "Posso fare lo sgrosso da solo o è necessario un professionista?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per superfici piccole con lavori limitati è possibile gestire autonomamente una parte dello sgrosso. Per ristrutturazioni di media ed ampia portata, il fai-da-te comporta rischi concreti: la polvere edile senza aspiratori industriali viene redistribuita nell'aria invece di essere eliminata, i prodotti sbagliati sui nuovi materiali causano danni irreversibili, e i tempi si allungano enormemente. Un intervento professionale è più rapido, più sicuro per i materiali e — tenendo conto del tempo e dei prodotti necessari — spesso più conveniente del previsto.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenite anche per ristrutturazioni parziali — solo bagno o solo cucina?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Lo sgrosso professionale non richiede che l'intera abitazione sia stata ristrutturata. Interveniamo anche su singoli ambienti — bagno, cucina, camera — dopo lavori parziali. Il preventivo viene adattato alla superficie e alla complessità dell'intervento specifico.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate anche con imprese edili per la fase finale del cantiere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service collabora con imprese edili e imprese di ristrutturazione a Roma per la fase di sgrosso finale dei cantieri residenziali e commerciali. Se sei un'impresa edile interessata a stabilire una collaborazione continuativa, contattaci via WhatsApp o compila il form indicando \"impresa edile\" nel campo tipo di immobile.",
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
        name: "Sgrosso Post Ristrutturazione Roma",
        item: "https://www.lunaservice.it/pulizie-straordinarie-roma/post-ristrutturazione/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sgrosso Post Ristrutturazione Roma",
    serviceType: "Sgrosso professionale post ristrutturazione",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <SgrossoPostRistrutturazioneRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
