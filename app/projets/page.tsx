import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ProjectCard } from "@/components/ProjectCard";
import { Breadcrumb, Cta, JsonLd } from "@/components/Sections";
import { PROJECTS, SITE } from "@/lib/content";

export const metadata: Metadata = pageMeta(
  "/projets",
  "Projets : logements, tertiaire, industriel, plans",
  "Les projets de Volum, architecte DPLG : maisons, intérieurs, logements collectifs, bureaux, bâtiments industriels et agricoles, plans et études dans l'Hérault.",
);

export default function Projets() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["Projets"]]} />
          <div className="page-hero-grid">
            <h1 className="display reveal">Projets.</h1>
            <p className="lead reveal d1">{PROJECTS.length} dossiers pour parcourir le travail de l&apos;agence, du logement individuel au bâtiment d&apos;activité, et les plans qui les précèdent.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="dossiers-title">
        <div className="container">
          <h2 className="visually-hidden" id="dossiers-title">Les dossiers de projets</h2>
          <div className="projects-grid projects-grid--featured">
            {PROJECTS.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>
      <Cta />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ItemList",
        itemListElement: PROJECTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}/projets/${p.slug}`, name: p.title })),
      }} />
    </>
  );
}
