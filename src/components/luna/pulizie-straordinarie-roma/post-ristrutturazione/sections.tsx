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
  "Intervento entro 48–72 ore dalla richiesta",
  "Attrezzatura professionale per ogni tipo di residuo",
  "Copertura su tutta Roma e provincia",
  "Preventivo gratuito con sopralluogo",
] as const;

const includedItems = [
  {
    title: "Fase 1 — Rimozione residui grossolani",
    body: "La prima fase riguarda la rimozione di tutto ciò che è visibile e voluminoso: detriti, residui di materiali da costruzione, sacchi vuoti, imballaggi, nastro da cantiere, protezioni dei pavimenti. Aspirazione professionale di polvere edile da tutte le superfici — pavimenti, pareti, soffitti, davanzali, infissi — con aspiratori industriali ad alta filtrazione che trattengono le particelle fini senza rimetterle in circolo nell'aria.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
  },
  {
    title: "Fase 2 — Rimozione residui specifici",
    body: "Ogni tipo di residuo post-cantiere richiede il trattamento appropriato. Luna Service gestisce la rimozione di: residui di calce e cemento da piastrelle, pavimenti e sanitari con prodotti acidi diluiti specifici per ogni materiale; silicone in eccesso dai vetri e dagli infissi con tecniche meccaniche e prodotti solventi appropriati; macchie di vernice da pavimenti, superfici e vetri con solventi specifici per il tipo di vernice; residui di adesivo e stucco da pavimenti e pareti; calcare e residui di lavorazione dai sanitari e dalla rubinetteria nuova.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80",
  },
  {
    title: "Fase 3 — Pulizia di finitura",
    body: "Dopo la rimozione dei residui, l'ambiente riceve una pulizia di finitura completa: lavaggio di tutte le superfici con prodotti appropriati al materiale, pulizia a fondo di tutti i vetri e specchi interni ed esterni, pulizia e lucidatura della nuova rubinetteria, pulizia degli interni di armadi e mobili, lavaggio dei pavimenti con prodotto appropriato al materiale — gres porcellanato, marmo, parquet, resina — asciugatura e verifica visiva finale.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1400&q=80",
  },
  {
    title: "Pulizia degli impianti e delle superfici difficili",
    body: "Le ristrutturazioni lasciano residui anche dove non si vede a prima vista: bocchette di ventilazione, griglie dei termosifoni, interruttori e prese elettriche, cornici e modanature, davanzali interni ed esterni, vetri sul lato esterno se accessibili. Luna Service include queste superfici nel protocollo di sgrosso — non le lascia per dopo.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1400&q=80",
  },
] as const;

const materialItems = [
  {
    title: "Gres porcellanato e ceramica",
    body: "Pulizia con prodotti specifici per la rimozione della velatura cementizia — il film bianco che rimane dopo la posa — seguita da lavaggio neutro e asciugatura. Per le fughe, prodotti specifici che rimuovono i residui di stucco senza intaccare il colore.",
  },
  {
    title: "Marmo e pietre naturali",
    body: "Prodotti a pH neutro o leggermente alcalino — mai acidi. Il marmo è sensibile agli acidi e si opacizza in modo permanente. Rimozione dei residui con spatole morbide e prodotti specifici, lavaggio neutro, asciugatura immediata.",
  },
  {
    title: "Parquet e pavimenti in legno",
    body: "Rimozione della polvere edile con aspiratore prima di qualsiasi lavaggio per evitare che le particelle abrasive rigino la superficie. Lavaggio con prodotti specifici per legno a bassissima umidità. Mai acqua in eccesso sul parquet.",
  },
  {
    title: "Resina e pavimenti continui",
    body: "Prodotti neutri, panni morbidi, nessun abrasivo. La resina si graffia facilmente con prodotti o tecniche aggressive. La velatura cementizia sulla resina richiede prodotti specifici e tempi di contatto controllati.",
  },
  {
    title: "Vetri e infissi",
    body: "Rimozione del silicone con tecniche meccaniche — lame specifiche — e prodotti solventi appropriati al tipo di silicone. Pulizia finale con prodotto professionale per vetro senza aloni. Particolare attenzione ai profili degli infissi dove si accumulano residui di sigillante e vernice.",
  },
] as const;

