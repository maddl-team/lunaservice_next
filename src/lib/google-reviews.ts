/** Dati aggiornati dalla scheda Google Business «Luna Service | Impresa Pulizie Roma». */
export const googleReviewRating = "5,0";
export const googleReviewCount = 17;

export type GoogleReview = {
  quote: string;
  author: string;
};

export type GoogleReviewCard = GoogleReview & {
  role: string;
  org: string;
  city: string;
};

const allGoogleReviews: GoogleReview[] = [
  {
    quote:
      "Un'esperienza impeccabile. Il personale è stato fantastico, puntuale e gentilissimo, ma a colpire di più è stata la loro meticolosità: pulizia profonda e curata nei minimi particolari. Quando il personale è così qualificato e attento si vede subito. Cinque stelle meritatissime!",
    author: "Stella Savina",
  },
  {
    quote:
      "Servizio impeccabile gestito da ragazzi seri e affidabili. Grande cura del dettaglio ed ottimo rapporto qualità-prezzo. Stra consigliato!",
    author: "Valeria Arnone",
  },
  {
    quote:
      "Servizio eccellente: gentilezza, professionalità e grande attenzione al cliente. Esperienza davvero positiva, consiglio Luna Service Roma senza esitazioni. Super!!!",
    author: "Gelsopi",
  },
  {
    quote:
      "Società seria ed affidabile. Personale qualificato e ben formato. Super consigliati!!",
    author: "Stefania Lustro",
  },
  {
    quote:
      "Personale molto disponibile, ottima capacità di gestire gli imprevisti. Fossero tutti così.",
    author: "Antonio De Santis",
  },
  {
    quote: "Ottimi, puntuali e affidabili li richiamerò sicuramente",
    author: "Lorenzo Maria Curci",
  },
  {
    quote: "Molto attenti e puntigliosi attenti soprattutto ai particolari, grazie.",
    author: "il panino ingegnoso",
  },
  {
    quote: "Personale serio, pulizie ottimali! Consigliato!!!",
    author: "Natalia Martino",
  },
  {
    quote: "Che dire... Cortesia, professionalità ai massimi livelli. Super consigliati!",
    author: "tom tomtom",
  },
];

function toReviewCard(review: GoogleReview): GoogleReviewCard {
  return {
    ...review,
    role: "Cliente",
    org: "Google Reviews",
    city: "Roma",
  };
}

export function formatGoogleReviewAttribution(author: string) {
  return `${author}, Recensione Google, Roma`;
}

/** Tre recensioni in evidenza per homepage e sezioni a card. */
export const featuredGoogleReviewCards: GoogleReviewCard[] = allGoogleReviews
  .slice(0, 3)
  .map(toReviewCard);

/** Tre recensioni per Chi Siamo (set alternativo). */
export const chiSiamoGoogleReviews: GoogleReview[] = allGoogleReviews.slice(0, 3);

/** Tre recensioni per la pagina preventivo hotel. */
export const preventivoGoogleReviews: GoogleReview[] = [
  allGoogleReviews[1],
  allGoogleReviews[5],
  allGoogleReviews[0],
];
