import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { ProjectImg } from "@/components/ProjectImg";
import { Breadcrumb, Cta, Stats } from "@/components/Sections";

export const metadata: Metadata = {
  title: "L'agence — Jean-Yves Millet, architecte DPLG à Montarnaud",
  description: "Volum, l'agence de Jean-Yves Millet, architecte DPLG et titulaire d'un DUT Génie civil, installée à Montarnaud près de Montpellier depuis 1999 : vision, parcours et engagement.",
  alternates: { canonical: "/agence" },
};

const PILLARS: [string, string][] = [
  ["La vision", "Un projet part d'un lieu et de ceux qui vont l'habiter. Orientation, lumière, vues, usages : la forme découle de ces données plutôt que d'un style imposé. Éco-conception, technologies nouvelles et façons de vivre orientent chaque réponse."],
  ["L'expertise", "Une formation d'architecte complétée par un DUT Génie civil, puis une expérience de directeur technique chez un promoteur. Les questions de structure, de terrain et de mise en œuvre sont traitées directement, dès les premiers plans."],
  ["L'engagement", "Un interlocuteur unique, de la première esquisse à la réception des travaux lorsque la mission le prévoit. Budget, matériaux, arbitrages : les décisions importantes sont prises avec vous, avant le chantier."],
];

const TIMELINE: [string, string, string][] = [
  ["Formation", "DUT Génie civil", "Une première formation technique, tournée vers les structures et la construction."],
  ["Diplôme", "Architecte DPLG", "Diplômé par le gouvernement de l'École d'Architecture de Montpellier."],
  ["1999", "Création de l'agence", "Installation en libéral sur le secteur montpelliérain, sous le nom Volum architecture."],
  ["Début des années 2000", "Programmes immobiliers", "Directeur technique de la société MV Promotion, en parallèle de l'activité libérale : conduite de programmes de logements collectifs."],
  ["2013", "Concept Cassine", "Développement d'un module d'habitat circulaire en bois, breveté par l'agence."],
  ["Aujourd'hui", "Plus de 100 maisons", "Une centaine de maisons individuelles, des bureaux et des réhabilitations dans l'Hérault et le Gard."],
];

export default function Agence() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["L'agence"]]} />
          <div className="page-hero-grid">
            <div className="stack">
              <span className="eyebrow">L&apos;agence</span>
              <h1 className="display" data-v3-mark="vision">Une vision de l&apos;architecture, une exigence de construction.</h1>
            </div>
            <p className="lead">Fondée autour de l&apos;expérience de Jean-Yves Millet, VOLUM développe une architecture attentive aux lieux, aux usages et aux réalités de la construction.</p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="split-media" style={{ aspectRatio: "21 / 9" }}>
          <ProjectImg slug="villa-cetd" num="06" alt="Villa C&D, Pignan" priority sizes="100vw" />
        </div>
      </div>

      <section className="section" aria-labelledby="portrait-title">
        <div className="container comp-split comp-split--center">
          <div className="split-media"><ProjectImg slug="villa-l" num="01" alt="Villa L, Prades-le-Lez" sizes="(max-width: 900px) 100vw, 40vw" /></div>
          <div className="stack">
            <span className="eyebrow" data-num="01">Jean-Yves Millet</span>
            <h2 className="h2" id="portrait-title">Dessiner en sachant comment construire.</h2>
            <p className="lead">Architecte DPLG et titulaire d&apos;un DUT Génie civil, Jean-Yves Millet associe une approche sensible de la conception à une connaissance concrète des contraintes techniques du bâtiment.</p>
            <p className="muted">Cette double culture nourrit chaque projet, depuis les premières intentions architecturales jusqu&apos;à sa réalisation. Son activité se partage entre le logement, pour environ 60 %, et les bâtiments d&apos;activité et bureaux, pour environ 30 %.</p>
            <ul className="facts-list">
              <li>Architecte DPLG, inscrit à l&apos;Ordre des architectes</li>
              <li>DUT Génie civil</li>
              <li>Exercice libéral depuis 1999</li>
              <li>Maisons individuelles, logements collectifs, bureaux, établissements recevant du public</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--mineral" aria-labelledby="approche-title">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow" data-num="02">Une façon de travailler</span>
              <h2 className="h2" id="approche-title">Vision, expertise, engagement.</h2>
            </div>
            <p>Trois repères qui guident l&apos;agence, du premier rendez-vous à la remise des clés.</p>
          </div>
          <ol className="numbered numbered--3">
            {PILLARS.map(([t, d], i) => (
              <li key={t}>
                <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
          <div className="section-foot">
            <Link className="link-arrow" href="/approche">Voir les étapes d&apos;un projet <Arrow /></Link>
            <Link className="link-arrow" href="/expertises">Découvrir les expertises <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="parcours-title">
        <div className="container comp-split">
          <div className="stack sticky">
            <span className="eyebrow" data-num="03">Parcours</span>
            <h2 className="h2" id="parcours-title">Plus de 25 ans d&apos;architecture autour de Montpellier.</h2>
          </div>
          <ol className="timeline">
            {TIMELINE.map(([y, t, d]) => (
              <li key={t}>
                <span className="num">{y}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="container" style={{ marginTop: "var(--space-xl)" }}><Stats /></div>
      </section>

      <Cta title="Envie d'échanger sur votre projet ?" secondary={{ href: "/approche", label: "Découvrir notre approche" }} />
    </>
  );
}
