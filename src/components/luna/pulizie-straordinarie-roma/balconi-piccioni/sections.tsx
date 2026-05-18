"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChoiceChip,
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
  "Intervento con DPI certificati — nessun rischio per gli operatori",
  "Igienizzazione completa dopo la rimozione",
  "Documentazione dell'intervento rilasciata",
  "Copertura su tutta Roma e provincia",
] as const;

const riskItems = [
  {
    title: "Criptococcosi",
    body: "Causata dal fungo Cryptococcus neoformans, presente nel guano di piccione secco. Può colpire le vie respiratorie e, nelle persone immunodepresse o con patologie pregresse, il sistema nervoso centrale. La trasmissione avviene per inalazione delle spore disperse nell'aria durante la manipolazione o la pulizia senza protezioni.",
  },
  {
    title: "Istoplasmosi",
    body: "Causata dal fungo Histoplasma capsulatum, che si sviluppa nei depositi di guano in presenza di umidità. Colpisce le vie respiratorie con sintomi simili all'influenza nelle forme lievi, polmonari nelle forme più gravi. Più frequente in ambienti confinati con accumulo di guano significativo — soffitte, cantine, intercapedini.",
  },
  {
    title: "Psittacosi",
    body: "Causata dal batterio Chlamydophila psittaci, presente nelle feci e nelle secrezioni di piccioni e altri uccelli. Provoca una polmonite atipica trasmissibile per via aerea. La contaminazione avviene per inalazione di materiale essiccato disperso nell'aria.",
  },
] as const;

const processItems = [
  {
    title: "Fase 1 — Valutazione e preparazione",
    body: "Prima dell'intervento il supervisore valuta l'entità del problema: spessore e distribuzione del guano, tipo di superfici, presenza di nidi attivi, rischio di dispersione nelle aree sottostanti. In base a questa valutazione vengono selezionati i DPI appropriati — maschere FFP3, tute monouso, guanti — e i prodotti igienizzanti specifici per le superfici presenti.",
    image: "/images/pages/balconi-piccioni-fase-1.jpg",
  },
  {
    title: "Fase 2 — Umidificazione controllata",
    body: "Prima di qualsiasi operazione di rimozione, il guano secco viene umidificato con una soluzione specifica. Questo passaggio è fondamentale: il guano secco manipolato senza umidificazione preliminare disperde nell'aria le spore fungine che rappresentano il rischio sanitario principale. L'umidificazione controllata riduce drasticamente la dispersione di particelle nell'aria durante le operazioni successive.",
    image: "/images/pages/balconi-piccioni-fase-2.jpg",
  },
  {
    title: "Fase 3 — Rimozione meccanica",
    body: "Dopo l'umidificazione, il guano viene rimosso meccanicamente con strumenti appropriati alle superfici presenti: spatole e raschietti per le superfici dure, spazzole specifiche per le porosità. Il materiale rimosso viene raccolto in contenitori chiusi e smaltito secondo le normative vigenti per i rifiuti biologici.",
    image: "/images/pages/balconi-piccioni-fase-3.jpg",
  },
  {
    title: "Fase 4 — Lavaggio e igienizzazione",
    body: "Dopo la rimozione meccanica, le superfici vengono lavate con prodotti igienizzanti specifici per l'eliminazione degli agenti patogeni residui. Per le superfici porose — cemento, pietra, cotto — viene utilizzata una soluzione igienizzante con adeguato tempo di contatto. La rubinetteria, le ringhiere metalliche e le superfici in ferro vengono trattate con prodotti che neutralizzano l'acidità del guano — uno dei principali agenti di corrosione del ferro.",
    image: "/images/pages/balconi-piccioni-fase-4.jpg",
  },
  {
    title: "Fase 5 — Risciacquo e verifica",
    body: "Le superfici vengono risciacquate abbondantemente per rimuovere ogni residuo di prodotto igienizzante e verificate visivamente dal supervisore. A intervento completato viene rilasciata la documentazione con le operazioni eseguite, i prodotti utilizzati e le superfici trattate.",
    image: "/images/pages/balconi-piccioni-fase-5.jpg",
  },
] as const;

