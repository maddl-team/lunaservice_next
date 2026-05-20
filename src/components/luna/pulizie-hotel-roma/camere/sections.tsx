"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FormSubmitPrimaryButton, LeadFormShell } from "@/components/luna/LeadFormShell";
import { FaqItem, InputField, PrimaryCtaButton, SectionBadge, SectionShell, SelectField, SiteFooter, SiteHeaderPill, TextareaField } from "@/components/luna/ui";

const trustItems = [
  "Checklist operativa per ogni camera",
  "Verifica qualità a fine intervento",
  "Operatori formati su standard alberghieri",
  "Nessuna camera consegnata senza controllo finale",
] as const;

const camereServiceImages = [
  "/images/pages/pulizie-hotel-roma-camere-servizio-01.jpg",
  "/images/pages/pulizie-hotel-roma-camere-servizio-02.jpg",
  "/images/pages/pulizie-hotel-roma-camere-servizio-03.jpg",
  "/images/pages/pulizie-hotel-roma-camere-servizio-04.jpg",
] as const;

const checklist = {
  letto: [
    "Cambio completo o sistemazione biancheria secondo policy struttura",
    "Rifacimento letto con angoli a norma e copriletto allineato",
    "Controllo visivo cuscini e federe",
    "Ispezione materasso per eventuali anomalie",
  ],
  bagno: [
    "Pulizia e igienizzazione WC — interno, esterno, coperchio, base",
    "Pulizia lavandino, rubinetteria e specchio senza aloni",
    "Pulizia e igienizzazione doccia o vasca — piastrelle, box, soffione",
    "Cambio asciugamani e tappetino",
    "Rabbocco o sostituzione amenity (sapone, shampoo, ecc.)",
    "Svuotamento cestino",
    "Pulizia pavimento",
  ],
  superfici: [
    "Spolveratura comodini, lampade, testata del letto",
    "Pulizia scrivania, sedie, eventuale divano",
    "Pulizia interna e esterna armadio (pulizia profonda a cadenza)",
    "Pulizia televisore e telecomando (igienizzazione)",
    "Pulizia maniglie, interruttori, prese elettriche",
    "Pulizia finestre lato interno e davanzale",
  ],
  pavimenti: [
    "Aspirazione tappeti o moquette",
    "Lavaggio pavimento con prodotto appropriato al materiale",
    "Controllo angoli e bordi",
  ],
  finale: [
    "Verifica visiva complessiva prima di uscire dalla camera",
    "Ripristino temperatura ambiente se presente termostato",
    "Chiusura corretta della camera e segnalazione su registro",
  ],
} as const;

const faqs = [
  {
    q: "Con quale frequenza vanno pulite le camere di un hotel?",
    a: "Le camere occupate da ospiti in soggiorno prolungato vanno riassettate ogni giorno. Le camere post check-out richiedono una pulizia completa prima del check-in successivo. La pulizia profonda periodica — su materassi, tende, superfici difficili — va eseguita con cadenza settimanale o mensile in base alla categoria e all'occupazione della struttura. Luna Service calibra le frequenze sulla realtà operativa del tuo hotel.",
  },
  {
    q: "Quanto tempo richiede la pulizia di una camera?",
    a: "Il tempo dipende dalla tipologia di intervento e dalla dimensione della camera. Un riassetto standard richiede mediamente 20–30 minuti per camera. Una pulizia completa post check-out richiede 35–50 minuti. Una pulizia profonda periodica può richiedere fino a 90 minuti per camera. Luna Service dimensiona il team in modo che i tempi non interferiscano mai con i check-in programmati.",
  },
  {
    q: "Cosa succede se un operatore è assente?",
    a: "La sostituzione è a carico di Luna Service. Tu non gestisci le assenze, non cerchi sostituzioni, non ritardi il servizio. Il supervisore organizza la copertura autonomamente e il servizio viene erogato regolarmente.",
  },
  {
    q: "Posso richiedere una pulizia straordinaria con breve preavviso?",
    a: "Sì. Per picchi di occupazione imprevisti, eventi speciali o situazioni di emergenza igienica, Luna Service è in grado di intervenire con squadre rinforzate su Roma con 24–48 ore di preavviso.",
  },
  {
    q: "Come comunico al team le preferenze specifiche della mia struttura?",
    a: "Attraverso il supervisore dedicato. Prima dell'avvio del servizio, il supervisore raccoglie tutte le indicazioni operative della tua struttura — dai materiali ai protocolli interni, dagli orari preferiti alle priorità di intervento — e le traduce in istruzioni operative per il team. Ogni aggiornamento o modifica viene gestito sempre dallo stesso referente.",
  },
] as const;

