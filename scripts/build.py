#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Générateur du site statique Volum.
Usage :  python3 scripts/build.py
Les textes se modifient dans scripts/content.py.
"""
import json
import os
from html import escape as e

from content import SITE, CATEGORIES, PROJECTS, FEATURED, HERO_SLIDES, COMMUNES, FAQ

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES = json.load(open(os.path.join(ROOT, "scripts", "images.json")))
P = {p["slug"]: p for p in PROJECTS}
VERSION = "20261002"


# ---------------------------------------------------------------- helpers
def img_list(slug):
    return IMAGES.get(slug, [])


def img_size(slug, num):
    for n, w, h in img_list(slug):
        if n == num:
            return w, h
    return 1600, 1067


def cover(p):
    num = p.get("cover") or img_list(p["slug"])[0][0]
    return num


def src(slug, num, small=False, r=""):
    return f"{r}assets/img/projets/{slug}/{num}{'-sm' if small else ''}.webp"


def picture(slug, num, alt, r="", cls="", eager=False, sizes="(max-width: 900px) 100vw, 50vw"):
    w, h = img_size(slug, num)
    load = 'fetchpriority="high"' if eager else 'loading="lazy" decoding="async"'
    return (f'<img class="{cls}" src="{src(slug, num, False, r)}" '
            f'srcset="{src(slug, num, True, r)} 760w, {src(slug, num, False, r)} {w}w" sizes="{sizes}" '
            f'width="{w}" height="{h}" alt="{e(alt)}" {load}>')


def arrow():
    return '<span class="arrow" aria-hidden="true">→</span>'


LOGO = ('<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">'
        '<rect x="1" y="1" width="38" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>'
        '<path class="bm-fill" d="M20 31 L31 10 L31 31 Z"/>'
        '<path d="M9 10 L20 31 L31 10" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>')

ICONS = {
    "house": '<path d="M4 22V11l10-7 10 7v11"/><path d="M4 22h20"/><path d="M11 22v-7h6v7"/><path d="M18 8V4h3v6"/>',
    "extend": '<path d="M3 22V10l8-6 8 6v12"/><path d="M19 13h7v9h-7"/><path d="M3 22h23"/><path d="M22 16v3"/>',
    "plan": '<rect x="3" y="3" width="22" height="22"/><path d="M3 12h9v13"/><path d="M12 3v5"/><path d="M17 12h8"/><path d="M17 12v5"/>',
    "office": '<rect x="5" y="3" width="18" height="22"/><path d="M9 7h2M13 7h2M17 7h2M9 11h2M13 11h2M17 11h2M9 15h2M13 15h2M17 15h2"/><path d="M12 25v-5h4v5"/>',
    "build": '<path d="M3 25h22"/><path d="M6 25V9h8v16"/><path d="M14 13h8v12"/><path d="M4 6l16-3"/><path d="M18 3.6V9"/>',
    "leaf": '<path d="M5 23C5 12 12 5 24 4c0 12-7 19-17 19"/><path d="M5 23l10-10"/>',
    "pool": '<path d="M3 18c2 0 2-1.5 4.5-1.5S10 18 12.5 18 15 16.5 17.5 16.5 20 18 22.5 18 25 16.5 25 16.5"/><path d="M3 23c2 0 2-1.5 4.5-1.5S10 23 12.5 23 15 21.5 17.5 21.5 20 23 22.5 23 25 21.5 25 21.5"/><path d="M9 14V5a2 2 0 0 1 4 0M17 14V5a2 2 0 0 1 4 0M9 9h8"/>',
    "interior": '<path d="M3 17h22v5H3z"/><path d="M6 17v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M5 22v3M23 22v3"/><path d="M14 4v4M11 8h6"/>',
    "renov": '<path d="M4 25V12l10-8 10 8v13z"/><path d="M10 25v-8h8v8"/><path d="M8 4l3 3M20 4l-3 3"/>',
    "ear": '<path d="M8 12a6 6 0 1 1 12 0c0 4-4 5-4 9a3 3 0 0 1-6 0"/><path d="M12 12a2 2 0 1 1 4 0"/>',
    "ruler": '<path d="M3 20L20 3l5 5L8 25z"/><path d="M8 15l2 2M11 12l3 3M14 9l2 2M17 6l3 3"/>',
    "shield": '<path d="M14 3l9 4v6c0 6-4 10-9 12-5-2-9-6-9-12V7z"/><path d="M10 14l3 3 5-6"/>',
}


def icon(name, cls="service-icon"):
    return (f'<svg class="{cls}" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.3" '
            f'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{ICONS[name]}</svg>')


PHONE_SVG = ('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">'
             '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>')


# ---------------------------------------------------------------- layout
NAV = [
    ("index.html", "Accueil", "home"),
    ("agence.html", "L'agence", "agence"),
    ("projets.html", "Réalisations", "projets"),
    ("index.html#methode", "Méthode", "methode"),
    ("index.html#avis", "Avis", "avis"),
]


def head(title, desc, r, path, image=None, extra=""):
    canonical = SITE["url"] + path
    og_img = SITE["url"] + (image or f"assets/img/projets/villa-cetd/11.webp")
    return f"""<!doctype html>
<html lang="fr" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{canonical}">
<meta name="theme-color" content="#0a0b0b">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="{e(SITE['full_name'])}">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{og_img}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="{r}assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="{r}assets/img/apple-touch-icon.png">
<link rel="manifest" href="{r}site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{r}assets/css/style.css?v={VERSION}">
{extra}
</head>"""


def header(r, active, light=False):
    links = []
    for href, label, key in NAV:
        cur = ' aria-current="page"' if key == active else ""
        links.append(f'<a href="{r}{href}"{cur}>{label}</a>')
    mob = "".join(
        f'<a href="{r}{href}">{label}<small>0{i + 1}</small></a>'
        for i, (href, label, _) in enumerate(NAV[1:] + [("contact.html", "Contact", "contact")])
    )
    return f"""<body class="{'page-light' if light else ''}">
