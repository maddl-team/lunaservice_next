"use client";

import Link from "next/link";
import {
  InputField,
  PrimaryCtaButton,
  SectionShell,
  SelectField,
  SiteFooter,
  SiteHeaderPill,
  TextareaField,
} from "@/components/luna/ui";

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0 fill-[#25D366]">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function HeroSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[20px] md:pt-[28px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
          <h1 className="m-0 max-w-[980px] font-serif text-[26px] md:text-[50px] leading-[1.02] tracking-[-0.025em] text-[#fbf9f3]">
            Contatta Luna Service: ti risponderemo entro poche ore
          </h1>
          <p className="mt-[16px] md:mt-[20px] max-w-[820px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
            Hai una domanda, vuoi un preventivo o hai un&apos;urgenza? Scegli il canale che preferisci. Siamo operativi
            tutti i giorni.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactChannelsSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[64px] md:pt-[96px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[32px]">
        <div className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] md:px-[28px] py-[24px] md:py-[32px]">
          <h2 className="m-0 font-serif text-[26px] md:text-[36px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
            Inviaci un messaggio
          </h2>
          <p className="mt-[14px] m-0 text-[16px] leading-[1.65] text-[#3a3b36]">
            Compila il form con la tua richiesta. Ti risponderemo entro poche ore con la persona giusta per la tua
            esigenza — non con una risposta automatica.
          </p>
          <form className="mt-[22px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
              <InputField label="Nome e cognome*" placeholder="Mario Rossi" />
              <InputField label="Email*" placeholder="nome@email.it" />
              <InputField label="Telefono" placeholder="+39 ..." />
              <SelectField
                label="Tipo di richiesta*"
                options={[
                  "Preventivo per hotel / albergo",
                  "Preventivo per B&B / casa vacanza / affittacamere",
                  "Preventivo per condominio",
                  "Intervento straordinario",
                  "Sanificazione",
                  "Informazioni generali",
                  "Altro",
                ]}
              />
              <div className="md:col-span-2">
                <TextareaField
                  label="Messaggio*"
                  placeholder="Descrivi brevemente la tua struttura e cosa stai cercando…"
                />
              </div>
              <InputField label="Zona di Roma" placeholder="Es. Prati, EUR, Ostia..." />
            </div>
            <div className="mt-[16px]">
              <PrimaryCtaButton>Invia il messaggio</PrimaryCtaButton>
            </div>
            <p className="mt-[12px] m-0 text-[12px] leading-[1.6] text-[#6e6f68]">
              Inviando questo modulo acconsenti al trattamento dei tuoi dati secondo la nostra{" "}
              <Link href="/privacy-policy" className="underline text-[#161714]">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>

        <div className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-[#e4eaf0] px-[20px] md:px-[28px] py-[24px] md:py-[32px]">
          <h2 className="m-0 font-serif text-[26px] md:text-[36px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
            O contattaci direttamente
          </h2>
          <div className="mt-[24px] space-y-[22px] text-[15px] leading-[1.65] text-[#3a3b36]">
            <div>
              <p className="m-0">
                <span className="font-medium text-[#161714]">WhatsApp:</span> Il canale più rapido per qualsiasi
                esigenza — anche urgente.{" "}
                <span className="inline-flex items-center gap-[6px] align-middle">
                  <WhatsAppIcon />
                  <span aria-hidden="true">→</span>
                  <a href="https://wa.me/" className="underline text-[#161714]">
                    [Numero WhatsApp]
                  </a>
                </span>{" "}
                Risposta di solito entro pochi minuti · Operativi tutti i giorni
              </p>
            </div>
            <div>
              <p className="m-0 font-medium text-[#161714]">Telefono</p>
              <p className="mt-[8px] m-0">
                [Numero di telefono] Lun–Ven [orario] · Sab [orario]
              </p>
            </div>
            <div>
              <p className="m-0 font-medium text-[#161714]">Email</p>
              <p className="mt-[8px] m-0">
                [indirizzo email] Per richieste dettagliate o documentazione formale
              </p>
            </div>
            <div>
              <p className="m-0 font-medium text-[#161714]">Sede</p>
              <p className="mt-[8px] m-0">Luna Service [Indirizzo completo], Roma</p>
              <div className="mt-[14px] overflow-hidden rounded-[18px] border border-[rgba(0,0,0,0.08)] bg-[#e8e6df]">
                <iframe
                  title="Mappa Luna Service Roma"
                  src="https://maps.google.com/maps?q=Roma%2C%20Italia&z=12&output=embed"
                  className="h-[220px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div>
              <p className="m-0 font-medium text-[#161714]">Partita IVA</p>
              <p className="mt-[8px] m-0">[numero]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoutingSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="mt-[96px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[64px] md:py-[90px]"
    >
      <h2 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1.04] tracking-[-0.025em] text-[#fbf9f3]">
        La tua richiesta va alla persona giusta
      </h2>
      <div className="mt-[18px] max-w-[980px] space-y-[16px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.82)]">
        <p className="m-0">
          Ogni richiesta che arriva a Luna Service viene gestita dalla persona più adatta — non smistata attraverso un
          centralino. Se hai una richiesta per un hotel, risponde il responsabile del segmento alberghiero. Se hai
          un&apos;urgenza straordinaria, risponde chi gestisce gli interventi urgenti.
        </p>
        <p className="m-0">
          Questo significa che la prima risposta che ricevi è già una risposta utile — non una conferma di ricezione
          seguita da giorni di attesa.
        </p>
      </div>
    </SectionShell>
  );
}

function HoursSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[96px] md:pt-[140px] pb-[96px] md:pb-[140px]">
      <h2 className="m-0 font-serif text-[32px] md:text-[54px] leading-[1.05] tracking-[-0.025em] text-[#161714]">
        Orari di servizio e gestione delle urgenze
      </h2>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        <article className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
          <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">
            Orari standard Lun–Ven: [orario] · Sab: [orario] · Dom: su appuntamento per urgenze
          </h3>
        </article>
        <article className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
          <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-[#161714]">Per le urgenze</h3>
          <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">
            Per allagamenti, emergenze igieniche o situazioni che richiedono intervento immediato, il canale più rapido è
            WhatsApp. Gestiamo le urgenze anche fuori dall&apos;orario standard — verifica la disponibilità scrivendo
            direttamente.
          </p>
        </article>
      </div>
    </section>
  );
}

export function ContattiPageBody() {
  return (
    <>
      <SiteHeaderPill />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li className="text-[#161714]">Contatti</li>
        </ol>
      </nav>
      <HeroSection />
      <ContactChannelsSection />
      <RoutingSection />
      <HoursSection />
      <SiteFooter />
    </>
  );
}
