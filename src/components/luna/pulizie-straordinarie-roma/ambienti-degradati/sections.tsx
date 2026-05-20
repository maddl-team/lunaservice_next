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
  "Massima riservatezza garantita",
  "Nessun giudizio — solo professionalità",
  "Sopralluogo gratuito e riservato",
  "Operativi su tutta Roma e provincia",
] as const;

const whenItems = [
  {
    title: "Ambienti non curati per lungo tempo",
    body: "Una casa, un appartamento o un locale che per ragioni diverse — un lungo periodo di assenza, una malattia, un momento di difficoltà personale — non è stato curato per mesi o anni. Lo sporco si è accumulato su tutte le superfici, i pavimenti non sono stati lavati, i rifiuti non sono stati smaltiti regolarmente. La situazione è andata avanti finché non è diventata impossibile da gestire da soli. È uno dei contesti più comuni in cui lavoriamo — e uno di quelli che richiede più rispetto da parte nostra.",
  },
  {
    title: "Ambienti dopo un decesso",
    body: "Quando un familiare o una persona cara viene a mancare, spesso si trovano da gestire ambienti che richiedono una pulizia approfondita prima di poter essere rimessi in uso, svuotati o ceduti. È un momento già emotivamente difficile — e dover affrontare anche la pulizia lo rende ancora più pesante. Luna Service gestisce questi interventi con la discrezione e il rispetto che il momento richiede, spesso coordinandosi con le imprese di sgombero o con gli eredi.",
  },
  {
    title: "Ambienti post-sgombero",
    body: "Dopo lo sgombero di un appartamento o di un locale — che sia stato occupato abusivamente, usato come deposito per anni o semplicemente lasciato in cattive condizioni da un inquilino — l'ambiente spesso richiede un intervento di pulizia profonda prima di poter essere rimesso sul mercato o ristrutturato. Luna Service gestisce la pulizia post-sgombero coordinandosi con l'impresa di sgombero o direttamente con il proprietario.",
  },
  {
    title: "Situazioni di accumulo compulsivo",
    body: "Il disturbo da accumulo — noto anche come \"sindrome di Diogene\" nelle sue forme più gravi — porta all'accumulo di oggetti, rifiuti e materiali in quantità che rendono l'ambiente inutilizzabile e potenzialmente pericoloso. Questi interventi richiedono un approccio particolarmente delicato: spesso coinvolgono persone vulnerabili, spesso si intrecciano con situazioni familiari complesse. Luna Service interviene in questi contesti con la sensibilità necessaria, coordinandosi quando possibile con i servizi sociali o i familiari responsabili.",
  },
  {
    title: "Locali commerciali, garage e depositi",
    body: "Non solo abitazioni: anche locali commerciali dismessi, garage usati come depositi per anni, magazzini in stato di abbandono possono trovarsi in condizioni che richiedono un intervento professionale specializzato. In questi casi il tono emotivo è diverso — più operativo, meno personale — ma la professionalità e la discrezione restano le stesse.",
  },
] as const;

