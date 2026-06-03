import { PuliziaBalconiPiccioniRomaPageBody } from "@/components/luna/pulizie-straordinarie-roma/balconi-piccioni/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pulizia Balconi Escrementi Piccioni Roma | Rimozione Guano Professionale — Luna Service",
  description:
    "Rimozione professionale escrementi di piccioni da balconi e terrazzi a Roma. Intervento con DPI certificati, igienizzazione completa, documentazione inclusa. Preventivo gratuito.",
  path: "/pulizie-straordinarie-roma/balconi-piccioni/",
});
export default function PuliziaBalconiPiccioniRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "È pericoloso pulire il guano di piccione da soli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, se non si dispone dei dispositivi di protezione individuale adeguati. Il guano di piccione secco contiene spore fungine — Cryptococcus neoformans e Histoplasma capsulatum — e batteri come Chlamydophila psittaci che possono causare patologie respiratorie serie se inalati durante la pulizia. La manipolazione senza maschere FFP3, tute monouso e guanti espone a un rischio sanitario reale, documentato dalla letteratura medica. La raccomandazione generale delle autorità sanitarie è di affidarsi a operatori professionali con DPI certificati per gli accumuli significativi.",
        },
      },
      {
        "@type": "Question",
        name: "Come si rimuove il guano di piccione indurito dalle superfici?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il guano indurito non va rimosso a secco: la manipolazione senza umidificazione preliminare disperde nell'aria le spore fungine. Il processo corretto prevede: umidificazione controllata con soluzione specifica per ammorbidire il guano senza disperdere particelle, rimozione meccanica con strumenti appropriati alla superficie, lavaggio con prodotto igienizzante specifico, risciacquo abbondante. Per i depositi molto vecchi e stratificati possono essere necessari prodotti enzimatici specifici e tempi di contatto prolungati.",
        },
      },
      {
        "@type": "Question",
        name: "Il guano di piccione corrode le superfici del balcone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Il guano di piccione ha un pH fortemente acido — tra 3 e 4 — che attacca progressivamente cemento, intonaco, ferro delle ringhiere, pietra e ceramica. Più a lungo rimane sulle superfici, più danni causa. Un accumulo non trattato per anni può richiedere interventi di ripristino edilizio sulle superfici danneggiate. La rimozione tempestiva è anche una forma di manutenzione preventiva dell'immobile.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto costa la pulizia di un balcone da escrementi di piccioni a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il costo dipende dalla dimensione del balcone o della superficie da trattare, dall'entità dell'accumulo, dal tipo di superfici presenti e dall'accessibilità. Per i balconi di dimensioni standard con accumulo medio, Luna Service è in grado di fornire una stima preliminare già dalla descrizione. Per le situazioni più complesse — accumuli significativi, superfici estese, accessi difficili — effettuiamo un sopralluogo gratuito prima di formulare il preventivo.",
        },
      },
      {
        "@type": "Question",
        name: "Dopo la pulizia i piccioni tornano?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La pulizia professionale rimuove il guano accumulato e igienizza le superfici, ma non impedisce il ritorno dei piccioni se non vengono installati sistemi di dissuasione fisici — reti, picchi anti-piccione, dissuasori elettrici. Luna Service si occupa della pulizia e dell'igienizzazione. Per i sistemi anti-volatili ti consigliamo di rivolgerti a imprese specializzate in questo tipo di intervento. Al termine della pulizia il nostro supervisore ti segnala le aree a maggior rischio di reinfestazione.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenite anche sui cornicioni e sulle parti comuni del condominio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service gestisce la pulizia da guano di piccioni anche sulle parti comuni degli edifici — cornicioni, davanzali, lastrici solari, androni, scale esterne — su richiesta dell'amministratore di condominio o dell'assemblea condominiale. Forniamo documentazione dell'intervento per gli atti condominiali.",
        },
      },
    ],
  };

  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-straordinarie-roma/balconi-piccioni/"]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizia Balconi Escrementi Piccioni Roma",
    serviceType: "Rimozione professionale guano di piccione",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <PuliziaBalconiPiccioniRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
