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
  "Personale formato su standard alberghieri",
  "Disponibile su turni e reperibilità",
  "Integrazione con i processi interni dell'hotel",
  "Copertura assicurativa RC inclusa",
] as const;

const serviceItems = [
  {
    title: "Gestione bagagli e accoglienza ospiti",
    body: "Il trasporto bagagli dall'ingresso alla camera — e dalla camera all'uscita — è il momento in cui il facchino è il volto dell'hotel. Il nostro personale è formato non solo sulle tecniche di movimentazione corretta dei bagagli, ma anche sul comportamento professionale in presenza degli ospiti: linguaggio, postura, gestione delle richieste, discrezione. Ogni interazione con l'ospite è un'opportunità per rafforzare la percezione della struttura.\n\nGestiamo anche il servizio di deposito bagagli: ricezione con ricevuta, identificazione e catalogazione dei colli, custodia in area dedicata, riconsegna puntuale. Un processo che richiede organizzazione e tracciabilità, non solo forza fisica.",
    image: "/images/pages/pulizie-hotel-roma-facchinaggio-servizio-01.jpg",
  },
  {
    title: "Allestimento e smontaggio sale",
    body: "Gli hotel di Roma — specialmente quelli nel centro storico e nelle zone congressuali — ospitano regolarmente eventi, meeting, conferenze e cerimonie. L'allestimento di queste sale richiede rapidità, precisione e la capacità di seguire un layout specifico senza margini di errore: i tavoli devono essere esattamente dove il cliente si aspetta di trovarli, la tecnologia deve essere posizionata correttamente, le attrezzature audiovisive devono essere integrate nell'allestimento senza intralciare il percorso degli ospiti.\n\nLuna Service fornisce personale per l'allestimento e lo smontaggio completo delle sale eventi, coordinato con il dipartimento eventi dell'hotel e disponibile anche con preavviso breve per i setup dell'ultimo minuto.",
    image: "/images/pages/pulizie-hotel-roma-facchinaggio-servizio-02.jpg",
  },
  {
    title: "Movimentazione forniture e supporto ai reparti",
    body: "Dalla consegna della biancheria lavata al reparto housekeeping, al trasporto delle forniture alimentari dalla reception di carico alle cucine, alla gestione degli ingombranti durante i cambi di camera: la movimentazione interna di un hotel è un flusso continuo che richiede personale disponibile e organizzato.\n\nIl nostro personale di facchinaggio supporta i reparti interni dell'hotel nelle attività di movimentazione quotidiana, liberando il personale qualificato da compiti fisici per concentrarsi sulle loro mansioni specifiche.",
    image: "/images/pages/pulizie-hotel-roma-facchinaggio-servizio-03.jpg",
  },
  {
    title: "Supporto durante check-in e check-out di gruppo",
    body: "I gruppi — tour operator, delegazioni aziendali, comitive scolastiche — generano picchi di check-in e check-out che mettono sotto pressione l'intera operatività dell'hotel. Un gruppo di 40 persone che arriva contemporaneamente con i bagagli è uno scenario che richiede coordinamento preciso tra front desk, housekeeping e facchinaggio.\n\nLuna Service può fornire personale aggiuntivo dedicato ai check-in e check-out di gruppo, coordinato con il piano operativo dell'hotel per assorbire il picco senza rallentamenti visibili agli ospiti.",
    image: "/images/pages/pulizie-hotel-roma-facchinaggio-servizio-04.jpg",
  },
  {
    title: "Assistenza durante operazioni di manutenzione",
    body: "Cambio di arredi, spostamento di attrezzature, installazione di forniture voluminose: le operazioni di manutenzione ordinaria e straordinaria di un hotel richiedono spesso supporto per la movimentazione di oggetti pesanti o ingombranti. Luna Service fornisce personale per queste attività su richiesta, coordinato con il responsabile tecnico della struttura.",
    image: "/images/pages/pulizie-hotel-roma-facchinaggio-servizio-05.jpg",
  },
] as const;

