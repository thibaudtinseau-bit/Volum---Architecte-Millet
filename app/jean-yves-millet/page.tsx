/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import { Breadcrumb, Cta, JsonLd, Stats } from "@/components/Sections";
import { PROJECTS, SITE, TIMELINE } from "@/lib/content";

const PHOTO = "/img/jean-yves-millet.webp";
const PHOTO_SM = "/img/jean-yves-millet-sm.webp";

export const metadata: Metadata = pageMeta(
  "/jean-yves-millet",
  "Jean-Yves Millet, architecte DPLG à Montarnaud",
  "Jean-Yves Millet, architecte DPLG et DUT Génie civil, fondateur de Volum à Montarnaud en 1999 : parcours, double compétence architecture et chantier.",
  { type: "profile", images: [{ url: PHOTO, width: 1024, height: 1280, alt: "Jean-Yves Millet sur un chantier, plans en main" }] },
);

/** Ce qu'il apporte à un projet : [titre, texte] */
const APPORTS: [string, string][] = [
  ["La technique dès l'esquisse", "Structure, terrain, mise en œuvre : sa formation en génie civil lui permet d'anticiper les contraintes constructives dès les premiers plans, pour que le projet dessiné soit aussi un projet réalisable."],
  ["Un interlocuteur unique", "Il suit personnellement chaque projet, du premier rendez-vous à la réception des travaux lorsque la mission le prévoit. Vous parlez toujours à celui qui a dessiné votre projet."],
  ["Le chantier, suivi de près", "Ancien directeur technique d'un promoteur, il connaît les entreprises, les coûts et les délais. Les imprévus sont analysés sur place et les décisions prises avec vous, avant d'engager les travaux."],
];

const FEATURED = ["logement-exterieur", "tertiaire", "plans-recherche"];

export default function JeanYvesMillet() {
  const featured = FEATURED.map((s) => PROJECTS.find((p) => p.slug === s)!).filter(Boolean);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["L'agence", "/agence"], ["Jean-Yves Millet"]]} />
          <div className="comp-split comp-split--center">
            <div className="split-media" style={{ aspectRatio: "4 / 5" }}>
              <img src={PHOTO} srcSet={`${PHOTO_SM} 760w, ${PHOTO} 1024w`} sizes="(max-width: 900px) 100vw, 40vw"
                width={1024} height={1280} alt="Jean-Yves Millet sur un chantier, casque blanc, plans et tablette en main"
                loading="eager" decoding="sync" fetchPriority="high" />
            </div>
            <div className="stack">
              <span className="eyebrow">Architecte DPLG · DUT Génie civil</span>
              <h1 className="display">Jean-Yves Millet.</h1>
              <p className="lead">Architecte à Montarnaud depuis 1999, fondateur de Volum. Il dessine les maisons, les bâtiments professionnels et les logements de ses clients en sachant comment ils seront construits.</p>
              <p className="muted">Diplômé de l&apos;École d&apos;Architecture de Montpellier, titulaire d&apos;un DUT Génie civil et ancien directeur technique d&apos;un promoteur, il a conçu plus d&apos;une centaine de maisons individuelles, des bureaux, des locaux d&apos;activité et des réhabilitations, dans l&apos;Hérault et le Gard.</p>
              <div className="actions">
                <Link className="btn" href="/contact">Échanger avec Jean-Yves Millet <Arrow /></Link>
                <a className="btn btn--secondary" href={`tel:${SITE.phoneLink}`}>Appeler le {SITE.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mineral" aria-labelledby="double-title">
        <div className="container comp-split">
          <div className="stack sticky">
            <span className="eyebrow">Une double culture</span>
            <h2 className="h2" id="double-title">Dessiner en sachant comment construire.</h2>
          </div>
          <div className="stack">
            <p className="lead">Avant d&apos;être architecte, Jean-Yves Millet s&apos;est formé au génie civil. Cette première formation, tournée vers les structures et la construction, nourrit encore chaque projet.</p>
            <p className="muted">Les questions de structure, de terrain et de mise en œuvre sont traitées directement, dès l&apos;esquisse. Son expérience de directeur technique chez un promoteur, à la conduite de programmes de logements collectifs, lui a donné une connaissance concrète des entreprises, des coûts et des délais.</p>
            <p className="muted">Son activité se partage aujourd&apos;hui entre le logement, individuel et collectif, pour environ 60 %, et les bâtiments d&apos;activité, bureaux et tertiaire, pour environ 30 %. Il s&apos;intéresse aussi aux technologies nouvelles et à l&apos;éco-conception : en 2013, il développe et fait breveter Cassine, un module d&apos;habitat circulaire en bois.</p>
            <ul className="facts-list">
              <li>Architecte DPLG, inscrit à l&apos;Ordre des architectes</li>
              <li>DUT Génie civil</li>
              <li>Exercice libéral depuis 1999, à Montarnaud et aux Ateliers des Remparts à Assas</li>
              <li>Maisons individuelles, logements collectifs, bureaux, établissements recevant du public</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="apports-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Pour votre projet</span>
              <h2 className="h2" id="apports-title">Ce que Jean-Yves Millet apporte à votre projet.</h2>
            </div>
            <p>Une même personne, de la première esquisse au suivi des travaux : c&apos;est la façon de travailler de l&apos;agence depuis sa création.</p>
          </div>
          <ol className="numbered numbered--3">
            {APPORTS.map(([t, d], i) => (
              <li key={t}>
                <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--flush-top" aria-labelledby="parcours-title">
        <div className="container comp-split">
          <div className="stack sticky">
            <span className="eyebrow">Parcours</span>
            <h2 className="h2" id="parcours-title">Plus de 25 ans d&apos;architecture autour de Montpellier.</h2>
          </div>
          <ol className="timeline">
            {TIMELINE.map(([y, t, d]) => (
              <li key={t}>
                <span className="num">{y}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="container" style={{ marginTop: "var(--space-xl)" }}><Stats /></div>
      </section>

      <section className="section section--flush-top" aria-labelledby="travaux-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Projets</span>
              <h2 className="h2" id="travaux-title">Quelques dossiers de l&apos;agence.</h2>
            </div>
            <p>Maisons, bâtiments professionnels, plans et esquisses : un aperçu du travail mené par Jean-Yves Millet.</p>
          </div>
          <div className="projects-grid">
            {featured.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
          <div className="section-foot">
            <Link className="btn btn--secondary" href="/projets">Voir tous les projets <Arrow /></Link>
            <Link className="link-arrow" href="/agence">Découvrir l&apos;agence <Arrow /></Link>
          </div>
        </div>
      </section>

      <Cta title="Parlons de votre projet." secondary={{ href: "/approche", label: "Découvrir notre approche" }} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ProfilePage", url: `${SITE.url}/jean-yves-millet`,
        mainEntity: {
          "@type": "Person", "@id": `${SITE.url}/jean-yves-millet#personne`, name: "Jean-Yves Millet",
          jobTitle: "Architecte DPLG", image: `${SITE.url}${PHOTO}`,
          alumniOf: "École Nationale Supérieure d'Architecture de Montpellier",
          worksFor: { "@id": `${SITE.url}/#agence` },
          address: { "@type": "PostalAddress", addressLocality: SITE.city, postalCode: SITE.zip, addressCountry: "FR" },
          sameAs: [SITE.linkedin, SITE.houzz],
        },
      }} />
    </>
  );
}
