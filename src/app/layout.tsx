import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hyper Space Task",
  description: "Created By Zeshan",
  icons: {
    icon: 'public\icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-3/4 mx-auto p-1">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  )
}
