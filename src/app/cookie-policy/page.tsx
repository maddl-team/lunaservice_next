import Link from "next/link";
import { LegalPageShell } from "@/components/luna/legal/LegalPageShell";
import { createPageMetadata } from "@/lib/metadata";
import { pageBreadcrumbs } from "@/lib/page-breadcrumbs";

export const metadata = createPageMetadata({
  title: "Cookie Policy | Luna Service",
  description:
    "Informazioni su cookie e tecnologie simili utilizzate sul sito Luna Service e su come gestire le preferenze.",
  path: "/cookie-policy/",
});

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[var(--background)] text-[#161714]">
      <LegalPageShell title="Cookie Policy" breadcrumbs={pageBreadcrumbs["/cookie-policy/"]}>
        <p>
          Questa Cookie Policy spiega come Luna Service utilizza cookie e tecnologie simili sul sito{" "}
          <strong>lunaserviceroma.it</strong>. Per il trattamento dei dati personali in generale, consulta anche la{" "}
          <Link href="/privacy-policy/" className="text-[#161714] underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti visitati inviano al browser dell&apos;utente, dove vengono
          memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Tecnologie simili includono
          local storage, pixel e identificatori usati per finalità analoghe.
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Come gestiamo il consenso</h2>
        <p>
          Al primo accesso viene mostrato un banner che consente di accettare, rifiutare o personalizzare le categorie di
          cookie non necessarie. Le preferenze sono memorizzate sul dispositivo (chiavi <code>stcm.consent.*</code>).
          Puoi modificare la scelta in qualsiasi momento tramite l&apos;icona del banner in basso a sinistra.
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Categorie utilizzate</h2>

        <h3 className="mt-[20px] font-serif text-[18px] text-[#161714]">Necessari (sempre attivi)</h3>
        <p>
          Indispensabili per il funzionamento del sito e per ricordare le preferenze sul consenso. Non richiedono
          consenso. Includono tecnologie gestite da Silktide Consent Manager e cookie tecnici del browser.
        </p>

        <h3 className="mt-[20px] font-serif text-[18px] text-[#161714]">Statistici / Analytics (opzionali)</h3>
        <p>
          Ci aiutano a comprendere come i visitatori utilizzano il sito (pagine visitate, interazioni, dati aggregati).
          Sono attivati solo dopo consenso esplicito. Strumenti tipici: Google Tag Manager, Google Analytics 4 (se
          configurati nel container GTM).
        </p>

        <h3 className="mt-[20px] font-serif text-[18px] text-[#161714]">Marketing (opzionali)</h3>
        <p>
          Utilizzati per attività pubblicitarie, remarketing e misurazione delle conversioni. Sono attivati solo dopo
          consenso esplicito. Strumenti tipici: tag Google Ads / remarketing tramite Google Tag Manager.
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Google Tag Manager e Consent Mode</h2>
        <p>
          Il sito utilizza Google Tag Manager con Google Consent Mode v2. Prima della scelta dell&apos;utente, i segnali
          di analytics e advertising restano disattivati; i cookie necessari al funzionamento tecnico restano consentiti.
          Dopo la scelta, i tag configurati in GTM rispettano le categorie accettate.
        </p>

        <h2 className="mt-[28px] font-serif text-[22px] text-[#161714]">Come disabilitare i cookie dal browser</h2>
        <p>
          Puoi configurare il browser per bloccare o cancellare i cookie. La disabilitazione dei cookie necessari può
          compromettere alcune funzionalità del sito, inclusa la memorizzazione delle preferenze sul consenso.
        </p>

        <p className="mt-[28px] text-[14px] text-[#6e6f68]">Ultimo aggiornamento: maggio 2026.</p>
      </LegalPageShell>
    </main>
  );
}
