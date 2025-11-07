"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const menuItems = [
    { label: "Problema", href: "#problema" },
    { label: "Anécdota", href: "#anecdota" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Tecnología", href: "#tecnologia" },
    { label: "Herramientas", href: "#herramientas" },
    { label: "Equipo", href: "#equipo" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={scrollToTop} className="flex items-center gap-2 group cursor-pointer">
          <Image
            src="/logo-cubiertos.png"
            alt="ChillEats Logo"
            width={40}
            height={40}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-2xl font-bold text-primary-foreground group-hover:scale-105 transition-transform">
            ChillEats
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#problema" className="text-primary-foreground hover:text-secondary transition-colors">
            Problema
          </Link>
          <Link href="#funcionalidades" className="text-primary-foreground hover:text-secondary transition-colors">
            Funcionalidades
          </Link>
          <Link href="#tecnologia" className="text-primary-foreground hover:text-secondary transition-colors">
            Tecnología
          </Link>
          <Link href="#equipo" className="text-primary-foreground hover:text-secondary transition-colors">
            Equipo
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:scale-105 transition-transform"
            >
              Conocé Más ▼
            </button>
            {isMenuOpen && (
              <div className="absolute top-full mt-2 right-0 bg-secondary rounded-lg shadow-xl p-2 w-48">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-secondary-foreground hover:bg-primary hover:text-secondary rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/terminos"
            className="px-6 py-2 bg-primary-foreground text-primary rounded-lg hover:scale-105 transition-transform"
          >
            Términos
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary-foreground" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary p-4 space-y-4">
          <button
            onClick={() => {
              scrollToTop()
              setIsOpen(false)
            }}
            className="block w-full text-left px-4 py-2 text-secondary-foreground hover:bg-primary hover:text-secondary rounded transition-colors font-semibold"
          >
            ChillEats
          </button>
          <Link href="#problema" className="block text-secondary-foreground hover:text-primary transition-colors">
            Problema
          </Link>
          <Link
            href="#funcionalidades"
            className="block text-secondary-foreground hover:text-primary transition-colors"
          >
            Funcionalidades
          </Link>
          <Link href="#tecnologia" className="block text-secondary-foreground hover:text-primary transition-colors">
            Tecnología
          </Link>
          <Link href="#equipo" className="block text-secondary-foreground hover:text-primary transition-colors">
            Equipo
          </Link>
          <Link href="/terminos" className="block text-secondary-foreground hover:text-primary transition-colors">
            Términos y Condiciones
          </Link>
        </div>
      )}
    </header>
  )
}
