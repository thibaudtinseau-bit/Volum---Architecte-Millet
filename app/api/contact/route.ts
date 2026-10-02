import { NextResponse } from "next/server";

/*
  Envoi du formulaire de contact. Configurez UNE des options dans les
  variables d'environnement Vercel :
   - RESEND_API_KEY + CONTACT_EMAIL (+ RESEND_FROM, facultatif)  → e-mail via resend.com
   - FORMSPREE_ENDPOINT (ex. https://formspree.io/f/xxxx)          → relais via formspree.io
*/
const LABELS: Record<string, string> = {
  type: "Type de projet", nom: "Nom", email: "E-mail", telephone: "Téléphone", commune: "Commune",
  budget: "Budget", echeance: "Échéance", avancement: "Avancement", message: "Message",
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

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
  if (!clean.nom || !clean.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email) || data.consent !== "oui") {
    return NextResponse.json({ error: "Champs manquants" }, { status: 422 });
  }

  const lines = Object.entries(LABELS).filter(([k]) => clean[k]).map(([k, l]) => `${l} : ${clean[k]}`);

  try {
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "Site Volum <onboarding@resend.dev>",
          to: [process.env.CONTACT_EMAIL],
          reply_to: clean.email,
          subject: `Nouvelle demande de projet — ${clean.nom}`,
          text: lines.join("\n"),
          html: `<h2>Nouvelle demande depuis le site Volum</h2><ul>${lines.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>`,
        }),
      });
      if (!r.ok) throw new Error(`resend ${r.status}`);
      return NextResponse.json({ ok: true });
    }
    if (process.env.FORMSPREE_ENDPOINT) {
      const r = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...clean, _replyto: clean.email, _subject: `Demande de projet — ${clean.nom}` }),
      });
      if (!r.ok) throw new Error(`formspree ${r.status}`);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "Envoi non configuré" }, { status: 503 });
  } catch (e) {
    console.error("contact:", e);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 502 });
  }
}
