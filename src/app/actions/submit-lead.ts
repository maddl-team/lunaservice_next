"use server";

import { Resend } from "resend";
import { siteEmail } from "@/lib/contact";
import type { LeadFormState } from "@/lib/lead-form-state";

/** Sources must match hidden `_source` on each form (anti-spoof allowlist). */
const ALLOWED_SOURCES = new Set([
  "homepage-preventivo",
  "contatti",
  "aree-servite",
  "pulizie-condominiali-roma",
  "sanificazione-ambienti-roma",
  "pulizie-straordinarie-roma",
  "post-ristrutturazione",
  "balconi-piccioni",
  "cantina-allagata",
  "ambienti-degradati",
  "pulizie-strutture-ricettive-roma",
  "bb",
  "case-vacanza",
  "affittacamere",
  "ostelli",
  "pulizie-hotel-roma",
  "pulizie-hotel-roma-camere",
  "pulizie-hotel-roma-bagni",
  "pulizie-hotel-roma-aree-comuni",
  "pulizie-hotel-roma-sanificazione",
  "pulizie-hotel-roma-preventivo",
  "pulizie-hotel-roma-facchinaggio",
  "pulizie-hotel-roma-governanti",
  "pulizie-hotel-roma-bellboy",
  "pulizie-hotel-roma-supervisore-zona",
]);

const DEFAULT_TO = siteEmail;

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Strip wrapping quotes often pasted into Vercel env values from .env examples. */
function normalizeEnvEmail(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim() ?? "";
  if (!trimmed) return fallback;
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim() || fallback;
  }
  return trimmed;
}

export async function submitLeadForm(_prev: LeadFormState, formData: FormData): Promise<LeadFormState> {
  try {
    const honeypot = String(formData.get("company_website") ?? "").trim();
    if (honeypot.length > 0) {
      return { ok: true, error: null };
    }

    const source = String(formData.get("_source") ?? "").trim();
    if (!ALLOWED_SOURCES.has(source)) {
      return { ok: false, error: "Richiesta non valida. Ricarica la pagina e riprova." };
    }

    const entries: [string, string][] = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("_") || key === "company_website") continue;
      if (typeof value === "string") entries.push([key, value]);
    }

    const get = (k: string) => String(formData.get(k) ?? "").trim();

    const nome = get("nome") || get("nome_cognome");
    const email = get("email");
    const telefono = get("telefono");

    if (!nome || nome.length < 2) {
      return { ok: false, error: "Indica un nome valido." };
    }

    const hasEmail = email.length > 0;
    const hasPhone = telefono.replace(/\s/g, "").length >= 8;

    if (!hasEmail && !hasPhone) {
      return { ok: false, error: "Inserisci un indirizzo email o un numero di telefono per essere ricontattato." };
    }

    if (hasEmail && !isValidEmail(email)) {
      return { ok: false, error: "L’indirizzo email non sembra valido." };
    }

    if (source === "homepage-preventivo" || source === "pulizie-hotel-roma-preventivo") {
      const privacy = formData.get("privacy");
      if (privacy !== "1" && privacy !== "on") {
        return { ok: false, error: "È necessario acconsentire al trattamento dei dati personali." };
      }
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      return { ok: false, error: "Servizio email non configurato. Riprova più tardi o contattaci via telefono." };
    }

    const to = normalizeEnvEmail(process.env.CONTACT_TO_EMAIL, DEFAULT_TO);
    const from = normalizeEnvEmail(
      process.env.CONTACT_FROM_EMAIL,
      "Luna Service <onboarding@resend.dev>",
    );

    if (!isValidEmail(to) && !to.includes("<")) {
      return { ok: false, error: "Configurazione destinatario non valida." };
    }

    const rows = entries
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;">${escapeHtml(k)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(v)}</td></tr>`,
      )
      .join("");

    const html = `
    <p>Nuova richiesta dal sito Luna Service.</p>
    <p><strong>Origine:</strong> ${escapeHtml(source)}</p>
    <table style="border-collapse:collapse;width:100%;max-width:720px;">${rows}</table>
  `;

    const resend = new Resend(apiKey);
    const sendResult = await resend.emails.send({
      from,
      to: [to],
      replyTo: hasEmail ? email : undefined,
      subject: `[Luna Service] Richiesta da modulo — ${source}`,
      html,
    });

    if (sendResult.error) {
      console.error("[submitLeadForm] Resend error:", sendResult.error);
      return { ok: false, error: "Invio non riuscito. Riprova tra qualche minuto o scrivici su WhatsApp." };
    }

    return { ok: true, error: null };
  } catch (err) {
    console.error("[submitLeadForm] Unexpected error:", err);
    return {
      ok: false,
      error: "Si è verificato un errore durante l’invio. Riprova tra qualche minuto o contattaci via WhatsApp.",
    };
  }
}
