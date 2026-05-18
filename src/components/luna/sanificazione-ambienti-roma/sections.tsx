"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaqItem,
  InputField,
  PrimaryCtaButton,
  SectionBadge,
  SectionShell,
  SelectField,
  SiteFooter,
  SiteHeaderPill,
  TextareaField,
} from "@/components/luna/ui";

const trustItems = [
  "Sanificazione con ozono e nebulizzazione certificati",
  "Certificazione dell'intervento rilasciata sempre",
  "Efficace su batteri, virus, funghi e allergeni",
  "Copertura su tutta Roma e provincia",
] as const;

const distinctionItems = [
  {
    title: "Pulizia",
    body: "La pulizia rimuove lo sporco visibile dalle superfici attraverso l'azione meccanica e l'uso di detergenti. Elimina residui organici, polvere e sporco da contatto. Non elimina necessariamente gli agenti patogeni microscopici che non producono sporco visibile.",
  },
  {
    title: "Disinfezione",
    body: "La disinfezione riduce la carica batterica e virale sulle superfici attraverso l'uso di prodotti chimici specifici — disinfettanti a base di ipoclorito, ammonio quaternario, alcol etilico. Agisce sulle superfici direttamente trattate con il prodotto ma non raggiunge l'aria e le superfici non accessibili manualmente.",
  },
  {
    title: "Sanificazione",
    body: "La sanificazione è il processo più completo: combina pulizia e disinfezione secondo un protocollo documentato con l'obiettivo di portare la carica microbica complessiva — superfici e aria — a livelli di sicurezza definiti da normativa. Include il trattamento dell'aria e delle superfici non raggiungibili dalla disinfezione manuale. È l'unico dei tre processi che produce documentazione certificabile.",
  },
] as const;

const methodItems = [
  {
    title: "Sanificazione con generatore di ozono",
    paragraphs: [
      "L'ozono — O₃ — è uno dei sanificanti più efficaci disponibili: agisce su batteri, virus, funghi, muffe e agenti allergenici attraverso un processo di ossidazione che ne distrugge la struttura cellulare. A differenza dei prodotti chimici, l'ozono si diffonde nell'aria e raggiunge ogni superficie dell'ambiente — incluse quelle non direttamente accessibili — trattando simultaneamente aria e superfici.",
      "Il processo è privo di residui chimici: l'ozono si riduce spontaneamente a ossigeno molecolare dopo il trattamento, lasciando l'ambiente privo di sostanze chimiche residue. Ideale per ambienti dove la presenza di residui chimici è indesiderabile — camere d'albergo, abitazioni private, ambienti con bambini o persone allergiche.",
      "La camera o l'ambiente non può essere occupato durante il trattamento. I tempi tecnici variano da 2 a 4 ore in base alla cubatura. Luna Service rilascia certificazione dell'intervento con concentrazione utilizzata, tempo di esposizione e data.",
    ],
  },
  {
    title: "Sanificazione con nebulizzazione",
    paragraphs: [
      "La nebulizzazione disperde un prodotto sanificante certificato — a base di ammonio quaternario, acido peracetico o altri principi attivi — in forma di micro-particelle sospese nell'aria attraverso un nebulizzatore professionale. Le micro-particelle raggiungono ogni superficie dell'ambiente depositandosi uniformemente — superfici verticali, tessuti, aree difficilmente accessibili.",
      "Rispetto all'ozono, la nebulizzazione offre tempi di rientro mediamente più brevi e maggiore flessibilità nella scelta del principio attivo in base all'agente patogeno specifico da trattare. È particolarmente indicata per trattamenti rapidi e per ambienti con moquette e tessuti estesi.",
      "Luna Service rilascia certificazione dell'intervento con prodotto utilizzato, scheda di sicurezza allegata, dosaggio e tempi di esposizione.",
    ],
  },
] as const;

