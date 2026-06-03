import { BellboyHotelRomaPageBody } from "@/components/luna/pulizie-hotel-roma/bellboy/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Servizio Bellboy Hotel Roma | Portabagagli e Assistenza Ospiti — Luna Service",
  description:
    "Servizio bellboy professionale per hotel a Roma: portabagagli, assistenza agli ospiti, gestione arrivi e partenze. Personale formato su standard alberghieri. Preventivo gratuito.",
  path: "/pulizie-hotel-roma/bellboy/",
});
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual è la differenza tra bellboy, facchino e portiere d'albergo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sono tre figure distinte con mansioni diverse. Il bellboy — o portabagagli — è dedicato all'accoglienza degli ospiti e al trasporto dei bagagli dall'ingresso alla camera e viceversa: è una figura orientata al contatto diretto con l'ospite. Il facchino si occupa prevalentemente della movimentazione operativa interna — forniture, allestimenti, materiali — con minor contatto con gli ospiti. Il portiere presidia l'ingresso e gestisce le richieste informative degli ospiti, spesso con funzioni di coordinamento esterno come taxi, transfer e informazioni sulla città. In alcune strutture le figure vengono sovrapposte in profili ibridi; Luna Service può fornire ciascuna separatamente o in combinazione.",
      },
    },
    {
      "@type": "Question",
      name: "Il bellboy deve parlare inglese?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, la conoscenza dell'inglese di base è il requisito minimo standard per qualsiasi bellboy che operi in un hotel di Roma — città con un'altissima percentuale di ospiti internazionali. Per le strutture di categoria superiore o con una clientela prevalentemente straniera, forniamo profili con inglese avanzato e competenze in ulteriori lingue secondo le esigenze specifiche della struttura.",
      },
    },
    {
      "@type": "Question",
      name: "Come si gestisce il picco di arrivi quando il bellboy è impegnato con un altro ospite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La gestione dei picchi simultanei dipende dalla dimensione della struttura e dal volume degli arrivi. Per gli hotel con alto volume di check-in concentrati in fasce orarie specifiche, Luna Service può pianificare turni con più bellboy contemporaneamente nelle ore di punta. Per i casi imprevisti, il supervisore di riferimento coordina la copertura aggiuntiva con preavviso breve.",
      },
    },
    {
      "@type": "Question",
      name: "Il bellboy di Luna Service viene identificato come personale dell'hotel o come personale esterno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il nostro personale lavora integrato nel team dell'hotel e si presenta con la divisa e le modalità concordate con la direzione. La maggior parte delle strutture preferisce che il personale esterno indossi la divisa dell'hotel — quando disponibile — per garantire uniformità nell'accoglienza. In alternativa, forniamo il nostro personale con una divisa professionale neutrale di alta qualità. La scelta viene concordata durante il sopralluogo iniziale.",
      },
    },
    {
      "@type": "Question",
      name: "Gestite anche la formazione del bellboy sulle specifiche del nostro hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Prima dell'avvio del servizio, ogni bellboy viene briefato sulla struttura cliente: planimetria, servizi e orari, procedure interne di gestione dei bagagli, standard comportamentali richiesti dalla struttura, informazioni pratiche sulla città che gli ospiti chiedono più spesso. Il briefing avviene prima del primo turno operativo — non durante.",
      },
    },
    {
      "@type": "Question",
      name: "È possibile avere sempre lo stesso bellboy assegnato alla nostra struttura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, per i contratti continuativi cerchiamo di assegnare lo stesso operatore alla struttura per garantire continuità e familiarità con le procedure interne. In caso di assenza, il sostituto viene briefato prima di iniziare e il supervisore monitora la qualità del servizio durante il periodo di transizione.",
      },
    },
  ],
};

const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-hotel-roma/bellboy/"]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servizio Bellboy Hotel Roma",
  serviceType: "Bellboy, portabagagli e assistenza ospiti per hotel",
  areaServed: "Roma",
  provider: {
    "@type": "Organization",
    name: "Luna Service",
    url: "https://www.lunaservice.it/",
  },
};

export default function BellboyHotelRomaPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <BellboyHotelRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
