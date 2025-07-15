import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Doble V Almendras - Almendras y Aceite 100% Natural",
  description:
    "Descubre nuestras almendras premium y aceite puro de almendras. Productos naturales, sin aditivos, para una vida más saludable. Usos gastronómicos y cosméticos.",
  keywords: "almendras, aceite de almendras, productos naturales, snacks saludables, cosmética natural",
  authors: [{ name: "Doble V Almendras" }],
  creator: "Doble V Almendras",
  publisher: "Doble V Almendras",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://doble-v-almendras.vercel.app'),
  openGraph: {
    title: "Doble V Almendras - Almendras y Aceite 100% Natural",
    description: "Descubre nuestras almendras premium y aceite puro de almendras. Productos naturales, sin aditivos, para una vida más saludable.",
    url: "/",
    siteName: "Doble V Almendras",
    images: [
      {
        url: "/images/post beneficios.png",
        width: 1200,
        height: 630,
        alt: "Doble V Almendras - Productos naturales",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doble V Almendras - Almendras y Aceite 100% Natural",
    description: "Descubre nuestras almendras premium y aceite puro de almendras. Productos naturales, sin aditivos.",
    images: ["/images/post beneficios.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