const audienceItems = [
  {
    title: "Privati che hanno ristrutturato casa",
    body: "Hai appena finito di ristrutturare l'appartamento e vuoi tornare ad abitarci il prima possibile — senza passare settimane a togliere la polvere edile da ogni angolo. Lo sgrosso professionale ti restituisce la casa pulita e abitabile in uno o due giorni, senza i rischi di danneggiare i nuovi materiali con prodotti o tecniche inadeguate.",
  },
  {
    title: "Imprese edili e imprese di ristrutturazione",
    body: "Molte imprese edili e di ristrutturazione preferiscono delegare lo sgrosso finale a un'impresa specializzata: è più efficiente, più rapido e garantisce un risultato che il cliente può vedere e apprezzare immediatamente. Luna Service lavora in partnership con imprese edili a Roma per la fase finale dei cantieri residenziali e commerciali.",
  },
  {
    title: "Strutture ricettive post ristrutturazione",
    body: "Hotel, B&B e case vacanza che hanno chiuso per lavori di ristrutturazione devono riaprire in tempi definiti. Lo sgrosso post ristrutturazione per strutture ricettive richiede non solo la pulizia dell'ambiente ma il rispetto degli standard igienici necessari per l'accoglienza degli ospiti. Luna Service gestisce questo tipo di intervento con la stessa struttura operativa dei servizi continuativi alberghieri.",
  },
  {
    title: "Uffici e locali commerciali",
    body: "Uffici, negozi, ristoranti e locali commerciali che hanno subito lavori di ristrutturazione hanno necessità di riaprire rapidamente. Lo sgrosso professionale riduce i tempi di fermo e garantisce che il locale sia presentabile per dipendenti e clienti dal primo giorno di riapertura.",
  },
] as const;

