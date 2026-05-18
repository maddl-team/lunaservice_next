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
  "Protocollo igienizzazione documentato per ogni bagno",
  "Prodotti certificati per superfici sanitarie",
  "Verifica qualità a fine ogni intervento",
  "Conformità agli standard ASL vigenti",
] as const;

const protocolItems = [
  {
    title: "Bagni delle camere — intervento quotidiano",
    body: "Ogni bagno di camera viene trattato secondo una sequenza operativa precisa che parte dall'alto e procede verso il basso, per evitare la ricontaminazione delle superfici già pulite. Il protocollo standard include: pulizia e igienizzazione del WC — interno, esterno, coperchio e base — con prodotto disinfettante certificato; pulizia del lavandino, della rubinetteria e dello specchio senza aloni; pulizia e igienizzazione della doccia o della vasca — box, piastrelle, soffione, tenda o porta in vetro; cambio di asciugamani e tappetino; rabbocco o sostituzione degli amenity — sapone, shampoo, gel doccia, cuffia; svuotamento del cestino con sostituzione del sacchetto; pulizia del pavimento con prodotto igienizzante appropriato al materiale; verifica visiva finale prima di uscire dal bagno.",
    image: "/images/pages/pulizie-hotel-roma-bagni-protocollo-01.jpg",
  },
  {
    title: "Bagni delle camere — pulizia profonda post check-out",
    body: "Tra la partenza di un ospite e l'arrivo del successivo, il bagno riceve un intervento più approfondito che copre le superfici che la pulizia quotidiana non tratta: detartratura di rubinetteria e soffione doccia, pulizia profonda del sigillante attorno alla vasca o al box doccia, pulizia degli angoli e delle giunture delle piastrelle, controllo e trattamento di eventuali macchie di calcare o muffa, pulizia dell'interno degli armadi del bagno, verifica e sostituzione degli amenity completi.",
    image: "/images/pages/pulizie-hotel-roma-bagni-protocollo-02.jpg",
  },
  {
    title: "Bagni e servizi igienici delle aree comuni",
    body: "I bagni delle aree comuni — lobby, ristorante, sala colazione, palestra, spa — hanno un'intensità di utilizzo molto superiore a quelli delle camere e richiedono interventi più frequenti durante la giornata. Luna Service organizza un piano di manutenzione continua per i bagni delle aree comuni: interventi programmati a cadenza regolare durante l'orario operativo dell'hotel, con rifornimento costante di sapone, carta igienica e asciugamani, e ispezione qualità documentata a fine giornata.",
    image: "/images/pages/pulizie-hotel-roma-bagni-protocollo-03.jpg",
  },
] as const;

const sequencePhases = [
  {
    phase: "Fase 1 — Preparazione",
    points: [
      "Rimozione biancheria sporca e rifiuti",
      "Applicazione prodotto disinfettante su WC, lavandino e doccia — tempo di contatto minimo 5 minuti",
      "Apertura ricambio d'aria se disponibile",
    ],
  },
  {
    phase: "Fase 2 — Superfici alte",
    points: [
      "Pulizia specchio con prodotto specifico e panno dedicato",
      "Spolveratura e pulizia mensola, portasapone, portarotolo",
      "Pulizia parete sopra il lavandino",
    ],
  },
  {
    phase: "Fase 3 — Lavandino e rubinetteria",
    points: [
      "Pulizia e igienizzazione lavandino",
      "Pulizia rubinetteria con prodotto anticalcare se necessario",
      "Asciugatura e lucidatura della rubinetteria",
    ],
  },
  {
    phase: "Fase 4 — Doccia o vasca",
    points: [
      "Pulizia pareti doccia o vasca con prodotto appropriato al materiale",
      "Pulizia e igienizzazione soffione e braccio doccia",
      "Pulizia porta vetro o tenda doccia — interno ed esterno",
      "Trattamento sigillante se necessario",
    ],
  },
  {
    phase: "Fase 5 — WC",
    points: [
      "Igienizzazione interna con prodotto specifico — brosse dedicato solo a questo WC",
      "Pulizia esterna — coperchio, corpo, base",
      "Igienizzazione dello scarico",
    ],
  },
  {
    phase: "Fase 6 — Pavimento",
    points: [
      "Lavaggio con prodotto igienizzante appropriato al materiale",
      "Attenzione agli angoli e alle giunture delle piastrelle",
      "Asciugatura o verifica asciugatura naturale",
    ],
  },
  {
    phase: "Fase 7 — Ripristino e verifica",
    points: [
      "Posizionamento asciugamani puliti",
      "Rabbocco o sostituzione amenity",
      "Sostituzione sacchetto cestino",
      "Verifica visiva complessiva — specchio, rubinetteria, box doccia, pavimento",
      "Firma checklist operativa",
    ],
  },
] as const;

