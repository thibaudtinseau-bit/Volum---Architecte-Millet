import type { Metadata } from "next";
import { ContactSection, Zone } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contact — parlons de votre projet",
  description: "Contactez Volum, Jean-Yves Millet architecte DPLG à Montarnaud (34) : construction neuve, extension, rénovation ou projet professionnel à Montpellier et dans l'Hérault. Tél. 06 71 06 87 16.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <ContactSection standalone />
      <Zone />
    </>
  );
}
