"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Animations d'apparition au scroll + compteurs. Le contenu reste présent dans le HTML (SEO). */
export function ClientEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible), .reveal-img:not(.is-visible)"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));

    const cio = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        cio.unobserve(el);
        const end = parseFloat(el.dataset.count || "0");
        let t0 = 0;
        const step = (t: number) => {
          if (!t0) t0 = t;
          const p = Math.min((t - t0) / 1600, 1);
          el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }),
      { threshold: 0.4 }
    );
    counters.forEach((c) => cio.observe(c));
    return () => { io.disconnect(); cio.disconnect(); };
  }, [pathname]);
  return null;
}
