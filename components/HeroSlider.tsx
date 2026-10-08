"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, type ReactNode } from "react";

type Slide = { src: string; srcSm: string; w: number; h: number; caption: string };

/** Diaporama du haut de page : fondu lent, pause possible, arrêt automatique si l'utilisateur limite les animations. */
export function HeroSlider({ slides, children }: { slides: Slide[]; children: ReactNode }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setLoaded(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setCurrent((c) => (c + 1) % slides.length), 7000);
    return () => clearTimeout(t);
  }, [current, playing, slides.length]);

  return (
    <>
      <div className="hero-slides">
        {slides.map((s, i) => (
          <div key={s.src} className={`hero-slide${i === current ? " is-active" : ""}`} aria-hidden={i !== current}>
            {(i === 0 || loaded) && (
              <img src={s.src} srcSet={`${s.srcSm} 760w, ${s.src} ${s.w}w`} sizes="100vw" width={s.w} height={s.h}
                alt={s.caption} fetchPriority={i === 0 ? "high" : undefined} loading={i === 0 ? "eager" : "lazy"} />
            )}
          </div>
        ))}
      </div>
      <div className="container hero-content">
        {children}
        <div className="hero-meta">
          <span className="hero-caption">{slides[current].caption}</span>
          <div className="hero-dots" role="group" aria-label="Choisir une photo">
            {slides.map((s, i) => (
              <button key={s.src} type="button" aria-label={`Photo ${i + 1} : ${s.caption}`} aria-pressed={i === current}
                className={i === current ? "is-active" : ""} onClick={() => setCurrent(i)} />
            ))}
          </div>
          <button className="hero-pause" type="button" onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Mettre le diaporama en pause" : "Relancer le diaporama"}>
            {playing
              ? <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3" y="2" width="3.5" height="12" /><rect x="9.5" y="2" width="3.5" height="12" /></svg>
              : <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 2l10 6-10 6z" /></svg>}
          </button>
        </div>
      </div>
    </>
  );
}