const targetItems = [
  {
    title: "Hotel e strutture ricettive",
    body: "Per gli hotel la sanificazione non è un optional: è una componente strutturale del piano di igiene che risponde sia alle aspettative degli ospiti che alle normative sanitarie. Luna Service gestisce la sanificazione delle camere e degli spazi comuni degli hotel a Roma con protocollo specifico per ambienti alberghieri e certificazione dell'intervento per gli audit interni e le ispezioni ASL.",
    href: "/pulizie-hotel-roma/sanificazione/",
    linkLabel: "→ Sanificazione camere hotel Roma",
  },
  {
    title: "Uffici e ambienti di lavoro",
    body: "Gli uffici con alto numero di lavoratori in spazi condivisi — sale riunioni, open space, aree comuni — richiedono una sanificazione periodica per mantenere standard igienici adeguati e ridurre l'assenteismo da malattie stagionali. Luna Service gestisce la sanificazione degli uffici a Roma con interventi programmati fuori dall'orario lavorativo — sera o fine settimana — per non interrompere l'attività.",
    href: null,
    linkLabel: null,
  },
  {
    title: "Condomini e parti comuni",
    body: "Le parti comuni condominiali — androni, scale, ascensori, garage — sono ambienti ad alto traffico che accumulano carica microbica significativa nel tempo. La sanificazione periodica delle parti comuni è una misura igienica sempre più richiesta dalle assemblee condominiali, soprattutto negli edifici con alta densità abitativa. Luna Service la gestisce in coordinamento con il servizio di pulizie condominiali ordinarie.",
    href: "/pulizie-condominiali-roma/",
    linkLabel: "→ Pulizie condominiali Roma",
  },
  {
    title: "Abitazioni private",
    body: "Sanificazione post malattia, preparazione di ambienti per ospiti con allergie o sensibilità respiratorie, trattamento di ambienti con problemi di muffa o odori persistenti: la sanificazione professionale risponde a esigenze concrete anche nell'abitazione privata. Luna Service gestisce interventi di sanificazione residenziale a Roma con la stessa struttura professionale degli interventi commerciali.",
    href: null,
    linkLabel: null,
  },
  {
    title: "Strutture sanitarie e ambienti sensibili",
    body: "Studi medici, studi dentistici, ambulatori, centri estetici e strutture che operano in contesti di potenziale contaminazione biologica richiedono protocolli di sanificazione specifici e documentazione certificabile. Luna Service gestisce questi interventi con prodotti e protocolli adeguati agli ambienti sanitari — su richiesta con certificazione conforme alle normative specifiche del settore.",
    href: null,
    linkLabel: null,
  },
] as const;

const useCaseItems = [
  {
    title: "Come manutenzione preventiva periodica",
    body: "Indipendentemente da eventi specifici, integrare la sanificazione periodica nel piano di igiene di un ambiente — mensile, trimestrale o semestrale in base al tipo di struttura e all'intensità di utilizzo — previene l'accumulo di carica microbica nel tempo e mantiene gli standard igienici a un livello che la pulizia ordinaria da sola non garantisce.",
    link: null,
  },
  {
    title: "Dopo malattie infettive",
    body: "In seguito a un caso di malattia infettiva in un ambiente — ufficio, camera d'albergo, abitazione, struttura scolastica — la sanificazione professionale riduce la carica virale e batterica residua nell'aria e sulle superfici, abbassando il rischio di contagio per chi occuperà lo stesso spazio successivamente.",
    link: null,
  },
  {
    title: "Prima di rientri dopo lunghe assenze",
    body: "Un appartamento chiuso per mesi, un ufficio non utilizzato per un lungo periodo, una struttura ricettiva che riapre dopo la bassa stagione: la sanificazione prima del rientro elimina muffe, batteri e odori accumulati durante il periodo di inattività e prepara l'ambiente per una ripresa in condizioni igieniche ottimali.",
    link: null,
  },
  {
    title: "Per ospiti o occupanti con allergie",
    body: "Gli acari della polvere, le muffe e gli allergeni ambientali si accumulano nei tessuti e nell'aria degli ambienti chiusi. La sanificazione con ozono è particolarmente efficace per ridurre la carica allergenica — una soluzione concreta per chi deve preparare un ambiente per ospiti con allergie respiratorie o asma.",
    link: null,
  },
  {
    title: "Prima di eventi o periodi di alta occupazione",
    body: "Prima di un evento importante, di un periodo di alta stagione o di un picco di presenze, la sanificazione completa dell'ambiente garantisce condizioni igieniche ottimali per tutti gli occupanti — e può diventare un elemento di comunicazione verso gli ospiti più attenti alla qualità igienica.",
    link: null,
  },
  {
    title: "Post ristrutturazione o lavori",
    body: "Dopo lavori di ristrutturazione, la polvere edile e i residui chimici dei materiali da costruzione contaminano l'aria e le superfici dell'ambiente. La sanificazione dopo lo sgrosso completa il ripristino igienico dell'ambiente a uno standard sicuro per gli occupanti.",
    link: {
      href: "/pulizie-straordinarie-roma/post-ristrutturazione/",
      label: "→ Sgrosso post ristrutturazione Roma",
    },
  },
] as const;

