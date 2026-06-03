"use client";

import { whatsappHref } from "@/components/luna/navigation";
import Image from "next/image";
import { PageBreadcrumb } from "@/components/luna/PageBreadcrumb";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import Link from "next/link";
import { useState } from "react";
import { FormSubmitPrimaryButton, LeadFormShell } from "@/components/luna/LeadFormShell";
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

const trustItems = [
  "Governanti con esperienza su strutture 4 e 5 stelle",
  "Formazione certificata in housekeeping management",
  "Coordinamento completo del personale di piano",
  "Reportistica e controllo qualità inclusi",
] as const;

const responsibilityItems = [
  {
    title: "Pianificazione e coordinamento del personale di piano",
    body: "La governante pianifica i turni delle cameriere ai piani in base all'occupazione prevista — disponibile dal sistema di property management dell'hotel — e alle caratteristiche specifiche di ogni turno: numero di camere in partenza, numero di stayover, camere fuori servizio, richieste VIP, eventi in corso. La pianificazione viene aggiornata in tempo reale durante il turno in risposta ai cambi di check-in e check-out.\n\nGestisce le assegnazioni individuali: ogni cameriera ai piani riceve il proprio piano di lavoro con le camere assegnate, le priorità e le istruzioni specifiche per i casi particolari. Monitora l'avanzamento del turno e redistribuisce il carico se necessario.",
    image: "/images/pages/pulizie-hotel-roma-governanti-servizio-01.jpg",
  },
  {
    title: "Controllo qualità e ispezione camere",
    body: "Il controllo qualità è la funzione più visibile — e più critica — della governante. Dopo ogni intervento di pulizia o riassetto, la governante effettua ispezioni a campione sulle camere per verificare che il lavoro sia al livello dello standard della struttura.\n\nL'ispezione non è una passata rapida: è un protocollo strutturato che verifica ogni area della camera secondo una checklist specifica per la categoria dell'hotel — dalla corretta disposizione degli amenity alla pulizia delle superfici difficili, dalla qualità del rifacimento letto all'assenza di odori, dalla funzionalità delle luci e degli impianti alla presentazione complessiva della stanza.\n\nLe non conformità vengono documentate, comunicate alla cameriera di riferimento per la correzione immediata e registrate nel sistema di reportistica per il monitoraggio dei trend qualitativi nel tempo.",
    image: "/images/pages/pulizie-hotel-roma-governanti-servizio-02.jpg",
  },
  {
    title: "Gestione del magazzino biancheria e forniture",
    body: "La governante supervisiona il magazzino del reparto housekeeping: il controllo delle scorte di biancheria, il monitoraggio dei cicli di lavanderia, la gestione degli ordini di reintegro dei prodotti di pulizia e degli amenity, la verifica dello stato delle attrezzature del reparto.\n\nUna gestione efficiente del magazzino evita due scenari ugualmente problematici: il blocco operativo per mancanza di biancheria pulita nei momenti di picco, e il costo inutile delle scorte eccessive che immobilizzano capitale. La governante mantiene questo equilibrio con pianificazione e controllo continuo.",
    image: "/images/pages/pulizie-hotel-roma-governanti-servizio-03.jpg",
  },
  {
    title: "Coordinamento con gli altri reparti",
    body: "L'housekeeping non lavora in isolamento: è in costante comunicazione con la reception per la gestione dei check-in e check-out, con la manutenzione per la segnalazione e il follow-up dei guasti nelle camere, con il food & beverage per la gestione dei minibar e del room service, con il direttore per la reportistica e la gestione delle escalation.\n\nLa governante è il punto di snodo di queste comunicazioni: filtra le informazioni rilevanti per il reparto, coordina le risposte operative e garantisce che l'housekeeping sia sempre allineato con lo stato operativo dell'hotel.",
    image: "/images/pages/pulizie-hotel-roma-governanti-servizio-04.jpg",
  },
  {
    title: "Formazione e sviluppo del personale di piano",
    body: "Il tasso di turnover nel personale di housekeeping è tra i più alti del settore alberghiero. Ogni nuovo inserimento richiede un periodo di formazione che ha un costo — in tempo, in supervisione, in errori durante il rodaggio — che dipende direttamente dalla qualità del processo formativo.\n\nLa governante di Luna Service gestisce il processo di onboarding del nuovo personale di piano: formazione sulle procedure della struttura, affiancamento operativo, valutazione delle competenze acquisite, autorizzazione all'autonomia operativa. Un processo strutturato che riduce i tempi di rodaggio e abbassa il rischio di non conformità qualitative durante la fase di inserimento.",
    image: "/images/pages/pulizie-hotel-roma-governanti-servizio-05.jpg",
  },
  {
    title: "Gestione delle richieste VIP e dei casi speciali",
    body: "Gli ospiti VIP, i soggiorni prolungati, le richieste particolari di allestimento camera, le situazioni sensibili che richiedono discrezione: la governante gestisce tutti i casi che esulano dalla routine operativa standard. È la figura che garantisce che l'ospite con esigenze specifiche trovi la propria camera esattamente come richiesto — senza che il direttore debba occuparsene personalmente.",
    image: "/images/pages/pulizie-hotel-roma-governanti-servizio-06.jpg",
  },
] as const;

