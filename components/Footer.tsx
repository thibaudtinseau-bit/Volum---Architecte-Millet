import Link from "next/link";
import { PROJECTS, SITE } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/" aria-label="Volum — accueil"><Logo tagline /></Link>
            <p className="footer-claim">Une architecture <em>dessinée</em> pour être <em>construite</em>.</p>
          </div>
          <div>
            <h3>Navigation</h3>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/agence">L&apos;agence</Link></li>
              <li><Link href="/projets">Réalisations</Link></li>
              <li><Link href="/agence#expertises">Expertises</Link></li>
              <li><Link href="/#budget">Votre budget</Link></li>
              <li><Link href="/#avis">Avis clients</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Projets</h3>
            <ul>
              {PROJECTS.slice(0, 6).map((p) => (
                <li key={p.slug}><Link href={`/projets/${p.slug}`}>{p.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Agence</h3>
            <ul>
              <li>{SITE.address}<br />{SITE.zip} {SITE.city}</li>
              <li><a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a></li>
              {SITE.email && <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
              <li>
                <a href={SITE.houzz} target="_blank" rel="noopener">Houzz</a> ·{" "}
                <a href={SITE.linkedin} target="_blank" rel="noopener">LinkedIn</a> ·{" "}
                <a href={SITE.googleReviews} target="_blank" rel="noopener">Google</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-giant" aria-hidden="true">VOLUM</div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Volum — Jean-Yves Millet, architecte DPLG. Tous droits réservés.</span>
          <nav aria-label="Liens légaux">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/mentions-legales#confidentialite">Confidentialité</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
