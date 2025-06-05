"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <div className="relative w-40 h-10">
            <Image src="/logo.png" alt="Mavericks Logo" fill style={{ objectFit: "contain" }} priority />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <Link href="/" className="px-3 py-2 text-sm font-medium hover:text-[#e52222] transition-colors">
            HOME
          </Link>
          <Link href="/about-us" className="px-3 py-2 text-sm font-medium hover:text-[#e52222] transition-colors">
            ABOUT US
          </Link>
          <Link href="/products" className="px-3 py-2 text-sm font-medium hover:text-[#e52222] transition-colors">
            PRODUCTS
          </Link>
          <Link href="/partners" className="px-3 py-2 text-sm font-medium hover:text-[#e52222] transition-colors">
            PARTNERS
          </Link>
          <Link href="/contact">
            <Button className="bg-[#e52222] text-white hover:bg-[#c41c1c] ml-2 transition-colors">CONTACT US</Button>
          </Link>
        </nav>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>

        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col py-4">
              <Link 
                href="/" 
                className="px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-[#e52222] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/about-us" 
                className="px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-[#e52222] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link 
                href="/products" 
                className="px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-[#e52222] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PRODUCTS
              </Link>
              <Link 
                href="/partners" 
                className="px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-[#e52222] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PARTNERS
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-[#e52222] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
