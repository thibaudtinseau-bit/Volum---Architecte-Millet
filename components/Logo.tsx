/* Logo VOLUM (V + sphère). Deux déclinaisons détourées : texte noir pour les fonds clairs,
   texte blanc pour les fonds sombres ; l'en-tête bascule de l'une à l'autre selon son état. */
/* eslint-disable @next/next/no-img-element */
export function Logo({ tagline = false }: { tagline?: boolean }) {
  if (tagline) {
    return (
      <span className="logo logo--full">
        <img src="/logo/volum-logo-light.webp" alt="Volum — Conception Réalisation, Jean-Yves Millet architecte DPLG" width={720} height={371} />
      </span>
    );
  }
  return (
    <span className="logo">
      <img className="logo-dark" src="/logo/volum-wordmark.webp" alt="Volum" width={480} height={182} />
      <img className="logo-light" src="/logo/volum-wordmark-light.webp" alt="" aria-hidden="true" width={480} height={182} />
    </span>
  );
}
