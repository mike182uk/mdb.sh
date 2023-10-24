import sample from 'lodash/sample'

import type { Metadata } from 'next'
import Image from 'next/image'

import {
  GITHUB_URL,
  LASTFM_URL,
  LINKEDIN_URL,
  X_URL,
} from '@/lib/constants'
import { getCanonicalUrl, getDescription, getTitle } from '@/lib/metadata'
import styles from './home.module.css'

import Avatar from '@/components/Avatar'
import ExternalLink from '@/components/ExternalLink'
import Nav from '@/components/Nav'

// Force dynamic rendering due to the random greeting
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: getTitle(),
  description: getDescription(),
  alternates: {
    canonical: getCanonicalUrl()
  }
}

export default function HomePage() {
  const greetings = [
    'Aloha',
    'Ciao',
    'Halló',
    'Hei',
    'Hej',
    'Hello',
    'Hey',
    'Howdy',
    'Olá',
    'Yo'
  ]

  const gestures = [
    {
      emoji: '👋',
      cssClass: styles.wave,
    },
    {
      emoji: '🤘',
      cssClass: styles.rock,
    },
    {
      emoji: '✌️',
      cssClass: styles.peace,
    },
  ]

  const gesture = sample(gestures) || gestures[0]

  return (
    <div className='container mx-auto flex h-full'>
      <main className='m-auto flex flex-col items-center p-4 space-y-10'>
        <Avatar
          size={200}
          className='rounded-full shadow-md'
        />
        <h1 className='text-5xl text-center font-black leading-none'>
          <span>{sample(greetings)}!</span> I&apos;m Mike <span className={gesture.cssClass}>{gesture.emoji}</span>
        </h1>
        <h2 className='text-2xl text-center font-thin leading-snug'>Fullstack Software Engineer based in West Yorkshire, UK</h2>
        <ul className='space-x-4 text-center'>
          {
            // https://www.npmjs.com/package/simple-icons
            [
              {
                href: X_URL,
                alt: 'X Logo',
                icon: 'x',
              },
              {
                href: GITHUB_URL,
                alt: 'GitHub Logo',
                icon: 'github'
              },
              {
                href: LINKEDIN_URL,
                alt: 'LinkedIn Logo',
                icon: 'linkedin'
              },
              {
                href: LASTFM_URL,
                alt: 'Last.fm Logo',
                icon: 'lastdotfm'
              }
            ].map(({ href, alt, icon }, idx) => (
              <li
                className='inline-block'
                key={idx}
              >
                <ExternalLink href={href}>
                  <Image
                    className='transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${icon}.svg`}
                    alt={alt}
                    width={32}
                    height={32}
                  />
                </ExternalLink>
              </li>
            ))
          }
        </ul>
        <Nav />
      </main>
    </div>
  )
}
