import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ContactSection, Zone } from "@/components/Sections";

export const metadata: Metadata = pageMeta(
  "/contact",
  "Contact : parlons de votre projet",
  "Contactez Volum, Jean-Yves Millet architecte DPLG à Montarnaud : maison neuve, extension, rénovation ou projet professionnel dans l'Hérault. 06 71 06 87 16.",
);

export default function Contact() {
  return (
    <>
      <ContactSection standalone />
      <Zone />
    </>
  );
}
