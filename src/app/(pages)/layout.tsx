import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto flex h-full max-w-3xl flex-col p-4">
      <Header />
      <main className="my-8 flex flex-1 flex-col justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
