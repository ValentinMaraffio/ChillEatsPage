"use client"

import { ScrollReveal } from "./scroll-reveal"

export default function Funcionalidades() {
  const features = [
    {
      icon: "🔍",
      title: "Filtros Especializados",
      description:
        "Filtra por una restricción alimenticia. Combina filtros para encontrar exactamente lo que buscas.",
      delay: 0,
    },
    {
      icon: "🎯",
      title: "Búsqueda Mejorada",
      description:
        "Búsquedas inteligentes basadas en información directa de establecimientos y menús, mucho más precisas.",
      delay: 100,
    },
    {
      icon: "📇",
      title: "Cards Informativas",
      description:
        "Tarjetas con nombre, fotos, videos, distancia y etiquetas especializadas. Desliza para explorar lugares cercanos.",
      delay: 200,
    },
    {
      icon: "❤️",
      title: "Lista de Favoritos",
      description:
        "Guarda tus lugares favoritos, búscalos y filtralos cuando lo necesites. Acceso rápido a tus preferidos.",
      delay: 300,
    },
    {
      icon: "⭐",
      title: "Reseñas Especializadas",
      description:
        "Sistema de reseñas con estrellas y etiquetas especializadas para caracterizar lugares con precisión.",
      delay: 400,
    },
    {
      icon: "👤",
      title: "Gestión de Usuario",
      description: "Crea tu cuenta para acceder a favoritos, escribir reseñas, valorizar y recomendar lugares.",
      delay: 500,
    },
  ]

  return (
    <section id="funcionalidades" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-center">Funcionalidades</h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
            ChillEats mejora tus búsquedas con filtros especializados, búsquedas precisas y muchas más características
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={feature.delay}>
              <div className="bg-card p-8 rounded-xl border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-2 h-full">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-foreground/80 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
