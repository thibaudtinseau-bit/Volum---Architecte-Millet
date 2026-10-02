import { SAVED_REVIEWS, type Review, type ReviewsData } from "./reviews-data";

const QUERY = "Millet Jean-Yves architecte, 8 Rue de l'Ancienne Poste, 34570 Montarnaud";

type PlacesReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; photoUri?: string };
};

/** Avis enregistrés + avis Google en direct (si une clé API est configurée). Rendu côté serveur. */
export async function getReviews(): Promise<ReviewsData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return SAVED_REVIEWS;
  try {
    let placeId = process.env.GOOGLE_PLACE_ID;
    if (!placeId) {
      const r = await fetch("https://places.googleapis.com/v1/places:searchText", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Goog-Api-Key": key, "X-Goog-FieldMask": "places.id" },
        body: JSON.stringify({ textQuery: QUERY, languageCode: "fr" }),
        next: { revalidate: 86400 },
      });
      const j = await r.json();
      placeId = j?.places?.[0]?.id;
    }
    if (!placeId) return SAVED_REVIEWS;
    const r = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=fr`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,reviews" },
      next: { revalidate: 86400 },
    });
    const p = await r.json();
    const live: Review[] = ((p?.reviews as PlacesReview[]) || []).map((x) => ({
      author: x.authorAttribution?.displayName || "Client",
      photo: x.authorAttribution?.photoUri,
      rating: x.rating || 5,
      when: x.relativePublishTimeDescription,
      text: x.originalText?.text || x.text?.text || "",
    }));
    const seen = new Set(live.map((x) => x.author.toLowerCase()));
    return {
      rating: p?.rating || SAVED_REVIEWS.rating,
      count: Math.max(p?.userRatingCount || 0, SAVED_REVIEWS.count),
      reviews: [...live.filter((x) => x.text), ...SAVED_REVIEWS.reviews.filter((x) => !seen.has(x.author.toLowerCase()))],
    };
  } catch {
    return SAVED_REVIEWS;
  }
}
