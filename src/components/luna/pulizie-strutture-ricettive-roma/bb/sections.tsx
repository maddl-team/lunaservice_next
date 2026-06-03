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
  "Interventi calibrati sui tuoi check-in e check-out",
  "Standard alberghieri anche per B&B piccoli",
  "Cambio biancheria gestito su richiesta",
  "Report fotografico disponibile dopo ogni intervento",
] as const;

const serviceItems = [
  {
    title: "Pulizia e riassetto camera tra check-out e check-in",
    body: "È l'intervento principale del servizio. Dopo ogni check-out, la camera riceve una pulizia completa: cambio integrale della biancheria da letto, rifacimento letto con standard alberghiero, pulizia e igienizzazione completa del bagno con cambio asciugamani e tappetino, spolveratura di tutte le superfici, aspirazione e lavaggio dei pavimenti, svuotamento cestini, rabbocco degli amenity, verifica visiva finale. Ogni voce è su checklist: nulla viene lasciato alla memoria o alla discrezionalità dell'operatore.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-bb-servizio-01.jpg",
  },
  {
    title: "Pulizia delle aree comuni",
    body: "I B&B hanno quasi sempre spazi comuni: l'ingresso, il corridoio, le scale, il bagno condiviso se presente, la sala colazione. Questi spazi vengono usati da tutti gli ospiti e richiedono una pulizia quotidiana che mantenga lo standard visibile a chiunque entri. Luna Service gestisce la pulizia delle aree comuni con frequenza calibrata sul numero di ospiti presenti e sulla struttura dello spazio.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-bb-servizio-02.jpg",
  },
  {
    title: "Gestione biancheria",
    body: "Su richiesta, gestiamo l'intero ciclo della biancheria da letto e da bagno: raccolta della biancheria sporca dopo ogni check-out, consegna alla lavanderia convenzionata, ritiro e redistribuzione nelle camere prima del check-in successivo. Un processo che richiede organizzazione e tempi precisi — e che Luna Service gestisce in autonomia, senza che tu debba coordinare nulla.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-bb-servizio-03.jpg",
  },
  {
    title: "Report fotografico post intervento",
    body: "Per i gestori che non sono sempre presenti in struttura, offriamo un report fotografico al termine di ogni intervento: foto delle camere, del bagno, delle aree comuni, inviate via WhatsApp o email entro pochi minuti dal termine del lavoro. Una documentazione che permette di verificare la qualità da remoto e che può essere utile in caso di contestazioni su piattaforma.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-bb-servizio-04.jpg",
  },
  {
    title: "Sanificazione periodica",
    body: "A cadenza mensile o trimestrale, o in seguito a situazioni specifiche, offriamo interventi di sanificazione professionale con ozono o nebulizzazione. Particolarmente utile per i B&B con alta rotazione di ospiti internazionali o per le camere con tessuti e materassi che accumulano allergeni nel tempo.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-bb-servizio-05.jpg",
    linkLabel: "→ Scopri il servizio di sanificazione",
    href: "/pulizie-hotel-roma/sanificazione/",
  },
] as const;

