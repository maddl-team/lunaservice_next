import { AreeComuniHotelRomaPageBody } from "@/components/luna/pulizie-hotel-roma/aree-comuni/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pulizie Aree Comuni Hotel Roma | Reception, Lobby e Spazi Condivisi — Luna Service",
  description:
    "Pulizia professionale di reception, lobby, corridoi, sale colazione e tutte le aree comuni del tuo hotel a Roma. Interventi calibrati sui flussi ospiti, supervisore dedicato.",
  path: "/pulizie-hotel-roma/aree-comuni/",
});
export default function PulizieAreeComuniHotelRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Con quale frequenza vanno pulite le aree comuni di un hotel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dipende dal tipo di area e dall'intensità del traffico. La lobby e la reception richiedono interventi più volte al giorno nelle strutture ad alta occupazione. I corridoi vanno puliti almeno una volta al giorno, con passaggi aggiuntivi nei momenti di picco. La sala colazione richiede pulizia pre-apertura, manutenzione durante il servizio e pulizia completa post servizio. Palestra e spa seguono gli orari di utilizzo. Luna Service calibra le frequenze sulla realtà operativa della tua struttura, non su standard predefiniti.",
        },
      },
      {
        "@type": "Question",
        name: "Come evitate di disturbare gli ospiti durante le pulizie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prima dell'avvio del servizio mappiamo i flussi della struttura e posizioniamo gli interventi negli orari di minor traffico. Il personale lavora con attrezzature a bassa rumorosità e mantiene un comportamento discreto. Per le aree ad alto traffico continuo — come la lobby — organizziamo micro-interventi frequenti invece di un unico intervento prolungato.",
        },
      },
      {
        "@type": "Question",
        name: "Gestite anche la pulizia di materiali pregiati come marmo e parquet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Prima dell'avvio del servizio il supervisore effettua una mappatura dei materiali presenti in struttura e associa prodotti e tecniche specifiche per ogni superficie. Marmo, parquet, acciaio inox, vetro e altri materiali pregiati vengono trattati con prodotti certificati e metodi che ne preservano l'integrità nel tempo.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenite anche in caso di emergenze nelle aree comuni?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Per situazioni impreviste — bevande rovesciate, incidenti, situazioni di emergenza igienica — è sufficiente contattare il supervisore dedicato. L'intervento viene organizzato in tempi rapidi, senza dover passare per un centralino o attendere il turno successivo programmato.",
        },
      },
      {
        "@type": "Question",
        name: "Il servizio copre anche le aree esterne dell'hotel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Gestiamo la pulizia delle aree esterne di pertinenza dell'hotel: ingresso, gradini, portico, vialetto d'accesso e parcheggio. Le frequenze vengono adattate alla stagione, alle condizioni meteo e al volume di accessi della struttura.",
        },
      },
    ],
  };

  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-hotel-roma/aree-comuni/"]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie Aree Comuni Hotel Roma",
    serviceType: "Pulizia professionale aree comuni hotel",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://lunaserviceroma.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <AreeComuniHotelRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
