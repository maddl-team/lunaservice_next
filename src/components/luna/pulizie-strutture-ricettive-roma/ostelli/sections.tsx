"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChoiceChip,
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
  "Squadre dimensionate sui volumi dell'ostello",
  "Protocollo specifico per dormitori e spazi condivisi",
  "Standard igienici garantiti su ogni intervento",
  "Preventivo calibrato sui volumi reali",
] as const;

const operationalItems = [
  {
    title: "Volumi elevati e rotazioni rapide",
    body: "Un ostello con quaranta o cinquanta posti letto può avere decine di check-out ogni mattina. Ogni posto letto richiede cambio biancheria, rifacimento, verifica dello spazio personale. L'intero volume deve essere gestito in tempi strettissimi, spesso entro la mattinata, per essere pronto per i nuovi arrivi del pomeriggio. Luna Service dimensiona il team in base al numero di posti letto e alla finestra temporale disponibile — non manda un operatore solo dove ne servono quattro.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=80",
  },
  {
    title: "Bagni comuni ad alto utilizzo",
    body: "I bagni comuni di un ostello sono tra gli spazi più intensamente utilizzati nell'intera categoria ricettiva. Con decine di persone che li usano ogni giorno — spesso in orari concentrati, come la mattina prima delle partenze — richiedono interventi multipli durante la giornata, non una pulizia unica. Luna Service organizza un piano di manutenzione continua per i bagni comuni: interventi programmati a cadenza regolare, con rifornimento costante di consumabili e ispezione qualità documentata.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1400&q=80",
  },
  {
    title: "Dormitori e gestione dello spazio condiviso",
    body: "Pulire un dormitorio richiede attenzione alla gestione dello spazio personale degli ospiti ancora presenti: zaini, oggetti personali, effetti personali lasciati sui letti o negli armadietti. Il protocollo operativo di Luna Service per i dormitori include procedure precise per la gestione degli effetti personali — spostamento con cura, segnalazione di oggetti dimenticati, rispetto rigoroso degli spazi personali degli ospiti presenti.",
    image: "https://images.unsplash.com/photo-1555854877-0b04f1d5a80e?w=1400&q=80",
  },
  {
    title: "Cucine e spazi comuni condivisi",
    body: "Le cucine comuni degli ostelli sono tra le aree più difficili da mantenere pulite: usate da decine di ospiti diversi, spesso in orari non presidiati, con livelli di cura molto variabili. Luna Service gestisce la pulizia delle cucine comuni con interventi programmati — almeno mattina e sera — e pulizia profonda periodica di frigoriferi, fornelli, superfici e pavimenti. Le aree comuni — sale relax, sale colazione, spazi lavanderia — seguono un piano di manutenzione calibrato sugli orari di utilizzo.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1400&q=80",
  },
  {
    title: "Scale, corridoi e aree di transito",
    body: "In un ostello le aree di transito sono percorse continuamente da ospiti con zaini, trolley e bagagli. I pavimenti si sporcano rapidamente, le pareti dei corridoi mostrano segni di utilizzo intenso, le scale accumulano sporco in tempi brevi. Luna Service include le aree di transito nel piano di intervento quotidiano, con frequenze adattate al volume di traffico della struttura.",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1400&q=80",
  },
] as const;

const methodItems = [
  {
    title: "Sopralluogo e mappatura operativa",
    body: "Prima dell'avvio del servizio, il nostro supervisore effettua un sopralluogo approfondito della struttura: conta i posti letto per dormitorio, mappa i bagni comuni, verifica le cucine e gli spazi comuni, analizza i flussi di check-in e check-out. Su questa base costruiamo il piano operativo: numero di operatori necessari, frequenze degli interventi per ogni area, orari ottimali, protocollo per i dormitori.",
  },
  {
    title: "Team dimensionato sul volume",
    body: "Il numero di operatori assegnati alla struttura è calcolato sul volume reale — posti letto, numero di bagni comuni, superficie delle aree comuni — non su stime generiche. Un ostello da trenta posti letto e uno da cento richiedono team diversi: il nostro servizio si adatta.",
  },
  {
    title: "Supervisore in struttura nei picchi",
    body: "Per gli ostelli con alta occupazione o durante i periodi di punta, il supervisore può essere presente in struttura durante gli interventi principali — mattina e sera — per coordinare il team, gestire le urgenze e garantire il rispetto del protocollo in tempo reale.",
  },
  {
    title: "Piano di manutenzione continua per i bagni",
    body: "I bagni comuni non vengono puliti una volta al giorno: vengono mantenuti attraverso un piano di interventi distribuiti nell'arco della giornata. Frequenza, orari e protocollo vengono definiti durante il sopralluogo in base al numero di bagni, al numero di ospiti e agli orari di picco di utilizzo.",
  },
] as const;

