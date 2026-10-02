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
| `app/page.tsx` | Accueil : diaporama, agence, chiffres, expertises, projets, méthode, avis, FAQ, zone, contact |
| `app/agence/` | Parcours, valeurs, frise |
| `app/projets/` | Liste filtrable des 15 réalisations |
| `app/projets/[slug]/` | Page projet (pré-générée), galerie + visionneuse |
| `app/contact/`, `app/mentions-legales/` | Contact, mentions légales & RGPD |
| `app/api/contact/route.ts` | Envoi du formulaire (Resend ou Formspree) |
| `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` | SEO |
| `app/icon.png`, `app/favicon.ico`, `app/apple-icon.png` | Favicon (le « V » du logo) |
| `lib/content.ts` | **Tous les textes et projets** |
| `lib/reviews-data.ts` | Avis Google enregistrés |
| `public/img/projets/` | Photos (WebP 1600 px + 760 px) |
| `public/logo/` | Logo complet et « V » |

## Variables d'environnement (Vercel → Settings → Environment Variables)
Voir `.env.example`.
- `NEXT_PUBLIC_SITE_URL` : URL définitive (nom de domaine) pour les balises canoniques et le sitemap.
- Formulaire : `RESEND_API_KEY` + `CONTACT_EMAIL` (recommandé) **ou** `FORMSPREE_ENDPOINT`.
- Avis Google en direct (facultatif) : `GOOGLE_PLACES_API_KEY` — rafraîchis une fois par jour, côté serveur.

## À compléter
- Mentions légales : n° d'inscription à l'Ordre et assurance décennale (`app/mentions-legales/page.tsx`).
