"use client";

import { whatsappHref } from "@/components/luna/navigation";
import Image from "next/image";
import { PageBreadcrumb } from "@/components/luna/PageBreadcrumb";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import Link from "next/link";
import { useState } from "react";
import { FormSubmitPrimaryButton, LeadFormShell } from "@/components/luna/LeadFormShell";
import {
  ChoiceCheckbox,
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
  "Formazione specifica sull'accoglienza alberghiera",
  "Presentazione curata e comportamento professionale",
  "Conoscenza delle procedure di arrivo e partenza",
  "Disponibile su turni calibrati sui flussi dell'hotel",
] as const;

const dutyItems = [
  {
    title: "Accoglienza all'ingresso",
    body: "Il bellboy presidia l'ingresso dell'hotel durante i turni di arrivo: apre le porte ai veicoli in avvicinamento, saluta l'ospite, si presenta, offre immediatamente assistenza con i bagagli. È il primo punto di contatto fisico con la struttura — prima ancora della reception.\n\nNei grandi hotel il bellboy coordina anche la gestione del piazzale: indica le aree di sosta temporanea ai veicoli degli ospiti, collabora con il servizio di parcheggio se presente, gestisce i casi di arrivi contemporanei evitando il caos davanti all'ingresso.",
    image: "/images/pages/pulizie-hotel-roma-bellboy-servizio-01.jpg",
  },
  {
    title: "Trasporto bagagli in camera",
    body: "Dopo il check-in, il bellboy accompagna l'ospite in camera con i bagagli. Non è un trasporto meccanico: è un'opportunità di servizio. Durante il percorso verso la camera, il bellboy orienta l'ospite nella struttura — dove si trova il ristorante, a che piano è la spa, come funziona l'ascensore — e risponde alle prime domande pratiche sul soggiorno.\n\nUna volta in camera, il bellboy posiziona i bagagli correttamente — mai sul letto, mai bloccando i passaggi — presenta brevemente la camera se necessario e si congeda con discrezione. Un'interazione che dura meno di cinque minuti ma che, fatta bene, vale una menzione positiva nella recensione.",
    image: "/images/pages/pulizie-hotel-roma-bellboy-servizio-02.jpg",
  },
  {
    title: "Gestione del deposito bagagli",
    body: "Il servizio di deposito bagagli — per gli ospiti che arrivano prima del check-in o che vogliono lasciare i bagagli dopo il check-out — richiede un processo preciso: registrazione del collo con ricevuta numerata, identificazione e catalogazione del bagaglio, custodia in area dedicata e protetta, riconsegna al momento della richiesta con verifica della ricevuta.\n\nIl bellboy gestisce questo processo con tracciabilità: nessun bagaglio viene accettato senza ricevuta, nessun bagaglio viene riconsegnato senza verifica dell'identità del proprietario. Una procedura apparentemente banale che previene reclami e malintesi.",
    image: "/images/pages/pulizie-hotel-roma-bellboy-servizio-03.jpg",
  },
  {
    title: "Assistenza alla partenza",
    body: "La partenza è il momento in cui l'ospite costruisce il ricordo finale del soggiorno — e in cui una piccola disattenzione può rovinare un'esperienza complessivamente positiva. Il bellboy assiste l'ospite durante il check-out: raccoglie i bagagli dalla camera, li trasporta alla reception o direttamente al veicolo, verifica che non sia stato dimenticato nulla e si congeda con il saluto appropriato al livello della struttura.\n\nPer gli ospiti che partono in taxi o transfer, il bellboy coordina con il portiere o con il servizio di trasporto la logistica dell'uscita — evitando attese inutili con i bagagli già fuori dalla camera.",
    image: "/images/pages/pulizie-hotel-roma-bellboy-servizio-04.jpg",
  },
  {
    title: "Servizi aggiuntivi su richiesta degli ospiti",
    body: "Il bellboy è spesso la figura a cui l'ospite si rivolge per richieste pratiche che non rientrano strettamente nel servizio di reception: procurare un ombrello, indicare un taxi, portare un pacchetto acquistato durante la giornata, aiutare con un bagaglio particolarmente pesante durante una visita in città. Queste richieste sono fuori dalla mansione standard ma rientrano nello spirito del servizio alberghiero — e un bellboy formato sa come gestirle con disponibilità e discrezione.",
    image: "/images/pages/pulizie-hotel-roma-bellboy-servizio-05.jpg",
  },
  {
    title: "Coordinamento con portineria e front desk",
    body: "Il bellboy non lavora in isolamento: è parte di un sistema operativo che include portineria, reception e housekeeping. Comunica alla reception i tempi di arrivo in camera degli ospiti con bagagli, segnala alla housekeeping le camere che richiedono attenzione immediata dopo la partenza di un ospite, coordina con la portineria la gestione del piazzale e dei veicoli. È una figura di raccordo operativo che, quando funziona bene, accelera l'intera macchina dell'accoglienza.",
    image: "/images/pages/pulizie-hotel-roma-bellboy-servizio-06.jpg",
  },
] as const;

