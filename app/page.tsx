import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { Arrow } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectImg } from "@/components/ProjectImg";
import { Arguments, Audiences, Budget, ContactSection, Faq, ReviewsSection, Stats, Steps, Zone } from "@/components/Sections";
import { FEATURED, HERO_SLIDES, PROJECTS, getProject, imgSize, imgSrc } from "@/lib/content";

export const revalidate = 86400; // avis Google rafraîchis une fois par jour

export default function Home() {
  const slides = HERO_SLIDES.map(([slug, num, caption]) => {
    const [w, h] = imgSize(slug, num);
    return { src: imgSrc(slug, num), srcSm: imgSrc(slug, num, true), w, h, caption };
  });
  const words = ["Maisons d’architecte", "Extensions", "Réhabilitations", "Bureaux", "Permis de construire", "Suivi de chantier"];

  return (
    <>
      <section className="hero" aria-label="Présentation">
        <HeroSlider slides={slides} />
        <div className="container hero-content">
          <div className="hero-kicker"><span>Architecte DPLG</span><span>Génie civil</span><span>Montpellier · Hérault · depuis 1999</span></div>
          <h1 className="display">
            <span className="line"><span>Une architecture</span></span>
            <span className="line"><span>dessinée pour</span></span>
            <span className="line"><span>être <em>construite</em>.</span></span>
          </h1>
          <div className="hero-bottom">
            <div>
              <p>La sensibilité de l&apos;architecte, la rigueur du constructeur. Jean-Yves Millet conçoit votre maison, votre extension ou vos bureaux, et suit lui-même le chantier jusqu&apos;à la remise des clés.</p>
            </div>
            <div className="hero-actions">
              <Link className="btn btn--emerald" href="/contact">Parlons de votre projet <Arrow /></Link>
              <Link className="btn btn--ghost" href="/projets">Voir les réalisations</Link>
            </div>
          </div>
        </div>
      </section>

      <Audiences />

      <section className="section" id="agence" aria-labelledby="agence-title" style={{ paddingTop: "clamp(48px,6vw,96px)" }}>
        <div className="container intro-grid">
          <aside className="intro-aside reveal">
            <div className="figure-stack">
              <ProjectImg slug="villa-l" num="14" alt="Chantier de la villa L : pose de la charpente" className="reveal-img" />
              <ProjectImg slug="villa-l" num="01" alt="Villa L livrée, Prades-le-Lez" className="reveal-img d2" />
              <span className="figure-tag">Du plan au chantier</span>
            </div>
          </aside>
          <div className="intro-text">
            <span className="eyebrow reveal"><span className="section-num">01</span> L&apos;architecte</span>
            <h2 className="h2 reveal" id="agence-title" style={{ marginTop: 18 }}>Concepteur <em className="accent">et</em> constructeur.</h2>
            <p className="lead reveal">Vous arrivez avec des envies, parfois quelques idées, parfois simplement un terrain. Notre rôle est d&apos;en faire un projet cohérent avec votre mode de vie, votre budget et les contraintes du site — puis de le mener jusqu&apos;au bout.</p>
            <p className="reveal muted">Diplômé de l&apos;École d&apos;Architecture de Montpellier et titulaire d&apos;un DUT Génie civil, Jean-Yves Millet exerce sur le secteur montpelliérain depuis 1999. Ancien directeur technique d&apos;un promoteur, il a mené de nombreux programmes immobiliers et plus d&apos;une centaine de maisons individuelles.</p>
            <p className="reveal muted">Cette double culture change concrètement votre projet : des plans qui anticipent la structure, le terrain et la mise en œuvre ; des chiffrages réalistes ; des entreprises consultées sur un dossier précis ; un chantier suivi par celui qui l&apos;a dessiné. Avec, toujours, la même ambition : faire de votre projet, pourquoi pas, <em>la maison du bonheur</em>.</p>
            <div className="signature reveal">
              <span className="signature-mono">JYM</span>
              <div><strong>Jean-Yves Millet</strong><span>Architecte DPLG · DUT Génie civil</span></div>
              <Link className="link-underline" href="/agence" style={{ marginLeft: "auto" }}>Son parcours <Arrow /></Link>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "clamp(64px,8vw,120px)" }}><Stats /></div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">{[...words, ...words].map((w, i) => <span key={i}>{w}</span>)}</div>
      </div>

      <section className="section section--dark on-dark" id="pourquoi" aria-labelledby="pourquoi-title">
        <div className="container">
          <div className="section-head">
            <div className="reveal"><span className="eyebrow"><span className="section-num">02</span> Pourquoi Volum</span><h2 className="h2" id="pourquoi-title">Ce qui <em className="accent">sécurise</em><br />votre projet.</h2></div>
            <p className="muted reveal d1">Construire engage beaucoup : votre budget, votre temps, votre cadre de vie. Voici ce que nous mettons en place pour que votre projet se concrétise comme prévu — et ce qu&apos;en disent nos clients.</p>
          </div>
          <Arguments />
        </div>
      </section>

      <section className="section" id="realisations" aria-labelledby="real-title">
        <div className="container">
          <div className="section-head">
            <div className="reveal"><span className="eyebrow"><span className="section-num">03</span> Réalisations</span><h2 className="h2" id="real-title">Projets <em className="accent">livrés</em>.</h2></div>
            <div className="reveal d1" style={{ justifySelf: "end", display: "grid", gap: 24, maxWidth: 520 }}>
              <p className="muted" style={{ margin: 0 }}>Maisons contemporaines, extensions, réhabilitations de mas, sièges d&apos;entreprise : des projets suivis de l&apos;esquisse au chantier, dans l&apos;Hérault et le Gard.</p>
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
            <div className="reveal"><span className="eyebrow"><span className="section-num">04</span> Méthode</span><h2 className="h2" id="methode-title">De votre idée<br />à la <em className="accent">remise des clés</em>.</h2></div>
            <p className="muted reveal d1">Sept étapes claires, ponctuées d&apos;échanges réguliers. Vous gardez la main sur les décisions ; nous prenons en charge la technique, les démarches et la coordination des entreprises.</p>
          </div>
          <Steps />
        </div>
      </section>

      <Budget />
      <ReviewsSection />
      <Faq />
      <Zone />
      <ContactSection />
    </>
  );
}
