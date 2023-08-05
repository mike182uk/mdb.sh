import type { Metadata } from 'next'

import { getCanonicalUrl, getDescription, getTitle } from '@/lib/metadata'

export const metadata: Metadata = {
  title: getTitle('Posts'),
  description: getDescription(),
  alternates: {
    canonical: getCanonicalUrl('/posts')
  }
}

export default function PostsPage() {
  return (
    <>
      <p className='text-center text-2xl font-black leading-none -mb-0'>I&apos;ve not published any posts yet.</p>
      <p className='text-center leading-none'>But when i do, they will show here 🙃</p>
    </>
  )
}
