import {
  Allura,
  Inter,
  Kalnia,
  Noto_Serif,
  Noto_Serif_Devanagari,
  Noto_Serif_Display,
  Noto_Serif_Telugu,
  Noto_Serif_Yezidi,
  Source_Serif_4,
} from "next/font/google";
import localFont from "next/font/local";

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
