"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
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
  const [mounted, setMounted] = useState(false) // para SSR-safe portal
  const { scrollToSection } = useSmoothScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMenuItemClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  const closeMenu = () => setIsOpen(false)

  // contenido del portal (overlay + modal)
  const portalContent = (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999999]"
        onClick={closeMenu}
      />

      {/* Modal centrado */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000000] w-full max-w-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl shadow-2xl p-8 border-2 border-primary-foreground/30 text-center animate-fade-in-up">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Explora ChillEats
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Selecciona el apartado que quieras conocer
            </p>
          </div>

          {/* Menu Items */}
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
            onClick={closeMenu}
            className="w-full px-4 py-3 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground rounded-xl font-semibold transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Boton que abre el menu */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-4 bg-secondary text-white font-bold rounded-lg text-lg hover:scale-105 transition-transform border-2 border-primary-foreground w-full sm:w-auto"
        >
          Conocé Más ▼
        </button>
      )}

      {/* Solo renderizamos el portal en el cliente (mounted) y si está abierto */}
      {mounted && isOpen && createPortal(portalContent, document.body)}
    </>
  )
}
