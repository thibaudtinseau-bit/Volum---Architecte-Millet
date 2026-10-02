"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { SITE } from "@/lib/content";
import { Arrow } from "./Icons";

const TYPES = [
  ["maison", "Maison neuve"], ["extension", "Extension / surélévation"], ["renovation", "Rénovation"],
  ["tertiaire", "Bureaux / tertiaire"], ["piscine", "Piscine / extérieurs"], ["autre", "Autre"],
];

type Status = { kind: "success" | "error"; msg: React.ReactNode } | null;

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const qp = new URLSearchParams(window.location.search).get("projet");
    const el = qp && form.current?.querySelector<HTMLInputElement>(`input[name="type"][value="${qp}"]`);
    if (el) el.checked = true;
  }, []);

  useEffect(() => { if (status) statusRef.current?.focus(); }, [status]);

  const phone = <a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a>;

  function validate(fd: FormData) {
    const e: Record<string, string> = {};
    if (!fd.get("type")) e.type = "Merci de choisir un type de projet.";
    if (!String(fd.get("nom") || "").trim()) e.nom = "Ce champ est requis.";
    const email = String(fd.get("email") || "").trim();
    if (!email) e.email = "Ce champ est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Adresse e-mail invalide.";
    const tel = String(fd.get("telephone") || "").trim();
    if (tel && !/^[+\d][\d\s.\-()]{8,}$/.test(tel)) e.telephone = "Numéro invalide.";
    if (!String(fd.get("message") || "").trim()) e.message = "Ce champ est requis.";
    if (!fd.get("consent")) e.consent = "Merci d'accepter pour continuer.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    if (fd.get("_gotcha")) return;
    const e = validate(fd);
    setErrors(e);
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
      setStatus({ kind: "success", msg: <><strong>Merci, votre message a bien été envoyé.</strong><br />Jean-Yves Millet vous recontactera dans les meilleurs délais.</> });
    } catch {
      setStatus({ kind: "error", msg: <>L&apos;envoi n&apos;a pas pu aboutir. Vous pouvez joindre directement Jean-Yves Millet au {phone}.</> });
    } finally {
      setSending(false);
    }
  }

  const err = (k: string) => <span className="field-error" aria-live="polite">{errors[k] || ""}</span>;
  const f = (k: string) => `field${errors[k] ? " has-error" : ""}`;
  const clear = (k: string) => errors[k] && setErrors((x) => ({ ...x, [k]: "" }));

  return (
    <form ref={form} id="contact-form" className="form" noValidate onSubmit={onSubmit}>
      <fieldset className={`${f("type")} field--full`}>
        <legend>Type de projet *</legend>
        <div className="chips">
          {TYPES.map(([v, l]) => (
            <label className="chip" key={v}><input type="radio" name="type" value={v} onChange={() => clear("type")} /><span>{l}</span></label>
          ))}
        </div>
        {err("type")}
      </fieldset>
      <div className={f("nom")}><label htmlFor="f-nom">Nom & prénom *</label><input id="f-nom" name="nom" type="text" autoComplete="name" placeholder="Jeanne Dupont" aria-invalid={!!errors.nom} onInput={() => clear("nom")} />{err("nom")}</div>
      <div className={f("email")}><label htmlFor="f-email">E-mail *</label><input id="f-email" name="email" type="email" autoComplete="email" placeholder="jeanne@exemple.fr" aria-invalid={!!errors.email} onInput={() => clear("email")} />{err("email")}</div>
      <div className={f("telephone")}><label htmlFor="f-tel">Téléphone</label><input id="f-tel" name="telephone" type="tel" autoComplete="tel" placeholder="06 00 00 00 00" onInput={() => clear("telephone")} />{err("telephone")}</div>
      <div className="field"><label htmlFor="f-commune">Commune du projet</label><input id="f-commune" name="commune" type="text" autoComplete="address-level2" placeholder="Montpellier, Pignan…" /></div>
      <div className="field"><label htmlFor="f-budget">Budget travaux estimé</label>
        <select id="f-budget" name="budget" defaultValue=""><option value="">Non défini</option><option>Moins de 100 000 €</option><option>100 000 – 250 000 €</option><option>250 000 – 500 000 €</option><option>500 000 – 1 000 000 €</option><option>Plus de 1 000 000 €</option></select></div>
      <div className="field"><label htmlFor="f-delai">Échéance souhaitée</label>
        <select id="f-delai" name="echeance" defaultValue=""><option value="">Non définie</option><option>Dès que possible</option><option>Dans les 6 mois</option><option>Dans l&apos;année</option><option>Plus tard / réflexion</option></select></div>
      <div className="field field--full"><label htmlFor="f-terrain">Avancement</label>
        <select id="f-terrain" name="avancement" defaultValue=""><option value="">—</option><option>Je recherche un terrain</option><option>J&apos;ai un terrain</option><option>J&apos;ai un bien existant à transformer</option><option>J&apos;ai déjà des plans / un permis</option></select></div>
      <div className={`${f("message")} field--full`}><label htmlFor="f-message">Votre projet *</label><textarea id="f-message" name="message" rows={5} placeholder="Surface, nombre de pièces, envies, contraintes…" aria-invalid={!!errors.message} onInput={() => clear("message")} />{err("message")}</div>
      <div className="hp" aria-hidden="true"><label>Ne pas remplir <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div>
      <div className={`${f("consent")} field--full`}>
        <label className="consent"><input type="checkbox" name="consent" value="oui" onChange={() => clear("consent")} /><span>J&apos;accepte que mes données soient utilisées pour être recontacté(e) au sujet de mon projet. <Link href="/mentions-legales#confidentialite">En savoir plus</Link></span></label>
        {err("consent")}
      </div>
      <div ref={statusRef} tabIndex={-1} className={`form-status${status ? ` is-${status.kind}` : ""}`} role="status">{status?.msg}</div>
      <div className="form-foot">
        <small className="muted">* Champs obligatoires</small>
        <button className="btn btn--emerald" type="submit" disabled={sending}>{sending ? "Envoi en cours…" : <>Envoyer ma demande <Arrow /></>}</button>
      </div>
    </form>
  );
}
