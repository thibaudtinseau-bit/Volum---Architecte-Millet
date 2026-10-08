import Link from "next/link";
import { EXPERTISES, SITE } from "@/lib/content";
import { Arrow } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/" aria-label="Volum, retour à l'accueil"><Logo tagline /></Link>
            <p className="footer-claim">La sensibilité de l&apos;architecte.<br />La rigueur du bâtisseur.</p>
            <Link className="btn btn--light" href="/contact">Échanger sur mon projet <Arrow /></Link>
          </div>
          <nav aria-labelledby="footer-nav">
            <h2 id="footer-nav">Rubriques</h2>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/agence">L&apos;agence</Link></li>
              <li><Link href="/expertises">Expertises</Link></li>
              <li><Link href="/projets">Réalisations</Link></li>
              <li><Link href="/approche">Notre approche</Link></li>
              <li><Link href="/#avis">Avis clients</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <nav aria-labelledby="footer-exp">
            <h2 id="footer-exp">Expertises</h2>
            <ul>
              {EXPERTISES.map((e) => <li key={e.id}><Link href={`/expertises#${e.id}`}>{e.title}</Link></li>)}
            </ul>
          </nav>
          <div>
            <h2>Coordonnées</h2>
            <ul>
              <li>{SITE.address}<br />{SITE.zip} {SITE.city}</li>
              <li><a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a></li>
              {SITE.email && <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener">LinkedIn</a>
                <span aria-hidden="true"> · </span>
                <a href={SITE.houzz} target="_blank" rel="noopener">Houzz</a>
                <span aria-hidden="true"> · </span>
                <a href={SITE.googleReviews} target="_blank" rel="noopener">Avis Google</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Volum, Jean-Yves Millet, architecte DPLG</span>
          <nav aria-label="Liens légaux">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/mentions-legales#confidentialite">Confidentialité</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
