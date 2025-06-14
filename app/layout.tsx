import type React from "react"
import type { Metadata } from "next"
import { Encode_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const encodeSans = Encode_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mavericks - Industrial Automation & Control Solutions",
  description:
    "Mavericks delivers industrial automation, electrical and instrumentation solutions tailored for critical sectors like Oil & Gas, Pharma, and Power.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={encodeSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
