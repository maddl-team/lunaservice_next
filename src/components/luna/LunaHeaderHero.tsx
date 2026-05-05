import Image from "next/image";

const navItems = [
  "Hotel",
  "Strutture",
  "Straordinarie",
  "Condomini",
  "Sanificazione",
  "Chi Siamo",
  "Contatti",
];

export function LunaHeaderHero() {
  return (
    <>
      <nav className="sticky top-0 z-10 bg-[#fbf9f3] px-[56px] py-[24px]">
        <div className="grid grid-cols-[180px_1fr_auto] items-center gap-[24px] rounded-[999px] bg-white px-[26px] py-[12px] pr-[14px] shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_32px_-16px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-[10px]">
            <svg width="26" height="26" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14" fill="#161714" />
              <path d="M 16 4 A 12 12 0 0 0 16 28 A 8 12 0 0 1 16 4" fill="#99cc33" />
            </svg>
            <span className="font-serif text-[22px] tracking-[-0.015em]">Luna Service</span>
          </div>
          <ul className="flex list-none justify-center gap-[28px] p-0 text-[14px] text-[#3a3b36]">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-[8px]">
            <a className="cursor-pointer px-[14px] text-[13.5px] text-[#3a3b36]">WhatsApp</a>
            <button className="inline-flex cursor-pointer items-center gap-[8px] rounded-[999px] bg-[#161714] px-[22px] py-[14px] text-[14px] text-[#fbf9f3]">
              Richiedi preventivo
              <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#99cc33] text-[11px] text-[#161714]">
                →
              </span>
            </button>
          </div>
        </div>
      </nav>

      <section className="relative left-1/2 w-screen -translate-x-1/2 pb-0 pt-[40px]">
        <div className="relative mx-auto min-h-[720px] w-[calc(100vw-48px)] overflow-hidden rounded-[32px] bg-[#161714]">
          <Image
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2400&q=80"
            alt="Hotel room"
            fill
            className="object-cover"
            sizes="1440px"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_50%,rgba(22,23,20,0.85)_100%)]" />

          <div className="relative mx-auto h-full min-h-[720px] w-[1440px] max-w-[1440px]">
            <div className="flex min-h-[720px] h-full flex-col justify-between px-[56px] pb-[48px] pt-[56px]">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-[10px] rounded-[999px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-[16px] py-[8px] text-[13px] text-white backdrop-blur-[10px]">
                  <span className="h-[8px] w-[8px] rounded-full bg-[#99cc33]" />
                  Disponibili oggi · risposta entro 2h
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
                  Roma · Est. 2014
                </span>
              </div>

              <div className="max-w-[1100px]">
                <h1 className="m-0 font-serif text-[84px] leading-[1] tracking-[-0.025em] text-[#fbf9f3]">
                  Impresa di pulizie a Roma specializzata in{" "}
                  <em className="not-italic text-[#99cc33]">hotel</em> e strutture ricettive
                </h1>
                <p className="mt-[32px] max-w-[680px] text-[19px] leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Gestiamo le pulizie del tuo hotel, B&B o casa vacanza a Roma con squadre dedicate, standard
                  alberghieri certificati e interventi programmati in base ai tuoi check-in. Zero preoccupazioni, zero
                  turn-over da gestire.
                </p>

                <div className="mt-[40px] flex gap-[12px]">
                  <button className="inline-flex cursor-pointer items-center gap-[12px] rounded-[999px] bg-[#99cc33] px-[28px] py-[20px] text-[15px] text-[#161714]">
                    Richiedi il tuo preventivo gratuito
                    <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#161714] text-[13px] text-[#99cc33]">
                      →
                    </span>
                  </button>
                  <button className="inline-flex cursor-pointer items-center gap-[10px] rounded-[999px] border border-[rgba(255,255,255,0.4)] px-[28px] py-[20px] text-[15px] text-[#fbf9f3]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .99 4.32L2 22l5.78-1.97A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                    </svg>
                    Scrivici su WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-[1440px] max-w-[1440px]">
          <div className="relative z-[5] -mt-[40px] mx-[32px] grid grid-cols-4 rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-[#fbf9f3] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]">
            {[
              { n: "[X]", l: "Strutture servite a Roma", s: "tra hotel, B&B e affitti brevi" },
              { n: "24h", l: "Intervento entro 24h", s: "su urgenze e straordinari" },
              { n: "✓", l: "Personale formato e assicurato", s: "briefing prima di ogni intervento" },
              { n: "0€", l: "Preventivo gratuito senza impegno", s: "sopralluogo gratuito" },
            ].map((stat, idx) => (
              <div
                key={stat.l}
                className={`px-[32px] py-[32px] ${idx < 3 ? "border-r border-r-[rgba(0,0,0,0.08)]" : ""}`}
              >
                <div className="font-serif text-[56px] leading-[1] tracking-[-0.025em] text-[#161714]">{stat.n}</div>
                <div className="mt-[14px] text-[14px] font-medium text-[#161714]">{stat.l}</div>
                <div className="mt-[4px] text-[13px] text-[#6e6f68]">{stat.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