const profileBlocks = [
  {
    title: "Esperienza su strutture di categoria",
    body: "Selezioniamo governanti con esperienza documentata su hotel di categoria medio-alta — 4 e 5 stelle, boutique hotel, strutture con elevati standard di servizio. L'esperienza su strutture di categoria è fondamentale: chi ha lavorato solo in strutture economy non ha necessariamente le competenze per gestire gli standard di un hotel di lusso, e viceversa. Verifichiamo il track record prima di ogni proposta.",
  },
  {
    title: "Formazione certificata",
    body: "Le nostre governanti hanno completato percorsi formativi specifici nell'housekeeping management: tecniche di controllo qualità, gestione del personale in ambienti operativi ad alta pressione, procedure di igiene e sanificazione alberghiera, uso dei sistemi di property management per la gestione del reparto. La formazione è documentata e verificabile.",
  },
  {
    title: "Competenze linguistiche",
    body: "In un hotel di Roma che accoglie ospiti internazionali, la governante interagisce spesso con ospiti stranieri — per raccogliere richieste, gestire reclami relativi alle camere, coordinarsi con il personale multilingue. Le nostre governanti hanno competenze linguistiche adeguate al livello della struttura cliente: inglese di base per tutte, inglese avanzato e ulteriori lingue per le strutture di categoria superiore.",
  },
  {
    title: "Capacità di gestione sotto pressione",
    body: "L'housekeeping di un hotel è un ambiente ad alta pressione: le scadenze sono rigide — la camera deve essere pronta prima del check-in — gli imprevisti sono costanti e il margine di errore è minimo. Le governanti di Luna Service sono selezionate anche sulla capacità di mantenere standard e lucidità operativa in condizioni di stress, che è la competenza meno quantificabile ma più importante del ruolo.",
  },
] as const;

const serviceModeBlocks = [
  {
    title: "Sostituzione temporanea",
    body: "La governante interna è in malattia, in maternità, in ferie o si è dimessa con effetto immediato. Sono le situazioni di emergenza che mettono sotto pressione il reparto housekeeping — e che richiedono una sostituzione rapida con una professionista già formata e operativa.\n\nLuna Service può fornire una governante sostituta con preavviso breve, briefata sulla struttura prima dell'avvio e in grado di operare autonomamente dal primo giorno. Non è un rimpiazzo temporaneo che \"tiene il posto\": è una professionista che gestisce il reparto al livello richiesto dalla struttura durante tutto il periodo di assenza.",
  },
  {
    title: "Supporto alla governante interna",
    body: "In alcuni hotel la governante interna è presente ma sovraccarica — soprattutto nelle strutture di medie dimensioni dove la figura copre anche mansioni operative oltre a quelle di coordinamento. Luna Service può fornire una governante in supporto per i periodi di alta occupazione, per i progetti speciali o per l'introduzione di nuove procedure operative nel reparto.",
  },
  {
    title: "Gestione in outsourcing",
    body: "Per gli hotel che preferiscono non gestire internamente la funzione di housekeeping management, Luna Service può assumere la responsabilità completa del coordinamento del reparto: dalla pianificazione dei turni al controllo qualità, dalla gestione del magazzino alla reportistica periodica per la direzione. Il direttore dell'hotel ha un unico punto di contatto — il nostro supervisore senior — e riceve un reparto housekeeping che funziona senza dover gestire i dettagli operativi.",
  },
] as const;

