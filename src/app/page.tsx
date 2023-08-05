import sample from 'lodash/sample'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLastfm,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import type { Metadata } from 'next'

import {
  GITHUB_URL,
  LASTFM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
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
      <main className='m-auto flex flex-col items-center p-4'>
        <Avatar
          size={200}
          className='rounded-full shadow-md mb-8'
        />
        <h1 className='text-5xl font-black text-center leading-none mb-8'>
          <span>{sample(greetings)}!</span> I&apos;m Mike <span className={gesture.cssClass}>{gesture.emoji}</span>
        </h1>
        <h2 className='text-2xl font-thin text-center leading-snug mb-8'>Fullstack Software Engineer based in West Yorkshire, UK</h2>
        <ul className='mb-8 text-center'>
          {
            [
              {
                href: TWITTER_URL,
                icon: faTwitter
              },
              {
                href: GITHUB_URL,
                icon: faGithub
              },
              {
                href: LINKEDIN_URL,
                icon: faLinkedinIn
              },
              {
                href: LASTFM_URL,
                icon: faLastfm
              }
            ].map(({ href, icon }, idx) => (
              <li
                className='inline-block px-3'
                key={idx}
              >
                <ExternalLink href={href}>
                  <FontAwesomeIcon
                    className='transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                    icon={icon}
                    size='2x'
                    fixedWidth
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
