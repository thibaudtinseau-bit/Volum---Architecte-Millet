# Volum — Jean-Yves Millet, Architecte DPLG

Site vitrine en **Next.js (App Router)**, rendu côté serveur et pré-généré en HTML statique (SSG) :
chaque page contient son contenu complet dans le HTML (textes, projets, avis, données structurées),
idéal pour le référencement. Déployé sur **Vercel**.

## Démarrer
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Structure
| Chemin | Rôle |
|---|---|
| `app/page.tsx` | Accueil : positionnement, expertises, engagements, agence, projets, approche, avis, FAQ, contact |
| `app/agence/` | Présentation de Jean-Yves Millet : vision, expertise, engagement, parcours |
| `app/expertises/` | Construction de maison, extension, rénovation, projets professionnels (ancres `#maison`, `#extension`, `#renovation`, `#professionnels`) |
| `app/approche/` | Les 5 étapes d'un projet, budget, mission |
| `app/projets/` | Page « Projets » : les 6 dossiers (logement extérieur, logement intérieur, logements collectifs, tertiaire, industriel & agricole, plans & recherche) |
| `app/projets/[slug]/` | Page d'un dossier (pré-générée), galerie + visionneuse ; les anciennes URL des 15 projets redirigent vers le dossier correspondant (`next.config.mjs`) |
| `app/contact/`, `app/mentions-legales/` | Contact, mentions légales & RGPD |
| `app/api/contact/route.ts` | Envoi du formulaire : e-mail récapitulatif (Gmail SMTP, Resend ou Formspree) |
| `app/globals.css` | **Design system** (direction artistique V2) : couleurs, typographie (Manrope / Inter), espacements, boutons, formulaires, compositions |
| `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` | SEO |
| `app/icon.png`, `app/favicon.ico`, `app/apple-icon.png` | Favicon (icône « Vθ » du logo 2026) |
| `lib/content.ts` | **Tous les textes et les 6 dossiers de projets** |
| `lib/reviews.json` | Avis Google enregistrés (mis à jour automatiquement, voir ci-dessous) |
| `public/img/projets/` | Photos par dossier (WebP 1600 px, 2200 px pour les plans, + 760 px) ; `lib/images.json` donne leur ordre, leurs dimensions et leur texte alternatif |
| `public/logo/` | Logo 2026 (complet, mot « Volum » clair et sombre) et icônes |

## Variables d'environnement (Vercel → Settings → Environment Variables)
Voir `.env.example`.
- `NEXT_PUBLIC_SITE_URL` : URL définitive `https://www.volum-architecture.fr` pour les balises canoniques, le sitemap et les données structurées (valeur par défaut dans `lib/content.ts`). Si cette variable existe sur Vercel avec l'ancienne URL, la mettre à jour.
- Formulaire : `CONTACT_EMAIL` (destinataires séparés par des virgules) + `SMTP_USER` / `SMTP_PASS` (adresse Gmail et mot de passe d'application, recommandé), **ou** `RESEND_API_KEY`, **ou** `FORMSPREE_ENDPOINT`. Chaque demande envoie un e-mail récapitulatif mis en forme ; « Répondre » écrit directement au visiteur.
- Avis Google en direct (facultatif) : `GOOGLE_PLACES_API_KEY` et `GOOGLE_PLACE_ID` — les 5 avis récents sont rafraîchis une fois par jour, côté serveur.
- Synchronisation des avis : la GitHub Action `.github/workflows/sync-reviews.yml` (le 1er et le 16 du mois, ou à la main depuis l'onglet Actions) lit `/api/avis` sur le site en ligne, ajoute les nouveaux avis à `lib/reviews.json`, met à jour la note et le nombre d'avis, puis publie directement sur la branche principale du dépôt (celle que Vercel met en production).

## À compléter
- Mentions légales : n° d'inscription à l'Ordre et assurance décennale (`app/mentions-legales/page.tsx`).