const faqItems = [
  {
    q: "Qual è la differenza tra una cameriera ai piani e una governante d'albergo?",
    a: "La cameriera ai piani esegue operativamente le pulizie e il riassetto delle camere assegnate. La governante coordina il reparto: pianifica i turni, assegna le camere al personale, supervisiona la qualità degli interventi, gestisce il magazzino e le forniture, coordina con gli altri reparti e risponde alla direzione per i risultati del reparto. È la differenza tra chi esegue il lavoro e chi organizza e garantisce che il lavoro venga fatto al livello richiesto.",
  },
  {
    q: "In quanto tempo potete fornire una governante sostituta in caso di assenza improvvisa?",
    a: "Per le sostituzioni urgenti siamo in grado di fornire una governante entro 24-48 ore dalla richiesta su Roma e provincia. Per le sostituzioni programmate — ferie, maternità, dimissioni con preavviso — organizziamo un passaggio di consegne strutturato tra la governante uscente e la nostra professionista, per garantire continuità operativa senza interruzioni per il reparto.",
  },
  {
    q: "La governante di Luna Service conosce i principali sistemi di property management?",
    a: "Le nostre governanti hanno familiarità con i principali PMS alberghieri utilizzati sul mercato italiano: Opera, Protel, Scrigno e altri sistemi diffusi. In caso di PMS specifico della struttura, organizziamo una sessione di formazione dedicata prima dell'avvio del servizio.",
  },
  {
    q: "È possibile richiedere una governante con competenze linguistiche specifiche?",
    a: "Sì. In fase di richiesta è possibile indicare le competenze linguistiche necessarie — inglese, francese, spagnolo, tedesco, arabo o altre lingue in base alla tipologia di ospiti della struttura. Selezioniamo la professionista più adatta al profilo specifico richiesto.",
  },
  {
    q: "Come avviene il trasferimento di conoscenze se la mia governante interna torna dopo un periodo di assenza?",
    a: "Al termine di ogni incarico di sostituzione, la governante di Luna Service prepara un documento di passaggio di consegne: stato del reparto, modifiche alle procedure adottate durante il periodo, segnalazioni in sospeso, aggiornamenti sul personale di piano, stato del magazzino. Questo documento garantisce che la governante interna riprenda il servizio con piena consapevolezza di tutto ciò che è accaduto durante la sua assenza.",
  },
  {
    q: "Gestite anche la formazione del personale di piano oltre al coordinamento operativo?",
    a: "Sì. Su richiesta, la governante di Luna Service può condurre sessioni di formazione per il personale di piano — sia per i nuovi inserimenti che per il personale già in servizio che necessita di aggiornamento sulle procedure o di miglioramento degli standard qualitativi. La formazione viene strutturata sugli standard specifici della struttura cliente.",
  },
] as const;

