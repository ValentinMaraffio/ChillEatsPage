"use client"

import { ScrollReveal } from "./scroll-reveal"

export default function Anecdota() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-6xl md:text-7xl mb-12 text-center">💭</div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-primary-foreground/10 border-l-4 border-primary-foreground p-12 rounded-xl backdrop-blur-sm mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8 text-balance">
              Una Historia Real
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6">
              El año pasado, durante vacaciones, salimos a recorrer la capital. Después de un rato paseando, decidimos
              ir a almorzar. Como celíaco, necesitaba buscar un lugar con menú especializado.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6">
              Al buscar en Google Maps con términos como "sin tacc" o "sin gluten", el lugar más cercano estaba a{" "}
              <span className="font-bold text-white">20 cuadras de distancia</span>. Empezamos a caminar... y a las 2
              cuadras nos encontramos con un McDonald's.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6">
              ¡Gran alivio! McDonald's cuenta con menú para celíacos. Pero también fue una{" "}
              <span className="font-bold text-white">gran preocupación</span>: Google Maps no lo mencionaba. Lo
              encontramos de pura casualidad.
            </p>
            <p className="text-2xl font-bold text-white">Esta es una experiencia real de muchos problemas diarios.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-secondary p-8 rounded-xl text-center">
            <p className="text-2xl font-bold text-[#feead8]">
              Con este problema en mente, nace <span className="text-white font-bold">ChillEats</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