<a class="skip-link" href="#main">Aller au contenu</a>
<header class="site-header">
  <div class="container">
    <a class="brand" href="{r}index.html" aria-label="Volum — accueil">
      {LOGO}
      <span class="brand-text"><span class="brand-name">VOLUM</span><span class="brand-sub">J.-Y. Millet · Architecte DPLG</span></span>
    </a>
    <nav class="nav" aria-label="Navigation principale">
      {''.join(links)}
      <a class="btn" href="{r}contact.html">Parlons de votre projet {arrow()}</a>
    </nav>
    <button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>
  </div>
</header>
<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
  <nav aria-label="Navigation mobile">{mob}</nav>
  <div class="mobile-menu-foot">
    <a href="tel:{SITE['phone_link']}">{SITE['phone']}</a>
    <span>{SITE['address']}, {SITE['zip']} {SITE['city']}</span>
  </div>
</div>
<a class="float-call" href="tel:{SITE['phone_link']}" aria-label="Appeler Jean-Yves Millet">{PHONE_SVG}</a>
<main id="main">"""


def footer(r, scripts=""):
    proj_links = "".join(f'<li><a href="{r}projets/{p["slug"]}.html">{e(p["title"])}</a></li>' for p in PROJECTS[:6])
    return f"""</main>
<footer class="site-footer on-dark">
  <div class="container">
    <div class="footer-top">
      <div>
        <a class="brand" href="{r}index.html">{LOGO}<span class="brand-text"><span class="brand-name">VOLUM</span><span class="brand-sub">J.-Y. Millet · Architecte DPLG</span></span></a>
        <p class="footer-claim">Concevoir avec <em>sensibilité</em>, construire avec <em>exigence</em>.</p>
      </div>
      <div>
        <h3>Navigation</h3>
        <ul>
          <li><a href="{r}index.html">Accueil</a></li>
          <li><a href="{r}agence.html">L'agence</a></li>
          <li><a href="{r}projets.html">Réalisations</a></li>
          <li><a href="{r}index.html#expertises">Expertises</a></li>
          <li><a href="{r}index.html#avis">Avis clients</a></li>
          <li><a href="{r}contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3>Projets</h3>
        <ul>{proj_links}</ul>
      </div>
      <div>
        <h3>Agence</h3>
        <ul>
          <li>{SITE['address']}<br>{SITE['zip']} {SITE['city']}</li>
          <li><a href="tel:{SITE['phone_link']}">{SITE['phone']}</a></li>
          <li data-email hidden><a href="#"></a></li>
          <li><a href="{SITE['houzz']}" target="_blank" rel="noopener">Houzz</a> · <a href="{SITE['linkedin']}" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-giant" aria-hidden="true">VOLUM</div>
    <div class="footer-bottom">
      <span>© <span data-year>2026</span> Volum — Jean-Yves Millet, architecte DPLG. Tous droits réservés.</span>
      <nav aria-label="Liens légaux"><a href="{r}mentions-legales.html">Mentions légales</a><a href="{r}mentions-legales.html#confidentialite">Confidentialité</a><a href="{r}contact.html">Contact</a></nav>
    </div>
  </div>
</footer>
<script src="{r}assets/js/config.js?v={VERSION}"></script>
{scripts}
<script src="{r}assets/js/main.js?v={VERSION}" defer></script>
</body>
</html>
"""


def jsonld(r=""):
    data = {
        "@context": "https://schema.org",
        "@type": ["Architect", "LocalBusiness"],
        "name": SITE["full_name"],
        "alternateName": "Volum architecture",
        "description": SITE["description"],
        "url": SITE["url"],
        "telephone": "+33 6 71 06 87 16",
        "image": SITE["url"] + "assets/img/projets/villa-cetd/11.webp",
        "logo": SITE["url"] + "assets/img/favicon.svg",
        "founder": {"@type": "Person", "name": "Jean-Yves Millet", "jobTitle": "Architecte DPLG",
                    "alumniOf": "École Nationale Supérieure d'Architecture de Montpellier"},
        "address": {"@type": "PostalAddress", "streetAddress": SITE["address"], "postalCode": SITE["zip"],
                    "addressLocality": SITE["city"], "addressRegion": "Occitanie", "addressCountry": "FR"},
        "geo": {"@type": "GeoCoordinates", "latitude": SITE["lat"], "longitude": SITE["lng"]},
        "areaServed": ["Montpellier", "Hérault", "Gard"],
        "foundingDate": "1999",
        "sameAs": [SITE["houzz"], SITE["linkedin"]],
        "aggregateRating": {"@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "15", "bestRating": "5"},
    }
    return f'<script type="application/ld+json">{json.dumps(data, ensure_ascii=False)}</script>'


# ---------------------------------------------------------------- composants
def project_card(p, r="", featured=False):
    cats = " ".join(p["cats"])
    badge = CATEGORIES[p["cats"][0]]
    meta = f'{e(p["place"])}' + (f'<small>{p["year"]}</small>' if p["year"] else "")
    sizes = "(max-width: 640px) 100vw, (max-width: 900px) 50vw, 40vw"
    return f"""<a class="project-card reveal" href="{r}projets/{p['slug']}.html" data-cat="{cats}">
  <div class="project-media reveal-img"><span class="project-badge">{badge}</span>{picture(p['slug'], cover(p), p['title'] + ' — ' + p['summary'], r, sizes=sizes)}</div>
  <div class="project-info"><h3>{e(p['title'])}</h3><div class="meta">{meta}</div></div>
</a>"""


def stats_block():
    return """<div class="stats">
  <div class="stat reveal"><div class="stat-value"><span data-count="27">27</span></div><p class="stat-label">années d'exercice sur le secteur montpelliérain</p></div>
  <div class="stat reveal d1"><div class="stat-value"><span data-count="100">100</span><sup>+</sup></div><p class="stat-label">maisons individuelles conçues et réalisées</p></div>
  <div class="stat reveal d2"><div class="stat-value"><span data-count="60">60</span><sup>%</sup></div><p class="stat-label">de logements individuels et collectifs</p></div>
  <div class="stat reveal d3"><div class="stat-value"><span data-count="30">30</span><sup>%</sup></div><p class="stat-label">de bâtiments d'activité, bureaux et tertiaire</p></div>
