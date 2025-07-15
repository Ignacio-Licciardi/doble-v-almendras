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
