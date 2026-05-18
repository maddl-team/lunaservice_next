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
  "Interventi calibrati sui flussi ospiti",
  "Copertura di tutte le aree comuni",
  "Nessuna interruzione all'operatività dell'hotel",
  "Supervisore dedicato alla tua struttura",
] as const;

const services = [
  {
    title: "Reception e lobby",
    body: "La reception è il primo contatto fisico dell'ospite con la struttura. Deve essere impeccabile all'arrivo delle 8 del mattino come alle 23 di sera. Gestiamo la pulizia del bancone reception, delle sedute di attesa, dei pavimenti dell'ingresso, dei vetri delle porte, delle superfici decorate e degli eventuali elementi di arredo di valore — quadri, sculture, acquari, fontane — con prodotti specifici per ogni materiale. La frequenza degli interventi viene calibrata sugli orari di punta del tuo hotel.",
    image: "/images/pages/pulizie-hotel-roma-aree-comuni-servizio-01.jpg",
  },
  {
    title: "Corridoi e scale",
    body: "I corridoi sono gli spazi più sottovalutati di un hotel: nessun ospite ci si ferma, ma tutti li percorrono più volte al giorno. Un corridoio con moquette usurata, pareti segnate o pavimenti opachi comunica trascuratezza anche a chi non ci fa caso consciamente. Luna Service gestisce la pulizia quotidiana di corridoi e scale — aspirazione, lavaggio, spolveratura dei corrimano e delle superfici verticali — con frequenze adattate al numero di piani e all'intensità del traffico.",
    image: "/images/pages/pulizie-hotel-roma-aree-comuni-servizio-02.jpg",
  },
  {
    title: "Ascensori",
    body: "Gli ascensori sono gli spazi più piccoli e più usati dell'hotel. Sono anche quelli in cui l'ospite si trova da solo, in silenzio, e nota ogni dettaglio: le impronte sui pannelli in acciaio, il pavimento non pulito, l'odore stantio. Pulizia e igienizzazione degli ascensori — pareti, pavimento, pulsantiera, specchi — rientrano nel nostro piano di manutenzione quotidiana delle aree comuni.",
    image: "/images/pages/pulizie-hotel-roma-aree-comuni-servizio-03.jpg",
  },
  {
    title: "Sala colazione e aree F&B",
    body: "La sala colazione richiede un intervento specifico e strutturato: pulizia profonda prima dell'apertura del servizio, mantenimento durante il servizio su richiesta, pulizia completa post servizio. Pavimenti, tavoli, sedie, buffet, vetrine, aree di preparazione: ogni superficie viene trattata con prodotti alimentari certificati. Su richiesta gestiamo anche le aree bar, i ristoranti interni e gli spazi per eventi.",
    image: "/images/pages/pulizie-hotel-roma-aree-comuni-servizio-04.jpg",
  },
  {
    title: "Aree benessere: palestra e spa",
    body: "Palestre e spa richiedono protocolli di igienizzazione specifici per ambienti ad alta umidità e ad alto contatto fisico. Gestiamo la pulizia e l'igienizzazione di attrezzature fitness, spogliatoi, docce, saune, aree relax e piscine interne — con prodotti professionali certificati per ambienti wellness e frequenze adattate agli orari di utilizzo.",
    image: "/images/pages/pulizie-hotel-roma-aree-comuni-servizio-05.jpg",
  },
  {
    title: "Aree esterne: ingresso, terrazzo, parcheggio",
    body: "La prima impressione dell'hotel si forma spesso ancora prima di entrare: l'ingresso esterno, i gradini, il portico, il vialetto d'accesso. Luna Service gestisce anche la pulizia delle aree esterne di pertinenza dell'hotel — pulizia dell'ingresso, spazzatura e lavaggio del piazzale, pulizia del parcheggio — con frequenze adattate alla stagione e al volume di accessi.",
    image: "/images/pages/pulizie-hotel-roma-aree-comuni-servizio-06.jpg",
  },
] as const;

const steps = [
  {
    title: "Mappatura dei flussi prima dell'avvio",
    body: "Prima di iniziare il servizio, il nostro supervisore analizza i flussi reali della tua struttura: a che ora arrivano i gruppi, quando è più intensa l'attività in reception, quali corridoi hanno più traffico la sera. Su questa base costruiamo un piano orario che posiziona gli interventi nei momenti di minor disturbo per gli ospiti e per il personale.",
  },
  {
    title: "Interventi silenziosi e non invasivi",
    body: "Il nostro personale è formato per lavorare in ambienti operativi senza rendersi visibile in modo invasivo. Attrezzature a bassa rumorosità, divisa professionale, comportamento discreto: l'ospite percepisce la pulizia come risultato, non come processo.",
  },
  {
    title: "Flessibilità in tempo reale",
    body: "Se un evento imprevisto richiede un intervento urgente — una bevanda rovesciata in lobby, un incidente nel bagno delle aree comuni, una situazione straordinaria prima di un evento — il supervisore può essere contattato direttamente e organizza l'intervento in tempi rapidi.",
  },
  {
    title: "Report periodici",
    body: "A cadenza concordata, il supervisore fornisce un report sugli interventi effettuati, le eventuali anomalie riscontrate e le azioni correttive adottate. Un documento utile anche in caso di ispezioni ASL o di audit interni.",
  },
] as const;

