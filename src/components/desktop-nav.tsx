"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
    const pathname = usePathname()
  
    return (
      <div className="mr-4 hidden md:flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">
            Content Hub
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/scripts"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/scripts" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Scripts
          </Link>
          <Link
            href="/mlos"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/mlos")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            MLOs
          </Link>
          <Link
            href="/vehicles"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/vehicles")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Vehicles
          </Link>
          {/* <Link
            href="/props"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/props")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Props
          </Link>
          <Link
            href="/blocks"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/clothes")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Clothes
          </Link>
          <Link
            href="/blocks"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/weapons")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Weapons
          </Link> */}
          {/* <Link
            href="/blocks"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/subscriptions")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Subscriptions
          </Link> */}
        </nav>
      </div>
    )
}