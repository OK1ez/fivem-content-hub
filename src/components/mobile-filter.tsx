
"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { ArrowDownWideNarrow } from "lucide-react"

export default function MobileFilter() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="flex md:hidden h-8">
            <ArrowDownWideNarrow />
            <span>Filter</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <span className="font-bold">Content Hub</span>
        </MobileLink>
        <div className="flex flex-col space-y-3 my-4 h-[calc(100vh-8rem)] pb-10 pl-4">
            <MobileLink
              href="/scripts"
              onOpenChange={setOpen}
            >
              Scripts
            </MobileLink>
            <MobileLink
              href="/mlos"
              onOpenChange={setOpen}
            >
              MLOs
            </MobileLink>
            <MobileLink
              href="/vehicles"
              onOpenChange={setOpen}
            >
              Vehicles
            </MobileLink>
          </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}