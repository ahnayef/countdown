import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import data from "./assets/target.json"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Countdown | ${data.title}`,
  description: `Countdown to a | ${data.title}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
