"use client"

import Image from "next/image"
import { useState } from "react"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "Problema", href: "#problema" },
    { label: "Anécdota", href: "#anecdota" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Tecnología", href: "#tecnologia" },
    { label: "Herramientas", href: "#herramientas" },
    { label: "Equipo", href: "#equipo" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary py-32 px-6">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-secondary rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-muted rounded-full opacity-30 blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-in-up">
        <div className="mb-6 animate-bounce" style={{ animationDelay: "0s" }}>
          <Image src="/logo-cubiertos.png" alt="ChillEats Logo" width={100} height={100} className="mx-auto" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance">
          Buscá tu lugar ideal. Comé relajado. Disfrutá.
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto text-balance">
          Encuentra restaurantes especializados en celíacos, veganos y vegetarianos con filtros inteligentes y reseñas
          precisas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-background text-primary font-bold rounded-lg text-lg hover:scale-105 transition-transform shadow-xl">
            Descargar App
          </button>
          <div className="relative inline-block w-full sm:w-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg text-lg hover:scale-105 transition-transform border-2 border-primary-foreground w-full"
            >
              Conocé Más ▼
            </button>
            {isMenuOpen && (
              <>
                {/* Overlay */}
                <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)} />
                {/* Pop-up Menu */}
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-secondary rounded-2xl shadow-2xl p-6 w-80 z-50 border-2 border-primary-foreground animate-fade-in-up">
                  <div className="grid grid-cols-2 gap-3">
                    {menuItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/80 rounded-lg transition-colors font-semibold text-center text-sm md:text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