const howItems = [
  {
    title: "Il primo contatto — in riservatezza",
    body: "Puoi contattarci via WhatsApp o via form descrivendo la situazione con il livello di dettaglio che ti senti di fornire. Non è necessario entrare nei dettagli se non vuoi farlo: basta dirci che si tratta di un ambiente che richiede un intervento approfondito, la zona di Roma e una stima approssimativa della superficie. Il resto lo valutiamo durante il sopralluogo.",
  },
  {
    title: "Il sopralluogo — riservato e senza impegno",
    body: "Il sopralluogo viene effettuato da un responsabile di Luna Service — non da un team di operatori — per valutare la situazione in modo riservato. Nessun furgone con loghi visibili se non lo desideri. Nessun passaggio informazioni inutile. Il sopralluogo serve a noi per capire cosa serve e quanto tempo richiede; serve a te per vedere come lavoriamo prima di decidere.",
  },
  {
    title: "Il preventivo — trasparente",
    body: "Dopo il sopralluogo ricevi un preventivo dettagliato: cosa è incluso, cosa richiede attrezzature o tempi particolari, il costo complessivo. Nessuna voce vaga, nessun costo aggiuntivo che compare dopo l'inizio del lavoro.",
  },
  {
    title: "L'intervento — con la squadra giusta",
    body: "Il team che interviene è selezionato e briefato specificamente per questo tipo di lavoro: operatori formati per situazioni complesse, con la sensibilità necessaria e il riserbo richiesto. Prima di iniziare, il responsabile chiarisce con te cosa verrà fatto, in quale ordine, e come vengono gestiti eventuali oggetti o materiali particolari.",
  },
  {
    title: "La gestione dei materiali",
    body: "Durante l'intervento vengono separati i materiali recuperabili — oggetti di valore, documenti, effetti personali — da quelli da smaltire. La separazione avviene secondo le tue indicazioni o, in assenza di indicazioni specifiche, secondo criteri prudenziali. Lo smaltimento dei rifiuti viene gestito nel rispetto delle normative vigenti.",
  },
  {
    title: "Al termine — riservatezza verso l'esterno",
    body: "Al termine dell'intervento il responsabile verifica il risultato con te. Non viene lasciato nulla all'esterno dell'appartamento durante il lavoro — sacchi, materiali, attrezzature visibili — più del necessario e per il tempo strettamente necessario. La discrezione verso vicini e portieri è un requisito operativo del nostro lavoro, non un optional.",
  },
] as const;

const scopeCategories = [
  {
    title: "Rimozione e smaltimento rifiuti",
    items: [
      "Raccolta e smaltimento di rifiuti accumulati — domestici, ingombranti, organici",
      "Svuotamento di sacchi, contenitori, scatole",
      "Smaltimento di materiali deteriorati non recuperabili",
      "Coordinamento con imprese di sgombero se necessario",
    ],
  },
  {
    title: "Pulizia profonda delle superfici",
    items: [
      "Pulizia e igienizzazione di pavimenti, pareti e soffitti",
      "Rimozione di macchie, residui organici e incrostazioni",
      "Pulizia di cucina — piani cottura, forno, frigorifero, superfici",
      "Pulizia e igienizzazione completa di bagni",
      "Pulizia di finestre e infissi interni",
      "Pulizia di arredi e mobili recuperabili",
    ],
  },
  {
    title: "Trattamenti specifici",
    items: [
      "Trattamento antimuffa su superfici interessate",
      "Deodorizzazione professionale degli ambienti",
      "Sanificazione con ozono o nebulizzazione su richiesta",
      "Trattamento di materiali porosi con prodotti enzimatici specifici",
    ],
  },
  {
    title: "Attività di supporto",
    items: [
      "Separazione e selezione di oggetti recuperabili",
      "Imballaggio e deposito temporaneo di effetti personali su indicazione",
      "Documentazione fotografica dell'intervento su richiesta",
    ],
  },
] as const;

