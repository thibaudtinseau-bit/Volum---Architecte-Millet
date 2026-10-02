"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

type Slide = { src: string; srcSm: string; w: number; h: number; caption: string };

export function HeroSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setCurrent((c) => (c + 1) % slides.length), 7000);
    return () => clearTimeout(t);
  }, [current, slides.length]);

  return (
    <>
      <div className="hero-slides">
        {slides.map((s, i) => (
          <div key={s.src} className={`hero-slide${i === current ? " is-active" : ""}`}>
            {(i === 0 || loaded) && (
              <img src={s.src} srcSet={`${s.srcSm} 760w, ${s.src} ${s.w}w`} sizes="100vw" width={s.w} height={s.h}
                alt={s.caption} fetchPriority={i === 0 ? "high" : undefined} loading={i === 0 ? "eager" : "lazy"} />
            )}
          </div>
        ))}
      </div>
      <div className="hero-meta">
        <span className="hero-caption">{slides[current].caption}</span>
        <div className="hero-dots">
          {slides.map((s, i) => (
            <button key={s.src} type="button" aria-label={`Image ${i + 1}`} className={i === current ? "is-active" : ""}
              onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </>
  );
}
