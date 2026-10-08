"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DESIGN_CONFIG, DESIGN_PARAM, DESIGN_STORAGE_KEY, DESIGN_VERSIONS, type DesignVersion } from "@/lib/design";

const isVersion = (v: unknown): v is DesignVersion => v === "v2" || v === "v3";
const current = (): DesignVersion => (isVersion(document.documentElement.dataset.design) ? document.documentElement.dataset.design as DesignVersion : DESIGN_CONFIG.defaultVersion);
const stored = () => { try { return localStorage.getItem(DESIGN_STORAGE_KEY); } catch { return null; } };

/** Ajoute (ou met à jour) ?design= dans l'URL sans recharger, en gardant les autres paramètres et l'ancre. */
function syncUrl(v: DesignVersion) {
  const url = new URL(window.location.href);
  if (url.searchParams.get(DESIGN_PARAM) === v) return;
  url.searchParams.set(DESIGN_PARAM, v);
  window.history.replaceState(null, "", url);
}

function apply(v: DesignVersion) {
  document.documentElement.setAttribute("data-design", v);
  try { localStorage.setItem(DESIGN_STORAGE_KEY, v); } catch {}
  syncUrl(v);
}

/** Mots-clés en émeraude (V3) : attribut data-v3-mark, coloré via l'API CSS Custom Highlight, sans modifier le texte. */
function markWords(on: boolean) {
  const reg = (globalThis as unknown as { CSS?: { highlights?: Map<string, unknown> } }).CSS?.highlights;
  const H = (globalThis as unknown as { Highlight?: new (...r: Range[]) => unknown }).Highlight;
  if (!reg || !H) return;
  reg.delete("v3-mark");
  if (!on) return;
  const ranges: Range[] = [];
  document.querySelectorAll<HTMLElement>("[data-v3-mark]").forEach((el) => {
    const word = el.dataset.v3Mark!;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const i = n.textContent!.indexOf(word);
      if (i >= 0) { const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + word.length); ranges.push(r); break; }
    }
  });
  reg.set("v3-mark", new H(...ranges));
}

// Blocs qui apparaissent en douceur au défilement, en V3 uniquement
const REVEAL = ".section-head, .comp-split > *, .numbered > li, .timeline > li, .stats, .projects-grid > *, .expertise, .faq, .reviews-track, .cta-band .comp-minimal";

/**
 * Outil de présentation client (V2 / V3). Rendu uniquement si DESIGN_CONFIG.enableComparison.
 * Le sélecteur n'apparaît que sur l'accueil ; le choix reste actif sur toutes les pages.
 */
export function DesignSwitcher() {
  const pathname = usePathname() || "/";
  const [version, setVersion] = useState<DesignVersion | null>(null);

  useEffect(() => {
    setVersion(current());
    // un choix déjà fait reste visible dans l'URL d'une page à l'autre (lien partageable)
    if (isVersion(stored())) syncUrl(current());
  }, [pathname]);

  // retour arrière vers une URL portant un autre ?design=
  useEffect(() => {
    const onPop = () => {
      const q = new URLSearchParams(window.location.search).get(DESIGN_PARAM);
      if (isVersion(q) && q !== current()) { apply(q); setVersion(q); }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // apparitions au défilement (V3, hors « réduire les animations »)
  useEffect(() => {
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io: IntersectionObserver | undefined;
    const setup = () => {
      markWords(html.dataset.design === "v3");
      io?.disconnect();
      html.classList.remove("v3-reveal-on");
      document.querySelectorAll(".v3-reveal").forEach((el) => el.classList.remove("v3-reveal", "is-in"));
      if (reduce || html.dataset.design !== "v3" || !("IntersectionObserver" in window)) return;
      const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter((el) => el.getBoundingClientRect().top > window.innerHeight);
      els.forEach((el) => el.classList.add("v3-reveal"));
      html.classList.add("v3-reveal-on");
      io = new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io?.unobserve(en.target); }
      }), { rootMargin: "0px 0px -6% 0px" });
      els.forEach((el) => io!.observe(el));
    };
    setup();
    const mo = new MutationObserver(setup);
    mo.observe(html, { attributes: true, attributeFilter: ["data-design"] });
    return () => { mo.disconnect(); io?.disconnect(); };
  }, [pathname]);

  if (pathname !== "/" || !version) return null;

  return (
    <div className="design-switcher" role="group" aria-label="Direction artistique du site (présentation)">
      {DESIGN_VERSIONS.map((d) => (
        <button key={d.id} type="button" aria-pressed={version === d.id}
          onClick={() => { apply(d.id); setVersion(d.id); }}>
          <strong>{d.label}</strong> {d.name}
        </button>
      ))}
    </div>
  );
}
