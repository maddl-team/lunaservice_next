/** Config passed to silktideConsentManager.init — ids must stay essential / analytics / marketing. */
export const silktideConsentConfig = {
  backdrop: {
    show: true,
  },
  icon: {
    position: "bottomLeft" as const,
  },
  prompt: {
    position: "bottomCenter" as const,
  },
  consentTypes: [
    {
      id: "essential",
      label: "Necessari",
      description:
        "<p>Questi cookie sono necessari per il corretto funzionamento del sito web e non possono essere disattivati. Servono, ad esempio, a memorizzare le preferenze sul consenso e a garantire funzioni tecniche essenziali.</p>",
      required: true,
    },
    {
      id: "analytics",
      label: "Statistici / Analytics",
      description:
        "<p>Questi cookie ci aiutano a migliorare il sito monitorando quali pagine sono più visitate e come i visitatori si muovono nel sito. Sono attivati solo con il tuo consenso.</p>",
      required: false,
      defaultValue: false,
      gtag: "analytics_storage",
    },
    {
      id: "marketing",
      label: "Marketing",
      description:
        "<p>Questi cookie consentono attività pubblicitarie e di remarketing, anche tramite partner come Google. Sono attivati solo con il tuo consenso.</p>",
      required: false,
      defaultValue: false,
      gtag: ["ad_storage", "ad_user_data", "ad_personalization"],
    },
  ],
  text: {
    prompt: {
      description:
        '<p>Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza, analizzare il traffico e — solo se acconsenti — attività di marketing. Leggi la <a href="/privacy-policy/">Privacy Policy</a> e la <a href="/cookie-policy/">Cookie Policy</a>.</p>',
      acceptAllButtonText: "Accetta",
      acceptAllButtonAccessibleLabel: "Accetta tutti i cookie",
      rejectNonEssentialButtonText: "Rifiuta",
      rejectNonEssentialButtonAccessibleLabel: "Rifiuta i cookie non essenziali",
      preferencesButtonText: "Personalizza",
      preferencesButtonAccessibleLabel: "Apri le preferenze sui cookie",
    },
    preferences: {
      title: "Personalizza le tue preferenze sui cookie",
      description:
        '<p>Rispettiamo il tuo diritto alla privacy. Puoi scegliere quali categorie di cookie consentire. Le preferenze si applicano a tutto il sito. Maggiori informazioni nella <a href="/cookie-policy/">Cookie Policy</a> e nella <a href="/privacy-policy/">Privacy Policy</a>.</p>',
      saveButtonText: "Salva",
      saveButtonAccessibleLabel: "Salva le preferenze sui cookie",
      creditLinkText: "",
      creditLinkAccessibleLabel: "",
    },
  },
};
