"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
import { FormSubmitPrimaryButton, LeadFormShell } from "@/components/luna/LeadFormShell";

const trustItems = [
  "Interventi tra check-out e check-in anche con preavviso breve",
  "Adatto a strutture di ogni dimensione",
  "Standard alberghieri anche per le realtà più piccole",
  "Preventivo gratuito senza impegno",
] as const;

const navCards = [
  {
    title: "Pulizie B&B Roma",
    body: "Gestisci un bed and breakfast a Roma? Il nostro servizio per B&B combina la cura del dettaglio tipica degli ambienti domestici con la precisione operativa richiesta da una struttura ricettiva professionale. Interveniamo tra un ospite e l'altro, gestiamo il cambio biancheria e manteniamo gli standard che portano recensioni a cinque stelle.",
    href: "/pulizie-strutture-ricettive-roma/bb/",
    cta: "→ Scopri il servizio per B&B",
    image: "/images/pages/pulizie-strutture-ricettive-roma-card-01.jpg",
  },
  {
    title: "Pulizie Case Vacanza e Affitti Brevi Roma",
    body: "Hai un appartamento su Airbnb, Booking o Vrbo a Roma? Luna Service gestisce i ricambi tra check-out e check-in — anche con preavviso breve — con report fotografico opzionale per ogni intervento. Il servizio ideale per chi gestisce uno o più appartamenti in affitto breve senza essere fisicamente presente a Roma.",
    href: "/pulizie-strutture-ricettive-roma/case-vacanza/",
    cta: "→ Scopri il servizio per case vacanza",
    image: "/images/pages/pulizie-strutture-ricettive-roma-card-02.jpg",
  },
  {
    title: "Pulizie Affittacamere Roma",
    body: "L'affittacamere è una realtà ibrida: ha la dimensione di una casa privata ma le esigenze operative di una struttura ricettiva. Luna Service offre un servizio calibrato su questa specificità: interventi precisi, flessibili sui tempi, con la discrezione necessaria in ambienti in cui l'ospite condivide spazi con il proprietario.",
    href: "/pulizie-strutture-ricettive-roma/affittacamere/",
    cta: "→ Scopri il servizio per affittacamere",
    image: "/images/pages/pulizie-strutture-ricettive-roma-card-03.jpg",
  },
  {
    title: "Pulizie Ostelli e Dormitori Roma",
    body: "Gli ostelli hanno volumi di pulizia elevati, tempi stretti e budget definiti. Luna Service gestisce le pulizie di ostelli, dormitori e strutture per gruppi a Roma con squadre dimensionate sui volumi reali, senza standard eccessivi che gonfierebbero i costi e senza compromessi sulle esigenze igieniche di base.",
    href: "/pulizie-strutture-ricettive-roma/ostelli/",
    cta: "→ Scopri il servizio per ostelli",
    image: "/images/pages/pulizie-strutture-ricettive-roma-card-04.jpg",
  },
] as const;

const differentiators = [
  {
    title: "Flessibilità sui tempi",
    body: "Lavoriamo in base ai tuoi check-in e check-out, non in base ai nostri orari. Se un ospite parte alle undici e il successivo arriva alle quindici, organizziamo l'intervento in quella finestra — anche se è breve, anche se è l'ultimo momento.",
  },
  {
    title: "Standard verificati",
    body: 'Ogni intervento segue una checklist operativa specifica per la tua struttura. Nessuna voce lasciata al caso, nessuna superficie trascurata perché "si nota poco". La camera deve essere pronta come se non fosse mai stata occupata.',
  },
  {
    title: "Gestione da remoto",
    body: "Molti gestori di case vacanza e affitti brevi a Roma non vivono nella struttura — alcuni non vivono nemmeno in città. Luna Service gestisce il servizio autonomamente: riceve le informazioni sui check-in, organizza gli interventi, avvisa il gestore a lavoro completato. Report fotografico disponibile su richiesta.",
  },
  {
    title: "Un solo interlocutore",
    body: "Non dovrai spiegare le stesse cose a persone diverse ogni volta. Hai un supervisore dedicato che conosce la tua struttura, le tue preferenze e le tue procedure. Una persona sola con cui comunicare per qualsiasi esigenza.",
  },
] as const;

const includedNight = [
  "Cambio completo biancheria da letto",
  "Rifacimento letti con standard alberghiero",
  "Pulizia e igienizzazione bagno completo",
  "Cambio asciugamani e tappetino",
  "Rabbocco amenity su richiesta",
  "Spolveratura superfici e arredi",
  "Aspirazione e lavaggio pavimenti",
  "Svuotamento cestini con sostituzione sacchetto",
  "Controllo e segnalazione eventuali danni",
] as const;

