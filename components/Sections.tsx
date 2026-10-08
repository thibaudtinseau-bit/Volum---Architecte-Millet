import Link from "next/link";
import { BUDGET_STEPS, COMMUNES, ENGAGEMENTS, EXPERTISES, FAQ, SERVICES, SITE, STEPS } from "@/lib/content";
import { getReviews } from "@/lib/reviews";
import { ContactForm } from "./ContactForm";
import { Arrow, GoogleIcon, Icon } from "./Icons";
import { MapEmbed } from "./MapEmbed";
import { ReviewsTrack } from "./ReviewsTrack";

const num = (i: number) => String(i + 1).padStart(2, "0");

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Stats() {
  const items: [number, string, string][] = [
    [new Date().getFullYear() - 1999, "", "années d'exercice autour de Montpellier"],
    [100, "+", "maisons individuelles conçues et réalisées"],
    [60, "%", "de l'activité en logement individuel et collectif"],
    [30, "%", "en bâtiments d'activité, bureaux et tertiaire"],
  ];
  return (
    <div className="stats">
      {items.map(([v, s, l]) => (
        <div className="stat" key={l}>
          <p className="stat-value">{v}{s && <sup>{s}</sup>}</p>
          <p className="stat-label">{l}</p>
        </div>
      ))}
    </div>
  );
}

/** Les quatre engagements, grille numérotée. */
export function Engagements() {
  return (
    <ol className="numbered numbered--2">
      {ENGAGEMENTS.map(([t, d], i) => (
        <li key={t}>
          <span className="num" aria-hidden="true">{num(i)}</span>
          <h3>{t}</h3>
          <p>{d}</p>
        </li>
      ))}
    </ol>
  );
}

