import type { Metadata } from "next";
import { geistSans, geistMono } from "./lib/fonts";
import "./globals.css";

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