const materials = [
  {
    title: "Piastrelle ceramiche e fughe",
    body: "Detergenti professionali a pH leggermente acido per la rimozione del calcare, seguiti da prodotti igienizzanti per le fughe. Trattamento periodico delle fughe con prodotti antimuffa specifici per ambienti umidi.",
    image: "/images/pages/pulizie-hotel-roma-bagni-materiale-01.jpg",
  },
  {
    title: "Superfici in marmo e pietra naturale",
    body: "Detergenti neutri a pH bilanciato. Mai prodotti acidi: il marmo è sensibile agli acidi e si opacizza in modo permanente. Asciugatura immediata dopo il lavaggio per evitare aloni.",
    image: "/images/pages/pulizie-hotel-roma-bagni-materiale-02.jpg",
  },
  {
    title: "Box doccia e porte in vetro",
    body: "Prodotti specifici per vetro professionale, applicati con tecniche che eliminano le striature di calcare senza graffiare. Trattamento periodico con prodotti idrorepellenti per ridurre la frequenza degli interventi di detartratura.",
    image: "/images/pages/pulizie-hotel-roma-bagni-materiale-03.jpg",
  },
  {
    title: "Rubinetteria e sanitari",
    body: "Prodotti anticalcare specifici per metalli, applicati con tempo di contatto controllato. Lucidatura finale con panno in microfibra asciutto per eliminare gli aloni. Per la rubinetteria in ottone, prodotti specifici che non alterano il trattamento superficiale.",
    image: "/images/pages/pulizie-hotel-roma-bagni-materiale-04.jpg",
  },
  {
    title: "Piatti doccia e vasche in acrilico o resina",
    body: "Detergenti non abrasivi: l'acrilico si graffia facilmente con prodotti o spugne abrasivi. Pulizia con panni morbidi in microfibra e detergenti a pH neutro.",
    image: "/images/pages/pulizie-hotel-roma-bagni-materiale-05.jpg",
  },
] as const;

const faqItems = [
  {
    q: "Con quale frequenza vanno igienizzati i bagni delle camere di un hotel?",
    a: "I bagni delle camere occupate vanno puliti e igienizzati ogni giorno, durante il riassetto giornaliero. I bagni post check-out ricevono una pulizia più approfondita prima del check-in successivo. Una pulizia profonda — detartratura, trattamento delle fughe, controllo del sigillante — va eseguita almeno una volta a settimana per le camere ad alta rotazione. Luna Service calibra le frequenze sulla categoria della struttura e sul tasso di occupazione.",
  },
  {
    q: "Quali prodotti usate per igienizzare i bagni degli hotel?",
    a: "Utilizziamo prodotti professionali certificati, selezionati in base ai materiali specifici di ogni struttura. Per le superfici sanitarie standard usiamo disinfettanti a base di ipoclorito o ammonio quaternario con il tempo di contatto appropriato all'efficacia. Per il marmo e le superfici delicate usiamo detergenti neutri specifici. Tutti i prodotti hanno schede di sicurezza disponibili e sono conformi alle normative italiane per l'uso in ambienti professionali.",
  },
  {
    q: "Come garantite che ogni bagno sia davvero igienizzato e non solo pulito visivamente?",
    a: "La differenza tra pulizia visiva e igienizzazione reale sta nel prodotto, nel tempo di contatto e nella sequenza operativa. Il nostro protocollo prevede l'applicazione del disinfettante con un tempo di contatto minimo di cinque minuti prima dell'asciugatura, la sequenza operativa dall'alto verso il basso per evitare contaminazioni crociate e una verifica finale documentata su checklist per ogni bagno.",
  },
  {
    q: "Gestite anche i bagni delle aree comuni con alta frequenza di utilizzo?",
    a: "Sì. I bagni delle aree comuni — lobby, ristorante, palestra — ricevono un piano di manutenzione continua con interventi a cadenza regolare durante l'orario operativo dell'hotel. La frequenza è calibrata sull'intensità di utilizzo: un bagno della lobby di un hotel con alto traffico richiede un intervento ogni due ore, non una volta al giorno.",
  },
  {
    q: "Fornite documentazione degli interventi per eventuali ispezioni ASL?",
    a: "Sì. Luna Service fornisce a ogni hotel cliente una documentazione delle procedure operative adottate: checklist degli interventi effettuati, prodotti utilizzati con relative schede di sicurezza e frequenze dei trattamenti. Questa documentazione può essere messa a disposizione in caso di ispezione ASL o di audit interno.",
  },
] as const;