const surfaceItems = [
  {
    title: "Cemento e intonaco",
    body: "L'acidità del guano attacca progressivamente l'intonaco e il cemento dei balconi, causando sgretolamento superficiale e, nel tempo, danni strutturali. Un balcone con accumulo di guano significativo e non trattato per anni può presentare danni all'intonaco che richiedono interventi di ripristino edilizio.",
  },
  {
    title: "Ferro e acciaio delle ringhiere",
    body: "Il guano accelera la corrosione del ferro e dell'acciaio. Le ringhiere di balconi con presenza continuativa di piccioni sviluppano ruggine in tempi molto più rapidi rispetto alla normale esposizione agli agenti atmosferici. La rimozione tempestiva del guano è anche una forma di manutenzione preventiva delle ringhiere.",
  },
  {
    title: "Pietra e materiali lapidei",
    body: "Nelle abitazioni del centro storico di Roma, dove i balconi spesso hanno parapetti in travertino o pietra, il guano causa macchie permanenti e, nel tempo, erosione superficiale. La pietra porosa assorbe l'acidità del guano più rapidamente dei materiali compatti.",
  },
  {
    title: "Pavimentazione del balcone",
    body: "Piastrelle, gres, cotto e pavimentazioni in pietra assorbono il guano nelle porosità naturali del materiale. Strati di guano non rimossi per lungo tempo diventano praticamente indistinguibili dalla superficie sottostante e richiedono prodotti specifici e tecniche meccaniche per essere rimossi senza danneggiare la pavimentazione.",
  },
] as const;

const audienceItems = [
  {
    title: "Privati con balcone o terrazzo",
    body: "Il caso più comune: un balcone che nel tempo ha accumulato guano significativo, reso inagibile dalla presenza dei piccioni o semplicemente in uno stato che rende necessario un intervento professionale. Luna Service interviene su balconi di ogni dimensione, in appartamenti privati su tutta Roma.",
  },
  {
    title: "Condomini e amministratori",
    body: "Le parti comuni degli edifici — cornicioni, davanzali, lastrici solari, androni, scale esterne — sono spesso i siti di accumulo più significativo di guano in un condominio. L'amministratore di condominio può richiedere un intervento professionale sulle parti comuni con documentazione dell'intervento per gli atti condominiali.",
  },
  {
    title: "Hotel e strutture ricettive",
    body: "Per un hotel, un balcone o un terrazzo con guano di piccioni è un problema di immagine oltre che igienico. Luna Service gestisce la pulizia da guano per strutture ricettive a Roma con la stessa struttura operativa dei servizi alberghieri: intervento programmato, documentazione inclusa, nessuna interruzione all'operatività della struttura.",
  },
  {
    title: "Uffici e locali commerciali",
    body: "Uffici con terrazzi, negozi con ingressi su cui i piccioni stazionano abitualmente, ristoranti con aree esterne: il guano su queste superfici ha un impatto diretto sull'immagine dell'attività e sulla percezione di igiene da parte dei clienti.",
  },
] as const;

