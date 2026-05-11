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
  "Sanificazione con ozono e nebulizzazione",
  "Certificazione dell'intervento rilasciata",
  "Efficace su batteri, virus e allergeni",
  "Camere agibili dopo tempi tecnici certificati",
] as const;

const methods = [
  {
    title: "Sanificazione con generatore di ozono",
    body: "L'ozono (O₃) è uno dei sanificanti naturali più efficaci esistenti: agisce su batteri, virus, funghi, muffe e agenti allergenici attraverso un processo di ossidazione che ne distrugge la struttura cellulare. A differenza dei prodotti chimici, l'ozono raggiunge ogni superficie della stanza — incluse quelle non direttamente accessibili — e tratta simultaneamente l'aria e le superfici. Il processo prevede: pulizia preliminare della camera, posizionamento del generatore di ozono, trattamento con concentrazione e tempo di esposizione calibrati sulla cubatura dell'ambiente, periodo di areazione controllata prima del rientro degli ospiti. La camera non può essere occupata durante il trattamento: i tempi tecnici variano da 2 a 4 ore in base alla dimensione dell'ambiente. L'ozono è particolarmente efficace per: eliminazione di odori persistenti — fumo, umidità, odori corporei — che la pulizia ordinaria non rimuove; trattamento di camere dopo soggiorni prolungati; preparazione di camere per ospiti con allergie o sensibilità respiratorie; intervento post malattia di un ospite. Al termine del trattamento Luna Service rilascia una certificazione dell'intervento con data, ora, concentrazione di ozono utilizzata e tempo di esposizione — documento utile in caso di ispezioni o audit.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&q=80",
  },
  {
    title: "Sanificazione con nebulizzazione",
    body: "La nebulizzazione consiste nella dispersione di un prodotto sanificante — a base di ammonio quaternario, acido peracetico o altri principi attivi certificati — in forma di micro-particelle sospese nell'aria attraverso un nebulizzatore professionale. Le micro-particelle raggiungono ogni superficie della stanza, incluse quelle verticali, i tessuti e le aree difficilmente accessibili, depositandosi uniformemente e garantendo una copertura completa. Il processo prevede: pulizia preliminare della camera, selezione del prodotto sanificante appropriato al contesto, nebulizzazione con dosaggio calibrato sulla cubatura dell'ambiente, tempo di contatto definito prima dell'areazione. La nebulizzazione è particolarmente indicata per: trattamenti rapidi con tempi di rientro più brevi rispetto all'ozono; ambienti con tessuti e moquette estesi; situazioni di emergenza igienica che richiedono un intervento immediato; trattamenti periodici di manutenzione preventiva. Anche per la nebulizzazione Luna Service rilascia certificazione dell'intervento con prodotto utilizzato, scheda di sicurezza allegata, dosaggio e tempi di esposizione.",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=1400&q=80",
  },
] as const;

const whenNeeded = [
  {
    title: "Dopo soggiorni prolungati",
    body: "Un ospite che occupa la stessa camera per 10, 15 o 30 giorni lascia una carica microbica sull'aria e sulle superfici che il riassetto quotidiano non elimina completamente. La sanificazione post soggiorno prolungato riporta la camera a uno standard igienico equivalente a quello di una camera mai occupata.",
  },
  {
    title: "Prima dell'apertura stagionale",
    body: "Per le strutture ricettive che chiudono nei periodi di bassa stagione, la sanificazione completa prima della riapertura elimina muffe, batteri e odori accumulati durante il periodo di inattività. Un investimento che protegge sia gli ospiti che la reputazione della struttura.",
  },
  {
    title: "Dopo ospiti con patologie infettive",
    body: "In caso di ospite con patologia infettiva accertata o sospetta, la camera richiede un intervento di sanificazione professionale prima di poter essere riassegnata. Luna Service interviene con protocollo specifico e rilascia la documentazione necessaria per dimostrare l'adozione delle misure appropriate.",
  },
  {
    title: "Per ospiti con allergie o sensibilità respiratorie",
    body: "Gli acari della polvere, le muffe e gli allergeni ambientali si accumulano nei tessuti — materassi, cuscini, tende — e nell'aria delle camere. La sanificazione con ozono è particolarmente efficace per ridurre la carica allergenica e migliorare la qualità dell'aria per gli ospiti più sensibili.",
  },
  {
    title: "Come manutenzione preventiva periodica",
    body: "Indipendentemente da situazioni specifiche, integrare la sanificazione periodica — mensile o trimestrale — nel piano di igiene dell'hotel è una pratica sempre più diffusa nelle strutture di categoria superiore. Dimostra cura, previene l'accumulo di carica microbica e può diventare un elemento di comunicazione verso gli ospiti più attenti alla qualità igienica.",
  },
  {
    title: "Prima di eventi o periodi di alta occupazione",
    body: "Prima di un periodo di alta stagione, di un evento speciale o di un picco di prenotazioni, la sanificazione completa delle camere garantisce che ogni ospite trovi un ambiente igienicamente impeccabile — indipendentemente da quanto tempo la camera sia rimasta vuota.",
  },
] as const;

