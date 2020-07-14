import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLastfm,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

import {
  GITHUB_URL,
  LASTFM_URL,
  LINKEDIN_URL,
  TWITTER_URL
} from '../constants'
import Avatar from '../components/Avatar'
import ExternalLink from '../components/ExternalLink'
import Greeting from '../components/Greeting'
import Head from '../components/Head'
import Nav from '../components/Nav'

export default function Index () {
  return (
    <>
      <Head />
      <div className='container mx-auto flex h-full'>
        <main className='m-auto flex flex-col items-center p-4'>
          <Avatar
            size={150}
            className='rounded-full shadow-md mb-8'
          />
          <h1 className='text-5xl font-black text-center leading-none mb-8'>
            <Greeting /> I'm Mike.
          </h1>
          <h2 className='text-2xl font-hairline text-center leading-snug mb-8'>Fullstack Software Engineer based in West Yorkshire, UK</h2>
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
                    />
                  </ExternalLink>
                </li>
              ))
            }
          </ul>
          <Nav />
        </main>
      </div>
    </>
  )
}