</div>"""


SERVICES = [
    ("house", "Maison d'architecte", "Construction neuve sur mesure : une maison pensée pour votre terrain, votre mode de vie et votre budget."),
    ("extend", "Extension & surélévation", "Agrandir, surélever, ouvrir : faire évoluer votre maison sans en trahir l'esprit."),
    ("renov", "Rénovation & réhabilitation", "Mas, bergeries, bâtiments anciens : révéler le patrimoine et y apporter le confort d'aujourd'hui."),
    ("office", "Bureaux & tertiaire", "Sièges sociaux, offices, locaux d'activité et ERP : des lieux de travail fonctionnels et représentatifs."),
    ("plan", "Plans & permis de construire", "Esquisse, avant-projet, dossier de permis de construire ou de déclaration préalable."),
    ("build", "Maîtrise d'œuvre", "Consultation des entreprises, suivi de chantier, maîtrise des coûts et des délais, réception des travaux."),
    ("pool", "Piscines & extérieurs", "Conception de piscines, terrasses et aménagements paysagers en continuité avec l'architecture."),
    ("interior", "Aménagement intérieur", "Distribution des espaces, cuisines, escaliers, matériaux : le soin du détail jusqu'à l'intérieur."),
    ("leaf", "Éco-conception", "Bioclimatisme, matériaux sains, performance énergétique (RE2020) et technologies nouvelles."),
]


def services_block():
    out = []
    for i, (ic, t, d) in enumerate(SERVICES):
        out.append(f'<article class="service reveal d{i % 3}">{icon(ic)}<span class="service-num">{i + 1:02d}</span><h3>{t}</h3><p>{d}</p></article>')
    return '<div class="services">' + "".join(out) + "</div>"


STEPS = [
    ("Écoute & programme", "Premier rendez-vous", "Une discussion pour cerner vos besoins, vos aspirations, votre budget et votre calendrier. Visite du terrain ou du bâti existant, analyse des règles d'urbanisme (PLU)."),
    ("Esquisse", "Premières intentions", "Les premières idées prennent forme : implantation, volumes, organisation des espaces. Plusieurs pistes sont explorées et discutées ensemble."),
    ("Avant-projet", "APS · APD", "Le projet s'affine : plans, façades, matériaux, perspectives 3D et première estimation du coût des travaux."),
    ("Permis de construire", "Autorisations", "Constitution et dépôt du dossier de permis de construire ou de déclaration préalable, suivi de l'instruction auprès de la mairie."),
    ("Études & consultation", "PRO · DCE · ACT", "Plans d'exécution, descriptifs techniques, consultation des entreprises et analyse comparative des devis."),
    ("Chantier", "Direction des travaux", "Réunions de chantier hebdomadaires, contrôle de la qualité d'exécution, suivi des coûts et des délais. Une double compétence architecte / génie civil sur le terrain."),
    ("Réception", "Livraison", "Assistance aux opérations de réception, levée des réserves et remise des clés. Bienvenue chez vous."),
]


def steps_block():
    return '<div class="steps">' + "".join(
        f'<article class="step reveal"><h3>{t}<small>{s}</small></h3><p>{d}</p></article>' for t, s, d in STEPS
    ) + "</div>"


def reviews_block(r=""):
    return f"""<section class="section section--ink on-dark" id="avis" aria-labelledby="avis-title">
  <div class="container">
    <div class="reviews-head">
      <div>
        <span class="eyebrow">Avis clients</span>
        <h2 class="h2" id="avis-title" style="margin-top:18px">Ils nous ont confié<br><em class="accent">leur projet</em>.</h2>
      </div>
      <a class="rating-card reveal" data-google-reviews href="#" target="_blank" rel="noopener" aria-label="Voir les avis sur Google">
        <span class="score" data-rating>5,0</span>
        <span class="stars" aria-hidden="true">★★★★★</span>
        <small><span data-reviews-g style="display:inline-flex;width:16px;height:16px"></span><span><span data-rating-count>15</span> avis Google</span></small>
      </a>
    </div>
    <div class="reviews-track" tabindex="0" aria-label="Avis clients, faire défiler horizontalement">
      <noscript><p>Activez JavaScript pour lire les avis, ou consultez-les sur Google Maps.</p></noscript>
    </div>
    <div class="reviews-controls">
      <div class="arrows">
        <button class="arrow-btn reviews-prev" type="button" aria-label="Avis précédents"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 5l-7 7 7 7"/></svg></button>
        <button class="arrow-btn reviews-next" type="button" aria-label="Avis suivants"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5l7 7-7 7"/></svg></button>
      </div>
      <div style="display:flex;gap:24px;flex-wrap:wrap">
        <a class="link-underline" data-google-reviews href="#" target="_blank" rel="noopener">Tous les avis sur Google {arrow()}</a>
        <a class="link-underline" data-google-reviews href="#" target="_blank" rel="noopener">Laisser un avis {arrow()}</a>
      </div>
    </div>
  </div>
</section>"""


def zone_block(r=""):
    communes = "".join(f"<li>{c}</li>" for c in COMMUNES)
    return f"""<section class="section section--cream" id="zone" aria-labelledby="zone-title">
  <div class="container zone-grid">
    <div class="reveal">
      <span class="eyebrow">Zone d'intervention</span>
      <h2 class="h2" id="zone-title" style="margin-top:18px">Montpellier,<br><em class="accent">l'Hérault</em> & le Gard.</h2>
      <p class="lead" style="margin-top:28px">Basée à Montarnaud, aux portes de Montpellier, l'agence intervient dans tout le secteur montpelliérain et au-delà.</p>
      <ul class="communes">{communes}</ul>
      <div class="offices">
        <div class="office"><h3>Agence</h3><p>{SITE['address']}<br>{SITE['zip']} {SITE['city']}</p></div>
        <div class="office"><h3>{SITE['address2_name']}</h3><p>{SITE['address2']}<br>{SITE['zip2']} {SITE['city2']}</p></div>
      </div>
    </div>
    <div class="map-wrap reveal d1">
      <div class="map-placeholder">
        <span class="eyebrow">Plan d'accès</span>
        <p>La carte interactive est fournie par Google Maps. Son affichage peut déposer des cookies tiers.</p>
        <div><button class="btn btn--light" type="button" data-load-map>Afficher la carte {arrow()}</button></div>
      </div>
    </div>
  </div>
