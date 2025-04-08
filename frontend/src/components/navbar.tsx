"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { FileText, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <FileText className="h-6 w-6 text-purple-600" />
          <span>cheatsheesh</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/create" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Create
          </Link>
          <Link href="/examples" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Examples
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700" asChild>
            <Link href="/pricing">Upgrade to Pro</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 bg-background">
          <nav className="flex flex-col gap-4">
            <Link
              href="/create"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Create
            </Link>
            <Link
              href="/examples"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Examples
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Button className="mt-2 bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/pricing">Upgrade to Pro</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