const materials = [
  {
    title: "Pavimenti in marmo e pietra naturale",
    body: "Pulizia con detergenti neutri a pH bilanciato, asciugatura immediata per evitare aloni, trattamento periodico con prodotti specifici per il mantenimento della brillantezza. Nessun acido, nessun abrasivo.",
    image: "/images/pages/pulizie-hotel-roma-aree-comuni-materiale-01.jpg",
  },
  {
    title: "Parquet e pavimenti in legno",
    body: "Aspirazione prima del lavaggio per rimuovere le particelle abrasive, lavaggio con prodotti specifici per legno a bassa umidità, asciugatura rapida. Trattamento periodico con prodotti protettivi.",
    image: "/images/pages/pulizie-hotel-roma-aree-comuni-materiale-02.jpg",
  },
  {
    title: "Acciaio inox e superfici metalliche",
    body: "Prodotti specifici per acciaio inox, applicati con panni in microfibra in direzione della venatura per eliminare impronte e aloni senza graffiare.",
    image: "/images/pages/pulizie-hotel-roma-aree-comuni-materiale-03.jpg",
  },
  {
    title: "Vetrate, specchi e superfici in vetro",
    body: "Detergenti professionale senza ammoniaca, applicati con tecniche che eliminano le striature. Pulizia dall'alto verso il basso per evitare gocciolature sulle superfici già trattate.",
    image: "/images/pages/pulizie-hotel-roma-aree-comuni-materiale-04.jpg",
  },
] as const;

const faqItems = [
  {
    q: "Con quale frequenza vanno pulite le aree comuni di un hotel?",
    a: "Dipende dal tipo di area e dall'intensità del traffico. La lobby e la reception richiedono interventi più volte al giorno nelle strutture ad alta occupazione. I corridoi vanno puliti almeno una volta al giorno, con passaggi aggiuntivi nei momenti di picco. La sala colazione richiede pulizia pre-apertura, manutenzione durante il servizio e pulizia completa post servizio. Palestra e spa seguono gli orari di utilizzo. Luna Service calibra le frequenze sulla realtà operativa della tua struttura, non su standard predefiniti.",
  },
  {
    q: "Come evitate di disturbare gli ospiti durante le pulizie?",
    a: "Prima dell'avvio del servizio mappiamo i flussi della struttura e posizioniamo gli interventi negli orari di minor traffico. Il personale lavora con attrezzature a bassa rumorosità e mantiene un comportamento discreto. Per le aree ad alto traffico continuo — come la lobby — organizziamo micro-interventi frequenti invece di un unico intervento prolungato.",
  },
  {
    q: "Gestite anche la pulizia di materiali pregiati come marmo e parquet?",
    a: "Sì. Prima dell'avvio del servizio il supervisore effettua una mappatura dei materiali presenti in struttura e associa prodotti e tecniche specifiche per ogni superficie. Marmo, parquet, acciaio inox, vetro e altri materiali pregiati vengono trattati con prodotti certificati e metodi che ne preservano l'integrità nel tempo.",
  },
  {
    q: "Intervenite anche in caso di emergenze nelle aree comuni?",
    a: "Sì. Per situazioni impreviste — bevande rovesciate, incidenti, situazioni di emergenza igienica — è sufficiente contattare il supervisore dedicato. L'intervento viene organizzato in tempi rapidi, senza dover passare per un centralino o attendere il turno successivo programmato.",
  },
  {
    q: "Il servizio copre anche le aree esterne dell'hotel?",
    a: "Sì. Gestiamo la pulizia delle aree esterne di pertinenza dell'hotel: ingresso, gradini, portico, vialetto d'accesso e parcheggio. Le frequenze vengono adattate alla stagione, alle condizioni meteo e al volume di accessi della struttura.",
  },
] as const;

