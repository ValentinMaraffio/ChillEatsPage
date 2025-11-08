"use client"

import { ScrollReveal } from "./scroll-reveal"

export default function Tecnologia() {
  const frontend = [
    {
      name: "React Native",
      desc: "Framework para construir apps móviles nativas para Android e iOS con JavaScript y React.",
      color: "text-[#ff9500] bg-white",
    },
    {
      name: "Expo",
      desc: "Herramienta que permite a desarrolladores probar aplicaciones de manera rápida y eficiente.",
      color: "from-amber-50 to-orange-50",
    },
  ]

  const backend = [
    {
      name: "MongoDB",
      desc: "Sistema de gestión de base de datos NoSQL para almacenar información.",
      color: "from-yellow-50 to-amber-50",
    },
    {
      name: "Node.js",
      desc: "Entorno de ejecución de JavaScript de código abierto multiplataforma para el backend.",
      color: "from-orange-50 to-yellow-50",
    },
  ]

  return (
    <section id="tecnologia" className="py-32 px-6 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white">Tecnologías</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/40 rounded-lg flex items-center justify-center text-white text-2xl">
                  🎨
                </span>{" "}
                Frontend
              </h3>
              <p className="text-white/90 text-lg mb-8 font-semibold">
                La parte visual e interactiva en tu dispositivo móvil.
              </p>
              <div className="space-y-6">
                {frontend.map((tech, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-r ${tech.color} p-6 rounded-lg border-l-4 border-orange-300 hover:shadow-2xl transition-all hover:scale-105 hover:bg-opacity-100`}
                  >
                    <h4 className="text-xl font-bold text-[#cf6106] mb-2">{tech.name}</h4>
                    <p className="text-[#cf6106] font-medium">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div>
              <h3 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/40 rounded-lg flex items-center justify-center text-white text-2xl">
                  ⚙️
                </span>{" "}
                Backend
              </h3>
              <p className="text-white/90 text-lg mb-8 font-semibold">
                La parte que no ves: procesa datos, maneja la base de datos y conecta todo detrás de escena.
              </p>
              <div className="space-y-6">
                {backend.map((tech, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-r ${tech.color} p-6 rounded-lg border-l-4 border-amber-300 hover:shadow-2xl transition-all hover:scale-105`}
                  >
                    <h4 className="text-xl font-bold text-[#cf6106] mb-2">{tech.name}</h4>
                    <p className="text-[#cf6106] font-medium">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
