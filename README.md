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
| `app/projets/` | Liste filtrable des 15 réalisations |
| `app/projets/[slug]/` | Page projet (pré-générée), galerie + visionneuse |
| `app/contact/`, `app/mentions-legales/` | Contact, mentions légales & RGPD |
| `app/api/contact/route.ts` | Envoi du formulaire : e-mail récapitulatif (Gmail SMTP, Resend ou Formspree) |
| `app/globals.css` | **Design system** : couleurs, typographie (Manrope / Inter), espacements, boutons, formulaires, compositions |
| `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` | SEO |
| `app/icon.png`, `app/favicon.ico`, `app/apple-icon.png` | Favicon (le « V » du logo) |
| `lib/content.ts` | **Tous les textes et projets** |
| `lib/reviews.json` | Avis Google enregistrés (mis à jour automatiquement, voir ci-dessous) |
| `public/img/projets/` | Photos (WebP 1600 px + 760 px) |
| `public/logo/` | Logo complet et « V » |

## Variables d'environnement (Vercel → Settings → Environment Variables)
Voir `.env.example`.
- `NEXT_PUBLIC_SITE_URL` : URL définitive (nom de domaine) pour les balises canoniques et le sitemap.
- Formulaire : `CONTACT_EMAIL` (destinataires séparés par des virgules) + `SMTP_USER` / `SMTP_PASS` (adresse Gmail et mot de passe d'application, recommandé), **ou** `RESEND_API_KEY`, **ou** `FORMSPREE_ENDPOINT`. Chaque demande envoie un e-mail récapitulatif mis en forme ; « Répondre » écrit directement au visiteur.
- Avis Google en direct (facultatif) : `GOOGLE_PLACES_API_KEY` et `GOOGLE_PLACE_ID` — les 5 avis récents sont rafraîchis une fois par jour, côté serveur.
- Synchronisation des avis : la GitHub Action `.github/workflows/sync-reviews.yml` (le 1er et le 16 du mois, ou à la main depuis l'onglet Actions) lit `/api/avis` sur le site en ligne, ajoute les nouveaux avis à `lib/reviews.json`, met à jour la note et le nombre d'avis, puis publie directement sur la branche principale du dépôt (celle que Vercel met en production).

## Comparateur V2 / V3 (présentation client)
Deux directions artistiques coexistent dans le même déploiement :
- **V2 — Original** : `app/globals.css` (inchangé) ;
- **V3 — Émeraude** : `app/design-v3.css`, dont toutes les règles sont limitées à `html[data-design="v3"]`.

URLs de comparaison (fonctionnent sur toutes les pages) : `/?design=v2`, `/?design=v3`, `/agence?design=v2`…
Le sélecteur (bas gauche de l'accueil) bascule sans rechargement ; le choix est mémorisé (`localStorage`, clé `volum-design-version`) et reporté dans l'URL. Les URL canoniques restent sans paramètre.

Configuration unique : `lib/design.ts`
```ts
export const DESIGN_CONFIG = { enableComparison: true, defaultVersion: "v3", finalVersion: "v3" };
```
- Fin de la comparaison : `enableComparison: false` et `finalVersion` = version retenue (préférences et `?design=` ignorés, sélecteur masqué).
- Nettoyage complet ensuite : supprimer `components/DesignSwitcher.tsx`, `app/design-switcher.css` et les imports dans `app/layout.tsx` ; si la V3 est retenue, déplacer `app/design-v3.css` dans `globals.css` sans le préfixe `html[data-design="v3"]` (et reprendre la coloration des mots `data-v3-mark` en CSS) ; si la V2 est retenue, supprimer `app/design-v3.css` et les attributs `data-num` / `data-v3-mark`.

## À compléter
- Mentions légales : n° d'inscription à l'Ordre et assurance décennale (`app/mentions-legales/page.tsx`).
