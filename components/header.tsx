"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  const handleTerminosClick = () => {
    router.push("/terminos")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 50)
  }

  return (
    <header className="sticky top-0 z-40 bg-primary shadow-lg relative">
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
          <a
            href="#problema"
            onClick={(e) => handleSmoothScroll(e, "problema")}
            className="text-primary-foreground hover:text-secondary transition-colors cursor-pointer"
          >
            Problema
          </a>
          <a
            href="#anecdota"
            onClick={(e) => handleSmoothScroll(e, "anecdota")}
            className="text-primary-foreground hover:text-secondary transition-colors cursor-pointer"
          >
            Anécdota
          </a>
          <a
            href="#funcionalidades"
            onClick={(e) => handleSmoothScroll(e, "funcionalidades")}
            className="text-primary-foreground hover:text-secondary transition-colors cursor-pointer"
          >
            Funcionalidades
          </a>
          <a
            href="#tecnologia"
            onClick={(e) => handleSmoothScroll(e, "tecnologia")}
            className="text-primary-foreground hover:text-secondary transition-colors cursor-pointer"
          >
            Tecnología
          </a>
          <a
            href="#herramientas"
            onClick={(e) => handleSmoothScroll(e, "herramientas")}
            className="text-primary-foreground hover:text-secondary transition-colors cursor-pointer"
          >
            Herramientas
          </a>
          <a
            href="#equipo"
            onClick={(e) => handleSmoothScroll(e, "equipo")}
            className="text-primary-foreground hover:text-secondary transition-colors cursor-pointer"
          >
            Equipo
          </a>
          <button
            onClick={handleTerminosClick}
            className="px-6 py-2 bg-primary-foreground text-primary rounded-lg hover:scale-105 transition-transform"
          >
            Términos
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary-foreground" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary p-4 space-y-4 relative z-40">
          <button
            onClick={() => {
              scrollToTop()
              setIsOpen(false)
            }}
            className="block w-full text-left px-4 py-2 text-secondary-foreground hover:bg-primary hover:text-secondary rounded transition-colors font-semibold"
          >
            ChillEats
          </button>
          <a
            href="#problema"
            onClick={(e) => handleSmoothScroll(e, "problema")}
            className="block text-secondary-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Problema
          </a>
          <a
            href="#anecdota"
            onClick={(e) => handleSmoothScroll(e, "anecdota")}
            className="block text-secondary-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Anécdota
          </a>
          <a
            href="#funcionalidades"
            onClick={(e) => handleSmoothScroll(e, "funcionalidades")}
            className="block text-secondary-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Funcionalidades
          </a>
          <a
            href="#tecnologia"
            onClick={(e) => handleSmoothScroll(e, "tecnologia")}
            className="block text-secondary-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Tecnología
          </a>
          <a
            href="#herramientas"
            onClick={(e) => handleSmoothScroll(e, "herramientas")}
            className="block text-secondary-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Herramientas
          </a>
          <a
            href="#equipo"
            onClick={(e) => handleSmoothScroll(e, "equipo")}
            className="block text-secondary-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Equipo
          </a>
          <button
            onClick={() => {
              handleTerminosClick()
              setIsOpen(false)
            }}
            className="block w-full text-left text-secondary-foreground hover:text-primary transition-colors"
          >
            Términos y Condiciones
          </button>
        </div>
      )}
    </header>
  )
}
