import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { Arrow } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectImg } from "@/components/ProjectImg";
import { ContactSection, Faq, ReviewsSection, Services, Stats, Steps, Zone } from "@/components/Sections";
import { FEATURED, HERO_SLIDES, PROJECTS, getProject, imgSize, imgSrc } from "@/lib/content";

export const revalidate = 86400; // avis Google rafraîchis une fois par jour

export default function Home() {
  const slides = HERO_SLIDES.map(([slug, num, caption]) => {
    const [w, h] = imgSize(slug, num);
    return { src: imgSrc(slug, num), srcSm: imgSrc(slug, num, true), w, h, caption };
  });
  const words = ["Maisons d’architecte", "Extensions", "Réhabilitations", "Bureaux", "Éco-conception", "Maîtrise d’œuvre"];

  return (
    <>
      <section className="hero" aria-label="Présentation">
        <HeroSlider slides={slides} />
        <div className="container hero-content">
          <div className="hero-kicker"><span>Architecte DPLG</span><span>Montpellier · Hérault</span><span>Depuis 1999</span></div>
          <h1 className="display">
            <span className="line"><span>Architecture</span></span>
            <span className="line"><span><em>sensible</em> &amp;</span></span>
            <span className="line"><span>rigoureuse.</span></span>
          </h1>
          <div className="hero-bottom">
            <p>Volum accompagne particuliers et entreprises dans l&apos;acte de construire : maisons d&apos;architecte, extensions, réhabilitations et bâtiments tertiaires, de la première esquisse à la remise des clés.</p>
            <div className="hero-actions">
              <Link className="btn btn--emerald" href="/projets">Découvrir les réalisations <Arrow /></Link>
              <Link className="btn btn--ghost" href="/contact">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="agence" aria-labelledby="agence-title">
        <div className="container intro-grid">
          <aside className="intro-aside reveal">
            <div className="figure-stack">
              <ProjectImg slug="villa-cetd" num="09" alt="Villa C&D à Pignan, façade et jardin" className="reveal-img" />
              <ProjectImg slug="maison-d-affinage" num="07" alt="Bardage bois du Mas Salagou" className="reveal-img d2" />
              <span className="figure-tag">Diplômé de l&apos;École d&apos;Architecture de Montpellier</span>
            </div>
          </aside>
          <div className="intro-text">
            <span className="eyebrow reveal"><span className="section-num">01</span> L&apos;agence</span>
            <h2 className="h2 reveal" id="agence-title" style={{ marginTop: 18 }}>Construire,<br />c&apos;est d&apos;abord <em className="accent">écouter</em>.</h2>
            <p className="lead reveal">Diplômé de l&apos;École d&apos;Architecture de Montpellier, Jean-Yves Millet exerce sur le secteur montpelliérain depuis 1999. En charge de la réalisation de nombreux programmes immobiliers ainsi que d&apos;une centaine de logements individuels, Volum vous accompagne dans l&apos;acte de construire.</p>
            <p className="reveal muted">Une sensibilité certaine à la conception et aux études préliminaires, mais également une rigueur et une exigence pour la réalisation de votre projet. La mission de l&apos;architecte est appréhendée par une discussion et des échanges continus pour cerner, comprendre et concrétiser les besoins et les aspirations qui sont les vôtres.</p>
            <p className="reveal muted">Technologies nouvelles, éco-sensibilité, typologie et concept de vie sont autant de questions qui pourront orienter votre projet vers, pourquoi pas, <em>la maison du bonheur</em>.</p>
            <div className="signature reveal">
              <span className="signature-mono">JYM</span>
              <div><strong>Jean-Yves Millet</strong><span>Architecte DPLG · DUT Génie civil</span></div>
              <Link className="link-underline" href="/agence" style={{ marginLeft: "auto" }}>En savoir plus <Arrow /></Link>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "clamp(64px,8vw,120px)" }}><Stats /></div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">{[...words, ...words].map((w, i) => <span key={i}>{w}</span>)}</div>
      </div>

      <section className="section section--dark on-dark" id="expertises" aria-labelledby="expertises-title">
        <div className="container">
          <div className="section-head">
            <div className="reveal"><span className="eyebrow"><span className="section-num">02</span> Expertises</span><h2 className="h2" id="expertises-title">Une agence <em className="accent">généraliste</em>,<br />un savoir-faire complet.</h2></div>
            <p className="muted reveal d1">Du logement individuel aux bâtiments d&apos;activité, Volum conçoit et suit des projets de toutes échelles. La double formation d&apos;architecte et de technicien en génie civil de Jean-Yves Millet garantit une conception juste et un suivi technique rigoureux sur le terrain.</p>
          </div>
          <Services />
        </div>
      </section>

      <section className="section" id="realisations" aria-labelledby="real-title">
        <div className="container">
          <div className="section-head">
            <div className="reveal"><span className="eyebrow"><span className="section-num">03</span> Réalisations</span><h2 className="h2" id="real-title">Projets <em className="accent">choisis</em>.</h2></div>
            <div className="reveal d1" style={{ justifySelf: "end", display: "grid", gap: 24, maxWidth: 520 }}>
              <p className="muted" style={{ margin: 0 }}>Villas contemporaines, réhabilitations de mas, sièges d&apos;entreprise : une sélection de projets menés dans l&apos;Hérault et le Gard.</p>
              <Link className="link-underline" href="/projets">Voir les {PROJECTS.length} projets <Arrow /></Link>
            </div>
          </div>
          <div className="projects-grid projects-grid--featured">
            {FEATURED.map((s) => { const p = getProject(s)!; return <ProjectCard key={s} p={p} />; })}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "clamp(48px,6vw,96px)" }}>
            <Link className="btn" href="/projets">Toutes les réalisations <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section section--cream" id="methode" aria-labelledby="methode-title">
        <div className="container">
          <div className="section-head">
            <div className="reveal"><span className="eyebrow"><span className="section-num">04</span> Méthode</span><h2 className="h2" id="methode-title">De l&apos;idée<br />à la <em className="accent">remise des clés</em>.</h2></div>
            <p className="muted reveal d1">Chaque projet suit un chemin clair, ponctué d&apos;échanges réguliers. Vous restez au cœur des décisions, nous prenons en charge la complexité.</p>
          </div>
          <Steps />
        </div>
      </section>

      <ReviewsSection />
      <Faq />
      <Zone />
      <ContactSection />
    </>
  );
}
