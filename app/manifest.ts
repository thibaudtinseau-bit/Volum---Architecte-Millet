import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Volum — Jean-Yves Millet, Architecte DPLG",
    short_name: "Volum",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0b0b",
    icons: [
      { src: "/logo/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/logo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
