import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70svh" }}>
      <div className="container stack comp-editorial">
        <span className="eyebrow">Erreur 404</span>
        <h1 className="display">Cette page n&apos;existe pas.</h1>
        <p className="lead muted">Elle a peut-être été déplacée. Voici quelques pistes pour continuer.</p>
        <div className="actions">
          <Link className="btn" href="/">Retour à l&apos;accueil <Arrow /></Link>
          <Link className="btn btn--secondary" href="/projets">Voir les réalisations</Link>
        </div>
      </div>
    </section>
  );
}
