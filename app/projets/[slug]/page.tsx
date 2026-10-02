import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/Gallery";
import { Arrow } from "@/components/Icons";
import { ProjectImg } from "@/components/ProjectImg";
import { Breadcrumb, Cta, JsonLd } from "@/components/Sections";
import { CATEGORIES, PROJECTS, SITE, getProject, imgSrc, projectImages } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title} — ${p.type}, ${p.place}`;
  return {
    title,
    description: `${p.summary} Projet de Volum, Jean-Yves Millet architecte DPLG.`,
    alternates: { canonical: `/projets/${p.slug}` },
    openGraph: { title, description: p.summary, images: [{ url: imgSrc(p.slug, p.cover) }] },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = PROJECTS[i];
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const imgs = projectImages(p.slug);
  const facts: [string, string][] = [["Type", p.type], ["Lieu", p.place], ["Année", p.year || "—"], ["Budget travaux", p.budget || "Sur demande"]];
  if (p.surface) facts.push(["Surface", p.surface]);
  if (p.duree) facts.push(["Durée", p.duree]);
  const caseBlocks = ([
    ["Le besoin", p.besoin], ["Les contraintes", p.contraintes], ["La réponse architecturale", p.reponse],
    ["La mission Volum", p.mission], ["Le résultat", p.resultat],
  ] as [string, string | undefined][]).filter((b): b is [string, string] => !!b[1]);
  const contactType = p.cats.includes("tertiaire") ? "tertiaire" : p.slug.startsWith("extension") ? "extension" : p.cats.includes("renovation") ? "renovation" : "maison";

  return (
    <>
      <section className="project-hero on-dark">
        <ProjectImg slug={p.slug} num={p.cover} alt={p.title} priority sizes="100vw" />
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["Réalisations", "/projets"], [p.title]]} />
          <span className="eyebrow">{p.cats.map((c) => CATEGORIES[c]).join(" · ")}</span>
          <h1 className="display" style={{ marginTop: 18 }}>{p.title}</h1>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <dl className="project-facts">
            {facts.map(([a, b], k) => (
              <div className={`fact reveal d${k}`} key={a}><dt>{a}</dt><dd>{b}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(24px,4vw,64px)" }}>
        <div className="container project-body">
          <h2 className="h3 reveal">{p.summary}</h2>
          <div>
            {p.text.map((t, k) => <p key={k} className={`${k === 0 ? "lead" : "muted"} reveal`}>{t}</p>)}
            {p.phases && (
              <div className="reveal" style={{ marginTop: 28 }}>
                <span className="eyebrow">Mission présentée</span>
                <ul className="phases">{p.phases.map((ph) => <li key={ph}>{ph}</li>)}</ul>
              </div>
            )}
            {caseBlocks.length > 0 && (
              <div className="case reveal" style={{ marginTop: 40 }}>
                {caseBlocks.map(([t, d]) => <div className="case-block" key={t}><h3>{t}</h3><p>{d}</p></div>)}
              </div>
            )}
            {p.temoignage && (
              <figure className="argument-quote reveal" style={{ marginTop: 32 }}>
                <blockquote>« {p.temoignage.text} »</blockquote>
                <figcaption>{p.temoignage.author}</figcaption>
              </figure>
            )}
            <div className="hero-actions reveal" style={{ marginTop: 36 }}>
              <Link className="btn" href={`/contact?projet=${contactType}`}>Un projet comparable ? Parlons-en <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div><span className="eyebrow">Galerie</span><h2 className="h3" style={{ marginTop: 14 }}>{imgs.length} photos &amp; documents</h2></div>
          </div>
          <Gallery items={imgs.map(([n, w, h], k) => ({ src: imgSrc(p.slug, n), srcSm: imgSrc(p.slug, n, true), w, h, alt: `${p.title} — photo ${k + 1}` }))} />
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <nav className="project-nav" aria-label="Autres projets">
            <Link href={`/projets/${prev.slug}`}><span>← Projet précédent</span><strong>{prev.title}</strong></Link>
            <Link href={`/projets/${next.slug}`}><span>Projet suivant →</span><strong>{next.title}</strong></Link>
          </nav>
        </div>
      </section>
      <Cta />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "CreativeWork", name: p.title, description: p.summary,
        image: `${SITE.url}${imgSrc(p.slug, p.cover)}`, creator: { "@type": "Person", name: "Jean-Yves Millet" },
        locationCreated: p.place, ...(p.year ? { dateCreated: p.year } : {}),
      }} />
    </>
  );
}
