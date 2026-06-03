"use client";

import Image from "next/image";
import { PageBreadcrumb } from "@/components/luna/PageBreadcrumb";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import Link from "next/link";
import {
  SectionBadge,
  SectionShell,
  SiteFooter,
  SiteHeaderPill,
} from "@/components/luna/ui";
import { whatsappHref } from "@/components/luna/navigation";

const metricItems = [
  { value: "14", label: "anni di attività nel settore delle pulizie professionali a Roma", sublabel: "" },
  { value: "86", label: "strutture ricettive servite regolarmente nella città metropolitana", sublabel: "" },
  { value: "22", label: "condomini con contratto continuativo attivo", sublabel: "" },
  { value: "47", label: "operatori nel team operativo", sublabel: "" },
  { value: "312", label: "interventi straordinari completati negli ultimi 12 mesi", sublabel: "" },
  { value: "4.9★", label: "media recensioni Google", sublabel: "" },
] as const;

const specializationItems = [
  {
    title: "Personale formato per il contesto specifico",
    body: "Un operatore formato per le pulizie alberghiere conosce la differenza tra il riassetto di una camera di transito e la pulizia profonda post check-out. Sa come trattare il marmo nei corridoi di un palazzo storico. Sa come lavorare in un ambiente operativo senza interferire con il lavoro del personale dell'hotel. Questa competenza specifica non si acquisisce mandando operatori generici: si costruisce con formazione dedicata e con l'esperienza sul campo.",
  },
  {
    title: "Protocolli costruiti sul contesto",
    body: "Le checklist operative di Luna Service non sono documenti generici: vengono costruite sul cliente specifico, sulla struttura specifica, sui materiali specifici. Prima di ogni avvio di servizio, il supervisore effettua un sopralluogo che trasforma le caratteristiche della struttura in istruzioni operative concrete per il team.",
  },
  {
    title: "Supervisore dedicato come standard — non come eccezione",
    body: "In molte imprese di pulizie il supervisore è una figura che interviene quando c'è un problema. In Luna Service è una figura strutturale di ogni contratto: ogni cliente ha un referente dedicato che conosce la struttura, gestisce il team, effettua i controlli qualità e risponde direttamente al cliente. Non un centralino: una persona.",
  },
] as const;

const teamTraits = [
  "Regolarmente assunto con contratto di lavoro conforme al CCNL di settore",
  "Coperto da assicurazione RC professionale per danni a terzi o alle proprietà",
  "Formato sulle procedure di pulizia e igienizzazione per ambienti professionali",
  "Formato sulle normative di sicurezza sul lavoro — D.Lgs. 81/2008",
  "Briefato specificamente su ogni struttura cliente prima dell'avvio del servizio",
  "Tenuto a standard di riservatezza verso terzi sulle strutture e sui clienti",
] as const;

const complianceItems = [
  {
    title: "Conformità D.Lgs. 81/2008 — Sicurezza sul lavoro",
    body: "Luna Service opera in piena conformità al Decreto Legislativo 81/2008 in materia di salute e sicurezza nei luoghi di lavoro. Tutto il personale è formato sui rischi specifici del settore, utilizza i dispositivi di protezione individuale appropriati e lavora con attrezzature conformi alle norme CE vigenti.",
  },
  {
    title: "Assicurazione RC Professionale",
    body: "Luna Service è coperta da polizza di Responsabilità Civile Professionale per danni a terzi o alle proprietà causati durante lo svolgimento del servizio. Copia della polizza è disponibile su richiesta per i clienti che ne hanno necessità — amministratori di condominio, direttori d'albergo, property manager.",
  },
] as const;