</section>"""


def cta_block(r=""):
    return f"""<section class="section cta on-dark">
  <div class="cta-bg" aria-hidden="true">{picture('villa-vc', '09', '', r)}</div>
  <div class="container">
    <span class="eyebrow">Votre projet</span>
    <h2 class="display reveal">Et si l'on dessinait <em class="accent">la maison du bonheur</em>&nbsp;?</h2>
    <div class="hero-actions reveal d1">
      <a class="btn btn--light" href="{r}contact.html">Prendre rendez-vous {arrow()}</a>
      <a class="btn btn--ghost" href="tel:{SITE['phone_link']}">{SITE['phone']}</a>
    </div>
  </div>
</section>"""


def contact_block(r="", standalone=False):
    types = [("maison", "Maison neuve"), ("extension", "Extension / surélévation"), ("renovation", "Rénovation"),
             ("tertiaire", "Bureaux / tertiaire"), ("piscine", "Piscine / extérieurs"), ("autre", "Autre")]
    chips = "".join(
        f'<label class="chip"><input type="radio" name="type" value="{v}"{" required" if i == 0 else ""}><span>{l}</span></label>'
        for i, (v, l) in enumerate(types))
    title_tag = "h1" if standalone else "h2"
    title_cls = "display" if standalone else "h2"
    return f"""<section class="section section--dark on-dark" id="contact" aria-labelledby="contact-title"{' style="padding-top:calc(var(--header-h) + clamp(48px,8vw,120px))"' if standalone else ''}>
  <div class="container">
    <div class="contact-grid">
      <div class="contact-info">
        <div>
          <span class="eyebrow">Contact</span>
          <{title_tag} class="{title_cls}" id="contact-title" style="margin-top:18px">Parlons de <em class="accent">votre projet</em>.</{title_tag}>
          <p class="muted" style="margin-top:24px;max-width:440px">Un terrain, une maison à agrandir, un bâtiment à rénover&nbsp;? Décrivez-nous votre projet : Jean-Yves Millet vous recontacte rapidement pour un premier échange.</p>
        </div>
        <div class="contact-line"><span>Téléphone</span><a href="tel:{SITE['phone_link']}">{SITE['phone']}</a></div>
        <div class="contact-line" data-email hidden><span>E-mail</span><a href="#"></a></div>
        <div class="contact-line"><span>Agence</span><p>{SITE['address']}<br>{SITE['zip']} {SITE['city']}</p></div>
        <div class="contact-line"><span>Bureau secondaire</span><p>{SITE['address2_name']}<br>{SITE['address2']}, {SITE['zip2']} {SITE['city2']}</p></div>
        <div class="contact-line"><span>Horaires</span><p>Du lundi au vendredi<br>sur rendez-vous</p></div>
      </div>

      <form id="contact-form" class="form" novalidate>
        <fieldset class="field field--full">
          <legend>Type de projet *</legend>
          <div class="chips">{chips}</div>
          <span class="field-error" aria-live="polite"></span>
        </fieldset>
        <div class="field"><label for="f-nom">Nom & prénom *</label><input id="f-nom" name="nom" type="text" autocomplete="name" required placeholder="Jeanne Dupont"><span class="field-error" aria-live="polite"></span></div>
        <div class="field"><label for="f-email">E-mail *</label><input id="f-email" name="email" type="email" autocomplete="email" required placeholder="jeanne@exemple.fr"><span class="field-error" aria-live="polite"></span></div>
        <div class="field"><label for="f-tel">Téléphone</label><input id="f-tel" name="telephone" type="tel" autocomplete="tel" placeholder="06 00 00 00 00"><span class="field-error" aria-live="polite"></span></div>
        <div class="field"><label for="f-commune">Commune du projet</label><input id="f-commune" name="commune" type="text" autocomplete="address-level2" placeholder="Montpellier, Pignan…"></div>
        <div class="field"><label for="f-budget">Budget travaux estimé</label>
          <select id="f-budget" name="budget"><option value="">Non défini</option><option>Moins de 100 000 €</option><option>100 000 – 250 000 €</option><option>250 000 – 500 000 €</option><option>500 000 – 1 000 000 €</option><option>Plus de 1 000 000 €</option></select></div>
        <div class="field"><label for="f-delai">Échéance souhaitée</label>
          <select id="f-delai" name="echeance"><option value="">Non définie</option><option>Dès que possible</option><option>Dans les 6 mois</option><option>Dans l'année</option><option>Plus tard / réflexion</option></select></div>
        <div class="field field--full"><label for="f-terrain">Avancement</label>
          <select id="f-terrain" name="avancement"><option value="">—</option><option>Je recherche un terrain</option><option>J'ai un terrain</option><option>J'ai un bien existant à transformer</option><option>J'ai déjà des plans / un permis</option></select></div>
        <div class="field field--full"><label for="f-message">Votre projet *</label><textarea id="f-message" name="message" rows="5" required placeholder="Surface, nombre de pièces, envies, contraintes…"></textarea><span class="field-error" aria-live="polite"></span></div>
        <div class="hp" aria-hidden="true"><label>Ne pas remplir <input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>
        <div class="field field--full">
          <label class="consent"><input type="checkbox" name="consent" value="oui" required><span>J'accepte que mes données soient utilisées pour être recontacté(e) au sujet de mon projet. <a href="{r}mentions-legales.html#confidentialite">En savoir plus</a></span></label>
          <span class="field-error" aria-live="polite"></span>
        </div>
        <div class="form-status" role="status"></div>
        <div class="form-foot">
          <small class="muted">* Champs obligatoires</small>
          <button class="btn btn--emerald" type="submit">Envoyer ma demande {arrow()}</button>
        </div>
      </form>
    </div>
  </div>
