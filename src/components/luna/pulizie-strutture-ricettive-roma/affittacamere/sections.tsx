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
  "Interventi calibrati sui tuoi check-in e check-out",
  "Discrezione garantita negli spazi privati",
  "Standard professionali anche per realtà piccole",
  "Preventivo gratuito senza impegno",
] as const;

const serviceItems = [
  {
    title: "Pulizia camere ospiti tra check-out e check-in",
    body: "Ogni camera viene pulita completamente dopo ogni check-out: cambio integrale della biancheria da letto, rifacimento letto con standard alberghiero, pulizia e igienizzazione completa del bagno — privato o condiviso — con cambio asciugamani e tappetino, spolveratura di tutte le superfici, aspirazione e lavaggio dei pavimenti, svuotamento cestini con sostituzione sacchetto, rabbocco degli amenity di base, verifica visiva finale su checklist. La checklist operativa viene costruita specificamente per il tuo affittacamere durante il sopralluogo iniziale: include le tue preferenze, i materiali presenti, le aree da trattare con particolare attenzione. Non è un protocollo generico: è il protocollo del tuo affittacamere.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1400&q=80",
  },
  {
    title: "Pulizia bagni condivisi",
    body: "Molti affittacamere hanno un bagno condiviso tra le camere degli ospiti — o tra gli ospiti e il proprietario. Questa configurazione richiede una frequenza di pulizia più alta rispetto ai bagni privati: più persone usano lo stesso spazio, più frequente deve essere l'intervento per mantenere uno standard accettabile. Luna Service organizza la frequenza degli interventi sul bagno condiviso in base al numero di ospiti presenti e alla configurazione della struttura.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1400&q=80",
  },
  {
    title: "Pulizia spazi condivisi",
    body: "Se l'affittacamere ha spazi condivisi — un corridoio, una sala d'attesa, una cucina accessibile agli ospiti — questi rientrano nel piano di pulizia con frequenze appropriate. La pulizia degli spazi condivisi viene pianificata in modo da non interferire con la vita quotidiana del proprietario e con gli orari degli ospiti.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1400&q=80",
  },
  {
    title: "Discrezione negli spazi privati",
    body: "Se l'affittacamere è inserito in un'abitazione in cui il proprietario vive, il nostro personale è formato per rispettare rigorosamente i confini tra gli spazi degli ospiti e gli spazi privati. Gli operatori intervengono esclusivamente nelle aree concordate, senza accedere ad altre parti dell'abitazione. La riservatezza è un requisito operativo, non una promessa generica.",
    image: "https://images.unsplash.com/photo-1459535653751-d571815e906b?w=1400&q=80",
  },
  {
    title: "Gestione biancheria",
    body: "Su richiesta gestiamo il ciclo completo della biancheria da letto e da bagno: raccolta dopo ogni check-out, consegna alla lavanderia convenzionata, ritiro e redistribuzione nelle camere prima del check-in successivo. Particolarmente utile per gli affittacamere che non dispongono di lavatrice propria o che preferiscono non gestire questo passaggio internamente.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1400&q=80",
  },
] as const;

const challengeItems = [
  {
    title: "Sfida 1 — I tempi stretti tra un ospite e l'altro",
    body: "Negli affittacamere con alta occupazione i cambi possono essere frequenti e ravvicinati. Spesso il check-out di un ospite e il check-in del successivo cadono lo stesso giorno, a volte con poche ore di distanza. Luna Service organizza gli interventi nelle finestre disponibili — anche brevi — con un team dimensionato sul volume reale della struttura. Non un operatore generico: una persona che conosce il tuo affittacamere e sa esattamente cosa fare e in quanto tempo.",
  },
  {
    title: "Sfida 2 — La presenza del proprietario",
    body: "In molti affittacamere il proprietario vive nella stessa abitazione o è presente regolarmente. La pulizia professionale deve inserirsi in questa realtà senza diventare un'interferenza. Luna Service pianifica gli interventi negli orari concordati con il proprietario, con operatori formati per lavorare in ambienti domestici abitati con la discrezione necessaria.",
  },
  {
    title: "Sfida 3 — La variabilità delle prenotazioni",
    body: "L'occupazione di un affittacamere può essere molto variabile: settimane piene e settimane quasi vuote, picchi nei periodi festivi, cali in bassa stagione. Un servizio rigido — con un numero fisso di interventi settimanali indipendentemente dall'occupazione — non è economicamente sostenibile. Luna Service offre contratti flessibili calibrati sull'occupazione reale: paghi per gli interventi effettuati, non per quelli pianificati ma non necessari.",
  },
] as const;