const faqItems = [
  {
    q: "Cos'è lo sgrosso post ristrutturazione?",
    a: "Lo sgrosso post ristrutturazione è un intervento di pulizia professionale specializzato che viene eseguito dopo la conclusione dei lavori edili, prima che l'ambiente torni agibile. Include la rimozione della polvere edile con aspiratori industriali, la rimozione dei residui specifici del cantiere — calce, silicone, vernice, adesivi — e una pulizia di finitura completa di tutte le superfici. È un intervento diverso dalla pulizia ordinaria per attrezzature, prodotti e sequenza operativa.",
  },
  {
    q: "Quanto costa lo sgrosso post ristrutturazione a Roma?",
    a: "Il costo dipende dalla superficie dell'ambiente, dall'entità dei lavori eseguiti, dal tipo di materiali presenti e dalla complessità dei residui da rimuovere. Luna Service non applica tariffe al metro quadro standard perché ogni cantiere è diverso: il preventivo viene formulato dopo la descrizione della situazione o, per gli interventi più complessi, dopo un sopralluogo gratuito.",
  },
  {
    q: "Quanto tempo impiegate a fare lo sgrosso di un appartamento?",
    a: "Come riferimento orientativo: un appartamento fino a 50 mq richiede 4–6 ore con squadra standard. Un appartamento da 100 mq richiede una giornata intera. Per superfici superiori o per cantieri con residui particolarmente complessi i tempi si allungano. Per le situazioni urgenti possiamo organizzare squadre rinforzate per completare il lavoro nei tempi richiesti.",
  },
  {
    q: "Posso fare lo sgrosso da solo o è necessario un professionista?",
    a: "Per superfici piccole con lavori limitati è possibile gestire autonomamente una parte dello sgrosso. Per ristrutturazioni di media ed ampia portata, il fai-da-te comporta rischi concreti: la polvere edile senza aspiratori industriali viene redistribuita nell'aria invece di essere eliminata, i prodotti sbagliati sui nuovi materiali causano danni irreversibili, e i tempi si allungano enormemente. Un intervento professionale è più rapido, più sicuro per i materiali e — tenendo conto del tempo e dei prodotti necessari — spesso più conveniente del previsto.",
  },
  {
    q: "Intervenite anche per ristrutturazioni parziali — solo bagno o solo cucina?",
    a: "Sì. Lo sgrosso professionale non richiede che l'intera abitazione sia stata ristrutturata. Interveniamo anche su singoli ambienti — bagno, cucina, camera — dopo lavori parziali. Il preventivo viene adattato alla superficie e alla complessità dell'intervento specifico.",
  },
  {
    q: "Lavorate anche con imprese edili per la fase finale del cantiere?",
    a: "Sì. Luna Service collabora con imprese edili e imprese di ristrutturazione a Roma per la fase di sgrosso finale dei cantieri residenziali e commerciali. Se sei un'impresa edile interessata a stabilire una collaborazione continuativa, contattaci via WhatsApp o compila il form indicando \"impresa edile\" nel campo tipo di immobile.",
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
                  Sgrosso post ristrutturazione a Roma: i lavori sono finiti, pensiamo noi al resto
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Polvere edile ovunque, residui di calce sulle superfici, silicone sui vetri, vernice sui pavimenti. Dopo
                  una ristrutturazione l&apos;ambiente è irriconoscibile — e tornarlo abitabile richiede un intervento
                  professionale specializzato. Luna Service gestisce lo sgrosso post ristrutturazione a Roma per privati,
                  imprese e strutture ricettive con attrezzatura professionale e un risultato verificato.
                </p>
                <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <PrimaryCtaButton>Richiedi il preventivo per lo sgrosso</PrimaryCtaButton>
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
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
              alt="Sgrosso post ristrutturazione Roma"
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

function ProblemSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Il problema</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Dopo una ristrutturazione, la pulizia ordinaria non basta. Ecco perché.
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          È un errore che molti fanno: pensare che dopo i lavori di ristrutturazione basti una bella pulita per rendere
          l&apos;ambiente di nuovo agibile. La realtà è diversa — e chi l&apos;ha già vissuta lo sa.
        </p>
        <p className="m-0">
          La polvere edile non è polvere normale. È composta da particelle finissime di cemento, gesso, calce e materiali
          da costruzione che si depositano su ogni superficie — dentro gli armadi, nei cassetti, nelle fessure dei
          pavimenti, sulle lampadine, dentro le prese elettriche — e che la scopa e l&apos;aspirapolvere domestico non
          riescono a rimuovere completamente. Senza le attrezzature giuste, la polvere edile viene spostata da una
          superficie all&apos;altra senza essere eliminata davvero.
        </p>
        <p className="m-0">
          I residui di calce sulle piastrelle, il silicone sui vetri, le macchie di vernice sui pavimenti, il cemento
          indurito sui sanitari: ognuno di questi residui richiede un prodotto specifico e una tecnica appropriata. Usare
          il prodotto sbagliato — o la forza fisica invece del prodotto giusto — può causare danni permanenti alle
          superfici appena rinnovate.
        </p>
        <p className="m-0">
          Lo sgrosso post ristrutturazione è un intervento specializzato. Non è pulizia ordinaria più intensa: è un
          processo con fasi definite, attrezzature specifiche e una sequenza operativa che garantisce il risultato senza
          danneggiare i nuovi materiali.
        </p>
        <p className="m-0">
          Luna Service lo esegue a Roma da anni, per privati che hanno appena rinnovato casa, per imprese che hanno
          ristrutturato uffici e negozi e per strutture ricettive che hanno chiuso per lavori e devono riaprire in tempi
          definiti.
        </p>
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Cosa include</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Cosa include lo sgrosso post ristrutturazione di Luna Service
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Lo sgrosso si divide in due fasi principali: la rimozione dei residui grossolani e la pulizia di finitura.
        Entrambe sono necessarie per portare l&apos;ambiente a uno standard davvero abitabile — non solo visivamente
        presentabile.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {includedItems.map((item, idx) => (
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

function MaterialsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>I materiali</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Ogni materiale richiede il trattamento giusto: nessun danno ai nuovi rivestimenti
      </h2>
      <div className="mt-[24px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[#3a3b36]">
        <p className="m-0">
          Uno dei rischi principali dello sgrosso fai-da-te — o affidato a un&apos;impresa non specializzata — è il danno
          ai materiali appena installati. Un prodotto acido troppo concentrato sul marmo nuovo, un abrasivo sul gres
          porcellanato lucidato, un solvente sbagliato sul parquet: danni che costano più dell&apos;intera pulizia.
        </p>
        <p className="m-0">
          Prima di ogni intervento di sgrosso, il supervisore di Luna Service effettua una mappatura dei materiali
          presenti: identifica ogni tipo di pavimento, rivestimento, superficie e infisso e associa il prodotto e la
          tecnica corretti. Nessuna improvvisazione — solo la sequenza giusta con il prodotto giusto.
        </p>
      </div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {materialItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TimingSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Tempistiche</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Quanto tempo richiede lo sgrosso post ristrutturazione?
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          È una delle domande più frequenti — e la risposta onesta è: dipende. Dipende dalla superficie totale,
          dall&apos;entità dei lavori eseguiti, dal tipo di materiali presenti e dallo stato in cui si trova l&apos;ambiente.
        </p>
        <p className="m-0">
          Come riferimento orientativo — non vincolante, perché ogni cantiere è diverso:
        </p>
        <p className="m-0">
          Questi tempi si riferiscono a interventi con squadra standard. Per le situazioni urgenti — strutture che
          devono riaprire in tempi definiti, ristrutturazioni completate a ridosso di un check-in — Luna Service può
          organizzare squadre rinforzate per completare il lavoro nei tempi richiesti.
        </p>
      </div>
    </SectionShell>
  );
}

function AudienceSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Chi ha bisogno dello sgrosso</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Sgrosso post ristrutturazione a Roma: per chi è questo servizio
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
        Richiedi il preventivo per lo sgrosso post ristrutturazione
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#2e3818]">
        Dicci la superficie dell&apos;ambiente e il tipo di lavori eseguiti. Ti risponderemo con una stima preliminare entro
        poche ore — e, se necessario, fisseremo un sopralluogo gratuito.
      </p>
      <form className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" />
          <SelectField
            label="Tipo di immobile*"
            options={[
              "Appartamento residenziale",
              "Ufficio / locale commerciale",
              "Hotel / struttura ricettiva",
              "Negozio / ristorante",
              "Altro",
            ]}
          />
          <SelectField
            label="Superficie approssimativa*"
            options={["Fino a 50 mq", "Da 50 a 100 mq", "Da 100 a 200 mq", "Oltre 200 mq"]}
          />
          <div className="md:col-span-2">
            <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Tipo di lavori eseguiti</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceChip label="Ristrutturazione completa" />
              <ChoiceChip label="Rifacimento pavimenti" />
              <ChoiceChip label="Tinteggiatura / pittura" />
              <ChoiceChip label="Impianti idraulici o elettrici" />
              <ChoiceChip label="Lavori parziali" />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Materiali principali da trattare</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              <ChoiceChip label="Gres porcellanato / ceramica" />
              <ChoiceChip label="Marmo / pietra naturale" />
              <ChoiceChip label="Parquet / legno" />
              <ChoiceChip label="Resina" />
              <ChoiceChip label="Vetri e infissi" />
            </div>
          </div>
          <InputField label="Zona di Roma*" placeholder="Es. EUR, Prati, Ostia..." />
          <SelectField
            label="Quando devono essere pronti gli ambienti?*"
            options={[
              "Urgente — entro 24–48 ore",
              "Entro questa settimana",
              "Entro 2 settimane",
              "Data flessibile",
            ]}
          />
          <InputField label="Telefono*" placeholder="+39 ..." />
          <InputField label="Email*" placeholder="nome@email.it" />
          <div className="md:col-span-2">
            <TextareaField
              label="Note"
              placeholder="Es. piano dell'immobile, presenza di ascensore, tipo di residui particolari, accesso al cantiere…"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <PrimaryCtaButton>Richiedi il preventivo gratuito</PrimaryCtaButton>
        </div>
        <a href="https://wa.me/" className="mt-[10px] inline-flex text-[14px] text-[#161714] underline">
          Hai un&apos;urgenza o la riapertura è imminente? Scrivici subito su WhatsApp →
        </a>
      </form>
      <div className="mt-[18px] text-[14px] text-[#1a1f0d]">
        <Link href="/pulizie-straordinarie-roma/" className="underline">
          /pulizie-straordinarie-roma/
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
        <Link href="/pulizie-straordinarie-roma/ambienti-degradati/" className="underline">
          /pulizie-straordinarie-roma/ambienti-degradati/
        </Link>{" "}
        ·{" "}
        <Link href="/pulizie-hotel-roma/" className="underline">
          /pulizie-hotel-roma/
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
          Domande frequenti sullo sgrosso post ristrutturazione a Roma
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

export function SgrossoPostRistrutturazioneRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Straordinarie Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Sgrosso Post Ristrutturazione Roma</li>
        </ol>
      </nav>
      <HeroSection />
      <ProblemSection />
      <IncludedSection />
      <MaterialsSection />
      <TimingSection />
      <AudienceSection />
      <FormSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
