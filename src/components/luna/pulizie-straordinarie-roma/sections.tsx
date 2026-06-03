"use client";

import { whatsappHref } from "@/components/luna/navigation";
import Image from "next/image";
import { PageBreadcrumb } from "@/components/luna/PageBreadcrumb";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
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
  "Squadre specializzate per ogni tipo di intervento",
  "Nessun giudizio — solo professionalità",
  "Preventivo gratuito con sopralluogo",
] as const;

const navCards = [
  {
    title: "Sgrosso post ristrutturazione Roma",
    body: "I lavori sono finiti. L'appartamento, l'ufficio o la struttura sono coperti di polvere edile, residui di calce, silicone, vernice e materiali di risulta. Lo sgrosso post ristrutturazione è un intervento specializzato che richiede attrezzature specifiche e una sequenza operativa precisa. Luna Service lo gestisce su tutta Roma, per privati, imprese e strutture ricettive.",
    problem: "Chi chiamo per le pulizie dopo una ristrutturazione a Roma?",
    href: "/pulizie-straordinarie-roma/post-ristrutturazione/",
    cta: "→ Scopri l'intervento",
    image: "/images/pages/straordinarie-card-post-ristrutturazione.jpg",
  },
  {
    title: "Pulizia balconi escrementi piccioni Roma",
    body: "Il guano di piccione non è solo un problema estetico: è un rischio sanitario documentato. Le spore fungine presenti negli escrementi secchi possono causare patologie respiratorie serie se inalate durante la pulizia senza le protezioni adeguate. Luna Service gestisce la rimozione degli escrementi di piccioni da balconi, terrazzi e superfici esterne a Roma con DPI certificati e prodotti igienizzanti specifici.",
    problem: "Come si puliscono i balconi con escrementi di piccioni a Roma?",
    href: "/pulizie-straordinarie-roma/balconi-piccioni/",
    cta: "→ Scopri l'intervento",
    image: "/images/pages/straordinarie-card-balconi-piccioni.jpg",
  },
  {
    title: "Pulizia cantina allagata Roma",
    body: "Un allagamento in cantina è un'emergenza che richiede intervento rapido: ogni ora che passa aumenta il rischio di danni strutturali e di formazione di muffe. Luna Service interviene su cantine e locali allagati a Roma con attrezzatura per la rimozione dell'acqua, la pulizia del fango, l'asciugatura e l'igienizzazione dell'ambiente.",
    problem: "La mia cantina è allagata, chi chiamo a Roma?",
    href: "/pulizie-straordinarie-roma/cantina-allagata/",
    cta: "→ Scopri l'intervento",
    image: "/images/pages/straordinarie-card-cantina-allagata.jpg",
  },
  {
    title: "Pulizia ambienti molto sporchi o degradati Roma",
    body: "Ambienti che per ragioni diverse si trovano in uno stato di sporco o degrado avanzato — che si tratti di un appartamento non curato per lungo tempo, di un locale commerciale abbandonato o di una situazione personale difficile. Luna Service interviene senza giudizi, con discrezione e professionalità, su qualsiasi tipo di ambiente a Roma.",
    problem: "C'è qualcuno a Roma che pulisce ambienti molto sporchi o degradati?",
    href: "/pulizie-straordinarie-roma/ambienti-degradati/",
    cta: "→ Scopri l'intervento",
    image: "/images/pages/straordinarie-card-ambienti-degradati.jpg",
  },
] as const;

const processSteps = [
  {
    title: "Step 1 — Contatto e descrizione della situazione",
    body: "Contattaci via form o WhatsApp descrivendoci la situazione: tipo di intervento, indirizzo, dimensione approssimativa dell'area, urgenza. Non è necessario un sopralluogo preliminare per tutti gli interventi: per le situazioni più semplici siamo in grado di fornire una stima preliminare già dal primo contatto.",
  },
  {
    title: "Step 2 — Sopralluogo gratuito",
    body: "Per gli interventi più complessi — sgrosso post ristrutturazione, ambienti degradati, situazioni particolari — effettuiamo un sopralluogo gratuito prima di formulare il preventivo. Il sopralluogo ci permette di valutare le condizioni reali, identificare le attrezzature necessarie e formulare una proposta accurata.",
  },
  {
    title: "Step 3 — Preventivo dettagliato",
    body: "Dopo il sopralluogo — o dopo la descrizione per gli interventi più standardizzati — ricevi un preventivo dettagliato: cosa è incluso, cosa non è incluso, tempistiche e costo. Tutto nero su bianco, senza voci ambigue.",
  },
  {
    title: "Step 4 — Intervento con squadra specializzata",
    body: "Il giorno concordato, la squadra specializzata arriva attrezzata per il tipo di intervento specifico. Non operatori generici: personale formato per quella tipologia di lavoro, con le attrezzature e i prodotti appropriati già a bordo.",
  },
  {
    title: "Step 5 — Verifica e documentazione",
    body: "Al termine dell'intervento, il supervisore verifica il risultato e — su richiesta — documenta fotograficamente lo stato dell'ambiente prima e dopo. La documentazione può essere utile per pratiche assicurative, per la gestione condominiale o per qualsiasi altra necessità.",
  },
] as const;

