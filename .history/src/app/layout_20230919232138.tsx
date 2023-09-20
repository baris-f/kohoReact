import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import icon from "../../public/favicon.ico";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KOHO',
  description: 'Find your home in Korea!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
        <head>
            <link rel='icon' href={icon.src}/>
            <title>KOHO</title>
        </head>
        <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
