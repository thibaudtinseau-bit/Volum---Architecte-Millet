import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/Sections";
import { SITE } from "@/lib/content";
import { DESIGN_CONFIG, DESIGN_INIT_SCRIPT, SERVER_DESIGN } from "@/lib/design";
import { SAVED_REVIEWS } from "@/lib/reviews-data";
import "./globals.css";
import "./design-v3.css";
import "./design-switcher.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Volum, architecte à Montpellier et Montarnaud | Construction, extension, rénovation",
    template: "%s | Volum architecture",
  },
  description: SITE.description,
  applicationName: "Volum",
  authors: [{ name: "Jean-Yves Millet" }],
  keywords: ["architecte Montpellier", "architecte DPLG", "architecte Montarnaud", "maison d'architecte Hérault",
    "extension maison", "rénovation mas", "maîtrise d'œuvre", "permis de construire", "Volum", "Jean-Yves Millet"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "fr_FR", siteName: SITE.fullName, url: "/",
    title: "Volum — La sensibilité de l'architecte, la rigueur du bâtisseur", description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: "#f7f6f2", width: "device-width", initialScale: 1, viewportFit: "cover" };

const orgLd = {
  "@context": "https://schema.org",
  "@type": ["Architect", "LocalBusiness"],
  "@id": `${SITE.url}/#agence`,
  name: SITE.fullName,
  alternateName: "Volum architecture",
  description: SITE.description,
  url: SITE.url,
  telephone: "+33 6 71 06 87 16",
  image: `${SITE.url}/img/projets/villa-cetd/11.webp`,
  logo: `${SITE.url}/logo/volum-logo.png`,
  founder: { "@type": "Person", name: "Jean-Yves Millet", jobTitle: "Architecte DPLG", alumniOf: "École Nationale Supérieure d'Architecture de Montpellier" },
  address: { "@type": "PostalAddress", streetAddress: SITE.address, postalCode: SITE.zip, addressLocality: SITE.city, addressRegion: "Occitanie", addressCountry: "FR" },
  geo: { "@type": "GeoCoordinates", latitude: SITE.lat, longitude: SITE.lng },
  areaServed: ["Montpellier", "Hérault", "Gard"],
  foundingDate: "1999",
  sameAs: [SITE.houzz, SITE.linkedin],
  aggregateRating: { "@type": "AggregateRating", ratingValue: SAVED_REVIEWS.rating.toFixed(1), reviewCount: SAVED_REVIEWS.count, bestRating: 5 },
};

const GTM_ID = "GTM-MNSGM26M";
const GTM_HEAD_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`} data-design={SERVER_DESIGN} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: GTM_HEAD_SCRIPT }} />
        {/* End Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: DESIGN_INIT_SCRIPT }} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a className="skip-link" href="#main">Aller au contenu</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {DESIGN_CONFIG.enableComparison && <DesignSwitcher />}
        <JsonLd data={orgLd} />
      </body>
    </html>
  );
}
