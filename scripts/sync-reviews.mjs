// Ajoute à lib/reviews.json les nouveaux avis Google affichés par le site
// et met à jour la note et le nombre d'avis. Lancé par .github/workflows/sync-reviews.yml.
import { readFile, writeFile } from "node:fs/promises";

const SITE = process.env.SITE_URL || "https://volum-architecte-millet.vercel.app";
const FILE = new URL("../lib/reviews.json", import.meta.url);

const res = await fetch(`${SITE}/api/avis`, { headers: { "Cache-Control": "no-cache" } });
if (!res.ok) throw new Error(`${SITE}/api/avis : HTTP ${res.status}`);
const live = await res.json();

const saved = JSON.parse(await readFile(FILE, "utf8"));
const liveByAuthor = new Map((live.reviews || []).map((r) => [r.author?.toLowerCase(), r]));
// Complète la date des avis déjà enregistrés quand Google la fournit
for (const r of saved.reviews) {
  const l = liveByAuthor.get(r.author.toLowerCase());
  if (!r.date && l?.date) r.date = l.date;
}
const known = new Set(saved.reviews.map((r) => r.author.toLowerCase()));
// Photo non conservée : les URL de photo Google expirent.
const added = (live.reviews || [])
  .filter((r) => r.author && r.text && !known.has(r.author.toLowerCase()))
  .map(({ author, rating, text, localGuide, date }) => ({ author, ...(localGuide ? { localGuide } : {}), rating, ...(date ? { date } : {}), text }));

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
