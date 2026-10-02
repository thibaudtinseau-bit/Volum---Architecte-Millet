import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { ProjectImg } from "@/components/ProjectImg";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="hero-slides"><div className="hero-slide is-active"><ProjectImg slug="divers-conception" num="02" alt="" priority sizes="100vw" /></div></div>
      <div className="container hero-content">
        <div className="hero-kicker"><span>Erreur 404</span></div>
        <h1 className="display">Cette pièce<br /><em>n&apos;a pas été construite.</em></h1>
        <div className="hero-bottom">
          <p>La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
          <div className="hero-actions">
            <Link className="btn btn--emerald" href="/">Retour à l&apos;accueil <Arrow /></Link>
            <Link className="btn btn--ghost" href="/projets">Voir les réalisations</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