</section>"""


def faq_block():
    items = "".join(f"<details><summary>{q}</summary><p>{a}</p></details>" for q, a in FAQ)
    data = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in FAQ]}
    return f"""<section class="section" id="faq" aria-labelledby="faq-title">
  <div class="container intro-grid">
    <div class="reveal"><span class="eyebrow">Questions fréquentes</span><h2 class="h2" id="faq-title" style="margin-top:18px">Bon à <em class="accent">savoir</em>.</h2></div>
    <div class="faq reveal d1">{items}</div>
  </div>
  <script type="application/ld+json">{json.dumps(data, ensure_ascii=False)}</script>
</section>"""


# ---------------------------------------------------------------- pages
def page_index():
    r = ""
    slides = []
    for i, (slug, num, cap) in enumerate(HERO_SLIDES):
        w, h = img_size(slug, num)
        attr = f'src="{src(slug, num)}" fetchpriority="high"' if i == 0 else f'data-src="{src(slug, num)}" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" '
        slides.append(f'<div class="hero-slide{" is-active" if i == 0 else ""}" data-caption="{e(cap)}"><img {attr} width="{w}" height="{h}" alt="{e(cap)}"></div>')
    featured = "".join(project_card(P[s], r, True) for s in FEATURED)
    preload = f'<link rel="preload" as="image" href="{src(HERO_SLIDES[0][0], HERO_SLIDES[0][1])}">' + jsonld()
    html = head("Volum — Jean-Yves Millet, architecte DPLG à Montpellier & Montarnaud",
                SITE["description"], r, "", extra=preload)
    html += header(r, "home")
    html += f"""
<section class="hero" aria-label="Présentation">
  <div class="hero-slides">{''.join(slides)}</div>
  <div class="hero-meta"><span class="hero-caption">{e(HERO_SLIDES[0][2])}</span><div class="hero-dots"></div></div>
  <div class="container hero-content">
    <div class="hero-kicker"><span>Architecte DPLG</span><span>Montpellier · Hérault</span><span>Depuis 1999</span></div>
    <h1 class="display"><span class="line"><span>Architecture</span></span><span class="line"><span><em>sensible</em> &amp;</span></span><span class="line"><span>rigoureuse.</span></span></h1>
    <div class="hero-bottom">
      <p>Volum accompagne particuliers et entreprises dans l'acte de construire : maisons d'architecte, extensions, réhabilitations et bâtiments tertiaires, de la première esquisse à la remise des clés.</p>
      <div class="hero-actions">
        <a class="btn btn--emerald" href="projets.html">Découvrir les réalisations {arrow()}</a>
        <a class="btn btn--ghost" href="contact.html">Nous contacter</a>
      </div>
    </div>
  </div>
</section>

<section class="section" id="agence" aria-labelledby="agence-title">
  <div class="container intro-grid">
    <aside class="intro-aside reveal">
      <div class="figure-stack">
        {picture('villa-cetd', '09', 'Villa C&D à Pignan, façade et jardin', r, 'reveal-img')}
        {picture('maison-d-affinage', '07', 'Bardage bois du Mas Salagou', r, 'reveal-img d2')}
        <span class="figure-tag">Diplômé de l'École d'Architecture de Montpellier</span>
      </div>
    </aside>
    <div class="intro-text">
      <span class="eyebrow reveal"><span class="section-num">01</span> L'agence</span>
      <h2 class="h2 reveal" id="agence-title" style="margin-top:18px">Construire,<br>c'est d'abord <em class="accent">écouter</em>.</h2>
      <p class="lead reveal">Diplômé de l'École d'Architecture de Montpellier, Jean-Yves Millet exerce sur le secteur montpelliérain depuis 1999. En charge de la réalisation de nombreux programmes immobiliers ainsi que d'une centaine de logements individuels, Volum vous accompagne dans l'acte de construire.</p>
      <p class="reveal muted">Une sensibilité certaine à la conception et aux études préliminaires, mais également une rigueur et une exigence pour la réalisation de votre projet. La mission de l'architecte est appréhendée par une discussion et des échanges continus pour cerner, comprendre et concrétiser les besoins et les aspirations qui sont les vôtres.</p>
      <p class="reveal muted">Technologies nouvelles, éco-sensibilité, typologie et concept de vie sont autant de questions qui pourront orienter votre projet vers, pourquoi pas, <em>la maison du bonheur</em>.</p>
      <div class="signature reveal">
        <span class="signature-mono">JYM</span>
        <div><strong>Jean-Yves Millet</strong><span>Architecte DPLG · DUT Génie civil</span></div>
        <a class="link-underline" href="agence.html" style="margin-left:auto">En savoir plus {arrow()}</a>
      </div>
    </div>
  </div>
  <div class="container" style="margin-top:clamp(64px,8vw,120px)">{stats_block()}</div>
</section>

<div class="marquee" aria-hidden="true"><div class="marquee-track">{''.join('<span>' + w + '</span>' for w in ['Maisons d’architecte', 'Extensions', 'Réhabilitations', 'Bureaux', 'Éco-conception', 'Maîtrise d’œuvre'] * 2)}</div></div>

<section class="section section--dark on-dark" id="expertises" aria-labelledby="expertises-title">
  <div class="container">
    <div class="section-head">
      <div class="reveal"><span class="eyebrow"><span class="section-num">02</span> Expertises</span><h2 class="h2" id="expertises-title">Une agence <em class="accent">généraliste</em>,<br>un savoir-faire complet.</h2></div>
      <p class="muted reveal d1">Du logement individuel aux bâtiments d'activité, Volum conçoit et suit des projets de toutes échelles. La double formation d'architecte et d'ingénieur en génie civil de Jean-Yves Millet garantit une conception juste et un suivi technique rigoureux sur le terrain.</p>
    </div>
    {services_block()}
  </div>
</section>

