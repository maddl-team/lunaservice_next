"use client";

import Link from "next/link";
import { FormSubmitPrimaryButton, LeadFormShell } from "@/components/luna/LeadFormShell";
import { FaqItem, InputField, SectionBadge, SectionShell, SelectField, SiteFooter, SiteHeaderPill, TextareaField } from "@/components/luna/ui";
import { useState } from "react";

const objections = [
  {
    q: '"Non so se il costo dell\'outsourcing sia sostenibile per la mia struttura."',
    a: "Molti albergatori scoprono durante il sopralluogo che il costo dell'outsourcing è inferiore — o equivalente — a quello della gestione interna, una volta calcolati i costi reali: stipendi, contributi, sostituzioni, attrezzature, formazione e supervisione. Il preventivo gratuito esiste proprio per farti vedere i numeri reali, non quelli stimati.",
  },
  {
    q: '"Ho già un\'impresa di pulizie. Perché dovrei cambiare?"',
    a: "Non ti chiediamo di cambiare alla cieca. Ti chiediamo di confrontare. Se l'impresa che hai soddisfa i tuoi standard e i tuoi ospiti non si lamentano mai della pulizia, probabilmente stai già lavorando bene. Se invece c'è qualcosa che non ti convince — puntualità, qualità, comunicazione, flessibilità — il sopralluogo ti darà un termine di paragone concreto.",
  },
  {
    q: '"Quanto tempo richiede il passaggio a Luna Service?"',
    a: "L'onboarding richiede mediamente 7–10 giorni lavorativi dal momento della firma del contratto. In questo periodo formiamo il team sulla tua struttura, definiamo il calendario operativo e stabiliamo i canali di comunicazione con il tuo referente interno.",
  },
  {
    q: '"E se il servizio non rispetta le aspettative?"',
    a: "Ogni contratto con Luna Service include una clausola di verifica qualità. Se dopo i primi 30 giorni il servizio non è al livello concordato, interveniamo senza costi aggiuntivi per correggere. La nostra reputazione dipende dai risultati, non dai contratti firmati.",
  },
];

const testimonials = [
  `"Dopo tre imprese di pulizie in quattro anni, con Luna Service abbiamo finalmente trovato stabilità. Il supervisore dedicato fa la differenza: non devo inseguire nessuno, le cose vengono fatte." — [Nome], Direttore, Hotel [Nome] ★★★★, Roma Centro`,
  `"Il passaggio è stato più rapido di quanto pensassi. In dieci giorni erano operativi e dopo il primo mese ho capito che la scelta era giusta. Le camere sono al livello che i nostri ospiti si aspettano." — [Nome], Proprietario, Boutique Hotel [Nome], Trastevere`,
  `"Gestisco un hotel da 80 camere e avevo paura che esternalizzare fosse troppo complicato. Luna Service ha gestito tutto l'onboarding e oggi ho un referente unico che conosce la mia struttura meglio di alcuni miei dipendenti." — [Nome], General Manager, Hotel [Nome] ★★★★, Prati`,
];

const faqItems = [
  {
    q: "Quanto costa un servizio di pulizia professionale per un hotel a Roma?",
    a: "Il costo del servizio dipende da variabili specifiche della struttura: numero di camere, superficie delle aree comuni, frequenza degli interventi e tipologie di servizio richieste. Luna Service non fornisce prezzi standardizzati perché ogni hotel è diverso. Il modo corretto per avere un numero realistico è il sopralluogo gratuito: dopo la visita, formuliamo un preventivo dettagliato entro 48 ore.",
  },
  {
    q: "Con quanti giorni di preavviso posso richiedere un intervento?",
    a: "Per i servizi continuativi programmiamo gli interventi con almeno una settimana di anticipo, per organizzare il team in modo ottimale. Per le urgenze — sgrosso post-cantiere, emergenze igieniche, picchi imprevisti di occupazione — siamo in grado di intervenire con 24/48 ore di preavviso su Roma e provincia.",
  },
  {
    q: "Posso avere un referente fisso per il mio hotel?",
    a: "Sì. Ogni struttura affidata a Luna Service ha un supervisore dedicato come unico punto di contatto. Non dovrai spiegare le stesse cose a persone diverse ogni volta.",
  },
  {
    q: "Come garantite la qualità degli interventi nel tempo?",
    a: "Utilizziamo checklist operative per ogni tipologia di intervento, verifica a fine lavoro da parte del supervisore e controlli qualità periodici documentati. In caso di non conformità, interveniamo immediatamente senza costi aggiuntivi.",
  },
  {
    q: "Il vostro personale è formato per lavorare negli ambienti alberghieri?",
    a: "Sì. Prima di iniziare qualsiasi collaborazione, il nostro team viene briefato specificamente sulla struttura cliente: materiali, procedure interne, accessi e priorità operative. Tutto il personale è coperto da assicurazione RC e regolarmente assunto.",
  },
  {
    q: "Lavorate anche con hotel in centro storico a Roma?",
    a: "Sì. Operiamo regolarmente nel centro storico, Trastevere, Prati, Termini e in tutte le zone ad alta densità turistica di Roma. Conosciamo le specificità logistiche di queste aree e organizziamo gli interventi di conseguenza.",
  },
];

