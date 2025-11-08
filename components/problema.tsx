"use client"

import { ScrollReveal } from "./scroll-reveal"

export default function Problema() {
  return (
    <section id="problema" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-16 text-center">El Problema</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ScrollReveal delay={100}>
            <div className="bg-card p-8 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Búsquedas Limitadas</h3>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Google Maps busca principalmente por texto. Si escribís "sin TACC" o "apto celíacos", solo muestra
                resultados si esas palabras aparecen en el nombre del lugar o en reseñas.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-card p-8 rounded-xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Lugares Excluidos</h3>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Muchos establecimientos con opciones especializadas quedan fuera de las búsquedas, dificultando
                encontrar un lugar acorde a tus necesidades alimenticias.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="bg-primary/70 from-secondary via-muted to-secondary p-12 rounded-xl mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">¿Por qué es importante?</h3>
            <p className="text-xl text-white leading-relaxed mb-6">
              En la actualidad, la cantidad de personas que adoptan hábitos o requieren restricciones alimenticias va en
              total aumento. Celíacos, veganos y vegetarianos representan tres grupos destacados con necesidades
              específicas.
            </p>
            <p className="text-xl text-white leading-relaxed">
              No todos los establecimientos ofrecen opciones especializadas, y encontrar un lugar que se ajuste a tus
              necesidades se convierte en una verdadera odisea.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
