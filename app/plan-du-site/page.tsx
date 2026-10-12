import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumb } from "@/components/Sections";
import { sitePages, type SitePage } from "@/lib/pages";

export const metadata: Metadata = pageMeta(
  "/plan-du-site",
  "Plan du site",
  "Toutes les pages du site Volum, Jean-Yves Millet architecte DPLG : l'agence, les expertises, les projets et les pages « architecte » des communes de l'Hérault.",
);

export default function PlanDuSite() {
  const groups = sitePages().reduce<Record<string, SitePage[]>>((acc, p) => {
    (acc[p.group] ||= []).push(p);
    return acc;
  }, {});
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["Plan du site"]]} />
          <h1 className="display">Plan du site.</h1>
        </div>
      </section>
      <section className="section section--flush-top">
        <div className="container sitemap-groups">
          {Object.entries(groups).map(([group, pages], i) => (
            <nav key={group} aria-labelledby={`plan-${i}`}>
              <h2 className="h4" id={`plan-${i}`}>{group}</h2>
              <ul>
                {pages.map((p) => <li key={p.path}><Link href={p.path}>{p.title}</Link></li>)}
              </ul>
            </nav>
          ))}
        </div>
      </section>
    </>
  );
}
