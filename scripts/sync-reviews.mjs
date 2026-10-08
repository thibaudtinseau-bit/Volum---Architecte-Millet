// Ajoute à lib/reviews.json les nouveaux avis Google affichés par le site
// et met à jour la note et le nombre d'avis. Lancé par .github/workflows/sync-reviews.yml.
import { readFile, writeFile } from "node:fs/promises";

const SITE = process.env.SITE_URL || "https://volum-architecte-millet.vercel.app";
const FILE = new URL("../lib/reviews.json", import.meta.url);

const res = await fetch(`${SITE}/api/avis`, { headers: { "Cache-Control": "no-cache" } });
if (!res.ok) throw new Error(`${SITE}/api/avis : HTTP ${res.status}`);
const live = await res.json();

const saved = JSON.parse(await readFile(FILE, "utf8"));
const known = new Set(saved.reviews.map((r) => r.author.toLowerCase()));
// Photo et date relative non conservées : les URL de photo expirent et « il y a 2 mois » vieillit mal.
const added = (live.reviews || [])
  .filter((r) => r.author && r.text && !known.has(r.author.toLowerCase()))
  .map(({ author, rating, text, localGuide }) => ({ author, ...(localGuide ? { localGuide } : {}), rating, text }));

const next = {
  rating: typeof live.rating === "number" ? live.rating : saved.rating,
  count: Math.max(live.count || 0, saved.count),
  reviews: [...added, ...saved.reviews],
};

const before = JSON.stringify(saved, null, 2) + "\n";
const after = JSON.stringify(next, null, 2) + "\n";
if (before === after) {
  console.log("Aucun changement.");
} else {
  await writeFile(FILE, after);
  console.log(`Note ${next.rating} · ${next.count} avis · ${added.length} nouvel(s) avis : ${added.map((r) => r.author).join(", ") || "-"}`);
}
