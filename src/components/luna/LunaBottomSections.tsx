"use client";

import Link from "next/link";
import {
  ChoiceRadio,
  FaqItem,
  InputField,
  SectionShell,
  SelectField,
  SiteFooter,
  TextareaField,
} from "@/components/luna/ui";
import { FormSubmitPrimaryButton, LeadFormShell } from "@/components/luna/LeadFormShell";
import { useState } from "react";

const faqs = [
  {
    q: "Quanto costa un'impresa di pulizie per hotel a Roma?",
    a: "Il costo dipende dalla dimensione della struttura, dal numero di camere, dalla frequenza degli interventi e dalla tipologia di servizi richiesti.",
  },
  {
    q: "Conviene davvero esternalizzare le pulizie di un hotel?",
    a: "Sì, nella maggior parte dei casi. L'outsourcing elimina i costi fissi del personale interno e garantisce standard costanti nel tempo.",
  },
  {
    q: "In quanto tempo potete intervenire a Roma?",
    a: "Per i servizi continuativi programmiamo gli interventi in base alle tue esigenze. Per le urgenze — sgrosso post-cantiere, cantine allagate, situazioni straordinarie — siamo in grado di intervenire entro 24 ore su Roma e provincia.",
  },
  {
    q: "Fate pulizie anche per B&B e case vacanza piccole?",
    a: "Sì. Lavoriamo con strutture di tutte le dimensioni, dai grandi hotel a singoli appartamenti su Airbnb o Booking. Per le realtà piccole proponiamo soluzioni flessibili adattate alla rotazione degli ospiti, anche con preavviso breve.",
  },
  {
    q: "Il personale di Luna Service è formato e assicurato?",
    a: "Tutto il nostro personale è formato sulle procedure di pulizia e igienizzazione per ambienti professionali, coperto da assicurazione RC e regolarmente assunto. Prima di ogni intervento viene effettuato un briefing operativo specifico per la struttura.",
  },
];

