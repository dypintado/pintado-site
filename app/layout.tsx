import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dylan Pintado — AI Automation Engineer",
  description: "Where most see a gap between business and technology, I build the bridge.",
  openGraph: {
    title: "Dylan Pintado — AI Automation Engineer",
    description: "Where most see a gap between business and technology, I build the bridge.",
    url: "https://dylanpintado.com",
    images: [{ url: "https://dylanpintado.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylan Pintado — AI Automation Engineer",
    images: ["https://dylanpintado.com/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}