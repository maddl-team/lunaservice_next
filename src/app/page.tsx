import { LunaBottomSections } from "@/components/luna/LunaBottomSections";
import { LunaHeaderHero } from "@/components/luna/LunaHeaderHero";
import { LunaMiddleSections } from "@/components/luna/LunaMiddleSections";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[#fbf9f3] text-[#161714]">
      <LunaHeaderHero />
      <LunaMiddleSections />
      <LunaBottomSections />
    </main>
  );
}
