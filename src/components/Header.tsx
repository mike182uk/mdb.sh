import Link from 'next/link'

import Nav from '@/components/Nav'

export default function Header() {
  return (
    <header className='flex flex-col items-center md:flex-row md:justify-between'>
      <h1 className='text-5xl font-black leading-none text-center mt-4 mb-4'>
        <Link href='/' className='hover:no-underline'>
          Michael Barrett.
        </Link>
      </h1>
      <Nav className='flex items-center mb-4 md:mb-0' />
    </header>
  )
}
