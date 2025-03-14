import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NeuvaHealth - Personalized Health & Wellness for India",
    short_name: "NeuvaHealth",
    description:
      "NeuvaHealth offers expert-backed healthcare solutions tailored for the Indian market. Explore treatments for hair loss, skin care, mental health, and more — discreet, affordable, and effective.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#617BFF",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/homepage.png",
        sizes: "2934x1678",
        type: "image/png",
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