function HeroBagni() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[20px] md:pt-[28px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-[42px]">
                <h1 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.02] tracking-[-0.025em] text-[#fbf9f3]">
                  Pulizia e igienizzazione bagni hotel a Roma: il dettaglio che nessun ospite perdona
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Il bagno è lo spazio in cui l&apos;ospite esprime il giudizio più netto sulla qualità dell&apos;hotel. Non ci
                  sono sfumature: o è impeccabile, o non lo è. Luna Service gestisce la pulizia e l&apos;igienizzazione dei
                  bagni del tuo hotel a Roma con protocolli specifici per ambienti ad alto contatto, prodotti certificati
                  e verifica qualità su ogni intervento.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per il tuo hotel</PrimaryCtaButton>
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
              src="/images/pages/pulizie-hotel-roma-bagni-hero.jpg"
              alt="Pulizia bagno hotel professionale"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.35)_100%)]" />
          </div>
          <div className="hidden md:block absolute inset-0 bg-[linear-gradient(90deg,rgba(22,23,20,0.96)_0%,rgba(22,23,20,0.92)_45%,rgba(22,23,20,0)_62%)] pointer-events-none" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-[16px] md:px-[56px] mt-[14px]">
        <div className="flex flex-wrap gap-[8px] md:gap-[10px]">
          {trustItems.map((item) => (
            <div key={item} className="inline-flex items-center gap-[6px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[12px] py-[8px] text-[12px] md:text-[13px] text-[#161714]">
              <span className="text-[#99cc33]">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Il problema</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Il bagno è la voce più citata nelle recensioni negative sulla pulizia. Non è un caso.
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Basta scorrere le recensioni negative di qualsiasi hotel su Booking o TripAdvisor per trovare un pattern
          ricorrente: capelli nella doccia, calcare sul rubinetto, macchie sullo specchio, odore di umido, sigillante
          annerito attorno alla vasca. Dettagli. Eppure sono questi dettagli a trasformare un soggiorno nella peggiore
          recensione pubblica che un albergatore possa ricevere.
        </p>
        <p className="m-0">
          Il problema non è sempre la negligenza del personale. Spesso è la mancanza di un protocollo strutturato: senza
          una sequenza operativa precisa, senza una verifica finale, la pulizia del bagno diventa una routine soggettiva
          — e le routine soggettive calano di qualità nel tempo.
        </p>
        <p className="m-0">
          Il bagno di una camera d&apos;hotel non è un bagno domestico. Ha superfici diverse, materiali diversi, livelli di
          contatto diversi. Richiede prodotti specifici, tecniche specifiche e una sequenza operativa che garantisca
          igienizzazione reale — non solo pulizia visiva.
        </p>
        <p className="m-0">
          Luna Service porta nei bagni del tuo hotel un protocollo professionale, documentato e verificabile. Non si tratta
          di pulire meglio: si tratta di pulire nel modo giusto, ogni volta.
        </p>
      </div>
    </section>
  );
}

function ProtocolSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Cosa facciamo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Il nostro protocollo di pulizia e igienizzazione bagni per hotel
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Distinguiamo due tipologie di intervento, con protocolli differenti: il bagno delle camere e i servizi igienici
        delle aree comuni. Entrambi richiedono standard elevati, ma con approcci operativi diversi.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {protocolItems.map((item, idx) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]">
            <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Protocollo</span>
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

function SequenceSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>La sequenza operativa</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        La sequenza operativa corretta: perché l&apos;ordine degli interventi è importante quanto i prodotti
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[14px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Uno degli errori più comuni nella pulizia dei bagni professionali è eseguire le operazioni nell&apos;ordine
          sbagliato. Pulire il pavimento prima delle superfici verticali significa dover ripulire il pavimento dopo.
          Applicare il disinfettante e asciugarlo subito elimina il tempo di contatto necessario all&apos;efficacia. Pulire
          lo specchio con lo stesso panno usato per il WC è una contaminazione crociata.
        </p>
        <p className="m-0">
          Il nostro protocollo operativo è costruito per eliminare questi errori sistematicamente.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {sequencePhases.map((item, idx) => (
          <article key={item.phase} className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[20px] py-[20px]">
            <div className="mb-[8px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
              <span>Fase {idx + 1}</span>
              <span>Checklist</span>
            </div>
            <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em] text-[#fbf9f3]">{item.phase}</h3>
            <ul className="mt-[12px] m-0 p-0 list-none space-y-[8px]">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-[8px] text-[15px] leading-[1.6] text-[rgba(251,249,243,0.82)]">
                  <span className="text-[#99cc33] mt-[1px]">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function MaterialsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Prodotti e materiali</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Prodotti giusti per ogni superficie: nessun danno da prodotto inadeguato
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          I bagni degli hotel di Roma presentano una varietà di materiali che richiedono approcci diversi: piastrelle
          ceramiche standard, rivestimenti in marmo, box doccia in vetro temperato, rubinetteria in ottone o cromo,
          piatti doccia in acrilico o resina. Usare il prodotto sbagliato causa danni irreversibili — graffi
          sull&apos;acrilico, opacizzazione del marmo, corrosione della rubinetteria — che si traducono in costi di
          sostituzione molto superiori al costo del servizio di pulizia.
        </p>
        <p className="m-0">
          Prima dell&apos;avvio del servizio, il supervisore di Luna Service effettua una mappatura dei materiali presenti
          nei bagni della struttura e definisce il set di prodotti appropriati per ogni superficie.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {materials.map((item, idx) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]">
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Materiali</span>
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

function ComplianceSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Conformità e ispezioni</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Bagni puliti e documentati: la tua protezione in caso di ispezione ASL
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          A Roma le strutture ricettive sono soggette a ispezioni periodiche da parte della ASL Roma 1 e delle ASL
          territoriali competenti. Le verifiche riguardano, tra le altre cose, gli standard di igiene degli ambienti — in
          particolare bagni e cucine — e la documentazione delle procedure di pulizia e sanificazione adottate.
        </p>
        <p className="m-0">
          Luna Service fornisce a ogni hotel cliente una documentazione delle procedure operative adottate: checklist degli
          interventi, prodotti utilizzati con relative schede di sicurezza, frequenze dei trattamenti. Un dossier che
          dimostra l&apos;adozione di protocolli professionali e che può essere presentato in caso di ispezione senza
          preavviso.
        </p>
        <p className="m-0">
          Non è solo una questione di igiene. È una questione di tutela legale e reputazionale.
        </p>
      </div>
    </section>
  );
}

function CompactFormSection() {
  return (
    <SectionShell
      fullBleed
      bgClassName="bg-[#99cc33]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
      outerClassName="mt-[96px] md:mt-[140px]"
    >
      <h2 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#1a1f0d]">
        Richiedi il preventivo per la pulizia dei bagni del tuo hotel
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci quante camere e quanti bagni comuni ha la tua struttura. Ti risponderemo con una proposta concreta entro
        poche ore.
      </p>
      <form className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" />
          <InputField label="Nome della struttura*" placeholder="Hotel [Nome]" />
          <SelectField label="Numero di camere*" options={["Fino a 20", "Da 21 a 50", "Da 51 a 100", "Oltre 100"]} />
          <SelectField label="Bagni aree comuni" options={["Nessuno", "1–3", "4–6", "Oltre 6"]} />
          <div className="md:col-span-2">
            <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Materiali principali nei bagni</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceChip label="Ceramica standard" />
              <ChoiceChip label="Marmo" />
              <ChoiceChip label="Vetro" />
              <ChoiceChip label="Acrilico" />
              <ChoiceChip label="Altro" />
            </div>
          </div>
          <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." />
          <SelectField label="Tipo di servizio*" options={["Continuativo", "Straordinario", "Voglio un consiglio"]} />
          <InputField label="Telefono*" placeholder="+39 ..." />
          <InputField label="Email*" placeholder="nome@hotel.it" />
          <div className="md:col-span-2">
            <TextareaField label="Note" placeholder="Dettagli utili sulla tua struttura..." />
          </div>
        </div>
        <div className="mt-[16px]">
          <PrimaryCtaButton>Richiedi il preventivo gratuito</PrimaryCtaButton>
        </div>
        <a href="https://wa.me/" className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Vuoi una risposta immediata? Scrivici su WhatsApp →
        </a>
      </form>
      <div className="mt-[18px] text-[14px] text-[#1a1f0d]">
        <Link href="/pulizie-hotel-roma/" className="underline">
          /pulizie-hotel-roma/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-hotel-roma/camere/" className="underline">
          /pulizie-hotel-roma/camere/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-hotel-roma/aree-comuni/" className="underline">
          /pulizie-hotel-roma/aree-comuni/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-hotel-roma/sanificazione/" className="underline">
          /pulizie-hotel-roma/sanificazione/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-hotel-roma/preventivo/" className="underline">
          /pulizie-hotel-roma/preventivo/
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
          Domande frequenti sulla pulizia dei bagni negli hotel a Roma
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

export function BagniHotelRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Hotel Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizie Bagni Hotel Roma</li>
        </ol>
      </nav>
      <HeroBagni />
      <ProblemSection />
      <ProtocolSection />
      <SequenceSection />
      <MaterialsSection />
      <ComplianceSection />
      <CompactFormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