function MainFormBlock() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[20px] md:pt-[28px]">
      <div className="rounded-[28px] border border-[rgba(0,0,0,0.08)] bg-white px-[18px] md:px-[34px] py-[22px] md:py-[30px]">
        <h1 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.02] tracking-[-0.025em] text-[#161714]">
          Preventivo gratuito per le pulizie del tuo hotel a Roma
        </h1>
        <p className="mt-[16px] md:mt-[20px] max-w-[980px] text-[16px] md:text-[19px] leading-[1.55] text-[#3a3b36]">
          Compila il form. Ti richiamiamo entro poche ore per fissare un sopralluogo gratuito presso la tua struttura.
          Riceverai una proposta dettagliata entro 48 ore — senza impegno, senza costi nascosti.
        </p>
        <LeadFormShell
          source="pulizie-hotel-roma-preventivo"
          className="mt-[20px] md:mt-[24px] rounded-[20px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
        >
          <h2 className="m-0 font-serif text-[26px] md:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#161714]">Raccontaci la tua struttura</h2>
          <div className="mt-[16px] grid grid-cols-1 md:grid-cols-2 gap-[14px]">
            <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
            <SelectField
              label="Ruolo in struttura*"
              name="ruolo"
              required
              options={["Seleziona…", "Proprietario", "Direttore d'albergo", "Responsabile housekeeping", "General manager", "Altro"]}
            />
            <InputField label="Nome della struttura*" placeholder="Hotel [Nome]" name="nome_struttura" required />
            <InputField
              label="Sito web o indirizzo della struttura"
              placeholder="https://... oppure indirizzo"
              name="sito_web_o_indirizzo"
            />
            <SelectField
              label="Categoria*"
              name="categoria"
              required
              options={["Seleziona…", "3 stelle", "4 stelle", "5 stelle", "Boutique / Design hotel", "Aparthotel", "Altro"]}
            />
            <SelectField
              label="Numero di camere*"
              name="numero_camere"
              required
              options={["Seleziona…", "Fino a 20 camere", "Da 21 a 50 camere", "Da 51 a 100 camere", "Oltre 100 camere"]}
            />
            <InputField label="Zona di Roma*" placeholder="Es. Prati, Centro storico, EUR..." name="zona" required />
            <SelectField
              label="Tipo di servizio richiesto*"
              name="tipo_servizio"
              required
              options={[
                "Seleziona…",
                "Servizio continuativo (pulizia quotidiana / ricorrente)",
                "Intervento straordinario una tantum",
                "Sanificazione professionale",
                "Non ho ancora deciso — vorrei un consiglio",
              ]}
            />
            <SelectField
              label="Come gestite attualmente le pulizie?"
              name="gestione_attuale"
              options={[
                "Seleziona…",
                "Personale interno assunto",
                "Altra impresa di pulizie",
                "Non c'è una gestione strutturata",
                "Siamo una struttura nuova",
              ]}
            />
            <SelectField
              label="Quando vorreste iniziare?"
              name="quando_inizio"
              options={["Seleziona…", "Il prima possibile", "Entro 1 mese", "Entro 3 mesi", "Sto solo raccogliendo preventivi"]}
            />
            <InputField label="Email*" placeholder="nome@hotel.it" name="email" type="email" required autoComplete="email" />
            <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
          </div>
          <div className="mt-[14px]">
            <TextareaField
              label="Note o richieste particolari"
              placeholder="Es. materiali particolari, orari preferiti, aree critiche, esigenze specifiche…"
              name="note"
            />
          </div>
          <div className="mt-[16px]">
            <FormSubmitPrimaryButton>Invia la richiesta — ti richiamiamo entro poche ore</FormSubmitPrimaryButton>
            <p className="mt-[10px] text-[13px] text-[#3a3b36]">
              Nessun venditore. Nessuna pressione. Solo una proposta concreta per la tua struttura.
            </p>
            <label className="mt-[12px] flex cursor-pointer items-start gap-[10px] text-[13px] leading-[1.55] text-[#3a3b36]">
              <input type="checkbox" name="privacy" value="1" required className="mt-[3px] h-[16px] w-[16px] shrink-0 accent-[#99cc33]" />
              <span>
                Acconsento al trattamento dei miei dati personali secondo la{" "}
                <Link href="/privacy-policy" className="underline text-[#161714]">
                  Privacy Policy
                </Link>
                . I dati non verranno ceduti a terzi.
              </span>
            </label>
            <a href="https://wa.me/" className="mt-[12px] inline-flex text-[14px] text-[#161714] underline">
              Preferisci parlare subito con noi? Scrivici su WhatsApp →
            </a>
          </div>
        </LeadFormShell>
      </div>
    </section>
  );
}