<section class="section" id="realisations" aria-labelledby="real-title">
  <div class="container">
    <div class="section-head">
      <div class="reveal"><span class="eyebrow"><span class="section-num">03</span> Réalisations</span><h2 class="h2" id="real-title">Projets <em class="accent">choisis</em>.</h2></div>
      <div class="reveal d1" style="justify-self:end;display:grid;gap:24px;max-width:520px">
        <p class="muted" style="margin:0">Villas contemporaines, réhabilitations de mas, sièges d'entreprise : une sélection de projets menés dans l'Hérault et le Gard.</p>
        <a class="link-underline" href="projets.html">Voir les {len(PROJECTS)} projets {arrow()}</a>
      </div>
    </div>
    <div class="projects-grid projects-grid--featured">{featured}</div>
    <div style="display:flex;justify-content:center;margin-top:clamp(48px,6vw,96px)"><a class="btn" href="projets.html">Toutes les réalisations {arrow()}</a></div>
  </div>
</section>

<section class="section section--cream" id="methode" aria-labelledby="methode-title">
  <div class="container">
    <div class="section-head">
      <div class="reveal"><span class="eyebrow"><span class="section-num">04</span> Méthode</span><h2 class="h2" id="methode-title">De l'idée<br>à la <em class="accent">remise des clés</em>.</h2></div>
      <p class="muted reveal d1">Chaque projet suit un chemin clair, ponctué d'échanges réguliers. Vous restez au cœur des décisions, nous prenons en charge la complexité.</p>
    </div>
    {steps_block()}
  </div>
</section>

{reviews_block(r)}

{faq_block()}

{zone_block(r)}

{contact_block(r)}
"""
    html += footer(r, '<script src="assets/js/avis.js?v=' + VERSION + '"></script>')
    return html


def page_agence():
    r = ""
    html = head("L'agence — Jean-Yves Millet, architecte DPLG | Volum",
                "Parcours, valeurs et approche de Jean-Yves Millet, architecte DPLG diplômé de l'École d'Architecture de Montpellier, "
                "installé à Montarnaud depuis 1999.", r, "agence.html", extra=jsonld())
    html += header(r, "agence", light=True)
    values = [
        ("ear", "Écoute", "Chaque projet commence par un dialogue. Comprendre vos besoins et vos aspirations est la base d'une architecture juste."),
        ("ruler", "Rigueur", "Une double compétence architecte et génie civil : des plans précis, des chantiers maîtrisés, des budgets respectés."),
        ("leaf", "Éco-sensibilité", "Orientation, inertie, matériaux, énergie : concevoir des bâtiments sobres, confortables et durables."),
        ("shield", "Engagement", "Un interlocuteur unique, présent de la première esquisse à la réception des travaux."),
    ]
    vals = "".join(f'<article class="value reveal d{i}">{icon(ic, "")}<h3>{t}</h3><p>{d}</p></article>' for i, (ic, t, d) in enumerate(values))
    timeline = [
        ("Formation", "DUT Génie civil", "Une première formation technique qui ancre durablement le goût du chantier, des structures et de la construction."),
        ("Diplôme", "Architecte DPLG", "Diplômé par le gouvernement de l'École d'Architecture de Montpellier."),
        ("1999", "Création de l'agence", "Installation en libéral sur le secteur montpelliérain, sous le nom Volum architecture."),
        ("2000 →", "Programmes immobiliers", "Directeur technique de la société MV Promotion en parallèle de l'activité libérale : conduite de programmes de logements collectifs."),
        ("2013", "Innovation", "Développement du concept Cassine, module d'habitat circulaire en bois breveté par l'agence."),
        ("Aujourd'hui", "Plus de 100 maisons", "Une centaine de logements individuels, des bureaux, des réhabilitations, et toujours la même exigence."),
    ]
    tl = "".join(f'<div class="tl-item reveal"><div class="tl-year">{y}</div><div><h3>{t}</h3><p>{d}</p></div></div>' for y, t, d in timeline)
    html += f"""
<section class="page-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="Fil d'Ariane"><a href="index.html">Accueil</a><span aria-hidden="true">/</span><span>L'agence</span></nav>
    <div class="page-hero-grid">
      <h1 class="display reveal">L'architecte, <em class="accent">l'agence</em>.</h1>
      <p class="lead reveal d1">Volum, c'est l'agence de Jean-Yves Millet, architecte DPLG installé à Montarnaud, aux portes de Montpellier, depuis 1999.</p>
    </div>
  </div>
</section>

<section class="section--tight" style="padding-top:0">
  <div class="container"><div class="split-media split-media--wide reveal-img" style="aspect-ratio:21/9;border-radius:4px;overflow:hidden">{picture('villa-cetd', '06', 'Villa C&D, Pignan', r, '', True, '100vw')}</div></div>
</section>

<section class="section">
  <div class="container split">
    <div>
      <span class="eyebrow reveal">Jean-Yves Millet</span>
      <h2 class="h2 reveal" style="margin:18px 0 32px">Concevoir et <em class="accent">construire</em>.</h2>
      <p class="lead reveal">Diplômé de l'École d'Architecture de Montpellier et titulaire d'un DUT en Génie civil, Jean-Yves Millet allie la sensibilité du concepteur à la rigueur du technicien.</p>
      <p class="muted reveal">Cette double compétence lui confère une forte appétence tant pour la conception architecturale que pour le suivi technique sur le terrain. Actif sur le secteur montpelliérain depuis 1999, il a notamment exercé les fonctions de directeur technique pour la société MV Promotion au début des années 2000, parallèlement à son activité libérale.</p>
      <p class="muted reveal">Son activité est généraliste et se répartit principalement entre le logement individuel et collectif — environ 60 % — et les bâtiments d'activité comme les bureaux — environ 30 %. Il compte à son actif plusieurs programmes immobiliers complexes et plus d'une centaine de maisons individuelles.</p>
      <ul class="checklist reveal">
        <li>Architecte DPLG, inscrit à l'Ordre des architectes d'Occitanie</li>
        <li>DUT Génie civil</li>
        <li>Exercice libéral depuis 1999</li>
        <li>Maisons individuelles, logements collectifs, bureaux, ERP</li>
      </ul>
    </div>
    <div class="split-media reveal-img">{picture('villa-l', '01', 'Villa L, Prades-le-Lez', r)}</div>
  </div>
</section>

