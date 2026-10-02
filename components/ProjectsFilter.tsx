"use client";
import { useEffect, useState } from "react";
import { CATEGORIES, PROJECTS, type CategoryKey } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";

export function ProjectsFilter() {
  const [cat, setCat] = useState<"all" | CategoryKey>("all");

  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (h in CATEGORIES) setCat(h as CategoryKey);
  }, []);

  const choose = (c: "all" | CategoryKey) => {
    setCat(c);
    history.replaceState(null, "", c === "all" ? window.location.pathname : `#${c}`);
  };

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrer les projets">
        <button className={`filter${cat === "all" ? " is-active" : ""}`} type="button" aria-pressed={cat === "all"} onClick={() => choose("all")}>
          Tous<sup>{PROJECTS.length}</sup>
        </button>
        {(Object.keys(CATEGORIES) as CategoryKey[]).map((k) => (
          <button key={k} className={`filter${cat === k ? " is-active" : ""}`} type="button" aria-pressed={cat === k} onClick={() => choose(k)}>
            {CATEGORIES[k]}<sup>{PROJECTS.filter((p) => p.cats.includes(k)).length}</sup>
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} p={p} hidden={cat !== "all" && !p.cats.includes(cat)} />
        ))}
      </div>
    </>
  );
}
