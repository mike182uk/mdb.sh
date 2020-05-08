import Link from 'next/link'

export default function Nav ({
  className
}) {
  return (
    <nav className={`leading-none ${className}`}>
      <ul>
        <li className='inline-block'>
          <Link href='/about'>
            <a className='no-underline'>About</a>
          </Link>
        </li>
        <li className='inline-block mx-1'>·</li>
        <li className='inline-block'>
          <Link href='/posts'>
            <a className='no-underline'>Posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