const staffBlocks = [
  {
    title: "Briefing specifico sulla struttura",
    body: "Prima dell'avvio del servizio, ogni operatore riceve un briefing dettagliato sulla struttura cliente: planimetria dell'hotel, posizione dei magazzini e dei depositi, procedure interne per la gestione dei bagagli, standard comportamentali richiesti dalla struttura, punti di contatto con il personale interno. Non mandiamo personale a \"imparare sul campo\" a spese dell'ospite.",
  },
  {
    title: "Standard comportamentali alberghieri",
    body: "In un hotel, ogni persona che indossa una divisa rappresenta la struttura agli occhi dell'ospite. Il nostro personale di facchinaggio è formato sui comportamenti standard dell'ospitalità alberghiera: puntualità, discrezione, linguaggio corretto, gestione delle richieste degli ospiti, segnalazione proattiva di anomalie al responsabile di riferimento.",
  },
  {
    title: "Regolarità contrattuale e copertura assicurativa",
    body: "Tutto il personale di Luna Service è regolarmente assunto con contratto conforme al CCNL di settore e coperto da assicurazione RC professionale per danni a terzi o alle proprietà. L'hotel non assume responsabilità di datore di lavoro nei confronti del nostro personale — e non deve preoccuparsi della conformità normativa degli operatori che lavorano nella struttura.",
  },
] as const;

const flexibilityBlocks = [
  {
    title: "Servizio su turni programmati",
    body: "Per gli hotel con flussi prevedibili e continuativi, definiamo un piano di turni calibrato sugli orari di picco della struttura: turno mattina per le partenze, turno pomeriggio per gli arrivi, copertura serale per gli eventi. I turni vengono pianificati settimanalmente in base al calendario di occupazione dell'hotel.",
  },
  {
    title: "Reperibilità per i picchi imprevisti",
    body: "I picchi di occupazione non sono sempre prevedibili: un evento cittadino, una delegazione arrivata con anticipo, un cambio di programma dell'ultimo minuto. Luna Service garantisce una reperibilità telefonica per interventi con preavviso breve — generalmente entro 2-4 ore — per coprire i picchi che esulano dal programma ordinario.",
  },
  {
    title: "Integrazione con il team interno",
    body: "Il nostro personale di facchinaggio non opera come corpo separato dall'hotel: viene integrato operativamente con il team interno, lavora sotto la supervisione del responsabile di reparto dell'hotel e segue le procedure interne della struttura. L'obiettivo è che l'ospite non percepisca alcuna differenza tra il personale diretto dell'hotel e quello fornito da Luna Service.",
  },
] as const;

const outsourcingBlocks = [
  {
    title: "Il costo del personale multiruolo",
    body: "Quando un receptionist dedica 20 minuti al trasporto dei bagagli di un gruppo, quelle 20 minuti vengono sottratte alla gestione del check-in degli altri ospiti in arrivo. Il costo non è visibile sulla busta paga, ma si misura nelle code alla reception, nell'insoddisfazione degli ospiti e nelle recensioni che lo riflettono.",
  },
  {
    title: "La professionalità dedicata",
    body: "Un facchino formato per il ruolo lavora meglio, più velocemente e con meno rischi di danni ai bagagli rispetto a personale che lo fa occasionalmente. La movimentazione corretta dei bagagli riduce i rischi di danni — e le relative richieste di risarcimento — in modo significativo.",
  },
  {
    title: "La flessibilità strutturale",
    body: "Con il facchinaggio in outsourcing, il costo è proporzionale al servizio utilizzato: nei periodi di bassa occupazione il servizio si riduce, nei picchi si intensifica. Un costo variabile invece di un costo fisso che rimane invariato indipendentemente dall'occupazione.",
  },
] as const;

