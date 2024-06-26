import { Header } from "@/components/header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <main className="container flex max-w-screen-xl items-center pt-8 px-6 xl:px-0">
        {children}
      </main>
    </>
  )
}