interface PageLayoutProps {
  children: React.ReactNode
}
  
export default function VehiclesLayout({ children }: PageLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}