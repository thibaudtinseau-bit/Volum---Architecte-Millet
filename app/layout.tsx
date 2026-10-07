import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import { ClientEffects } from "@/components/ClientEffects";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/Sections";
import { SITE } from "@/lib/content";
import { SAVED_REVIEWS } from "@/lib/reviews-data";
import "./globals.css";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Inter_Tight({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Volum — Jean-Yves Millet, architecte DPLG à Montpellier | Une architecture dessinée pour être construite",
    template: "%s | Volum, architecte DPLG",
  },
  description: SITE.description,
  applicationName: "Volum",
  authors: [{ name: "Jean-Yves Millet" }],
  keywords: ["architecte Montpellier", "architecte DPLG", "architecte Montarnaud", "maison d'architecte Hérault",
    "extension maison", "rénovation mas", "maîtrise d'œuvre", "permis de construire", "Volum", "Jean-Yves Millet"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "fr_FR", siteName: SITE.fullName, url: "/",
    title: "Volum — Jean-Yves Millet, architecte DPLG", description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: "#0a0b0b", width: "device-width", initialScale: 1, viewportFit: "cover" };

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`no-js ${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Aller au contenu</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ClientEffects />
        <JsonLd data={orgLd} />
      </body>
    </html>
  );
}
