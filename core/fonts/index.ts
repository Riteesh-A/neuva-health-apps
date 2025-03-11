import { Hanken_Grotesk, Young_Serif } from "next/font/google";

export const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
});

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
