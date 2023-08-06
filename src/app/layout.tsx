import { Roboto } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';

import {
  GOOGLE_ANALYTICS_SITE_ID,
  GRAVATAR_USERNAME_HASH,
} from '@/lib/constants'

import '@fortawesome/fontawesome-svg-core/styles.css'
import './global.css'

const roboto = Roboto({
  weight: ['100', '300', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel='shortcut icon' href={`https://www.gravatar.com/avatar/${GRAVATAR_USERNAME_HASH}?s=16`} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_SITE_ID}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_SITE_ID}');
          `}
        </Script>
      </head>
      <body className='font-body text-lg text-black leading-loose border-primary border-solid border-t-8 bg-white h-screen'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
