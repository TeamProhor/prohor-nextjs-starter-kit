import {
  Cormorant,
  Hind_Siliguri,
  Inter,
  JetBrains_Mono,
} from "next/font/google";

export const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