const whyItems = [
  {
    title: "Interveniamo entro 24–48 ore",
    body: "Per le situazioni urgenti — allagamenti, emergenze igieniche, interventi post-evento — siamo in grado di organizzare l'intervento entro 24–48 ore dalla richiesta su Roma e provincia. Per le urgenze assolute, contattaci direttamente via WhatsApp per verificare la disponibilità immediata.",
  },
  {
    title: "Attrezzatura professionale specifica",
    body: "Ogni tipo di intervento straordinario richiede attrezzature diverse: aspiratori industriali per lo sgrosso, idropulitrici per le superfici esterne, aspiratori d'acqua per gli allagamenti, DPI certificati per il guano di piccione. Luna Service arriva attrezzata per il lavoro — nessun operatore mandato \"a vedere cosa c'è\" senza i mezzi necessari.",
  },
  {
    title: "Nessun giudizio",
    body: "Alcuni degli interventi che gestiamo riguardano situazioni personali difficili: ambienti trascurati per lunghi periodi, situazioni di disagio, contesti in cui chiedere aiuto non è semplice. Luna Service interviene con professionalità e senza giudizi — in tutti i casi, con tutti i clienti. La riservatezza è un requisito operativo del nostro lavoro, non un optional.",
  },
  {
    title: "Documentazione per pratiche assicurative",
    body: "Per gli interventi conseguenti a eventi come allagamenti, danni da animali o situazioni di emergenza, forniamo documentazione fotografica e descrittiva dell'intervento che può essere utilizzata per pratiche assicurative o per la gestione condominiale.",
  },
  {
    title: "Copertura su tutta Roma e provincia",
    body: "Operiamo su tutta Roma e la provincia metropolitana. Per gli interventi urgenti verifichiamo la disponibilità in tempo reale via WhatsApp.",
  },
] as const;

