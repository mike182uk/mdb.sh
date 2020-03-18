import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import {
  GOOGLE_ANALYTICS_SITE_ID
} from '../constants'

export default class Document extends NextDocument {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:100,300,900'
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_SITE_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ANALYTICS_SITE_ID}');
            `
            }}
          />
        </Head>
        <body className='font-body text-lg text-black leading-loose border-primary border-solid border-t-8 bg-white h-screen'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
