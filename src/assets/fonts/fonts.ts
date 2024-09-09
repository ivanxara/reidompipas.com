import { Inter, Kalnia } from "next/font/google";

export const inter = Inter({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const bellagia = Kalnia({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bellagia",
});

export const fonts = [inter.variable, bellagia.variable];
