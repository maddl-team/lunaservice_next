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
import { FormSubmitPrimaryButton, LeadFormShell } from "@/components/luna/LeadFormShell";

const trustItems = [
  "Intervento entro 24–48 ore su Roma e provincia",
  "Attrezzatura professionale per rimozione acqua e fango",
  "Documentazione per pratiche assicurative inclusa",
  "Operativi anche nei fine settimana",
] as const;

const causeItems = [
  {
    title: "Rottura di tubature",
    body: "La rottura di una tubatura — dell'impianto idrico condominiale, di un impianto privato o delle fognature — è la causa più comune di allagamento improvviso nelle cantine. L'acqua fuoriesce in quantità significative in tempi brevi e può raggiungere superfici e oggetti lontani dal punto di rottura.",
  },
  {
    title: "Infiltrazioni da piogge intense",
    body: "Roma è soggetta a episodi di pioggia intensa concentrata — soprattutto in autunno e in primavera — che possono causare infiltrazioni nelle cantine interrate, specialmente negli edifici più datati con impermeabilizzazione insufficiente. L'acqua penetra dai muri perimetrali, dal pavimento o dai punti di giunzione.",
  },
  {
    title: "Risalita capillare",
    body: "Nelle cantine interrate di edifici storici — comuni nel centro di Roma — l'acqua di falda può risalire per capillarità attraverso le fondazioni e i muri, causando un'umidità diffusa che nel tempo porta a intonaci distaccati, efflorescenze saline e muffe.",
  },
  {
    title: "Allagamento da scarichi intasati",
    body: "L'intasamento degli scarichi condominiali o comunali può causare il rigurgito delle acque reflue nelle cantine. È la situazione più complessa dal punto di vista igienico — l'acqua reflua contiene agenti patogeni che rendono necessaria una sanificazione professionale oltre alla semplice pulizia.",
  },
  {
    title: "Rottura di impianti di riscaldamento",
    body: "La rottura di un termosifone o di una tubatura dell'impianto di riscaldamento — più frequente nei periodi di prima accensione autunnale — può causare allagamenti rapidi con acqua calda che accelera il processo di formazione di muffe sulle superfici organiche.",
  },
] as const;

const processItems = [
  {
    title: "Fase 1 — Valutazione della situazione",
    body: "All'arrivo il supervisore valuta l'entità dell'allagamento: livello dell'acqua, tipo di liquido — acqua pulita, acqua mista a fango, acque reflue — superfici coinvolte, presenza di oggetti da salvaguardare, rischi per la sicurezza degli operatori. In base a questa valutazione viene definito il piano operativo e l'attrezzatura necessaria.",
    image: "/images/pages/cantina-allagata-fase-1.jpg",
  },
  {
    title: "Fase 2 — Rimozione dell'acqua",
    body: "L'acqua libera viene rimossa con aspiratori industriali e pompe di drenaggio specifiche per ambienti confinati. Per gli allagamenti con livelli d'acqua significativi utilizziamo pompe sommergibili in grado di rimuovere grandi volumi in tempi rapidi. L'acqua rimossa viene convogliata secondo le normative per lo scarico appropriato.",
    image: "/images/pages/cantina-allagata-fase-2.jpg",
  },
  {
    title: "Fase 3 — Rimozione di fango e sedimenti",
    body: "Dopo la rimozione dell'acqua libera, il fango e i sedimenti depositati sulle superfici vengono rimossi meccanicamente e con idropulitrici professionali. Particolare attenzione alle fughe del pavimento e agli angoli dove il sedimento si accumula.",
    image: "/images/pages/cantina-allagata-fase-3.jpg",
  },
  {
    title: "Fase 4 — Pulizia delle superfici",
    body: "Pareti, pavimento e soffitto vengono puliti con prodotti appropriati al tipo di contaminazione: per allagamenti da acque pulite, detergenti professionali standard; per allagamenti da acque reflue, prodotti igienizzanti specifici con tempo di contatto certificato per la neutralizzazione degli agenti patogeni.",
    image: "/images/pages/cantina-allagata-fase-4.jpg",
  },
  {
    title: "Fase 5 — Asciugatura professionale",
    body: "Dopo la pulizia, l'ambiente deve essere asciugato il più rapidamente possibile per prevenire la formazione di muffe. Utilizziamo deumidificatori industriali e ventilatori professionali posizionati strategicamente per massimizzare il ricambio d'aria e accelerare l'evaporazione dell'umidità residua dalle superfici.",
    image: "/images/pages/cantina-allagata-fase-5.jpg",
  },
  {
    title: "Fase 6 — Igienizzazione e trattamento antimuffa",
    body: "Sulle superfici asciutte viene applicato un trattamento igienizzante e, dove necessario, antimuffa preventivo — specialmente sulle superfici organiche come legno e cartongesso che sono più vulnerabili alla formazione di muffa in seguito all'esposizione prolungata all'umidità.",
    image: "/images/pages/cantina-allagata-fase-6.jpg",
  },
  {
    title: "Fase 7 — Documentazione",
    body: "A intervento completato viene rilasciata documentazione fotografica dello stato della cantina prima e dopo l'intervento, descrizione delle operazioni eseguite, prodotti utilizzati e superfici trattate. Questa documentazione è essenziale per le pratiche assicurative.",
    image: "/images/pages/cantina-allagata-fase-7.jpg",
  },
] as const;

