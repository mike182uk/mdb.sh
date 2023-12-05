import { Roboto } from "next/font/google"

import { Analytics } from "@vercel/analytics/react"

import { GRAVATAR_USERNAME_HASH } from "@/lib/constants"

import "./global.css"

const roboto = Roboto({
  weight: ["100", "300", "900"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link
          rel="shortcut icon"
          href={`https://www.gravatar.com/avatar/${GRAVATAR_USERNAME_HASH}?s=16`}
        />
      </head>
      <body className="h-screen border-t-8 border-solid border-primary bg-white font-body text-lg leading-loose text-black">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
