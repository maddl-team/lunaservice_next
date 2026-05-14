export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const siteNavigation: NavItem[] = [
  {
    label: "Hotel",
    href: "/pulizie-hotel-roma/",
    children: [
      { label: "Pulizie hotel Roma", href: "/pulizie-hotel-roma/" },
      { label: "Pulizie camere hotel", href: "/pulizie-hotel-roma/camere/" },
      { label: "Pulizie bagni hotel", href: "/pulizie-hotel-roma/bagni/" },
      { label: "Pulizie aree comuni hotel", href: "/pulizie-hotel-roma/aree-comuni/" },
      { label: "Sanificazione hotel", href: "/pulizie-hotel-roma/sanificazione/" },
      { label: "Preventivo hotel", href: "/pulizie-hotel-roma/preventivo/" },
    ],
  },
  {
    label: "Strutture",
    href: "/pulizie-strutture-ricettive-roma/",
    children: [
      { label: "Pulizie strutture ricettive Roma", href: "/pulizie-strutture-ricettive-roma/" },
      { label: "Pulizie B&B Roma", href: "/pulizie-strutture-ricettive-roma/bb/" },
      { label: "Pulizie affittacamere Roma", href: "/pulizie-strutture-ricettive-roma/affittacamere/" },
      { label: "Pulizie case vacanza Roma", href: "/pulizie-strutture-ricettive-roma/case-vacanza/" },
      { label: "Pulizie ostelli Roma", href: "/pulizie-strutture-ricettive-roma/ostelli/" },
    ],
  },
  {
    label: "Condomini",
    href: "/pulizie-condominiali-roma/",
  },
  {
    label: "Straordinarie",
    href: "/pulizie-straordinarie-roma/",
    children: [
      { label: "Pulizie straordinarie Roma", href: "/pulizie-straordinarie-roma/" },
      { label: "Sgrosso post ristrutturazione", href: "/pulizie-straordinarie-roma/post-ristrutturazione/" },
      { label: "Pulizia balconi escrementi piccioni", href: "/pulizie-straordinarie-roma/balconi-piccioni/" },
      { label: "Pulizia cantina allagata", href: "/pulizie-straordinarie-roma/cantina-allagata/" },
      { label: "Pulizia ambienti degradati", href: "/pulizie-straordinarie-roma/ambienti-degradati/" },
    ],
  },
  {
    label: "Sanificazione",
    href: "/sanificazione-ambienti-roma/",
  },
  {
    label: "Chi Siamo",
    href: "/chi-siamo/",
  },
  {
    label: "Aree Servite",
    href: "/aree-servite/",
  },
  {
    label: "Contatti",
    href: "/contatti/",
  },
];

export const footerNavigation = [
  {
    title: "Hotel",
    links: siteNavigation[0].children ?? [],
  },
  {
    title: "Strutture e condomini",
    links: [
      ...(siteNavigation[1].children ?? []),
      { label: "Pulizie condominiali Roma", href: "/pulizie-condominiali-roma/" },
    ],
  },
  {
    title: "Straordinarie e sanificazione",
    links: [
      ...(siteNavigation[3].children ?? []),
      { label: "Sanificazione ambienti Roma", href: "/sanificazione-ambienti-roma/" },
    ],
  },
  {
    title: "Azienda",
    links: [
      { label: "Chi Siamo", href: "/chi-siamo/" },
      { label: "Aree Servite", href: "/aree-servite/" },
      { label: "Contatti", href: "/contatti/" },
    ],
  },
] as const;

export const legalNavigation: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
  { label: "Note Legali", href: "/note-legali/" },
];

export const whatsappHref = "https://wa.me/";
export const contactHref = "/contatti/";