const structureTypeItems = [
  {
    title: "Ostelli tradizionali",
    body: "Strutture con dormitori misti o separati, bagni comuni, cucina condivisa e aree comuni. Il servizio copre tutte le aree con frequenze adattate al volume di ospiti e alla configurazione degli spazi.",
  },
  {
    title: "Dormitori universitari e studentati",
    body: "I dormitori universitari e gli studentati privati hanno esigenze specifiche: ospiti a lungo termine — settimane o mesi — con una presenza continuativa che richiede un piano di pulizia ricorrente piuttosto che interventi a ogni check-out. Luna Service progetta il servizio sulla realtà di queste strutture: pulizia settimanale delle camere, manutenzione continua dei bagni e delle aree comuni, interventi straordinari al cambio degli ospiti.",
  },
  {
    title: "Strutture per gruppi e campi base",
    body: "Strutture utilizzate da gruppi organizzati — scolastici, sportivi, religiosi, aziendali — con occupazione intensa e concentrata in periodi definiti. Luna Service gestisce la pulizia di queste strutture con interventi intensivi nei periodi di presenza e manutenzione ridotta nei periodi di inattività.",
  },
  {
    title: "Residence e appartamenti condivisi",
    body: "Strutture ibride tra ostello e casa vacanza, con camere o appartamenti condivisi da più ospiti. Il servizio viene progettato sulla configurazione specifica — numero di ospiti per unità, configurazione dei bagni, presenza di cucina — con frequenze adattate all'intensità di utilizzo.",
  },
] as const;

