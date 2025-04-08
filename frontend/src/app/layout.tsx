import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "cheatsheesh",
    template: "cheatsheesh"
  },
  description:
    "Upload your content, choose your size, and download beautifully formatted cheatsheets for any subject or topic.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>cheatsheesh</title>
        <meta name="description" content="Upload your content, choose your size, and download beautifully formatted cheatsheets for any subject or topic." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg?v=1" type="image/svg+xml" />
        <link rel="alternate icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%239333ea%22 stroke-width=%222%22><path d=%22M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z%22/><polyline points=%2214 2 14 8 20 8%22/><line x1=%2216%22 y1=%2213%22 x2=%228%22 y2=%2213%22/><line x1=%2216%22 y1=%2217%22 x2=%228%22 y2=%2217%22/><line x1=%2210%22 y1=%229%22 x2=%228%22 y2=%229%22/></svg>" />
        <meta name="theme-color" content="#9333ea" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
