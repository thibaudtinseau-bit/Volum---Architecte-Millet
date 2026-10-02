"use client";
import { useState } from "react";
import { SITE } from "@/lib/content";
import { Arrow } from "./Icons";

/** Carte Google chargée uniquement au clic (pas de cookie tiers sans action du visiteur). */
export function MapEmbed() {
  const [show, setShow] = useState(false);
  return (
    <div className="map-wrap reveal d1">
      {show ? (
        <iframe src={SITE.mapsEmbed} title="Plan d'accès — Volum, Montarnaud" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="map-placeholder">
          <span className="eyebrow">Plan d&apos;accès</span>
          <p>La carte interactive est fournie par Google Maps. Son affichage peut déposer des cookies tiers.</p>
          <div>
            <button className="btn btn--light" type="button" onClick={() => setShow(true)}>Afficher la carte <Arrow /></button>
          </div>
        </div>
      )}
    </div>
  );
}
