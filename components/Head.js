import NextHead from 'next/head'
import { withRouter } from 'next/router'

import {
  GRAVATAR_USERNAME_HASH,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL
} from '../constants'

function Head ({
  title,
  appendDefaultTitle = true,
  titleSuffix = ' | ',
  description,
  router
}) {
  if (title && appendDefaultTitle) {
    title = `${title}${titleSuffix}${SITE_TITLE}`
  }

  if (!title) title = SITE_TITLE

  if (!description) description = SITE_DESCRIPTION

  let pathname = router.pathname
  if (pathname === '/404') pathname = '/'

  const canonicalUrl = `${SITE_URL}${pathname}`

  return (
    <NextHead>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
      <link rel='shortcut icon' href={`//www.gravatar.com/avatar/${GRAVATAR_USERNAME_HASH}?s=16`} />
      <link rel='canonical' href={canonicalUrl} />
    </NextHead>
  )
}

export default withRouter(Head)
