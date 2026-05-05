"use client";

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
      <section className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="mx-auto w-[calc(100vw-48px)] rounded-[32px] bg-[#99cc33]">
          <div className="mx-auto w-[1440px] max-w-[1440px] px-[56px] py-[120px]">
            <div className="grid grid-cols-[1fr_1.1fr] items-start gap-[80px]">
              <div className="sticky top-[100px]">
                <div className="mb-[28px] inline-flex rounded-[999px] bg-[#1a1f0d] px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#99cc33]">
                  Preventivo
                </div>
                <h2 className="m-0 font-serif text-[68px] leading-[1] tracking-[-0.025em] text-[#1a1f0d]">
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
                  <div className="font-serif text-[56px] leading-[1] tracking-[-0.02em] text-[#fbf9f3]">2h 14min</div>
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

              <form className="flex flex-col gap-[24px] rounded-[28px] bg-white px-[48px] pb-[40px] pt-[48px]">
                <div className="grid grid-cols-2 gap-[16px]">
                  <div>
                    <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Nome e cognome*</label>
                    <input className="w-full rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-[#fbf9f3] px-[18px] py-[16px] text-[15px]" placeholder="Mario Rossi" />
                  </div>
                  <div>
                    <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Email*</label>
                    <input className="w-full rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-[#fbf9f3] px-[18px] py-[16px] text-[15px]" placeholder="mario@hotel.it" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[16px]">
                  <div>
                    <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Telefono</label>
                    <input className="w-full rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-[#fbf9f3] px-[18px] py-[16px] text-[15px]" placeholder="+39 …" />
                  </div>
                  <div>
                    <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Tipo di struttura*</label>
                    <select className="w-full rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-[#fbf9f3] px-[18px] py-[16px] text-[15px]">
                      <option>Seleziona…</option>
                      <option>Hotel / Albergo</option>
                      <option>B&B</option>
                      <option>Casa vacanza</option>
                      <option>Affittacamere</option>
                      <option>Ostello</option>
                      <option>Condominio</option>
                      <option>Altro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Tipo di intervento*</label>
                  <div className="mt-[4px] grid grid-cols-2 gap-[10px]">
                    {[
                      "Servizio continuativo",
                      "Intervento straordinario",
                      "Sanificazione",
                      "Non so ancora, vorrei un consiglio",
                    ].map((opt, i) => (
                      <label
                        key={opt}
                        className={`flex cursor-pointer items-center gap-[12px] rounded-[14px] px-[16px] py-[14px] text-[14px] ${i === 0 ? "border border-[#1a1f0d] bg-[#1a1f0d] text-[#99cc33]" : "border border-[rgba(0,0,0,0.08)] bg-[#fbf9f3] text-[#161714]"}`}
                      >
                        <span className="inline-flex h-[14px] w-[14px] items-center justify-center rounded-full border border-current">
                          {i === 0 && <span className="h-[6px] w-[6px] rounded-full bg-current" />}
                        </span>
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-[8px] block text-[13px] font-medium text-[#161714]">Messaggio / note</label>
                  <textarea className="min-h-[110px] w-full rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-[#fbf9f3] px-[18px] py-[16px] text-[15px]" placeholder="Descrivici brevemente la tua struttura e cosa ti serve…" />
                </div>
                <div className="flex items-start gap-[10px] text-[12.5px] leading-[1.5] text-[#6e6f68]">
                  <input type="checkbox" className="mt-[4px]" />
                  <span>
                    Ho letto la <a className="text-[#161714] underline">Privacy Policy</a> e acconsento al trattamento dei
                    miei dati personali (GDPR · Reg. UE 2016/679).
                  </span>
                </div>
                <button className="mt-[8px] inline-flex items-center justify-center gap-[12px] rounded-[999px] bg-[#161714] px-[28px] py-[20px] text-[15px] text-[#fbf9f3]">
                  Invia la richiesta — ti rispondiamo entro poche ore
                  <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#99cc33] text-[13px] text-[#161714]">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf9f3] px-[56px] py-[160px]">
        <div className="grid grid-cols-2 items-center gap-[64px]">
          <div>
            <div className="mb-[28px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#3a3b36]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#99cc33]" />
              Aree servite
            </div>
            <h2 className="m-0 font-serif text-[60px] leading-[1.04] tracking-[-0.025em]">
              Operiamo su tutta <em className="not-italic">Roma</em> e provincia
            </h2>
            <p className="mt-[32px] max-w-[500px] text-[17px] leading-[1.6] text-[#3a3b36]">
              Luna Service è attiva su Roma nord, Roma centro, Roma est, Roma sud e nella provincia metropolitana.
              Contattaci per verificare la copertura nella tua zona.
            </p>
            <div className="mt-[40px] grid grid-cols-2 gap-[12px]">
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

      <section className="bg-[#fbf9f3] px-[56px] py-[160px]">
        <div className="mx-auto flex max-w-[920px] flex-col gap-[12px]">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.06)] bg-white">
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-[24px] bg-transparent px-[32px] py-[28px] text-left"
              >
                <h3 className="m-0 font-serif text-[24px] leading-[1.3] tracking-[-0.01em]">{faq.q}</h3>
                <span className={`inline-flex h-[36px] w-[36px] items-center justify-center rounded-full text-[18px] ${open === index ? "bg-[#99cc33]" : "bg-[#fbf9f3]"}`}>
                  {open === index ? "–" : "+"}
                </span>
              </button>
              {open === index && <div className="max-w-[760px] px-[32px] pb-[32px] text-[16px] leading-[1.65] text-[#3a3b36]">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 pb-[24px]">
        <footer className="mx-auto w-[calc(100vw-48px)] rounded-[32px] bg-[#161714] px-[56px] pb-[40px] pt-[80px] text-[#fbf9f3]">
          <div className="mb-[64px] grid grid-cols-[1.4fr_1fr] items-center gap-[60px] rounded-[32px] bg-[#99cc33] px-[56px] py-[64px] text-[#1a1f0d]">
            <h3 className="m-0 font-serif text-[56px] leading-[1] tracking-[-0.025em]">
              Pronto a delegare le pulizie del tuo hotel?
            </h3>
            <div className="flex flex-col items-start gap-[12px]">
              <button className="inline-flex w-fit items-center gap-[10px] rounded-[999px] bg-[#1a1f0d] px-[26px] py-[18px] text-[15px] text-[#99cc33]">
                Richiedi preventivo gratuito
                <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#99cc33] text-[12px] text-[#1a1f0d]">
                  →
                </span>
              </button>
              <button className="rounded-[999px] border border-[#1a1f0d] bg-transparent px-[26px] py-[18px] text-[15px] text-[#1a1f0d]">
                Scrivici su WhatsApp
              </button>
            </div>
          </div>
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-[48px] border-b border-b-[rgba(255,255,255,0.12)] pb-[40px]">
            <div>
              <div className="mb-[20px] flex items-center gap-[10px]">
                <svg width="28" height="28" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="14" fill="#fbf9f3" />
                  <path d="M 16 4 A 12 12 0 0 0 16 28 A 8 12 0 0 1 16 4" fill="#99cc33" />
                </svg>
                <span className="font-serif text-[24px]">Luna Service</span>
              </div>
              <div className="text-[14.5px] leading-[1.65] text-[rgba(251,249,243,0.7)]">
                Impresa di pulizie professionali a Roma, specializzata in hotel, strutture ricettive e condomini.
                <br />
                <br />
                Via [indirizzo], Roma 00100
                <br />
                P.IVA [da inserire]
                <br />
                <br />
                <a className="text-[#99cc33]">preventivi@lunaservice.it</a>
                <br />
                +39 06 0000 0000
              </div>
            </div>
            {[
              {
                t: "Servizi",
                l: [
                  "Pulizie Hotel Roma",
                  "B&B e Affittacamere",
                  "Case Vacanza",
                  "Pulizie Condominiali",
                  "Pulizie Straordinarie",
                  "Sanificazione",
                ],
              },
              { t: "Azienda", l: ["Chi Siamo", "Aree Servite", "Blog / Risorse", "Lavora con Noi", "Contatti"] },
              { t: "Legale", l: ["Privacy Policy", "Cookie Policy", "Note Legali"] },
            ].map((col) => (
              <div key={col.t}>
                <div className="mb-[16px] font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.45)]">
                  {col.t}
                </div>
                <ul className="m-0 flex list-none flex-col gap-[10px] p-0 text-[14.5px]">
                  {col.l.map((item) => (
                    <li key={item} className="cursor-pointer text-[rgba(251,249,243,0.85)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-t-[rgba(255,255,255,0.12)] pt-[28px] text-[12px] text-[rgba(255,255,255,0.5)]">
            <span>© 2026 Luna Service S.r.l. — Tutti i diritti riservati</span>
            <span>Impresa di pulizie professionali · Roma · Italia</span>
          </div>
        </footer>
      </section>
    </>
  );
}