/** Accès rapide aux quatre expertises. */
export function ExpertiseList() {
  return (
    <ul className="expertise-list">
      {EXPERTISES.map((e, i) => (
        <li key={e.id}>
          <Link href={`/expertises#${e.id}`}>
            <span className="num" aria-hidden="true">{num(i)}</span>
            <strong>{e.title}</strong>
            <span className="desc">{e.short}</span>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Missions transversales (page Expertises). */
export function Services() {
  const keys = ["plan", "build", "pool", "interior", "leaf"];
  return (
    <ul className="services">
      {SERVICES.filter(([ic]) => keys.includes(ic)).map(([ic, t, d]) => (
        <li className="service" key={t}>
          <Icon name={ic} />
          <h3>{t}</h3>
          <p>{d}</p>
        </li>
      ))}
    </ul>
  );
}

/** Parcours d'un projet : horizontal sur grand écran, vertical ailleurs. */
export function Steps({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="timeline timeline--h">
      {STEPS.map(([t, s, d], i) => (
        <li key={t}>
          <span className="num" aria-hidden="true">{num(i)}</span>
          <h3>{t}</h3>
          {detailed && <small>{s}</small>}
          <p>{d}</p>
        </li>
      ))}
    </ol>
  );
}

export function Budget() {
  return (
    <section className="section section--mineral" id="budget" aria-labelledby="budget-title">
      <div className="container comp-split">
        <div className="stack sticky">
          <span className="eyebrow">Votre budget</span>
          <h2 className="h2" id="budget-title">Un budget défini ensemble, suivi à chaque étape.</h2>
          <p className="muted">Le budget sert de cadre à la conception. Il est vérifié à chaque phase, avant que vous ne vous engagiez.</p>
          <figure className="quote">
            <blockquote>« Les devis ont toujours été respectés. »</blockquote>
            <figcaption>Michèle Delmaux, avis Google</figcaption>
          </figure>
        </div>
        <ol className="budget-steps">
          {BUDGET_STEPS.map(([t, d]) => (
            <li key={t}><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Faq({ mineral = false }: { mineral?: boolean }) {
  return (
    <section className={`section${mineral ? " section--mineral" : ""}`} id="faq" aria-labelledby="faq-title">
      <div className="container comp-split">
        <div className="stack sticky">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="h2" id="faq-title">Avant de nous contacter.</h2>
          <p className="muted">Budget, délais, chantier : les réponses aux questions les plus courantes. Pour toute autre question, appelez l&apos;agence.</p>
          <a className="link-arrow" href={`tel:${SITE.phoneLink}`}>{SITE.phone} <Arrow /></a>
        </div>
        <div className="faq">
          {FAQ.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </div>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      }} />
    </section>
  );
}

export async function ReviewsSection({ mineral = false }: { mineral?: boolean }) {
  const data = await getReviews();
  const initials = (n: string) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join("");
  const month = (d: string) => new Date(d).toLocaleDateString("fr-FR", { month: "long", year: "numeric", timeZone: "Europe/Paris" });
  return (
    <section className={`section${mineral ? " section--mineral" : ""}`} id="avis" aria-labelledby="avis-title">
      <div className="container">
        <div className="reviews-head">
          <div className="stack">
            <span className="eyebrow">Avis clients</span>
            <h2 className="h2" id="avis-title">Ils nous ont confié leur projet.</h2>
          </div>
          <a className="rating-card" href={SITE.googleReviews} target="_blank" rel="noopener"
            aria-label={`Note de ${data.rating.toFixed(1).replace(".", ",")} sur 5 pour ${data.count} avis Google, voir les avis`}>
            <span className="score">{data.rating.toFixed(1).replace(".", ",")}</span>
            <span className="stars" aria-hidden="true">★★★★★</span>
            <small><GoogleIcon /><span>{data.count} avis Google</span></small>
          </a>
        </div>
        <ReviewsTrack footer={
          <div className="actions" style={{ gap: "4px 24px" }}>
            <a className="link-arrow" href={SITE.googleReviews} target="_blank" rel="noopener">Tous les avis sur Google <Arrow /></a>
            <a className="link-arrow" href={SITE.googleReviews} target="_blank" rel="noopener">Laisser un avis <Arrow /></a>
          </div>
        }>
          {data.reviews.map((r, i) => (
            <article className="review" key={r.author + i}>
              <div className="review-stars" role="img" aria-label={`${r.rating} étoiles sur 5`}>{"★★★★★".slice(0, Math.round(r.rating))}</div>
              <blockquote>{r.text}</blockquote>
              <div className="review-author">
                {r.photo
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img className="review-avatar" src={r.photo} alt="" loading="lazy" referrerPolicy="no-referrer" width={40} height={40} />
                  : <span className="review-avatar" aria-hidden="true">{initials(r.author)}</span>}
                <div>
                  <strong>{r.author}</strong>
                  <span>{r.date ? <><time dateTime={r.date}>{month(r.date)}</time> · </> : ""}{r.localGuide ? "Local Guide · " : ""}Avis Google</span>
                </div>
              </div>
            </article>
          ))}
        </ReviewsTrack>
      </div>
    </section>
  );
}

export function Zone({ mineral = false }: { mineral?: boolean }) {
  return (
    <section className={`section${mineral ? " section--mineral" : ""}`} id="zone" aria-labelledby="zone-title">
      <div className="container comp-split comp-split--center">
        <div className="stack">
          <span className="eyebrow">Zone d&apos;intervention</span>
          <h2 className="h2" id="zone-title">Montpellier, Montarnaud et l&apos;Hérault.</h2>
          <p className="muted">Installée à Montarnaud, aux portes de Montpellier, l&apos;agence intervient dans l&apos;Hérault et, pour certains projets, dans le Gard.</p>
          <ul className="communes">{COMMUNES.map((c) => <li key={c}>{c}</li>)}</ul>
          <div className="offices">
            <div className="office"><h3>Agence</h3><p>{SITE.address}<br />{SITE.zip} {SITE.city}</p></div>
            <div className="office"><h3>{SITE.address2Name}</h3><p>{SITE.address2}<br />{SITE.zip2} {SITE.city2}</p></div>
          </div>
        </div>
        <MapEmbed />
      </div>
    </section>
  );
}

/** Appel à l'action de fin de page (composition minimaliste). */
export function Cta({ title = "Un terrain, une maison à transformer, un projet à étudier ?", text, secondary }: {
  title?: string; text?: string; secondary?: { href: string; label: string };
}) {
  return (
    <section className="section cta-band" aria-labelledby="cta-title">
      <div className="container">
        <div className="comp-minimal">
          <span className="eyebrow">Votre projet</span>
          <h2 className="h2" id="cta-title">{title}</h2>
          <hr className="rule" />
          <p className="muted">{text || "Votre projet n'a pas besoin d'être entièrement défini pour nous contacter. Un premier échange permet de faire le point sur vos envies, le site et l'enveloppe à prévoir."}</p>
          <div className="actions">
            <Link className="btn" href="/contact">Échanger sur mon projet <Arrow /></Link>
            {secondary
              ? <Link className="btn btn--secondary" href={secondary.href}>{secondary.label}</Link>
              : <a className="btn btn--secondary" href={`tel:${SITE.phoneLink}`}>Appeler le {SITE.phone}</a>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ standalone = false, mineral = true }: { standalone?: boolean; mineral?: boolean }) {
  const Title = standalone ? "h1" : "h2";
  return (
    <section className={`section${mineral ? " section--mineral" : ""}${standalone ? " contact-standalone" : ""}`} id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="stack">
              <span className="eyebrow">Contact</span>
              <Title className={standalone ? "display" : "h2"} id="contact-title">Parlons de votre projet.</Title>
              <p className="lead">Construction neuve, extension, rénovation ou projet professionnel : présentez-nous votre idée, même si elle n&apos;est encore qu&apos;au début de sa réflexion.</p>
              <p className="muted">Nous prendrons le temps d&apos;étudier votre demande et de vous orienter sur les prochaines étapes.</p>
            </div>
            <div className="contact-lines">
              <div className="contact-line"><span>Téléphone</span><a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a></div>
              {SITE.email && <div className="contact-line"><span>E-mail</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>}
              <div className="contact-line"><span>Agence</span><p>{SITE.address}<br />{SITE.zip} {SITE.city}</p></div>
              <div className="contact-line"><span>Bureau secondaire</span><p>{SITE.address2Name}<br />{SITE.address2}, {SITE.zip2} {SITE.city2}</p></div>
              <div className="contact-line"><span>Horaires</span><p>Du lundi au vendredi, sur rendez-vous</p></div>
            </div>
          </div>
          <div className="form-panel"><ContactForm /></div>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumb({ items }: { items: [string, string?][] }) {
  return (
    <>
      <nav className="breadcrumb" aria-label="Fil d'Ariane">
        {items.map(([label, href], i) => (
          <span key={label} style={{ display: "contents" }}>
            {i > 0 && <span aria-hidden="true">/</span>}
            {href ? <Link href={href}>{label}</Link> : <span aria-current="page">{label}</span>}
          </span>
        ))}
      </nav>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: items.map(([label, href], i) => ({
          "@type": "ListItem", position: i + 1, name: label, ...(href ? { item: SITE.url + href } : {}),
        })),
      }} />
    </>
  );
}
