import { config } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pageview } from '../lib/gtag'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../resources/styles.css'

config.autoAddCss = false

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
