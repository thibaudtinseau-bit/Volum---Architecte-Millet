import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { Breadcrumb, Cta, Services } from "@/components/Sections";
import { EXPERTISES, getProject } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expertises — maison, extension, rénovation, projets professionnels",
  description: "Construction de maison, extension et surélévation, rénovation de bâti ancien, bureaux et ERP : les expertises de Volum, architecte à Montpellier et dans l'Hérault, de la conception au suivi de chantier.",
  alternates: { canonical: "/expertises" },
};

export default function Expertises() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["Expertises"]]} />
          <div className="page-hero-grid">
            <div className="stack">
              <span className="eyebrow">Expertises</span>
              <h1 className="display">Construire, agrandir, réhabiliter.</h1>
            </div>
            <p className="lead">L&apos;agence accompagne particuliers et professionnels à Montpellier et dans l&apos;Hérault, de la conception seule à la mission complète jusqu&apos;à la réception des travaux.</p>
          </div>
          <nav className="subnav" aria-label="Accès direct aux expertises">
            {EXPERTISES.map((e) => <a key={e.id} href={`#${e.id}`}>{e.title}</a>)}
          </nav>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          {EXPERTISES.map((e, i) => (
            <article className="expertise" id={e.id} key={e.id} aria-labelledby={`${e.id}-title`}>
              <div className="stack">
                <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h2 id={`${e.id}-title`}>{e.title}</h2>
                <p className="lead">{e.short}</p>
              </div>
              <div className="text">
                {e.text.map((t) => <p key={t} className="muted">{t}</p>)}
                <ul className="facts-list">{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                <p className="small muted" style={{ marginTop: "var(--space-m)", marginBottom: 0 }}>Exemples de réalisations :</p>
                <ul className="expertise-refs">
                  {e.refs.map((s) => { const p = getProject(s)!; return <li key={s}><Link className="link-arrow" href={`/projets/${s}`}>{p.title}, {p.place} <Arrow /></Link></li>; })}
                </ul>
                <div className="actions" style={{ marginTop: "var(--space-l)" }}>
                  <Link className="btn" href={`/contact?projet=${e.projet}`}>Parler de mon projet <Arrow /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--mineral" aria-labelledby="missions-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Missions</span>
              <h2 className="h2" id="missions-title">Une mission adaptée à chaque projet.</h2>
            </div>
            <p>Selon vos besoins, l&apos;agence intervient sur une partie du projet ou sur l&apos;ensemble, de l&apos;esquisse à la réception des travaux.</p>
          </div>
          <Services />
          <div className="section-foot">
            <Link className="link-arrow" href="/approche">Voir les étapes d&apos;un projet <Arrow /></Link>
          </div>
        </div>
      </section>

      <Cta title="Vous avez un projet de construction, d'extension ou de rénovation ?" secondary={{ href: "/projets", label: "Voir les réalisations" }} />
    </>
  );
}
