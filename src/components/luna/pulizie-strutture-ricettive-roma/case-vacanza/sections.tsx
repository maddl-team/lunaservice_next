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
  "Interventi tra check-out e check-in anche stesso giorno",
  "Gestione autonoma anche da remoto",
  "Report fotografico post intervento su richiesta",
  "Segnalazione danni e oggetti dimenticati",
] as const;

const serviceItems = [
  {
    title: "Pulizia completa tra check-out e check-in",
    body: "È il cuore del servizio. Dopo ogni check-out, l'appartamento riceve una pulizia completa prima dell'arrivo del prossimo ospite: cambio integrale della biancheria da letto e da bagno, pulizia e igienizzazione completa di tutti i bagni, pulizia della cucina — piano cottura, forno, frigorifero esterno, lavello, superfici — spolveratura e pulizia di tutte le superfici, aspirazione e lavaggio dei pavimenti in ogni stanza, pulizia di specchi e vetri interni, svuotamento di tutti i cestini con sostituzione dei sacchetti, verifica e ripristino degli amenity, controllo generale dello stato dell'appartamento. Ogni voce è su checklist specifica per la tua casa vacanza: costruita insieme a te durante il sopralluogo iniziale, aggiornata ogni volta che le tue esigenze cambiano.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-case-vacanza-servizio-01.jpg",
  },
  {
    title: "Gestione autonoma degli accessi",
    body: "Non devi essere presente. Non devi mandare nessuno ad aprire. Luna Service gestisce gli accessi alla struttura con le modalità concordate: cassetta di sicurezza con codice, chiavi digitali, portineria, vicino di fiducia. Il processo viene definito una volta sola durante l'onboarding e poi funziona in autonomia.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-case-vacanza-servizio-02.jpg",
  },
  {
    title: "Report fotografico post intervento",
    body: "Al termine di ogni intervento, il nostro operatore documenta fotograficamente lo stato dell'appartamento — camere, bagni, cucina, aree comuni — e invia le foto via WhatsApp o email entro pochi minuti. Puoi verificare la qualità del lavoro da qualsiasi parte del mondo, in tempo reale. Il report fotografico è anche una protezione: in caso di contestazione da parte di un ospite sulla piattaforma, hai la documentazione fotografica dello stato dell'appartamento al momento del suo arrivo.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-case-vacanza-servizio-03.jpg",
  },
  {
    title: "Segnalazione danni e oggetti dimenticati",
    body: "Durante ogni intervento, il nostro operatore verifica lo stato dell'appartamento e segnala immediatamente al gestore qualsiasi anomalia: danni agli arredi o alle superfici, guasti agli elettrodomestici, oggetti dimenticati dagli ospiti. Una segnalazione tempestiva ti permette di gestire la situazione prima che il prossimo ospite arrivi — e prima che diventi una recensione negativa.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-case-vacanza-servizio-04.jpg",
  },
  {
    title: "Gestione biancheria",
    body: "Su richiesta gestiamo l'intero ciclo della biancheria: raccolta dopo ogni check-out, consegna alla lavanderia convenzionata, ritiro e redistribuzione nell'appartamento prima del check-in successivo. Un servizio particolarmente utile per chi gestisce più appartamenti o per chi non vuole occuparsi della logistica della biancheria.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-case-vacanza-servizio-05.jpg",
  },
  {
    title: "Rifornimento consumabili",
    body: "Su richiesta e con approvvigionamento concordato, il nostro operatore può occuparsi del rifornimento dei consumabili standard degli affitti brevi: carta igienica, sapone, shampoo, caffè, zucchero, sacchetti della spazzatura. Un dettaglio che fa differenza nell'esperienza dell'ospite — e che toglierà un'incombenza dalla tua lista.",
    image: "/images/pages/pulizie-strutture-ricettive-roma-case-vacanza-servizio-06.jpg",
  },
] as const;

const remoteSteps = [
  {
    title: "Step 1 — Ricezione informazioni check-in/check-out",
    body: "Tu ci comunichi — o configuri un sistema automatico per farlo — gli orari di check-out e check-in. Può essere un messaggio WhatsApp, un'email, un'integrazione con il tuo gestionale di prenotazioni. Lavoriamo con il sistema che usi già tu.",
  },
  {
    title: "Step 2 — Pianificazione intervento",
    body: "Il supervisore pianifica l'intervento nella finestra disponibile tra check-out e check-in, organizza il team e conferma l'orario previsto.",
  },
  {
    title: "Step 3 — Accesso e intervento",
    body: "L'operatore accede all'appartamento con le modalità concordate, esegue la pulizia completa seguendo la checklist specifica per la tua casa vacanza.",
  },
  {
    title: "Step 4 — Report e notifica",
    body: "A intervento completato, ricevi il report fotografico via WhatsApp o email. Se ci sono anomalie da segnalare — danni, guasti, oggetti dimenticati — ti vengono comunicati nello stesso messaggio.",
  },
  {
    title: "Step 5 — Appartamento pronto",
    body: "Il prossimo ospite trova l'appartamento pulito, in ordine e pronto. Tu non hai dovuto fare nulla.",
  },
] as const;