const faqItems = [
  {
    q: "È pericoloso pulire il guano di piccione da soli?",
    a: "Sì, se non si dispone dei dispositivi di protezione individuale adeguati. Il guano di piccione secco contiene spore fungine — Cryptococcus neoformans e Histoplasma capsulatum — e batteri come Chlamydophila psittaci che possono causare patologie respiratorie serie se inalati durante la pulizia. La manipolazione senza maschere FFP3, tute monouso e guanti espone a un rischio sanitario reale, documentato dalla letteratura medica. La raccomandazione generale delle autorità sanitarie è di affidarsi a operatori professionali con DPI certificati per gli accumuli significativi.",
  },
  {
    q: "Come si rimuove il guano di piccione indurito dalle superfici?",
    a: "Il guano indurito non va rimosso a secco: la manipolazione senza umidificazione preliminare disperde nell'aria le spore fungine. Il processo corretto prevede: umidificazione controllata con soluzione specifica per ammorbidire il guano senza disperdere particelle, rimozione meccanica con strumenti appropriati alla superficie, lavaggio con prodotto igienizzante specifico, risciacquo abbondante. Per i depositi molto vecchi e stratificati possono essere necessari prodotti enzimatici specifici e tempi di contatto prolungati.",
  },
  {
    q: "Il guano di piccione corrode le superfici del balcone?",
    a: "Sì. Il guano di piccione ha un pH fortemente acido — tra 3 e 4 — che attacca progressivamente cemento, intonaco, ferro delle ringhiere, pietra e ceramica. Più a lungo rimane sulle superfici, più danni causa. Un accumulo non trattato per anni può richiedere interventi di ripristino edilizio sulle superfici danneggiate. La rimozione tempestiva è anche una forma di manutenzione preventiva dell'immobile.",
  },
  {
    q: "Quanto costa la pulizia di un balcone da escrementi di piccioni a Roma?",
    a: "Il costo dipende dalla dimensione del balcone o della superficie da trattare, dall'entità dell'accumulo, dal tipo di superfici presenti e dall'accessibilità. Per i balconi di dimensioni standard con accumulo medio, Luna Service è in grado di fornire una stima preliminare già dalla descrizione. Per le situazioni più complesse — accumuli significativi, superfici estese, accessi difficili — effettuiamo un sopralluogo gratuito prima di formulare il preventivo.",
  },
  {
    q: "Dopo la pulizia i piccioni tornano?",
    a: "La pulizia professionale rimuove il guano accumulato e igienizza le superfici, ma non impedisce il ritorno dei piccioni se non vengono installati sistemi di dissuasione fisici — reti, picchi anti-piccione, dissuasori elettrici. Luna Service si occupa della pulizia e dell'igienizzazione. Per i sistemi anti-volatili ti consigliamo di rivolgerti a imprese specializzate in questo tipo di intervento. Al termine della pulizia il nostro supervisore ti segnala le aree a maggior rischio di reinfestazione.",
  },
  {
    q: "Intervenite anche sui cornicioni e sulle parti comuni del condominio?",
    a: "Sì. Luna Service gestisce la pulizia da guano di piccioni anche sulle parti comuni degli edifici — cornicioni, davanzali, lastrici solari, androni, scale esterne — su richiesta dell'amministratore di condominio o dell'assemblea condominiale. Forniamo documentazione dell'intervento per gli atti condominiali.",
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
                  Pulizia balconi e terrazzi da escrementi di piccioni a Roma: non è solo estetica, è salute
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Il guano di piccione accumulato su balconi, terrazzi e superfici esterne non è un problema estetico: è
                  un rischio sanitario documentato. Luna Service gestisce la rimozione professionale degli escrementi di
                  piccioni a Roma con DPI certificati, prodotti igienizzanti specifici e documentazione dell&apos;intervento
                  rilasciata a fine lavoro.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per la pulizia del balcone</PrimaryCtaButton>
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
              src="/images/pages/balconi-piccioni-hero.jpg"
              alt="Pulizia balconi escrementi piccioni Roma"
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

function RiskSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Il rischio sanitario</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Perché il guano di piccione è un rischio sanitario — e perché non va rimosso senza protezioni
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Il guano di piccione secco contiene spore fungine e agenti patogeni che possono causare patologie serie se
          inalati o manipolati senza le protezioni adeguate. Non è una questione di sensibilità: è una questione
          documentata dalla letteratura medica e dalle linee guida delle autorità sanitarie.
        </p>
        <p className="m-0">Le principali patologie associate all&apos;esposizione a escrementi di piccioni secchi sono tre.</p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {riskItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Queste patologie non riguardano solo chi manipola il guano direttamente. Riguardano chiunque sia presente nelle
          vicinanze durante la pulizia senza le protezioni adeguate — vicini di casa, familiari, passanti sotto il balcone.
        </p>
        <p className="m-0">
          La rimozione professionale del guano di piccione non è un servizio di lusso: è la modalità corretta e sicura
          per gestire un problema che, se affrontato in modo improvvisato, espone a rischi sanitari reali.
        </p>
      </div>
    </section>
  );
}

function RomaSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Il problema a Roma</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Roma e i piccioni: un problema strutturale che riguarda migliaia di balconi
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Roma ha una delle popolazioni di piccioni urbani più alte d&apos;Europa. La presenza capillare di questi uccelli in
          ogni quartiere della città — dal centro storico alle periferie — si traduce in un problema di guano su balconi,
          terrazzi, davanzali, cornicioni e superfici esterne che riguarda letteralmente centinaia di migliaia di abitazioni.
        </p>
        <p className="m-0">
          Il problema non è solo la quantità: è la velocità di accumulo. Un balcone con una presenza regolare di piccioni
          può accumulare strati di guano significativi nel giro di poche settimane. Il guano fresco è relativamente facile
          da rimuovere. Il guano secco e stratificato — quello che si accumula per mesi o anni — è una situazione
          completamente diversa: aderisce alle superfici, penetra nelle porosità dei materiali, corrode il cemento e il
          ferro delle ringhiere e richiede un intervento specializzato per essere rimosso senza danneggiare il supporto.
        </p>
        <p className="m-0">
          A Roma la questione piccioni è aggravata dalla conformazione urbanistica: i palazzi storici del centro, con le
          loro cornici, logge e superfici irregolari, offrono siti di nidificazione ideali. Un balcone al secondo piano
          può essere il luogo di sosta e nidificazione di decine di piccioni ogni giorno — con le conseguenze igieniche
          che ne derivano.
        </p>
      </div>
    </SectionShell>
  );
}

function ProcessSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Cosa facciamo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Il nostro intervento di rimozione guano piccioni a Roma: come lavoriamo
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        La rimozione professionale del guano di piccioni non si riduce a spazzare il balcone. È un processo strutturato
        in fasi che garantisce la rimozione completa, l&apos;igienizzazione delle superfici e la sicurezza degli operatori e di
        chi si trova nelle vicinanze.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {processItems.map((item, idx) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white text-[#161714]">
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
            </div>
            <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
              <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(22,23,20,0.48)]">
                <span>№ {String(idx + 1).padStart(2, "0")}</span>
                <span>Fase</span>
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

function SurfacesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Le superfici</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Il guano di piccione corrode le superfici: cosa succede se si aspetta troppo
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Il guano di piccione ha un pH fortemente acido — tra 3 e 4 — che lo rende chimicamente aggressivo verso molti
        materiali da costruzione. Più a lungo rimane sulle superfici, più danni causa.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {surfaceItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Chi ha bisogno del servizio</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Chi richiede la pulizia professionale da guano di piccioni a Roma
      </h2>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {audienceItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PreventionSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Prevenzione</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Dopo la pulizia: come ridurre il ritorno dei piccioni
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Luna Service si occupa della pulizia professionale e dell&apos;igienizzazione. La prevenzione del ritorno dei
          piccioni — attraverso dissuasori, reti, picchi anti-piccione e altri sistemi — è un servizio specializzato che
          non rientra nel nostro ambito operativo e che va affidato a imprese specializzate in sistemi anti-volatili.
        </p>
        <p className="m-0">
          Quello che possiamo fare è segnalarti, al termine dell&apos;intervento, le aree che presentano maggiore rischio di
          reinfestazione — punti di nidificazione, superfici preferenziali di sosta — in modo che tu possa valutare con
          un esperto di sistemi anti-volatili le soluzioni di prevenzione più appropriate.
        </p>
        <p className="m-0">
          Senza sistemi di dissuasione adeguati, la pulizia professionale risolve il problema nell&apos;immediato ma non
          impedisce il ritorno. La combinazione tra pulizia professionale periodica e sistemi di dissuasione fisici è la
          soluzione più efficace nel lungo periodo.
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
        Richiedi il preventivo per la pulizia del tuo balcone a Roma
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci dove si trova il balcone e in che condizioni si trova. Ti risponderemo con una stima preliminare entro poche
        ore.
      </p>
      <form className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" />
          <SelectField
            label="Tipo di struttura*"
            options={[
              "Appartamento privato",
              "Condominio — parti comuni",
              "Hotel / struttura ricettiva",
              "Ufficio / locale commerciale",
              "Altro",
            ]}
          />
          <div className="md:col-span-2">
            <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Tipo di superficie da trattare</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceChip label="Balcone / terrazzo" />
              <ChoiceChip label="Cornicione / davanzale" />
              <ChoiceChip label="Lastrìco solare" />
              <ChoiceChip label="Superfici verticali esterne" />
              <ChoiceChip label="Aree interne contaminate" />
            </div>
          </div>
          <SelectField
            label="Dimensione approssimativa"
            options={["Piccolo — meno di 10 mq", "Medio — da 10 a 30 mq", "Grande — oltre 30 mq", "Non so"]}
          />
          <SelectField
            label="Entità approssimativa del problema"
            options={[
              "Leggero — accumulo recente",
              "Medio — accumulo di qualche mese",
              "Significativo — accumulo di lungo periodo",
              "Non so — serve una valutazione",
            ]}
          />
          <InputField label="Zona di Roma*" placeholder="Es. Prati, EUR, Ostia..." />
          <InputField label="Piano dell'immobile" placeholder="Es. 3° piano" />
          <SelectField
            label="Urgenza*"
            options={[
              "Urgente — entro 24–48 ore",
              "Entro questa settimana",
              "Entro questo mese",
              "Sto raccogliendo informazioni",
            ]}
          />
          <InputField label="Telefono*" placeholder="+39 ..." />
          <InputField label="Email*" placeholder="nome@email.it" />
          <div className="md:col-span-2">
            <TextareaField
              label="Note"
              placeholder="Es. presenza di nidi attivi, accesso al balcone, materiali particolari, situazioni specifiche da segnalare…"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <PrimaryCtaButton>Richiedi il preventivo gratuito</PrimaryCtaButton>
        </div>
        <a href="https://wa.me/" className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Hai un&apos;urgenza? Scrivici subito su WhatsApp →
        </a>
      </form>
      <div className="mt-[18px] text-[14px] text-[#1a1f0d]">
        <Link href="/pulizie-straordinarie-roma/" className="underline">
          /pulizie-straordinarie-roma/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-straordinarie-roma/post-ristrutturazione/" className="underline">
          /pulizie-straordinarie-roma/post-ristrutturazione/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-straordinarie-roma/cantina-allagata/" className="underline">
          /pulizie-straordinarie-roma/cantina-allagata/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-straordinarie-roma/ambienti-degradati/" className="underline">
          /pulizie-straordinarie-roma/ambienti-degradati/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-condominiali-roma/" className="underline">
          /pulizie-condominiali-roma/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-hotel-roma/" className="underline">
          /pulizie-hotel-roma/
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
          Domande frequenti sulla pulizia da escrementi di piccioni a Roma
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

export function PuliziaBalconiPiccioniRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Straordinarie Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizia Balconi Escrementi Piccioni Roma</li>
        </ol>
      </nav>
      <HeroSection />
      <RiskSection />
      <RomaSection />
      <ProcessSection />
      <SurfacesSection />
      <AudienceSection />
      <PreventionSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
