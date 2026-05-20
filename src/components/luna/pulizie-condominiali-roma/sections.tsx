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
  "Contratti continuativi con SLA documentati",
  "Referente dedicato per ogni condominio",
  "Reportistica periodica per l'assemblea",
  "Preventivo gratuito con sopralluogo",
] as const;

const serviceItems = [
  {
    title: "Pulizia scale e androni",
    body: "Le scale e l'androne sono le aree comuni più visibili e più utilizzate di qualsiasi condominio. Gestiamo la pulizia di gradini, pianerottoli, corrimano, pareti, porte, vetri e pavimenti con frequenza settimanale o bisettimanale in base alla tipologia dell'edificio e al numero di condomini. Per i palazzi con alto traffico — portineria, attività commerciali al piano terra, molti condomini — proponiamo frequenze più alte e passaggi intermedi per il mantenimento.",
  },
  {
    title: "Pulizia ascensori",
    body: "Gli ascensori sono gli spazi più intensamente utilizzati e quelli che si sporcano più rapidamente. Pulizia del pavimento, delle pareti, dei pannelli in acciaio o specchio, della pulsantiera e delle porte — interne ed esterne a ogni piano — con prodotti specifici per ogni materiale e frequenza adattata all'utilizzo.",
  },
  {
    title: "Pulizia garage e box auto",
    body: "I garage condominiali accumulano polvere, oli, residui di pneumatici e sporco portato dalle carrozzerie delle auto. Gestiamo la pulizia dei pavimenti del garage con attrezzatura professionale — spazzatrici industriali e aspiratori per polveri pesanti — e la pulizia delle parti comuni: ingressi, rampe, colonne, illuminazione.",
  },
  {
    title: "Pulizia cantine e locali tecnici",
    body: "Le cantine e i locali tecnici condominiali — locale caldaia, locale contatori, deposito biciclette — richiedono pulizie periodiche meno frequenti ma altrettanto necessarie per la manutenzione dell'edificio e per il rispetto delle normative antincendio e di sicurezza.",
  },
  {
    title: "Pulizia aree verdi e spazi esterni",
    body: "Per i condomini con giardini, cortili, aree esterne e parcheggi scoperti, gestiamo la pulizia delle superfici esterne — spazzatura e lavaggio dei vialetti, pulizia dei portoni e degli ingressi esterni, raccolta foglie stagionale — in coordinamento con gli interventi interni.",
  },
  {
    title: "Pulizia lastrìco solare e terrazzi condominiali",
    body: "Il lastrìco solare e i terrazzi condominiali richiedono interventi periodici di pulizia — rimozione di foglie, polvere e residui atmosferici — e, in alcuni casi, lavaggi con idropulitrice per le superfici più esposte agli agenti atmosferici.",
  },
  {
    title: "Interventi straordinari",
    body: "Oltre al servizio continuativo, Luna Service gestisce interventi straordinari su richiesta: sgrosso post ristrutturazione delle parti comuni, pulizia post evento, pulizia emergenziale in seguito a allagamenti o danneggiamenti. Lo stesso fornitore per l'ordinario e per lo straordinario: meno interlocutori, meno complessità per l'amministratore.",
  },
] as const;