const faqItems = [
  {
    q: "Qual è la differenza tra un facchino d'albergo e un portiere?",
    a: "In un hotel il portiere — o portiere di notte — è una figura con responsabilità di accoglienza, gestione delle chiavi e presidio dell'ingresso, spesso con funzioni di security nelle ore notturne. Il facchino d'albergo è specificamente dedicato alla movimentazione dei bagagli, all'allestimento degli spazi e al supporto operativo fisico. In molte strutture le due figure coesistono con ruoli distinti; in altre vengono sovrapposte. Luna Service fornisce personale specificamente formato per le mansioni di facchinaggio operativo.",
  },
  {
    q: "Il personale di facchinaggio è assicurato per eventuali danni ai bagagli degli ospiti?",
    a: "Sì. Tutto il personale di Luna Service è coperto da assicurazione RC professionale che include i danni accidentali a cose di proprietà degli ospiti durante lo svolgimento del servizio. In caso di contestazione da parte di un ospite per danni ai bagagli, il processo di gestione del sinistro viene gestito attraverso la nostra copertura assicurativa.",
  },
  {
    q: "Con quanto preavviso posso richiedere personale aggiuntivo per un evento?",
    a: "Per gli eventi programmati con anticipo, il personale viene pianificato nella settimana precedente. Per le richieste urgenti — eventi dell'ultimo minuto, picchi imprevisti — siamo in grado di fornire personale con 2-4 ore di preavviso su Roma, compatibilmente con la disponibilità. Per le situazioni più critiche, il contatto diretto via WhatsApp con il supervisore di riferimento è il canale più rapido.",
  },
  {
    q: "Il personale di Luna Service segue le procedure interne del nostro hotel?",
    a: "Sì. Prima dell'avvio del servizio, ogni operatore viene briefato sulle procedure interne della struttura cliente: dall'uso del montacarichi alle modalità di ricezione dei bagagli, dalle procedure di deposito agli standard comportamentali richiesti dall'hotel. L'obiettivo è che il personale di Luna Service sia operativamente indistinguibile dal personale interno.",
  },
  {
    q: "È possibile avere sempre gli stessi operatori assegnati alla nostra struttura?",
    a: "Sì, compatibilmente con le disponibilità. Cerchiamo di assegnare operatori fissi alle strutture con le quali abbiamo contratti continuativi, perché la continuità del personale riduce i tempi di adattamento e migliora la qualità del servizio nel tempo. In caso di assenze o sostituzioni, il nuovo operatore viene briefato sulla struttura prima di iniziare.",
  },
  {
    q: "Gestite anche il facchinaggio per eventi esterni all'hotel, come cerimonie o ricevimenti in location esterne?",
    a: "Sì, su richiesta. Se l'hotel organizza eventi in location esterne o ha necessità di supporto per la logistica di materiali al di fuori della struttura, Luna Service può fornire personale dedicato a queste attività, coordinato con il responsabile eventi dell'hotel.",
  },
] as const;

