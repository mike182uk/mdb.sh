import type { Metadata } from "next"

import { getCanonicalUrl, getDescription, getTitle } from "@/lib/metadata"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: getTitle(),
  description: getDescription(),
  alternates: {
    canonical: getCanonicalUrl(),
  },
}

export default function NotFoundPage() {
  return (
    <div className="container mx-auto flex h-full max-w-3xl flex-col p-4">
      <Header />
      <main className="flex flex-1 flex-col justify-center">
        <p className="text-center text-2xl font-black">
          What was once here, is no longer
        </p>
      </main>
      <Footer />
    </div>
  )
}
