"use client"

import { ScrollReveal } from "./scroll-reveal"

export default function Herramientas() {
  const tools = [
    { icon: "🎨", name: "Figma", desc: "Diseño de vistas antes de programar", delay: 0 },
    { icon: "📋", name: "Trello", desc: "Designación de tareas y organización", delay: 100 },
    { icon: "💻", name: "GitHub", desc: "Repositorio para compartir código", delay: 200 },
    { icon: "✍️", name: "VS Code", desc: "Editor de código profesional", delay: 300 },
    { icon: "🖼️", name: "Canva", desc: "Diseño de recursos visuales y logotipos", delay: 400 },
    { icon: "🎬", name: "DaVinci Resolve", desc: "Edición de contenido audiovisual", delay: 500 },
  ]

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-center">Herramientas</h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
            Utilizamos herramientas profesionales para colaborar, organizar y dar forma a ChillEats
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <ScrollReveal key={i} delay={tool.delay}>
              <div className="bg-card p-6 rounded-lg border-2 border-secondary/30 hover:border-primary hover:shadow-lg transition-all hover:scale-105 h-full">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{tool.name}</h3>
                <p className="text-foreground/70">{tool.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
