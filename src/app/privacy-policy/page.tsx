import Link from "next/link";
import { LegalPageShell } from "@/components/luna/legal/LegalPageShell";
import { createPageMetadata } from "@/lib/metadata";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";
import {
  siteAddressFull,
  siteEmail,
  sitePhoneDisplay,
  siteVat,
} from "@/lib/contact";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Luna Service",
  description:
    "Informativa sul trattamento dei dati personali di Luna Service ai sensi del Regolamento UE 2016/679 (GDPR).",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <LegalPageShell title="Privacy Policy" breadcrumbs={pageBreadcrumbs["/privacy-policy/"]}>
        <p>
          La presente informativa descrive come Luna Service S.r.l. (di seguito anche &quot;Luna Service&quot; o
          &quot;Titolare&quot;) tratta i dati personali degli utenti che visitano il sito{" "}
          <strong>www.lunaservice.it</strong> e che utilizzano i moduli di contatto, in conformità al Regolamento (UE)
          2016/679 (GDPR) e alla normativa italiana applicabile.
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Titolare del trattamento</h2>
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
          Telefono: {sitePhoneDisplay}
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Tipologie di dati trattati</h2>
        <ul className="list-disc space-y-[8px] pl-[20px]">
          <li>
            <strong>Dati di navigazione e tecnici:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine
            visitate, data e ora della richiesta (raccolti tramite strumenti di analisi solo previo consenso).
          </li>
          <li>
            <strong>Dati forniti volontariamente:</strong> nome, email, telefono, messaggio e altre informazioni inserite
            nei moduli di richiesta preventivo o contatto.
          </li>
          <li>
            <strong>Preferenze sui cookie:</strong> scelte espresse tramite il banner cookie (memorizzate in locale sul
            dispositivo).
          </li>
        </ul>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Finalità e base giuridica</h2>
        <ul className="list-disc space-y-[8px] pl-[20px]">
          <li>
            <strong>Gestione richieste di contatto/preventivo</strong> — esecuzione di misure precontrattuali e
            riscontro alle richieste (art. 6.1.b GDPR).
          </li>
          <li>
            <strong>Analisi statistiche del sito</strong> — solo con consenso esplicito (art. 6.1.a GDPR).
          </li>
          <li>
            <strong>Marketing e remarketing</strong> — solo con consenso esplicito (art. 6.1.a GDPR).
          </li>
          <li>
            <strong>Cookie e tecnologie strettamente necessarie</strong> — legittimo interesse / necessità tecnica per
            erogare il servizio richiesto dall&apos;utente.
          </li>
        </ul>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Conservazione</h2>
        <p>
          I dati dei moduli di contatto sono conservati per il tempo necessario a evadere la richiesta e, ove applicabile,
          per gli obblighi di legge. I dati raccolti tramite strumenti di analisi/marketing seguono le tempistiche indicate
          dai rispettivi fornitori e fino alla revoca del consenso.
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Destinatari e trasferimenti</h2>
        <p>
          I dati possono essere trattati da fornitori che supportano l&apos;attività del Titolare (es. hosting, invio
          email, analytics tramite Google Tag Manager / Google Analytics, strumenti pubblicitari Google). Alcuni
          fornitori possono operare al di fuori dello SEE; in tal caso il trasferimento avviene nel rispetto delle
          garanzie previste dal GDPR.
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Diritti dell&apos;interessato</h2>
        <p>
          Puoi esercitare in qualsiasi momento i diritti di accesso, rettifica, cancellazione, limitazione, opposizione,
          portabilità e revoca del consenso scrivendo a{" "}
          <a href={`mailto:${siteEmail}`} className="text-[#161714] underline">
            {siteEmail}
          </a>
          . Hai inoltre diritto di proporre reclamo all&apos;Autorità Garante per la protezione dei dati personali.
        </p>

        <p className="mt-[28px] text-[14px] text-[#6e6f68]">
          Per i dettagli sui cookie e le tecnologie di tracciamento consulta la{" "}
          <Link href="/cookie-policy/" className="text-[#161714] underline">
            Cookie Policy
          </Link>
          .
        </p>
        <p className="text-[14px] text-[#6e6f68]">Ultimo aggiornamento: maggio 2026.</p>
      </LegalPageShell>
    </main>
  );
}