const faqItems = [
  {
    q: "Con quale frequenza vanno puliti i bagni comuni di un ostello?",
    a: "I bagni comuni di un ostello ad alta occupazione richiedono interventi multipli durante la giornata — non una pulizia unica. Come riferimento generale, un bagno comune usato da più di dieci persone al giorno richiede almeno tre interventi: mattina presto prima delle partenze, a metà giornata e sera. Per strutture con occupazione molto alta la frequenza può essere superiore. Luna Service definisce il piano di manutenzione dei bagni comuni durante il sopralluogo, in base al numero di bagni, al numero di ospiti e agli orari di picco.",
  },
  {
    q: "Come gestite la pulizia dei dormitori quando ci sono ancora ospiti presenti?",
    a: "Il nostro protocollo per i dormitori include procedure precise per la gestione degli effetti personali degli ospiti ancora presenti: gli oggetti personali vengono spostati con cura per consentire la pulizia dello spazio e riposizionati con ordine. Gli operatori sono formati per lavorare nei dormitori con la discrezione e il rispetto necessari in uno spazio condiviso da persone che potrebbero ancora stare dormendo o riposando.",
  },
  {
    q: "Quanti operatori mandate per un ostello con cinquanta posti letto?",
    a: "Il numero dipende dalla configurazione della struttura, dalla finestra temporale disponibile e dal volume di check-out giornalieri. Non esiste un rapporto fisso operatori/posti letto: lo stabiliamo durante il sopralluogo in base alla realtà specifica della struttura. L'obiettivo è sempre che il servizio sia completato nei tempi necessari senza compromettere lo standard.",
  },
  {
    q: "Gestite anche la cucina comune e le aree relax?",
    a: "Sì. La cucina comune e le aree relax rientrano nel piano di intervento con frequenze adattate agli orari di utilizzo. La cucina comune riceve almeno due interventi al giorno — mattina e sera — con pulizia profonda periodica di frigoriferi, fornelli e superfici. Le aree relax e le sale comuni vengono mantenute attraverso interventi distribuiti nell'arco della giornata.",
  },
  {
    q: "Il servizio è economicamente sostenibile per un ostello con margini ridotti?",
    a: "Sì. Luna Service costruisce i preventivi per ostelli calibrati sui volumi reali e sulle ore effettive di servizio necessarie. Il costo mensile è trasparente e prevedibile — senza sorprese. Quando si confronta con il costo reale della gestione interna — stipendi, contributi, attrezzature, sostituzioni, formazione — l'outsourcing professionale è spesso comparabile o più conveniente, con il vantaggio di eliminare tutta la complessità operativa della gestione del personale.",
  },
  {
    q: "Lavorate anche con dormitori universitari e studentati?",
    a: "Sì. I dormitori universitari e gli studentati hanno esigenze diverse dagli ostelli turistici: ospiti a lungo termine, presenza continuativa, piano di pulizia ricorrente piuttosto che interventi a ogni check-out. Luna Service progetta il servizio sulla realtà specifica di queste strutture, con pulizia settimanale delle camere, manutenzione continua dei bagni e delle aree comuni e interventi straordinari al cambio degli ospiti a fine semestre o a fine anno accademico.",
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
                  Pulizie professionali per ostelli e dormitori a Roma: volumi alti, standard garantiti, costi sostenibili
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Gli ostelli hanno esigenze di pulizia diverse da qualsiasi altra struttura ricettiva: volumi elevati,
                  rotazioni rapide, spazi condivisi intensamente utilizzati e budget operativi definiti. Luna Service
                  gestisce le pulizie di ostelli, dormitori e strutture per gruppi a Roma con squadre dimensionate sui
                  volumi reali e protocolli costruiti sulla specificità di questo tipo di struttura.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per il tuo ostello</PrimaryCtaButton>
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
              src="https://images.unsplash.com/photo-1555854877-0b04f1d5a80e?w=1800&q=80"
              alt="Pulizie ostelli e dormitori Roma"
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

function ContextSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Il contesto</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Roma è una delle mete più scelte dal turismo giovanile europeo. Gli ostelli sono il suo sistema nervoso ricettivo.
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Roma attrae ogni anno milioni di giovani viaggiatori, studenti, backpacker e gruppi organizzati da tutta Europa e dal mondo. Questa domanda si traduce in un mercato dell&apos;ospitalità low-cost e mid-range tra i più dinamici d&apos;Italia, con ostelli, dormitori, strutture per gruppi e studentati che operano a tassi di occupazione molto alti per buona parte dell&apos;anno.
        </p>
        <p className="m-0">
          Gestire la pulizia di un ostello è una sfida operativa di tutt&apos;altra scala rispetto a quella di un B&amp;B o di una casa vacanza. Un ostello con cinquanta posti letto può avere check-out e check-in distribuiti su tutta la giornata, bagni comuni utilizzati simultaneamente da decine di ospiti, sale comuni che non si svuotano mai, cucine condivise che richiedono interventi continui.
        </p>
        <p className="m-0">
          La sfida non è solo la quantità: è la velocità. Un dormitorio deve essere pronto in tempi strettissimi, spesso mentre altri ospiti sono ancora presenti nella struttura. I bagni comuni devono essere puliti più volte al giorno. Le aree comuni non possono aspettare la sera per essere rimesse in ordine.
        </p>
        <p className="m-0">
          Luna Service lavora con ostelli e strutture per gruppi a Roma con un approccio operativo costruito su questi vincoli: squadre più numerose, interventi più frequenti, protocolli calibrati sulla realtà ad alto volume di questa tipologia ricettiva.
        </p>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Specificità operative</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Perché le pulizie di un ostello richiedono un approccio diverso
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Un ostello non è un hotel piccolo. Ha dinamiche operative proprie che richiedono un servizio di pulizia progettato su quella realtà — non adattato da un modello pensato per strutture diverse.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {operationalItems.map((item, idx) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]">
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Area</span>
              </div>
              <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-[12px] flex-1 text-[14px] leading-[1.55] text-[#3a3b36]">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ChallengesSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Il metodo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Come organizziamo il servizio per ostelli: efficienza senza compromessi sullo standard
      </h2>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        La gestione delle pulizie in un ostello richiede una capacità organizzativa che va oltre il semplice &quot;mandare qualcuno a pulire&quot;. Richiede pianificazione, coordinamento e la capacità di adattarsi in tempo reale alle variazioni dell&apos;occupazione.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {methodItems.map((item, idx) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[20px] py-[20px]">
            <div className="mb-[8px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
              <span>Passo {idx + 1}</span>
              <span>Metodo</span>
            </div>
            <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em] text-[#fbf9f3]">{item.title}</h3>
            <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">{item.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function ReviewsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Costi e sostenibilità</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Pulizia professionale per ostelli: come rendere il servizio economicamente sostenibile
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Una delle obiezioni più comuni dei gestori di ostelli riguarda il costo: un servizio professionale strutturato sembra incompatibile con i margini operativi di una struttura low-cost o mid-range.
        </p>
        <p className="m-0">
          È una preoccupazione legittima — e comprensibile. Ma è basata su un confronto sbagliato.
        </p>
        <p className="m-0">
          Il costo reale della pulizia gestita internamente in un ostello include stipendi, contributi, attrezzature, prodotti, formazione, sostituzioni per assenze e il tempo del management sottratto alla gestione degli ospiti. Quando si sommano tutte le voci, il confronto con un servizio in outsourcing è spesso più favorevole di quanto si pensi.
        </p>
        <p className="m-0">
          Luna Service costruisce i preventivi per ostelli e dormitori su misura, calibrati sui volumi reali e sulle ore effettive di servizio necessarie. Non applichiamo tariffe orarie generiche: costruiamo un piano operativo specifico per la tua struttura e lo trasformiamo in un costo mensile trasparente e prevedibile.
        </p>
        <p className="m-0">
          Il risultato è un servizio professionale con un costo gestibile — e con l&apos;eliminazione di tutta la complessità operativa della gestione interna.
        </p>
      </div>
    </section>
  );
}

function FlexibilitySection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Tipologie servite</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Le strutture per cui lavoriamo nel segmento ostelli e dormitori a Roma
      </h2>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {structureTypeItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <SectionShell
      fullBleed
      bgClassName="bg-[#99cc33]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
      outerClassName="mt-[96px] md:mt-[140px]"
    >
      <h2 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#1a1f0d]">
        Richiedi il preventivo per le pulizie del tuo ostello o dormitorio a Roma
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci quanti posti letto ha la tua struttura e come sono organizzati gli spazi. Ti risponderemo con una proposta calibrata sui tuoi volumi reali entro poche ore.
      </p>
      <form className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" />
          <InputField label="Nome della struttura" placeholder="Ostello Roma Centro" />
          <SelectField
            label="Tipologia struttura*"
            options={[
              "Ostello tradizionale",
              "Dormitorio universitario / studentato",
              "Struttura per gruppi",
              "Residence / appartamenti condivisi",
              "Altro",
            ]}
          />
          <SelectField
            label="Numero di posti letto*"
            options={[
              "Fino a 20 posti letto",
              "Da 21 a 50 posti letto",
              "Da 51 a 100 posti letto",
              "Oltre 100 posti letto",
            ]}
          />
          <SelectField
            label="Numero di bagni comuni*"
            options={[
              "1–2 bagni comuni",
              "3–5 bagni comuni",
              "Oltre 5 bagni comuni",
              "Bagni privati per camera",
            ]}
          />
          <div className="md:col-span-2">
            <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Aree comuni presenti</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceChip label="Cucina comune" />
              <ChoiceChip label="Sala relax / sala comune" />
              <ChoiceChip label="Sala colazione" />
              <ChoiceChip label="Lavanderia" />
              <ChoiceChip label="Altro" />
            </div>
          </div>
          <SelectField
            label="Frequenza media di rotazione ospiti"
            options={[
              "Alta — molti check-out ogni giorno",
              "Media — qualche check-out al giorno",
              "Bassa — ospiti a lungo termine",
              "Variabile per stagione",
            ]}
          />
          <InputField label="Zona di Roma*" placeholder="Es. Termini, Trastevere, EUR..." />
          <InputField label="Telefono*" placeholder="+39 ..." />
          <InputField label="Email*" placeholder="nome@ostello.it" />
          <div className="md:col-span-2">
            <TextareaField
              label="Note"
              placeholder="Es. orari preferiti per gli interventi, configurazione specifica dei dormitori, esigenze particolari…"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <PrimaryCtaButton>Richiedi il preventivo gratuito</PrimaryCtaButton>
        </div>
        <a href="https://wa.me/" className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Vuoi discutere i dettagli direttamente? Scrivici su WhatsApp →
        </a>
      </form>
      <div className="mt-[18px] text-[14px] text-[#1a1f0d]">
        <Link href="/pulizie-strutture-ricettive-roma/" className="underline">
          /pulizie-strutture-ricettive-roma/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-strutture-ricettive-roma/bb/" className="underline">
          /bb/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-strutture-ricettive-roma/case-vacanza/" className="underline">
          /case-vacanza/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-strutture-ricettive-roma/affittacamere/" className="underline">
          /affittacamere/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-hotel-roma/preventivo/" className="underline">
          /pulizie-hotel-roma/preventivo/
        </Link>{" "}
        ·{" "}
        <Link href="/sanificazione-ambienti-roma/" className="underline">
          /sanificazione-ambienti-roma/
        </Link>
      </div>
    </SectionShell>
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
          Domande frequenti sulle pulizie per ostelli e dormitori a Roma
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

export function PulizieOstelliRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Strutture Ricettive Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizie Ostelli e Dormitori Roma</li>
        </ol>
      </nav>
      <HeroSection />
      <ContextSection />
      <ServicesSection />
      <ChallengesSection />
      <ReviewsSection />
      <FlexibilitySection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
