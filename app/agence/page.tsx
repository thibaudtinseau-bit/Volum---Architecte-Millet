import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { ProjectImg } from "@/components/ProjectImg";
import { Breadcrumb, Cta, Stats, Zone } from "@/components/Sections";

export const metadata: Metadata = {
  title: "L'agence — Jean-Yves Millet, architecte DPLG",
  description: "Parcours, valeurs et approche de Jean-Yves Millet, architecte DPLG diplômé de l'École d'Architecture de Montpellier, installé à Montarnaud depuis 1999.",
  alternates: { canonical: "/agence" },
};

const VALUES: [string, string, string][] = [
  ["ear", "Écoute", "Chaque projet commence par un dialogue. Comprendre vos besoins et vos aspirations est la base d'une architecture juste."],
  ["ruler", "Rigueur", "Une double compétence architecte et génie civil : des plans précis, des chantiers maîtrisés, des budgets respectés."],
  ["leaf", "Éco-sensibilité", "Orientation, inertie, matériaux, énergie : concevoir des bâtiments sobres, confortables et durables."],
  ["shield", "Engagement", "Un interlocuteur unique, présent de la première esquisse à la réception des travaux."],
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
            <h1 className="display reveal">L&apos;architecte, <em className="accent">l&apos;agence</em>.</h1>
            <p className="lead reveal d1">Volum, c&apos;est l&apos;agence de Jean-Yves Millet, architecte DPLG installé à Montarnaud, aux portes de Montpellier, depuis 1999.</p>
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
            <h2 className="h2 reveal" style={{ margin: "18px 0 32px" }}>Concevoir et <em className="accent">construire</em>.</h2>
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
            <div className="reveal"><span className="eyebrow">Valeurs</span><h2 className="h2">Ce qui guide <em className="accent">chaque projet</em>.</h2></div>
            <p className="muted reveal d1">Technologies nouvelles, éco-sensibilité, typologie et concept de vie : autant de questions qui orientent chaque projet vers une réponse unique.</p>
          </div>
          <div className="values">
            {VALUES.map(([ic, t, d], i) => (
              <article className={`value reveal d${i}`} key={t}><Icon name={ic} className="" /><h3>{t}</h3><p>{d}</p></article>
            ))}
          </div>
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
