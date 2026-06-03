/** Central NAP + hours — single source for footer, contatti, schema, CTAs. */
export const sitePhoneE164 = "393518349789";

export const sitePhoneDisplay = "+39 351 834 9789";

export const siteEmail = "info@lunaservice.it";

export const siteWhatsAppHref = `https://wa.me/${sitePhoneE164}`;

export const siteTelHref = `tel:+${sitePhoneE164}`;

export const siteAddressStreet = "Via S. Igino Papa, 19d";

export const siteAddressLocality = "Roma";

export const siteAddressRegion = "RM";

export const sitePostalCode = "00168";

export const siteAddressFull = `${siteAddressStreet}, ${sitePostalCode} ${siteAddressLocality} ${siteAddressRegion}`;

export const siteVat = "15445311002";

export const siteHoursWeekday = "Lun–Ven 9:00–18:00";

export const siteHoursSaturday = "Sab 9:00–13:00";

export const siteHoursSunday = "Dom chiuso";

/** Short line for homepage / footer-adjacent blocks */
export const siteHoursShort = "lun–ven 9–18 · sab 9–13";

/** Full hours line for contatti and similar */
export const siteHoursFull = `${siteHoursWeekday} · ${siteHoursSaturday} · ${siteHoursSunday}`;

export const siteMapsEmbedQuery = encodeURIComponent(siteAddressFull);
