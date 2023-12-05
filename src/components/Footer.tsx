"use client"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pb-4 text-center text-base font-thin">
      <p>&copy; Michael Barrett {year}</p>
    </footer>
  )
}
