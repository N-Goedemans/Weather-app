import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const classes = `${inter} bg-gradient-to-r from-blue-500 to-blue-200`

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Created by Niek Goedemans',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classes}>{children}</body>
    </html>
  )
}
