"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { SITE } from "@/lib/content";
import { Arrow } from "./Icons";

const TYPES = [
  ["maison", "Maison neuve"], ["extension", "Extension / surélévation"], ["renovation", "Rénovation"],
  ["tertiaire", "Projet professionnel"], ["piscine", "Piscine / extérieurs"], ["autre", "Autre"],
];

type Status = { kind: "success" | "error"; msg: React.ReactNode } | null;

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);

  // ?projet=maison (liens des pages Expertises et projets) présélectionne le type de projet
  useEffect(() => {
    const qp = new URLSearchParams(window.location.search).get("projet");
    const el = qp && form.current?.querySelector<HTMLInputElement>(`input[name="type"][value="${qp}"]`);
    if (el) el.checked = true;
  }, []);

  useEffect(() => { if (status) statusRef.current?.focus(); }, [status]);

  const phone = <a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a>;

  function validate(fd: FormData) {
    const e: Record<string, string> = {};
    if (!String(fd.get("nom") || "").trim()) e.nom = "Indiquez votre nom.";
    const email = String(fd.get("email") || "").trim();
    if (!email) e.email = "Indiquez votre adresse e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Cette adresse e-mail ne semble pas valide (exemple : nom@domaine.fr).";
    const tel = String(fd.get("telephone") || "").trim();
    if (tel && !/^[+\d][\d\s.\-()]{8,}$/.test(tel)) e.telephone = "Ce numéro ne semble pas valide (exemple : 06 12 34 56 78).";
    if (!String(fd.get("message") || "").trim()) e.message = "Décrivez votre projet en quelques mots.";
    if (!fd.get("consent")) e.consent = "Votre accord est nécessaire pour que nous puissions vous répondre.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (sending) return;
    const fd = new FormData(ev.currentTarget);
    if (fd.get("_gotcha")) return;
    const e = validate(fd);
    setErrors(e);
    setStatus(null);
    if (Object.keys(e).length) {
      ev.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fd.entries())),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.current?.reset();
      setStatus({ kind: "success", msg: <><strong>Votre message a bien été envoyé.</strong> Merci pour votre intérêt pour VOLUM Architecture.</> });
    } catch {
      setStatus({ kind: "error", msg: <><strong>Votre message n&apos;a pas pu être envoyé.</strong> Vérifiez votre connexion puis réessayez : les informations saisies sont conservées. Vous pouvez aussi appeler l&apos;agence au {phone}.</> });
    } finally {
      setSending(false);
    }
  }

  const err = (k: string) => <span className="field-error" id={`e-${k}`}>{errors[k] || ""}</span>;
  const f = (k: string) => `field${errors[k] ? " has-error" : ""}`;
  const a = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });
  const clear = (k: string) => errors[k] && setErrors((x) => ({ ...x, [k]: "" }));

  return (
    <form ref={form} id="contact-form" className="form" noValidate onSubmit={onSubmit} aria-describedby="form-required">
      <div className={f("nom")}>
        <label htmlFor="f-nom">Nom et prénom *</label>
        <input id="f-nom" name="nom" type="text" autoComplete="name" required {...a("nom")} onInput={() => clear("nom")} />
        {err("nom")}
      </div>
      <div className={f("email")}>
        <label htmlFor="f-email">Adresse e-mail *</label>
        <input id="f-email" name="email" type="email" inputMode="email" autoComplete="email" required {...a("email")} onInput={() => clear("email")} />
        {err("email")}
      </div>
      <div className={f("telephone")}>
        <label htmlFor="f-tel">Téléphone <small>(facultatif)</small></label>
        <input id="f-tel" name="telephone" type="tel" inputMode="tel" autoComplete="tel" {...a("telephone")} onInput={() => clear("telephone")} />
        {err("telephone")}
      </div>
      <div className="field">
        <label htmlFor="f-commune">Commune du projet <small>(facultatif)</small></label>
        <input id="f-commune" name="commune" type="text" autoComplete="address-level2" placeholder="Montpellier, Pignan…" />
      </div>
      <fieldset className="field field--full">
        <legend>Type de projet <small>(facultatif)</small></legend>
        <div className="chips">
          {TYPES.map(([v, l]) => (
            <label className="chip" key={v}><input type="radio" name="type" value={v} /><span>{l}</span></label>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="f-budget">Budget travaux <small>(facultatif)</small></label>
        <select id="f-budget" name="budget" defaultValue=""><option value="">Pas encore défini</option><option>Moins de 100 000 €</option><option>100 000 – 250 000 €</option><option>250 000 – 500 000 €</option><option>500 000 – 1 000 000 €</option><option>Plus de 1 000 000 €</option></select>
      </div>
      <div className="field">
        <label htmlFor="f-delai">Échéance souhaitée <small>(facultatif)</small></label>
        <select id="f-delai" name="echeance" defaultValue=""><option value="">Pas encore définie</option><option>Dès que possible</option><option>Dans les 6 mois</option><option>Dans l&apos;année</option><option>Plus tard / en réflexion</option></select>
      </div>
      <div className={`${f("message")} field--full`}>
        <label htmlFor="f-message">Votre projet *</label>
        <textarea id="f-message" name="message" rows={5} required placeholder="Quelques mots sur votre projet : terrain, bâtiment existant, envies, questions…" {...a("message")} onInput={() => clear("message")} />
        {err("message")}
      </div>
      <div className="hp" aria-hidden="true"><label>Ne pas remplir <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div>
      <div className={`${f("consent")} field--full`}>
        <label className="consent">
          <input type="checkbox" name="consent" value="oui" {...a("consent")} onChange={() => clear("consent")} />
          <span>J&apos;accepte que mes données soient utilisées pour être recontacté(e) au sujet de mon projet. * <Link href="/mentions-legales#confidentialite">En savoir plus</Link></span>
        </label>
        {err("consent")}
      </div>
      <div ref={statusRef} tabIndex={-1} className={`form-status${status ? ` is-${status.kind}` : ""}`} role={status?.kind === "error" ? "alert" : "status"}>{status?.msg}</div>
      <div className="form-foot">
        <small id="form-required">* Champs obligatoires</small>
        <button className="btn" type="submit" disabled={sending} aria-busy={sending}>
          {sending ? <><span className="spinner" aria-hidden="true" /> Envoi en cours…</> : <>Envoyer ma demande <Arrow /></>}
        </button>
      </div>
      <p className="form-reassurance">Votre projet n&apos;a pas besoin d&apos;être entièrement défini pour nous contacter.</p>
    </form>
  );
}
