"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BrandLogoMark,
  FaqItem,
  FooterLinkColumn,
  InputField,
  PrimaryCtaButton,
  SectionBadge,
  SectionIntro,
  SectionShell,
  SelectField,
  SiteHeaderPill,
  TextareaField,
} from "@/components/luna/ui";
import { hotelPageContent } from "@/components/luna/pulizie-hotel-roma/content";

export function HotelServiceHero() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[40px] md:pt-[64px]">
      <div className="mt-[24px] rounded-[28px] border border-[rgba(0,0,0,0.08)] bg-white px-[20px] md:px-[34px] py-[24px] md:py-[34px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-[22px] md:gap-[30px] items-stretch">
          <div>
            <SectionBadge>Servizio Hotel</SectionBadge>
            <h1 className="mt-[22px] m-0 font-serif text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.025em] text-[#161714]">
              {hotelPageContent.hero.title}
            </h1>
            <p className="mt-[20px] md:mt-[24px] max-w-[980px] text-[16px] md:text-[19px] leading-[1.55] text-[#3a3b36]">
              {hotelPageContent.hero.subtitle}
            </p>
            <div className="mt-[26px] md:mt-[30px] flex flex-col sm:flex-row gap-[12px]">
              <PrimaryCtaButton>{hotelPageContent.hero.primaryCta}</PrimaryCtaButton>
              <button className="inline-flex items-center justify-center rounded-[999px] border border-[rgba(0,0,0,0.12)] px-[26px] py-[18px] text-[15px] text-[#161714]">
                {hotelPageContent.hero.secondaryCta}
              </button>
            </div>
          </div>
          <div className="relative min-h-[280px] md:min-h-full overflow-hidden rounded-[22px]">
            <Image
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1400&q=80"
              alt="Pulizie professionali in camera hotel"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.35)_100%)]" />
          </div>
        </div>
      </div>
      <div className="mt-[16px] grid grid-cols-1 md:grid-cols-4 gap-[10px] md:gap-0 rounded-[20px] border border-[rgba(0,0,0,0.06)] bg-[#fbf9f3] px-[16px] md:px-[24px] py-[18px]">
        {hotelPageContent.hero.trust.map((item) => (
          <div key={item} className="text-[14px] text-[#161714] flex items-start gap-[8px]">
            <span className="text-[#99cc33] mt-[1px]">✔</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroVariantD() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pt-[40px]">
      <div className="mx-auto w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714] text-[#fbf9f3]">
        <div className="relative min-h-[280px] md:min-h-[520px]">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] md:px-[56px] py-[40px] md:py-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-[42px]">
              <SectionBadge dark>Proposta D · Split Right Image</SectionBadge>
              <h2 className="mt-[18px] m-0 font-serif text-[38px] md:text-[56px] leading-[1.02] tracking-[-0.025em]">
                {hotelPageContent.hero.title}
              </h2>
              <p className="mt-[18px] text-[16px] md:text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                {hotelPageContent.hero.subtitle}
              </p>
              <div className="mt-[24px] flex flex-col sm:flex-row gap-[12px]">
                <PrimaryCtaButton>{hotelPageContent.hero.primaryCta}</PrimaryCtaButton>
                <button className="inline-flex items-center justify-center rounded-[999px] border border-[rgba(255,255,255,0.35)] px-[26px] py-[18px] text-[15px] text-[#fbf9f3]">
                  {hotelPageContent.hero.secondaryCta}
                </button>
              </div>
              </div>
            </div>
          </div>
          <div className="relative md:absolute md:top-0 md:right-0 md:bottom-0 w-full md:w-[50%] min-h-[220px] md:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&q=80"
              alt="Pulizie professionali hotel"
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

function LongCopySection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[100px] md:pt-[140px]">
      <SectionIntro
        badge="Il problema reale"
        title={hotelPageContent.problem.title}
        titleClassName="text-[36px] md:text-[60px] leading-[1.05]"
      />
      <div className="mt-[28px] max-w-[980px] space-y-[18px] text-[17px] leading-[1.7] text-[#3a3b36]">
        {hotelPageContent.problem.paragraphs.map((p) => (
          <p key={p} className="m-0">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function IncludedServicesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[100px] md:pt-[140px]">
      <SectionIntro
        badge="Cosa facciamo"
        title={hotelPageContent.included.title}
        titleClassName="text-[36px] md:text-[60px] leading-[1.05]"
      />
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">{hotelPageContent.included.intro}</p>
      <div className="mt-[28px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {hotelPageContent.included.items.map((item, idx) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <div className="relative h-[180px] overflow-hidden rounded-[16px] mb-[14px]">
              <Image
                src={
                  idx === 0
                    ? "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80"
                    : idx === 1
                      ? "https://images.unsplash.com/photo-1551776235-dde6d482980b?w=1200&q=80"
                      : idx === 2
                        ? "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=1200&q=80"
                        : idx === 3
                          ? "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80"
                          : idx === 4
                            ? "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
                            : "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80"
                }
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="m-0 font-serif text-[28px] leading-[1.1] tracking-[-0.015em]">{item.title}</h3>
            <p className="mt-[14px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
            {item.linkLabel ? (
              <Link href="/pulizie-hotel-roma/sanificazione/" className="mt-[14px] inline-flex text-[14px] text-[#161714] underline">
                {item.linkLabel}
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <SectionShell
      fullBleed
      outerClassName="text-[#fbf9f3] mt-[100px] md:mt-[140px]"
      bgClassName="bg-[#161714]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[70px] md:py-[100px]"
    >
      <SectionIntro
        badge="Il metodo"
        badgeDark
        title={hotelPageContent.method.title}
        titleClassName="text-[34px] md:text-[56px] leading-[1.04]"
      />
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[rgba(251,249,243,0.78)]">{hotelPageContent.method.intro}</p>
      <div className="mt-[28px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {hotelPageContent.method.steps.map((step, idx) => (
          <article key={step.title} className="rounded-[24px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] px-[24px] py-[24px]">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#99cc33]">Step {idx + 1}</div>
            <h3 className="mt-[8px] m-0 font-serif text-[28px] leading-[1.1]">{step.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[rgba(251,249,243,0.78)]">{step.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function ComparisonSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[100px] md:pt-[140px]">
      <SectionIntro
        badge="Confronto"
        title={hotelPageContent.comparison.title}
        titleClassName="text-[34px] md:text-[56px] leading-[1.04]"
      />
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">{hotelPageContent.comparison.intro}</p>
      <div className="mt-[22px] overflow-x-auto rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="border-b border-b-[rgba(0,0,0,0.08)]">
              <th className="text-left p-[16px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#6e6f68]">Voce</th>
              <th className="text-left p-[16px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#6e6f68]">Personale interno</th>
              <th className="text-left p-[16px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#6e6f68]">Outsourcing Luna Service</th>
            </tr>
          </thead>
          <tbody>
            {hotelPageContent.comparison.rows.map((row) => (
              <tr key={row.metric} className="border-b border-b-[rgba(0,0,0,0.06)] last:border-b-0">
                <td className="p-[16px] text-[14px] font-medium text-[#161714]">{row.metric}</td>
                <td className="p-[16px] text-[14px] text-[#3a3b36]">{row.internal}</td>
                <td className="p-[16px] text-[14px] text-[#161714]">{row.outsourcing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function HotelTypesSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[100px] md:pt-[140px]">
      <SectionIntro
        badge="Tipologie di hotel servite"
        title={hotelPageContent.hotelTypes.title}
        titleClassName="text-[34px] md:text-[56px] leading-[1.04]"
      />
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">{hotelPageContent.hotelTypes.intro}</p>
      <div className="mt-[28px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {hotelPageContent.hotelTypes.items.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px]">
            <div className="relative h-[180px] overflow-hidden rounded-[16px] mb-[14px]">
              <Image
                src={
                  item.title.includes("Boutique")
                    ? "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80"
                    : item.title.includes("centro storico")
                      ? "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
                      : "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
                }
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="m-0 font-serif text-[28px] leading-[1.1] tracking-[-0.015em]">{item.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function InternalLinksSection() {
  return (
    <section className="px-[16px] md:px-[56px] pt-[100px] md:pt-[140px]">
      <SectionIntro
        badge="Link alle sottopagine"
        title={hotelPageContent.cluster.title}
        titleClassName="text-[34px] md:text-[56px] leading-[1.04]"
      />
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#3a3b36]">{hotelPageContent.cluster.intro}</p>
      <div className="mt-[28px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {hotelPageContent.cluster.cards.map((card) => (
          <Link key={card.title} href={card.href} className="rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[24px] py-[24px] block">
            <h3 className="m-0 font-serif text-[28px] leading-[1.1] tracking-[-0.015em] text-[#161714]">{card.title}</h3>
            <p className="mt-[12px] m-0 text-[15px] leading-[1.65] text-[#3a3b36]">{card.body}</p>
          </Link>
        ))}
      </div>
      <div className="mt-[28px]">
        <PrimaryCtaButton>{hotelPageContent.cluster.cta}</PrimaryCtaButton>
      </div>
    </section>
  );
}

function HotelQuoteSection() {
  return (
    <SectionShell
      fullBleed
      bgClassName="bg-[#99cc33]"
      innerClassName="rounded-[32px]"
      boxedClassName="px-[16px] md:px-[56px] py-[70px] md:py-[110px]"
      outerClassName="mt-[100px] md:mt-[140px]"
    >
      <SectionIntro
        badge="Form di conversione"
        title={hotelPageContent.form.title}
        titleClassName="text-[34px] md:text-[56px] leading-[1.04] text-[#1a1f0d]"
      />
      <p className="mt-[24px] max-w-[980px] text-[17px] leading-[1.7] text-[#2e3818]">{hotelPageContent.form.intro}</p>
      <form className="mt-[28px] rounded-[28px] bg-white px-[18px] md:px-[40px] py-[24px] md:py-[34px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          <InputField label="Nome e cognome*" placeholder="Mario Rossi" />
          <SelectField label="Ruolo*" options={["Proprietario", "Direttore", "Responsabile Housekeeping", "Altro"]} />
          <InputField label="Nome della struttura*" placeholder="Hotel Roma Centro" />
          <SelectField label="Categoria hotel*" options={["3 stelle", "4 stelle", "5 stelle", "Boutique", "Altro"]} />
          <SelectField label="Numero di camere*" options={["Fino a 20", "21–50", "51–100", "Oltre 100"]} />
          <InputField label="Zona di Roma*" placeholder="Centro storico / Prati / EUR..." />
          <SelectField
            label="Tipo di servizio cercato*"
            options={["Servizio continuativo", "Intervento straordinario", "Sanificazione", "Non so ancora"]}
          />
          <SelectField
            label="Attualmente come gestite le pulizie?"
            options={["Personale interno", "Altra impresa", "Non gestito sistematicamente"]}
          />
        </div>
        <div className="mt-[16px]">
          <TextareaField label="Note aggiuntive" placeholder="Dettagli utili sulla struttura e sul servizio richiesto..." />
        </div>
        <div className="mt-[20px]">
          <PrimaryCtaButton>Richiedi il preventivo gratuito</PrimaryCtaButton>
        </div>
        <Link href="https://wa.me/" className="mt-[14px] inline-flex text-[14px] text-[#161714] underline">
          {hotelPageContent.form.whatsapp}
        </Link>
      </form>
    </SectionShell>
  );
}

function HotelFaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="px-[16px] md:px-[56px] py-[90px] md:py-[140px]">
      <div className="mb-[40px] md:mb-[64px] flex flex-col items-center text-center">
        <div className="mb-[28px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#3a3b36]">
          <span className="h-[6px] w-[6px] rounded-full bg-[#99cc33]" />
          FAQ
        </div>
        <h2 className="m-0 text-center font-serif text-[40px] md:text-[72px] leading-[1] tracking-[-0.025em]">
          {hotelPageContent.faq.title}
        </h2>
      </div>
      <div className="mx-auto max-w-[980px] flex flex-col gap-[12px]">
        {hotelPageContent.faq.items.map((faq, idx) => (
          <FaqItem
            key={faq.q}
            question={faq.q}
            answer={faq.a}
            isOpen={open === idx}
            onToggle={() => setOpen(open === idx ? -1 : idx)}
          />
        ))}
      </div>
    </section>
  );
}

export function HotelPageBody() {
  return (
    <>
      <SiteHeaderPill
        items={[
          { label: "Hotel" },
          { label: "Strutture" },
          { label: "Straordinarie" },
          { label: "Condomini" },
          { label: "Sanificazione" },
          { label: "Chi Siamo" },
          { label: "Contatti" },
        ]}
      />
      <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
        <ol className="flex items-center gap-[8px] text-[13px] text-[#6e6f68]">
          <li>Home</li>
          <li>›</li>
          <li className="text-[#161714]">Pulizie Hotel Roma</li>
        </ol>
      </nav>
      <HeroVariantD />
      <LongCopySection />
      <IncludedServicesSection />
      <MethodSection />
      <ComparisonSection />
      <HotelTypesSection />
      <InternalLinksSection />
      <HotelQuoteSection />
      <HotelFaqSection />
      <section className="relative left-1/2 w-screen -translate-x-1/2 pb-[12px] md:pb-[24px]">
        <footer className="mx-auto w-[calc(100vw-24px)] md:w-[calc(100vw-48px)] rounded-[20px] md:rounded-[32px] bg-[#161714] px-[16px] md:px-[56px] pb-[26px] md:pb-[40px] pt-[30px] md:pt-[80px] text-[#fbf9f3]">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-[24px] md:gap-[48px] border-b border-b-[rgba(255,255,255,0.12)] pb-[26px] md:pb-[40px]">
            <div>
              <div className="mb-[20px] flex items-center gap-[10px]">
                <BrandLogoMark light size={28} />
                <span className="font-serif text-[24px]">Luna Service</span>
              </div>
              <div className="text-[14.5px] leading-[1.65] text-[rgba(251,249,243,0.7)]">
                Impresa di pulizie professionali a Roma, specializzata in hotel, strutture ricettive e condomini.
              </div>
            </div>
            <FooterLinkColumn
              title="Servizi"
              links={[
                "Pulizie Hotel Roma",
                "B&B e Affittacamere",
                "Case Vacanza",
                "Pulizie Condominiali",
                "Pulizie Straordinarie",
                "Sanificazione",
              ]}
            />
            <FooterLinkColumn title="Azienda" links={["Chi Siamo", "Aree Servite", "Blog / Risorse", "Lavora con Noi", "Contatti"]} />
            <FooterLinkColumn title="Legale" links={["Privacy Policy", "Cookie Policy", "Note Legali"]} />
          </div>
          <div className="flex flex-col md:flex-row gap-[6px] md:gap-0 justify-between pt-[20px] md:pt-[28px] text-[11px] md:text-[12px] text-[rgba(255,255,255,0.5)]">
            <span>© 2026 Luna Service S.r.l. — Tutti i diritti riservati</span>
            <span>Impresa di pulizie professionali · Roma · Italia</span>
          </div>
        </footer>
      </section>
    </>
  );
}