const faqItems = [
  {
    q: "Quanto costa la pulizia di una casa vacanza a Roma?",
    a: "Il costo dipende dalla dimensione dell'appartamento, dal numero di bagni, dalla frequenza dei cambi e dai servizi inclusi — come la gestione della biancheria, il report fotografico o il rifornimento dei consumabili. Luna Service non applica tariffe standard: ogni preventivo è costruito sull'unità specifica. Il preventivo è gratuito e viene formulato entro poche ore dal primo contatto.",
  },
  {
    q: "Chi si occupa di aprire l'appartamento se non sono presente?",
    a: "L'accesso viene gestito con le modalità concordate durante l'onboarding: cassetta di sicurezza con codice, chiavi digitali, portineria o altra soluzione adatta alla tua struttura. Una volta definita la modalità di accesso, il processo funziona in autonomia senza che tu debba intervenire.",
  },
  {
    q: "Riuscite a fare le pulizie tra un check-out e un check-in dello stesso giorno?",
    a: "Sì. È il tipo di intervento più frequente nel nostro servizio per affitti brevi. Per gestire al meglio le finestre strette è importante comunicarci gli orari di check-out e check-in con almeno 24 ore di anticipo. Per le finestre molto brevi — meno di due ore — è necessario un preavviso adeguato per organizzare la squadra.",
  },
  {
    q: "Come funziona il report fotografico e a cosa serve?",
    a: "Al termine di ogni intervento il nostro operatore fotografa tutte le aree dell'appartamento e invia le foto via WhatsApp o email entro pochi minuti. Il report ti permette di verificare la qualità del lavoro da remoto e ti fornisce documentazione fotografica dello stato dell'appartamento al momento del check-in dell'ospite — utile in caso di contestazioni su piattaforma.",
  },
  {
    q: "Gestite anche la biancheria?",
    a: "Sì, su richiesta. Gestiamo il ritiro della biancheria sporca dopo ogni check-out, la consegna alla lavanderia convenzionata e la redistribuzione nell'appartamento prima del check-in successivo. Per chi gestisce più unità è un servizio che elimina una complessità logistica significativa.",
  },
  {
    q: "Lavorate anche con property manager che gestiscono più appartamenti?",
    a: "Sì. Luna Service lavora con property manager che gestiscono da due a oltre venti unità a Roma. Per chi gestisce volumi significativi proponiamo accordi di servizio dedicati con un unico punto di contatto per tutte le unità e tariffe proporzionate ai volumi. Contattaci direttamente via WhatsApp per discutere le tue esigenze specifiche.",
  },
  {
    q: "Cosa fate se trovate un danno o un oggetto dimenticato durante le pulizie?",
    a: "Segnaliamo immediatamente al gestore qualsiasi anomalia riscontrata durante l'intervento: danni agli arredi, guasti agli elettrodomestici, oggetti dimenticati dagli ospiti. La segnalazione avviene via WhatsApp con foto dell'anomalia, nel rispetto dei tempi necessari per intervenire prima dell'arrivo del prossimo ospite.",
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
                  Pulizie per case vacanza e affitti brevi a Roma: il servizio che trasforma i check-out in cinque stelle
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Gestisci un appartamento su Airbnb, Booking o Vrbo a Roma? Luna Service si occupa delle pulizie tra un
                  ospite e l&apos;altro — con interventi precisi, report fotografico incluso su richiesta e gestione
                  completamente autonoma anche se non sei fisicamente presente in città.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per la tua casa vacanza</PrimaryCtaButton>
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
              src="/images/pages/pulizie-strutture-ricettive-roma-case-vacanza-hero.jpg"
              alt="Pulizie case vacanza Roma"
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
        Roma è una delle città con la più alta densità di affitti brevi in Europa. E la pulizia è il fattore che divide chi
        guadagna da chi perde.
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Il mercato degli affitti brevi a Roma è esploso negli ultimi anni. Decine di migliaia di appartamenti sono oggi
          presenti su Airbnb, Booking e Vrbo — dal monolocale al Prati al trilocale ai Parioli, dalla stanza singola al
          Trastevere all&apos;intero piano nobile nel centro storico.
        </p>
        <p className="m-0">
          In questo mercato affollato, la differenza tra una struttura che gira al 90% di occupazione e una che fatica ad
          arrivare al 60% non sta quasi mai nella posizione o nel prezzo. Sta nelle recensioni. E nelle recensioni, la
          pulizia è la variabile con il maggiore impatto sul rating complessivo.
        </p>
        <p className="m-0">
          Su Airbnb la pulizia è una categoria di valutazione separata. Gli ospiti la votano esplicitamente, con un
          punteggio dedicato. Quel punteggio influenza l&apos;algoritmo di posizionamento della piattaforma: una casa vacanza
          con rating pulizia alto appare prima nei risultati di ricerca degli ospiti. Non è un dettaglio operativo: è un
          fattore economico diretto.
        </p>
        <p className="m-0">
          Il problema è che gestire le pulizie di un affitto breve a Roma in modo professionale e continuativo è complicato.
          I turni sono imprevedibili, i check-out e i check-in spesso si sovrappongono nello stesso giorno, il tempo tra una
          partenza e un arrivo è a volte di poche ore. E se non sei fisicamente presente in città — o semplicemente non vuoi
          occupartene tu — il problema diventa ancora più complesso.
        </p>
        <p className="m-0">
          Luna Service è la soluzione operativa a questo problema. Non una soluzione improvvisata: un servizio strutturato,
          affidabile e scalabile — che funziona con un appartamento come con dieci.
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
        Il servizio di pulizia Luna Service per case vacanza e affitti brevi a Roma
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il nostro servizio per case vacanza è costruito sulla logica del mercato degli affitti brevi: flessibilità sui
        tempi, precisione sugli standard, autonomia operativa. Ecco cosa gestiamo.
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

function RemoteSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Gestione da remoto</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Non sei a Roma? Non importa. Funziona lo stesso.
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[14px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Uno dei profili più comuni tra i nostri clienti nel segmento case vacanza è il gestore che non vive a Roma — o
          che semplicemente non vuole essere operativamente coinvolto in ogni cambio ospite.
        </p>
        <p className="m-0">
          Abbiamo costruito il nostro servizio per funzionare in completa autonomia. Una volta definiti insieme il
          protocollo operativo, le modalità di accesso e il piano di comunicazione, il sistema gira senza che tu debba
          intervenire su niente.
        </p>
        <p className="m-0">Ecco come funziona in pratica:</p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {remoteSteps.map((item, idx) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[20px] py-[20px]">
            <div className="mb-[8px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
              <span>Step {idx + 1}</span>
              <span>Remoto</span>
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
      <SectionBadge>Piattaforme e algoritmi</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Airbnb, Booking, Vrbo: come la pulizia professionale migliora il tuo posizionamento
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Le principali piattaforme di affitto breve usano il rating degli ospiti come criterio di posizionamento nei
          risultati di ricerca. Una struttura con recensioni eccellenti appare prima, riceve più visualizzazioni, converte
          più prenotazioni.
        </p>
        <p className="m-0">
          La pulizia ha un peso specifico elevato in questo meccanismo per una ragione semplice: è la voce su cui gli ospiti
          sono più severi e più espliciti. Un ospite tollera una connessione Wi-Fi lenta o un letto non perfettamente
          comodo. Non tollera una pulizia insufficiente — e lo scrive nella recensione con un dettaglio che altri potenziali
          ospiti leggeranno.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        <article className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
          <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">Su Airbnb</h3>
          <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">
            La pulizia è una delle sei categorie di valutazione esplicite di Airbnb. Il punteggio pulizia influenza il
            posizionamento nei risultati di ricerca e l'accesso al programma Superhost — che richiede un rating complessivo
            minimo di 4.8 su 5. Un rating pulizia alto è uno dei requisiti più difficili da mantenere senza un servizio
            professionale strutturato.
          </p>
        </article>
        <article className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
          <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">Su Booking.com</h3>
          <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">
            Su Booking la pulizia appare tra le prime voci nel profilo della struttura con il punteggio medio specifico. Gli
            ospiti che filtrano per pulizia — un'opzione disponibile nella ricerca — non vedranno la tua struttura se il
            punteggio è sotto la soglia. Un punteggio pulizia alto su Booking è un vantaggio competitivo diretto nelle
            ricerche filtrate.
          </p>
        </article>
        <article className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
          <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">Su Google</h3>
          <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">
            Le recensioni Google includono spesso riferimenti espliciti alla pulizia — con foto allegate. Una recensione
            negativa con foto rimane pubblica e indicizzata per anni. Un servizio di pulizia professionale non elimina il
            rischio di recensioni negative, ma lo riduce drasticamente eliminando la causa principale.
          </p>
        </article>
      </div>
    </section>
  );
}

function PropertyManagerSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Per chi gestisce più appartamenti</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Gestisci più case vacanza a Roma? Luna Service scala con te
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Il mercato degli affitti brevi a Roma ha generato una categoria di gestori professionali: property manager che
          amministrano cinque, dieci, venti appartamenti o più, spesso per conto di proprietari terzi.
        </p>
        <p className="m-0">
          Luna Service è il partner operativo ideale per questa figura. Il nostro servizio scala in modo lineare: un
          appartamento o venti, la struttura operativa è la stessa — supervisore dedicato, checklist personalizzate per ogni
          unità, report fotografico su ogni intervento, gestione autonoma degli accessi.
        </p>
        <p className="m-0">
          Per i property manager con volumi significativi proponiamo accordi di servizio dedicati con tariffe proporzionate
          ai volumi e un unico punto di contatto per la gestione di tutte le unità. Una fattura, un interlocutore, zero
          complessità operativa.
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
        Richiedi il preventivo per le pulizie della tua casa vacanza a Roma
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci quante unità gestisci e come funzionano i tuoi check-in. Ti risponderemo con una proposta personalizzata entro
        poche ore.
      </p>
      <LeadFormShell
        source="case-vacanza"
        className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
          <SelectField
            label="Numero di appartamenti / unità gestite*"
            name="numero_unita"
            required
            options={["Seleziona…", "1 unità", "2–3 unità", "4–10 unità", "Oltre 10 unità"]}
          />
          <SelectField
            label="Tipologia dell'immobile*"
            name="tipologia_immobile"
            required
            options={[
              "Seleziona…",
              "Monolocale / Studio",
              "Bilocale",
              "Trilocale o più",
              "Villa / Casa indipendente",
              "Misto — gestisco tipologie diverse",
            ]}
          />
          <SelectField
            label="Frequenza media dei cambi"
            name="frequenza_cambi"
            options={[
              "Seleziona…",
              "Più volte a settimana",
              "Una volta a settimana",
              "Variabile — dipende dalle prenotazioni",
              "Alta stagione intensa, bassa stagione ridotta",
            ]}
          />
          <div className="md:col-span-2">
            <span className="mb-[8px] block text-[13px] font-medium text-[#161714]">Piattaforme usate</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceCheckbox name="piattaforma" value="Airbnb" label="Airbnb" />
              <ChoiceCheckbox name="piattaforma" value="Booking.com" label="Booking.com" />
              <ChoiceCheckbox name="piattaforma" value="Vrbo / HomeAway" label="Vrbo / HomeAway" />
              <ChoiceCheckbox name="piattaforma" value="Prenotazioni dirette" label="Prenotazioni dirette" />
              <ChoiceCheckbox name="piattaforma" value="Altro" label="Altro" />
            </div>
          </div>
          <SelectField
            label="Sei presente durante gli interventi?*"
            name="presenza"
            required
            options={["Seleziona…", "Sì, sono sempre disponibile in loco", "A volte", "No, gestisco completamente da remoto"]}
          />
          <SelectField
            label="Vuoi il report fotografico post intervento?"
            name="report_fotografico"
            options={["Seleziona…", "Sì, per ogni intervento", "Solo occasionalmente", "Non so ancora"]}
          />
          <InputField label="Zona / quartiere di Roma*" placeholder="Es. Prati, Centro storico, EUR..." name="zona" required />
          <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          <InputField label="Email*" placeholder="nome@host.it" name="email" type="email" required autoComplete="email" />
          <div className="md:col-span-2">
            <TextareaField
              label="Note"
              placeholder="Es. numero di bagni, modalità di accesso preferita, esigenze particolari, consumabili da gestire…"
              name="note"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <FormSubmitPrimaryButton>Richiedi il preventivo gratuito</FormSubmitPrimaryButton>
        </div>
        <a href={whatsappHref} className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Gestisci più di 5 appartamenti? Scrivici direttamente su WhatsApp per una proposta su misura →
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
          Domande frequenti sulle pulizie per case vacanza e affitti brevi a Roma
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

export function PulizieCaseVacanzaRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <PageBreadcrumb items={pageBreadcrumbs["/pulizie-strutture-ricettive-roma/case-vacanza/"]} />
      <HeroSection />
      <ContextSection />
      <ServicesSection />
      <RemoteSection />
      <PlatformsSection />
      <PropertyManagerSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