const faqItems = [
  {
    q: "Qual è la differenza tra pulizia e sanificazione in un hotel?",
    a: "La pulizia rimuove lo sporco visibile dalle superfici attraverso detergenti e azione meccanica. La sanificazione è un processo più ampio che combina pulizia e disinfezione secondo un protocollo documentato, con l'obiettivo di ridurre la carica microbica — batteri, virus, funghi, allergeni — a livelli di sicurezza definiti da normativa. La sanificazione tratta anche l'aria e le superfici non raggiungibili dalla pulizia manuale ordinaria.",
  },
  {
    q: "Come funziona la sanificazione con ozono?",
    a: "Il generatore di ozono produce O₃ che si diffonde in ogni angolo della camera, raggiungendo superfici, tessuti e aria. L'ozono distrugge la struttura cellulare di batteri, virus e funghi attraverso ossidazione e neutralizza odori persistenti. La camera non può essere occupata durante il trattamento. Dopo il tempo di esposizione calibrato sulla cubatura, segue un periodo di areazione controllata prima del rientro degli ospiti. Luna Service rilascia certificazione dell'intervento con tutti i parametri tecnici.",
  },
  {
    q: "Quanto tempo rimane inutilizzabile una camera dopo la sanificazione con ozono?",
    a: "I tempi tecnici variano in base alla dimensione della camera e alla concentrazione utilizzata. In media, per una camera standard di hotel, il trattamento richiede 1–2 ore e il periodo di areazione successivo 1–2 ore aggiuntive. La camera è quindi agibile dopo 2–4 ore dall'inizio del trattamento. Luna Service programma gli interventi negli orari di minor impatto sull'operatività — tipicamente nelle ore notturne o nei momenti di bassa occupazione.",
  },
  {
    q: "Con quale frequenza va eseguita la sanificazione in un hotel?",
    a: "Non esiste una frequenza universale: dipende dalla categoria della struttura, dal tasso di occupazione, dalla tipologia di ospiti e dalle politiche igieniche adottate. Come riferimento generale, le strutture di categoria superiore integrano la sanificazione mensile o trimestrale come manutenzione preventiva. Situazioni specifiche — soggiorni prolungati, ospiti con patologie, aperture stagionali — richiedono interventi puntuali aggiuntivi. Luna Service aiuta ogni struttura a definire il piano di sanificazione più appropriato.",
  },
  {
    q: "La certificazione rilasciata è valida per le ispezioni ASL?",
    a: "La certificazione di Luna Service documenta il protocollo adottato, i prodotti utilizzati con schede di sicurezza, i parametri tecnici dell'intervento e la qualifica degli operatori. È un documento che dimostra l'adozione di misure professionali di igiene ambientale e può essere presentato in sede di ispezione ASL come parte della documentazione del sistema qualità della struttura.",
  },
  {
    q: "Offrite la sanificazione anche per aree comuni e non solo per le camere?",
    a: "Sì. Il servizio di sanificazione di Luna Service copre tutte le aree dell'hotel: camere, bagni, aree comuni, lobby, sala colazione, ristorante, palestra, spa e uffici. Per ogni area viene definito il metodo più appropriato — ozono o nebulizzazione — e il piano orario che minimizza l'impatto sull'operatività della struttura.",
  },
] as const;