function HeroGovernanti() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[20px] md:pt-[28px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-[42px]">
                <h1 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.02] tracking-[-0.025em] text-[#fbf9f3]">
                  Servizio governanti d&apos;albergo a Roma: figure qualificate per il coordinamento dell&apos;housekeeping
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  La governante è la figura professionale che trasforma un reparto housekeeping in un sistema operativo
                  preciso. Luna Service fornisce agli hotel di Roma governanti d&apos;albergo con esperienza certificata su
                  strutture di categoria, capacità di coordinamento del personale di piano e standard di controllo
                  qualità documentati.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per il tuo hotel</PrimaryCtaButton>
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
              src="/images/pages/pulizie-hotel-roma-governanti-hero.jpg"
              alt="Servizio governanti hotel Roma"
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
            <div
              key={item}
              className="inline-flex items-center gap-[6px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[12px] py-[8px] text-[12px] md:text-[13px] text-[#161714]"
            >
              <span className="text-[#99cc33]">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Il ruolo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Chi è la governante d&apos;albergo e perché è la figura più critica dell&apos;housekeeping
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          In un hotel strutturato, la governante — o executive housekeeper nelle strutture di categoria superiore — non
          è semplicemente una supervisore delle pulizie. È il centro operativo di un reparto che, in un hotel da 100
          camere, gestisce ogni giorno decine di operatori, centinaia di interventi, migliaia di dettagli che concorrono
          all&apos;esperienza dell&apos;ospite.
        </p>
        <p className="m-0">
          La governante pianifica i turni del personale di piano in base all&apos;occupazione prevista, assegna le camere
          alle singole cameriere ai piani, coordina i tempi con la reception per i check-in anticipati e i late check-out,
          supervisiona la qualità degli interventi con ispezioni a campione, gestisce il magazzino del biancheria e dei
          prodotti di pulizia, forma il nuovo personale sugli standard della struttura, gestisce le richieste
          straordinarie degli ospiti VIP e risolve in tempo reale le criticità che emergono durante il turno.
        </p>
        <p className="m-0">
          È la persona che sa sempre quante camere sono pronte, quante sono in partenza, quante sono bloccate per
          problemi tecnici e quante possono essere vendute entro la prossima ora. È il punto di collegamento tra
          l&apos;housekeeping e la direzione dell&apos;hotel — e, spesso, tra l&apos;housekeeping e la soddisfazione
          dell&apos;ospite.
        </p>
        <p className="m-0">
          Quando questa figura manca, o quando è sostituita da una persona non adeguatamente formata, il reparto
          housekeeping perde efficienza e lo standard delle camere cala in modo misurabile. Luna Service fornisce agli
          hotel di Roma governanti d&apos;albergo professionali — in outsourcing o come supporto al personale interno —
          con l&apos;esperienza e le competenze che questo ruolo richiede.
        </p>
      </div>
    </section>
  );
}

function ResponsibilitiesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Cosa fa</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Le responsabilità della governante d&apos;albergo: cosa gestiamo per il tuo hotel
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il servizio di governante fornito da Luna Service copre l&apos;intero spettro delle responsabilità operative del
        ruolo. Ogni incarico viene definito sulla struttura specifica e calibrato sulle esigenze del direttore o del
        general manager cliente.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {responsibilityItems.map((item, idx) => (
          <article
            key={item.title}
            className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]"
          >
            <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Responsabilità</span>
              </div>
              <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em]">{item.title}</h3>
              <div className="mt-[12px] flex-1 space-y-[12px] text-[14px] leading-[1.55] text-[#3a3b36]">
                {item.body.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="m-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Il profilo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Il profilo professionale delle governanti di Luna Service
      </h2>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        Le governanti d&apos;albergo che Luna Service fornisce alle strutture romane non sono figure generiche con
        esperienza generica nel settore delle pulizie. Sono professioniste con un percorso specifico nell&apos;housekeeping
        management alberghiero.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {profileBlocks.map((block, idx) => (
          <article
            key={block.title}
            className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[20px] py-[20px]"
          >
            <div className="mb-[8px] font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
              {String(idx + 1).padStart(2, "0")}
            </div>
            <h3 className="m-0 font-serif text-[24px] leading-[1.08] tracking-[-0.015em] text-[#fbf9f3]">{block.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.6] text-[rgba(251,249,243,0.82)]">{block.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function ServiceModeSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Modalità di servizio</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Come strutturiamo il servizio: sostituzione, supporto e gestione in outsourcing
      </h2>
      <p className="m-0 mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Le necessità degli hotel in materia di governante sono diverse. Luna Service risponde a tutte con un servizio
        calibrato sulla situazione specifica.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {serviceModeBlocks.map((block) => (
          <article key={block.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{block.title}</h3>
            <div className="mt-[12px] space-y-[12px] text-[15px] leading-[1.65] text-[#3a3b36]">
              {block.body.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SupervisoreDifferenceSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Supervisore di zona</SectionBadge>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Per il presidio qualitativo su un&apos;intera area dell&apos;hotel — oltre al reparto housekeeping — Luna Service
        fornisce anche{" "}
        <Link href="/pulizie-hotel-roma/supervisore-zona/" className="underline text-[#161714]">
          supervisori di zona
        </Link>{" "}
        dedicati: monitoraggio in tempo reale, ispezioni sistematiche e reportistica per la direzione.
      </p>
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
        Richiedi il servizio di governante per il tuo hotel a Roma
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci la tua situazione: sostituzione urgente, supporto temporaneo o outsourcing continuativo. Ti risponderemo con
        una proposta calibrata sulle tue esigenze entro poche ore.
      </p>
      <LeadFormShell
        source="pulizie-hotel-roma-governanti"
        className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
          <SelectField
            label="Ruolo*"
            name="ruolo"
            required
            options={["Seleziona…", "Proprietario", "Direttore", "General Manager", "Responsabile HR", "Altro"]}
          />
          <InputField label="Nome della struttura*" placeholder="Hotel [Nome]" name="nome_struttura" required />
          <SelectField
            label="Categoria hotel*"
            name="categoria"
            required
            options={["Seleziona…", "3 stelle", "4 stelle", "5 stelle", "Boutique", "Altro"]}
          />
          <SelectField
            label="Numero di camere*"
            name="numero_camere"
            required
            options={["Seleziona…", "Fino a 20", "21–50", "51–100", "Oltre 100"]}
          />
          <SelectField
            label="Tipo di necessità*"
            name="tipo_necessita"
            required
            options={[
              "Seleziona…",
              "Sostituzione urgente — la governante è assente",
              "Sostituzione programmata — ferie, maternità, dimissioni",
              "Supporto alla governante interna",
              "Gestione in outsourcing del reparto housekeeping",
              "Non so ancora — vorrei un confronto",
            ]}
          />
          <SelectField
            label="Quando serve la figura*"
            name="quando_serve"
            required
            options={[
              "Seleziona…",
              "Immediatamente — entro 24-48 ore",
              "Entro questa settimana",
              "Entro questo mese",
              "Data da definire",
            ]}
          />
          <SelectField
            label="Numero di cameriere ai piani da coordinare"
            name="numero_cameriere"
            options={["Seleziona…", "Fino a 5", "Da 6 a 15", "Da 16 a 30", "Oltre 30"]}
          />
          <SelectField
            label="La struttura usa un PMS?"
            name="pms"
            options={["Seleziona…", "Sì — indicare quale", "No", "Non so"]}
          />
          <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." name="zona" required />
          <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          <InputField label="Email*" placeholder="nome@hotel.it" name="email" type="email" required autoComplete="email" />
          <div className="md:col-span-2">
            <TextareaField
              label="Note"
              placeholder="Es. motivazione dell'assenza, standard specifici della struttura, esigenze linguistiche, urgenze particolari…"
              name="note"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <FormSubmitPrimaryButton>Richiedi il servizio di governante</FormSubmitPrimaryButton>
        </div>
        <a href={whatsappHref} className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Hai un&apos;urgenza? Scrivici subito su WhatsApp — gestiamo le sostituzioni anche con poche ore di preavviso →
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
          Domande frequenti sul servizio di governante d&apos;albergo a Roma
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

export function GovernantiHotelRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <PageBreadcrumb items={pageBreadcrumbs["/pulizie-hotel-roma/governanti/"]} />
      <HeroGovernanti />
      <RoleSection />
      <ResponsibilitiesSection />
      <ProfileSection />
      <ServiceModeSection />
      <SupervisoreDifferenceSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
