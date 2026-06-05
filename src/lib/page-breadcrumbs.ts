import type { BreadcrumbItem } from "@/lib/breadcrumbs";

const home: BreadcrumbItem = { label: "Home", href: "/" };

const hotelHub: BreadcrumbItem = { label: "Pulizie Hotel Roma", href: "/pulizie-hotel-roma/" };
const struttureHub: BreadcrumbItem = {
  label: "Pulizie Strutture Ricettive Roma",
  href: "/pulizie-strutture-ricettive-roma/",
};
const straordinarieHub: BreadcrumbItem = {
  label: "Pulizie Straordinarie Roma",
  href: "/pulizie-straordinarie-roma/",
};

/** Breadcrumb trails keyed by canonical path (trailing slash). */
export const pageBreadcrumbs = {
  "/pulizie-hotel-roma/": [home, hotelHub],
  "/pulizie-hotel-roma/camere/": [home, hotelHub, { label: "Pulizie Camere Hotel Roma", href: "/pulizie-hotel-roma/camere/" }],
  "/pulizie-hotel-roma/bagni/": [home, hotelHub, { label: "Pulizie Bagni Hotel Roma", href: "/pulizie-hotel-roma/bagni/" }],
  "/pulizie-hotel-roma/aree-comuni/": [
    home,
    hotelHub,
    { label: "Pulizie Aree Comuni Hotel Roma", href: "/pulizie-hotel-roma/aree-comuni/" },
  ],
  "/pulizie-hotel-roma/sanificazione/": [
    home,
    hotelHub,
    { label: "Sanificazione Camere Hotel Roma", href: "/pulizie-hotel-roma/sanificazione/" },
  ],
  "/pulizie-hotel-roma/facchinaggio/": [
    home,
    hotelHub,
    { label: "Servizio Facchinaggio Hotel Roma", href: "/pulizie-hotel-roma/facchinaggio/" },
  ],
  "/pulizie-hotel-roma/governanti/": [
    home,
    hotelHub,
    { label: "Servizio Governanti Hotel Roma", href: "/pulizie-hotel-roma/governanti/" },
  ],
  "/pulizie-hotel-roma/bellboy/": [
    home,
    hotelHub,
    { label: "Servizio Bellboy Hotel Roma", href: "/pulizie-hotel-roma/bellboy/" },
  ],
  "/pulizie-hotel-roma/supervisore-zona/": [
    home,
    hotelHub,
    { label: "Servizio Supervisore di Zona Hotel Roma", href: "/pulizie-hotel-roma/supervisore-zona/" },
  ],
  "/pulizie-hotel-roma/preventivo/": [home, hotelHub, { label: "Preventivo", href: "/pulizie-hotel-roma/preventivo/" }],
  "/pulizie-strutture-ricettive-roma/": [
    home,
    { label: "Pulizie Strutture Ricettive Roma", href: "/pulizie-strutture-ricettive-roma/" },
  ],
  "/pulizie-strutture-ricettive-roma/bb/": [
    home,
    struttureHub,
    { label: "Pulizie B&B Roma", href: "/pulizie-strutture-ricettive-roma/bb/" },
  ],
  "/pulizie-strutture-ricettive-roma/affittacamere/": [
    home,
    struttureHub,
    { label: "Pulizie Affittacamere Roma", href: "/pulizie-strutture-ricettive-roma/affittacamere/" },
  ],
  "/pulizie-strutture-ricettive-roma/case-vacanza/": [
    home,
    struttureHub,
    { label: "Pulizie Case Vacanza Roma", href: "/pulizie-strutture-ricettive-roma/case-vacanza/" },
  ],
  "/pulizie-strutture-ricettive-roma/ostelli/": [
    home,
    struttureHub,
    { label: "Pulizie Ostelli e Dormitori Roma", href: "/pulizie-strutture-ricettive-roma/ostelli/" },
  ],
  "/pulizie-condominiali-roma/": [home, { label: "Pulizie Condominiali Roma", href: "/pulizie-condominiali-roma/" }],
  "/pulizie-straordinarie-roma/": [home, straordinarieHub],
  "/pulizie-straordinarie-roma/post-ristrutturazione/": [
    home,
    straordinarieHub,
    { label: "Sgrosso Post Ristrutturazione Roma", href: "/pulizie-straordinarie-roma/post-ristrutturazione/" },
  ],
  "/pulizie-straordinarie-roma/balconi-piccioni/": [
    home,
    straordinarieHub,
    { label: "Pulizia Balconi Escrementi Piccioni Roma", href: "/pulizie-straordinarie-roma/balconi-piccioni/" },
  ],
  "/pulizie-straordinarie-roma/cantina-allagata/": [
    home,
    straordinarieHub,
    { label: "Pulizia Cantina Allagata Roma", href: "/pulizie-straordinarie-roma/cantina-allagata/" },
  ],
  "/pulizie-straordinarie-roma/ambienti-degradati/": [
    home,
    straordinarieHub,
    {
      label: "Pulizia Ambienti Molto Sporchi e Degradati Roma",
      href: "/pulizie-straordinarie-roma/ambienti-degradati/",
    },
  ],
  "/sanificazione-ambienti-roma/": [
    home,
    { label: "Sanificazione Ambienti Roma", href: "/sanificazione-ambienti-roma/" },
  ],
  "/chi-siamo/": [home, { label: "Chi Siamo", href: "/chi-siamo/" }],
  "/aree-servite/": [home, { label: "Aree Servite", href: "/aree-servite/" }],
  "/contatti/": [home, { label: "Contatti", href: "/contatti/" }],
  "/privacy-policy/": [home, { label: "Privacy Policy", href: "/privacy-policy/" }],
  "/cookie-policy/": [home, { label: "Cookie Policy", href: "/cookie-policy/" }],
  "/note-legali/": [home, { label: "Note Legali", href: "/note-legali/" }],
} as const satisfies Record<string, readonly BreadcrumbItem[]>;

export type PageBreadcrumbPath = keyof typeof pageBreadcrumbs;
