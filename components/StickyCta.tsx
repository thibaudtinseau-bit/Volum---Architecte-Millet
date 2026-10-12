"use client";
import { useEffect, useState } from "react";
import { Arrow } from "./Icons";

/** Barre d'appel à l'action fixée en bas d'écran (mobile et tablette) : apparaît une fois l'en-tête
    passé et disparaît dès que le formulaire visé arrive à l'écran. */
export function StickyCta({ text, label, target }: { text: string; label: string; target: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const form = document.getElementById(target);
      const before = form ? form.getBoundingClientRect().top > window.innerHeight - 40 : true;
      setVisible(window.scrollY > window.innerHeight * 0.7 && before);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [target]);

  return (
    <div className={`sticky-cta${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <p>{text}</p>
      <a className="btn" href={`#${target}`} tabIndex={visible ? 0 : -1}>{label} <Arrow /></a>
    </div>
  );
}
