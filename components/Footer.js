export default function Footer () {
  const year = (new Date()).getFullYear()

  return (
    <footer className='text-center text-base font-thin mb-2'>
      <p>&copy; Michael Barrett {year}</p>
    </footer>
  )
}
