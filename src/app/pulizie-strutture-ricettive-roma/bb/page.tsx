import { PulizieBbRomaPageBody } from "@/components/luna/pulizie-strutture-ricettive-roma/bb/sections";
import { createBreadcrumbSchema } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pulizie B&B Roma | Servizio Professionale per Bed and Breakfast — Luna Service",
  description:
    "Servizio di pulizia professionale per B&B a Roma. Interventi tra check-out e check-in, cambio biancheria, standard alberghieri. Preventivo gratuito su misura.",
  path: "/pulizie-strutture-ricettive-roma/bb/",
});
export default function PulizieBbRomaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto costa il servizio di pulizia per un B&B a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il costo dipende dal numero di camere, dalla presenza di bagni privati o condivisi, dalla frequenza dei cambi e dai servizi inclusi — come la gestione della biancheria o il report fotografico. Luna Service non applica tariffe standard: ogni preventivo è costruito sul B&B specifico dopo un primo contatto. Il preventivo è gratuito e senza impegno.",
        },
      },
      {
        "@type": "Question",
        name: "Riuscite a intervenire tra un check-out e il check-in dello stesso giorno?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. È il tipo di intervento più comune nel nostro servizio per B&B. Per gestirlo al meglio è importante che ci vengano comunicati gli orari di check-out e check-in con almeno 24 ore di anticipo. Per le finestre molto strette — meno di due ore — è necessario comunicarcelo in anticipo per organizzare la copertura adeguata.",
        },
      },
      {
        "@type": "Question",
        name: "Gestite anche la biancheria da letto e da bagno?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, su richiesta. Gestiamo il ritiro della biancheria sporca dopo ogni check-out, la consegna alla lavanderia convenzionata e la redistribuzione nelle camere prima del check-in successivo. È un servizio aggiuntivo che può essere integrato nel contratto o attivato su base occasionale.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate anche con B&B piccoli, con una o due camere soltanto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Luna Service lavora con strutture di ogni dimensione. Per i B&B più piccoli proponiamo soluzioni calibrate sui volumi reali, senza strutture di costo sproporzionate. Anche un B&B con una sola camera merita un servizio professionale — e spesso è quello in cui la qualità della pulizia ha l'impatto maggiore sul rating.",
        },
      },
      {
        "@type": "Question",
        name: "Come funziona il report fotografico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Al termine di ogni intervento, l'operatore fotografa le camere e le aree comuni pulite e invia le foto al gestore via WhatsApp o email entro pochi minuti. Le foto documentano lo stato della struttura a intervento completato e possono essere usate sia per il controllo qualità da remoto che in caso di contestazioni su piattaforma da parte degli ospiti.",
        },
      },
      {
        "@type": "Question",
        name: "Cosa succede se il vostro operatore non è disponibile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La sostituzione è interamente a carico di Luna Service. Il supervisore organizza la copertura internamente: tu non devi fare nulla, non devi cercare nessuno, non devi formare nessuno. Il servizio viene erogato come concordato, indipendentemente dalla disponibilità del singolo operatore.",
        },
      },
    ],
  };

  const breadcrumbSchema = createBreadcrumbSchema(pageBreadcrumbs["/pulizie-strutture-ricettive-roma/bb/"]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulizie B&B Roma",
    serviceType: "Pulizie professionali per bed and breakfast",
    areaServed: "Roma",
    provider: {
      "@type": "Organization",
      name: "Luna Service",
      url: "https://www.lunaservice.it/",
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <PulizieBbRomaPageBody />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