const certificationContents = [
  "Data e ora dell'intervento",
  "Identificazione delle aree trattate con metratura",
  "Metodo utilizzato — ozono o nebulizzazione — con specifiche tecniche",
  "Prodotto utilizzato nel caso della nebulizzazione con scheda di sicurezza allegata",
  "Concentrazione e tempo di esposizione",
  "Nome e qualifica dell'operatore che ha eseguito il trattamento",
  "Dichiarazione di conformità al protocollo adottato",
  "Documentazione fotografica delle aree trattate su richiesta",
] as const;

const certificationUses = [
  "Ispezioni ASL e audit sanitari per strutture ricettive e sanitarie",
  "Dossier qualità aziendale per uffici e ambienti di lavoro",
  "Pratiche assicurative in seguito a eventi specifici",
  "Comunicazione verso ospiti e clienti — sempre più richiesta nel settore hospitality",
  "Rendiconto all'assemblea condominiale per le parti comuni",
  "Documentazione per landlord o property manager in caso di contestazioni",
] as const;

const faqItems = [
  {
    q: "Qual è la differenza tra sanificazione e disinfezione?",
    a: "La disinfezione riduce la carica batterica e virale sulle superfici trattate direttamente con prodotti chimici specifici. La sanificazione è un processo più ampio che combina pulizia e disinfezione secondo un protocollo documentato con l'obiettivo di portare la carica microbica complessiva — superfici e aria — a livelli di sicurezza definiti da normativa. La sanificazione include il trattamento dell'aria e delle superfici non raggiungibili manualmente, e produce documentazione certificabile. La disinfezione no.",
  },
  {
    q: "Quanto dura una sanificazione professionale con ozono?",
    a: "I tempi dipendono dalla cubatura dell'ambiente. Per un appartamento standard o un ufficio di medie dimensioni, il trattamento con ozono richiede 1–2 ore di esposizione più 1–2 ore di areazione prima del rientro — quindi 2–4 ore totali dall'inizio del trattamento. Per superfici superiori ai 200 mq i tempi si allungano proporzionalmente. Luna Service programma gli interventi negli orari di minor impatto sull'utilizzo dell'ambiente — sera, notte o fine settimana.",
  },
  {
    q: "La sanificazione con ozono è sicura per le persone e gli animali?",
    a: "L'ozono ad alte concentrazioni è irritante per le vie respiratorie — per questo l'ambiente non può essere occupato durante il trattamento. Dopo il periodo di areazione controllata — 1–2 ore — l'ozono si riduce spontaneamente a ossigeno molecolare e l'ambiente è sicuro per persone e animali. Non rimangono residui chimici nell'ambiente. Luna Service certifica il tempo di sicurezza per il rientro in ogni certificazione di intervento.",
  },
  {
    q: "Con quale frequenza va eseguita la sanificazione?",
    a: "Dipende dalla tipologia dell'ambiente e dall'intensità di utilizzo. Per gli ambienti ad alto traffico — hotel, uffici, strutture sanitarie — la sanificazione mensile o trimestrale è una pratica di manutenzione preventiva sempre più diffusa. Per le abitazioni private, una sanificazione semestrale o annuale è generalmente sufficiente come manutenzione. Situazioni specifiche — post malattia, apertura dopo lunga assenza, presenza di allergeni — richiedono interventi puntuali aggiuntivi.",
  },
  {
    q: "La certificazione di sanificazione è valida per le ispezioni ASL?",
    a: "La certificazione di Luna Service documenta il protocollo adottato, i prodotti utilizzati con schede di sicurezza allegate, i parametri tecnici dell'intervento e la qualifica degli operatori. È un documento che dimostra l'adozione di misure professionali di igiene ambientale e può essere presentato in sede di ispezione ASL come parte della documentazione del sistema qualità della struttura. La validità specifica dipende dalle normative applicabili al tipo di struttura e dalla ASL competente per territorio.",
  },
  {
    q: "Offrite la sanificazione anche per ambienti di piccole dimensioni come un appartamento?",
    a: "Sì. Luna Service esegue interventi di sanificazione su ambienti di qualsiasi dimensione — dal monolocale al complesso aziendale. Per gli ambienti di piccole dimensioni il costo è proporzionalmente ridotto e i tempi di intervento sono più brevi. Il protocollo adottato e la certificazione rilasciata sono gli stessi indipendentemente dalla dimensione dell'ambiente.",
  },
] as const;

function HeroSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[20px] md:pt-[28px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-[42px]">
                <h1 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.02] tracking-[-0.025em] text-[#fbf9f3]">
                  Sanificazione professionale degli ambienti a Roma: ozono, nebulizzazione e certificazione inclusa
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  La sanificazione professionale va oltre la pulizia ordinaria: elimina batteri, virus, funghi e agenti
                  allergenici dalle superfici e dall&apos;aria con metodi certificati. Luna Service esegue interventi di
                  sanificazione a Roma per hotel, strutture ricettive, uffici, condomini e privati con protocollo
                  documentato e certificazione rilasciata a fine lavoro.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <a
                    href="#preventivo-form"
                    className="inline-flex items-center justify-center rounded-[999px] bg-[#99cc33] px-[28px] py-[20px] text-[15px] font-medium text-[#161714]"
                  >
                    Richiedi il preventivo per la sanificazione
                  </a>
                  <a
                    href="https://wa.me/"
                    className="inline-flex items-center justify-center rounded-[999px] border border-[rgba(255,255,255,0.35)] px-[26px] py-[18px] text-[15px] text-[#fbf9f3]"
                  >
                    Scrivici su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:absolute md:top-0 md:right-0 md:bottom-0 w-full md:w-[50%] min-h-[220px] md:min-h-0">
            <Image
              src="/images/pages/sanificazione-ambienti-roma-hero.jpg"
              alt="Sanificazione ambienti Roma"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.35)_100%)]" />
          </div>
          <div className="hidden md:block absolute inset-0 bg-[linear-gradient(90deg,rgba(22,23,20,0.96)_0%,rgba(22,23,20,0.92)_45%,rgba(22,23,20,0)_62%)] pointer-events-none" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-[16px] md:px-[56px] mt-[14px] flex flex-wrap gap-[8px] md:gap-[10px]">
        {trustItems.map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-[6px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[12px] py-[8px] text-[12px] md:text-[13px] text-[#161714]"
          >
            <span className="text-[#99cc33]">✔</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function DistinctionSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>La distinzione fondamentale</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Pulizia, disinfezione e sanificazione: le differenze che ogni committente dovrebbe conoscere
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        I tre termini vengono spesso usati come sinonimi — ma non lo sono. Per chi commissiona un servizio professionale,
        la distinzione è importante sia sul piano operativo che su quello normativo.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {distinctionItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Un ambiente pulito non è necessariamente un ambiente sanificato. Un ambiente sanificato professionalmente — con
        protocollo documentato e certificazione dell&apos;intervento — offre garanzie che la pulizia ordinaria non può
        fornire. È questa la differenza che Luna Service porta in ogni intervento di sanificazione a Roma.
      </p>
    </section>
  );
}

function MethodsSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>I metodi</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        I metodi di sanificazione professionale che utilizziamo a Roma
      </h2>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        Luna Service utilizza due metodi di sanificazione professionale complementari, selezionati in base alle
        caratteristiche dell&apos;ambiente e alle esigenze specifiche del cliente.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {methodItems.map((item) => (
          <article
            key={item.title}
            className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[24px] py-[24px]"
          >
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#fbf9f3]">{item.title}</h3>
            <div className="mt-[12px] space-y-[12px]">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph} className="m-0 text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function TargetsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Per chi è</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Chi richiede la sanificazione professionale a Roma: i target e le loro esigenze
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        La sanificazione è un servizio trasversale che risponde a esigenze diverse in contesti diversi. Abbiamo costruito
        una pagina dedicata per ciascun target principale — con le informazioni specifiche sulle modalità di intervento e
        sui protocolli adottati.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {targetItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
            {item.href && item.linkLabel ? (
              <Link href={item.href} className="mt-[14px] inline-flex text-[14px] text-[#161714] underline">
                {item.linkLabel}
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Quando serve</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Quando è necessaria la sanificazione professionale: i casi principali
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        La sanificazione non è solo una risposta alle emergenze. È — o dovrebbe essere — una componente preventiva del
        piano di igiene di qualsiasi ambiente ad alto utilizzo. Ecco i contesti in cui il suo valore è più evidente.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {useCaseItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
            {item.link ? (
              <Link href={item.link.href} className="mt-[14px] inline-flex text-[14px] text-[#161714] underline">
                {item.link.label}
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function CertificationSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>La certificazione</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        La certificazione di sanificazione: cosa è, cosa contiene e perché è importante
      </h2>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        Ogni intervento di sanificazione eseguito da Luna Service è documentato e certificato. È la differenza che
        distingue un intervento professionale da uno improvvisato — e che ha valore concreto in più contesti.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        <article className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[24px] py-[24px]">
          <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#fbf9f3]">
            Cosa contiene la certificazione di sanificazione di Luna Service
          </h3>
          <ul className="mt-[12px] mb-0 list-disc space-y-[10px] pl-[20px] text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">
            {certificationContents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[24px] py-[24px]">
          <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#fbf9f3]">A cosa serve la certificazione</h3>
          <ul className="mt-[12px] mb-0 list-disc space-y-[10px] pl-[20px] text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">
            {certificationUses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}

function FormSection() {
  return (
    <div id="preventivo-form">
      <SectionShell
        fullBleed
        bgClassName="bg-[#99cc33]"
        innerClassName="rounded-[32px]"
        boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
        outerClassName="mt-[96px] md:mt-[140px]"
      >
        <h2 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#1a1f0d]">
          Richiedi il preventivo per la sanificazione del tuo ambiente
        </h2>
        <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
          Dicci che tipo di ambiente vuoi sanificare e per quale motivo. Ti risponderemo con una proposta tecnica
          concreta entro poche ore.
        </p>
        <form className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
            <InputField label="Nome e cognome*" placeholder="Mario Rossi" />
            <SelectField
              label="Tipologia ambiente*"
              options={[
                "Hotel / struttura ricettiva",
                "Ufficio / ambiente di lavoro",
                "Condominio / parti comuni",
                "Abitazione privata",
                "Studio medico / sanitario",
                "Locale commerciale",
                "Altro",
              ]}
            />
            <SelectField
              label="Superficie approssimativa*"
              options={["Fino a 50 mq", "Da 50 a 100 mq", "Da 100 a 300 mq", "Oltre 300 mq"]}
            />
            <SelectField
              label="Metodo preferito"
              options={["Ozono", "Nebulizzazione", "Non so — vorrei un consiglio tecnico"]}
            />
            <SelectField
              label="Motivo dell'intervento"
              options={[
                "Manutenzione periodica programmata",
                "Post malattia / caso infettivo",
                "Apertura dopo lunga assenza",
                "Presenza di allergeni / muffa",
                "Prima di evento o alta occupazione",
                "Post ristrutturazione",
                "Altro",
              ]}
            />
            <InputField label="Zona di Roma*" placeholder="Es. EUR, Prati, Ostia..." />
            <SelectField
              label="Hai bisogno della certificazione dell'intervento?"
              options={[
                "Sì — per ispezioni o audit",
                "Sì — per comunicazione verso ospiti / clienti",
                "Sì — per pratiche assicurative",
                "Non so ancora",
              ]}
            />
            <SelectField
              label="Quando vorreste intervenire?"
              options={["Il prima possibile", "Entro 1 settimana", "Entro 1 mese", "Data da definire"]}
            />
            <InputField label="Telefono*" placeholder="+39 ..." />
            <InputField label="Email*" placeholder="nome@email.it" />
            <div className="md:col-span-2">
              <TextareaField
                label="Note"
                placeholder="Es. numero di vani, presenza di moquette, materiali particolari, orari disponibili per il trattamento, esigenze specifiche…"
              />
            </div>
          </div>
          <div className="mt-[16px]">
            <PrimaryCtaButton invert>Richiedi il preventivo per la sanificazione</PrimaryCtaButton>
          </div>
        </form>
        <a href="https://wa.me/" className="mt-[14px] inline-flex text-[14px] text-[#1a1f0d] underline">
          Hai un&apos;urgenza o una domanda tecnica? Scrivici su WhatsApp →
        </a>
        <div className="mt-[18px] text-[14px] text-[#1a1f0d]">
          <Link href="/pulizie-hotel-roma/sanificazione/" className="underline">
            /pulizie-hotel-roma/sanificazione/
          </Link>{" "}
          ·{" "}
          <Link href="/pulizie-condominiali-roma/" className="underline">
            /pulizie-condominiali-roma/
          </Link>{" "}
          ·{" "}
          <Link href="/pulizie-straordinarie-roma/post-ristrutturazione/" className="underline">
            /pulizie-straordinarie-roma/post-ristrutturazione/
          </Link>{" "}
          ·{" "}
          <Link href="/blog/" className="underline">
            /blog/
          </Link>{" "}
          ·{" "}
          <Link href="/contatti/" className="underline">
            /contatti/
          </Link>
        </div>
      </SectionShell>
    </div>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-[16px] md:px-[56px] py-[90px] md:py-[120px]">
      <div className="text-center mb-[40px] md:mb-[64px] flex flex-col items-center">
        <div className="mb-[28px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#3a3b36]">
          <span className="h-[6px] w-[6px] rounded-full bg-[#99cc33]" />
          FAQ
        </div>
        <h2 className="m-0 text-center font-serif text-[32px] md:text-[56px] leading-[1] tracking-[-0.025em] text-[#161714]">
          Domande frequenti sulla sanificazione professionale a Roma
        </h2>
      </div>
      <div className="mx-auto flex max-w-[920px] flex-col gap-[12px]">
        {faqItems.map((item, idx) => (
          <FaqItem
            key={item.q}
            question={item.q}
            answer={item.a}
            isOpen={open === idx}
            onToggle={() => setOpen(open === idx ? -1 : idx)}
          />
        ))}
      </div>
    </section>
  );
}

export function SanificazioneAmbientiRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li className="text-[#161714]">Sanificazione Ambienti Roma</li>
        </ol>
      </nav>
      <HeroSection />
      <DistinctionSection />
      <MethodsSection />
      <TargetsSection />
      <UseCasesSection />
      <CertificationSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
