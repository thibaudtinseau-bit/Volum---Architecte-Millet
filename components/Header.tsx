"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/content";
import { Arrow, PhoneIcon } from "./Icons";
import { Logo } from "./Logo";

const NAV = [
  { href: "/agence", label: "L'agence", key: "agence" },
  { href: "/projets", label: "Réalisations", key: "projets" },
  { href: "/#methode", label: "Méthode", key: "methode" },
  { href: "/#avis", label: "Avis", key: "avis" },
];

// pages dont le haut est clair (en-tête sombre d'emblée)
const LIGHT = ["/agence", "/projets", "/mentions-legales"];

export function Header() {
  const pathname = usePathname() || "/";
  const light = LIGHT.includes(pathname);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > lastY.current && y > 400);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const active = pathname.split("/")[1] || "home";
  const cls = ["site-header", solid || light ? "is-solid" : "", hidden && !open ? "is-hidden" : ""].join(" ");

  return (
    <>
      <header className={cls}>
        <div className="container">
          <Link className="brand" href="/" aria-label="Volum — accueil">
            <Logo />
          </Link>
          <nav className="nav" aria-label="Navigation principale">
            {NAV.map((n) => (
              <Link key={n.key} href={n.href} aria-current={active === n.key ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
            <Link className="btn" href="/contact">
              Parlons de votre projet <Arrow />
            </Link>
          </nav>
          <button className="menu-toggle" type="button" aria-label="Menu" aria-expanded={open}
            aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className="mobile-menu" id="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Navigation mobile">
          {[...NAV, { href: "/contact", label: "Contact", key: "contact" }].map((n, i) => (
            <Link key={n.key} href={n.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {n.label}
              <small>0{i + 1}</small>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a>
          <span>{SITE.address}, {SITE.zip} {SITE.city}</span>
        </div>
      </div>
      <a className="float-call" href={`tel:${SITE.phoneLink}`} aria-label="Appeler Jean-Yves Millet">
        <PhoneIcon />
      </a>
    </>
  );
}
