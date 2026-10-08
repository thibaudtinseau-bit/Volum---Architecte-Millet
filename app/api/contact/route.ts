import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

/*
  Envoi du formulaire de contact : un e-mail récapitulatif mis en forme à chaque
  adresse de CONTACT_EMAIL (séparées par des virgules). Réponse directe au visiteur
  via « Répondre ». Configurez UNE des options dans les variables d'environnement Vercel :
   - SMTP_USER + SMTP_PASS (mot de passe d'application Gmail ; SMTP_HOST/SMTP_PORT facultatifs) → recommandé
   - RESEND_API_KEY (+ RESEND_FROM avec un domaine vérifié)                                  → resend.com
   - FORMSPREE_ENDPOINT                                                                         → formspree.io
*/
const LABELS: Record<string, string> = {
  nom: "Nom", email: "E-mail", telephone: "Téléphone", type: "Type de projet", commune: "Commune",
  budget: "Budget travaux", echeance: "Échéance", message: "Message",
};
const TYPES: Record<string, string> = {
  maison: "Maison neuve", extension: "Extension / surélévation", renovation: "Rénovation",
  tertiaire: "Projet professionnel", piscine: "Piscine / extérieurs", autre: "Autre",
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function render(d: Record<string, string>) {
  const date = new Date().toLocaleString("fr-FR", { dateStyle: "full", timeStyle: "short", timeZone: "Europe/Paris" });
  const tel = d.telephone.replace(/[^\d+]/g, "");
  const rows: [string, string][] = [
    ["Nom", esc(d.nom)],
    ["E-mail", `<a href="mailto:${esc(d.email)}" style="color:#8a5640;">${esc(d.email)}</a>`],
    ["Téléphone", d.telephone ? `<a href="tel:${esc(tel)}" style="color:#8a5640;">${esc(d.telephone)}</a>` : "—"],
    ["Type de projet", esc(d.type) || "—"],
    ["Commune", esc(d.commune) || "—"],
    ["Budget travaux", esc(d.budget) || "Non précisé"],
    ["Échéance", esc(d.echeance) || "Non précisée"],
  ];
  const html = `<!doctype html><html lang="fr"><body style="margin:0;padding:0;background:#eae7e0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eae7e0;padding:32px 12px;font-family:Helvetica,Arial,sans-serif;color:#242424;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#f7f6f2;border:1px solid #d5d2cc;border-radius:4px;">
  <tr><td style="padding:28px 32px 20px;border-bottom:1px solid #d5d2cc;">
    <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8a5640;">Volum — site internet</div>
    <h1 style="margin:10px 0 4px;font-size:22px;font-weight:600;line-height:1.3;">Nouvelle demande de projet</h1>
    <div style="font-size:14px;color:#666666;">${esc(date)}</div>
  </td></tr>
  <tr><td style="padding:20px 32px 8px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;line-height:1.5;">
      ${rows.map(([k, v]) => `<tr><td style="padding:9px 16px 9px 0;width:140px;color:#666666;vertical-align:top;border-bottom:1px solid #e3e0d9;">${k}</td><td style="padding:9px 0;vertical-align:top;border-bottom:1px solid #e3e0d9;font-weight:500;">${v}</td></tr>`).join("")}
    </table>
  </td></tr>
  <tr><td style="padding:20px 32px 8px;">
    <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8a5640;margin-bottom:10px;">Son projet</div>
    <div style="font-size:15px;line-height:1.65;background:#ffffff;border:1px solid #d5d2cc;border-radius:4px;padding:16px 18px;white-space:pre-wrap;">${esc(d.message)}</div>
  </td></tr>
  <tr><td style="padding:24px 32px 28px;">
    <a href="mailto:${esc(d.email)}?subject=${encodeURIComponent("Votre projet — Volum architecture")}" style="display:inline-block;background:#242424;color:#f7f6f2;text-decoration:none;font-size:14px;font-weight:600;padding:14px 24px;border-radius:4px;">Répondre à ${esc(d.nom)}</a>
    ${d.telephone ? `<a href="tel:${esc(tel)}" style="display:inline-block;margin-left:8px;border:1px solid #242424;color:#242424;text-decoration:none;font-size:14px;font-weight:600;padding:13px 22px;border-radius:4px;">Appeler</a>` : ""}
  </td></tr>
  <tr><td style="padding:16px 32px;border-top:1px solid #d5d2cc;font-size:12px;color:#666666;">
    Message envoyé depuis le formulaire de contact du site Volum. Le visiteur a accepté d'être recontacté au sujet de son projet.
  </td></tr>
</table>
</td></tr></table></body></html>`;
  const text = [
    "Nouvelle demande de projet — site Volum", date, "",
    ...Object.entries(LABELS).filter(([k]) => k !== "message").map(([k, l]) => `${l} : ${d[k] || "—"}`),
    "", "Son projet :", d.message,
  ].join("\n");
  const subject = `Nouvelle demande de projet — ${d.nom}${d.type ? ` (${d.type}${d.commune ? `, ${d.commune}` : ""})` : ""}`;
  return { html, text, subject };
}

export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }
  if (data._gotcha) return NextResponse.json({ ok: true });

  const clean: Record<string, string> = {};
  for (const k of Object.keys(LABELS)) clean[k] = String(data[k] || "").slice(0, 5000).trim();
  clean.type = TYPES[clean.type] || clean.type;
  if (!clean.nom || !clean.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email) || data.consent !== "oui") {
    return NextResponse.json({ error: "Champs manquants" }, { status: 422 });
  }

  const to = (process.env.CONTACT_EMAIL || "").split(",").map((s) => s.trim()).filter(Boolean);
  const { html, text, subject } = render(clean);
  const replyTo = `${clean.nom.replace(/["<>]/g, "")} <${clean.email}>`;

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS && to.length) {
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT || 465),
        secure: Number(process.env.SMTP_PORT || 465) === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transport.sendMail({ from: `Site Volum <${process.env.SMTP_USER}>`, to, replyTo, subject, text, html });
      return NextResponse.json({ ok: true });
    }
    if (process.env.RESEND_API_KEY && to.length) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: process.env.RESEND_FROM || "Site Volum <onboarding@resend.dev>", to, reply_to: replyTo, subject, text, html }),
      });
      if (!r.ok) throw new Error(`resend ${r.status} ${await r.text()}`);
      return NextResponse.json({ ok: true });
    }
    if (process.env.FORMSPREE_ENDPOINT) {
      const r = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...clean, _replyto: clean.email, _subject: subject }),
      });
      if (!r.ok) throw new Error(`formspree ${r.status}`);
      return NextResponse.json({ ok: true });
    }
    console.error("contact: aucun service d'envoi configuré (SMTP_USER/SMTP_PASS, RESEND_API_KEY ou FORMSPREE_ENDPOINT, et CONTACT_EMAIL)");
    return NextResponse.json({ error: "Envoi non configuré" }, { status: 503 });
  } catch (e) {
    console.error("contact:", e);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 502 });
  }
}
