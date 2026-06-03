import { LunaBottomSections } from "@/components/luna/LunaBottomSections";
import { LunaHeaderHero } from "@/components/luna/LunaHeaderHero";
import { LunaMiddleSections } from "@/components/luna/LunaMiddleSections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Luna Service — Pulizie professionali per hotel a Roma",
  description:
    "Impresa di pulizie a Roma specializzata in hotel, B&B, case vacanza e condomini. Squadre dedicate, intervento entro 24h, preventivo gratuito.",
  path: "/",
});

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <LunaHeaderHero />
      <LunaMiddleSections />
      <LunaBottomSections />
    </main>
  );
}
