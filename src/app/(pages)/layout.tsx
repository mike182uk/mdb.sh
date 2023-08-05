import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='container mx-auto max-w-3xl p-4 h-full flex flex-col'>
      <Header />
      <main className='my-8 flex-1 flex flex-col justify-center'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
