/**
 * Open Graph / Twitter image per route: prima immagine della prima sezione (hero).
 * Pagine senza immagine in hero: fallback semantico al servizio più vicino.
 */
export const pageOgImages = {
  "/": "/images/home-hero.jpg",
  "/pulizie-hotel-roma/": "/images/pages/pulizie-hotel-roma-hero.jpg",
  "/pulizie-hotel-roma/camere/": "/images/pages/pulizie-hotel-roma-camere-hero.jpg",
  "/pulizie-hotel-roma/bagni/": "/images/pages/pulizie-hotel-roma-bagni-hero.jpg",
  "/pulizie-hotel-roma/aree-comuni/": "/images/pages/pulizie-hotel-roma-aree-comuni-hero.jpg",
  "/pulizie-hotel-roma/sanificazione/": "/images/pages/pulizie-hotel-roma-sanificazione-hero.jpg",
  "/pulizie-hotel-roma/facchinaggio/": "/images/pages/pulizie-hotel-roma-facchinaggio-hero.jpg",
  "/pulizie-hotel-roma/governanti/": "/images/pages/pulizie-hotel-roma-governanti-hero.jpg",
  "/pulizie-hotel-roma/bellboy/": "/images/pages/pulizie-hotel-roma-bellboy-hero.jpg",
  "/pulizie-hotel-roma/supervisore-zona/": "/images/pages/pulizie-hotel-roma-supervisore-zona-hero.jpg",
  "/pulizie-hotel-roma/preventivo/": "/images/pages/pulizie-hotel-roma-hero.jpg",
  "/pulizie-strutture-ricettive-roma/": "/images/pages/pulizie-strutture-ricettive-roma-hero.jpg",
  "/pulizie-strutture-ricettive-roma/bb/": "/images/pages/pulizie-strutture-ricettive-roma-bb-hero.jpg",
  "/pulizie-strutture-ricettive-roma/affittacamere/":
    "/images/pages/pulizie-strutture-ricettive-roma-affittacamere-hero.jpg",
  "/pulizie-strutture-ricettive-roma/case-vacanza/":
    "/images/pages/pulizie-strutture-ricettive-roma-case-vacanza-hero.jpg",
  "/pulizie-strutture-ricettive-roma/ostelli/": "/images/pages/pulizie-strutture-ricettive-roma-ostelli-hero.jpg",
  "/pulizie-condominiali-roma/": "/images/pages/pulizie-condominiali-roma-hero.jpg",
  "/pulizie-straordinarie-roma/": "/images/pages/pulizie-straordinarie-roma-hero.jpg",
  "/pulizie-straordinarie-roma/post-ristrutturazione/": "/images/pages/post-ristrutturazione-hero.jpg",
  "/pulizie-straordinarie-roma/balconi-piccioni/": "/images/pages/balconi-piccioni-hero.jpg",
  "/pulizie-straordinarie-roma/cantina-allagata/": "/images/pages/cantina-allagata-hero.jpg",
  "/pulizie-straordinarie-roma/ambienti-degradati/": "/images/pages/ambienti-degradati-hero.jpg",
  "/sanificazione-ambienti-roma/": "/images/pages/sanificazione-ambienti-roma-hero.jpg",
  "/chi-siamo/": "/images/pages/chi-siamo-hero.jpg",
  "/aree-servite/": "/images/pages/aree-servite-hero.jpg",
  "/contatti/": "/images/home-hero.jpg",
} as const satisfies Record<string, string>;

export type PublicPath = keyof typeof pageOgImages;
