import { SAVED_REVIEWS, type Review, type ReviewsData } from "./reviews-data";

const QUERY = "Millet Jean-Yves architecte, 8 Rue de l'Ancienne Poste, 34570 Montarnaud";

type PlacesReview = {
  rating?: number;
  publishTime?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; photoUri?: string };
};

const MIN_RATING = 4;

/** Avis affichés : 4 étoiles et plus, du plus récent au plus ancien ; les avis sans date suivent, dans l'ordre enregistré. */
function forDisplay(data: ReviewsData): ReviewsData {
  const time = (r: Review) => (r.date ? Date.parse(r.date) : -Infinity);
  const reviews = data.reviews
    .filter((r) => r.rating >= MIN_RATING && r.text)
    .map((r, i) => ({ r, i }))
    .sort((a, b) => time(b.r) - time(a.r) || a.i - b.i)
    .map(({ r }) => r);
  return { ...data, reviews };
}

/** Avis enregistrés + avis Google en direct (si une clé API est configurée). Rendu côté serveur. */
export async function getReviews(): Promise<ReviewsData> {
  return forDisplay(await mergeReviews());
}

async function mergeReviews(): Promise<ReviewsData> {
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
      date: x.publishTime,
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
