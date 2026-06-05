import Link from "next/link";
import { LegalPageShell } from "@/components/luna/legal/LegalPageShell";
import { createPageMetadata } from "@/lib/metadata";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import {
  siteAddressFull,
  siteEmail,
  sitePhoneDisplay,
  siteTelHref,
  siteVat,
} from "@/lib/contact";

export const metadata = createPageMetadata({
  title: "Note Legali | Luna Service",
  description: "Informazioni legali, dati societari e note sul sito web di Luna Service.",
  path: "/note-legali/",
});

export default function NoteLegaliPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <LegalPageShell title="Note Legali" breadcrumbs={pageBreadcrumbs["/note-legali/"]}>
        <p>
          Il presente sito web è di proprietà e gestito da <strong>Luna Service S.r.l.</strong>, impresa di pulizie
          professionali con sede operativa a Roma.
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Dati societari</h2>
        <p>
          Luna Service S.r.l.
          <br />
          {siteAddressFull}
          <br />
          P.IVA {siteVat}
          <br />
          Email:{" "}
          <a href={`mailto:${siteEmail}`} className="text-[#161714] underline">
            {siteEmail}
          </a>
          <br />
          Tel:{" "}
          <a href={siteTelHref} className="text-[#161714] underline">
            {sitePhoneDisplay}
          </a>
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Proprietà intellettuale</h2>
        <p>
          Testi, immagini, marchi, loghi e layout del sito sono protetti dalle norme sulla proprietà intellettuale. È
          vietata la riproduzione, anche parziale, senza autorizzazione scritta del titolare.
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Limitazione di responsabilità</h2>
        <p>
          Luna Service si impegna a mantenere aggiornate le informazioni pubblicate sul sito, senza tuttavia garantire
          l&apos;assenza di errori o omissioni. Il titolare non è responsabile per danni derivanti dall&apos;uso del sito
          o da collegamenti a siti di terze parti.
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Collegamenti utili</h2>
        <ul className="list-disc space-y-[8px] pl-[20px]">
          <li>
            <Link href="/privacy-policy/" className="text-[#161714] underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/cookie-policy/" className="text-[#161714] underline">
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link href="/contatti/" className="text-[#161714] underline">
              Contatti
            </Link>
          </li>
        </ul>

        <p className="mt-[28px] text-[14px] text-[#6e6f68]">Ultimo aggiornamento: maggio 2026.</p>
      </LegalPageShell>
    </main>
  );
}
