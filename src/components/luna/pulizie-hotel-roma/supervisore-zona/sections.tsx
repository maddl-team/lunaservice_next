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
  "Esperienza documentata su hotel 4 e 5 stelle",
  "Formazione certificata in hotel operations management",
  "Monitoraggio in tempo reale con reportistica strutturata",
  "Intervento correttivo immediato — non a posteriori",
] as const;

const responsibilityItems = [
  {
    title: "Monitoraggio continuo dell'andamento dei lavori",
    body: "Durante il turno operativo, il supervisore di zona percorre sistematicamente la propria area di competenza verificando lo stato di ogni punto critico: camere in lavorazione, corridoi, aree comuni, servizi igienici delle aree condivise, spazi di servizio. Il monitoraggio non è casuale — segue un piano di percorso strutturato che garantisce la copertura di ogni area entro intervalli di tempo definiti.\n\nVerifica che le cameriere ai piani stiano rispettando i tempi previsti, che la sequenza di lavoro sia corretta, che le camere siano lavorate nell'ordine di priorità concordato con la reception in base ai check-in attesi. Se qualcosa non procede come previsto, interviene immediatamente — redistribuendo il carico, richiedendo supporto aggiuntivo, risolvendo l'imprevisto prima che impatti sull'operatività.",
    image: "/images/pages/pulizie-hotel-roma-supervisore-zona-servizio-01.jpg",
  },
  {
    title: "Ispezione qualità sistematica delle camere",
    body: "Prima che una camera venga dichiarata pronta per l'ospite, il supervisore la ispeziona secondo un protocollo strutturato specifico per la categoria della struttura. Non è una verifica visiva rapida: è un'ispezione metodica che verifica ogni elemento — dalla qualità del rifacimento letto alla pulizia delle superfici difficili, dalla funzionalità degli impianti alla presentazione degli amenity, dall'assenza di odori alla corretta disposizione degli oggetti di arredo.\n\nLe non conformità vengono documentate immediatamente — con foto se necessario — comunicate alla cameriera responsabile per la correzione e registrate nel sistema di reportistica. Ogni camera che riceve il via libera dal supervisore rispetta lo standard concordato: non ci sono approssimazioni, non ci sono \"lo sistemiamo dopo\".",
    image: "/images/pages/pulizie-hotel-roma-supervisore-zona-servizio-02.jpg",
  },
  {
    title: "Coordinamento in tempo reale con la reception",
    body: "Il supervisore di zona è il punto di collegamento operativo tra il reparto housekeeping e la reception durante il turno. Comunica in tempo reale lo stato delle camere — pronte, in lavorazione, bloccate per problemi tecnici — permettendo alla reception di gestire check-in anticipati, richieste di cambio camera e upgrade senza attese inutili per l'ospite.\n\nQuando arriva una richiesta urgente dalla reception — una camera VIP da prioritizzare, un ospite che chiede di entrare prima del check-in standard, un cambio camera da gestire entro 30 minuti — il supervisore riorganizza immediatamente il piano di lavoro per rispondere all'esigenza senza compromettere il ritmo del resto del reparto.",
    image: "/images/pages/pulizie-hotel-roma-supervisore-zona-servizio-03.jpg",
  },
  {
    title: "Gestione delle criticità e delle escalation",
    body: "I problemi operativi in un hotel sono imprevedibili per definizione: un guasto al climatizzatore di tre camere, una macchia sul moquette del corridoio principale, un ospite che trova la camera non al livello atteso, una situazione di conflitto tra personale durante il turno. Il supervisore di zona è formato per gestire queste criticità con lucidità: valuta la gravità, attiva le risorse necessarie, comunica alla direzione con la tempistica appropriata e documenta l'incidente per il follow-up.\n\nLa capacità di gestione delle criticità è una delle competenze più difficili da formare — e una di quelle su cui Luna Service investe di più nella selezione e nella formazione dei propri supervisori.",
    image: "/images/pages/pulizie-hotel-roma-supervisore-zona-servizio-04.jpg",
  },
  {
    title: "Formazione e affiancamento del personale operativo",
    body: "Il supervisore di zona non si limita a verificare che il lavoro venga fatto correttamente: contribuisce a migliorare il livello del personale operativo nel tempo. Attraverso il feedback immediato durante il turno, l'affiancamento sulle procedure più critiche e la segnalazione proattiva delle aree di miglioramento, il supervisore eleva progressivamente la qualità media del reparto — riducendo la frequenza degli errori e abbassando il costo del controllo qualità nel lungo periodo.",
    image: "/images/pages/pulizie-hotel-roma-supervisore-zona-servizio-05.jpg",
  },
  {
    title: "Reportistica strutturata per la direzione",
    body: "Al termine di ogni turno, il supervisore produce un report operativo che documenta: numero di camere ispezionate e risultati, non conformità riscontrate e azioni correttive adottate, criticità gestite durante il turno, stato del personale operativo, segnalazioni tecniche da sottoporre alla manutenzione, anomalie rilevanti da portare all'attenzione della direzione.\n\nNon è un documento burocratico: è uno strumento gestionale che permette al direttore dell'hotel di avere una visione accurata dell'andamento operativo senza dover essere fisicamente presente su ogni piano. È anche la base per le analisi di trend qualitativo nel tempo — identificando pattern ricorrenti che richiedono interventi strutturali invece che correzioni episodiche.",
    image: "/images/pages/pulizie-hotel-roma-supervisore-zona-servizio-06.jpg",
  },
] as const;

