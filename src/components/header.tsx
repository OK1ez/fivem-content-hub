"use client"

import { MainNav } from "./desktop-nav";
import LoginButton from "./login-button";
import MobileNav from "./mobile-nav";


export function Header() {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-xl items-center px-6 xl:px-0">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              {/* <CommandMenu /> */}
            </div>
            <LoginButton />
          </div>
        </div>
      </header>
    )
}
