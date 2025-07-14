import { Geist, Geist_Mono, Mr_Dafoe, Archivo_Narrow } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dafoe = Mr_Dafoe({
  weight: ['400'],
  subsets: ["latin"],
});

export const archivo = Archivo_Narrow({
  weight: ['400'],
  subsets: ["latin"],
});