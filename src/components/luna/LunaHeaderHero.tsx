import Image from "next/image";
import { PrimaryCtaButton, SecondaryCtaButton, StatCard } from "@/components/luna/ui";

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
      <nav className="sticky top-[12px] md:top-[24px] z-20 bg-transparent px-[12px] md:px-[56px] py-[12px] md:py-[24px]">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[180px_1fr_auto] items-center gap-[12px] md:gap-[24px] rounded-[999px] bg-white px-[14px] md:px-[26px] py-[10px] md:py-[12px] pr-[12px] md:pr-[14px] shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_32px_-16px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-[10px]">
            <svg width="26" height="26" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14" fill="#161714" />
              <path d="M 16 4 A 12 12 0 0 0 16 28 A 8 12 0 0 1 16 4" fill="#99cc33" />
            </svg>
            <span className="font-serif text-[18px] md:text-[22px] tracking-[-0.015em]">Luna Service</span>
          </div>
          <ul className="hidden md:flex list-none justify-center gap-[28px] p-0 text-[14px] text-[#3a3b36]">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-[8px]">
            <a className="hidden md:block cursor-pointer px-[14px] text-[13.5px] text-[#3a3b36]">WhatsApp</a>
            <button className="inline-flex cursor-pointer items-center gap-[8px] rounded-[999px] bg-[#161714] px-[14px] md:px-[22px] py-[10px] md:py-[14px] text-[12px] md:text-[14px] text-[#fbf9f3]">
              <span className="hidden md:inline">Richiedi preventivo</span>
              <span className="md:hidden inline">Preventivo</span>
              <span className="inline-flex h-[18px] w-[18px] md:h-[22px] md:w-[22px] items-center justify-center rounded-full bg-[#99cc33] text-[10px] md:text-[11px] text-[#161714]">
                →
              </span>
            </button>
          </div>
        </div>
      </nav>

      <section className="relative left-1/2 w-screen -translate-x-1/2 pb-0 pt-[16px] md:pt-[40px]">
        <div className="relative mx-auto min-h-[620px] md:min-h-[720px] w-[calc(100vw-24px)] md:w-[calc(100vw-48px)] overflow-hidden rounded-[20px] md:rounded-[32px] bg-[#161714]">
          <Image
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2400&q=80"
            alt="Hotel room"
            fill
            className="object-cover"
            sizes="1440px"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.64)_0%,rgba(0,0,0,0.3)_34%,rgba(0,0,0,0.24)_55%,rgba(22,23,20,0.96)_100%)]" />

          <div className="relative mx-auto h-full min-h-[620px] md:min-h-[720px] w-full max-w-[1440px]">
            <div className="flex min-h-[620px] md:min-h-[720px] h-full flex-col justify-between px-[18px] md:px-[56px] pb-[28px] md:pb-[48px] pt-[28px] md:pt-[56px]">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-[10px] rounded-[999px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-[12px] md:px-[16px] py-[6px] md:py-[8px] text-[11px] md:text-[13px] text-white backdrop-blur-[10px]">
                  <span className="h-[8px] w-[8px] rounded-full bg-[#99cc33]" />
                  Disponibili oggi · risposta entro 2h
                </span>
                <span className="hidden md:block font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
                  Roma · Est. 2014
                </span>
              </div>

              <div className="max-w-[1100px]">
                <h1 className="m-0 font-serif text-[40px] sm:text-[52px] md:text-[84px] leading-[0.98] md:leading-[1] tracking-[-0.025em] text-[#fbf9f3]">
                  Impresa di pulizie a Roma specializzata in{" "}
                  <em className="not-italic text-[#99cc33]">hotel</em> e strutture ricettive
                </h1>
                <p className="mt-[18px] md:mt-[32px] max-w-[680px] text-[15px] md:text-[19px] leading-[1.5] md:leading-[1.55] text-[rgba(251,249,243,0.85)]">
                  Gestiamo le pulizie del tuo hotel, B&B o casa vacanza a Roma con squadre dedicate, standard
                  alberghieri certificati e interventi programmati in base ai tuoi check-in. Zero preoccupazioni, zero
                  turn-over da gestire.
                </p>

                <div className="mt-[24px] md:mt-[40px] flex flex-col sm:flex-row gap-[10px] md:gap-[12px]">
                <PrimaryCtaButton>
                    Richiedi il tuo preventivo gratuito
                    <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#161714] text-[13px] text-[#99cc33]">
                      →
                    </span>
                </PrimaryCtaButton>
                <SecondaryCtaButton>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .99 4.32L2 22l5.78-1.97A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                    </svg>
                    Scrivici su WhatsApp
                </SecondaryCtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1440px] px-[12px] md:px-0">
          <div className="relative z-[5] -mt-[8px] md:-mt-[20px] mx-0 md:mx-[32px] grid grid-cols-1 md:grid-cols-4 rounded-[20px] md:rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-[#fbf9f3] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]">
            {[
              { n: "[X]", l: "Strutture servite a Roma", s: "tra hotel, B&B e affitti brevi" },
              { n: "24h", l: "Intervento entro 24h", s: "su urgenze e straordinari" },
              { n: "✓", l: "Personale formato e assicurato", s: "briefing prima di ogni intervento" },
              { n: "0€", l: "Preventivo gratuito senza impegno", s: "sopralluogo gratuito" },
            ].map((stat, idx) => (
              <StatCard key={stat.l} value={stat.n} label={stat.l} sublabel={stat.s} withBorder={idx < 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
