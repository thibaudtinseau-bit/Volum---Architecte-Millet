import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Sections";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales & confidentialité",
  description: "Mentions légales et politique de confidentialité du site Volum.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function Mentions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[["Accueil", "/"], ["Mentions légales"]]} />
          <h1 className="display">Mentions <em className="accent">légales</em>.</h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <h2>Éditeur du site</h2>
          <p><strong>Monsieur Jean-Yves Millet</strong> — Volum architecture<br />
            Architecte DPLG, exercice libéral<br />
            {SITE.address}, {SITE.zip} {SITE.city}, France<br />
            Téléphone : <a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a><br />
            SIREN : {SITE.siren}<br />
            Inscrit au Tableau de l&apos;Ordre des architectes — n° d&apos;inscription : <em>[à compléter]</em><br />
            Directeur de la publication : Jean-Yves Millet</p>
          <h3>Assurance professionnelle</h3>
          <p>Conformément à l&apos;article 16 de la loi n° 77-2 du 3 janvier 1977 sur l&apos;architecture, l&apos;architecte est couvert par une assurance de responsabilité civile professionnelle et décennale : <em>[nom de l&apos;assureur et numéro de contrat à compléter]</em>.</p>
          <h2>Hébergement</h2>
          <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a></p>
          <h2>Propriété intellectuelle</h2>
          <p>L&apos;ensemble des contenus de ce site (textes, plans, perspectives, photographies, logo) est la propriété exclusive de Jean-Yves Millet / Volum, sauf mention contraire. Les œuvres architecturales présentées sont protégées par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.</p>
          <h2 id="confidentialite">Politique de confidentialité</h2>
          <h3>Données collectées</h3>
          <p>Les informations saisies dans le formulaire de contact (nom, e-mail, téléphone, commune, description du projet) sont utilisées uniquement pour répondre à votre demande et vous recontacter au sujet de votre projet. Elles ne sont ni vendues ni cédées à des tiers.</p>
          <h3>Base légale et durée de conservation</h3>
          <p>Le traitement repose sur votre consentement. Les données sont conservées au maximum 3 ans à compter du dernier contact, sauf relation contractuelle.</p>
          <h3>Vos droits</h3>
          <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos données. Pour l&apos;exercer, contactez Jean-Yves Millet à l&apos;adresse postale ci-dessus ou par téléphone. Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener">cnil.fr</a>).</p>
          <h3>Cookies et services tiers</h3>
          <p>Ce site n&apos;utilise aucun cookie de mesure d&apos;audience ni publicitaire. La carte Google Maps n&apos;est chargée que si vous cliquez sur « Afficher la carte » ; Google peut alors déposer ses propres cookies. Les polices sont hébergées sur le site. Le formulaire de contact transite par un prestataire d&apos;envoi d&apos;e-mails (Resend ou Formspree).</p>
          <h3>Avis clients</h3>
          <p>Les avis présentés sont issus de la fiche Google Maps de l&apos;agence et restent la propriété de leurs auteurs.</p>
        </div>
      </section>
    </>
  );
}
