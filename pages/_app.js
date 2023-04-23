import { config } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { pageview } from '../lib/gtag'
import '../resources/styles.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
