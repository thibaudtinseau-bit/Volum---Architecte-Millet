/* =========================================================
   AVIS GOOGLE — fiche Google Maps « Millet Jean-Yves » (Montarnaud).
   Les avis sont enregistrés dans lib/reviews.json :
   - le site charge en plus les 5 avis récents en direct (clé
     GOOGLE_PLACES_API_KEY, rafraîchis une fois par jour) ;
   - la GitHub Action « Synchroniser les avis Google » ajoute les
     nouveaux avis et met à jour la note et le nombre d'avis
     dans reviews.json le 1er et le 16 de chaque mois.
   Les textes se terminant par « … » sont tronqués sur Google.
   ========================================================= */
import saved from "./reviews.json";

/** `date` : date de publication sur Google (ISO), connue pour les avis récupérés par l'API. */
export type Review = { author: string; rating: number; text: string; localGuide?: boolean; photo?: string; date?: string };
export type ReviewsData = { rating: number; count: number; reviews: Review[] };

export const SAVED_REVIEWS: ReviewsData = saved;
