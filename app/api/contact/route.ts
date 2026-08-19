import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO = process.env.CONTACT_TO || "Klasssarl@yahoo.com";
const FROM_EMAIL = process.env.FROM_EMAIL || SMTP_USER || "Klasssarl@yahoo.com";

/**
 * POST /api/contact
 *
 * Sends a message from the contact form to the Klass Sarl inbox.
 *
 * Requires SMTP credentials configured in `.env.local`:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO (optional)
 *
 * If SMTP is NOT configured, the route responds with a JSON error so the
 * client falls back to the visitor's mail client (mailto).
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const { name, phone, email, service, message } = (body ?? {}) as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "name, email and message are required." },
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

  const mailText = [
    "Nouveau message depuis le site Klass Sarl",
    "-------------------------------------------",
    `Nom    : ${name}`,
    `Téléphone : ${phone || "—"}`,
    `Email  : ${email}`,
    `Service : ${service || "—"}`,
    "",
    "Message :",
    message,
  ].join("\n");

  const mailHtml = `
    <h2>Nouveau message depuis le site Klass Sarl</h2>
    <table style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;font-size:14px">
      <tr><td style="padding:4px 12px 4px 0"><b>Nom</b></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><b>Téléphone</b></td><td>${escapeHtml(phone || "—")}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><b>Service</b></td><td>${escapeHtml(service || "—")}</td></tr>
    </table>
    <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px"><b>Message :</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Klass Sarl — Site" <${FROM_EMAIL}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `[Klass Sarl] Message de ${name} — ${service || "contact"}`,
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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
