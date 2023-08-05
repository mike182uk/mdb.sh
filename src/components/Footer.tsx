'use client'

export default function Footer() {
  const year = (new Date()).getFullYear()

  return (
    <footer className='text-center text-base font-thin pb-4'>
      <p>&copy; Michael Barrett {year}</p>
    </footer>
  )
}
