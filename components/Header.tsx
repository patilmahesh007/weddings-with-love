"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Galery", href: "/galery" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine text color based on scroll
  const textClass = isScrolled
    ? "text-gray-900 hover:text-gray-600"
    : "text-black hover:text-gray-200"

  const iconClass = isScrolled ? "text-gray-600 hover:text-gray-900" : "text-black hover:text-gray-200"
  const logoClass = isScrolled ? "text-gray-900" : "text-black"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className={`font-playfair text-3xl font-bold tracking-tight transition-colors duration-300 ${logoClass}`}>
              WWL
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${iconClass}`}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium leading-6 transition-colors ${textClass}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <div className="flex items-center gap-3">
            <Link href="#" className={iconClass}>
              <Instagram className="h-5 w-5" />
            </Link>
            {/* <Link href="#" className={iconClass}>
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className={iconClass}>
              <Twitter className="h-5 w-5" />
            </Link> */}
          </div>
          <Button asChild className="ml-4 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="font-playfair text-2xl font-bold">HOTC</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      <Facebook className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      <Twitter className="h-6 w-6" />
                    </Link>
                  </div>
                  <Button asChild className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
