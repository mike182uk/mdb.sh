import {
  GITHUB_URL,
  LASTFM_URL,
  LINKEDIN_URL,
  TWITTER_URL
} from '../constants'
import Avatar from '../components/Avatar'
import ExternalLink from '../components/ExternalLink'
import Page from '../components/Page'

export default function About () {
  return (
    <Page
      seoTitle='About Me'
    >
      <div className='text-center'>
        <Avatar
          size={200}
          className='rounded-full shadow-md mb-2 inline-block'
        />
        <p>Hi there! I'm Mike, a fullstack software engineer 🤓 based in <ExternalLink href='https://www.google.co.uk/maps/place/West+Yorkshire'>West Yorkshire (UK)</ExternalLink>.</p>
        <p>I'm passionate about about delivering robust, scalable and maintainable software solutions using a variety of technologies, programming languages & development methodologies.</p>
        <p>I currently work for <ExternalLink href='https://ghost.org/'>Ghost</ExternalLink>, building tools to power the future of independent publishing.</p>
        <p>This website is a place for me to share my thoughts and experience working as a software engineer, as well as things that I find interesting, challenging, or that may be of use to others (and my future self 😃).</p>
        <p>You can follow me on <ExternalLink href={TWITTER_URL}>Twitter</ExternalLink>, see my open source projects on <ExternalLink href={GITHUB_URL}>GitHub</ExternalLink>, connect with me on <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink> or check out out what I'm currently listening to on <ExternalLink href={LASTFM_URL}>Last.fm</ExternalLink>.</p>
        <p>For anything else, feel free to <a href='mailto:mike@mdb.sh'>send me an email</a>.</p>
      </div>
    </Page>
  )
}