<section class="section section--cream">
  <div class="container">
    <div class="section-head">
      <div class="reveal"><span class="eyebrow">Valeurs</span><h2 class="h2">Ce qui guide <em class="accent">chaque projet</em>.</h2></div>
      <p class="muted reveal d1">Technologies nouvelles, éco-sensibilité, typologie et concept de vie : autant de questions qui orientent chaque projet vers une réponse unique.</p>
    </div>
    <div class="values">{vals}</div>
  </div>
</section>

<section class="section section--emerald on-dark">
  <div class="container intro-grid">
    <div class="reveal"><span class="eyebrow">Parcours</span><h2 class="h2" style="margin-top:18px">Plus de 25 ans<br>d'<em class="accent">architecture</em>.</h2></div>
    <div class="timeline">{tl}</div>
  </div>
  <div class="container" style="margin-top:clamp(64px,8vw,120px)">{stats_block()}</div>
</section>

{zone_block(r)}
{cta_block(r)}
"""
    html += footer(r)
    return html


def page_projets():
    r = ""
    counts = {k: sum(1 for p in PROJECTS if k in p["cats"]) for k in CATEGORIES}
    filters = f'<button class="filter is-active" type="button" data-filter="all" aria-pressed="true">Tous<sup>{len(PROJECTS)}</sup></button>' + "".join(
        f'<button class="filter" type="button" data-filter="{k}" aria-pressed="false">{v}<sup>{counts[k]}</sup></button>' for k, v in CATEGORIES.items())
    cards = "".join(project_card(p, r) for p in PROJECTS)
    html = head("Réalisations — maisons, extensions, bureaux | Volum, architecte à Montpellier",
                "Découvrez les réalisations de Volum, Jean-Yves Millet architecte DPLG : villas contemporaines, extensions, "
                "réhabilitations et bâtiments tertiaires dans l'Hérault et le Gard.", r, "projets.html")
    html += header(r, "projets", light=True)
    html += f"""
<section class="page-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="Fil d'Ariane"><a href="index.html">Accueil</a><span aria-hidden="true">/</span><span>Réalisations</span></nav>
    <div class="page-hero-grid">
      <h1 class="display reveal">Réali&shy;sations.</h1>
      <p class="lead reveal d1">{len(PROJECTS)} projets, de la maison individuelle au siège d'entreprise, pour découvrir l'approche de l'agence — de l'esquisse au chantier.</p>
    </div>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="container">
    <div class="filters" role="group" aria-label="Filtrer les projets">{filters}</div>
    <div class="projects-grid">{cards}</div>
  </div>
</section>
{cta_block(r)}
"""
    html += footer(r)
    return html


def page_projet(i):
    p = PROJECTS[i]
    r = "../"
    slug = p["slug"]
    prev_p = PROJECTS[i - 1]
    next_p = PROJECTS[(i + 1) % len(PROJECTS)]
    imgs = [n for n, _, _ in img_list(slug)]
    gallery = "".join(
        f'<a href="{src(slug, n, False, r)}">{picture(slug, n, p["title"] + " — photo " + str(k + 1), r, sizes="(max-width: 640px) 100vw, 33vw")}</a>'
        for k, n in enumerate(imgs))
    facts = [("Type", p["type"]), ("Lieu", p["place"]), ("Année", p["year"] or "—"), ("Budget travaux", p["budget"] or "Sur demande")]
    facts_html = "".join(f'<div class="fact reveal d{k}"><span>{a}</span><strong>{e(b)}</strong></div>' for k, (a, b) in enumerate(facts))
    text = "".join(f'<p class="{"lead" if k == 0 else "muted"} reveal">{e(t)}</p>' for k, t in enumerate(p["text"]))
    cats = " · ".join(CATEGORIES[c] for c in p["cats"])
    cw, ch = img_size(slug, cover(p))
    data = {"@context": "https://schema.org", "@type": "CreativeWork", "name": p["title"], "description": p["summary"],
            "image": SITE["url"] + f"assets/img/projets/{slug}/{cover(p)}.webp",
            "creator": {"@type": "Person", "name": "Jean-Yves Millet"}, "locationCreated": p["place"]}
    if p["year"]:
        data["dateCreated"] = p["year"]
    html = head(f"{p['title']} — {p['type']}, {p['place']} | Volum architecte",
                f"{p['summary']} Projet de Volum, Jean-Yves Millet architecte DPLG.", r, f"projets/{slug}.html",
                image=f"assets/img/projets/{slug}/{cover(p)}.webp",
                extra=f'<script type="application/ld+json">{json.dumps(data, ensure_ascii=False)}</script>')
    html += header(r, "projets")
    html += f"""
<section class="project-hero">
  <img src="{src(slug, cover(p), False, r)}" width="{cw}" height="{ch}" alt="{e(p['title'])}" fetchpriority="high">
  <div class="container">
    <nav class="breadcrumb" aria-label="Fil d'Ariane"><a href="{r}index.html">Accueil</a><span aria-hidden="true">/</span><a href="{r}projets.html">Réalisations</a><span aria-hidden="true">/</span><span>{e(p['title'])}</span></nav>
    <span class="eyebrow">{cats}</span>
    <h1 class="display" style="margin-top:18px">{e(p['title'])}</h1>
  </div>
</section>

<section class="section--tight">
  <div class="container"><div class="project-facts">{facts_html}</div></div>
</section>

<section class="section" style="padding-top:clamp(24px,4vw,64px)">
  <div class="container project-body">
    <h2 class="h3 reveal">{e(p['summary'])}</h2>
    <div>
      {text}
      <div class="hero-actions reveal" style="margin-top:32px">
        <a class="btn" href="{r}contact.html">Un projet similaire ? {arrow()}</a>
      </div>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="container">
    <div class="section-head" style="margin-bottom:40px"><div><span class="eyebrow">Galerie</span><h2 class="h3" style="margin-top:14px">{len(imgs)} photos & documents</h2></div></div>
    <div class="gallery">{gallery}</div>
  </div>
</section>

