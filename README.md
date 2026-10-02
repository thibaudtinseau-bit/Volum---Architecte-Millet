# Volum — Jean-Yves Millet, Architecte DPLG

Site vitrine statique (HTML/CSS/JS, sans dépendance), responsive, prêt pour **GitHub Pages**.
Direction artistique : vert émeraude & noir, typographie éditoriale (Instrument Serif + Inter Tight).

## Pages
| Page | Contenu |
|---|---|
| `index.html` | Hero diaporama, agence, chiffres clés, expertises, projets choisis, méthode, avis Google, FAQ, zone d'intervention, formulaire |
| `agence.html` | Parcours de Jean-Yves Millet, valeurs, frise chronologique |
| `projets.html` | 15 réalisations filtrables (Maisons / Tertiaire / Rénovation / Études) |
| `projets/*.html` | Une page par projet : fiche, texte, galerie avec visionneuse |
| `contact.html` | Formulaire détaillé + coordonnées + carte |
| `mentions-legales.html` | Mentions légales & politique de confidentialité (RGPD) |

## Modifier le site
- **Textes, projets, communes, FAQ** : `scripts/content.py`, puis lancer `python3 scripts/build.py` (régénère toutes les pages).
- **Avis Google** : `assets/js/avis.js` (aucune régénération nécessaire).
- **Formulaire, e-mail, clé Google** : `assets/js/config.js`.
- **Design** : `assets/css/style.css` (couleurs dans `:root`).
- **Photos** : `assets/img/projets/<projet>/NN.webp` (+ `NN-sm.webp` en 760 px). Après ajout, mettre à jour `scripts/images.json`.

## À configurer avant la mise en ligne
1. **Formulaire de contact** : créer un formulaire gratuit sur [Formspree](https://formspree.io) et coller l'URL dans `FORM_ENDPOINT` (`assets/js/config.js`). Renseigner aussi `CONTACT_EMAIL`.
2. **Avis Google en direct (optionnel)** : renseigner `GOOGLE_PLACES_API_KEY` (clé « Places API (New) », restreinte au domaine). Sans clé, les 15 avis enregistrés dans `avis.js` sont affichés.
3. **Mentions légales** : compléter le n° d'inscription à l'Ordre et l'assurance décennale.
4. **URL du site** : si vous utilisez un nom de domaine, modifier `SITE["url"]` dans `scripts/content.py` puis relancer le build.

## Publier sur GitHub Pages
Settings → Pages → *Deploy from a branch* → choisir la branche et le dossier `/ (root)`.