const trainingBlocks = [
  {
    title: "Presentazione e comportamento professionale",
    body: "La divisa è sempre in ordine e pulita. Il linguaggio è corretto e calibrato al livello della struttura — diverso in un hotel 3 stelle rispetto a un boutique 5 stelle. Il comportamento è discreto: il bellboy non si intromette nelle conversazioni degli ospiti, non commenta le loro scelte, non rivela informazioni su altri ospiti. È presente quando serve, invisibile quando non serve. Questa calibrazione richiede formazione specifica e non si improvvisa.",
  },
  {
    title: "Gestione delle lingue straniere",
    body: "Roma è una destinazione internazionale. Un bellboy che non capisce cosa gli chiede un ospite francese o tedesco crea imbarazzo in un momento in cui l'ospite si aspetta fluidità. I nostri bellboy hanno competenze di base in inglese come standard minimo, con profili a livello avanzato — e con competenze in ulteriori lingue — disponibili per le strutture di categoria superiore che lo richiedono.",
  },
  {
    title: "Gestione delle situazioni difficili",
    body: "Non tutti gli arrivi sono tranquilli. L'ospite stressato che ha perso il volo, quello che trova la camera non pronta, quello con pretese sproporzionate o quello semplicemente di cattivo umore: il bellboy è spesso la prima figura a dover gestire queste tensioni prima che arrivino alla reception. La formazione include tecniche di de-escalation e la capacità di smistare correttamente le situazioni difficili verso il responsabile competente.",
  },
  {
    title: "Conoscenza della struttura e dei servizi",
    body: "Il bellboy deve conoscere la struttura in ogni dettaglio: dove si trovano tutti i reparti, gli orari di tutti i servizi, le politiche dell'hotel sulle principali richieste degli ospiti. Non è possibile accompagnare un ospite in camera rispondendo \"non lo so\" alle sue domande. Prima di iniziare il servizio, ogni bellboy riceve un briefing approfondito sulla struttura cliente.",
  },
] as const;

const serviceModeBlocks = [
  {
    title: "Turni calibrati sui flussi di arrivo e partenza",
    body: "I picchi di lavoro del bellboy corrispondono agli orari di maggiore afflusso di arrivi e partenze — generalmente mattina presto per le partenze, pomeriggio per gli arrivi. Luna Service pianifica i turni in base al calendario di occupazione dell'hotel, garantendo la presenza del personale nei momenti di maggiore necessità senza costi inutili nelle ore di bassa attività.",
  },
  {
    title: "Copertura per eventi e picchi imprevisti",
    body: "Un evento in città, un gruppo di arrivo anticipato, un cambio di programma dell'ultimo minuto: i picchi imprevisti nel flusso di arrivi sono la norma, non l'eccezione, in un hotel romano in alta stagione. Luna Service garantisce reperibilità per l'integrazione rapida di personale aggiuntivo quando il volume supera la copertura programmata.",
  },
  {
    title: "Integrazione con il team di portineria",
    body: "In molte strutture il bellboy opera in stretto coordinamento con il portiere — o lo sostituisce nelle strutture che non hanno una portineria dedicata. Luna Service può fornire entrambe le figure o configurare un servizio ibrido che copra le funzioni di accoglienza esterna in modo coerente con l'organizzazione interna dell'hotel.",
  },
] as const;

