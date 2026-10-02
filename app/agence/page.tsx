import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { ProjectImg } from "@/components/ProjectImg";
import { Breadcrumb, Cta, Services, Stats, Zone } from "@/components/Sections";

export const metadata: Metadata = {
  title: "L'agence — Jean-Yves Millet, architecte DPLG",
  description: "Jean-Yves Millet, architecte DPLG et technicien du génie civil : parcours, approche et expertises. Une architecture dessinée pour être construite, à Montpellier et dans l'Hérault depuis 1999.",
  alternates: { canonical: "/agence" },
};

const VALUES: [string, string, string][] = [
  ["ear", "Comprendre", "Vos envies, votre mode de vie, votre budget, votre terrain : tout commence par un vrai dialogue, avant le premier trait."],
  ["ruler", "Anticiper", "La culture du génie civil permet d'intégrer dès la conception la structure, le sol et la mise en œuvre. Les mauvaises surprises se règlent sur plan, pas sur le chantier."],
  ["leaf", "Durer", "Orientation, inertie, matériaux, énergie : des bâtiments sobres et confortables, performants (RE2020 pour le neuf), pensés pour bien vieillir."],
  ["shield", "Accompagner", "Un seul interlocuteur, de la première esquisse à la réception des travaux. Celui qui a dessiné votre projet est aussi celui qui le suit sur le chantier."],
];

const TIMELINE: [string, string, string][] = [
  ["Formation", "DUT Génie civil", "Une première formation technique qui ancre durablement le goût du chantier, des structures et de la construction."],
  ["Diplôme", "Architecte DPLG", "Diplômé par le gouvernement de l'École d'Architecture de Montpellier."],
  ["1999", "Création de l'agence", "Installation en libéral sur le secteur montpelliérain, sous le nom Volum architecture."],
  ["2000 →", "Programmes immobiliers", "Directeur technique de la société MV Promotion en parallèle de l'activité libérale : conduite de programmes de logements collectifs."],
  ["2013", "Innovation", "Développement du concept Cassine, module d'habitat circulaire en bois breveté par l'agence."],
  ["Aujourd'hui", "Plus de 100 maisons", "Une centaine de logements individuels, des bureaux, des réhabilitations, et toujours la même exigence."],
];

export default function Agence() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["L'agence"]]} />
          <div className="page-hero-grid">
            <h1 className="display reveal">L&apos;architecte <em className="accent">et</em> le constructeur.</h1>
            <p className="lead reveal d1">Volum, c&apos;est l&apos;agence de Jean-Yves Millet : architecte DPLG, technicien du génie civil, installé à Montarnaud, aux portes de Montpellier, depuis 1999.</p>
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split-media reveal-img" style={{ aspectRatio: "21/9" }}>
            <ProjectImg slug="villa-cetd" num="06" alt="Villa C&D, Pignan" priority sizes="100vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow reveal">Jean-Yves Millet</span>
            <h2 className="h2 reveal" style={{ margin: "18px 0 32px" }}>Dessiner en sachant <em className="accent">comment construire</em>.</h2>
            <p className="lead reveal">Diplômé de l&apos;École d&apos;Architecture de Montpellier et titulaire d&apos;un DUT en Génie civil, Jean-Yves Millet allie la sensibilité du concepteur à la rigueur du technicien.</p>
            <p className="muted reveal">Cette double compétence lui confère une forte appétence tant pour la conception architecturale que pour le suivi technique sur le terrain. Actif sur le secteur montpelliérain depuis 1999, il a notamment exercé les fonctions de directeur technique pour la société MV Promotion au début des années 2000, parallèlement à son activité libérale.</p>
            <p className="muted reveal">Son activité est généraliste et se répartit principalement entre le logement individuel et collectif — environ 60 % — et les bâtiments d&apos;activité comme les bureaux — environ 30 %. Il compte à son actif plusieurs programmes immobiliers complexes et plus d&apos;une centaine de maisons individuelles.</p>
            <ul className="checklist reveal">
              <li>Architecte DPLG, inscrit à l&apos;Ordre des architectes</li>
              <li>DUT Génie civil</li>
              <li>Exercice libéral depuis 1999</li>
              <li>Maisons individuelles, logements collectifs, bureaux, ERP</li>
            </ul>
          </div>
          <div className="split-media reveal-img"><ProjectImg slug="villa-l" num="01" alt="Villa L, Prades-le-Lez" /></div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <div className="reveal"><span className="eyebrow">Approche</span><h2 className="h2">Quatre engagements, <em className="accent">chaque projet</em>.</h2></div>
            <p className="muted reveal d1">Technologies nouvelles, éco-sensibilité, typologie et concept de vie : autant de questions qui orientent chaque projet vers une réponse juste — et constructible.</p>
          </div>
          <div className="values">
            {VALUES.map(([ic, t, d], i) => (
              <article className={`value reveal d${i}`} key={t}><Icon name={ic} className="" /><h3>{t}</h3><p>{d}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark on-dark" id="expertises" aria-labelledby="expertises-title">
        <div className="container">
          <div className="section-head">
            <div className="reveal"><span className="eyebrow">Expertises</span><h2 className="h2" id="expertises-title">Du logement <em className="accent">au tertiaire</em>.</h2></div>
            <p className="muted reveal d1">Environ 60 % de l&apos;activité concerne le logement individuel et collectif, 30 % les bâtiments d&apos;activité et les bureaux. Les missions vont de la simple conception jusqu&apos;à la maîtrise d&apos;œuvre complète.</p>
          </div>
          <Services />
        </div>
      </section>

      <section className="section section--emerald on-dark">
        <div className="container intro-grid">
          <div className="reveal"><span className="eyebrow">Parcours</span><h2 className="h2" style={{ marginTop: 18 }}>Plus de 25 ans<br />d&apos;<em className="accent">architecture</em>.</h2></div>
          <div className="timeline">
            {TIMELINE.map(([y, t, d]) => (
              <div className="tl-item reveal" key={t}><div className="tl-year">{y}</div><div><h3>{t}</h3><p>{d}</p></div></div>
            ))}
          </div>
        </div>
        <div className="container" style={{ marginTop: "clamp(64px,8vw,120px)" }}><Stats /></div>
      </section>

      <Zone />
      <Cta />
    </>
  );
}
