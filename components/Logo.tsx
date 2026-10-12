/* Logo VOLUM 2026 (V + « o » barré). Deux déclinaisons détourées : texte noir pour les fonds clairs,
   texte blanc pour les fonds sombres ; l'en-tête bascule de l'une à l'autre selon son état. */
/* eslint-disable @next/next/no-img-element */
export function Logo({ tagline = false }: { tagline?: boolean }) {
  if (tagline) {
    return (
      <span className="logo logo--full">
        <img src="/logo/volum-logo-light.webp" alt="Volum — Jean-Yves Millet architecte DPLG" width={720} height={265} loading="lazy" decoding="async" />
      </span>
    );
  }
  return (
    <span className="logo">
      <img className="logo-dark" src="/logo/volum-wordmark.webp" alt="Volum" width={551} height={150} />
      <img className="logo-light" src="/logo/volum-wordmark-light.webp" alt="" aria-hidden="true" width={551} height={150} />
    </span>
  );
}
