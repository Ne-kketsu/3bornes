import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galerie des Trois Bornes - Un lieu unique au cœur de Paris",
  description:
    "Galerie d'art et espace événementiel au cœur de Paris, entre Belleville, République & Ménilmontant. Coworking, expositions, événements privés.",
  keywords: [
    "galerie",
    "art",
    "Paris",
    "événements",
    "coworking",
    "Belleville",
    "République",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="smooth-scroll">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