const faqItems = [
  {
    q: "Quanto costa la pulizia di un affittacamere a Roma?",
    a: "Il costo dipende dal numero di camere, dalla configurazione dei bagni, dalla presenza di spazi condivisi e dalla frequenza degli interventi. Luna Service propone contratti flessibili calibrati sull'occupazione reale — non su un numero fisso di interventi settimanali. Il preventivo è gratuito e viene formulato dopo un primo confronto sulle tue esigenze specifiche.",
  },
  {
    q: "Come gestite la discrezione se il proprietario vive nella stessa abitazione?",
    a: "Il nostro personale è formato per lavorare in ambienti domestici abitati con la massima discrezione. Gli operatori intervengono esclusivamente nelle aree concordate — camere degli ospiti, bagni, spazi comuni inclusi nel contratto — senza accedere ad altre parti dell'abitazione. Gli orari degli interventi vengono concordati con il proprietario per minimizzare l'interferenza con la vita quotidiana.",
  },
  {
    q: "Lavorate anche con affittacamere con una sola camera?",
    a: "Sì. Luna Service lavora con affittacamere di ogni dimensione, incluse le strutture con una sola camera. Per le realtà più piccole proponiamo soluzioni flessibili calibrate sui volumi reali, senza strutture di costo sproporzionate. Anche una singola camera merita un servizio professionale — e spesso è quella in cui la qualità della pulizia ha l'impatto maggiore sul rating.",
  },
  {
    q: "Riuscite a intervenire tra un check-out e il check-in dello stesso giorno?",
    a: "Sì. Organizziamo l'intervento nella finestra disponibile tra check-out e check-in, comunicandoci gli orari con almeno 24 ore di anticipo. Per le finestre molto brevi è necessario un preavviso adeguato per garantire la copertura con il team giusto.",
  },
  {
    q: "Il contratto è rigido o posso adattarlo alla mia occupazione?",
    a: "I nostri contratti per affittacamere sono flessibili per definizione: il servizio si attiva in base ai tuoi check-out reali, non secondo un calendario fisso. Nei periodi di alta occupazione il servizio gira a pieno ritmo. Nei periodi di bassa stagione si riduce di conseguenza — e i costi si adeguano. Non paghi per interventi che non ti servono.",
  },
  {
    q: "Gestite anche il bagno condiviso tra ospiti e proprietario?",
    a: "Sì, se incluso nel contratto. La pulizia del bagno condiviso viene inserita nel piano degli interventi con una frequenza adeguata alla configurazione specifica — numero di persone che lo usano, orari di utilizzo, standard atteso. La pianificazione tiene conto delle esigenze sia degli ospiti che del proprietario.",
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
                  Pulizie professionali per affittacamere a Roma: precisione e discrezione in ogni intervento
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  L&apos;affittacamere è una realtà unica: un&apos;abitazione privata aperta agli ospiti, in cui il confine tra
                  spazio personale e spazio ricettivo richiede un servizio di pulizia capace di rispettare entrambe le
                  dimensioni. Luna Service gestisce le pulizie del tuo affittacamere a Roma con la precisione di un servizio
                  professionale e la discrezione necessaria in un ambiente domestico.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per il tuo affittacamere</PrimaryCtaButton>
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
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1800&q=80"
              alt="Pulizie affittacamere Roma"
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
          <div key={item} className="inline-flex items-center gap-[6px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[12px] py-[8px] text-[12px] md:text-[13px] text-[#161714]">
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
        L&apos;affittacamere non è un B&B. Non è una casa vacanza. Ha le sue specificità — e richiede un servizio che le capisca.
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          L&apos;affittacamere è una categoria ricettiva con caratteristiche proprie. A differenza del B&B, non prevede
          necessariamente il servizio di colazione. A differenza della casa vacanza, è spesso inserita in un&apos;abitazione in
          cui il proprietario vive o che usa regolarmente. A differenza di un hotel, ha dimensioni contenute — di solito da
          una a quattro camere — e un&apos;atmosfera marcatamente domestica.
        </p>
        <p className="m-0">
          Queste caratteristiche rendono la gestione delle pulizie più delicata rispetto ad altre tipologie ricettive. Non
          si tratta solo di pulire le camere degli ospiti: si tratta di farlo rispettando la privacy e gli spazi del
          proprietario, senza interferire con la vita quotidiana dell&apos;abitazione, con la discrezione che un ambiente
          domestico richiede.
        </p>
        <p className="m-0">
          Molti gestori di affittacamere a Roma si trovano in questa situazione: vogliono offrire uno standard di pulizia
          professionale agli ospiti, ma non vogliono — o non possono — occuparsene personalmente ogni volta. Trovare
          qualcuno di affidabile, che lavori bene, che rispetti gli spazi e che sia disponibile nei momenti giusti è più
          difficile di quanto sembri.
        </p>
        <p className="m-0">
          Luna Service conosce questa realtà. Lavoriamo con affittacamere a Roma con un approccio calibrato sulla specificità
          di questa tipologia: professionale sugli standard, discreto sugli spazi, flessibile sui tempi.
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
        Il servizio di pulizia Luna Service per affittacamere a Roma
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il nostro intervento per affittacamere copre le camere degli ospiti e — su richiesta — gli spazi condivisi, con un
        protocollo costruito sulla specificità di ogni struttura.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {serviceItems.map((item, idx) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]">
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Servizio</span>
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
      <SectionBadge dark>La specificità dell&apos;affittacamere</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Tre sfide specifiche dell&apos;affittacamere — e come le risolviamo
      </h2>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        Chi gestisce un affittacamere a Roma conosce bene le difficoltà operative che questa tipologia presenta. Le abbiamo
        sentite raccontare molte volte. Le abbiamo trasformate in soluzioni operative.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {challengeItems.map((item, idx) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[20px] py-[20px]">
            <div className="mb-[8px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
              <span>Sfida {idx + 1}</span>
              <span>Soluzione</span>
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
      <SectionBadge>Standard e recensioni</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Perché lo standard di pulizia dell&apos;affittacamere influenza direttamente le tue recensioni
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Gli ospiti che scelgono un affittacamere lo fanno spesso per l&apos;esperienza più personale che questa tipologia offre
          rispetto a un hotel o a una casa vacanza. Questa aspettativa più &quot;umana&quot; non riduce le pretese sulla pulizia —
          le aumenta.
        </p>
        <p className="m-0">
          Un ospite che soggiorna in un affittacamere si sente ospite di qualcuno, non cliente di una struttura anonima. Se
          trova il bagno non pulito, o la camera non rifatta con cura, la delusione è più acuta — e la recensione negativa
          più severa — rispetto a quanto accadrebbe in una struttura impersonale.
        </p>
        <p className="m-0">
          Le recensioni degli affittacamere su Airbnb, Booking e Google hanno un peso specifico elevato perché spesso la
          struttura ha un numero limitato di recensioni totali: una recensione negativa sulla pulizia incide sul rating
          complessivo in modo più significativo rispetto a quanto accadrebbe per una struttura con centinaia di valutazioni.
        </p>
        <p className="m-0">
          Un servizio di pulizia professionale e strutturato non è un lusso per gli affittacamere: è una protezione del
          rating e della reputazione — il vero capitale di chi opera in questo mercato.
        </p>
      </div>
    </section>
  );
}

function FlexibilitySection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Flessibilità contrattuale</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Nessun contratto rigido: il servizio si adatta alla tua occupazione
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Una delle preoccupazioni più comuni dei gestori di affittacamere che valutano un servizio professionale di pulizia
          è il costo fisso: pagare per un numero prestabilito di interventi settimanali anche quando le camere sono vuote.
        </p>
        <p className="m-0">
          Luna Service non funziona così. I nostri contratti per affittacamere sono costruiti sulla flessibilità: il
          servizio si attiva quando hai un check-out, non secondo un calendario fisso indipendente dall&apos;occupazione. Nei
          periodi di alta occupazione il servizio gira a pieno ritmo. Nei periodi di bassa stagione si riduce di
          conseguenza — e i costi si riducono con esso.
        </p>
        <p className="m-0">
          Questa flessibilità è possibile perché abbiamo una struttura operativa che gestisce più strutture contemporaneamente:
          possiamo assorbire la variabilità di ogni singola struttura senza che questo crei problemi organizzativi. Per te
          significa un servizio professionale senza il rischio di costi fissi insostenibili nei periodi di bassa occupazione.
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
      <h2 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#1a1f0d]">
        Richiedi il preventivo per le pulizie del tuo affittacamere a Roma
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci quante camere ha il tuo affittacamere e come funzionano i tuoi ospiti. Ti risponderemo con una proposta
        flessibile e su misura entro poche ore.
      </p>
      <form className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" />
          <SelectField label="Numero di camere affittate*" options={["1 camera", "2 camere", "3 camere", "4 camere o più"]} />
          <SelectField
            label="Configurazione bagni*"
            options={[
              "Ogni camera ha il bagno privato",
              "Bagno condiviso tra le camere ospiti",
              "Bagno condiviso tra ospiti e proprietario",
            ]}
          />
          <SelectField
            label="Il proprietario vive nella stessa abitazione?*"
            options={["Sì, sono sempre presente", "A volte", "No, l'abitazione è usata solo per l'affittacamere"]}
          />
          <div className="md:col-span-2">
            <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Piattaforme usate</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceChip label="Airbnb" />
              <ChoiceChip label="Booking.com" />
              <ChoiceChip label="Prenotazioni dirette" />
              <ChoiceChip label="Altro" />
            </div>
          </div>
          <SelectField
            label="Frequenza media dei cambi"
            options={["Meno di 3 cambi a settimana", "Da 3 a 7 cambi a settimana", "Più di 7 cambi a settimana", "Molto variabile"]}
          />
          <div className="md:col-span-2">
            <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Spazi condivisi da includere nella pulizia</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceChip label="Corridoio / ingresso" />
              <ChoiceChip label="Cucina comune" />
              <ChoiceChip label="Sala comune" />
              <ChoiceChip label="Nessuno spazio condiviso" />
            </div>
          </div>
          <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." />
          <InputField label="Telefono*" placeholder="+39 ..." />
          <InputField label="Email*" placeholder="nome@affittacamere.it" />
          <div className="md:col-span-2">
            <TextareaField label="Note" placeholder="Es. orari preferiti, esigenze di discrezione particolari, modalità di accesso, materiali specifici…" />
          </div>
        </div>
        <div className="mt-[16px]">
          <PrimaryCtaButton>Richiedi il preventivo gratuito</PrimaryCtaButton>
        </div>
        <a href="https://wa.me/" className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Preferisci parlare direttamente? Scrivici su WhatsApp →
        </a>
      </form>
      <div className="mt-[18px] text-[14px] text-[#1a1f0d]">
        <Link href="/pulizie-strutture-ricettive-roma/" className="underline">
          /pulizie-strutture-ricettive-roma/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-strutture-ricettive-roma/bb/" className="underline">
          /pulizie-strutture-ricettive-roma/bb/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-strutture-ricettive-roma/case-vacanza/" className="underline">
          /pulizie-strutture-ricettive-roma/case-vacanza/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-strutture-ricettive-roma/ostelli/" className="underline">
          /pulizie-strutture-ricettive-roma/ostelli/
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
          Domande frequenti sulle pulizie per affittacamere a Roma
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

export function PulizieAffittacamereRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Strutture Ricettive Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizie Affittacamere Roma</li>
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
