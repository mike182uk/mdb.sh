import Link from 'next/link'

import Nav from './Nav'

export default function Header () {
  return (
    <header className='flex flex-col items-center md:flex-row md:justify-between'>
      <h1 className='text-5xl font-black -mb-3 md:mb-0'>
        <Link href='/'>
          <a className='hover:no-underline'>Michael Barrett.</a>
        </Link>
      </h1>
      <Nav className='flex items-center mb-4 md:mb-0' />
    </header>
  )
}
