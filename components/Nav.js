import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav ({
  className
}) {
  const router = useRouter()

  const getClasses = (path) => {
    const classes = ['no-underline']

    if (router.pathname === path) {
      classes.push('active')
    }

    return classes.join(' ')
  }

  return (
    <nav className={`leading-none ${className}`}>
      <ul>
        <li className='inline-block'>
          <Link href='/about'>
            <a className={getClasses('/about')}>About</a>
          </Link>
        </li>
        <li className='inline-block mx-1'>·</li>
        <li className='inline-block'>
          <Link href='/posts'>
            <a className={getClasses('/posts')}>Posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
