/** @type {import('next').NextConfig} */

// Anciennes pages projet (avant le passage aux 6 dossiers) → dossier correspondant
const OLD_PROJECTS = {
  "villa-cetd": "logement-exterieur", "villa-vc": "logement-exterieur", "villa-l": "logement-exterieur",
  "villa-g": "logement-exterieur", "villa-a": "logement-exterieur", "villa-r": "logement-exterieur",
  "villa-m": "logement-exterieur", "extension-b": "logement-exterieur", "villa-elena": "logement-exterieur",
  "maison-d-affinage": "industriel-agricole", "siege-social-o": "tertiaire", "siege-social-at": "tertiaire",
  "office-notarial-b": "tertiaire", "concept-cassine": "plans-recherche", "divers-conception": "plans-recherche",
};

const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return Object.entries(OLD_PROJECTS).map(([from, to]) => ({
      source: `/projets/${from}`, destination: `/projets/${to}`, permanent: true,
    }));
  },
};
export default nextConfig;