const faqItems = [
  {
    q: "Qual è la differenza tra bellboy, facchino e portiere d'albergo?",
    a: "Sono tre figure distinte con mansioni diverse. Il bellboy — o portabagagli — è dedicato all'accoglienza degli ospiti e al trasporto dei bagagli dall'ingresso alla camera e viceversa: è una figura orientata al contatto diretto con l'ospite. Il facchino si occupa prevalentemente della movimentazione operativa interna — forniture, allestimenti, materiali — con minor contatto con gli ospiti. Il portiere presidia l'ingresso e gestisce le richieste informative degli ospiti, spesso con funzioni di coordinamento esterno come taxi, transfer e informazioni sulla città. In alcune strutture le figure vengono sovrapposte in profili ibridi; Luna Service può fornire ciascuna separatamente o in combinazione.",
  },
  {
    q: "Il bellboy deve parlare inglese?",
    a: "Sì, la conoscenza dell'inglese di base è il requisito minimo standard per qualsiasi bellboy che operi in un hotel di Roma — città con un'altissima percentuale di ospiti internazionali. Per le strutture di categoria superiore o con una clientela prevalentemente straniera, forniamo profili con inglese avanzato e competenze in ulteriori lingue secondo le esigenze specifiche della struttura.",
  },
  {
    q: "Come si gestisce il picco di arrivi quando il bellboy è impegnato con un altro ospite?",
    a: "La gestione dei picchi simultanei dipende dalla dimensione della struttura e dal volume degli arrivi. Per gli hotel con alto volume di check-in concentrati in fasce orarie specifiche, Luna Service può pianificare turni con più bellboy contemporaneamente nelle ore di punta. Per i casi imprevisti, il supervisore di riferimento coordina la copertura aggiuntiva con preavviso breve.",
  },
  {
    q: "Il bellboy di Luna Service viene identificato come personale dell'hotel o come personale esterno?",
    a: "Il nostro personale lavora integrato nel team dell'hotel e si presenta con la divisa e le modalità concordate con la direzione. La maggior parte delle strutture preferisce che il personale esterno indossi la divisa dell'hotel — quando disponibile — per garantire uniformità nell'accoglienza. In alternativa, forniamo il nostro personale con una divisa professionale neutrale di alta qualità. La scelta viene concordata durante il sopralluogo iniziale.",
  },
  {
    q: "Gestite anche la formazione del bellboy sulle specifiche del nostro hotel?",
    a: "Sì. Prima dell'avvio del servizio, ogni bellboy viene briefato sulla struttura cliente: planimetria, servizi e orari, procedure interne di gestione dei bagagli, standard comportamentali richiesti dalla struttura, informazioni pratiche sulla città che gli ospiti chiedono più spesso. Il briefing avviene prima del primo turno operativo — non durante.",
  },
  {
    q: "È possibile avere sempre lo stesso bellboy assegnato alla nostra struttura?",
    a: "Sì, per i contratti continuativi cerchiamo di assegnare lo stesso operatore alla struttura per garantire continuità e familiarità con le procedure interne. In caso di assenza, il sostituto viene briefato prima di iniziare e il supervisore monitora la qualità del servizio durante il periodo di transizione.",
  },
] as const;

function HeroBellboy() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[20px] md:pt-[28px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-[42px]">
                <h1 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.02] tracking-[-0.025em] text-[#fbf9f3]">
                  Servizio bellboy per hotel a Roma: l&apos;assistenza agli ospiti che costruisce la prima impressione
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Il bellboy è il primo volto dell&apos;hotel che l&apos;ospite incontra fisicamente. Non è semplicemente
                  chi porta le valigie: è la figura che stabilisce il tono del soggiorno nei primi tre minuti
                  dall&apos;arrivo. Luna Service fornisce agli hotel di Roma bellboy professionali formati
                  sull&apos;accoglienza, la discrezione e gli standard di servizio delle strutture di categoria.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per il tuo hotel</PrimaryCtaButton>
                  <a
                    href={whatsappHref}
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
              src="/images/pages/pulizie-hotel-roma-bellboy-hero.jpg"
              alt="Servizio bellboy hotel Roma"
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
            <div
              key={item}
              className="inline-flex items-center gap-[6px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[12px] py-[8px] text-[12px] md:text-[13px] text-[#161714]"
            >
              <span className="text-[#99cc33]">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Il ruolo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Chi è il bellboy e perché fa la differenza nell&apos;esperienza dell&apos;ospite
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          In italiano lo chiamiamo portabagagli, facchino d&apos;accoglienza o assistente agli ospiti. In inglese, bellboy
          o bellhop. Il termine cambia, ma il ruolo è lo stesso in tutti gli hotel del mondo che si rispettano: è la
          persona che accoglie l&apos;ospite all&apos;ingresso, si prende cura dei suoi bagagli, lo accompagna in camera e
          gli fornisce le prime informazioni sulla struttura.
        </p>
        <p className="m-0">Sembra un ruolo semplice. Non lo è.</p>
        <p className="m-0">
          Il bellboy lavora in uno dei momenti più delicati dell&apos;esperienza alberghiera: l&apos;arrivo. L&apos;ospite
          è appena sceso dal taxi o dall&apos;auto dopo un viaggio, è stanco, ha le mani piene di bagagli, non conosce la
          struttura e sta formando la sua prima impressione. Ogni cosa che succede nei primi tre minuti — il sorriso di chi
          lo accoglie, la rapidità con cui qualcuno si occupa delle sue valigie, la naturalezza con cui viene accompagnato
          verso la reception — contribuisce in modo sproporzionato alla valutazione complessiva del soggiorno.
        </p>
        <p className="m-0">
          Un bellboy formato e professionale trasforma un arrivo ordinario in un&apos;accoglienza che l&apos;ospite ricorda.
          Un bellboy impreparato, distratto o maleducato trasforma un arrivo normale in una prima impressione negativa che
          condizionerà tutta la percezione del soggiorno.
        </p>
        <p className="m-0">
          Luna Service fornisce agli hotel di Roma bellboy professionali con la formazione, la presentazione e le
          competenze relazionali che questo ruolo richiede — perché la prima impressione non si può ripetere.
        </p>
      </div>
    </section>
  );
}

function DutiesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Cosa fa</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Le mansioni del bellboy nell&apos;hotel: dall&apos;accoglienza alla gestione dei bagagli
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Le responsabilità del bellboy in un hotel coprono l&apos;intero ciclo dell&apos;ospite — dall&apos;arrivo alla
        partenza — con un focus specifico sulla gestione fisica dei bagagli e sull&apos;assistenza diretta alla persona.
        Ecco cosa gestiamo nel dettaglio.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {dutyItems.map((item, idx) => (
          <article
            key={item.title}
            className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]"
          >
            <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Mansione</span>
              </div>
              <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em]">{item.title}</h3>
              <div className="mt-[12px] flex-1 space-y-[12px] text-[14px] leading-[1.55] text-[#3a3b36]">
                {item.body.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="m-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrainingSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>La formazione</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        La formazione del bellboy di Luna Service: oltre il trasporto dei bagagli
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[14px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Un bellboy che sa portare le valigie in camera è il minimo. Un bellboy che trasforma ogni arrivo in un momento
          di accoglienza autentica è quello che distingue un hotel che gli ospiti ricordano da uno che dimenticano.
        </p>
        <p className="m-0">
          La formazione che Luna Service investe sui propri bellboy va ben oltre le tecniche di movimentazione dei bagagli.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {trainingBlocks.map((block, idx) => (
          <article
            key={block.title}
            className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[20px] py-[20px]"
          >
            <div className="mb-[8px] font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
              {String(idx + 1).padStart(2, "0")}
            </div>
            <h3 className="m-0 font-serif text-[24px] leading-[1.08] tracking-[-0.015em] text-[#fbf9f3]">{block.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.6] text-[rgba(251,249,243,0.82)]">{block.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function FacchinaggioDifferenceSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Differenza con il facchinaggio</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Bellboy e facchinaggio: due figure diverse per esigenze diverse
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Una distinzione importante per gli hotel che stanno valutando il personale di supporto operativo: il bellboy e
          il facchino d&apos;albergo sono figure con profili e mansioni distinte, anche se entrambe coinvolgono la
          movimentazione dei bagagli.
        </p>
        <p className="m-0">
          Il bellboy è una figura orientata all&apos;ospite: la sua mansione principale è l&apos;accoglienza e
          l&apos;assistenza diretta alla persona. Lavora all&apos;ingresso e nei corridoi dell&apos;hotel, a contatto
          continuo con gli ospiti, con una forte componente relazionale e di rappresentanza della struttura.
        </p>
        <p className="m-0">
          Il facchino d&apos;albergo è una figura orientata alle operazioni interne: si occupa della movimentazione delle
          forniture tra i reparti, dell&apos;allestimento delle sale eventi, del supporto durante le operazioni di
          manutenzione, del deposito e della gestione dei materiali. Lavora prevalentemente nelle aree di servizio
          dell&apos;hotel, con minor contatto diretto con gli ospiti.
        </p>
        <p className="m-0">
          In molte strutture di medie dimensioni le due figure vengono sovrapposte in un unico profilo multiruolo. Luna
          Service può fornire entrambe le soluzioni: figure specializzate per ciascun ruolo nelle strutture di categoria
          superiore, o figure ibride per le strutture che preferiscono un profilo più versatile.
        </p>
        <p className="m-0">
          <Link href="/pulizie-hotel-roma/facchinaggio/" className="underline text-[#161714]">
            Scopri il servizio di facchinaggio per hotel
          </Link>
        </p>
      </div>
    </section>
  );
}

function ServiceModeSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Modalità di servizio</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Come strutturiamo il servizio bellboy per il tuo hotel
      </h2>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {serviceModeBlocks.map((block) => (
          <article key={block.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{block.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{block.body}</p>
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
        Richiedi il servizio bellboy per il tuo hotel a Roma
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci com&apos;è strutturato attualmente il servizio di accoglienza del tuo hotel e cosa stai cercando. Ti
        risponderemo con una proposta concreta entro poche ore.
      </p>
      <LeadFormShell
        source="pulizie-hotel-roma-bellboy"
        className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
          <SelectField
            label="Ruolo*"
            name="ruolo"
            required
            options={["Seleziona…", "Proprietario", "Direttore", "General Manager", "Responsabile front desk", "Altro"]}
          />
          <InputField label="Nome della struttura*" placeholder="Hotel [Nome]" name="nome_struttura" required />
          <SelectField
            label="Categoria hotel*"
            name="categoria"
            required
            options={["Seleziona…", "3 stelle", "4 stelle", "5 stelle", "Boutique", "Altro"]}
          />
          <SelectField
            label="Numero di camere*"
            name="numero_camere"
            required
            options={["Seleziona…", "Fino a 20", "21–50", "51–100", "Oltre 100"]}
          />
          <SelectField
            label="Tipo di servizio cercato*"
            name="tipo_servizio"
            required
            options={[
              "Seleziona…",
              "Bellboy dedicato all'accoglienza ospiti",
              "Portabagagli per arrivi e partenze",
              "Figura ibrida bellboy/facchinaggio",
              "Sostituzione temporanea",
              "Non so ancora — vorrei un consiglio",
            ]}
          />
          <div className="md:col-span-2">
            <span className="mb-[8px] block text-[13px] font-medium text-[#161714]">Competenze linguistiche richieste</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceCheckbox name="lingue" value="Inglese base" label="Inglese base" />
              <ChoiceCheckbox name="lingue" value="Inglese avanzato" label="Inglese avanzato" />
              <ChoiceCheckbox name="lingue" value="Francese" label="Francese" />
              <ChoiceCheckbox name="lingue" value="Spagnolo" label="Spagnolo" />
              <ChoiceCheckbox name="lingue" value="Tedesco" label="Tedesco" />
              <ChoiceCheckbox name="lingue" value="Altro" label="Altro" />
            </div>
          </div>
          <div className="md:col-span-2">
            <span className="mb-[8px] block text-[13px] font-medium text-[#161714]">Orari di maggiore necessità</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceCheckbox name="orari" value="Mattina presto — partenze" label="Mattina presto — partenze" />
              <ChoiceCheckbox name="orari" value="Tarda mattina — check-out" label="Tarda mattina — check-out" />
              <ChoiceCheckbox name="orari" value="Pomeriggio — arrivi" label="Pomeriggio — arrivi" />
              <ChoiceCheckbox name="orari" value="Sera — arrivi tardivi" label="Sera — arrivi tardivi" />
              <ChoiceCheckbox name="orari" value="Copertura continuativa" label="Copertura continuativa" />
            </div>
          </div>
          <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." name="zona" required />
          <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          <InputField label="Email*" placeholder="nome@hotel.it" name="email" type="email" required autoComplete="email" />
          <div className="md:col-span-2">
            <TextareaField
              label="Note"
              placeholder="Es. tipologia di ospiti prevalente, standard specifici della struttura, esigenze di coordinamento con portineria o front desk…"
              name="note"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <FormSubmitPrimaryButton>Richiedi il preventivo gratuito</FormSubmitPrimaryButton>
        </div>
        <a href={whatsappHref} className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Hai bisogno di un profilo specifico o vuoi confrontarti direttamente? Scrivici su WhatsApp →
        </a>
      </LeadFormShell>
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
          Domande frequenti sul servizio bellboy per hotel a Roma
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

export function BellboyHotelRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <PageBreadcrumb items={pageBreadcrumbs["/pulizie-hotel-roma/bellboy/"]} />
      <HeroBellboy />
      <RoleSection />
      <DutiesSection />
      <TrainingSection />
      <FacchinaggioDifferenceSection />
      <ServiceModeSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
