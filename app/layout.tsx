import type { Metadata } from "next";
import { Geist, Geist_Mono,Mr_Dafoe,Archivo_Narrow } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const dafoe = Mr_Dafoe({
  weight:['400'],

});
export const archivo = Archivo_Narrow({
  weight:['400'],

});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shudhita",
  description: "My EPK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
