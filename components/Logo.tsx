/* Logo VOLUM : le « V » (image fournie) + le mot-symbole en texte,
   ce qui permet de l'afficher en clair sur fond sombre et en noir sur fond clair. */
export function Logo({ tagline = false }: { tagline?: boolean }) {
  return (
    <span className={`logo${tagline ? " logo--full" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="logo-v" src="/logo/volum-v-240.webp" alt="" width={240} height={182} />
      <span className="logo-text">
        <span className="logo-word">OLUM</span>
        <span className="logo-sub">{tagline ? "Conception | Réalisation" : "J.-Y. Millet · Architecte DPLG"}</span>
      </span>
    </span>
  );
}