const faqItems = [
  {
    q: "Intervenite davvero su qualsiasi tipo di situazione, anche le più difficili?",
    a: "Sì. Non esiste una situazione in cui Luna Service si rifiuta di intervenire per ragioni legate allo stato dell'ambiente. Abbiamo gestito interventi in molti contesti diversi, anche in situazioni di degrado molto avanzato. L'unico limite è la sicurezza degli operatori: in presenza di rischi specifici — amianto, contaminazioni chimiche particolari — è necessaria una valutazione preliminare per definire le misure di sicurezza appropriate.",
  },
  {
    q: "Come garantite la riservatezza verso i vicini e il condominio?",
    a: "Il nostro personale non discute con terzi — vicini, portieri, passanti — le caratteristiche o le ragioni dell'intervento. Lavoriamo con la discrezione di chi sa che il rispetto della privacy del cliente è parte del servizio. Su richiesta organizziamo gli interventi in orari che minimizzano la visibilità — mattina presto, pomeriggio tardo — e utilizziamo mezzi non brandizzati.",
  },
  {
    q: "Cosa succede agli oggetti e agli effetti personali che si trovano nell'ambiente?",
    a: "Prima di iniziare qualsiasi operazione, definiamo insieme le istruzioni per la gestione degli oggetti: cosa conservare, cosa imballare, cosa smaltire. In assenza di indicazioni specifiche, adottiamo criteri prudenziali — conserviamo tutto ciò che potrebbe avere valore o significato personale e smaltismo solo materiali chiaramente inutilizzabili. Nulla viene smaltito senza istruzioni esplicite per gli oggetti di possibile valore.",
  },
  {
    q: "Quanto tempo richiede un intervento su un ambiente molto sporco?",
    a: "Dipende dalla superficie, dall'entità del degrado e dai trattamenti specifici necessari. Per un appartamento standard in condizioni di sporco significativo ma non estremo, un intervento completo richiede generalmente una o due giornate di lavoro con squadra adeguata. Per situazioni più complesse i tempi si allungano e vengono definiti durante il sopralluogo. Il preventivo include sempre una stima dei tempi.",
  },
  {
    q: "Posso richiedere un sopralluogo senza impegnarmi a fare i lavori?",
    a: "Sì. Il sopralluogo è gratuito e non vincolante. Puoi decidere di non procedere dopo il sopralluogo senza nessun costo e senza nessuna pressione. Siamo consapevoli che alcune situazioni richiedono tempo per essere affrontate — e rispettiamo i tuoi tempi.",
  },
  {
    q: "Lavorate anche quando l'intervento riguarda una persona anziana o in difficoltà che non ha richiesto direttamente il servizio?",
    a: "Sì, in coordinamento con i familiari o con gli operatori sociali responsabili. In questi casi è importante che ci sia una persona di riferimento — un familiare, un tutore, un amministratore di sostegno — che autorizza l'intervento e gestisce il rapporto con Luna Service. Lavoriamo nel rispetto della persona che vive nell'ambiente, con la sensibilità che queste situazioni richiedono.",
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
                  Pulizia di ambienti molto sporchi o degradati a Roma: interveniamo senza giudizi
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Alcune situazioni richiedono un intervento che va oltre la pulizia ordinaria — e che richiede discrezione,
                  rispetto e professionalità prima ancora che attrezzature e prodotti. Luna Service interviene su ambienti
                  in qualsiasi stato di sporco o degrado a Roma, con la riservatezza necessaria e senza domande che non ti
                  riguardano.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <a
                    href="#preventivo-form"
                    className="inline-flex items-center justify-center rounded-[999px] bg-[#99cc33] px-[28px] py-[20px] text-[15px] font-medium text-[#161714]"
                  >
                    Contattaci in riservatezza
                  </a>
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
              src="/images/pages/ambienti-degradati-hero.jpg"
              alt="Pulizia ambienti molto sporchi e degradati Roma"
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

function ApproachSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>L&apos;approccio</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Prima di tutto: nessun giudizio
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Ci sono situazioni in cui chiedere aiuto non è semplice. In cui descrivere lo stato di un ambiente richiede un
          coraggio che non sempre si ha. In cui la preoccupazione di essere giudicati — dall&apos;impresa, dagli operatori,
          dal vicinato — è più forte della necessità pratica di risolvere il problema.
        </p>
        <p className="m-0">
          Luna Service lavora su questi interventi da anni. Abbiamo visto molte situazioni diverse, in molti contesti
          diversi. Nessuna ci ha mai portati a giudicare chi ci ha chiamati — e nessuna mai lo farà.
        </p>
        <p className="m-0">
          Quello che sappiamo è che chiunque chiami per questo tipo di intervento lo fa perché vuole risolvere una
          situazione difficile. Non importa come ci si è arrivati: importa uscirne. E noi siamo qui per questo.
        </p>
        <p className="m-0">
          Il nostro approccio è semplice: ascoltiamo, valutiamo, interveniamo. Con discrezione verso l&apos;esterno — vicini,
          portiere, amministratore — e con rispetto verso chi ci ha chiamati. Senza domande inutili, senza commenti fuori
          luogo, senza personale che parla di quello che ha visto.
        </p>
      </div>
    </section>
  );
}

function WhenSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Quando serve</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Quando può essere necessario un intervento di questo tipo
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Le situazioni che portano a richiedere questo servizio sono molto diverse tra loro. Le descriviamo non per
        catalogare le difficoltà altrui, ma per aiutarti a capire se quello che stai cercando corrisponde a quello che
        facciamo.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {whenItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Come lavoriamo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Come gestiamo questi interventi: dal primo contatto alla fine del lavoro
      </h2>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        Il modo in cui lavoriamo su questi interventi è diverso dal modo in cui gestiamo le pulizie ordinarie. Più
        ascolto, più valutazione preliminare, più attenzione al contesto umano oltre che operativo.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {howItems.map((item) => (
          <article
            key={item.title}
            className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[24px] py-[24px]"
          >
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#fbf9f3]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[rgba(251,249,243,0.82)]">{item.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function ScopeSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Cosa possiamo fare</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Cosa include un intervento su un ambiente molto sporco o degradato
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Ogni intervento è diverso — la lista che segue è un riferimento generale, non un pacchetto fisso. Quello che
        include il tuo intervento dipende dalla situazione specifica e viene definito durante il sopralluogo.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {scopeCategories.map((category) => (
          <article key={category.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{category.title}</h3>
            <ul className="mt-[12px] mb-0 list-disc space-y-[10px] pl-[20px] text-[15px] leading-[1.65] text-[#3a3b36]">
              {category.items.map((item) => (
                <li key={item}>
                  {category.title === "Trattamenti specifici" &&
                  item === "Sanificazione con ozono o nebulizzazione su richiesta" ? (
                    <Link href="/sanificazione-ambienti-roma/" className="text-inherit underline">
                      {item}
                    </Link>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function CoordinationSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Coordinamento</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Luna Service non lavora da sola quando la situazione lo richiede
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Alcune delle situazioni in cui interveniamo richiedono il coordinamento con altri professionisti: imprese di
          sgombero, servizi sociali, amministratori di condominio, eredi, agenzie immobiliari, avvocati che gestiscono
          successioni.
        </p>
        <p className="m-0">
          Luna Service è abituata a lavorare in questi contesti multi-attore. Sappiamo come coordinarci con le altre parti
          senza creare sovrapposizioni, senza comunicare informazioni che non ci riguardano, senza interferire con processi
          che sono di competenza altrui.
        </p>
        <p className="m-0">
          Se la tua situazione coinvolge altri soggetti — un amministratore di sostegno, un&apos;assistente sociale, un
          familiare che gestisce la pratica a distanza — puoi comunicarcelo fin dal primo contatto. Organizzeremo il lavoro
          in modo da integrarci con il processo già in corso, non da complicarlo.
        </p>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Supporto</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Se la situazione riguarda una persona in difficoltà
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Alcune delle chiamate che riceviamo non vengono dalla persona che vive nell&apos;ambiente da pulire, ma da un
          familiare, un vicino o un operatore sociale che si preoccupa per qualcuno in difficoltà.
        </p>
        <p className="m-0">
          Se stai cercando aiuto per una persona cara che non riesce più a gestire il proprio ambiente domestico — per
          ragioni di salute, di età, di difficoltà psicologica — Luna Service può occuparsi della parte operativa della
          pulizia. Per il supporto alla persona, i servizi sociali del Municipio di Roma competente per zona e il medico di
          base sono i riferimenti appropriati per attivare le misure di assistenza e tutela necessarie.
        </p>
        <p className="m-0">
          Non siamo assistenti sociali: siamo un&apos;impresa di pulizie. Ma sappiamo che spesso la pulizia dell&apos;ambiente è il
          primo passo concreto in un percorso più ampio di recupero di condizioni di vita dignitose — e siamo onorati di
          poter dare quel contributo.
        </p>
      </div>
    </SectionShell>
  );
}

function FormSection() {
  const [contactPreference, setContactPreference] = useState("Telefonicamente");
  const showPhone = contactPreference === "Telefonicamente" || contactPreference === "Via WhatsApp";
  const showEmail = contactPreference === "Via email — preferisco non essere chiamato";

  return (
    <div id="preventivo-form">
      <SectionShell
        fullBleed
        bgClassName="bg-[#99cc33]"
        innerClassName="rounded-[32px]"
        boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
        outerClassName="mt-[96px] md:mt-[140px]"
      >
        <h2 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#1a1f0d]">
          Contattaci in riservatezza
        </h2>
        <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
          Non è necessario descrivere tutto nei dettagli. Dicci quello che ti senti di dirci — il resto lo valutiamo
          durante il sopralluogo, che è gratuito e senza impegno.
        </p>
        <LeadFormShell
          source="ambienti-degradati"
          className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
            <InputField label="Nome*" placeholder="Il tuo nome" name="nome" required autoComplete="name" />
            <InputField label="Zona di Roma*" placeholder="Es. EUR, Prati, Ostia..." name="zona" required />
            <SelectField
              label="Tipo di ambiente"
              name="tipo_ambiente"
              options={[
                "Seleziona…",
                "Appartamento / casa privata",
                "Locale commerciale / garage / deposito",
                "Preferisco non specificare",
              ]}
            />
            <SelectField
              label="Superficie approssimativa"
              name="superficie"
              options={["Seleziona…", "Fino a 50 mq", "Da 50 a 100 mq", "Oltre 100 mq", "Non so"]}
            />
            <div className="md:col-span-2">
              <TextareaField
                label="Descrizione della situazione"
                placeholder="Descrivi la situazione con il livello di dettaglio che preferisci. Non è obbligatorio — puoi anche scriverci solo che hai bisogno di un sopralluogo."
                name="descrizione"
              />
            </div>
            <SelectField
              label="Come preferisci essere contattato?*"
              name="preferenza_contatto"
              required
              value={contactPreference}
              onChange={(event) => setContactPreference(event.target.value)}
              options={["Telefonicamente", "Via WhatsApp", "Via email — preferisco non essere chiamato"]}
            />
            <InputField
              label="Telefono*"
              placeholder="+39 ..."
              name="telefono"
              type="tel"
              autoComplete="tel"
              disabled={!showPhone}
              required={showPhone}
            />
            <InputField
              label="Email*"
              placeholder="nome@email.it"
              name="email"
              type="email"
              autoComplete="email"
              disabled={!showEmail}
              required={showEmail}
            />
            <SelectField
              label="Vuoi che il sopralluogo sia il più discreto possibile?"
              name="discrezione"
              options={["Seleziona…", "Sì — preferisco massima discrezione", "No — non è necessario"]}
            />
          </div>
          <div className="mt-[16px]">
            <FormSubmitPrimaryButton invert>Invia la richiesta — ti risponderemo con rispetto e riservatezza</FormSubmitPrimaryButton>
          </div>
          <p className="mt-[12px] m-0 text-[14px] leading-[1.55] text-[#3a3b36]">
            I tuoi dati non vengono condivisi con nessuno. La tua richiesta viene gestita direttamente dal
            responsabile — non da un centralino.
          </p>
        </LeadFormShell>
        <a href="https://wa.me/" className="mt-[14px] inline-flex text-[14px] text-[#1a1f0d] underline">
          Preferisci scrivere direttamente? WhatsApp è il canale più rapido e riservato →
        </a>
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
          <Link href="/pulizie-straordinarie-roma/cantina-allagata/" className="underline">
            /pulizie-straordinarie-roma/cantina-allagata/
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
    <section className="px-[16px] md:px-[56px] py-[90px] md:py-[120px]">
      <div className="text-center mb-[40px] md:mb-[64px] flex flex-col items-center">
        <div className="mb-[28px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#3a3b36]">
          <span className="h-[6px] w-[6px] rounded-full bg-[#99cc33]" />
          FAQ
        </div>
        <h2 className="m-0 text-center font-serif text-[32px] md:text-[56px] leading-[1] tracking-[-0.025em] text-[#161714]">
          Domande frequenti
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

export function PuliziaAmbientiDegradatiRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Straordinarie Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizia Ambienti Molto Sporchi e Degradati Roma</li>
        </ol>
      </nav>
      <HeroSection />
      <ApproachSection />
      <WhenSection />
      <HowSection />
      <ScopeSection />
      <CoordinationSection />
      <SupportSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
