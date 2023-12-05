import Link from "next/link"

import Nav from "@/components/Nav"

export default function Header() {
  return (
    <header className="flex flex-col items-center md:flex-row md:justify-between">
      <h1 className="mb-4 mt-4 text-center text-5xl font-black leading-none">
        <Link href="/" className="hover:no-underline">
          Michael Barrett.
        </Link>
      </h1>
      <Nav className="mb-4 flex items-center md:mb-0" />
    </header>
  )
}
