import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@neuva-health/ui/provider/theme-provider';
import { baseUrl } from '@/lib/utils';
import { cn } from '@neuva-health/ui/lib/utils';
import { Toaster } from '@neuva-health/ui/components/base/sonner';
import { hankenGrotesk } from '@neuva-health/ui/fonts';

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  icons: '/favicon.png',
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(hankenGrotesk.variable, 'antialiased')}>
        <ThemeProvider
          attribute={'class'}
          enableSystem
          defaultTheme="light"
          storageKey="neuva-health-theme"
        >
          {children}
          <Toaster closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
