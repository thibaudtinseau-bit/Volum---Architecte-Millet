"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/content";
import { Arrow } from "./Icons";
import { Logo } from "./Logo";

export const NAV = [
  { href: "/agence", label: "L'agence", key: "agence" },
  { href: "/expertises", label: "Expertises", key: "expertises" },
  { href: "/projets", label: "Réalisations", key: "projets" },
  { href: "/approche", label: "Notre approche", key: "approche" },
];
const MOBILE_NAV = [...NAV, { href: "/contact", label: "Contact", key: "contact" }];

// pages qui s'ouvrent sur une grande photo : en-tête transparent tant qu'on n'a pas défilé
const onPhoto = (path: string) => path === "/" || /^\/projets\/[^/]+$/.test(path);

export function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [toTop, setToTop] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setToTop(y > window.innerHeight * 1.5 && document.documentElement.scrollHeight > window.innerHeight * 3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    menu.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggle.current?.focus(); return; }
      if (e.key !== "Tab" || !menu.current) return;
      // garde le focus dans le menu ouvert (bouton de fermeture + liens)
      const items = [toggle.current, ...menu.current.querySelectorAll<HTMLElement>("a")].filter(Boolean) as HTMLElement[];
      const i = items.indexOf(document.activeElement as HTMLElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
      else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); document.body.classList.remove("menu-open"); };
  }, [open]);

  const active = pathname.split("/")[1] || "home";
  const solid = scrolled || !onPhoto(pathname);
  const cls = ["site-header", solid ? "is-solid" : "", scrolled ? "is-scrolled" : ""].join(" ");

  return (
    <>
      <header className={cls}>
        <div className="container">
          <Link className="brand" href="/" aria-label="Volum, retour à l'accueil">
            <Logo />
          </Link>
          <nav className="nav" aria-label="Navigation principale">
            {NAV.map((n) => (
              <Link key={n.key} href={n.href} aria-current={active === n.key ? "page" : undefined}>{n.label}</Link>
            ))}
            <Link className="btn" href="/contact" aria-current={active === "contact" ? "page" : undefined}>
              Échanger sur mon projet <Arrow />
            </Link>
          </nav>
          <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}>
            <span>{open ? "Fermer" : "Menu"}</span>
            <span className="menu-toggle-bars" aria-hidden="true"><span /><span /></span>
          </button>
        </div>
      </header>
      <div ref={menu} className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <nav aria-label="Navigation mobile">
          {MOBILE_NAV.map((n, i) => (
            <Link key={n.key} href={n.href} onClick={() => setOpen(false)} aria-current={active === n.key ? "page" : undefined}>
              {n.label}
              <small aria-hidden="true">0{i + 1}</small>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <Link className="btn" href="/contact" onClick={() => setOpen(false)}>Échanger sur mon projet <Arrow /></Link>
          <p>Téléphone : <a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a></p>
          <p>{SITE.address}, {SITE.zip} {SITE.city}</p>
        </div>
      </div>
      <button className={`to-top${toTop ? " is-visible" : ""}`} type="button" aria-label="Revenir en haut de la page"
        tabIndex={toTop ? 0 : -1} aria-hidden={!toTop} onClick={() => window.scrollTo({ top: 0 })}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
      </button>
    </>
  );
}
