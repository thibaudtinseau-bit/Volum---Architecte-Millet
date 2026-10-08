import { getReviews } from "@/lib/reviews";

export const revalidate = 86400;

/** Avis (enregistrés + Google en direct), lus par scripts/sync-reviews.mjs. */
export async function GET() {
  return Response.json(await getReviews());
}