function HeroAreeComuni() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[20px] md:pt-[28px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-[42px]">
                <h1 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.02] tracking-[-0.025em] text-[#fbf9f3]">
                  Pulizia aree comuni hotel a Roma: la prima impressione si forma prima ancora di entrare in camera
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  La lobby, la reception, i corridoi: sono gli spazi che ogni ospite attraversa all&apos;arrivo, durante il
                  soggiorno e alla partenza. Sono anche gli spazi più difficili da mantenere puliti perché non hanno mai
                  un momento di pausa. Luna Service gestisce la pulizia di tutte le aree comuni del tuo hotel a Roma con
                  interventi calibrati sui flussi reali della struttura — non su orari fissi decisi a tavolino.
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
              src="/images/pages/pulizie-hotel-roma-aree-comuni-hero.jpg"
              alt="Pulizia aree comuni hotel"
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
        Le aree comuni non dormono mai. Il problema è che il personale di pulizia, invece, sì.
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          La camera si pulisce una volta al giorno, tra un check-out e il successivo. La lobby no. La reception no. I
          corridoi no. La sala colazione non si pulisce una volta al giorno: si pulisce continuamente, perché non smette
          mai di essere usata.
        </p>
        <p className="m-0">
          Le aree comuni di un hotel a Roma con buona occupazione sono in uso dalle sei del mattino — prima colazione,
          partenze, arrivi anticipati — fino a mezzanotte o oltre. Ogni ospite che passa le sporca un po&apos;. Ogni
          valigia trascinata lascia un segno. Ogni caffè rovesciato in lobby è un problema se non viene gestito in tre
          minuti.
        </p>
        <p className="m-0">
          La sfida non è pulire le aree comuni. È mantenerle pulite mentre l&apos;hotel è in funzione, senza intralciare il
          lavoro del personale di front desk, senza essere visibili in modo invasivo, senza mai far sentire l&apos;ospite a
          disagio.
        </p>
        <p className="m-0">
          Luna Service progetta gli interventi sulle aree comuni in base ai flussi reali del tuo hotel: orari di picco,
          orari morti, eventi speciali, periodi di alta stagione. Non un orario fisso uguale per tutti: un calendario
          costruito sulla tua struttura specifica.
        </p>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Cosa facciamo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Tutte le aree comuni del tuo hotel, gestite da un unico interlocutore
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Le aree comuni di un hotel non sono tutte uguali. Hanno frequenze di utilizzo diverse, materiali diversi, livelli
        di visibilità diversi per l&apos;ospite. Il nostro servizio copre ciascuna con il protocollo appropriato.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {services.map((item, idx) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]">
            <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Aree comuni</span>
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

function MethodSection() {
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
        Come organizziamo gli interventi sulle aree comuni: zero intralci all&apos;operatività
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[14px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Il problema principale della pulizia delle aree comuni non è tecnico: è organizzativo. Un operatore con il mop
          in mezzo alla lobby durante il check-in del mattino è un problema. Un&apos;aspirapolvere rumorosa nei corridoi alle
          sette di sera è un problema. Bidoni dell&apos;immondizia visibili agli ospiti in transito è un problema.
        </p>
        <p className="m-0">
          Luna Service risolve questi problemi prima che si presentino, non dopo.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {steps.map((step, idx) => (
          <article key={step.title} className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[20px] py-[20px]">
            <div className="mb-[8px] font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
              Step {idx + 1}
            </div>
            <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em] text-[#fbf9f3]">{step.title}</h3>
            <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">{step.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function MaterialsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Materiali pregiati</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Marmo, parquet, acciaio, vetro: ogni materiale richiede il prodotto giusto
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Gli hotel di Roma — specialmente quelli nel centro storico e di categoria superiore — hanno spesso pavimenti in
          marmo, parquet pregiato, rivestimenti in acciaio inox, vetrate di design e arredi di valore. L&apos;uso del
          prodotto sbagliato su questi materiali causa danni irreversibili: opacizzazione del marmo, rigatura del
          parquet, alone sull&apos;acciaio, striatura sul vetro.
        </p>
        <p className="m-0">
          Luna Service opera con una mappatura dei materiali per ogni struttura cliente. Prima dell&apos;avvio del servizio,
          il supervisore identifica ogni tipo di superficie presente nelle aree comuni e associa il prodotto e la tecnica
          corretti. Nessuna improvvisazione, nessun danno da prodotto inadeguato.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {materials.map((item, idx) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]">
            <div className="relative h-[200px] w-full shrink-0">
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
        Richiedi il preventivo per le aree comuni del tuo hotel
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Raccontaci la tua struttura: quante aree comuni hai, quali materiali sono presenti, come sono gestiti gli
        interventi oggi. Ti risponderemo con una proposta concreta entro poche ore.
      </p>
      <form className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" />
          <InputField label="Nome della struttura*" placeholder="Hotel [Nome]" />
          <div className="md:col-span-2">
            <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Tipologia aree comuni principali</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceChip label="Lobby / Reception" />
              <ChoiceChip label="Corridoi e scale" />
              <ChoiceChip label="Sala colazione / Ristorante" />
              <ChoiceChip label="Palestra / Spa" />
              <ChoiceChip label="Aree esterne" />
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
        <Link href="/pulizie-hotel-roma/bagni/" className="underline">
          /pulizie-hotel-roma/bagni/
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
          Domande frequenti sulla pulizia delle aree comuni negli hotel a Roma
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

export function AreeComuniHotelRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Hotel Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizie Aree Comuni Hotel Roma</li>
        </ol>
      </nav>
      <HeroAreeComuni />
      <ProblemSection />
      <ServicesSection />
      <MethodSection />
      <MaterialsSection />
      <CompactFormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
