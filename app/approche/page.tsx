import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { Breadcrumb, Budget, Cta, Steps } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Notre approche — les étapes d'un projet d'architecture",
  description: "Échanger, concevoir, préparer, accompagner les travaux, finaliser : comment Volum mène un projet de construction ou de rénovation à Montpellier et dans l'Hérault, et comment le budget est suivi.",
  alternates: { canonical: "/approche" },
};

export default function Approche() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["Notre approche"]]} />
          <div className="page-hero-grid">
            <div className="stack">
              <span className="eyebrow">Notre approche</span>
              <h1 className="display">De la première idée à la réalisation.</h1>
            </div>
            <p className="lead">Un projet se construit par étapes, ponctuées d&apos;échanges réguliers. Vous gardez la main sur les décisions ; l&apos;agence prend en charge la technique, les démarches et la coordination selon la mission confiée.</p>
          </div>
        </div>
      </section>

      <section className="section section--flush-top" aria-labelledby="etapes-title">
        <div className="container">
          <h2 className="visually-hidden" id="etapes-title">Les cinq étapes d&apos;un projet</h2>
          <Steps detailed />
          <div className="section-foot">
            <Link className="btn" href="/contact">Parler de mon projet <Arrow /></Link>
          </div>
        </div>
      </section>

      <Budget />

      <section className="section" aria-labelledby="mission-title">
        <div className="container comp-split">
          <div className="stack">
            <span className="eyebrow">La mission</span>
            <h2 className="h2" id="mission-title">Une mission définie avant tout engagement.</h2>
          </div>
          <div className="text">
            <p className="lead">L&apos;étendue de la mission (conception seule, dossier de permis de construire, ou mission complète jusqu&apos;à la réception) est fixée avec vous après le premier rendez-vous.</p>
            <p className="muted">Les honoraires dépendent de cette mission et de la complexité du projet. Ils sont précisés dans un contrat établi avant tout engagement de votre part.</p>
            <div className="actions" style={{ marginTop: "var(--space-l)" }}>
              <Link className="link-arrow" href="/#faq">Questions fréquentes <Arrow /></Link>
              <Link className="link-arrow" href="/expertises">Les expertises <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <Cta title="Parlons de votre projet." secondary={{ href: "/projets", label: "Voir les réalisations" }} />
    </>
  );
}