const profileBlocks = [
  {
    title: "Anni di esperienza documentata su strutture di categoria",
    body: "I supervisori di zona di Luna Service hanno un track record verificabile su hotel di categoria medio-alta — 4 e 5 stelle, strutture con elevati volumi operativi, hotel di catena con standard internazionali. L'esperienza non è generica: verifichiamo che il candidato abbia ricoperto ruoli di supervisione reale — non di semplice esecuzione — in strutture con un numero significativo di camere e con processi operativi complessi.\n\nUn supervisore che ha lavorato solo in strutture piccole o di bassa categoria non ha necessariamente sviluppato le competenze di gestione della complessità che un hotel di livello richiede. Questa distinzione è il primo filtro nella nostra selezione.",
  },
  {
    title: "Formazione certificata in hotel operations",
    body: "Oltre all'esperienza pratica, i nostri supervisori hanno completato percorsi formativi certificati nelle aree chiave del ruolo: tecniche di controllo qualità alberghiero, gestione del personale in ambienti operativi ad alta pressione, procedure di igiene e sanificazione secondo le normative vigenti, gestione delle non conformità e dei sistemi di reportistica, utilizzo dei principali PMS per il monitoraggio dello stato camere.\n\nLa formazione certificata non sostituisce l'esperienza — la completa. Un supervisore con anni di esperienza e formazione strutturata è significativamente più efficace di uno con la sola esperienza pratica non sistematizzata.",
  },
  {
    title: "Competenze relazionali e di leadership",
    body: "Il supervisore di zona gestisce personale operativo sotto pressione, ospiti insoddisfatti, richieste urgenti dalla reception e imprevisti che richiedono decisioni rapide — spesso contemporaneamente. Le competenze relazionali e di leadership non sono un accessorio del ruolo: sono il nucleo della sua efficacia.\n\nSelezioniamo supervisori che dimostrano capacità di comunicazione chiara con il personale operativo, gestione costruttiva dei conflitti, autorevolezza naturale senza autoritarismo, e la capacità di mantenere il controllo della situazione anche nei momenti di maggiore pressione operativa.",
  },
  {
    title: "Conoscenza delle normative igienico-sanitarie",
    body: "Un supervisore di zona in un hotel a Roma deve conoscere le normative igienico-sanitarie applicabili alle strutture ricettive — in particolare quelle relative alle ASL competenti per territorio — e sapere come documentare i processi operativi in modo che la struttura sia sempre in grado di dimostrare la conformità in caso di ispezione. Questa competenza normativa è parte integrante del profilo che Luna Service seleziona e forma.",
  },
] as const;

