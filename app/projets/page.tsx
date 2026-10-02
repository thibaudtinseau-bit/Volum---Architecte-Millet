import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { Breadcrumb, Cta, JsonLd } from "@/components/Sections";
import { PROJECTS, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Réalisations — maisons, extensions, bureaux",
  description: "Découvrez les réalisations de Volum, Jean-Yves Millet architecte DPLG : villas contemporaines, extensions, réhabilitations et bâtiments tertiaires dans l'Hérault et le Gard.",
  alternates: { canonical: "/projets" },
};

export default function Projets() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["Réalisations"]]} />
          <div className="page-hero-grid">
            <h1 className="display reveal">Réali&shy;sations.</h1>
            <p className="lead reveal d1">{PROJECTS.length} projets, de la maison individuelle au siège d&apos;entreprise, pour découvrir l&apos;approche de l&apos;agence — de l&apos;esquisse au chantier.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container"><ProjectsFilter /></div>
      </section>
      <Cta />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ItemList",
        itemListElement: PROJECTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}/projets/${p.slug}`, name: p.title })),
      }} />
    </>
  );
}
