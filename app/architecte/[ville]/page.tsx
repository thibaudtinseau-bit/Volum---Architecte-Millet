import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { Arrow } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectImg } from "@/components/ProjectImg";
import { Breadcrumb, JsonLd, Steps } from "@/components/Sections";
import { StickyCta } from "@/components/StickyCta";
import { VilleLinks, distanceLabel } from "@/components/Villes";
import { EXPERTISES, SITE, getProject, imgAlt, imgSrc } from "@/lib/content";
import { VILLES, getSecteur, getVille, voisines } from "@/lib/villes";

type Params = { params: Promise<{ ville: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return VILLES.map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const v = getVille((await params).ville);
  if (!v) return {};
  const [dossier, num] = v.image;
  return {
    title: { absolute: `${v.title} | Volum` },
    description: v.description,
    alternates: { canonical: `/architecte/${v.slug}` },
    openGraph: {
      type: "website", url: `/architecte/${v.slug}`, title: `Architecte ${v.a} — Volum, Jean-Yves Millet`,
      description: v.description, images: [{ url: imgSrc(dossier, num) }],
    },
  };
}

const num = (i: number) => String(i + 1).padStart(2, "0");

export default async function VillePage({ params }: Params) {
  const v = getVille((await params).ville);
  if (!v) notFound();
  const url = `${SITE.url}/architecte/${v.slug}`;
  const secteur = getSecteur(v.secteur);
  const proches = voisines(v);
  const [dossier, image] = v.image;
  const heroProject = getProject(dossier)!;
  const expertise = (id: string) => EXPERTISES.find((e) => e.id === id)!;
  const facts: [string, string][] = [
    ["Commune", `${v.nom} (${v.cp})`],
    ["Intercommunalité", v.interco],
    ["Urbanisme", v.urbanisme],
    ["Depuis Montarnaud", distanceLabel(v).replace(" de l'agence", " à vol d'oiseau")],
  ];

  return (
    <>
      <section className="page-hero ville-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["Architecte dans l'Hérault", "/architecte"], [v.nom]]} />
          <div className="comp-split comp-split--center">
            <div className="stack">
              <span className="eyebrow">Architecte DPLG · {v.nom} ({v.cp})</span>
              <h1 className="display">Architecte {v.a}.</h1>
              <p className="lead">{v.accroche}</p>
              <div className="actions">
                <a className="btn" href="#demande">Étudier mon projet {v.a} <Arrow /></a>
                <a className="btn btn--secondary" href={`tel:${SITE.phoneLink}`}>Appeler le {SITE.phone}</a>
              </div>
            </div>
            <figure className="ville-hero-media">
              <div className="split-media">
                <ProjectImg slug={dossier} num={image} alt={imgAlt(dossier, image)} priority sizes="(max-width: 900px) 100vw, 55vw" />
              </div>
              <figcaption className="figure-caption">Projet de l&apos;agence · {heroProject.title}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section--tight" aria-label={`${v.nom} en bref`}>
        <div className="container">
          <dl className="project-facts">
            {facts.map(([a, b]) => <div className="fact" key={a}><dt>{a}</dt><dd>{b}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="intro-title">
        <div className="container comp-split">
          <div className="stack sticky">
            <span className="eyebrow">Votre architecte</span>
            <h2 className="h2" id="intro-title">Votre projet {v.a}, de l&apos;esquisse au chantier.</h2>
          </div>
          <div className="text">
            <p className="lead">{v.intro[0]}</p>
            <p className="muted">{v.intro[1]}</p>
            <div className="signature">
              <div>
                <Link href="/jean-yves-millet"><strong>Jean-Yves Millet</strong></Link>
                <span>Architecte DPLG · DUT Génie civil · Montarnaud depuis 1999</span>
              </div>
              <Link className="link-arrow" href="/agence">Découvrir l&apos;agence <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mineral" aria-labelledby="territoire-title">
        <div className="container comp-split">
          <div className="stack sticky">
            <span className="eyebrow">Construire {v.a}</span>
            <h2 className="h2" id="territoire-title">{v.territoire.titre}</h2>
          </div>
          <div className="text">
            {v.territoire.texte.map((t, i) => <p key={i} className={i === 0 ? "lead" : "muted"}>{t}</p>)}
            <h3 className="h4 ville-subtitle">Quartiers et secteurs {v.de}</h3>
            <ul className="communes">{v.quartiers.map((q) => <li key={q}>{q}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="projets-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Vos projets</span>
              <h2 className="h2" id="projets-title">Maison, extension, rénovation&nbsp;: vos projets {v.a}.</h2>
            </div>
            <p>Chaque mission peut aller de la conception seule, jusqu&apos;au dossier de permis de construire, au suivi complet du chantier et à la réception des travaux.</p>
          </div>
          <ol className="numbered numbered--2">
            {v.projets.map((p, i) => (
              <li key={p.titre}>
                <span className="num" aria-hidden="true">{num(i)}</span>
                <h3>{p.titre}</h3>
                <p>{p.texte}</p>
                <Link className="link-arrow" href={`/expertises#${p.expertise}`}>{expertise(p.expertise).title} <Arrow /></Link>
              </li>
            ))}
          </ol>
          <div className="section-foot">
            <a className="btn" href="#demande">Parler de mon projet <Arrow /></a>
            <Link className="link-arrow" href="/expertises">Toutes les expertises <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section section--mineral" aria-labelledby="regles-title">
        <div className="container comp-split">
          <div className="stack sticky">
            <span className="eyebrow">Urbanisme et risques</span>
            <h2 className="h2" id="regles-title">Ce qu&apos;il faut vérifier avant de construire {v.a}.</h2>
            <p className="muted">Ces points sont examinés dès le premier rendez-vous, sur votre parcelle, au regard des règles d&apos;urbanisme en vigueur. Ils orientent l&apos;implantation, les volumes et le dossier à déposer.</p>
            <Link className="link-arrow" href="/approche">Les étapes d&apos;un projet <Arrow /></Link>
          </div>
          <ol className="budget-steps">
            {v.contraintes.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="methode-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Notre approche</span>
              <h2 className="h2" id="methode-title">De la première idée à la réception.</h2>
            </div>
            <p>Cinq étapes, ponctuées d&apos;échanges réguliers&nbsp;: vous gardez la main sur les décisions, l&apos;agence prend en charge la technique, les démarches et la coordination selon la mission confiée.</p>
          </div>
          <Steps />
        </div>
      </section>

      <section className="section section--flush-top" aria-labelledby="refs-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Projets de l&apos;agence</span>
              <h2 className="h2" id="refs-title">Des projets pour vous projeter.</h2>
            </div>
            <p>Maisons, intérieurs, logements, bâtiments professionnels&nbsp;: quelques dossiers de l&apos;agence, en photographies, perspectives et plans.</p>
          </div>
          <div className="projects-grid">
            {v.refs.map((s) => <ProjectCard key={s} p={getProject(s)!} />)}
          </div>
          <div className="section-foot">
            <Link className="btn btn--secondary" href="/projets">Voir tous les projets <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section section--mineral" id="faq" aria-labelledby="faq-title">
        <div className="container comp-split">
          <div className="stack sticky">
            <span className="eyebrow">Questions fréquentes</span>
            <h2 className="h2" id="faq-title">Votre projet {v.a}&nbsp;: vos questions.</h2>
            <p className="muted">Pour toute autre question, appelez l&apos;agence ou consultez les questions générales sur le budget, les délais et le chantier.</p>
            <div className="actions">
              <a className="link-arrow" href={`tel:${SITE.phoneLink}`}>{SITE.phone} <Arrow /></a>
              <Link className="link-arrow" href="/#faq">Questions générales <Arrow /></Link>
            </div>
          </div>
          <div className="faq">
            {v.faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="section" id="demande" aria-labelledby="demande-title">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="stack">
                <span className="eyebrow">Demande de projet</span>
                <h2 className="h2" id="demande-title">Parlons de votre projet {v.a}.</h2>
                <p className="lead">Terrain à bâtir, maison à agrandir, bâtiment à réhabiliter ou locaux professionnels&nbsp;: décrivez votre projet en quelques lignes.</p>
              </div>
              <ul className="facts-list">
                <li>Un premier échange pour cerner vos besoins, le site et les règles applicables {v.a}</li>
                <li>Un interlocuteur unique, de la première esquisse au suivi des travaux</li>
                <li>Une mission et des honoraires fixés par contrat, avant tout engagement</li>
              </ul>
              <div className="contact-lines">
                <div className="contact-line"><span>Téléphone</span><a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a></div>
                <div className="contact-line"><span>Agence</span><p>{SITE.address}<br />{SITE.zip} {SITE.city}</p></div>
              </div>
            </div>
            <div className="form-panel"><ContactForm commune={v.nom} /></div>
          </div>
        </div>
      </section>

      <section className="section section--mineral" aria-labelledby="voisines-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">{secteur.nom}</span>
              <h2 className="h2" id="voisines-title">L&apos;agence intervient aussi autour {v.de}.</h2>
            </div>
            <p>Installée à Montarnaud, l&apos;agence accompagne les projets dans tout l&apos;Hérault. Chaque commune a ses règles, ses paysages et ses contraintes&nbsp;: retrouvez-les commune par commune.</p>
          </div>
          <VilleLinks villes={proches} />
          <div className="section-foot">
            <Link className="link-arrow" href={`/architecte#${v.secteur}`}>Toutes les communes du secteur <Arrow /></Link>
            <Link className="link-arrow" href="/architecte">Toutes nos communes d&apos;intervention <Arrow /></Link>
          </div>
        </div>
      </section>

      <StickyCta text={`Un projet ${v.a}\u00a0?`} label="Être recontacté" target="demande" />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Architecte ${v.a}`,
        serviceType: "Architecte DPLG — conception et maîtrise d'œuvre",
        description: v.description,
        url,
        image: `${SITE.url}${imgSrc(dossier, image)}`,
        provider: { "@id": `${SITE.url}/#agence` },
        areaServed: {
          "@type": "City", name: v.nom,
          address: { "@type": "PostalAddress", postalCode: v.cp, addressLocality: v.nom, addressRegion: "Occitanie", addressCountry: "FR" },
          geo: { "@type": "GeoCoordinates", latitude: v.lat, longitude: v.lng },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: `Projets d'architecture ${v.a}`,
          itemListElement: EXPERTISES.map((e) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `${e.title} ${v.a}`, url: `${SITE.url}/expertises#${e.id}` } })),
        },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: v.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      }} />
    </>
  );
}
