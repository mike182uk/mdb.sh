import type { Metadata } from "next"

import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  LASTFM_URL,
  LINKEDIN_URL,
  X_URL,
} from "@/lib/constants"
import { getCanonicalUrl, getDescription, getTitle } from "@/lib/metadata"

import Avatar from "@/components/Avatar"
import ExternalLink from "@/components/ExternalLink"

export const metadata: Metadata = {
  title: getTitle("About Me"),
  description: getDescription(),
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
}

export default function AboutPage() {
  return (
    <div className="text-center">
      <Avatar size={200} className="mb-2 inline-block rounded-full shadow-md" />
      <p>
        Hey! I&apos;m Mike, a fullstack software engineer based in West
        Yorkshire, UK.
      </p>
      <p>
        I&apos;m passionate about about delivering robust, scalable and
        maintainable software solutions using a variety of technologies,
        programming languages & development methodologies.
      </p>
      <p>
        I currently work for{" "}
        <ExternalLink href="https://ghost.org/">Ghost</ExternalLink>, building
        tools to power the future of independent publishing.
      </p>
      <p>
        This website is a place for me to share my thoughts and experience
        working as a software engineer, as well as things that I find
        interesting, challenging, or that may be of use to others (and my future
        self 😃).
      </p>
      <p>
        You can follow me on <ExternalLink href={X_URL}>X</ExternalLink>, see my
        open source projects on{" "}
        <ExternalLink href={GITHUB_URL}>GitHub</ExternalLink>, connect with me
        on <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink> or check
        out out what I&apos;m currently listening to on{" "}
        <ExternalLink href={LASTFM_URL}>Last.fm</ExternalLink>.
      </p>
      <p>
        For anything else, feel free to{" "}
        <a href={`mailto:${EMAIL_ADDRESS}`}>send me an email</a>.
      </p>
    </div>
  )
}