const monitoringBlocks = [
  {
    title: "Piano di percorso strutturato",
    body: "Il supervisore non si muove per l'hotel in modo casuale. Opera secondo un piano di percorso definito che garantisce la copertura sistematica di tutta la zona di competenza entro intervalli di tempo prestabiliti. Ogni area viene verificata con una frequenza calibrata sulla sua criticità: le camere in lavorazione vengono monitorate più frequentemente delle aree comuni nelle ore di bassa attività; i corridoi principali vengono controllati più spesso dei depositi di servizio.\n\nQuesto approccio sistematico elimina le zone grigie — le aree che nessuno controlla perché tutti assumono che qualcun altro lo faccia.",
  },
  {
    title: "Checklist operative digitali o cartacee",
    body: "Ogni ispezione viene documentata su checklist operative specifiche per la categoria della struttura. La checklist non è un modulo burocratico: è uno strumento operativo che garantisce che nessun elemento venga saltato per distrazione o fretta. Le non conformità vengono registrate immediatamente, con l'ora e la natura del problema, e collegate all'azione correttiva adottata.\n\nLa documentazione sistematica crea una base dati operativa nel tempo: è possibile identificare quali camere presentano problemi ricorrenti, quali cameriere ai piani hanno bisogno di formazione aggiuntiva su specifici elementi, quali aree dell'hotel tendono a degradarsi più rapidamente e richiedono interventi più frequenti.",
  },
  {
    title: "Comunicazione in tempo reale con il personale operativo",
    body: "Il supervisore di zona mantiene un canale di comunicazione diretto e costante con il personale operativo durante il turno. Non aspetta la fine del turno per comunicare i feedback: interviene immediatamente quando rileva una non conformità, comunica il problema alla persona responsabile in modo diretto e costruttivo, verifica che la correzione sia stata effettuata prima di procedere.\n\nQuesto modello di feedback immediato è significativamente più efficace di quello a posteriori — perché il personale collega direttamente il feedback all'azione che lo ha generato, facilitando l'apprendimento e riducendo la probabilità che lo stesso errore si ripeta.",
  },
  {
    title: "Report di fine turno e analisi dei trend",
    body: "Il report di fine turno è il documento che trasforma l'attività operativa del supervisore in informazione gestionale per la direzione. Non è un semplice registro di quello che è andato storto: è un'analisi strutturata dell'andamento del turno, con indicatori quantitativi — numero di camere ispezionate, percentuale di non conformità, tempi di correzione — e indicatori qualitativi — nature ricorrenti dei problemi, prestazioni del personale, criticità sistemiche.\n\nNel tempo, i report di fine turno diventano una base dati operativa che permette al management dell'hotel di prendere decisioni informate su formazione, organizzazione del personale, investimenti in attrezzature e procedure — invece di reagire agli incidenti quando si presentano.",
  },
] as const;

const valueBlocks = [
  {
    title: "Standard costanti indipendentemente dal personale",
    body: "Il personale di housekeeping cambia. I turni ruotano. I nuovi inserimenti commettono errori. Il supervisore è la variabile costante che garantisce che lo standard non dipenda da chi è in servizio quel giorno, ma dal sistema di controllo che presidia ogni turno.",
  },
  {
    title: "Problemi intercettati prima che diventino recensioni negative",
    body: "Una camera con una macchia sul copriletto che viene rilevata dal supervisore prima del check-in è un problema risolto in tre minuti. La stessa macchia rilevata dall'ospite dopo il check-in è una recensione negativa pubblica che rimane visibile per anni. Il supervisore sposta il momento di rilevazione da dopo l'ospite a prima dell'ospite — e questo cambiamento di timing vale molto più del suo costo.",
  },
  {
    title: "Dati operativi per decisioni informate",
    body: "La reportistica strutturata del supervisore dà al management una visione accurata dell'operatività che non si ottiene camminando per i corridoi una volta al giorno. Percentuali di non conformità per area, tempi medi di correzione, frequenza delle criticità per tipologia: sono dati che permettono di ottimizzare l'organizzazione del reparto sulla base di evidenze, non di percezioni.",
  },
] as const;

