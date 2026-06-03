import { FacchinaggioHotelRomaPageBody } from "@/components/luna/pulizie-hotel-roma/facchinaggio/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Servizio Facchinaggio Hotel Roma | Personale Qualificato — Luna Service",
  description:
    "Servizio di facchinaggio professionale per hotel a Roma: movimentazione bagagli, allestimento sale e supporto operativo. Personale formato e assicurato. Preventivo gratuito.",
  path: "/pulizie-hotel-roma/facchinaggio/",
});
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual è la differenza tra un facchino d'albergo e un portiere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In un hotel il portiere — o portiere di notte — è una figura con responsabilità di accoglienza, gestione delle chiavi e presidio dell'ingresso, spesso con funzioni di security nelle ore notturne. Il facchino d'albergo è specificamente dedicato alla movimentazione dei bagagli, all'allestimento degli spazi e al supporto operativo fisico. In molte strutture le due figure coesistono con ruoli distinti; in altre vengono sovrapposte. Luna Service fornisce personale specificamente formato per le mansioni di facchinaggio operativo.",
      },
    },
    {
      "@type": "Question",
      name: "Il personale di facchinaggio è assicurato per eventuali danni ai bagagli degli ospiti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Tutto il personale di Luna Service è coperto da assicurazione RC professionale che include i danni accidentali a cose di proprietà degli ospiti durante lo svolgimento del servizio. In caso di contestazione da parte di un ospite per danni ai bagagli, il processo di gestione del sinistro viene gestito attraverso la nostra copertura assicurativa.",
      },
    },
    {
      "@type": "Question",
      name: "Con quanto preavviso posso richiedere personale aggiuntivo per un evento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per gli eventi programmati con anticipo, il personale viene pianificato nella settimana precedente. Per le richieste urgenti — eventi dell'ultimo minuto, picchi imprevisti — siamo in grado di fornire personale con 2-4 ore di preavviso su Roma, compatibilmente con la disponibilità. Per le situazioni più critiche, il contatto diretto via WhatsApp con il supervisore di riferimento è il canale più rapido.",
      },
    },
    {
      "@type": "Question",
      name: "Il personale di Luna Service segue le procedure interne del nostro hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Prima dell'avvio del servizio, ogni operatore viene briefato sulle procedure interne della struttura cliente: dall'uso del montacarichi alle modalità di ricezione dei bagagli, dalle procedure di deposito agli standard comportamentali richiesti dall'hotel. L'obiettivo è che il personale di Luna Service sia operativamente indistinguibile dal personale interno.",
      },
    },
    {
      "@type": "Question",
      name: "È possibile avere sempre gli stessi operatori assegnati alla nostra struttura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, compatibilmente con le disponibilità. Cerchiamo di assegnare operatori fissi alle strutture con le quali abbiamo contratti continuativi, perché la continuità del personale riduce i tempi di adattamento e migliora la qualità del servizio nel tempo. In caso di assenze o sostituzioni, il nuovo operatore viene briefato sulla struttura prima di iniziare.",
      },
    },
    {
      "@type": "Question",
      name: "Gestite anche il facchinaggio per eventi esterni all'hotel, come cerimonie o ricevimenti in location esterne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, su richiesta. Se l'hotel organizza eventi in location esterne o ha necessità di supporto per la logistica di materiali al di fuori della struttura, Luna Service può fornire personale dedicato a queste attività, coordinato con il responsabile eventi dell'hotel.",
      },
    },
  ],
};

const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-hotel-roma/facchinaggio/"]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servizio Facchinaggio Hotel Roma",
  serviceType: "Facchinaggio e supporto operativo per hotel",
  areaServed: "Roma",
  provider: {
    "@type": "Organization",
    name: "Luna Service",
    url: "https://www.lunaservice.it/",
  },
};

export default function FacchinaggioHotelRomaPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <FacchinaggioHotelRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
