import type { Metadata } from "next";
import { Breadcrumb, Cta, JsonLd } from "@/components/Sections";
import { VilleLinks } from "@/components/Villes";
import { SITE } from "@/lib/content";
import { SECTEURS, VILLES, villesDuSecteur } from "@/lib/villes";

export const metadata: Metadata = {
  title: "Architecte dans l'Hérault : Montpellier, Sète, Lunel, Pézenas…",
  description: "Volum, Jean-Yves Millet architecte DPLG à Montarnaud : construction, extension et rénovation dans plus de 50 communes de l'Hérault. Règles, risques et projets, commune par commune.",
  alternates: { canonical: "/architecte" },
};

export default function Architecte() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["Architecte dans l'Hérault"]]} />
          <div className="page-hero-grid">
            <div className="stack">
              <span className="eyebrow">Zone d&apos;intervention</span>
              <h1 className="display">Architecte dans l&apos;Hérault.</h1>
            </div>
            <p className="lead">Installée à Montarnaud depuis 1999, l&apos;agence accompagne les projets de construction, d&apos;extension et de rénovation dans {VILLES.length} communes, de Montpellier au bassin de Thau, du Pic Saint-Loup au Pays de Lunel. Pour chacune&nbsp;: les règles d&apos;urbanisme, les risques à connaître et les projets qu&apos;on y mène.</p>
          </div>
          <nav className="subnav" aria-label="Accès direct aux secteurs">
            {SECTEURS.map((s) => <a key={s.id} href={`#${s.id}`}>{s.nom}</a>)}
          </nav>
        </div>
      </section>

      {SECTEURS.map((s, i) => {
        const villes = villesDuSecteur(s.id);
        if (!villes.length) return null;
        return (
          <section className={`section${i % 2 === 0 ? " section--mineral" : ""}`} id={s.id} key={s.id} aria-labelledby={`${s.id}-title`}>
            <div className="container">
              <div className="section-head">
                <div className="stack">
                  <span className="eyebrow">{villes.length} commune{villes.length > 1 ? "s" : ""}</span>
                  <h2 className="h2" id={`${s.id}-title`}>{s.nom}</h2>
                </div>
                <p>{s.texte}</p>
              </div>
              <VilleLinks villes={villes} />
            </div>
          </section>
        );
      })}

      <Cta title={"Votre commune n'apparaît pas dans la liste\u00a0?"}
        text={"L'agence intervient dans tout l'Hérault et, pour certains projets, dans le Gard. Présentez-nous votre projet\u00a0: nous vous dirons s'il entre dans notre secteur d'intervention."} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "CollectionPage", url: `${SITE.url}/architecte`,
        name: "Architecte dans l'Hérault — communes d'intervention de Volum",
        about: { "@id": `${SITE.url}/#agence` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: VILLES.map((v, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}/architecte/${v.slug}`, name: `Architecte ${v.a}` })),
        },
      }} />
    </>
  );
}
