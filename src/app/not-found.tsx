import type { Metadata } from 'next'

import { getCanonicalUrl, getDescription, getTitle } from '@/lib/metadata'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: getTitle(),
  description: getDescription(),
  alternates: {
    canonical: getCanonicalUrl()
  }
}

export default function NotFoundPage() {
  return (
    <div className='container mx-auto max-w-3xl p-4 h-full flex flex-col'>
      <Header />
      <main className='my-8 flex-1 flex flex-col justify-center'>
        <p className='text-center text-2xl font-black'>What was once here, is no longer</p>
      </main>
      <Footer />
    </div>
  )
}