const valueItems = [
  {
    title: "La trasparenza prima del contratto",
    body: "Il preventivo di Luna Service non lascia nulla al caso: descrizione dettagliata dei servizi inclusi, frequenze, costo mensile e annuale, clausole di verifica qualità. Prima di firmare, il cliente sa esattamente cosa riceverà — e cosa non riceverà. Nessuna sorpresa dopo l'avvio.",
  },
  {
    title: "Il sopralluogo come punto di partenza",
    body: "Non formuliamo preventivi alla cieca. Prima di ogni proposta effettuiamo un sopralluogo gratuito della struttura: valutiamo gli spazi, i materiali, le aree critiche, i flussi operativi. Il preventivo che ne deriva è calibrato sulla realtà — non su stime generiche.",
  },
  {
    title: "Il controllo qualità come routine",
    body: "La verifica della qualità non è un'azione straordinaria che scatta quando c'è un problema: è una routine. Il supervisore effettua controlli a campione durante gli interventi e ispezioni periodiche documentate. Se qualcosa non è al livello concordato, lo sappiamo prima del cliente — e lo correggiamo prima che diventi un problema.",
  },
  {
    title: "La riservatezza come requisito operativo",
    body: "Lavoriamo all'interno di strutture alberghiere, abitazioni private, uffici aziendali, ambienti condominiali. La riservatezza verso terzi — su ciò che vediamo, su chi sono i nostri clienti, sulle caratteristiche degli ambienti in cui operiamo — è un requisito operativo del nostro lavoro, non una promessa generica. Il personale è formato su questo aspetto prima di iniziare qualsiasi collaborazione.",
  },
] as const;

const testimonials = [
  {
    quote:
      "Con Luna Service abbiamo finalmente trovato un'impresa che mantiene gli standard nel tempo, non solo nelle prime settimane. Il referente dedicato fa la differenza: c'è sempre qualcuno che conosce la nostra struttura e risponde in tempi rapidi.",
    attribution: "Marco Benedetti, Direttore, Hotel Palazzo Verdea ★★★★, Roma",
  },
  {
    quote:
      "Come amministratrice di condominio gestisco diversi edifici a Roma. Luna Service è l'unica impresa con cui ho un rapporto diretto, documentato e senza sorprese. Il report mensile mi permette di rispondere all'assemblea con dati concreti.",
    attribution: "Elena Conti, Amministratrice di Condominio, Roma",
  },
  {
    quote:
      "Gestisco tre appartamenti su Airbnb nel centro di Roma. Da quando lavoro con Luna Service non ho più dovuto preoccuparmi delle pulizie: ricevo il report fotografico dopo ogni intervento e le recensioni degli ospiti sulla pulizia sono stabilmente a cinque stelle.",
    attribution: "Giulia Romano, Property Manager, Roma",
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
                  Luna Service: l&apos;impresa di pulizie professionali a Roma che ha scelto di specializzarsi
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  In un mercato in cui tutti fanno tutto, noi abbiamo scelto di fare bene alcune cose specifiche: le
                  pulizie per hotel e strutture ricettive a Roma, le pulizie condominiali, gli interventi straordinari. Non
                  siamo la più grande impresa di pulizie della città. Siamo quella che i nostri clienti non cambiano.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <Link
                    href="/pulizie-hotel-roma/"
                    className="inline-flex items-center justify-center rounded-[999px] bg-[#99cc33] px-[28px] py-[20px] text-[15px] font-medium text-[#161714]"
                  >
                    Scopri i nostri servizi
                  </Link>
                  <Link
                    href="/contatti/"
                    className="inline-flex items-center justify-center rounded-[999px] border border-[rgba(255,255,255,0.35)] px-[26px] py-[18px] text-[15px] text-[#fbf9f3]"
                  >
                    Contattaci
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:absolute md:top-0 md:right-0 md:bottom-0 w-full md:w-[50%] min-h-[220px] md:min-h-0">
            <Image
              src="/images/pages/chi-siamo-hero.jpg"
              alt="Chi siamo Luna Service"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.35)_100%)]" />
          </div>
          <div className="hidden md:block absolute inset-0 bg-[linear-gradient(90deg,rgba(22,23,20,0.96)_0%,rgba(22,23,20,0.92)_45%,rgba(22,23,20,0)_62%)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function IdentitySection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>L&apos;identità</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Chi è Luna Service
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Luna Service è un&apos;impresa di pulizie professionali con sede a Roma, specializzata nel servizio a hotel,
          strutture ricettive, condomini e nella gestione di interventi straordinari su tutta la città e la provincia
          metropolitana.
        </p>
        <p className="m-0">
          Siamo nati con una convinzione precisa: che nel settore delle pulizie professionali la differenza non la fa la
          dimensione dell&apos;impresa, ma la qualità operativa e la capacità di mantenere quello standard nel tempo — non solo
          nelle prime settimane di un contratto nuovo.
        </p>
        <p className="m-0">
          Roma è una città con esigenze specifiche: un mercato dell&apos;ospitalità tra i più intensi d&apos;Europa, un patrimonio
          edilizio storico che richiede competenze specifiche, una domanda di interventi straordinari che non si ferma mai.
          Luna Service è costruita per rispondere a queste esigenze — con struttura operativa, personale formato e un
          modello di servizio che mette il referente dedicato al centro di ogni collaborazione.
        </p>
        <p className="m-0">
          Il nostro cliente tipo non è chi cerca il preventivo più basso. È chi ha già provato soluzioni improvvisate e ha
          capito che il risparmio apparente costa più del servizio fatto bene.
        </p>
      </div>
    </section>
  );
}

function NumbersSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>I numeri</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Luna Service in numeri
      </h2>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
        {metricItems.map((item) => (
          <article
            key={item.label}
            className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[24px] py-[24px]"
          >
            <div className="font-serif text-[50px] leading-[1] tracking-[-0.025em] text-[#fbf9f3]">{item.value}</div>
            <p className="mt-[14px] m-0 text-[14px] font-medium text-[#fbf9f3]">{item.label}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function SpecializationSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>La specializzazione</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Perché abbiamo scelto di specializzarci — e cosa significa per chi ci sceglie
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          La specializzazione non è un limite: è una scelta strategica. Un&apos;impresa di pulizie che fa tutto — domestico,
          industriale, alberghiero, condominiale, straordinario — in modo uguale per tutti, non eccelle in nulla.
        </p>
        <p className="m-0">
          Luna Service ha scelto di concentrarsi su tre aree in cui la qualità del servizio fa una differenza misurabile
          per il cliente: le strutture ricettive, i condomini e gli interventi straordinari. Tre aree che hanno in comune
          la necessità di continuità, affidabilità e la capacità di mantenere lo standard nel tempo — non di fare bella
          figura la prima settimana.
        </p>
        <p className="m-0">Cosa significa concretamente questa specializzazione per chi ci sceglie:</p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {specializationItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Il team</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Le persone di Luna Service
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Un servizio di pulizie è fatto dalle persone che lo erogano. Non dalle attrezzature, non dai prodotti, non dai
          contratti: dalle persone che entrano ogni giorno nelle strutture dei nostri clienti e fanno il lavoro.
        </p>
        <p className="m-0">
          Luna Service seleziona il personale con criteri precisi: esperienza nel settore delle pulizie professionali,
          capacità di lavorare in ambienti operativi complessi, attitudine alla discrezione e al rispetto degli spazi
          altrui. Ogni nuovo operatore viene briefato specificamente sulla struttura cliente prima di iniziare — non mandato
          &quot;a vedere com&apos;è&quot;.
        </p>
        <p className="m-0">Tutto il personale di Luna Service è:</p>
      </div>
      <ul className="mt-[16px] mb-0 max-w-[980px] list-disc space-y-[10px] pl-[20px] text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">
        {teamTraits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <article className="mt-[24px] max-w-[980px] rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[24px] py-[24px]">
        <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#fbf9f3]">La formazione continua</h3>
        <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">
          Il settore delle pulizie professionali evolve: nuovi prodotti, nuove normative, nuovi standard richiesti dal
          mercato alberghiero e dalle normative sanitarie. Luna Service investe nella formazione continua del proprio
          personale — non solo nella formazione iniziale. Un operatore aggiornato lavora meglio, causa meno errori e
          garantisce uno standard più stabile nel tempo.
        </p>
      </article>
    </SectionShell>
  );
}

function ComplianceSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Sicurezza e garanzie</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Conformità e coperture assicurative
      </h2>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {complianceItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>I valori operativi</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Come lavoriamo: i principi che guidano ogni intervento
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Ogni impresa di pulizie dichiara di lavorare bene. Noi preferiamo descrivere concretamente come lavoriamo — in modo
        che chi ci sceglie sappia esattamente cosa aspettarsi, e chi non ci sceglie sappia esattamente perché.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {valueItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Copertura geografica</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Dove operiamo
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Luna Service è operativa su tutta Roma e la provincia metropolitana. I nostri servizi continuativi coprono tutte le
          zone della città — centro storico, quartieri residenziali, periferia — con squadre distribuite sul territorio per
          garantire tempi di intervento adeguati in ogni area.
        </p>
        <p className="m-0">
          Per gli interventi straordinari urgenti siamo in grado di intervenire su Roma e provincia entro 24–48 ore dalla
          richiesta.
        </p>
        <p className="m-0">
          <Link href="/aree-servite/" className="underline text-[#fbf9f3]">
            → Vedi tutte le aree servite
          </Link>
        </p>
      </div>
    </SectionShell>
  );
}

function SocialProofSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Social proof</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Cosa dicono di noi
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        La reputazione di Luna Service si costruisce ogni giorno nelle strutture dei nostri clienti. Queste sono alcune
        delle esperienze che ci hanno condiviso.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {testimonials.map((item) => (
          <blockquote
            key={item.attribution}
            className="m-0 rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]"
          >
            <p className="m-0 text-[15px] leading-[1.65] text-[#3a3b36]">&quot;{item.quote}&quot;</p>
            <footer className="mt-[14px] text-[14px] leading-[1.55] text-[#6e6f68]">— {item.attribution}</footer>
          </blockquote>
        ))}
      </div>
      <p className="mt-[24px] max-w-[980px] text-[15px] leading-[1.65] text-[#3a3b36]">
        Google Reviews ★★★★★ 87 recensioni · Assicurazione RC Professionale · CCNL rispettato
      </p>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <SectionShell
      fullBleed
      bgClassName="bg-[#99cc33]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
      outerClassName="mt-[96px] md:mt-[140px]"
    >
      <h2 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#1a1f0d]">
        Vuoi sapere se Luna Service è il partner giusto per la tua struttura?
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Il modo migliore per capirlo è parlarne direttamente. Raccontaci la tua struttura e le tue esigenze: ti risponderemo
        con una proposta concreta — non con un preventivo automatico.
      </p>
      <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
        <Link
          href="/contatti/"
          className="inline-flex items-center justify-center rounded-[999px] bg-[#161714] px-[28px] py-[20px] text-[15px] font-medium text-[#fbf9f3]"
        >
          Richiedi il preventivo gratuito
        </Link>
        <a
          href={whatsappHref}
          className="inline-flex items-center justify-center rounded-[999px] border border-[rgba(0,0,0,0.12)] px-[26px] py-[18px] text-[15px] text-[#1a1f0d]"
        >
          Scrivici su WhatsApp
        </a>
      </div>
    </SectionShell>
  );
}

export function ChiSiamoPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <PageBreadcrumb items={pageBreadcrumbs["/chi-siamo/"]} />
      <HeroSection />
      <IdentitySection />
      <NumbersSection />
      <SpecializationSection />
      <TeamSection />
      <ComplianceSection />
      <ValuesSection />
      <CoverageSection />
      <SocialProofSection />
      <FinalCtaSection />
      <SiteFooter />
    </>
  );
}
