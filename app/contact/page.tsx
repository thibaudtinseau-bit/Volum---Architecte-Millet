import type { Metadata } from "next";
import { ContactSection, Zone } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contact — prendre rendez-vous avec l'architecte",
  description: "Contactez Jean-Yves Millet, architecte DPLG à Montarnaud (34) : maison neuve, extension, rénovation, bureaux. Tél. 06 71 06 87 16.",
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
