import { hankenGrotesk } from "@/core/fonts";
import { baseUrl, cn } from "@/core/lib/utils";
import { ThemeProvider } from "@/core/provider/theme-provider";
import { siteConfig } from "@/site-config";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  url: siteConfig.url,
  image: siteConfig.image,
  locale: siteConfig.locale,
  metadataBase: new URL(baseUrl),
  robots: {
    follow: true,
    index: true,
  },
  icons: [
    {
      url: "/favicon.png",
      href: "/favicon.png",
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(hankenGrotesk.className)}>
        <ThemeProvider
          enableSystem
          defaultTheme="light"
          storageKey="neuva-health-theme"
          attribute={"class"}
        >
          {children}
          <Toaster closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
