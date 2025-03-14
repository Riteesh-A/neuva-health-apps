export type SiteConfig = {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
  locale?: string;
};

export const companyName = process.env.COMPANY_NAME;
export const siteConfig = {
  title: process.env.SITE_NAME,
  description:
    "NeuvaHealth offers expert-backed healthcare solutions tailored for the Indian market. Explore treatments for hair loss, skin care, mental health, and more — discreet, affordable, and effective.",
  keywords: [
    "healthcare India",
    "hair loss treatment",
    "skin care solutions",
    "mental health support",
    "personalized wellness",
    "online doctor consultation",
    "men’s health",
    "women’s health",
    "sexual health India",
  ],
  url: "https://www.neuvahealth.com",
  image: "https://www.neuvahealth.com/og-image.jpg",
  locale: "en_IN",
};

export function generatePageMetadata({
  title,
  description,
  keywords,
  url,
  image,
  locale,
}: SiteConfig = siteConfig) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "NeuvaHealth",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@NeuvaHealth",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "hi-IN": url?.replace(".com", ".com/hi"),
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    manifest: "/site.webmanifest",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}
