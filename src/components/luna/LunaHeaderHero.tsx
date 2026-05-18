import Image from "next/image";
import { PrimaryCtaButton, SecondaryCtaButton, SiteHeaderPill, TrustStatsStrip } from "@/components/luna/ui";

export function LunaHeaderHero() {
  return (
    <>
      <SiteHeaderPill />

      <section className="relative left-1/2 w-screen -translate-x-1/2 pb-0 pt-[16px] md:pt-[40px]">
        <div className="relative mx-auto min-h-[620px] md:min-h-[720px] w-[calc(100vw-24px)] md:w-[calc(100vw-48px)] overflow-hidden rounded-[20px] md:rounded-[32px] bg-[#161714]">
          <Image
            src="/images/home-hero.jpg"
            alt="Camera d'hotel impeccabile dopo le pulizie professionali"
            fill
            className="object-cover object-[center_42%]"
            sizes="(max-width: 768px) 100vw, 1440px"
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
                <h1 className="m-0 font-serif text-[36px] sm:text-[48px] md:text-[76px] leading-[0.98] md:leading-[1] tracking-[-0.025em] text-[#fbf9f3]">
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
          <TrustStatsStrip
            items={[
              { value: "[X]", label: "Strutture servite a Roma", sublabel: "tra hotel, B&B e affitti brevi" },
              { value: "24h", label: "Intervento entro 24h", sublabel: "su urgenze e straordinari" },
              { value: "✓", label: "Personale formato e assicurato", sublabel: "briefing prima di ogni intervento" },
              { value: "0€", label: "Preventivo gratuito senza impegno", sublabel: "sopralluogo gratuito" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