<section class="section--tight">
  <div class="container">
    <nav class="project-nav" aria-label="Autres projets">
      <a href="{r}projets/{prev_p['slug']}.html"><span>← Projet précédent</span><strong>{e(prev_p['title'])}</strong></a>
      <a href="{r}projets/{next_p['slug']}.html"><span>Projet suivant →</span><strong>{e(next_p['title'])}</strong></a>
    </nav>
  </div>
</section>
{cta_block(r)}
"""
    html += footer(r)
    return html


def page_contact():
    r = ""
    html = head("Contact — Volum, Jean-Yves Millet architecte DPLG à Montarnaud",
                "Contactez Jean-Yves Millet, architecte DPLG à Montarnaud (34) : maison neuve, extension, rénovation, bureaux. "
                "Tél. 06 71 06 87 16.", r, "contact.html", extra=jsonld())
    html += header(r, "contact")
    html += contact_block(r, standalone=True)
    html += zone_block(r)
    html += footer(r)
    return html


def page_mentions():
    r = ""
    html = head("Mentions légales & confidentialité | Volum", "Mentions légales et politique de confidentialité du site Volum.", r, "mentions-legales.html")
    html = html.replace('<meta name="description"', '<meta name="robots" content="noindex, follow">\n<meta name="description"')
    html += header(r, "", light=True)
    html += f"""
<section class="page-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="Fil d'Ariane"><a href="index.html">Accueil</a><span aria-hidden="true">/</span><span>Mentions légales</span></nav>
    <h1 class="display">Mentions <em class="accent">légales</em>.</h1>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="container prose">
    <h2>Éditeur du site</h2>
    <p><strong>Monsieur Jean-Yves Millet</strong> — Volum architecture<br>
    Architecte DPLG, exercice libéral<br>
    {SITE['address']}, {SITE['zip']} {SITE['city']}, France<br>
    Téléphone : <a href="tel:{SITE['phone_link']}">{SITE['phone']}</a><br>
    SIREN : {SITE['siren']}<br>
    Inscrit au Tableau de l'Ordre des architectes d'Occitanie — n° d'inscription : <em>[à compléter]</em><br>
    Directeur de la publication : Jean-Yves Millet</p>

    <h3>Assurance professionnelle</h3>
    <p>Conformément à l'article 16 de la loi n° 77-2 du 3 janvier 1977 sur l'architecture, l'architecte est couvert par une assurance de responsabilité civile professionnelle et décennale : <em>[nom de l'assureur et numéro de contrat à compléter]</em>.</p>

    <h2>Hébergement</h2>
    <p>GitHub Pages — GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis — <a href="https://pages.github.com" target="_blank" rel="noopener">pages.github.com</a></p>

    <h2>Propriété intellectuelle</h2>
    <p>L'ensemble des contenus de ce site (textes, plans, perspectives, photographies, logo) est la propriété exclusive de Jean-Yves Millet / Volum, sauf mention contraire. Les œuvres architecturales présentées sont protégées par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.</p>

    <h2 id="confidentialite">Politique de confidentialité</h2>
    <h3>Données collectées</h3>
    <p>Les informations saisies dans le formulaire de contact (nom, e-mail, téléphone, commune, description du projet) sont utilisées uniquement pour répondre à votre demande et vous recontacter au sujet de votre projet. Elles ne sont ni vendues ni cédées à des tiers.</p>
    <h3>Base légale et durée de conservation</h3>
    <p>Le traitement repose sur votre consentement. Les données sont conservées au maximum 3 ans à compter du dernier contact, sauf relation contractuelle.</p>
    <h3>Vos droits</h3>
    <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour l'exercer, contactez Jean-Yves Millet à l'adresse postale ci-dessus ou par téléphone. Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener">cnil.fr</a>).</p>
    <h3>Cookies et services tiers</h3>
    <p>Ce site n'utilise aucun cookie de mesure d'audience ni publicitaire. La carte Google Maps n'est chargée que si vous cliquez sur « Afficher la carte » ; Google peut alors déposer ses propres cookies. Les polices de caractères sont fournies par Google Fonts. Le formulaire de contact peut transiter par un prestataire d'envoi de formulaires (ex. Formspree).</p>
    <h3>Avis clients</h3>
    <p>Les avis présentés sont issus de la fiche Google Maps de l'agence et restent la propriété de leurs auteurs.</p>
  </div>
</section>
"""
    html += footer(r)
    return html


def page_404():
    r = "/Volum---Architecte-Millet/"
    html = head("Page introuvable | Volum", "Cette page n'existe pas.", r, "404.html")
    html = html.replace('<meta name="description"', '<meta name="robots" content="noindex">\n<meta name="description"')
    html += header(r, "")
    html += f"""
<section class="hero" style="min-height:100svh">
  <div class="hero-slides"><div class="hero-slide is-active"><img src="{src('divers-conception', '02', False, r)}" alt=""></div></div>
  <div class="container hero-content">
    <div class="hero-kicker"><span>Erreur 404</span></div>
    <h1 class="display">Cette pièce<br><em>n'a pas été construite.</em></h1>
    <div class="hero-bottom"><p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <div class="hero-actions"><a class="btn btn--emerald" href="{r}index.html">Retour à l'accueil {arrow()}</a><a class="btn btn--ghost" href="{r}projets.html">Voir les réalisations</a></div>
    </div>
  </div>
</section>
"""
    html += footer(r)
    return html


def write(path, content):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print("✓", path)


def main():
    write("index.html", page_index())
    write("agence.html", page_agence())
    write("projets.html", page_projets())
    for i, p in enumerate(PROJECTS):
        write(f"projets/{p['slug']}.html", page_projet(i))
    write("contact.html", page_contact())
    write("mentions-legales.html", page_mentions())
    write("404.html", page_404())

    urls = ["", "agence.html", "projets.html", "contact.html"] + [f"projets/{p['slug']}.html" for p in PROJECTS]
    sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "".join(
        f"  <url><loc>{SITE['url']}{u}</loc><lastmod>2026-10-02</lastmod></url>\n" for u in urls) + "</urlset>\n"
    write("sitemap.xml", sitemap)
    write("robots.txt", f"User-agent: *\nAllow: /\n\nSitemap: {SITE['url']}sitemap.xml\n")


if __name__ == "__main__":
    main()