const faqItems = [
  {
    q: "Quanto costa il servizio di pulizia per un B&B a Roma?",
    a: "Il costo dipende dal numero di camere, dalla presenza di bagni privati o condivisi, dalla frequenza dei cambi e dai servizi inclusi — come la gestione della biancheria o il report fotografico. Luna Service non applica tariffe standard: ogni preventivo è costruito sul B&B specifico dopo un primo contatto. Il preventivo è gratuito e senza impegno.",
  },
  {
    q: "Riuscite a intervenire tra un check-out e il check-in dello stesso giorno?",
    a: "Sì. È il tipo di intervento più comune nel nostro servizio per B&B. Per gestirlo al meglio è importante che ci vengano comunicati gli orari di check-out e check-in con almeno 24 ore di anticipo. Per le finestre molto strette — meno di due ore — è necessario comunicarcelo in anticipo per organizzare la copertura adeguata.",
  },
  {
    q: "Gestite anche la biancheria da letto e da bagno?",
    a: "Sì, su richiesta. Gestiamo il ritiro della biancheria sporca dopo ogni check-out, la consegna alla lavanderia convenzionata e la redistribuzione nelle camere prima del check-in successivo. È un servizio aggiuntivo che può essere integrato nel contratto o attivato su base occasionale.",
  },
  {
    q: "Lavorate anche con B&B piccoli, con una o due camere soltanto?",
    a: "Sì. Luna Service lavora con strutture di ogni dimensione. Per i B&B più piccoli proponiamo soluzioni calibrate sui volumi reali, senza strutture di costo sproporzionate. Anche un B&B con una sola camera merita un servizio professionale — e spesso è quello in cui la qualità della pulizia ha l'impatto maggiore sul rating.",
  },
  {
    q: "Come funziona il report fotografico?",
    a: "Al termine di ogni intervento, l'operatore fotografa le camere e le aree comuni pulite e invia le foto al gestore via WhatsApp o email entro pochi minuti. Le foto documentano lo stato della struttura a intervento completato e possono essere usate sia per il controllo qualità da remoto che in caso di contestazioni su piattaforma da parte degli ospiti.",
  },
  {
    q: "Cosa succede se il vostro operatore non è disponibile?",
    a: "La sostituzione è interamente a carico di Luna Service. Il supervisore organizza la copertura internamente: tu non devi fare nulla, non devi cercare nessuno, non devi formare nessuno. Il servizio viene erogato come concordato, indipendentemente dalla disponibilità del singolo operatore.",
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
                  Pulizie professionali per B&B a Roma: standard da struttura ricettiva, flessibilità da servizio su misura
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Gestire un bed and breakfast a Roma significa offrire un&apos;esperienza personale e autentica — ma con gli
                  standard igienici di una struttura professionale. Luna Service gestisce le pulizie del tuo B&B con
                  interventi precisi tra un ospite e l&apos;altro, cambio biancheria incluso su richiesta e un supervisore che
                  conosce la tua struttura.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per il tuo B&B</PrimaryCtaButton>
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
              src="/images/pages/pulizie-strutture-ricettive-roma-bb-hero.jpg"
              alt="Pulizie professionali B&B Roma"
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
        Roma ha migliaia di B&B. Gli ospiti li scelgono per l&apos;esperienza. Li abbandonano per la pulizia.
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Il bed and breakfast è la formula ricettiva che meglio incarna l&apos;ospitalità romana: familiare, autentica,
          radicata nel tessuto della città. Gli ospiti scelgono un B&B non perché non possano permettersi un hotel, ma
          perché vogliono qualcosa di diverso — un contatto più diretto, un&apos;atmosfera più vera, una colazione che non sia
          un buffet industriale.
        </p>
        <p className="m-0">
          Ma le recensioni non perdonano la pulizia nemmeno quando tutto il resto è perfetto. Una camera con il bagno non
          completamente pulito, un lenzuolo con una piega sospetta, un odore di chiuso che non se n&apos;è andato: bastano
          questi dettagli per trasformare cinque stelle in tre — e tre stelle su Airbnb o Booking possono costare settimane
          di prenotazioni.
        </p>
        <p className="m-0">
          Il problema specifico dei B&B è la scala: non hanno il personale di un hotel, non hanno un reparto housekeeping,
          spesso non hanno nemmeno uno spazio dedicato al deposito della biancheria pulita. Hanno il gestore — che è anche
          receptionist, concierge, responsabile della colazione e, spesso, addetto alle pulizie.
        </p>
        <p className="m-0">
          Luna Service risolve esattamente questo collo di bottiglia. Gestiamo le pulizie del tuo B&B come se fossimo il
          tuo reparto housekeeping — senza che tu debba assumere nessuno, formare nessuno o sostituire nessuno.
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
        Il servizio di pulizia Luna Service per B&B a Roma: cosa è incluso
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il nostro intervento standard per B&B copre tutto ciò che serve per consegnare ogni camera pronta al prossimo ospite
        — con lo standard che trasforma un soggiorno in una recensione a cinque stelle.
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
              {"linkLabel" in item && item.linkLabel ? (
                <Link href={item.href} className="mt-[14px] inline-flex text-[14px] text-[#161714] underline">
                  {item.linkLabel}
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContinuitySection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Il problema della continuità</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        La persona di fiducia che si ammala. Il week-end pieno quando lei non è disponibile. Il problema di tutti i B&B.
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[14px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          È lo scenario che ogni gestore di B&B conosce: hai trovato qualcuno di cui ti fidi, che lavora bene, che conosce
          la struttura. E poi si ammala. Oppure va in vacanza. Oppure smette. Oppure semplicemente non è disponibile proprio
          il sabato di Pasqua, quando hai tutte le camere occupate e tre check-out alle undici.
        </p>
        <p className="m-0">
          Le soluzioni improvvisate — la cugina di una vicina, un&apos;agenzia interinale chiamata all&apos;ultimo momento, fare
          le pulizie da soli tra una colazione e l&apos;altra — funzionano finché non funzionano più.
        </p>
        <p className="m-0">
          Luna Service non è &quot;la signora delle pulizie&quot;. È un&apos;impresa strutturata con un piano di backup organizzato:
          se l&apos;operatore assegnato alla tua struttura non è disponibile, la sostituzione è gestita internamente, senza che
          tu debba sapere nulla e senza che il servizio venga interrotto.
        </p>
        <p className="m-0">
          Non devi chiamare nessuno. Non devi trovare nessuno. Non devi formare nessuno. Il tuo B&B viene pulito come
          concordato, ogni volta.
        </p>
      </div>
    </SectionShell>
  );
}

function RatingSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Il rating e la pulizia</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Come la pulizia influenza il rating del tuo B&B su Airbnb e Booking
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Su Airbnb la pulizia è una delle sei categorie di valutazione esplicite — gli ospiti votano separatamente la
          pulizia da tutto il resto. Su Booking.com la voce &quot;pulizia&quot; è tra le prime che compaiono nel profilo della
          struttura. Su Google, una recensione con foto di un bagno non pulito rimane pubblica per sempre.
        </p>
        <p className="m-0">
          Il rating sulla pulizia è uno degli indicatori che le piattaforme usano per posizionare le strutture nei risultati
          di ricerca: una struttura con un rating pulizia alto appare prima nelle ricerche degli ospiti. Non è solo una
          questione di orgoglio: è una questione di visibilità e di fatturato.
        </p>
        <p className="m-0">
          Luna Service lavora con gestori di B&B a Roma che hanno visto il loro rating sulla pulizia migliorare in modo
          misurabile dopo l&apos;inizio del servizio. Non è una promessa generica: è la conseguenza diretta di un intervento
          professionale, strutturato e verificato su checklist, applicato in modo costante a ogni cambio ospite.
        </p>
      </div>
      <article className="mt-[24px] rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
        <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">Blocco dati</h3>
        <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">
          La pulizia è la categoria con il maggior peso nella valutazione complessiva su Airbnb per le strutture nella
          fascia entry-level e mid-range. Un miglioramento di un punto nel rating pulizia si traduce mediamente in una
          maggiore visibilità nei risultati di ricerca della piattaforma e in un tasso di conversione più alto sulle
          visualizzazioni del profilo.
        </p>
      </article>
    </section>
  );
}

function RemoteSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Gestori che non vivono in struttura</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Gestisci il tuo B&B da remoto? Luna Service lo gestisce operativamente per te
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Non tutti i gestori di B&B vivono nella stessa città della struttura. Non tutti sono sempre disponibili. Non tutti
          vogliono essere presenti a ogni cambio ospite — e non dovrebbero doverlo essere.
        </p>
        <p className="m-0">
          Luna Service lavora con molti gestori di strutture ricettive a Roma che vivono altrove o che semplicemente non
          vogliono dipendere dalla propria presenza fisica per far funzionare il servizio. Il nostro modello operativo è
          costruito per funzionare in autonomia: il supervisore riceve le informazioni sui check-in e check-out, organizza
          gli interventi nelle finestre disponibili, accede alla struttura con le modalità concordate — cassetta di
          sicurezza, chiavi digitali, portineria — esegue il lavoro seguendo la checklist specifica per la struttura, invia
          il report fotografico al gestore a intervento completato e segnala eventuali anomalie — danni, guasti, oggetti
          dimenticati — direttamente via WhatsApp.
        </p>
        <p className="m-0">
          Tu ricevi la notifica che la struttura è pronta. L&apos;ospite trova quello che si aspetta. La recensione riflette il
          lavoro fatto.
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
        Richiedi il preventivo per le pulizie del tuo B&B a Roma
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci quante camere ha il tuo B&B e come funzionano i tuoi check-in. Ti risponderemo con una proposta personalizzata
        entro poche ore.
      </p>
      <LeadFormShell
        source="bb"
        className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
          <InputField label="Nome del B&B" placeholder="B&B [Nome]" name="nome_bb" />
          <SelectField
            label="Numero di camere*"
            name="numero_camere"
            required
            options={["Seleziona…", "1–2 camere", "3–4 camere", "5–6 camere", "Oltre 6 camere"]}
          />
          <SelectField
            label="Bagno privato per camera o condiviso?"
            name="bagno"
            options={[
              "Seleziona…",
              "Ogni camera ha il bagno privato",
              "Alcune camere hanno bagno condiviso",
              "Bagno condiviso per tutte le camere",
            ]}
          />
          <div className="md:col-span-2">
            <span className="mb-[8px] block text-[13px] font-medium text-[#161714]">Aree comuni da pulire</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceCheckbox name="aree_comuni" value="Ingresso / corridoio" label="Ingresso / corridoio" />
              <ChoiceCheckbox name="aree_comuni" value="Sala colazione" label="Sala colazione" />
              <ChoiceCheckbox name="aree_comuni" value="Bagno comune" label="Bagno comune" />
              <ChoiceCheckbox name="aree_comuni" value="Altro" label="Altro" />
            </div>
          </div>
          <div className="md:col-span-2">
            <span className="mb-[8px] block text-[13px] font-medium text-[#161714]">Piattaforme usate</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceCheckbox name="piattaforma" value="Airbnb" label="Airbnb" />
              <ChoiceCheckbox name="piattaforma" value="Booking.com" label="Booking.com" />
              <ChoiceCheckbox name="piattaforma" value="Prenotazioni dirette" label="Prenotazioni dirette" />
              <ChoiceCheckbox name="piattaforma" value="Altro" label="Altro" />
            </div>
          </div>
          <SelectField
            label="Frequenza media dei cambi settimanali"
            name="frequenza_cambi"
            options={["Seleziona…", "1–3 cambi a settimana", "4–7 cambi a settimana", "Più di 7 cambi a settimana", "Variabile"]}
          />
          <SelectField
            label="Sei presente durante gli interventi?"
            name="presenza"
            options={["Seleziona…", "Sì, sono sempre in struttura", "A volte", "No, gestisco da remoto"]}
          />
          <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." name="zona" required />
          <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          <InputField label="Email*" placeholder="nome@bnb.it" name="email" type="email" required autoComplete="email" />
          <div className="md:col-span-2">
            <TextareaField label="Note" placeholder="Es. orari preferiti, modalità di accesso, esigenze particolari…" name="note" />
          </div>
        </div>
        <div className="mt-[16px]">
          <FormSubmitPrimaryButton>Richiedi il preventivo gratuito</FormSubmitPrimaryButton>
        </div>
        <a href={whatsappHref} className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Vuoi una risposta immediata? Scrivici su WhatsApp →
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
          Domande frequenti sulle pulizie per B&B a Roma
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

export function PulizieBbRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <PageBreadcrumb items={pageBreadcrumbs["/pulizie-strutture-ricettive-roma/bb/"]} />
      <HeroSection />
      <ContextSection />
      <ServicesSection />
      <ContinuitySection />
      <RatingSection />
      <RemoteSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