function ReassuranceSection() {
  const steps = [
    {
      t: "Step 1 — Ti richiamiamo",
      b: "Uno dei nostri responsabili ti contatta telefonicamente entro poche ore dall'invio. Non un call center: una persona che conosce il settore alberghiero e ha già letto quello che ci hai scritto.",
    },
    {
      t: "Step 2 — Sopralluogo gratuito",
      b: "Fissiamo una visita alla tua struttura, a un orario comodo per te. Il sopralluogo dura circa 30–45 minuti e non comporta nessun impegno da parte tua.",
    },
    {
      t: "Step 3 — Proposta dettagliata entro 48 ore",
      b: "Dopo il sopralluogo, ricevi per email una proposta completa: servizi inclusi, frequenze, numero di operatori, orari e costo mensile. Tutto documentato, senza voci ambigue.",
    },
  ];
  return (
    <section className="px-[16px] md:px-[56px] pt-[90px] md:pt-[120px]">
      <SectionBadge>Cosa succede dopo</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#161714]">
        Cosa succede dopo che invii il form
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[#3a3b36]">
        Molti si chiedono cosa succede dopo aver compilato un preventivo online. Nessun mistero: ecco esattamente come funziona.
      </p>
      <div className="mt-[22px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {steps.map((s) => (
          <article key={s.t} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">{s.t}</h3>
            <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{s.b}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ObjectionsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[90px] md:pt-[120px]">
      <SectionBadge>Obiezioni</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#161714]">
        Hai qualche dubbio? Rispondiamo qui.
      </h2>
      <div className="mt-[20px] flex flex-col gap-[14px]">
        {objections.map((o) => (
          <article key={o.q} className="rounded-[20px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.08] tracking-[-0.015em]">{o.q}</h3>
            <p className="mt-[10px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{o.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[90px] md:pt-[120px]">
      <SectionBadge>Social proof</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#161714]">
        Cosa dicono gli albergatori che lavorano con noi
      </h2>
      <div className="mt-[22px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {testimonials.map((t) => (
          <figure key={t} className="m-0 rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] py-[20px]">
            <blockquote className="m-0 font-serif text-[20px] leading-[1.45] tracking-[-0.01em] text-[#161714]">{t}</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <SectionShell
      fullBleed
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[60px] md:py-[90px]"
      outerClassName="mt-[90px] md:mt-[120px]"
    >
      <h2 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Pronto a ricevere il tuo preventivo?
      </h2>
      <p className="mt-[16px] max-w-[980px] text-[17px] leading-[1.65] text-[rgba(251,249,243,0.8)]">
        Se hai già compilato il form qui sopra, ti contatteremo a breve. Se vuoi accelerare i tempi, scrivici direttamente su WhatsApp: siamo operativi tutti i giorni.
      </p>
      <div className="mt-[20px]">
        <a href="https://wa.me/" className="inline-flex items-center justify-center rounded-[999px] bg-[#99cc33] px-[26px] py-[18px] text-[15px] text-[#161714]">
          Scrivici su WhatsApp →
        </a>
      </div>
      <p className="mt-[12px] text-[13px] text-[rgba(251,249,243,0.68)]">
        Luna Service — Impresa di pulizie professionali per hotel a Roma · Preventivo sempre gratuito · Sopralluogo senza impegno
      </p>
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
          Domande frequenti sulle pulizie per hotel a Roma
        </h2>
      </div>
      <div className="mx-auto flex max-w-[920px] flex-col gap-[12px]">
        {faqItems.map((f, idx) => (
          <FaqItem key={f.q} question={f.q} answer={f.a} isOpen={open === idx} onToggle={() => setOpen(open === idx ? -1 : idx)} />
        ))}
      </div>
    </section>
  );
}

export function PreventivoHotelRomaPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li>Pulizie Hotel Roma</li>
          <li>›</li>
          <li className="text-[#161714]">Preventivo</li>
        </ol>
      </nav>
      <MainFormBlock />
      <ReassuranceSection />
      <ObjectionsSection />
      <SocialProofSection />
      <FinalCtaSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}
