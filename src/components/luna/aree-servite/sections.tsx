"use client";

import Image from "next/image";
import Link from "next/link";
import {
  InputField,
  PrimaryCtaButton,
  SectionBadge,
  SectionShell,
  SelectField,
  SiteFooter,
  SiteHeaderPill,
} from "@/components/luna/ui";
import { FormSubmitPrimaryButton, LeadFormShell } from "@/components/luna/LeadFormShell";

const zoneItems = [
  {
    title:
      "Roma Centro Storico e zone limitrofe Centro Storico, Trastevere, Prati, Borgo, Testaccio, Aventino, Celio, Esquilino, Monti, Pigneto, Ostiense, Garbatella, Marconi",
    body: "Il centro storico di Roma è l'area con la più alta concentrazione di strutture ricettive della città — hotel storici, boutique hotel, B&B nel cuore della città. Luna Service opera regolarmente in questa zona con operatori che conoscono le specificità logistiche degli edifici storici: accessi limitati, materiali pregiati, orari di consegna rigidi.",
  },
  {
    title:
      "Roma Nord Parioli, Flaminio, Pinciano, Salario, Trieste, Nomentano, Monte Sacro, Talenti, Prima Porta, Labaro, Tomba di Nerone",
    body: "La zona nord di Roma concentra residenze di pregio, uffici direzionali e strutture ricettive di categoria superiore. Luna Service gestisce in questa area sia il servizio alberghiero che le pulizie condominiali per i palazzi residenziali dei quartieri storici.",
  },
  {
    title:
      "Roma Est Tiburtino, Prenestino, Centocelle, Tor Pignattara, Casilino, Torpignattara, Alessandrina, Torre Spaccata, Cinecittà, Don Bosco",
    body: "La zona est di Roma è caratterizzata da una forte presenza residenziale e da un numero crescente di strutture ricettive legate al turismo diffuso. Luna Service copre questa area con servizi condominiali, B&B e case vacanza su Airbnb e Booking.",
  },
  {
    title:
      "Roma Sud EUR, Laurentina, Mostacciano, Mezzocammino, Tor de' Cenci, Acilia, Ostia, Infernetto, Dragona, Spinaceto, Vallerano, Pomezia",
    body: "L'area sud di Roma include l'EUR — con la sua alta concentrazione di uffici e strutture ricettive congressuali — e i quartieri residenziali fino al litorale di Ostia. Luna Service opera regolarmente in tutta questa area con servizi per hotel congressuali, pulizie condominiali e interventi straordinari.",
  },
  {
    title:
      "Roma Ovest Aurelio, Gianicolense, Monteverde, Portuense, Magliana, Trullo, Casetta Mattei, Ottavia, Boccea, Casalotti, Eur-Torrino",
    body: "La zona ovest copre quartieri residenziali consolidati e aree in forte sviluppo immobiliare. Luna Service gestisce in questa area principalmente servizi condominiali, pulizie per strutture ricettive di medie dimensioni e interventi straordinari post-ristrutturazione.",
  },
  {
    title:
      "Provincia di Roma Fiumicino, Ciampino, Frascati, Marino, Albano Laziale, Genzano, Velletri, Tivoli, Guidonia, Monterotondo, Mentana, Anzio, Nettuno, Civitavecchia",
    body: "Luna Service estende il proprio servizio alla provincia metropolitana di Roma per i clienti che operano al di fuori del raccordo anulare. Per la provincia, il servizio è principalmente disponibile per strutture ricettive — hotel, B&B, agriturismo — e per interventi straordinari. Verifica la copertura nella tua zona contattandoci direttamente.",
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
                  Luna Service opera su tutta Roma e provincia: trova la tua zona
                </h1>
                <p className="mt-[16px] md:mt-[20px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Dalla pulizia di hotel nel centro storico agli interventi condominiali in periferia, Luna Service
                  copre tutta Roma metropolitana con squadre distribuite sul territorio. Verifica la copertura nella tua
                  zona e richiedi il preventivo.
                </p>
                <div className="mt-[24px]">
                  <a
                    href="#preventivo-form"
                    className="inline-flex items-center justify-center rounded-[999px] bg-[#99cc33] px-[28px] py-[20px] text-[15px] font-medium text-[#161714]"
                  >
                    Richiedi il preventivo per la tua zona
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:absolute md:top-0 md:right-0 md:bottom-0 w-full md:w-[50%] min-h-[220px] md:min-h-0">
            <Image
              src="/images/pages/aree-servite-hero.jpg"
              alt="Aree servite Luna Service Roma"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.35)_100%)]" />
          </div>
          <div className="hidden md:block absolute inset-0 bg-[linear-gradient(90deg,rgba(22,23,20,0.96)_0%,rgba(22,23,20,0.92)_45%,rgba(22,23,20,0)_62%)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Copertura geografica</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Le zone di Roma coperte dal servizio Luna Service
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        Luna Service è operativa su tutta la città metropolitana di Roma. Per i servizi continuativi — hotel, condomini,
        strutture ricettive — copriamo tutte le zone della città. Per gli interventi straordinari urgenti interveniamo
        entro 24–48 ore su Roma e provincia.
      </p>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {zoneItems.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyLocationSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <SectionBadge dark>Perché la localizzazione conta</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        Conoscere Roma zona per zona: perché è importante per un servizio di pulizie
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Un&apos;impresa di pulizie che conosce Roma sa che lavorare in un palazzo del centro storico non è come lavorare
          in un condominio degli anni &apos;80 all&apos;EUR. Sa che gli orari di accesso in ZTL hanno un impatto
          sull&apos;organizzazione degli interventi. Sa che il Trastevere alle otto di mattina ha dinamiche logistiche
          completamente diverse da Prati alla stessa ora.
        </p>
        <p className="m-0">
          Questa conoscenza geografica non è un dettaglio operativo: è la differenza tra un servizio che funziona davvero e
          uno che funziona sulla carta.
        </p>
        <p className="m-0">
          Luna Service ha operatori distribuiti sul territorio di Roma — non concentrati in un&apos;unica sede che
          raggiunge ogni zona con tempi variabili. Questo ci permette di garantire puntualità e flessibilità anche nelle
          zone con traffico intenso o con accessi particolari.
        </p>
      </div>
    </SectionShell>
  );
}

function VerifyCoverageSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px]">
      <SectionBadge>Verifica copertura</SectionBadge>
      <h2 className="mt-[18px] m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Non trovi la tua zona? Contattaci comunque
      </h2>
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">
        L&apos;elenco delle zone coperte non è esaustivo: Roma è una città vasta e la nostra copertura si aggiorna
        continuamente. Se la tua struttura si trova in una zona non esplicitamente indicata, contattaci comunque —
        verificheremo la disponibilità del servizio nella tua area specifica.
      </p>
      <Link href="/contatti/" className="mt-[20px] inline-flex text-[16px] text-[#161714] underline">
        Verifica la copertura nella tua zona
      </Link>
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
          Richiedi il preventivo per la tua zona
        </h2>
        <LeadFormShell
          source="aree-servite"
          className="mt-[22px] rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-[16px] md:px-[24px] py-[18px] md:py-[24px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
            <InputField label="Nome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
            <InputField label="Zona o indirizzo*" placeholder="Es. Prati, EUR, Ostia..." name="zona" required />
            <SelectField
              label="Tipo di servizio"
              name="tipo_servizio"
              options={["Hotel", "B&B", "Casa vacanza", "Condominio", "Straordinario", "Altro"]}
            />
            <InputField label="Telefono*" placeholder="+39 ..." name="telefono" type="tel" required autoComplete="tel" />
            <InputField
              label="Email*"
              placeholder="nome@email.it"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div className="mt-[16px]">
            <FormSubmitPrimaryButton invert>Verifica la copertura e richiedi il preventivo</FormSubmitPrimaryButton>
          </div>
        </LeadFormShell>
      </SectionShell>
    </div>
  );
}

export function AreeServitePageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li className="text-[#161714]">Aree Servite</li>
        </ol>
      </nav>
      <HeroSection />
      <CoverageSection />
      <WhyLocationSection />
      <VerifyCoverageSection />
      <FormSection />
      <SiteFooter />
    </>
  );
}
