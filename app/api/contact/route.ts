import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO = process.env.CONTACT_TO || "ekanebryan5@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || SMTP_USER || "Klasssarl@yahoo.com";

/** Human-readable labels for the service <select> values sent by the form. */
const SERVICE_LABELS: Record<string, string> = {
  pressing: "Klass Pressing",
  workshop: "Atelier Métallerie",
  other: "Autre / Renseignements",
};

const MAX_LENGTHS = { name: 120, phone: 40, email: 200, message: 5000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// --- Simple in-memory rate limit: max 5 submissions / 10 min per IP. ------
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Opportunistic cleanup so the map never grows unbounded.
  if (hits.size > 1000) {
    for (const [key, stamps] of hits) {
      if (stamps.every((ts) => now - ts >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

/**
 * POST /api/contact
 *
 * Sends a message from the contact form to the Klass Sarl inbox.
 *
 * Requires SMTP credentials configured in `.env.local`:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO (optional)
 *
 * If SMTP is NOT configured, the route responds with 503 + `fallback: "mailto"`
 * so the client falls back to the visitor's mail client (mailto).
 */
export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const raw = (body ?? {}) as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const name = str(raw.name).slice(0, MAX_LENGTHS.name);
  const phone = str(raw.phone).slice(0, MAX_LENGTHS.phone);
  const email = str(raw.email).slice(0, MAX_LENGTHS.email);
  const service = str(raw.service);
  const message = str(raw.message).slice(0, MAX_LENGTHS.message);
  const website = str(raw.website); // honeypot — humans never fill this

  // Honeypot triggered: pretend success so bots don't adapt, send nothing.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "name, email and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  // If no SMTP is configured, tell the client to fall back to mailto.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      {
        error: "SMTP is not configured on the server.",
        fallback: "mailto",
      },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const serviceLabel = SERVICE_LABELS[service] || "Renseignement général";
  const receivedAt = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Douala",
  }).format(new Date());

  const mailText = [
    "NOUVELLE DEMANDE DE CONTACT — SITE KLASS SARL",
    "==============================================",
    "",
    `Nom       : ${name}`,
    `Téléphone : ${phone || "Non renseigné"}`,
    `Email     : ${email}`,
    `Service   : ${serviceLabel}`,
    `Reçu le   : ${receivedAt}`,
    "",
    "MESSAGE",
    "----------------------------------------------",
    message,
    "",
    "----------------------------------------------",
    "Répondez directement à cet email pour contacter le client.",
  ].join("\n");

  const mailHtml = buildEmailHtml({
    name,
    phone,
    email,
    serviceLabel,
    message,
    receivedAt,
  });

  try {
    await transporter.sendMail({
      from: `"Klass Sarl — Site web" <${FROM_EMAIL}>`,
      to: CONTACT_TO,
      replyTo: `"${name.replace(/["\\]/g, "")}" <${email}>`,
      subject: `Nouvelle demande — ${serviceLabel} — ${name}`,
      text: mailText,
      html: mailHtml,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}

type EmailData = {
  name: string;
  phone: string;
  email: string;
  serviceLabel: string;
  message: string;
  receivedAt: string;
};

/**
 * Professional, email-client-safe HTML template (tables + inline styles),
 * branded with the Klass Sarl colors (green / charcoal).
 */
function buildEmailHtml(d: EmailData): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #eaedf0;font-size:13px;color:#5b6570;white-space:nowrap;width:120px;">${label}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #eaedf0;font-size:14px;color:#0f1215;font-weight:600;">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Nouvelle demande de contact — Klass Sarl</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f6f8;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f6f8;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0f1215;border-radius:12px 12px 0 0;padding:24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:20px;font-weight:bold;color:#ffffff;letter-spacing:0.5px;">KLASS <span style="color:#3fa75f;">SARL</span></span><br/>
                    <span style="font-size:12px;color:#8a93a0;">Pressing &amp; Métallerie — Edéa, Cameroun</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Banner -->
          <tr>
            <td style="background-color:#2f8a4e;padding:14px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:12px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#ffffff;">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </td>
                  <td>
                    <span style="font-size:15px;font-weight:bold;color:#ffffff;">Nouvelle demande de contact depuis le site web</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:28px 32px;">
              <p style="margin:0 0 20px;font-size:14px;color:#3a434c;line-height:1.6;">
                Un visiteur vient d'envoyer un message via le formulaire de contact.
                Voici les détails de sa demande&nbsp;:
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eaedf0;border-radius:8px;border-collapse:separate;overflow:hidden;">
                ${row("Nom", escapeHtml(d.name))}
                ${row("Téléphone", d.phone ? `<a href="tel:${escapeHtml(d.phone.replace(/\s+/g, ""))}" style="color:#2f8a4e;text-decoration:none;">${escapeHtml(d.phone)}</a>` : '<span style="color:#8a93a0;font-weight:normal;">Non renseigné</span>')}
                ${row("Email", `<a href="mailto:${escapeHtml(d.email)}" style="color:#2f8a4e;text-decoration:none;">${escapeHtml(d.email)}</a>`)}
                ${row("Service", escapeHtml(d.serviceLabel))}
                <tr>
                  <td style="padding:12px 16px;font-size:13px;color:#5b6570;white-space:nowrap;width:120px;">Reçu le</td>
                  <td style="padding:12px 16px;font-size:14px;color:#0f1215;font-weight:600;">${escapeHtml(d.receivedAt)}</td>
                </tr>
              </table>

              <p style="margin:24px 0 8px;font-size:13px;font-weight:bold;color:#5b6570;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#f2faf3;border-left:4px solid #3fa75f;border-radius:0 8px 8px 0;padding:16px 20px;font-size:14px;color:#232a30;line-height:1.7;">
                    ${escapeHtml(d.message).replace(/\n/g, "<br/>")}
                  </td>
                </tr>
              </table>

              <!-- Reply button -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px auto 4px;">
                <tr>
                  <td style="background-color:#2f8a4e;border-radius:999px;">
                    <a href="mailto:${escapeHtml(d.email)}?subject=${encodeURIComponent("Re : votre demande — Klass Sarl")}" style="display:inline-block;padding:12px 32px;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;">Répondre à ${escapeHtml(d.name.split(" ")[0])}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f5f6f8;border:1px solid #eaedf0;border-top:none;border-radius:0 0 12px 12px;padding:18px 32px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#8a93a0;line-height:1.6;">
                Vous pouvez aussi répondre directement à cet email — la réponse ira au client.<br/>
                Klass Sarl · BP 713 Edéa, Littoral, Cameroun · Klasssarl@yahoo.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