const faqItems = [
  {
    q: "Cosa si intende per pulizia straordinaria?",
    a: "La pulizia straordinaria è un intervento professionale che va oltre la manutenzione ordinaria degli ambienti. Si tratta di situazioni specifiche — post ristrutturazione, post allagamento, rimozione di escrementi di animali, ambienti molto sporchi o degradati — che richiedono attrezzature specializzate, prodotti specifici e personale formato per quel tipo di intervento. A differenza delle pulizie ordinarie, la pulizia straordinaria è generalmente un intervento una tantum o occasionale, non ricorrente.",
  },
  {
    q: "In quanto tempo potete intervenire a Roma?",
    a: "Per gli interventi urgenti siamo in grado di organizzare la squadra entro 24–48 ore dalla richiesta su Roma e provincia. Per le urgenze assolute — allagamenti in corso, situazioni di emergenza igienica — contattaci direttamente via WhatsApp per verificare la disponibilità immediata. Per gli interventi non urgenti programmiamo la data più conveniente per il cliente.",
  },
  {
    q: "Fate il sopralluogo prima di dare un preventivo?",
    a: "Per gli interventi più complessi — sgrosso post ristrutturazione, ambienti degradati, situazioni particolari — effettuiamo sempre un sopralluogo gratuito prima di formulare il preventivo. Per gli interventi più standardizzati — come la pulizia di un balcone da escrementi di piccioni di dimensioni contenute — siamo spesso in grado di fornire una stima preliminare già dalla descrizione. In ogni caso il preventivo definitivo viene formulato dopo aver valutato la situazione reale.",
  },
  {
    q: "Intervenite anche su situazioni di degrado avanzato?",
    a: "Sì. Luna Service interviene su ambienti in qualsiasi stato di sporco o degrado — senza eccezioni e senza giudizi. Sappiamo che alcune situazioni sono difficili da descrivere e ancora più difficili da affrontare: il nostro approccio è sempre professionale, discreto e rispettoso. Contattaci descrivendo la situazione — anche in modo approssimativo — e troveremo insieme la soluzione più adeguata.",
  },
  {
    q: "Fornite documentazione dell'intervento?",
    a: "Sì, su richiesta. Per gli interventi straordinari forniamo documentazione fotografica dello stato dell'ambiente prima e dopo l'intervento, descrizione delle operazioni eseguite e dei prodotti utilizzati. Questa documentazione può essere utile per pratiche assicurative, per la gestione condominiale o per qualsiasi altra necessità amministrativa.",
  },
  {
    q: "Lavorate anche nei fine settimana e nei giorni festivi?",
    a: "Sì. Per le situazioni urgenti siamo operativi anche nei fine settimana e nei giorni festivi. La disponibilità varia in base al tipo di intervento e al periodo: contattaci via WhatsApp per verificare la copertura nella data specifica.",
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
                  Pulizie straordinarie a Roma: interveniamo dove gli altri non vogliono andare
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Sgrosso post ristrutturazione, balconi invasi dai piccioni, cantine allagate, ambienti molto sporchi o in
                  stato di degrado. Luna Service gestisce gli interventi straordinari di pulizia a Roma con squadre
                  specializzate, attrezzatura professionale e la discrezione necessaria in ogni situazione.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi un intervento</PrimaryCtaButton>
                  <a
                    href={whatsappHref}
                    className="inline-flex items-center justify-center rounded-[999px] border border-[rgba(255,255,255,0.35)] px-[26px] py-[18px] text-[15px] text-[#fbf9f3]"
                  >
                    Scrivici subito su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:absolute md:top-0 md:right-0 md:bottom-0 w-full md:w-[50%] min-h-[220px] md:min-h-0">
            <Image
              src="/images/pages/pulizie-straordinarie-roma-hero.jpg"
              alt="Pulizie straordinarie Roma"
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
      <SectionBadge>Cosa sono le pulizie straordinarie</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Pulizie straordinarie: quando la pulizia ordinaria non basta
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Le pulizie ordinarie mantengono uno standard nel tempo. Le pulizie straordinarie risolvono una situazione
          specifica — spesso urgente, spesso complessa, spesso tale da richiedere attrezzature, prodotti e competenze che
          vanno oltre la pulizia domestica o professionale standard.
        </p>
        <p className="m-0">
          Si parla di pulizie straordinarie quando c&apos;è stato un evento che ha alterato le condizioni dell&apos;ambiente in
          modo significativo: una ristrutturazione completata, un&apos;infestazione di piccioni su un balcone, un allagamento
          in cantina, un ambiente che per ragioni diverse si trova in uno stato di sporco o degrado che richiede un
          intervento professionale specializzato.
        </p>
        <p className="m-0">
          In questi casi la scelta dell&apos;impresa non è banale. Non tutte le imprese di pulizie sono attrezzate per
          gestire interventi fuori dall&apos;ordinario. Non tutte hanno i prodotti giusti, le attrezzature necessarie, il
          personale formato per situazioni specifiche. E non tutte sono disposte ad accettare lavori complessi o delicati.
        </p>
        <p className="m-0">
          Luna Service sì. Gli interventi straordinari sono una parte rilevante del nostro lavoro a Roma — e li gestiamo
          con la stessa struttura operativa che applichiamo ai servizi continuativi: sopralluogo, proposta, esecuzione
          verificata, documentazione.
        </p>
      </div>
    </section>
  );
}

function InterventionsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Gli interventi</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Gli interventi straordinari che gestiamo a Roma
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Ogni intervento straordinario è diverso. Abbiamo creato una pagina dedicata per ciascuna tipologia, con le
        informazioni specifiche su come lavoriamo, cosa include l&apos;intervento e come richiedere un preventivo. Scegli la
        situazione che ti riguarda.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {navCards.map((card, idx) => (
          <Link
            key={card.title}
            href={card.href}
            className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]"
          >
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden">
              <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Intervento</span>
              </div>
              <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em]">{card.title}</h3>
              <p className="mt-[12px] flex-1 text-[14px] leading-[1.55] text-[#3a3b36]">{card.body}</p>
              <p className="mt-[12px] text-[13px] leading-[1.55] text-[#6e6f68]">
                Problema intercettato: &quot;{card.problem}&quot;
              </p>
              <span className="mt-[14px] inline-flex text-[14px] text-[#161714] underline">{card.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Come funziona</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Come funziona un intervento straordinario con Luna Service
      </h2>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        Gli interventi straordinari richiedono una gestione diversa rispetto ai servizi continuativi. Ecco il processo,
        dalla prima richiesta all&apos;intervento completato.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {processSteps.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[20px] py-[20px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em] text-[#fbf9f3]">{item.title}</h3>
            <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">{item.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function WhySection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Perché Luna Service</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Perché scegliere Luna Service per un intervento straordinario a Roma
      </h2>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {whyItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RelatedServicesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Altri servizi correlati</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Hai bisogno di un servizio continuativo dopo l&apos;intervento straordinario?
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Spesso un intervento straordinario è il punto di partenza di una collaborazione continuativa. Dopo uno sgrosso
          post ristrutturazione, molti clienti hanno bisogno di un servizio di pulizia ordinaria per la nuova struttura.
          Dopo la pulizia di un appartamento degradato, molti hanno bisogno di un piano di manutenzione periodica.
        </p>
        <p className="m-0">
          Luna Service offre la continuità dopo l&apos;emergenza: dallo stesso interlocutore, con la stessa struttura operativa,
          senza dover ricominciare da capo con un&apos;impresa diversa.
        </p>
      </div>
      <div className="mt-[20px] flex flex-col gap-[10px] text-[16px] text-[#161714]">
        <Link href="/pulizie-condominiali-roma/" className="underline">
          → Pulizie condominiali Roma
        </Link>
        <Link href="/pulizie-strutture-ricettive-roma/" className="underline">
          → Pulizie strutture ricettive Roma
        </Link>
        <Link href="/sanificazione-ambienti-roma/" className="underline">
          → Sanificazione ambienti Roma
        </Link>
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
        Descrivi la tua situazione — ti risponderemo entro poche ore
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Non serve sapere esattamente di cosa hai bisogno. Descrivcici la situazione e pensiamo noi a come risolverla.
      </p>
      <LeadFormShell
        source="pulizie-straordinarie-roma"
        className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
          <SelectField
            label="Tipo di intervento*"
            name="tipo_intervento"
            required
            options={[
              "Seleziona…",
              "Sgrosso post ristrutturazione",
              "Pulizia balconi / escrementi piccioni",
              "Cantina o locale allagato",
              "Ambiente molto sporco o degradato",
              "Non so — ho bisogno di un consiglio",
            ]}
          />
          <InputField label="Indirizzo o zona di Roma*" placeholder="Es. Prati, EUR, Ostia..." name="zona" required />
          <SelectField
            label="Dimensione approssimativa dell'area"
            name="dimensione"
            options={["Seleziona…", "Meno di 50 mq", "Da 50 a 100 mq", "Da 100 a 200 mq", "Oltre 200 mq", "Non so"]}
          />
          <SelectField
            label="Urgenza*"
            name="urgenza"
            required
            options={[
              "Seleziona…",
              "Urgente — entro 24–48 ore",
              "Entro questa settimana",
              "Entro questo mese",
              "Sto solo raccogliendo informazioni",
            ]}
          />
          <div className="md:col-span-2">
            <TextareaField
              label="Descrizione della situazione*"
              placeholder="Descrivici brevemente la situazione: cosa è successo, in che condizioni si trova l'ambiente, se ci sono elementi particolari da sapere prima del sopralluogo…"
              name="descrizione"
              required
            />
          </div>
          <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          <InputField label="Email*" placeholder="nome@email.it" name="email" type="email" required autoComplete="email" />
          <SelectField
            label="Vuoi che ti richiamiamo?"
            name="preferenza_richiamo"
            options={[
              "Seleziona…",
              "Sì, il prima possibile",
              "Sì, in orario mattutino",
              "Sì, in orario pomeridiano",
              "No, preferisco essere contattato via email",
            ]}
          />
        </div>
        <div className="mt-[16px]">
          <FormSubmitPrimaryButton>Invia la richiesta — ti risponderemo entro poche ore</FormSubmitPrimaryButton>
        </div>
        <p className="mt-[10px] m-0 text-[14px] text-[#161714]">
          Ogni situazione è diversa. Non esitare a descriverci anche le situazioni più difficili: interveniamo senza
          giudizi e con la massima riservatezza.
        </p>
        <a href={whatsappHref} className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Hai un&apos;urgenza? Scrivici subito su WhatsApp → Siamo operativi tutti i giorni.
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
          Domande frequenti sulle pulizie straordinarie a Roma
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

export function PulizieStraordinarieRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <PageBreadcrumb items={pageBreadcrumbs["/pulizie-straordinarie-roma/"]} />
      <HeroSection />
      <ContextSection />
      <InterventionsSection />
      <ProcessSection />
      <WhySection />
      <RelatedServicesSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
