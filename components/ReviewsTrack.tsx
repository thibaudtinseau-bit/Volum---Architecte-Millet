"use client";
import { useRef, type ReactNode } from "react";

/** Carrousel des avis : les avis sont rendus côté serveur (children), ce composant gère seulement la navigation. */
export function ReviewsTrack({ children, footer }: { children: ReactNode; footer: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, x: 0, scroll: 0, moved: false });

  const step = () => {
    const c = track.current?.querySelector(".review");
    return c ? c.getBoundingClientRect().width + 20 : 320;
  };
  const by = (d: number) => track.current?.scrollBy({ left: d * step(), behavior: "smooth" });

  return (
    <>
      <div ref={track} className="reviews-track" tabIndex={0} aria-label="Avis clients, faire défiler horizontalement"
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse" || !track.current) return;
          drag.current = { down: true, x: e.clientX, scroll: track.current.scrollLeft, moved: false };
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d.down || !track.current) return;
          const dx = e.clientX - d.x;
          if (Math.abs(dx) > 4) { d.moved = true; track.current.classList.add("is-dragging"); }
          track.current.scrollLeft = d.scroll - dx;
        }}
        onPointerUp={() => { drag.current.down = false; track.current?.classList.remove("is-dragging"); }}
        onPointerLeave={() => { drag.current.down = false; track.current?.classList.remove("is-dragging"); }}
        onClickCapture={(e) => { if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); } }}>
        {children}
      </div>
      <div className="reviews-controls">
        <div className="arrows">
          <button className="arrow-btn" type="button" aria-label="Avis précédents" onClick={() => by(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button className="arrow-btn" type="button" aria-label="Avis suivants" onClick={() => by(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        {footer}
      </div>
    </>
  );
}