const adminValueItems = [
  {
    title: "Un referente unico",
    body: "Ogni condominio affidato a Luna Service ha un referente operativo dedicato. L'amministratore ha un solo numero da chiamare, una sola persona con cui parlare per qualsiasi esigenza — variazioni di servizio, richieste dei condomini, modifiche al calendario. Non un centralino, non un numero generico che rimanda a persone diverse ogni volta.",
  },
  {
    title: "Reportistica per l'assemblea",
    body: "A cadenza concordata — mensile o trimestrale — il referente di Luna Service fornisce all'amministratore un report degli interventi effettuati: date, aree trattate, eventuali anomalie riscontrate e azioni correttive adottate. Un documento che l'amministratore può portare in assemblea condominiale come rendiconto del servizio — trasparente, verificabile, professionale.",
  },
  {
    title: "Contratto chiaro e approvabile in assemblea",
    body: "Il contratto di servizio di Luna Service è redatto in modo da essere comprensibile e presentabile all'assemblea condominiale: descrizione chiara dei servizi inclusi, frequenze, costi, modalità di variazione e clausole di verifica qualità. Nessun linguaggio tecnico oscuro, nessuna voce ambigua.",
  },
  {
    title: "Gestione autonoma del personale",
    body: "Assenze, sostituzioni, ferie, malattie: li gestiamo noi. L'amministratore non riceve telefonate di operatori che non si possono presentare e non deve cercare sostituzioni all'ultimo momento. Il servizio viene erogato come concordato, indipendentemente dalla disponibilità del singolo operatore.",
  },
  {
    title: "Segnalazione proattiva di anomalie",
    body: "Durante gli interventi nelle parti comuni, i nostri operatori sono istruiti a segnalare al referente eventuali anomalie riscontrate nell'edificio: guasti all'illuminazione, perdite d'acqua, danni alle superfici, situazioni di sicurezza da verificare. L'amministratore riceve queste segnalazioni in modo proattivo — prima che diventino problemi più grandi.",
  },
] as const;

const normativeItems = [
  {
    title: "Sicurezza sul lavoro nelle parti comuni",
    body: "Il personale di Luna Service opera nelle parti comuni degli edifici in piena conformità alle normative sulla sicurezza sul lavoro: formazione certificata, dispositivi di protezione individuale appropriati, attrezzature conformi alle norme CE. L'amministratore non deve preoccuparsi della conformità del personale che lavora nel suo condominio — è nostra responsabilità.",
  },
  {
    title: "Assicurazione RC",
    body: "Luna Service è coperta da assicurazione RC professionale per danni a terzi o alle proprietà causati durante lo svolgimento del servizio. Copia della polizza è disponibile su richiesta — un documento che alcuni condomini o assemblee potrebbero richiedere prima dell'approvazione del contratto.",
  },
] as const;

const buildingTypeItems = [
  {
    title: "Palazzi storici del centro",
    body: "Gli edifici storici di Roma — con scale in marmo, corrimano in ferro battuto, pavimenti in cotto o pietra — richiedono prodotti e tecniche specifiche per ogni materiale. Luna Service opera regolarmente nei palazzi storici del centro, Trastevere, Prati e delle zone residenziali di pregio, con protocolli di pulizia adattati ai materiali pregiati presenti.",
  },
  {
    title: "Condomini residenziali di medio taglio",
    body: "La grande maggioranza dei condomini romani — edifici anni '60, '70, '80 con scale standard, ascensore e garage — richiede un servizio affidabile e continuativo a costi sostenibili. Luna Service gestisce questo tipo di condominio con contratti chiari e frequenze adeguate, senza costi gonfiati da lavorazioni non necessarie.",
  },
  {
    title: "Complessi residenziali e condomini di grandi dimensioni",
    body: "I complessi residenziali con più palazzine, aree comuni estese, parcheggi coperti e scoperti, giardini e servizi condivisi richiedono un piano operativo più articolato e un team più numeroso. Luna Service scala il servizio in base alle dimensioni del complesso, con un referente dedicato per l'intero complesso e reporting consolidato per l'amministratore.",
  },
  {
    title: "Condomini misti residenziale-commerciale",
    body: "Gli edifici con unità commerciali al piano terra — negozi, uffici, studi professionali — hanno esigenze di pulizia delle parti comuni diverse dagli edifici puramente residenziali: traffico più alto, orari più estesi, standard di pulizia dell'ingresso più elevati per le attività commerciali. Luna Service gestisce questi casi con piani di servizio che tengono conto della compresenza di residenti e attività commerciali.",
  },
] as const;

