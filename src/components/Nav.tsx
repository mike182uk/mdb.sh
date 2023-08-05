'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav({
  className = '',
}: {
  className?: string
}) {
  const pathname = usePathname()

  const getClasses = (path: string): string => {
    const classes = ['no-underline']

    if (pathname === path) {
      classes.push('active')
    }

    return classes.join(' ')
  }

  return (
    <nav className={`leading-none ${className}`}>
      <ul>
        <li className='inline-block'>
          <Link href='/about' className={getClasses('/about')}>
            About
          </Link>
        </li>
        <li className='inline-block mx-1'>·</li>
        <li className='inline-block'>
          <Link href='/posts' className={getClasses('/posts')}>
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  )
}
