import { Playfair_Display, Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const angelo = localFont({
  src: "./RionaldoAngelo.ttf",
  display: "swap",
  variable: "--font-angelo",
});
