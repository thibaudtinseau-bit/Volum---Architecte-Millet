import Link from "next/link";
import { ARGUMENTS, AUDIENCES, BUDGET_STEPS, COMMUNES, FAQ, SERVICES, SITE, STEPS } from "@/lib/content";
import { getReviews } from "@/lib/reviews";
import { ContactForm } from "./ContactForm";
import { Arrow, GoogleIcon, Icon } from "./Icons";
import { MapEmbed } from "./MapEmbed";
import { ProjectImg } from "./ProjectImg";
import { ReviewsTrack } from "./ReviewsTrack";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Stats() {
  const items: [number, string, string][] = [
    [new Date().getFullYear() - 1999, "", "années d'exercice sur le secteur montpelliérain"],
    [100, "+", "maisons individuelles conçues et réalisées"],
    [60, "%", "de logements individuels et collectifs"],
    [30, "%", "de bâtiments d'activité, bureaux et tertiaire"],
  ];
  return (
    <div className="stats">
      {items.map(([v, s, l], i) => (
        <div className={`stat reveal d${i}`} key={l}>
          <div className="stat-value"><span data-count={v}>{v}</span>{s && <sup>{s}</sup>}</div>
          <p className="stat-label">{l}</p>
        </div>
      ))}
    </div>
  );
}

export function Services() {
  return (
    <div className="services">
      {SERVICES.map(([ic, t, d], i) => (
        <article className={`service reveal d${i % 3}`} key={t}>
          <Icon name={ic} />
          <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{t}</h3>
          <p>{d}</p>
        </article>
      ))}
    </div>
  );
}

export function Steps() {
  return (
    <div className="steps">
      {STEPS.map(([t, s, d]) => (
        <article className="step reveal" key={t}>
          <h3>{t}<small>{s}</small></h3>
          <p>{d}</p>
        </article>
      ))}
    </div>
  );
}

export function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container intro-grid">
        <div className="reveal">
          <span className="eyebrow">Avant de nous appeler</span>
          <h2 className="h2" id="faq-title" style={{ marginTop: 18 }}>Les questions que <em className="accent">vous vous posez</em>.</h2>
          <p className="muted" style={{ marginTop: 24, maxWidth: 420 }}>Budget, délais, artisans, imprévus : les réponses aux questions les plus fréquentes. Et si la vôtre n&apos;y est pas, posez-la directement.</p>
          <a className="link-underline" href={`tel:${SITE.phoneLink}`} style={{ marginTop: 8 }}>{SITE.phone} <Arrow /></a>
        </div>
        <div className="faq reveal d1">
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

export async function ReviewsSection() {
  const data = await getReviews();
  const initials = (n: string) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join("");
  return (
    <section className="section section--ink on-dark" id="avis" aria-labelledby="avis-title">
      <div className="container">
        <div className="reviews-head">
          <div>
            <span className="eyebrow">Avis clients</span>
            <h2 className="h2" id="avis-title" style={{ marginTop: 18 }}>Ils nous ont confié<br /><em className="accent">leur projet</em>.</h2>
          </div>
          <a className="rating-card reveal" href={SITE.googleReviews} target="_blank" rel="noopener" aria-label="Voir les avis sur Google">
            <span className="score">{data.rating.toFixed(1).replace(".", ",")}</span>
            <span className="stars" aria-hidden="true">★★★★★</span>
            <small><GoogleIcon /><span>{data.count} avis Google</span></small>
          </a>
        </div>
        <ReviewsTrack footer={
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <a className="link-underline" href={SITE.googleReviews} target="_blank" rel="noopener">Tous les avis sur Google <Arrow /></a>
            <a className="link-underline" href={SITE.googleReviews} target="_blank" rel="noopener">Laisser un avis <Arrow /></a>
          </div>
        }>
          {data.reviews.map((r, i) => (
            <article className="review" key={r.author + i}>
              <div className="review-stars" aria-label={`${r.rating} étoiles sur 5`}>{"★★★★★".slice(0, Math.round(r.rating))}</div>
              <blockquote>{r.text}</blockquote>
              <div className="review-author">
                {r.photo
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img className="review-avatar" src={r.photo} alt="" loading="lazy" referrerPolicy="no-referrer" />
                  : <span className="review-avatar" aria-hidden="true">{initials(r.author)}</span>}
                <div>
                  <strong>{r.author}</strong>
                  <span>{r.when ? `${r.when} · ` : ""}{r.localGuide ? "Local Guide · " : ""}Avis Google</span>
                </div>
              </div>
            </article>
          ))}
        </ReviewsTrack>
      </div>
    </section>
  );
}