const serviceModeBlocks = [
  {
    title: "Supervisione integrata nel servizio Luna Service",
    body: "Per gli hotel che affidano a Luna Service l'intero servizio di pulizie e personale alberghiero, il supervisore di zona è incluso come figura strutturale del contratto. È il referente operativo dedicato che coordina tutte le attività di Luna Service nella struttura — housekeeping, facchinaggio, bellboy — garantendo coerenza e qualità su tutti i fronti. È la figura con cui il direttore dell'hotel ha un unico punto di contatto per tutto ciò che riguarda l'operatività dei servizi affidati.",
  },
  {
    title: "Supervisione come servizio autonomo",
    body: "Per gli hotel che gestiscono internamente parte del personale ma vogliono un presidio di qualità indipendente, Luna Service fornisce il supervisore di zona come servizio autonomo — separato dal contratto di pulizie. In questo caso il supervisore monitora l'operatività complessiva della struttura, che includa personale interno o personale di più fornitori, e risponde direttamente alla direzione dell'hotel con reportistica indipendente.\n\nQuesta configurazione è particolarmente utile per le strutture che vogliono un livello di controllo qualità terzo — non gestito internamente, non delegato al fornitore principale — per avere una visione oggettiva dell'andamento operativo.",
  },
  {
    title: "Supervisione su più strutture dello stesso gruppo",
    body: "Per i gruppi alberghieri con più strutture a Roma o nella provincia metropolitana, Luna Service può fornire un supervisore di zona che opera su più hotel con una rotazione pianificata. Questa configurazione permette di mantenere standard coerenti tra le strutture del gruppo con un costo proporzionato ai volumi, garantendo che ogni hotel riceva il presidio necessario senza dover sostenere il costo di una figura dedicata per ciascuna struttura.",
  },
] as const;

const faqItems = [
  {
    q: "Qual è la differenza tra supervisore di zona e governante d'albergo?",
    a: "La governante coordina il reparto housekeeping: pianifica i turni, assegna le camere al personale, gestisce il magazzino e le forniture, forma i nuovi inserimenti. Il suo scope è specificamente il reparto pulizie. Il supervisore di zona ha uno scope più ampio: presidia la qualità operativa di un'intera area dell'hotel — che include housekeeping ma anche facchinaggio, accoglienza, stato delle aree comuni, coordinamento tra reparti. È una figura di livello superiore che monitora l'esperienza complessiva dell'ospite in una zona della struttura, non solo la qualità delle pulizie.",
  },
  {
    q: "Il supervisore di zona sostituisce la governante?",
    a: "No, sono figure complementari con funzioni diverse. La governante gestisce operativamente il reparto housekeeping dall'interno. Il supervisore di zona monitora la qualità dell'output e presidia il coordinamento tra i reparti dall'esterno. In molte strutture di medie dimensioni le due funzioni vengono coperte dalla stessa persona; nelle strutture di categoria superiore o con volumi elevati le due figure operano in modo distinto e complementare. Luna Service può fornire entrambe separatamente o in combinazione, in base alle esigenze specifiche della struttura.",
  },
  {
    q: "Quante camere può supervisionare efficacemente un supervisore di zona?",
    a: "Dipende dalla complessità della struttura, dalla distribuzione degli spazi e dalla frequenza di rotazione degli ospiti. Come riferimento operativo generale: un supervisore di zona con full-time dedicato è in grado di coprire efficacemente una zona di 40-60 camere con aree comuni. Per strutture più grandi o con più piani, è necessario un piano di copertura con più supervisori o con turni a rotazione. Luna Service dimensiona il servizio sulla struttura specifica durante il sopralluogo.",
  },
  {
    q: "Come viene misurata l'efficacia del supervisore di zona?",
    a: "L'efficacia si misura su più piani: quantitativamente, attraverso la percentuale di non conformità rilevate per turno e i tempi medi di correzione — indicatori che tendono a migliorare nel tempo con un presidio costante; qualitativamente, attraverso l'andamento del rating sulla pulizia sulle piattaforme di booking — che riflette l'esperienza reale degli ospiti; operativamente, attraverso la riduzione delle escalation che raggiungono la direzione — perché i problemi vengono risolti prima di arrivare a quel livello.",
  },
  {
    q: "Il supervisore di zona di Luna Service usa strumenti digitali per il monitoraggio?",
    a: "Sì. I nostri supervisori utilizzano checklist operative digitali su dispositivo mobile per la documentazione delle ispezioni in tempo reale, la comunicazione dello stato camere e la produzione del report di fine turno. Il sistema utilizzato può essere integrato con il PMS dell'hotel su richiesta, per garantire che lo stato delle camere sia sempre aggiornato in modo coerente tra i diversi sistemi della struttura.",
  },
  {
    q: "È possibile richiedere il supervisore di zona solo per i periodi di alta occupazione?",
    a: "Sì. Luna Service può strutturare il servizio su base stagionale o su periodi specifici — alta stagione, eventi, picchi di occupazione — per le strutture che non richiedono un presidio continuativo durante tutto l'anno. Questa configurazione flessibile permette di beneficiare del presidio qualitativo nei momenti in cui è più necessario senza sostenere il costo di una figura full-time nelle fasi di bassa attività.",
  },
] as const;

