import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { Arrow } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectImg } from "@/components/ProjectImg";
import { ContactSection, Engagements, ExpertiseList, Faq, ReviewsSection, Stats, Steps } from "@/components/Sections";
import { ZoneVilles } from "@/components/Villes";
import type { Metadata } from "next";
import { AGENCE_FIGURE, HERO_SLIDES, PROJECTS, imgAlt, imgSize, imgSrc } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta("/", "Volum, architecte DPLG à Montpellier et Montarnaud", "Volum, Jean-Yves Millet architecte DPLG à Montarnaud depuis 1999 : maisons, extensions, rénovations et bâtiments professionnels à Montpellier et dans l'Hérault."),
  title: { absolute: "Volum, architecte DPLG à Montpellier et Montarnaud" },
};

export const revalidate = 86400; // avis Google rafraîchis une fois par jour

export default function Home() {
  const slides = HERO_SLIDES.map(([slug, num, caption]) => {
    const [w, h] = imgSize(slug, num);
    return { src: imgSrc(slug, num), srcSm: imgSrc(slug, num, true), w, h, caption };
  });

  return (
    <>
      <section className="hero on-dark" aria-labelledby="hero-title">
        <HeroSlider slides={slides}>
          <span className="eyebrow">Volum — Architecture &amp; maîtrise d&apos;œuvre</span>
          <h1 className="display" id="hero-title"><span>La sensibilité de l&apos;architecte.</span> <span>La rigueur du bâtisseur.</span></h1>
          <p className="hero-lead">VOLUM conçoit et accompagne vos projets de construction, de rénovation et d&apos;extension à Montpellier et dans l&apos;Hérault. Une approche qui associe création architecturale, expertise technique et maîtrise du chantier.</p>
          <div className="actions">
            <Link className="btn btn--light" href="/contact">Échanger sur mon projet <Arrow /></Link>
            <Link className="btn btn--outline-light" href="/agence">Découvrir l&apos;agence</Link>
          </div>
        </HeroSlider>
      </section>

      <section className="section" id="expertises" aria-labelledby="expertises-title">
        <div className="container comp-split">
          <div className="stack">
            <span className="eyebrow">Expertises</span>
            <h2 className="h2" id="expertises-title">Quatre types de projets, une même exigence.</h2>
            <p className="muted">Maisons neuves, extensions, réhabilitations ou bâtiments professionnels : chaque mission peut aller de la conception seule au suivi complet du chantier.</p>
            <div className="actions">
              <Link className="btn btn--secondary" href="/contact">Parler de mon projet <Arrow /></Link>
            </div>
          </div>
          <ExpertiseList />
        </div>
      </section>

      <section className="section section--mineral" id="engagements" aria-labelledby="engagements-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Nos engagements</span>
              <h2 className="h2" id="engagements-title">Une architecture pensée dans sa globalité.</h2>
            </div>
            <p>Construire engage votre budget, votre temps et votre cadre de vie. Voici ce sur quoi repose chaque projet de l&apos;agence.</p>
          </div>
          <Engagements />
          <div className="section-foot">
            <Link className="btn" href="/contact">Échanger sur mon projet <Arrow /></Link>
            <Link className="link-arrow" href="/approche">Découvrir notre approche <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section" id="agence" aria-labelledby="agence-title">
        <div className="container comp-split comp-split--center">
          <figure style={{ margin: 0 }}>
            <div className="figure-stack">
              {AGENCE_FIGURE.images.map(([slug, num]) => <ProjectImg key={slug + num} slug={slug} num={num} alt={imgAlt(slug, num)} />)}
            </div>
            <figcaption className="figure-caption">{AGENCE_FIGURE.caption}</figcaption>
          </figure>
          <div className="stack">
            <span className="eyebrow">L&apos;agence</span>
            <h2 className="h2" id="agence-title">Jean-Yves Millet, architecte à Montarnaud depuis 1999.</h2>
            <p className="lead">Diplômé de l&apos;École d&apos;Architecture de Montpellier et titulaire d&apos;un DUT Génie civil, Jean-Yves Millet dessine en sachant comment le bâtiment sera construit.</p>
            <p className="muted">Ancien directeur technique d&apos;un promoteur, il a mené des programmes immobiliers et conçu plus d&apos;une centaine de maisons individuelles, des bureaux et des réhabilitations.</p>
            <div className="signature">
              <div><Link href="/jean-yves-millet"><strong>Jean-Yves Millet</strong></Link><span>Architecte DPLG · DUT Génie civil</span></div>
              <Link className="link-arrow" href="/agence">Découvrir l&apos;agence <Arrow /></Link>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "var(--space-xl)" }}><Stats /></div>
      </section>

      <section className="section section--flush-top" id="projets" aria-labelledby="projets-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Projets</span>
              <h2 className="h2" id="projets-title">Du logement au bâtiment d&apos;activité.</h2>
            </div>
            <p>Maisons, intérieurs, logements collectifs, bureaux, bâtiments industriels et agricoles, et les plans qui les préparent : six dossiers pour découvrir le travail de l&apos;agence.</p>
          </div>
          <div className="projects-grid projects-grid--featured">
            {PROJECTS.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
          <div className="section-foot">
            <Link className="btn btn--secondary" href="/projets">Voir tous les projets <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section section--mineral" id="methode" aria-labelledby="methode-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Notre approche</span>
              <h2 className="h2" id="methode-title">De la première idée à la réalisation.</h2>
            </div>
            <p>Cinq étapes, ponctuées d&apos;échanges réguliers. Vous gardez la main sur les décisions ; l&apos;agence prend en charge la technique, les démarches et la coordination.</p>
          </div>
          <Steps />
          <div className="section-foot">
            <Link className="btn" href="/contact">Parler de mon projet <Arrow /></Link>
            <Link className="link-arrow" href="/approche">Découvrir notre approche <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section" id="zone" aria-labelledby="zone-title">
        <div className="container comp-split">
          <div className="stack sticky">
            <span className="eyebrow">Zone d&apos;intervention</span>
            <h2 className="h2" id="zone-title">Architecte à Montpellier et dans tout l&apos;Hérault.</h2>
            <p className="muted">Depuis Montarnaud, l&apos;agence accompagne les projets de la Métropole de Montpellier au bassin de Thau, du Pic Saint-Loup au Pays de Lunel. Chaque commune a ses règles d&apos;urbanisme, ses risques et ses paysages&nbsp;: retrouvez-les sur sa page.</p>
            <Link className="link-arrow" href="/architecte">Toutes nos communes d&apos;intervention <Arrow /></Link>
          </div>
          <ZoneVilles />
        </div>
      </section>

      <ReviewsSection mineral />
      <Faq />
      <ContactSection />
    </>
  );
}