function HeroCamere() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[20px] md:pt-[28px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-[42px]">
                <h1 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.02] tracking-[-0.025em] text-[#fbf9f3]">
                  Pulizia e riassetto camere hotel a Roma: il servizio che gli ospiti notano per primo
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  La camera è il momento della verità per ogni ospite. È lì che si forma l&apos;opinione sulla tua
                  struttura, è lì che nasce — o muore — una recensione positiva. Luna Service gestisce la pulizia delle
                  camere del tuo hotel a Roma con operatori formati, checklist verificate e un supervisore che risponde
                  direttamente a te.
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
              src="/images/pages/pulizie-hotel-roma-camere-hero.jpg"
              alt="Pulizia professionale camera hotel"
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
        Una camera non perfettamente pulita costa più di quanto pensi
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Gli ospiti non scrivono recensioni negative perché il check-in era lento o il Wi-Fi incerto. Le scrivono
          quando trovano un capello sul cuscino, una macchia sul vetro del bagno, la polvere sul comodino che non è
          stata toccata da giorni.
        </p>
        <p className="m-0">
          La pulizia delle camere è l&apos;unico aspetto del soggiorno che l&apos;ospite valuta ogni giorno, a volte più volte
          al giorno. È anche l&apos;unico aspetto su cui il margine di errore è praticamente zero: una camera sporca viene
          notata sempre, anche da chi non ha pretese particolari.
        </p>
        <p className="m-0">
          Il problema non è la volontà del personale interno. È la struttura operativa: senza checklist, senza
          supervisione, senza un sistema di verifica, lo standard cala inevitabilmente nel tempo. Luna Service porta
          in ogni camera del tuo hotel esattamente quella struttura operativa.
        </p>
      </div>
    </section>
  );
}