function HeroSupervisore() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[20px] md:pt-[28px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-[42px]">
                <h1 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.02] tracking-[-0.025em] text-[#fbf9f3]">
                  Supervisore di zona per hotel a Roma: monitoraggio costante, esperienza certificata, standard garantiti
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Il supervisore di zona è la figura che tiene insieme tutti i fili dell&apos;operatività alberghiera. Non
                  controlla il lavoro già fatto: lo monitora mentre accade, interviene in tempo reale e garantisce che
                  ogni reparto — housekeeping, facchinaggio, accoglienza — mantenga gli standard concordati in ogni
                  momento della giornata. Luna Service fornisce agli hotel di Roma supervisori di zona con anni di
                  esperienza documentata su strutture di livello, formazione certificata e la capacità operativa di fare
                  la differenza dove conta.
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
              src="/images/pages/pulizie-hotel-roma-supervisore-zona-hero.jpg"
              alt="Supervisore di zona hotel Roma"
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
        Cos&apos;è un supervisore di zona in un hotel e perché è la figura che protegge la reputazione della struttura
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          In un hotel strutturato, il supervisore di zona è la figura operativa che presidia un&apos;area specifica della
          struttura — un piano, un&apos;ala, un cluster di reparti — con la responsabilità di garantire che tutto ciò che
          accade in quella zona rispetti gli standard della struttura in ogni momento operativo.
        </p>
        <p className="m-0">
          Non è la stessa cosa della governante, anche se le due figure collaborano strettamente. La governante coordina
          il reparto housekeeping: pianifica i turni, assegna le camere, gestisce il magazzino. Il supervisore di zona ha
          uno scope più ampio e una funzione diversa: presidia l&apos;intera esperienza dell&apos;ospite in una zona della
          struttura, monitorando non solo la pulizia delle camere ma la qualità complessiva di ogni punto di contatto —
          corridoi, aree comuni, servizi, personale — con l&apos;obiettivo di intercettare ogni non conformità prima che
          raggiunga l&apos;ospite.
        </p>
        <p className="m-0">
          Il supervisore di zona è, in sostanza, il primo livello di difesa della reputazione dell&apos;hotel. Ogni
          problema che lui intercetta e risolve è un problema che non finirà in una recensione negativa su Booking o
          TripAdvisor. Ogni standard che lui mantiene è un voto in più nella valutazione finale del soggiorno.
        </p>
        <p className="m-0">
          In molti hotel questa funzione viene svolta in modo informale — dalla governante quando riesce, dal direttore
          di piano quando è disponibile, da chiunque sia fisicamente presente quando qualcosa non va. Il risultato è una
          copertura discontinua, con standard che variano a seconda di chi sta guardando e di quanto tempo ha.
        </p>
        <p className="m-0">
          Luna Service fornisce supervisori di zona dedicati, con esperienza certificata su strutture di livello, che
          presidiano la qualità operativa in modo sistematico — non quando qualcuno si ricorda di farlo.
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
        Le responsabilità del supervisore di zona: presidio continuo, intervento immediato, reportistica strutturata
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il supervisore di zona di Luna Service non è una figura di controllo passivo. È una presenza operativa attiva che
        monitora, coordina, interviene e documenta in tempo reale. Ecco il dettaglio delle sue responsabilità.
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
        Il profilo del supervisore di zona di Luna Service: esperienza, formazione e competenze operative
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[14px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Il supervisore di zona è la figura professionale con il profilo più esigente di tutto il personale alberghiero
          operativo. Richiede competenze tecniche specifiche, capacità relazionali avanzate, resistenza allo stress
          operativo e — soprattutto — anni di esperienza concreta su strutture di livello. Non è un ruolo che si può
          ricoprire con esperienza generica nel settore delle pulizie o dell&apos;ospitalità: richiede un percorso
          professionale specifico.
        </p>
        <p className="m-0">
          Luna Service seleziona i propri supervisori di zona con criteri stringenti su tutti questi piani.
        </p>
      </div>
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
            <div className="mt-[12px] space-y-[12px] text-[15px] leading-[1.6] text-[rgba(251,249,243,0.82)]">
              {block.body.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function MonitoringSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Il monitoraggio</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Il sistema di monitoraggio: come il supervisore di zona tiene sotto controllo l&apos;intera operatività
      </h2>
      <p className="m-0 mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il valore del supervisore di zona non si misura solo nelle non conformità che intercetta, ma nel sistema di
        monitoraggio che mette in atto per garantire che il livello operativo rimanga costante nel tempo — non solo nelle
        ispezioni casuali.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {monitoringBlocks.map((block) => (
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

function ValueSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Perché è diverso</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        La differenza tra avere un supervisore di zona e non averlo: cosa cambia nella pratica
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Molti hotel gestiscono la supervisione operativa in modo informale — affidandola alla governante nei ritagli di
          tempo, al direttore di piano quando è disponibile, o semplicemente contando sulla buona volontà del personale
          operativo. È un approccio che funziona finché l&apos;hotel è piccolo, il personale è stabile e i volumi sono
          gestibili.
        </p>
        <p className="m-0">
          Quando uno di questi fattori cambia — quando l&apos;occupazione cresce, quando c&apos;è turnover nel personale,
          quando si apre una nuova ala o si alzano gli standard — il sistema informale comincia a cedere. Lo standard cala
          in modo sottile ma progressivo. Le recensioni sulla pulizia cominciano a scendere di qualche decimo. Gli ospiti
          commentano che &quot;l&apos;hotel era bello ma la pulizia non era al livello del prezzo&quot;. La direzione non
          capisce dove sta il problema perché non ha dati operativi strutturati.
        </p>
        <p className="m-0">
          Un supervisore di zona dedicato è la risposta strutturale a questo problema. Non è un costo aggiuntivo: è un
          presidio che protegge il valore di tutto il resto — della struttura, del brand, delle recensioni, del RevPAR.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {valueBlocks.map((block) => (
          <article key={block.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{block.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{block.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceModeSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Modalità di servizio</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Come strutturiamo il servizio di supervisione di zona per il tuo hotel
      </h2>
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
        Richiedi il servizio di supervisore di zona per il tuo hotel a Roma
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci com&apos;è strutturata attualmente la supervisione operativa del tuo hotel e cosa stai cercando. Ti
        risponderemo con una proposta calibrata sulle tue esigenze entro poche ore.
      </p>
      <LeadFormShell
        source="pulizie-hotel-roma-supervisore-zona"
        className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
          <SelectField
            label="Ruolo*"
            name="ruolo"
            required
            options={["Seleziona…", "Proprietario", "Direttore Generale", "General Manager", "Responsabile operativo", "Altro"]}
          />
          <InputField label="Nome della struttura*" placeholder="Hotel [Nome]" name="nome_struttura" required />
          <SelectField
            label="Categoria hotel*"
            name="categoria"
            required
            options={["Seleziona…", "3 stelle", "4 stelle", "5 stelle", "Boutique", "Hotel di catena", "Altro"]}
          />
          <SelectField
            label="Numero di camere*"
            name="numero_camere"
            required
            options={["Seleziona…", "Fino a 20", "21–50", "51–100", "Oltre 100"]}
          />
          <SelectField
            label="Numero di strutture da supervisionare*"
            name="numero_strutture"
            required
            options={["Seleziona…", "1 struttura", "2–3 strutture", "Oltre 3 strutture"]}
          />
          <SelectField
            label="Tipo di servizio cercato*"
            name="tipo_servizio"
            required
            options={[
              "Seleziona…",
              "Supervisore integrato nel contratto pulizie Luna Service",
              "Supervisore come servizio autonomo e indipendente",
              "Supervisione su più strutture dello stesso gruppo",
              "Sostituzione temporanea del supervisore interno",
              "Non so ancora — vorrei un confronto",
            ]}
          />
          <SelectField
            label="Come viene gestita attualmente la supervisione?"
            name="gestione_supervisione"
            options={[
              "Seleziona…",
              "Dalla governante interna",
              "Dal direttore di piano",
              "Da un supervisore interno dedicato",
              "Non c'è una figura dedicata",
            ]}
          />
          <div className="md:col-span-2">
            <span className="mb-[8px] block text-[13px] font-medium text-[#161714]">Turni da coprire</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceCheckbox name="turni" value="Turno mattina" label="Turno mattina" />
              <ChoiceCheckbox name="turni" value="Turno pomeriggio" label="Turno pomeriggio" />
              <ChoiceCheckbox name="turni" value="Turno serale" label="Turno serale" />
              <ChoiceCheckbox name="turni" value="Copertura continuativa" label="Copertura continuativa" />
            </div>
          </div>
          <InputField
            label="Il sistema di property management usato"
            placeholder="Es. Opera, Protel, Scrigno…"
            name="pms"
          />
          <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." name="zona" required />
          <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          <InputField label="Email*" placeholder="nome@hotel.it" name="email" type="email" required autoComplete="email" />
          <div className="md:col-span-2">
            <TextareaField
              label="Note"
              placeholder="Es. numero di piani da supervisionare, standard specifici della struttura, esigenze di reportistica particolari, problemi operativi che vuoi risolvere…"
              name="note"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <FormSubmitPrimaryButton>Richiedi il preventivo per il supervisore di zona</FormSubmitPrimaryButton>
          <p className="mt-[10px] text-[13px] text-[#3a3b36]">
            Gestiamo sia la sostituzione urgente che la valutazione strutturale del servizio. Dicci la tua situazione — ti
            risponderemo con la soluzione più adatta.
          </p>
        </div>
        <a href={whatsappHref} className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Preferisci un confronto diretto con un nostro responsabile? Scrivici su WhatsApp →
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
          Domande frequenti sul servizio di supervisore di zona per hotel a Roma
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
      <p className="mx-auto mt-[28px] max-w-[920px] text-center text-[15px] leading-[1.6] text-[#3a3b36]">
        Per il coordinamento del reparto housekeeping, vedi anche il{" "}
        <Link href="/pulizie-hotel-roma/governanti/" className="underline text-[#161714]">
          servizio governanti d&apos;albergo
        </Link>
        .
      </p>
    </section>
  );
}

export function SupervisoreZonaHotelRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <PageBreadcrumb items={pageBreadcrumbs["/pulizie-hotel-roma/supervisore-zona/"]} />
      <HeroSupervisore />
      <RoleSection />
      <ResponsibilitiesSection />
      <ProfileSection />
      <MonitoringSection />
      <ValueSection />
      <ServiceModeSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