function HeroFacchinaggio() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[20px] md:pt-[28px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-[42px]">
                <h1 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.02] tracking-[-0.025em] text-[#fbf9f3]">
                  Servizio di facchinaggio per hotel a Roma: personale qualificato per ogni esigenza operativa
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Dal trasporto bagagli degli ospiti all&apos;allestimento delle sale eventi, dalla movimentazione delle
                  forniture all&apos;assistenza durante i cambi di camera: Luna Service fornisce agli hotel di Roma
                  personale di facchinaggio formato, affidabile e integrato nei processi operativi della struttura.
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
              src="/images/pages/pulizie-hotel-roma-facchinaggio-hero.jpg"
              alt="Servizio facchinaggio hotel Roma"
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

function ContextSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Il contesto</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Facchinaggio in hotel: un servizio che va molto oltre il trasporto dei bagagli
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Quando si parla di facchinaggio in un hotel, il pensiero va immediatamente all&apos;ospite che arriva con le
          valigie. Ma il servizio di facchinaggio alberghiero è molto più articolato — e molto più strategico — di quanto
          sembri dall&apos;esterno.
        </p>
        <p className="m-0">
          Un facchino d&apos;albergo ben formato è una figura operativa trasversale: supporta il front desk durante i
          picchi di arrivo e partenza, gestisce la movimentazione delle forniture tra magazzino e reparti, allestisce e
          smonta le sale per eventi e meeting, assiste il personale housekeeping durante i cambi di camera complessi,
          gestisce il deposito bagagli con precisione e tracciabilità.
        </p>
        <p className="m-0">
          In un hotel a Roma con buon tasso di occupazione — specialmente durante i picchi stagionali o in
          corrispondenza di eventi cittadini — la mancanza di personale di facchinaggio adeguato si traduce in code alla
          reception, ospiti in attesa con i bagagli in mano, ritardi nei cambi di camera e un&apos;esperienza complessiva
          che non rispecchia il livello della struttura.
        </p>
        <p className="m-0">
          Luna Service fornisce agli hotel di Roma personale di facchinaggio professionale, formato sugli standard
          alberghieri e disponibile con la flessibilità necessaria a coprire i picchi senza gravare sui costi fissi nei
          periodi di bassa occupazione.
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
        Il servizio di facchinaggio alberghiero di Luna Service: cosa è incluso
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il nostro servizio di facchinaggio per hotel a Roma copre tutte le attività di supporto operativo che richiedono
        personale fisicamente presente, formato e affidabile. Ogni incarico viene definito sulla struttura specifica durante
        il sopralluogo iniziale.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {serviceItems.map((item, idx) => (
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
                <span>Servizio</span>
              </div>
              <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em]">{item.title}</h3>
              <div className="mt-[12px] flex-1 space-y-[12px] text-[14px] leading-[1.55] text-[#3a3b36]">
                {item.body.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="m-0">
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

function StaffSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Il personale</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Chi sono i nostri facchini d&apos;albergo: formazione, professionalità e discrezione
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[14px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Il facchinaggio alberghiero non è un lavoro generico. Richiede competenze specifiche che vanno ben oltre la
          capacità fisica: la conoscenza delle procedure di movimentazione corretta per non danneggiare bagagli e
          strutture, la capacità di lavorare in un ambiente operativo complesso senza interferire con l&apos;esperienza
          degli ospiti, il comportamento professionale in ogni interazione con clienti e colleghi, la comprensione delle
          priorità operative dell&apos;hotel e la capacità di adattarsi ai cambi di piano dell&apos;ultimo minuto.
        </p>
        <p className="m-0">
          Il personale di facchinaggio di Luna Service viene selezionato su questi criteri e formato prima di iniziare
          qualsiasi servizio presso una struttura cliente.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {staffBlocks.map((block, idx) => (
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

function FlexibilitySection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Flessibilità operativa</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Facchinaggio su turni, reperibilità e integrazione con il personale interno
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Una delle sfide principali nella gestione del facchinaggio alberghiero è la variabilità del carico di lavoro: ci
          sono ore in cui la struttura ha bisogno di tre operatori contemporaneamente e ore in cui uno è sufficiente.
          Gestire questa variabilità con personale interno fisso genera inevitabilmente costi durante i periodi di bassa
          attività.
        </p>
        <p className="m-0">Luna Service gestisce questa variabilità in modo strutturato.</p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {flexibilityBlocks.map((block) => (
          <article key={block.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{block.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{block.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OutsourcingSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Perché esternalizzare</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Facchinaggio interno vs outsourcing: cosa cambia nella pratica
      </h2>
      <p className="m-0 mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Molti hotel gestiscono il facchinaggio con personale multiruolo — portieri, receptionist, addetti alle pulizie che
        all&apos;occorrenza si occupano anche dei bagagli. È una soluzione che funziona fino a un certo punto di
        complessità operativa, ma che presenta limiti evidenti quando il volume cresce.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {outsourcingBlocks.map((block) => (
          <article key={block.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{block.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{block.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BellboyDifferenceSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Differenza con il bellboy</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Facchinaggio e bellboy: due figure diverse per esigenze diverse
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Una distinzione importante per gli hotel che stanno valutando il personale di supporto operativo: il facchino
          d&apos;albergo e il bellboy sono figure con profili e mansioni distinte, anche se entrambe coinvolgono la
          movimentazione dei bagagli.
        </p>
        <p className="m-0">
          Il facchino d&apos;albergo è una figura orientata alle operazioni interne: si occupa della movimentazione delle
          forniture tra i reparti, dell&apos;allestimento delle sale eventi, del supporto durante le operazioni di
          manutenzione, del deposito e della gestione dei materiali. Lavora prevalentemente nelle aree di servizio
          dell&apos;hotel, con minor contatto diretto con gli ospiti.
        </p>
        <p className="m-0">
          Il bellboy è una figura orientata all&apos;ospite: la sua mansione principale è l&apos;accoglienza e
          l&apos;assistenza diretta alla persona. Lavora all&apos;ingresso e nei corridoi dell&apos;hotel, a contatto
          continuo con gli ospiti, con una forte componente relazionale e di rappresentanza della struttura.
        </p>
        <p className="m-0">
          In molte strutture di medie dimensioni le due figure vengono sovrapposte in un unico profilo multiruolo. Luna
          Service può fornire entrambe le soluzioni: figure specializzate per ciascun ruolo nelle strutture di categoria
          superiore, o figure ibride per le strutture che preferiscono un profilo più versatile.
        </p>
        <p className="m-0">
          <Link href="/pulizie-hotel-roma/bellboy/" className="underline text-[#161714]">
            Scopri il servizio bellboy per hotel
          </Link>
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
        Richiedi il preventivo per il servizio di facchinaggio del tuo hotel
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci qualcosa sulla tua struttura e sulle tue esigenze operative. Ti risponderemo con una proposta concreta entro
        poche ore.
      </p>
      <LeadFormShell
        source="pulizie-hotel-roma-facchinaggio"
        className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
          <SelectField
            label="Ruolo*"
            name="ruolo"
            required
            options={[
              "Seleziona…",
              "Proprietario",
              "Direttore",
              "Responsabile operativo",
              "Responsabile front desk",
              "Altro",
            ]}
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
          <div className="md:col-span-2">
            <span className="mb-[8px] block text-[13px] font-medium text-[#161714]">Attività principali richieste</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceCheckbox name="attivita" value="Gestione bagagli e accoglienza ospiti" label="Gestione bagagli e accoglienza ospiti" />
              <ChoiceCheckbox name="attivita" value="Deposito bagagli" label="Deposito bagagli" />
              <ChoiceCheckbox name="attivita" value="Allestimento sale eventi" label="Allestimento sale eventi" />
              <ChoiceCheckbox name="attivita" value="Movimentazione forniture interne" label="Movimentazione forniture interne" />
              <ChoiceCheckbox
                name="attivita"
                value="Supporto check-in/check-out di gruppo"
                label="Supporto check-in/check-out di gruppo"
              />
              <ChoiceCheckbox name="attivita" value="Altro" label="Altro" />
            </div>
          </div>
          <SelectField
            label="Tipo di copertura necessaria"
            name="tipo_copertura"
            options={[
              "Seleziona…",
              "Turni regolari programmati",
              "Reperibilità per picchi",
              "Servizio continuativo full-time",
              "Non so ancora — vorrei un consiglio",
            ]}
          />
          <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." name="zona" required />
          <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          <InputField label="Email*" placeholder="nome@hotel.it" name="email" type="email" required autoComplete="email" />
          <div className="md:col-span-2">
            <TextareaField
              label="Note"
              placeholder="Es. orari di picco tipici, eventi ricorrenti, esigenze specifiche di coordinamento con il personale interno…"
              name="note"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <FormSubmitPrimaryButton>Richiedi il preventivo gratuito</FormSubmitPrimaryButton>
        </div>
        <a href={whatsappHref} className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Hai un&apos;urgenza o vuoi discutere i dettagli direttamente? Scrivici su WhatsApp →
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
          Domande frequenti sul servizio di facchinaggio per hotel a Roma
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

export function FacchinaggioHotelRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <PageBreadcrumb items={pageBreadcrumbs["/pulizie-hotel-roma/facchinaggio/"]} />
      <HeroFacchinaggio />
      <ContextSection />
      <ServicesSection />
      <StaffSection />
      <FlexibilitySection />
      <OutsourcingSection />
      <BellboyDifferenceSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
