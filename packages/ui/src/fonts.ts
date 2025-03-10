import { Geist, Geist_Mono, Montserrat, Young_Serif, Hanken_Grotesk } from 'next/font/google';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
});

export const youngSerif = Young_Serif({
  subsets: ['latin'],
  weight: '400',
});

export const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: '400',
});
