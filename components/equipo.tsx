"use client"

import { ScrollReveal } from "./scroll-reveal"

export default function Equipo() {
  const team = [
    {
      name: "Valentín Maraffio",
      role: "Project Manager & Designer",
      emoji: "🚀",
      delay: 0,
    },
    {
      name: "Camilo Mauro",
      role: "Programador Backend",
      emoji: "⚙️",
      delay: 100,
    },
    {
      name: "Santiago Bustamante",
      role: "Programador Frontend",
      emoji: "💻",
      delay: 200,
    },
    {
      name: "Agustín Cateura Castro",
      role: "Designer & UI/UX",
      emoji: "🎨",
      delay: 300,
    },
  ]

  return (
    <section id="equipo" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">Nuestro Equipo</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={member.delay}>
              <div className="bg-[#feead8] p-8 rounded-xl text-center border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-4 h-full">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-foreground/70 font-semibold">{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-16 bg-primary p-8 rounded-xl text-center">
            <p className="text-primary-foreground text-lg">Juntos transformamos el problema en una solución</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
