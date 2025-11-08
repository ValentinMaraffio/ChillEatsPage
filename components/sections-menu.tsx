"use client"

import { useState, useEffect } from "react"
import { useSmoothScroll } from "../hooks/use-smooth-scroll"

interface MenuItem {
  id: string
  label: string
}

const MENU_ITEMS: MenuItem[] = [
  { id: "problema", label: "El Problema" },
  { id: "anecdota", label: "Nuestra Anécdota" },
  { id: "funcionalidades", label: "Funcionalidades" },
  { id: "tecnologia", label: "Tecnología" },
  { id: "herramientas", label: "Herramientas" },
  { id: "equipo", label: "Nuestro Equipo" },
]

export default function SectionsMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleMenuItemClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  const handleOverlayClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-8 py-4 bg-secondary text-white font-bold rounded-lg text-lg hover:scale-105 transition-transform border-2 border-primary-foreground w-full sm:w-auto"
      >
        Conocé Más ▼
      </button>

      {isOpen && <div className="fixed inset-0 z-9999 bg-black/60 backdrop-blur-sm" onClick={handleOverlayClick} />}

      {/* Modal Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-99999 flex items-center justify-center p-4 animate-fade-in-up pointer-events-none">
          <div
            className="bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl shadow-2xl p-8 w-full max-w-2xl border-2 border-primary-foreground pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2 text-balance">
                Explora ChillEats
              </h2>
              <p className="text-primary-foreground/80 text-lg">Selecciona el apartado que quieras conocer</p>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {MENU_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  className="px-6 py-4 bg-background text-primary hover:bg-background/80 rounded-xl transition-all font-semibold text-left text-base md:text-lg group hover:shadow-lg hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-secondary group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <span>{item.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-3 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground rounded-xl font-semibold transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