const includedCommon = [
  "Pulizia cucina e zone cottura",
  "Pulizia e igienizzazione bagni comuni",
  "Aspirazione e lavaggio pavimenti aree comuni",
  "Pulizia superfici e arredi comuni",
] as const;

const includedExtra = [
  "Gestione e cambio biancheria con lavanderia convenzionata",
  "Report fotografico post intervento",
  "Sanificazione periodica con ozono o nebulizzazione",
  "Intervento straordinario con preavviso breve",
] as const;

const faqItems = [
  {
    q: "Lavorate anche con strutture piccole, come un B&B con due o tre camere?",
    a: "Sì. Luna Service lavora con strutture di ogni dimensione, dal singolo appartamento su Airbnb al B&B con dieci camere. Per le strutture più piccole proponiamo soluzioni flessibili calibrate sulla frequenza reale dei cambi, senza costi fissi sproporzionati rispetto ai volumi.",
  },
  {
    q: "Riuscite a intervenire tra un check-out e il check-in dello stesso giorno?",
    a: "Sì, è esattamente il tipo di intervento per cui siamo organizzati. Riceviamo le informazioni sui tuoi check-out e check-in e organizziamo gli interventi nelle finestre disponibili. Per le finestre molto strette — meno di due ore — è importante comunicarcelo con almeno 24 ore di anticipo per garantire la copertura.",
  },
  {
    q: "Gestite la biancheria da letto e da bagno?",
    a: "Su richiesta gestiamo l'intero ciclo della biancheria: raccolta, consegna alla lavanderia convenzionata e redistribuzione nella struttura prima del prossimo check-in. È un servizio aggiuntivo che può essere integrato nel contratto o richiesto su base occasionale.",
  },
  {
    q: "Posso gestire il servizio da remoto senza essere presente in struttura?",
    a: "Sì. Molti dei nostri clienti gestiscono case vacanza e affitti brevi a Roma senza essere fisicamente presenti — alcuni vivono in un'altra città. Luna Service gestisce il servizio autonomamente: accede alla struttura con le modalità concordate, esegue l'intervento, avvisa il gestore a lavoro completato con report fotografico su richiesta.",
  },
  {
    q: "Fate anche il report fotografico dopo le pulizie?",
    a: "Sì, su richiesta. Al termine di ogni intervento il nostro operatore documenta fotograficamente lo stato della struttura e invia le foto via WhatsApp o email entro pochi minuti. È una documentazione utile sia per il controllo qualità da remoto che per eventuali contestazioni su piattaforma.",
  },
  {
    q: "Quanto costa il servizio di pulizia per un B&B o una casa vacanza a Roma?",
    a: "Il costo dipende dalla dimensione della struttura, dal numero di camere o unità, dalla frequenza degli interventi e dai servizi inclusi. Luna Service non applica tariffe standard: ogni preventivo è costruito sulla struttura specifica dopo un primo contatto. Compila il form per ricevere una proposta personalizzata.",
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
                  Pulizie professionali per strutture ricettive a Roma: B&B, case vacanza, affittacamere e ostelli
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Gestisci un B&B, una casa vacanza su Airbnb, un affittacamere o un ostello a Roma? Luna Service offre un
                  servizio di pulizia professionale costruito sulle esigenze reali delle strutture ricettive indipendenti:
                  flessibile sui tempi, preciso sugli standard, affidabile sulla continuità.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per la tua struttura</PrimaryCtaButton>
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
              src="/images/pages/pulizie-strutture-ricettive-roma-hero.jpg"
              alt="Pulizie professionali per strutture ricettive"
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
        Roma è la terza città più visitata d&apos;Europa. Le strutture ricettive indipendenti sono il suo motore nascosto.
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Con oltre 15 milioni di turisti all&apos;anno, Roma ha uno dei mercati dell&apos;ospitalità più dinamici e competitivi
          d&apos;Europa. Accanto agli hotel di categoria, una rete vastissima di strutture ricettive indipendenti — B&B,
          case vacanza, affittacamere, ostelli — accoglie una quota crescente di viaggiatori, spesso attratti proprio
          dall&apos;esperienza più autentica e personale che queste strutture sanno offrire.
        </p>
        <p className="m-0">
          Ma gestire una struttura ricettiva indipendente a Roma significa fare i conti con una sfida operativa che gli
          hotel risolvono con interi reparti: le pulizie. Tra un check-out e il check-in successivo — spesso lo stesso
          giorno, a volte nel giro di poche ore — la struttura deve essere impeccabile. Non quasi impeccabile.
          Impeccabile.
        </p>
        <p className="m-0">
          Perché su Airbnb, Booking e Google un ospite con cinque stelle fa poca notizia. Un ospite con due stelle per la
          pulizia può compromettere mesi di reputazione costruita con cura.
        </p>
        <p className="m-0">
          Luna Service lavora con strutture ricettive indipendenti a Roma da anni. Conosciamo le pressioni di questo
          mercato, la variabilità dei flussi, la necessità di flessibilità. Il nostro servizio è costruito su questa realtà
          — non su quella degli hotel da 200 camere.
        </p>
      </div>
    </section>
  );
}

function ServedStructuresSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Le strutture che serviamo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Ogni struttura è diversa. Il nostro servizio si adatta alla tua.
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Non esiste un pacchetto uguale per tutti. Un B&B con tre camere ha esigenze diverse da una casa vacanza su Airbnb,
        che ha esigenze diverse da un ostello con venti posti letto. Luna Service progetta il servizio sulla tua struttura
        specifica — dimensioni, tipologia, frequenza di rotazione, piattaforme di prenotazione usate.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {navCards.map((card, idx) => (
          <Link key={card.title} href={card.href} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]">
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden">
              <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Categoria</span>
              </div>
              <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em]">{card.title}</h3>
              <p className="mt-[12px] flex-1 text-[14px] leading-[1.55] text-[#3a3b36]">{card.body}</p>
              <span className="mt-[14px] inline-flex text-[14px] text-[#161714] underline">{card.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CommonProblemSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Il problema comune</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Il problema che accomuna tutte le strutture ricettive indipendenti: la continuità
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[14px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Che tu gestisca un B&B con due camere o una casa vacanza con sei posti letto, il problema è sempre lo stesso:
          trovare qualcuno di affidabile, disponibile nei momenti giusti e capace di mantenere uno standard costante nel
          tempo.
        </p>
        <p className="m-0">
          Le soluzioni improvvisate — la signora delle pulizie chiamata all&apos;ultimo momento, il vicino di casa disponibile
          qualche volta, la pulizia fatta in fretta tra una prenotazione e l&apos;altra — reggono finché tutto va bene. Non
          reggono quando arriva un doppio check-in nello stesso giorno, quando la persona di fiducia si ammala, quando la
          struttura è piena per tre settimane di fila.
        </p>
        <p className="m-0">
          Luna Service risolve il problema della continuità. Non siamo una soluzione improvvisata: siamo un partner
          operativo strutturato, con un supervisore dedicato, un piano di interventi programmato e la capacità di gestire
          le variazioni dell&apos;ultimo minuto senza scaricare il problema sul gestore della struttura.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {differentiators.map((item, idx) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[20px] py-[20px]">
            <div className="mb-[8px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
              <span>Plus {idx + 1}</span>
              <span>Continuità</span>
            </div>
            <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em] text-[#fbf9f3]">{item.title}</h3>
            <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">{item.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function PlatformsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Piattaforme e integrazione</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Lavoriamo con chi usa Airbnb, Booking, Vrbo e tutte le piattaforme di affitto breve
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Le piattaforme di affitto breve hanno trasformato il mercato dell&apos;ospitalità a Roma. Oggi chiunque può gestire
          una struttura ricettiva — e chiunque si trova ad affrontare le stesse sfide operative di un piccolo hotel, spesso
          senza l&apos;organizzazione di un hotel.
        </p>
        <p className="m-0">
          Luna Service lavora con gestori di strutture su tutte le principali piattaforme: Airbnb, Booking.com, Vrbo,
          HomeAway, Tripadvisor Rentals. Conosciamo le dinamiche di questi mercati: le recensioni rapide, l&apos;importanza
          della pulizia nel rating, la pressione dei turni brevi tra un ospite e l&apos;altro.
        </p>
        <p className="m-0">
          Su richiesta offriamo un report fotografico al termine di ogni intervento — documentazione utile sia per il
          gestore che per eventuali contestazioni su piattaforma. Le foto vengono inviate direttamente via WhatsApp o email
          entro pochi minuti dal termine del lavoro.
        </p>
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Cosa include il servizio</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Cosa è incluso nel servizio di pulizia per strutture ricettive
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il servizio standard per strutture ricettive indipendenti include tutto ciò che serve per consegnare la struttura
        pronta al prossimo ospite. Ogni voce può essere personalizzata sulla tua realtà specifica.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        <article className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
          <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">Aree notte:</h3>
          <ul className="mt-[12px] m-0 p-0 list-none space-y-[8px]">
            {includedNight.map((item) => (
              <li key={item} className="flex items-start gap-[8px] text-[15px] leading-[1.6] text-[#3a3b36]">
                <span className="text-[#99cc33] mt-[1px]">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
          <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">Aree comuni (per strutture con spazi condivisi):</h3>
          <ul className="mt-[12px] m-0 p-0 list-none space-y-[8px]">
            {includedCommon.map((item) => (
              <li key={item} className="flex items-start gap-[8px] text-[15px] leading-[1.6] text-[#3a3b36]">
                <span className="text-[#99cc33] mt-[1px]">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
          <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">Servizi aggiuntivi su richiesta:</h3>
          <ul className="mt-[12px] m-0 p-0 list-none space-y-[8px]">
            {includedExtra.map((item) => (
              <li key={item} className="flex items-start gap-[8px] text-[15px] leading-[1.6] text-[#3a3b36]">
                <span className="text-[#99cc33] mt-[1px]">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
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
        Richiedi il preventivo per la tua struttura ricettiva
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci che tipo di struttura gestisci e come funzionano i tuoi check-in. Ti risponderemo con una proposta costruita
        sulla tua realtà specifica.
      </p>
      <LeadFormShell
        source="pulizie-strutture-ricettive-roma"
        className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
          <SelectField
            label="Tipologia struttura*"
            name="tipologia"
            required
            options={[
              "Seleziona…",
              "B&B",
              "Casa vacanza / Affitto breve",
              "Affittacamere",
              "Ostello / Dormitorio",
              "Altro",
            ]}
          />
          <InputField label="Nome o indirizzo della struttura" placeholder="Via ... Roma" name="indirizzo_struttura" />
          <SelectField
            label="Numero di unità / camere*"
            name="numero_unita"
            required
            options={["Seleziona…", "1–2 unità", "3–5 unità", "6–10 unità", "Oltre 10 unità"]}
          />
          <div className="md:col-span-2">
            <span className="mb-[8px] block text-[13px] font-medium text-[#161714]">Piattaforme usate</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceCheckbox name="piattaforma" value="Airbnb" label="Airbnb" />
              <ChoiceCheckbox name="piattaforma" value="Booking.com" label="Booking.com" />
              <ChoiceCheckbox name="piattaforma" value="Vrbo / HomeAway" label="Vrbo / HomeAway" />
              <ChoiceCheckbox name="piattaforma" value="Affitto diretto" label="Affitto diretto" />
              <ChoiceCheckbox name="piattaforma" value="Altro" label="Altro" />
            </div>
          </div>
          <SelectField
            label="Frequenza media dei cambi"
            name="frequenza_cambi"
            options={[
              "Seleziona…",
              "Più volte a settimana",
              "Una volta a settimana",
              "Variabile — dipende dalle prenotazioni",
              "Non so ancora",
            ]}
          />
          <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." name="zona" required />
          <SelectField
            label="Sei presente durante gli interventi?"
            name="presenza"
            options={["Seleziona…", "Sì, sono sempre in struttura", "A volte", "No, gestisco da remoto"]}
          />
          <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          <InputField label="Email*" placeholder="nome@struttura.it" name="email" type="email" required autoComplete="email" />
          <div className="md:col-span-2">
            <TextareaField label="Note" placeholder="Es. orari preferiti, chiavi, accessi, esigenze particolari…" name="note" />
          </div>
        </div>
        <div className="mt-[16px]">
          <FormSubmitPrimaryButton>Richiedi il preventivo gratuito</FormSubmitPrimaryButton>
        </div>
        <a href="https://wa.me/" className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Preferisci scrivere direttamente? Contattaci su WhatsApp →
        </a>
      </LeadFormShell>
      <div className="mt-[18px] text-[14px] text-[#1a1f0d]">
        <Link href="/pulizie-strutture-ricettive-roma/bb/" className="underline">
          /pulizie-strutture-ricettive-roma/bb/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-strutture-ricettive-roma/case-vacanza/" className="underline">
          /pulizie-strutture-ricettive-roma/case-vacanza/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-strutture-ricettive-roma/affittacamere/" className="underline">
          /pulizie-strutture-ricettive-roma/affittacamere/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-strutture-ricettive-roma/ostelli/" className="underline">
          /pulizie-strutture-ricettive-roma/ostelli/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-hotel-roma/" className="underline">
          /pulizie-hotel-roma/
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
          Domande frequenti sulle pulizie per strutture ricettive a Roma
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

export function StruttureRicettiveRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizie Strutture Ricettive Roma</li>
        </ol>
      </nav>
      <HeroSection />
      <ContextSection />
      <ServedStructuresSection />
      <CommonProblemSection />
      <PlatformsSection />
      <IncludedSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
