interface PageLayoutProps {
  children: React.ReactNode
}
  
export default function MLOsLayout({ children }: PageLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}