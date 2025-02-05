"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            SaaS Logo
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button>Sign Up</Button>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

