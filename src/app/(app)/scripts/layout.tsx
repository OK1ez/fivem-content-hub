interface PageLayoutProps {
  children: React.ReactNode
}
  
export default function ScriptLayout({ children }: PageLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}