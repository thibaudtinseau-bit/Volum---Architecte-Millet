import Link from "next/link";
import { SECTEURS, distanceAgence, villesDuSecteur, type Ville } from "@/lib/villes";

/** Distance lisible depuis l'agence de Montarnaud */
export function distanceLabel(v: Ville) {
  const d = distanceAgence(v);
  return d < 2 ? "Commune de l'agence" : `${d} km de l'agence`;
}

/** Grille de liens vers des pages « Architecte à … » */
export function VilleLinks({ villes }: { villes: Ville[] }) {
  return (
    <ul className="ville-links">
      {villes.map((v) => (
        <li key={v.slug}>
          <Link href={`/architecte/${v.slug}`}>
            <strong>Architecte {v.a}</strong>
            <span>{v.cp} · {distanceLabel(v)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Toutes les communes, groupées par secteur (accueil, contact). */
export function ZoneVilles() {
  return (
    <div className="zone-villes">
      {SECTEURS.map((s) => {
        const villes = villesDuSecteur(s.id);
        if (!villes.length) return null;
        return (
          <div className="zone-secteur" key={s.id}>
            <h3><Link href={`/architecte#${s.id}`}>{s.nom}</Link></h3>
            <ul className="communes">
              {villes.map((v) => <li key={v.slug}><Link href={`/architecte/${v.slug}`}>{v.nom}</Link></li>)}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