export function LunaBottomSections() {
  const [open, setOpen] = useState(0);
  const areas = [
    { z: "Roma Centro", n: "38 strutture" },
    { z: "Roma Nord", n: "24 strutture" },
    { z: "Roma Est", n: "19 strutture" },
    { z: "Roma Sud", n: "21 strutture" },
    { z: "Roma Ovest", n: "12 strutture" },
    { z: "Provincia", n: "14 strutture" },
  ];

  return (
    <>
      <SectionShell
        fullBleed
        bgClassName="bg-[#99cc33]"
        innerClassName="rounded-[32px]"
        boxedClassName="px-[16px] md:px-[56px] py-[70px] md:py-[120px]"
      >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] items-start gap-[30px] md:gap-[80px]">
              <div className="md:sticky md:top-[100px]">
                <div className="mb-[28px] inline-flex rounded-[999px] bg-[#1a1f0d] px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#99cc33]">
                  Preventivo
                </div>
                <h2 className="m-0 font-serif text-[32px] md:text-[54px] leading-[1] tracking-[-0.025em] text-[#1a1f0d]">
                  Richiedi il tuo <em className="not-italic">Preventivo gratuito</em>
                </h2>
                <p className="mt-[32px] max-w-[460px] text-[18px] leading-[1.55] text-[#2e3818]">
                  Dicci qualcosa sulla tua struttura e ti risponderemo entro poche ore con una proposta personalizzata. Il
                  sopralluogo è gratuito e senza impegno.
                </p>
                <div className="mt-[40px] rounded-[20px] bg-[#1a1f0d] px-[28px] py-[24px] text-[#99cc33]">
                  <div className="mb-[6px] font-mono text-[11px] uppercase tracking-[0.08em] opacity-70">
                    Tempo medio risposta
                  </div>
                  <div className="font-serif text-[50px] leading-[1] tracking-[-0.02em] text-[#fbf9f3]">2h 14min</div>
                  <div className="mt-[8px] text-[13px] opacity-70">nelle ore lavorative · ultima settimana</div>
                </div>
                <div className="mt-[24px] flex flex-col gap-[12px] text-[15px] text-[#1a1f0d]">
                  <div>
                    📞 <strong>+39 06 0000 0000</strong> · lun-sab 7-20
                  </div>
                  <div>
                    💬 <strong>WhatsApp diretto</strong> · risposta entro 1h
                  </div>
                  <div>
                    ✉ <strong>preventivi@lunaservice.it</strong>
                  </div>
                </div>
              </div>

              <LeadFormShell
                source="homepage-preventivo"
                className="flex flex-col gap-[24px] rounded-[28px] bg-white px-[18px] md:px-[48px] pb-[24px] md:pb-[40px] pt-[24px] md:pt-[48px]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                  <InputField label="Nome e cognome*" placeholder="Mario Rossi" name="nome" required autoComplete="name" />
                  <InputField
                    label="Email*"
                    placeholder="mario@hotel.it"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                  <InputField label="Telefono" placeholder="+39 …" name="telefono" type="tel" autoComplete="tel" />
                  <SelectField
                    label="Tipo di struttura*"
                    name="tipo_struttura"
                    required
                    options={["Seleziona…", "Hotel / Albergo", "B&B", "Casa vacanza", "Affittacamere", "Ostello", "Condominio", "Altro"]}
                  />
                </div>
                <div>
                  <span className="mb-[8px] block text-[13px] font-medium text-[#161714]">Tipo di intervento*</span>
                  <div className="mt-[4px] grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                    {[
                      "Servizio continuativo",
                      "Intervento straordinario",
                      "Sanificazione",
                      "Non so ancora, vorrei un consiglio",
                    ].map((opt, i) => (
                      <ChoiceRadio key={opt} name="tipo_intervento" value={opt} label={opt} defaultChecked={i === 0} />
                    ))}
                  </div>
                </div>
                <TextareaField
                  label="Messaggio / note"
                  placeholder="Descrivici brevemente la tua struttura e cosa ti serve…"
                  name="messaggio"
                />
                <label className="flex cursor-pointer items-start gap-[10px] text-[12.5px] leading-[1.5] text-[#6e6f68]">
                  <input type="checkbox" name="privacy" value="1" required className="mt-[4px]" />
                  <span>
                    Ho letto la{" "}
                    <Link href="/privacy-policy" className="text-[#161714] underline">
                      Privacy Policy
                    </Link>{" "}
                    e acconsento al trattamento dei miei dati personali (GDPR · Reg. UE 2016/679).
                  </span>
                </label>
                <FormSubmitPrimaryButton invert>
                  Invia la richiesta — ti rispondiamo entro poche ore
                  <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#99cc33] text-[13px] text-[#161714]">
                    →
                  </span>
                </FormSubmitPrimaryButton>
              </LeadFormShell>
            </div>
      </SectionShell>

      <section className="bg-[var(--background)] px-[16px] md:px-[56px] py-[90px] md:py-[160px]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[28px] md:gap-[64px]">
          <div>
            <div className="mb-[28px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#3a3b36]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#99cc33]" />
              Aree servite
            </div>
            <h2 className="m-0 font-serif text-[34px] md:text-[54px] leading-[1.04] tracking-[-0.025em]">
              Operiamo su tutta <em className="not-italic">Roma</em> e provincia
            </h2>
            <p className="mt-[32px] max-w-[500px] text-[17px] leading-[1.6] text-[#3a3b36]">
              Luna Service è attiva su Roma nord, Roma centro, Roma est, Roma sud e nella provincia metropolitana.
              Contattaci per verificare la copertura nella tua zona.
            </p>
            <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
              {areas.map((area) => (
                <div key={area.z} className="flex items-center justify-between rounded-[14px] border border-[rgba(0,0,0,0.06)] bg-white px-[18px] py-[14px]">
                  <span className="font-medium">{area.z}</span>
                  <span className="font-mono text-[12px] text-[#6e6f68]">{area.n}</span>
                </div>
              ))}
            </div>
            <a className="mt-[32px] inline-flex cursor-pointer items-center gap-[10px] border-b border-current pb-[4px] text-[14px] text-[#161714]">
              Vedi tutte le aree servite →
            </a>
          </div>
          <div className="relative min-h-[560px] overflow-hidden rounded-[28px] bg-[#161714] p-[32px]">
            <svg viewBox="0 0 400 480" className="block h-full w-full">
              {[60, 120, 180, 220].map((r, i) => (
                <circle
                  key={r}
                  cx="200"
                  cy="240"
                  r={r}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray={i === 1 ? "0" : "2 4"}
                />
              ))}
              <g stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none">
                <path d="M 50 80 Q 200 240 350 400" />
                <path d="M 50 400 Q 200 240 350 80" />
                <line x1="0" y1="240" x2="400" y2="240" strokeOpacity="0.3" />
                <line x1="200" y1="0" x2="200" y2="480" strokeOpacity="0.3" />
              </g>
              <path d="M 140 0 Q 180 120 160 240 Q 130 360 180 480" stroke="#99cc33" strokeOpacity="0.4" strokeWidth="3" fill="none" />
              <circle cx="200" cy="240" r="8" fill="#99cc33" />
              <circle cx="200" cy="240" r="20" fill="none" stroke="#99cc33" strokeOpacity="0.4" />
              <circle cx="200" cy="240" r="32" fill="none" stroke="#99cc33" strokeOpacity="0.2" />
            </svg>
            <div className="absolute bottom-[24px] left-[24px] right-[24px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.45)]">
              <span>FIG. 01 — Copertura territoriale</span>
              <span>Roma metropolitana</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--background)] px-[16px] md:px-[56px] py-[90px] md:py-[160px]">
        <div className="text-center mb-[40px] md:mb-[64px]">
          <div className="mb-[28px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#3a3b36]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#99cc33]" />
            FAQ
          </div>
          <h2 className="m-0 font-serif text-[32px] md:text-[56px] leading-[1] tracking-[-0.025em]">
            Domande frequenti
          </h2>
        </div>
        <div className="mx-auto flex max-w-[920px] flex-col gap-[12px]">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={open === index}
              onToggle={() => setOpen(open === index ? -1 : index)}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
