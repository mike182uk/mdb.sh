import { SITE_URL } from '@/lib/constants'

export default function robotsTxt() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    host: SITE_URL,
  }
}