const faqItems = [
  {
    q: "Con quale frequenza vanno pulite le scale di un condominio a Roma?",
    a: "La frequenza dipende dalla tipologia dell'edificio, dal numero di condomini e dal traffico nelle parti comuni. Come riferimento generale: per i condomini di piccole dimensioni con meno di dieci unità, una pulizia settimanale è generalmente adeguata. Per i condomini di medie dimensioni, due interventi settimanali garantiscono uno standard migliore. Per gli edifici con alto traffico — portineria, attività commerciali, molti condomini — possono essere necessari tre o più interventi settimanali. Luna Service definisce la frequenza durante il sopralluogo in base alla realtà specifica dell'edificio.",
  },
  {
    q: "Il contratto di pulizie deve essere approvato dall'assemblea condominiale?",
    a: "Sì. Il contratto per la pulizia delle parti comuni rientra nella gestione ordinaria del condominio ed è di competenza dell'assemblea condominiale, che lo approva con le maggioranze previste dal Codice Civile. L'amministratore presenta il preventivo in assemblea per l'approvazione prima di procedere con la firma del contratto. Luna Service fornisce tutta la documentazione necessaria per la presentazione in assemblea: preventivo dettagliato, descrizione dei servizi, frequenze, costo mensile e costo annuale.",
  },
  {
    q: "Cosa succede se un operatore non si presenta per il turno concordato?",
    a: "La sostituzione è interamente a carico di Luna Service. L'amministratore non riceve telefonate di operatori assenti e non deve cercare sostituzioni. Il referente operativo gestisce la copertura internamente e il servizio viene erogato come concordato. Se per cause eccezionali un intervento non può essere effettuato nella data prevista, il referente avvisa l'amministratore in anticipo e riprogramma l'intervento nel più breve tempo possibile.",
  },
  {
    q: "Fornite documentazione degli interventi per l'assemblea condominiale?",
    a: "Sì. A cadenza mensile o trimestrale forniamo all'amministratore un report degli interventi effettuati: date, aree trattate, eventuali anomalie riscontrate e azioni correttive adottate. È un documento che l'amministratore può portare in assemblea come rendiconto del servizio, dimostrando trasparenza nella gestione delle pulizie condominiali.",
  },
  {
    q: "Gestite anche gli interventi straordinari oltre al servizio ordinario?",
    a: "Sì. Luna Service gestisce sia il servizio continuativo ordinario che gli interventi straordinari sulle parti comuni — sgrosso post ristrutturazione, pulizia post evento, emergenze igieniche. Avere un unico fornitore per entrambi significa meno interlocutori per l'amministratore e maggiore coerenza nel servizio.",
  },
  {
    q: "Lavorate con più condomini dello stesso amministratore?",
    a: "Sì. Molti dei nostri clienti nel segmento condominiale sono amministratori professionali che gestiscono più condomini. Per gli amministratori con più edifici proponiamo un accordo di servizio dedicato con gestione centralizzata: un unico punto di contatto per tutti gli edifici, fatturazione consolidata e reportistica per condominio. Contattaci per discutere le tue esigenze specifiche.",
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
                  Pulizie condominiali a Roma: il servizio che gli amministratori scelgono per non pensarci più
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Gestire le pulizie di un condominio a Roma significa trovare un&apos;impresa affidabile, mantenerla nel tempo,
                  gestire le variazioni di servizio e rispondere all&apos;assemblea condominiale sulla qualità del lavoro. Luna
                  Service semplifica tutto questo: un contratto, un referente, un servizio verificato e documentato.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <a
                    href="#preventivo-form"
                    className="inline-flex items-center justify-center rounded-[999px] bg-[#99cc33] px-[28px] py-[20px] text-[15px] font-medium text-[#161714]"
                  >
                    Richiedi il preventivo per il tuo condominio
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
              src="/images/pages/pulizie-condominiali-roma-hero.jpg"
              alt="Pulizie condominiali Roma"
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
      <SectionBadge>Il contesto</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Le pulizie condominiali a Roma: un servizio che riguarda migliaia di edifici e altrettanti amministratori
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Roma è una città di condomini. Decine di migliaia di edifici residenziali — dal palazzo storico del centro ai
          complessi residenziali della periferia — hanno parti comuni che richiedono pulizia continuativa: scale, androni,
          ascensori, garage, cantine, aree verdi, lastrici solari.
        </p>
        <p className="m-0">
          La gestione delle pulizie condominiali è una delle responsabilità più operative dell&apos;amministratore di
          condominio: deve trovare un&apos;impresa affidabile, negoziare il contratto, presentarlo all&apos;assemblea per
          l&apos;approvazione, verificare la qualità del servizio nel tempo e gestire le inevitabili variazioni — cambi di
          personale, richieste dei condomini, modifiche alle frequenze.
        </p>
        <p className="m-0">
          Non è una responsabilità banale. Un&apos;impresa che non si presenta, un servizio che cala di qualità nel tempo, un
          condomino che si lamenta all&apos;assemblea della scala non pulita: sono situazioni che ricadono sull&apos;amministratore,
          non sull&apos;impresa.
        </p>
        <p className="m-0">
          Luna Service lavora con amministratori di condominio a Roma con un approccio costruito su questa realtà: contratti
          chiari, servizio verificato, reportistica che l&apos;amministratore può portare in assemblea, referente unico con cui
          parlare per qualsiasi esigenza. Non un fornitore da gestire: un partner operativo che si gestisce da solo.
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
        Il servizio di pulizie condominiali di Luna Service a Roma: cosa è incluso
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il nostro servizio condominiale copre tutte le aree comuni dell&apos;edificio con frequenze calibrate sulla tipologia e
        sull&apos;utilizzo. Ogni contratto viene costruito sul condominio specifico — non su un pacchetto standard uguale per
        tutti.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {serviceItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AdminValueSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Valore per l&apos;amministratore</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Cosa significa per un amministratore lavorare con Luna Service
      </h2>
      <p className="mt-[18px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        L&apos;amministratore di condominio non valuta un servizio di pulizie solo sulla qualità del lavoro — valuta anche quanto
        tempo gli costa gestirlo. Luna Service è costruita per ridurre al minimo il tempo che l&apos;amministratore deve dedicare
        alla gestione delle pulizie condominiali.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {adminValueItems.map((item) => (
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

function NormativeSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Normativa</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Pulizie condominiali e normativa: cosa deve sapere ogni amministratore
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          L&apos;amministratore di condominio ha obblighi precisi in materia di manutenzione e igiene delle parti comuni,
          definiti dal Codice Civile e dal Regolamento condominiale. Il mancato rispetto di questi obblighi può esporre
          l&apos;amministratore a responsabilità dirette nei confronti dei condomini.
        </p>
        <p className="m-0">
          Le pulizie delle parti comuni non sono una scelta discrezionale: sono una componente della manutenzione ordinaria
          dell&apos;edificio che l&apos;amministratore è tenuto a garantire. La frequenza e la modalità degli interventi devono
          essere adeguate alla tipologia dell&apos;edificio e al numero di condomini.
        </p>
        <p className="m-0">
          Luna Service fornisce a ogni condominio cliente un contratto di servizio che definisce in modo preciso frequenze,
          modalità e responsabilità — un documento che tutela l&apos;amministratore in caso di contestazioni e che dimostra
          l&apos;adozione di misure adeguate alla manutenzione delle parti comuni.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {normativeItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BuildingTypesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Tipologie di condominio</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Lavoriamo con ogni tipologia di condominio a Roma
      </h2>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {buildingTypeItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FormSection() {
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
          Richiedi il preventivo per il tuo condominio
        </h2>
        <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
          Dicci qualcosa sul condominio che amministri. Ti risponderemo con una proposta dettagliata entro 48 ore — pronta
          per essere presentata in assemblea.
        </p>
        <LeadFormShell
          source="pulizie-condominiali-roma"
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
                "Amministratore di condominio",
                "Consigliere condominiale",
                "Proprietario / condomino delegato",
                "Altro",
              ]}
            />
            <InputField label="Studio o ragione sociale" placeholder="Es. Studio Rossi amministrazioni" name="studio" />
            <InputField label="Indirizzo del condominio*" placeholder="Via, numero civico" name="indirizzo_condominio" required />
            <InputField label="Zona di Roma*" placeholder="Es. EUR, Prati, Ostia..." name="zona" required />
            <SelectField
              label="Numero di scale / palazzine*"
              name="numero_scale"
              required
              options={["Seleziona…", "1 scala", "2–3 scale", "4–6 scale", "Oltre 6 scale / complesso residenziale"]}
            />
            <SelectField
              label="Numero approssimativo di unità abitative*"
              name="numero_unita"
              required
              options={["Seleziona…", "Fino a 10 unità", "Da 11 a 30 unità", "Da 31 a 60 unità", "Oltre 60 unità"]}
            />
            <div className="md:col-span-2">
              <span className="mb-[8px] block text-[13px] font-medium text-[#161714]">Aree comuni da includere</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
                <ChoiceCheckbox name="area" value="Scale e androni" label="Scale e androni" />
                <ChoiceCheckbox name="area" value="Ascensori" label="Ascensori" />
                <ChoiceCheckbox name="area" value="Garage / box auto" label="Garage / box auto" />
                <ChoiceCheckbox name="area" value="Cantine / locali tecnici" label="Cantine / locali tecnici" />
                <ChoiceCheckbox name="area" value="Aree verdi / cortile" label="Aree verdi / cortile" />
                <ChoiceCheckbox name="area" value="Lastrico solare / terrazzi condominiali" label="Lastrico solare / terrazzi condominiali" />
              </div>
            </div>
            <SelectField
              label="Il condominio ha già un servizio di pulizie?"
              name="servizio_esistente"
              options={[
                "Seleziona…",
                "Sì — stiamo valutando un cambio",
                "No — è un nuovo incarico",
                "Sì — ma vogliamo un secondo preventivo",
              ]}
            />
            <InputField label="Quando scade il contratto attuale?" placeholder="Es. dicembre 2026" name="scadenza_contratto" />
            <SelectField
              label="Frequenza attuale o desiderata"
              name="frequenza"
              options={["Seleziona…", "Settimanale", "Bisettimanale", "Trisettimanale", "Da definire"]}
            />
            <SelectField
              label="Il preventivo deve essere presentato in assemblea?"
              name="documentazione_assemblea"
              options={["Seleziona…", "Sì — ho bisogno di documentazione formale", "No — è una valutazione preliminare"]}
            />
            <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
            <InputField label="Email*" placeholder="nome@email.it" name="email" type="email" required autoComplete="email" />
            <div className="md:col-span-2">
              <TextareaField
                label="Note"
                placeholder="Es. materiali particolari nelle scale, presenza di portiere, orari preferiti per gli interventi, esigenze specifiche dell'assemblea…"
                name="note"
              />
            </div>
          </div>
          <div className="mt-[16px]">
            <FormSubmitPrimaryButton invert>
              Richiedi il preventivo — pronto per l&apos;assemblea condominiale
            </FormSubmitPrimaryButton>
          </div>
          <p className="mt-[12px] m-0 text-[14px] leading-[1.55] text-[#3a3b36]">
            Il preventivo include descrizione dettagliata dei servizi, frequenze e costo mensile. Formato adatto alla
            presentazione in assemblea condominiale.
          </p>
        </LeadFormShell>
        <a href="https://wa.me/" className="mt-[14px] inline-flex text-[14px] text-[#1a1f0d] underline">
          Preferisci un confronto diretto? Scrivici su WhatsApp →
        </a>
        <div className="mt-[18px] text-[14px] text-[#1a1f0d]">
          <Link href="/pulizie-straordinarie-roma/" className="underline">
            /pulizie-straordinarie-roma/
          </Link>{" "}
          ·{" "}
          <Link href="/sanificazione-ambienti-roma/" className="underline">
            /sanificazione-ambienti-roma/
          </Link>{" "}
          ·{" "}
          <Link href="/chi-siamo/" className="underline">
            /chi-siamo/
          </Link>{" "}
          ·{" "}
          <Link href="/contatti/" className="underline">
            /contatti/
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
          Domande frequenti sulle pulizie condominiali a Roma
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

export function PulizieCondominialiRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizie Condominiali Roma</li>
        </ol>
      </nav>
      <HeroSection />
      <ContextSection />
      <ServicesSection />
      <AdminValueSection />
      <NormativeSection />
      <BuildingTypesSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