function HeroSanificazione() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[20px] md:pt-[28px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-[42px]">
                <h1 className="m-0 font-serif text-[38px] md:text-[64px] leading-[1.02] tracking-[-0.025em] text-[#fbf9f3]">
                  Sanificazione professionale camere hotel a Roma: ozono e nebulizzazione certificati
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  La pulizia visiva non elimina batteri, virus e agenti allergenici. La sanificazione professionale sì.
                  Luna Service esegue interventi di sanificazione delle camere e degli spazi del tuo hotel a Roma con ozono
                  e nebulizzazione, con protocollo documentato e certificazione dell&apos;intervento rilasciata a fine lavoro.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per la sanificazione</PrimaryCtaButton>
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
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1800&q=80"
              alt="Sanificazione professionale camere hotel"
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

function DistinctionSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Distinzione fondamentale</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Pulizia, disinfezione, sanificazione: non sono la stessa cosa
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          È un errore comune — e comprensibile — usare questi tre termini come sinonimi. Per chi gestisce una struttura
          ricettiva, invece, la distinzione è importante sia sul piano operativo che su quello normativo.
        </p>
        <p className="m-0">
          La pulizia rimuove lo sporco visibile dalle superfici attraverso l&apos;azione meccanica e l&apos;uso di detergenti. È
          ciò che fa il riassetto quotidiano delle camere: elimina polvere, residui organici, sporco da contatto.
        </p>
        <p className="m-0">
          La disinfezione riduce la carica batterica e virale sulle superfici attraverso l&apos;uso di prodotti chimici
          specifici — disinfettanti a base di ipoclorito, ammonio quaternario, alcol etilico. Agisce sulle superfici
          trattate direttamente con il prodotto.
        </p>
        <p className="m-0">
          La sanificazione è un processo più ampio che combina pulizia e disinfezione secondo un protocollo documentato,
          con l&apos;obiettivo di portare la carica microbica a livelli di sicurezza definiti da normativa. Include anche la
          trattamento dell&apos;aria e delle superfici non raggiungibili dalla disinfezione manuale.
        </p>
        <p className="m-0">
          Un hotel che esegue regolarmente la pulizia delle camere sta facendo la cosa giusta. Un hotel che integra la
          sanificazione periodica sta facendo la cosa necessaria — soprattutto in un contesto ad alto turnover di ospiti
          provenienti da ogni parte del mondo come Roma.
        </p>
      </div>
    </section>
  );
}

function MethodsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>I metodi</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        I metodi di sanificazione professionale che utilizziamo
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Luna Service utilizza due metodi di sanificazione professionale, selezionati in base alle esigenze specifiche della
        struttura e al tipo di intervento richiesto. Possono essere usati singolarmente o in combinazione.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {methods.map((item, idx) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]">
            <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Metodo</span>
              </div>
              <h3 className="m-0 font-serif text-[28px] leading-[1.05] tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-[12px] flex-1 text-[14px] leading-[1.55] text-[#3a3b36]">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhenNeededSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Quando serve</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[34px] md:text-[56px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Quando è necessaria la sanificazione professionale in un hotel
      </h2>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        La sanificazione non è un intervento straordinario da richiedere solo in caso di emergenza. È — o dovrebbe essere
        — una componente strutturale del piano di igiene di ogni struttura ricettiva. Ecco i contesti in cui il suo valore
        è più evidente.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {whenNeeded.map((item, idx) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[20px] py-[20px]">
            <div className="mb-[8px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
              <span>Contesto {idx + 1}</span>
              <span>Sanificazione</span>
            </div>
            <h3 className="m-0 font-serif text-[28px] leading-[1.08] tracking-[-0.015em] text-[#fbf9f3]">{item.title}</h3>
            <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">{item.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function CertificationSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>La certificazione</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        La certificazione dell&apos;intervento: perché è importante e cosa contiene
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Ogni intervento di sanificazione eseguito da Luna Service è documentato e certificato. Non si tratta di una
          formalità: è una tutela concreta per l&apos;albergatore.
        </p>
        <p className="m-0">
          La certificazione dell&apos;intervento di sanificazione contiene: data e ora dell&apos;intervento, identificazione
          delle aree trattate, metodo utilizzato — ozono o nebulizzazione — con specifiche tecniche, prodotto utilizzato
          nel caso della nebulizzazione con scheda di sicurezza allegata, concentrazione e tempo di esposizione, nome e
          qualifica dell&apos;operatore che ha eseguito il trattamento, dichiarazione di conformità al protocollo adottato.
        </p>
        <p className="m-0">
          Questo documento può essere presentato in caso di ispezione ASL, inserito nel dossier qualità della struttura,
          messo a disposizione degli ospiti che lo richiedono — pratica sempre più comune nelle strutture di fascia alta —
          e utilizzato come elemento di comunicazione sul sito o sui canali di prenotazione della struttura.
        </p>
        <p className="m-0">
          Sempre più hotel a Roma stanno integrando la certificazione di sanificazione nella comunicazione verso gli ospiti
          come elemento di differenziazione competitiva. È una scelta che risponde a una sensibilità reale del mercato.
        </p>
      </div>
    </section>
  );
}

function IntegrationSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Integrazione col servizio di pulizia</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Sanificazione e pulizia ordinaria: come si integrano
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          La sanificazione non sostituisce la pulizia ordinaria: la completa. Le due attività operano su livelli diversi e
          si integrano in un piano di igiene strutturato.
        </p>
        <p className="m-0">
          La pulizia quotidiana — riassetto camere, cambio biancheria, igienizzazione bagni — mantiene lo standard visivo e
          riduce la carica batterica superficiale. La sanificazione periodica interviene sulle componenti che la pulizia
          ordinaria non raggiunge: l&apos;aria, i tessuti, le superfici porose, le aree di difficile accesso.
        </p>
        <p className="m-0">
          Per gli hotel che affidano già a Luna Service il servizio di pulizia ordinaria, la sanificazione periodica può
          essere integrata nel contratto come servizio aggiuntivo programmato — mensile, trimestrale o legato a specifici
          eventi — con un costo marginale rispetto al valore aggiunto che porta.
        </p>
        <p className="m-0">
          Per gli hotel che non hanno ancora un contratto con Luna Service, la sanificazione può essere il primo servizio
          con cui iniziare la collaborazione: un intervento puntuale, documentato e verificabile che permette di valutare
          direttamente la qualità del nostro lavoro.
        </p>
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
      <h2 className="m-0 font-serif text-[34px] md:text-[56px] leading-[1.04] tracking-[-0.025em] text-[#1a1f0d]">
        Richiedi il preventivo per la sanificazione del tuo hotel
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci quante camere e quali spazi vuoi sanificare. Ti risponderemo con una proposta concreta entro poche ore.
      </p>
      <form className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" />
          <InputField label="Nome della struttura*" placeholder="Hotel [Nome]" />
          <SelectField label="Numero di camere da sanificare*" options={["Fino a 10", "Da 11 a 30", "Da 31 a 60", "Oltre 60"]} />
          <SelectField label="Metodo preferito" options={["Ozono", "Nebulizzazione", "Non so — vorrei un consiglio"]} />
          <div className="md:col-span-2">
            <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Aree aggiuntive da sanificare</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceChip label="Aree comuni / lobby" />
              <ChoiceChip label="Sala colazione / ristorante" />
              <ChoiceChip label="Palestra / spa" />
              <ChoiceChip label="Uffici" />
            </div>
          </div>
          <SelectField
            label="Motivo dell'intervento"
            options={[
              "Manutenzione periodica programmata",
              "Post soggiorno prolungato",
              "Apertura stagionale",
              "Emergenza / situazione specifica",
              "Prima di un periodo di alta occupazione",
            ]}
          />
          <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." />
          <SelectField label="Quando vorreste intervenire" options={["Il prima possibile", "Entro 1 settimana", "Entro 1 mese", "Data da definire"]} />
          <InputField label="Telefono*" placeholder="+39 ..." />
          <InputField label="Email*" placeholder="nome@hotel.it" />
          <div className="md:col-span-2">
            <TextareaField label="Note" placeholder="Es. materiali particolari, esigenze specifiche, orari disponibili per il trattamento…" />
          </div>
        </div>
        <div className="mt-[16px]">
          <PrimaryCtaButton>Richiedi il preventivo per la sanificazione</PrimaryCtaButton>
        </div>
        <a href="https://wa.me/" className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Hai un&apos;urgenza? Scrivici subito su WhatsApp →
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
        <Link href="/pulizie-hotel-roma/bagni/" className="underline">
          /pulizie-hotel-roma/bagni/
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
        <h2 className="m-0 text-center font-serif text-[40px] md:text-[72px] leading-[1] tracking-[-0.025em] text-[#161714]">
          Domande frequenti sulla sanificazione professionale per hotel a Roma
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

export function SanificazioneHotelRomaPageBody() {
  return (
    <>
      <SiteHeaderPill
        items={[
          { label: "Hotel" },
          { label: "Strutture" },
          { label: "Straordinarie" },
          { label: "Condomini" },
          { label: "Sanificazione" },
          { label: "Chi Siamo" },
          { label: "Contatti" },
        ]}
      />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Hotel Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Sanificazione Camere Hotel Roma</li>
        </ol>
      </nav>
      <HeroSanificazione />
      <DistinctionSection />
      <MethodsSection />
      <WhenNeededSection />
      <CertificationSection />
      <IntegrationSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
