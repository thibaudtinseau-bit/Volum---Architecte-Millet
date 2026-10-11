import Link from "next/link";
import { projectImages, type Project } from "@/lib/content";
import { ProjectImg } from "./ProjectImg";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link className="project-card reveal" href={`/projets/${p.slug}`}>
      <div className="project-media reveal-img">
        <span className="project-badge">{p.eyebrow}</span>
        <ProjectImg slug={p.slug} num={p.cover} alt={`${p.title} — ${p.summary}`}
          sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 40vw" />
      </div>
      <div className="project-info">
        <h3>{p.title}</h3>
        <div className="meta">{projectImages(p.slug).length} visuels</div>
      </div>
    </Link>
  );
}
