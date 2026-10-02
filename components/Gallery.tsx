"use client";
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";

type Item = { src: string; srcSm: string; w: number; h: number; alt: string };

export function Gallery({ items }: { items: Item[] }) {
  const [idx, setIdx] = useState<number | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);

  const show = useCallback((i: number) => setIdx((i + items.length) % items.length), [items.length]);
  const close = useCallback(() => { setIdx(null); lastFocus.current?.focus(); }, []);

  useEffect(() => {
    if (idx === null) { document.body.style.overflow = ""; return; }
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [idx, show, close]);

  const icon = (d: string) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d={d} /></svg>;

  return (
    <>
      <div className="gallery">
        {items.map((it, i) => (
          <a key={it.src} href={it.src} onClick={(e) => { e.preventDefault(); lastFocus.current = e.currentTarget; show(i); }}>
            <img src={it.src} srcSet={`${it.srcSm} 760w, ${it.src} ${it.w}w`} sizes="(max-width: 640px) 100vw, 33vw"
              width={it.w} height={it.h} alt={it.alt} loading="lazy" decoding="async" />
          </a>
        ))}
      </div>
      {idx !== null && (
        <div className="lightbox is-open" role="dialog" aria-modal="true" aria-label="Visionneuse de photos"
          onClick={(e) => e.target === e.currentTarget && close()}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}>
          <img src={items[idx].src} alt={items[idx].alt} />
          <button ref={closeBtn} className="lb-btn lb-close" type="button" aria-label="Fermer" onClick={close}>{icon("M6 6l12 12M18 6L6 18")}</button>
          <button className="lb-btn lb-prev" type="button" aria-label="Photo précédente" onClick={() => show(idx - 1)}>{icon("M15 5l-7 7 7 7")}</button>
          <button className="lb-btn lb-next" type="button" aria-label="Photo suivante" onClick={() => show(idx + 1)}>{icon("M9 5l7 7-7 7")}</button>
          <div className="lb-count">{idx + 1} / {items.length}</div>
        </div>
      )}
    </>
  );
}