const faqItems = [
  {
    q: "Quanto tempo avete per intervenire dopo un allagamento?",
    a: "Prima si interviene, meglio è. Nelle prime ore l'acqua si diffonde e i danni si limitano all'area direttamente colpita. Dopo 24–48 ore inizia la formazione di muffe sulle superfici organiche. Dopo 72 ore i danni da umidità diventano significativi e più difficili da reversire. Luna Service è in grado di intervenire entro 24–48 ore dalla richiesta su Roma e provincia. Per le urgenze assolute, contattaci direttamente via WhatsApp per verificare la disponibilità immediata.",
  },
  {
    q: "Cosa fate se l'acqua è ancora presente nella cantina?",
    a: "La rimozione dell'acqua libera è la prima fase dell'intervento. Utilizziamo aspiratori industriali e pompe di drenaggio specifiche per ambienti confinati. Puoi contattarci anche quando l'acqua è ancora presente: valutiamo la situazione e organizziamo l'intervento di conseguenza.",
  },
  {
    q: "Intervenite anche per allagamenti da scarichi fognari?",
    a: "Sì. Gli allagamenti da acque reflue richiedono un protocollo di sanificazione professionale oltre alla semplice pulizia, perché le acque fognarie contengono agenti patogeni che contaminano tutte le superfici. Luna Service gestisce questo tipo di intervento con prodotti igienizzanti specifici, DPI appropriati per gli operatori e certificazione dell'intervento.",
  },
  {
    q: "Fornite documentazione per la pratica assicurativa?",
    a: "Sì. Forniamo documentazione fotografica dello stato della cantina prima e dopo l'intervento, descrizione delle operazioni eseguite e fattura con descrizione analitica del servizio. Ti consigliamo di contattare la tua compagnia assicurativa prima dell'intervento per ricevere indicazioni specifiche sulla documentazione richiesta dalla tua polizza.",
  },
  {
    q: "Intervenite anche nei fine settimana e nei giorni festivi?",
    a: "Sì. Per le emergenze siamo operativi anche nei fine settimana e nei giorni festivi. La disponibilità varia in base al tipo di intervento e al periodo: contattaci via WhatsApp per verificare la copertura nella data specifica.",
  },
  {
    q: "Dopo la pulizia come si previene la formazione di muffe?",
    a: "Dopo l'intervento di pulizia e asciugatura professionale, applichiamo un trattamento antimuffa preventivo sulle superfici più vulnerabili. Per prevenire il ritorno dell'umidità nel lungo periodo è importante risolvere la causa dell'allagamento — tubatura, impermeabilizzazione, scarichi — e garantire una ventilazione adeguata alla cantina. Luna Service si occupa della pulizia e del trattamento antimuffa: la risoluzione strutturale della causa va affidata al tecnico competente.",
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
                  Cantina allagata a Roma: interveniamo entro 24–48 ore
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Rimozione dell&apos;acqua, pulizia del fango, asciugatura professionale e igienizzazione completa. Luna
                  Service gestisce l&apos;emergenza allagamento nelle cantine di Roma con attrezzatura specifica e intervento
                  rapido. Ogni ora che passa aumenta il rischio di danni strutturali e formazione di muffa.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <a
                    href="https://wa.me/"
                    className="inline-flex items-center justify-center rounded-[999px] bg-[#99cc33] px-[28px] py-[20px] text-[15px] font-medium text-[#161714]"
                  >
                    Scrivici subito su WhatsApp — risposta immediata
                  </a>
                  <a
                    href="#preventivo-form"
                    className="inline-flex items-center justify-center rounded-[999px] border border-[rgba(255,255,255,0.35)] px-[26px] py-[18px] text-[15px] text-[#fbf9f3]"
                  >
                    Compila il form — ti richiamiamo entro poche ore
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:absolute md:top-0 md:right-0 md:bottom-0 w-full md:w-[50%] min-h-[220px] md:min-h-0">
            <Image
              src="/images/pages/cantina-allagata-hero.jpg"
              alt="Pulizia cantina allagata Roma"
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

function UrgencySection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[72px] md:pt-[100px]">
      <SectionBadge>L&apos;urgenza</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Perché ogni ora conta quando una cantina è allagata
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Un allagamento in cantina non è una situazione che si può gestire &quot;domani&quot;. Ogni ora che passa peggiora la
          situazione in modo misurabile.
        </p>
        <p className="m-0">
          Nelle prime ore l&apos;acqua si diffonde lateralmente, raggiungendo angoli e pareti che inizialmente sembravano
          asciutti. Dopo 24–48 ore in un ambiente umido e non ventilato le muffe iniziano a svilupparsi sulle superfici
          organiche — legno, cartone, tessuti. Dopo 72 ore la formazione di muffa è visibile e l&apos;odore di umido penetra
          nei materiali porosi in modo difficilmente reversibile.
        </p>
        <p className="m-0">
          I danni strutturali dipendono dall&apos;entità dell&apos;allagamento e dai materiali: l&apos;acqua che penetra nell&apos;intonaco
          e nel cemento ne riduce la coesione, l&apos;umidità prolungata favorisce l&apos;efflorescenza salina sulle pareti,
          l&apos;acqua a contatto con gli impianti elettrici crea rischi di cortocircuito.
        </p>
        <p className="m-0">
          Intervenire rapidamente non è solo una questione di contenere i danni materiali. È una questione di sicurezza
          — per chi accede alla cantina e per l&apos;edificio.
        </p>
      </div>
    </section>
  );
}

function CausesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[72px] md:pt-[100px]">
      <SectionBadge>Cause comuni</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Le cause più comuni di allagamento nelle cantine di Roma
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Identificare la causa dell&apos;allagamento è il primo passo — non per la pulizia, ma per evitare che si ripeta. Luna
        Service si occupa della pulizia e del ripristino igienico: la risoluzione della causa va affidata all&apos;idraulico o
        al tecnico competente. Ecco le cause più frequenti che incontriamo a Roma.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {causeItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[72px] md:pt-[100px]">
      <SectionBadge>Cosa facciamo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Il nostro intervento su cantine allagate a Roma: le fasi operative
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        L&apos;intervento su una cantina allagata non si riduce alla rimozione dell&apos;acqua. È un processo strutturato che porta
        l&apos;ambiente da &quot;allagato&quot; a &quot;igienicamente sicuro e asciutto&quot; — documentato in ogni fase.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {processItems.map((item, idx) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]">
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Fase</span>
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

function InsuranceSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[72px] md:mt-[100px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Pratiche assicurative</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Allagamento e assicurazione: la documentazione che ti serve
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Un allagamento in cantina — specialmente se causato da rottura di tubature condominiali o eventi atmosferici
          eccezionali — può essere coperto dalla polizza assicurativa dell&apos;immobile o dalla polizza condominiale.
        </p>
        <p className="m-0">
          Per attivare un rimborso assicurativo è necessario documentare il danno prima dell&apos;intervento di pulizia — o
          almeno durante — e conservare la documentazione delle operazioni eseguite e dei costi sostenuti.
        </p>
        <p className="m-0">Luna Service fornisce a ogni cliente che ha subito un allagamento:</p>
        <ul className="m-0 list-disc space-y-[12px] pl-[20px]">
          <li>
            documentazione fotografica dello stato della cantina prima dell&apos;intervento, durante le fasi operative e dopo
            il completamento;
          </li>
          <li>
            descrizione dettagliata delle operazioni eseguite con indicazione dei materiali e delle attrezzature
            utilizzate;
          </li>
          <li>fattura con descrizione analitica del servizio, utilizzabile come documento di spesa per la pratica assicurativa.</li>
        </ul>
        <p className="m-0">
          Prima di iniziare l&apos;intervento ti consigliamo di contattare la tua compagnia assicurativa o il tuo agente per
          ricevere indicazioni specifiche sulla documentazione richiesta dalla tua polizza. Noi ci adattiamo alle tue
          esigenze documentali.
        </p>
      </div>
    </SectionShell>
  );
}

function SewageSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[72px] md:pt-[100px]">
      <SectionBadge>Acque reflue</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Allagamento da scarichi: un caso che richiede sanificazione professionale
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          L&apos;allagamento causato dal rigurgito di scarichi fognari è una situazione igienicamente più grave rispetto a un
          allagamento da acqua pulita. Le acque reflue contengono batteri, virus e agenti patogeni che contaminano tutte
          le superfici con cui vengono a contatto.
        </p>
        <p className="m-0">
          In questi casi la semplice pulizia non è sufficiente: è necessaria una sanificazione professionale con prodotti
          specifici e tempo di contatto certificato per la neutralizzazione degli agenti patogeni.
        </p>
        <p className="m-0">
          Luna Service gestisce anche questi interventi, con un protocollo di sanificazione documentato e DPI appropriati
          per gli operatori. Dopo la sanificazione viene rilasciata certificazione dell&apos;intervento con i prodotti utilizzati
          e i parametri di efficacia.
        </p>
        <p className="m-0">
          <Link href="/sanificazione-ambienti-roma/" className="underline">
            → Scopri il servizio di sanificazione professionale
          </Link>
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <div id="preventivo-form">
    <SectionShell
      fullBleed
      bgClassName="bg-[#99cc33]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
      outerClassName="mt-[72px] md:mt-[100px]"
    >
      <h2 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#1a1f0d]">
        Hai la cantina allagata? Contattaci adesso.
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Per le emergenze la via più rapida è WhatsApp. Per le situazioni meno urgenti puoi compilare il form e ti
        richiamiamo entro poche ore.
      </p>
      <div className="mt-[24px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[20px] md:px-[28px] py-[24px] md:py-[28px]">
        <a
          href="https://wa.me/"
          className="inline-flex w-full items-center justify-center rounded-[999px] bg-[#99cc33] px-[28px] py-[20px] text-[16px] font-medium text-[#161714] md:w-auto"
        >
          Scrivici su WhatsApp — risposta immediata →
        </a>
        <p className="mt-[12px] m-0 text-[15px] leading-[1.55] text-[#3a3b36]">
          Siamo operativi tutti i giorni, anche nei fine settimana.
        </p>
      </div>
      <h3 className="mt-[28px] m-0 font-serif text-[26px] md:text-[36px] leading-[1.08] tracking-[-0.02em] text-[#1a1f0d]">
        Oppure compila il form — ti richiamiamo entro poche ore
      </h3>
      <LeadFormShell
        source="cantina-allagata"
        className="mt-[18px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.72)] px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
          <SelectField
            label="Tipo di immobile*"
            name="tipo_immobile"
            required
            options={[
              "Seleziona…",
              "Cantina privata",
              "Box auto / garage",
              "Locale condominiale",
              "Locale commerciale interrato",
              "Altro locale interrato",
            ]}
          />
          <SelectField
            label="Causa probabile dell'allagamento"
            name="causa"
            options={[
              "Seleziona…",
              "Rottura tubatura",
              "Pioggia / infiltrazione",
              "Scarico intasato / acque reflue",
              "Non so — serve una valutazione",
            ]}
          />
          <SelectField
            label="Livello approssimativo dell'acqua"
            name="livello_acqua"
            options={[
              "Seleziona…",
              "Pochi centimetri — pavimento bagnato",
              "5–20 cm",
              "Oltre 20 cm",
              "L'acqua è già defluita — resta fango e umidità",
            ]}
          />
          <SelectField
            label="L'acqua è ancora presente?*"
            name="acqua_presente"
            required
            options={["Seleziona…", "Sì, è ancora presente", "No, è già defluita", "Parzialmente — c'è ancora dell'acqua"]}
          />
          <SelectField
            label="Presenza di oggetti da salvaguardare"
            name="oggetti"
            options={[
              "Seleziona…",
              "Sì — ci sono oggetti di valore o documenti",
              "No — la cantina è vuota o con oggetti non critici",
            ]}
          />
          <InputField label="Zona di Roma*" placeholder="Es. EUR, Prati, Ostia..." name="zona" required />
          <InputField label="Piano / livello interrato" placeholder="Es. interrato, seminterrato" name="piano" />
          <SelectField
            label="Urgenza*"
            name="urgenza"
            required
            options={[
              "Seleziona…",
              "Massima urgenza — entro oggi o domani",
              "Entro 2–3 giorni",
              "Non urgente — sto raccogliendo informazioni",
            ]}
          />
          <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          <InputField label="Email*" placeholder="nome@email.it" name="email" type="email" required autoComplete="email" />
          <SelectField
            label="Hai bisogno di documentazione per pratiche assicurative?"
            name="documentazione"
            options={["Seleziona…", "Sì — ho una polizza assicurativa attiva", "Non so ancora", "No"]}
          />
          <div className="md:col-span-2">
            <TextareaField
              label="Note"
              placeholder="Descrivi brevemente la situazione: causa dell'allagamento se nota, stato attuale, accesso alla cantina, numero di vani…"
              name="note"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <FormSubmitPrimaryButton invert>Invia la richiesta — ti richiamiamo entro poche ore</FormSubmitPrimaryButton>
        </div>
      </LeadFormShell>
      <div className="mt-[18px] text-[14px] text-[#1a1f0d]">
        <Link href="/pulizie-straordinarie-roma/" className="underline">
          /pulizie-straordinarie-roma/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-straordinarie-roma/post-ristrutturazione/" className="underline">
          /pulizie-straordinarie-roma/post-ristrutturazione/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-straordinarie-roma/balconi-piccioni/" className="underline">
          /pulizie-straordinarie-roma/balconi-piccioni/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-straordinarie-roma/ambienti-degradati/" className="underline">
          /pulizie-straordinarie-roma/ambienti-degradati/
        </Link>{" "}
        ·{" "}
        <Link href="/sanificazione-ambienti-roma/" className="underline">
          /sanificazione-ambienti-roma/
        </Link>
      </div>
    </SectionShell>
    </div>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-[16px] md:px-[56px] py-[72px] md:py-[100px]">
      <div className="text-center mb-[40px] md:mb-[64px] flex flex-col items-center">
        <div className="mb-[28px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#3a3b36]">
          <span className="h-[6px] w-[6px] rounded-full bg-[#99cc33]" />
          FAQ
        </div>
        <h2 className="m-0 text-center font-serif text-[32px] md:text-[56px] leading-[1] tracking-[-0.025em] text-[#161714]">
          Domande frequenti sulla pulizia di cantine allagate a Roma
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

export function PuliziaCantinaAllagataRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Straordinarie Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizia Cantina Allagata Roma</li>
        </ol>
      </nav>
      <HeroSection />
      <UrgencySection />
      <CausesSection />
      <ProcessSection />
      <InsuranceSection />
      <SewageSection />
      <ContactSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