function ServicesIncludedSection() {
  const blocks = [
    {
      t: "Riassetto giornaliero",
      b: "Per le camere occupate da ospiti in soggiorno prolungato, il riassetto giornaliero include: rifacimento letti con cambio o sistemazione biancheria secondo le policy della struttura, rimozione rifiuti, pulizia e igienizzazione del bagno, ricambio degli asciugamani, spolveratura delle superfici principali, aspirazione e lavaggio dei pavimenti, ripristino degli amenity e verifica visiva dello stato generale della camera.",
    },
    {
      t: "Pulizia a fondo post check-out",
      b: "Tra la partenza di un ospite e l'arrivo del successivo, ogni camera riceve un intervento completo: cambio integrale della biancheria da letto e da bagno, pulizia profonda di ogni superficie — incluse quelle che si puliscono solo tra un check-out e l'altro, come l'interno degli armadi, le guide dei cassetti, i bordi delle finestre, le prese elettriche, i telecomandi. Nulla viene trascurato perché nulla deve far capire all'ospite che qualcuno c'era prima di lui.",
    },
    {
      t: "Pulizia profonda periodica",
      b: "A cadenza settimanale, mensile o concordata, eseguiamo interventi di pulizia profonda su elementi che il riassetto quotidiano non copre: materassi, tende, tendine da doccia, griglie di ventilazione, dietro i mobili, sotto il letto, trattamento dei pavimenti pregiati. Questi interventi mantengono lo standard nel tempo e prevengono il deterioramento percepito della qualità.",
    },
    {
      t: "Gestione biancheria",
      b: "Su richiesta, gestiamo l'intero ciclo della biancheria da letto e da bagno: raccolta, conteggio, consegna alla lavanderia convenzionata e redistribuzione nelle camere. Un processo in meno da coordinare per il tuo staff.",
    },
  ] as const;

  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Cosa facciamo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Cosa include il servizio di pulizia camere di Luna Service
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il nostro intervento sulle camere non è una passata veloce prima del check-in. È un protocollo strutturato che
        copre ogni superficie, ogni oggetto, ogni dettaglio che l&apos;ospite noterà — consapevolmente o no.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {blocks.map((b, idx) => (
          <article key={b.t} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
            <div className="relative h-[180px] w-full shrink-0 overflow-hidden mb-[14px]">
              <Image
                src={camereServiceImages[idx]}
                alt={b.t}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">{b.t}</h3>
            <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{b.b}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ChecklistSection() {
  const groups = [
    { title: "Area letto:", items: checklist.letto, img: "/images/pages/pulizie-hotel-roma-camere-checklist-01.jpg" },
    { title: "Area bagno:", items: checklist.bagno, img: "/images/pages/pulizie-hotel-roma-camere-checklist-02.jpg" },
    { title: "Superfici e arredi:", items: checklist.superfici, img: "/images/pages/pulizie-hotel-roma-camere-checklist-03.jpg" },
    { title: "Pavimenti:", items: checklist.pavimenti, img: "/images/pages/pulizie-hotel-roma-camere-checklist-04.jpg" },
    { title: "Check finale:", items: checklist.finale, img: "/images/pages/pulizie-hotel-roma-camere-checklist-05.jpg" },
  ] as const;

  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Checklist</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        La nostra checklist operativa per camera: ogni voce è una garanzia
      </h2>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.8)]">
        Ogni operatore di Luna Service lavora con una checklist specifica per la struttura cliente. Non è un documento
        generico: viene costruita sul tuo hotel, sui tuoi materiali, sulle tue procedure. Ecco le voci standard che
        ogni camera deve soddisfare prima di essere dichiarata pronta.
      </p>
      <div className="mt-[22px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {groups.map((group, idx) => (
          <article
            key={group.title}
            className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] overflow-hidden"
          >
            <div className="relative h-[200px] w-full">
              <Image src={group.img} alt={group.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[12px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.5)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Checklist</span>
              </div>
              <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.015em] text-[#fbf9f3]">{group.title}</h3>
              <ul className="mt-[12px] m-0 p-0 list-none space-y-[8px]">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-[8px] text-[15px] leading-[1.6] text-[rgba(251,249,243,0.82)]">
                  <span className="text-[#99cc33] mt-[1px]">✔</span>
                  <span>{item}</span>
                </li>
              ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function SupervisorSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Il supervisore</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Il supervisore: la figura che fa la differenza tra un buon servizio e un servizio eccellente
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          La differenza tra un&apos;impresa di pulizie qualsiasi e Luna Service non sta solo negli operatori. Sta nel
          supervisore.
        </p>
        <p className="m-0">
          Ogni hotel affidato a Luna Service ha un responsabile operativo dedicato. È lui che forma il team sulla tua
          struttura prima dell&apos;inizio del servizio. È lui che effettua i controlli qualità a campione durante gli
          interventi. È lui che riceve le tue comunicazioni e le trasforma in istruzioni operative per il team. È lui
          il tuo unico interlocutore — non un centralino, non un numero generico.
        </p>
        <p className="m-0">
          Quando qualcosa non va, lo saprai entro minuti, non entro giorni. E verrà corretto prima che l&apos;ospite entri
          in camera.
        </p>
      </div>
    </section>
  );
}

function StandardsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Standard e conformità</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Pulizia alberghiera e normative sanitarie: cosa deve sapere ogni albergatore
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Le strutture ricettive italiane sono soggette a controlli periodici da parte delle ASL locali in materia di
          igiene e sanità ambientale. A Roma, con l&apos;alto volume di ispezioni legate al turismo internazionale,
          mantenere standard documentati non è un&apos;opzione: è una necessità operativa.
        </p>
        <p className="m-0">
          Luna Service lavora con protocolli di pulizia e igienizzazione documentati, prodotti professionali certificati
          e conformi alle normative vigenti, e una reportistica che può essere messa a disposizione della direzione in
          qualsiasi momento.
        </p>
        <p className="m-0">
          Non ti chiediamo di fidarti a occhio. Ti diamo la documentazione per verificare.
        </p>
      </div>
      <div className="mt-[22px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        <article className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
          <div className="relative h-[180px] w-full shrink-0 overflow-hidden mb-[14px]">
            <Image
              src="/images/pages/pulizie-hotel-roma-camere-standard-01.jpg"
              alt="Prodotti professionali per pulizia camere hotel"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">Prodotti professionali e sicuri</h3>
          <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">
            Utilizziamo esclusivamente prodotti professionali certificati, con schede di sicurezza disponibili. Nessun
            prodotto aggressivo su materiali pregiati: prima del primo intervento, il supervisore verifica i materiali
            presenti in struttura e seleziona i prodotti appropriati per ogni superficie.
          </p>
        </article>
        <article className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
          <div className="relative h-[180px] w-full shrink-0 overflow-hidden mb-[14px]">
            <Image
              src="/images/pages/pulizie-hotel-roma-camere-standard-02.jpg"
              alt="Attrezzature professionali per pulizie alberghiere"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">Attrezzature professionali</h3>
          <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">
            Aspiratrici ad alta efficienza filtrante, macchinari per il lavaggio pavimenti, attrezzatura specifica per
            bagni e superfici delicate: il nostro team arriva in struttura con tutto il necessario. Nessun costo
            aggiuntivo per attrezzature.
          </p>
        </article>
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
        Richiedi il preventivo per la pulizia delle camere del tuo hotel
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci quante camere ha la tua struttura e come le gestisci oggi. Ti risponderemo con una proposta concreta
        entro poche ore.
      </p>
      <LeadFormShell
        source="pulizie-hotel-roma-camere"
        className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
          <InputField label="Nome della struttura*" placeholder="Hotel [Nome]" name="nome_struttura" required />
          <SelectField
            label="Numero di camere*"
            name="numero_camere"
            required
            options={["Seleziona…", "Fino a 20", "Da 21 a 50", "Da 51 a 100", "Oltre 100"]}
          />
          <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." name="zona" required />
          <SelectField
            label="Tipo di servizio*"
            name="tipo_servizio"
            required
            options={["Seleziona…", "Continuativo", "Straordinario", "Voglio un consiglio"]}
          />
          <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          <InputField label="Email*" placeholder="nome@hotel.it" name="email" type="email" required autoComplete="email" />
          <div className="md:col-span-2">
            <TextareaField label="Note" placeholder="Dettagli utili sulla tua struttura..." name="note" />
          </div>
        </div>
        <div className="mt-[16px]">
          <FormSubmitPrimaryButton>Richiedi il preventivo gratuito</FormSubmitPrimaryButton>
        </div>
        <a href="https://wa.me/" className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Vuoi una risposta immediata? Scrivici su WhatsApp →
        </a>
      </LeadFormShell>
      <div className="mt-[18px] text-[14px] text-[#1a1f0d]">
        <Link href="/pulizie-hotel-roma/" className="underline">
          /pulizie-hotel-roma/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-hotel-roma/bagni/" className="underline">
          /pulizie-hotel-roma/bagni/
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
          Domande frequenti sulla pulizia camere hotel a Roma
        </h2>
      </div>
      <div className="mx-auto flex max-w-[920px] flex-col gap-[12px]">
        {faqs.map((f, idx) => (
          <FaqItem key={f.q} question={f.q} answer={f.a} isOpen={open === idx} onToggle={() => setOpen(open === idx ? -1 : idx)} />
        ))}
      </div>
    </section>
  );
}

export function CamereHotelRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Hotel Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizie Camere Hotel Roma</li>
        </ol>
      </nav>
      <HeroCamere />
      <ProblemSection />
      <ServicesIncludedSection />
      <ChecklistSection />
      <SupervisorSection />
      <StandardsSection />
      <CompactFormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
