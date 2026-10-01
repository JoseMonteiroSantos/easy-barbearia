import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Silva's Barbearia | Barbearia em Belo Horizonte",
    template: "%s | Silva's Barbearia",
  },

  description:
    "Corte, barba e cuidados masculinos em Belo Horizonte. Conheça a Silva's Barbearia, nossos serviços e profissionais e agende seu horário online.",

  keywords: [
    "Silva's Barbearia",
    "barbearia em Belo Horizonte",
    "barbearia BH",
    "barbearia Castelo BH",
    "barbeiro Belo Horizonte",
    "corte masculino BH",
    "barba BH",
    "corte de cabelo masculino",
    "barbearia Castelo",
  ],

  authors: [
    {
      name: "Silva's Barbearia",
    },
  ],

  creator: "Silva's Barbearia",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",

    title: "Silva's Barbearia | Belo Horizonte",

    description:
      "Corte, barba e cuidados masculinos. Conheça a Silva's Barbearia e agende seu horário online.",

    siteName: "Silva's Barbearia",

    images: [
      {
        url: "/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Silva's Barbearia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Silva's Barbearia | Belo Horizonte",

    description:
      "Corte, barba e cuidados masculinos. Conheça a Silva's Barbearia e agende seu horário online.",

    images: ["/images/og/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}