export function Zone() {
  return (
    <section className="section section--cream" id="zone" aria-labelledby="zone-title">
      <div className="container zone-grid">
        <div className="reveal">
          <span className="eyebrow">Zone d&apos;intervention</span>
          <h2 className="h2" id="zone-title" style={{ marginTop: 18 }}>Montpellier,<br /><em className="accent">l&apos;Hérault</em> &amp; le Gard.</h2>
          <p className="lead" style={{ marginTop: 28 }}>Basée à Montarnaud, aux portes de Montpellier, l&apos;agence intervient dans tout le secteur montpelliérain et au-delà.</p>
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

export function Cta() {
  return (
    <section className="section cta on-dark">
      <div className="cta-bg" aria-hidden="true"><ProjectImg slug="villa-vc" num="09" alt="" sizes="100vw" /></div>
      <div className="container">
        <span className="eyebrow">Votre projet</span>
        <h2 className="display reveal">Un terrain, une maison à transformer, <em className="accent">un projet à étudier</em>&nbsp;?</h2>
        <p className="lead reveal" style={{ maxWidth: 620, margin: 0 }}>Pas besoin d&apos;avoir tout défini : le premier rendez-vous sert à vérifier la faisabilité, les contraintes et l&apos;enveloppe à prévoir.</p>
        <div className="hero-actions reveal d1">
          <Link className="btn btn--light" href="/contact">Parlons de votre projet <Arrow /></Link>
          <a className="btn btn--ghost" href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? "h1" : "h2";
  return (
    <section className={`section section--dark on-dark${standalone ? " contact-standalone" : ""}`} id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <span className="eyebrow">Contact</span>
              <Title className={standalone ? "display" : "h2"} id="contact-title" style={{ marginTop: 18 }}>Parlons de <em className="accent">votre projet</em>.</Title>
              <p className="muted" style={{ marginTop: 24, maxWidth: 440 }}>Vous n&apos;avez pas besoin d&apos;avoir tout défini. Terrain identifié, maison à transformer ou simple réflexion : décrivez-nous où vous en êtes, Jean-Yves Millet vous recontacte pour un premier échange.</p>
            </div>
            <div className="contact-line"><span>Téléphone</span><a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a></div>
            {SITE.email && <div className="contact-line"><span>E-mail</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>}
            <div className="contact-line"><span>Agence</span><p>{SITE.address}<br />{SITE.zip} {SITE.city}</p></div>
            <div className="contact-line"><span>Bureau secondaire</span><p>{SITE.address2Name}<br />{SITE.address2}, {SITE.zip2} {SITE.city2}</p></div>
            <div className="contact-line"><span>Horaires</span><p>Du lundi au vendredi<br />sur rendez-vous</p></div>
          </div>
          <ContactForm />
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
            {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}
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

export function Audiences() {
  return (
    <section className="section section--tight" id="vous-etes" aria-label="Votre projet">
      <div className="container">
        <div className="audiences">
          {AUDIENCES.map((a, i) => (
            <article className={`audience reveal d${i}`} key={a.key}>
              <div className="audience-media"><ProjectImg slug={a.cover[0]} num={a.cover[1]} alt="" sizes="(max-width: 900px) 100vw, 50vw" /></div>
              <div className="audience-body">
                <span className="eyebrow">{a.eyebrow}</span>
                <h2 className="h3">{a.title}</h2>
                <p>{a.intro}</p>
                <ul>
                  {a.items.map((it) => (
                    <li key={it.label}><Link href={it.href}>{it.label}<Arrow /></Link></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Arguments() {
  return (
    <div className="arguments">
      {ARGUMENTS.map((a, i) => (
        <article className={`argument reveal d${i % 2}`} key={a.title}>
          <span className="argument-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{a.title}</h3>
          <p>{a.text}</p>
          {a.quote && (
            <figure className="argument-quote">
              <blockquote>« {a.quote.text} »</blockquote>
              <figcaption>{a.quote.author} · <span>avis Google</span></figcaption>
            </figure>
          )}
        </article>
      ))}
    </div>
  );
}

export function Budget() {
  return (
    <section className="section" id="budget" aria-labelledby="budget-title">
      <div className="container intro-grid">
        <div className="intro-aside reveal">
          <span className="eyebrow">Votre budget</span>
          <h2 className="h2" id="budget-title" style={{ marginTop: 18 }}>Un budget <em className="accent">maîtrisé</em>, pas subi.</h2>
          <p className="muted" style={{ marginTop: 24 }}>La crainte de dépasser son budget est la première que nous entendons. C&apos;est aussi là que la double compétence d&apos;architecte et de technicien du bâtiment fait la différence : un projet bien dessiné est un projet bien chiffré.</p>
          <figure className="argument-quote" style={{ marginTop: 8 }}>
            <blockquote>« Les devis ont toujours été respectés. »</blockquote>
            <figcaption>Michèle Delmaux · <span>avis Google</span></figcaption>
          </figure>
        </div>
        <ol className="budget-steps">
          {BUDGET_STEPS.map(([t, d]) => (
            <li className="reveal" key={t}><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
