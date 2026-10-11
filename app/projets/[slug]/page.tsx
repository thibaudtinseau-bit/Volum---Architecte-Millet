import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/Gallery";
import { Arrow } from "@/components/Icons";
import { ProjectImg } from "@/components/ProjectImg";
import { Breadcrumb, Cta, JsonLd } from "@/components/Sections";
import { PROJECTS, SITE, getProject, imgSrc, projectImages } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title} — ${p.type}`;
  return {
    title,
    description: `${p.summary} Projets de Volum, Jean-Yves Millet architecte DPLG.`,
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
  const facts: [string, string][] = [
    ["Domaine", p.eyebrow], ["Contenu", p.type], ["Galerie", `${imgs.length} visuels`], ["Secteur", "Montpellier & Hérault"],
  ];

  return (
    <>
      <section className="project-hero on-dark">
        <ProjectImg slug={p.slug} num={p.cover} alt={p.title} priority sizes="100vw" />
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["Projets", "/projets"], [p.title]]} />
          <span className="eyebrow">{p.eyebrow}</span>
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
            <div className="reveal" style={{ marginTop: 28 }}>
              <span className="eyebrow">Dans ce dossier</span>
              <ul className="phases">{p.themes.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="hero-actions reveal" style={{ marginTop: 36 }}>
              <Link className="btn" href={`/contact?projet=${p.contact}`}>Un projet comparable ? Parlons-en <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div><span className="eyebrow">Galerie</span><h2 className="h3" style={{ marginTop: 14 }}>{imgs.length} photos, perspectives &amp; plans</h2></div>
          </div>
          <Gallery items={imgs.map(([n, w, h, alt], k) => ({ src: imgSrc(p.slug, n), srcSm: imgSrc(p.slug, n, true), w, h, alt: alt || `${p.title} — visuel ${k + 1}` }))} />
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <nav className="project-nav" aria-label="Autres dossiers">
            <Link href={`/projets/${prev.slug}`}><span>← Dossier précédent</span><strong>{prev.title}</strong></Link>
            <Link href={`/projets/${next.slug}`}><span>Dossier suivant →</span><strong>{next.title}</strong></Link>
          </nav>
        </div>
      </section>
      <Cta />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ImageGallery", name: p.title, description: p.summary,
        url: `${SITE.url}/projets/${p.slug}`, image: imgs.slice(0, 10).map(([n]) => `${SITE.url}${imgSrc(p.slug, n)}`),
        creator: { "@type": "Person", name: "Jean-Yves Millet" },
      }} />
    </>
  );
}
