import Link from "next/link";
import { CATEGORIES, type Project } from "@/lib/content";
import { ProjectImg } from "./ProjectImg";

export function ProjectCard({ p, hidden }: { p: Project; hidden?: boolean }) {
  return (
    <Link className={`project-card reveal${hidden ? " is-hidden" : ""}`} href={`/projets/${p.slug}`} data-cat={p.cats.join(" ")}>
      <div className="project-media reveal-img">
        <span className="project-badge">{CATEGORIES[p.cats[0]]}</span>
        <ProjectImg slug={p.slug} num={p.cover} alt={`${p.title} — ${p.summary}`}
          sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 40vw" />
      </div>
      <div className="project-info">
        <h3>{p.title}</h3>
        <div className="meta">{p.place}{p.year && <small>{p.year}</small>}</div>
      </div>
    </Link>
  );
}
