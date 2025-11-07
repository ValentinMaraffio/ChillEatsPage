export default function Equipo() {
  const team = [
    {
      name: "Valentín Maraffio",
      role: "Project Manager & Full Stack",
      emoji: "🚀",
    },
    {
      name: "Camilo Mauro",
      role: "Programador Backend",
      emoji: "⚙️",
    },
    {
      name: "Santiago Bustamante",
      role: "Programador Frontend",
      emoji: "💻",
    },
    {
      name: "Agustín Cateura Castro",
      role: "Diseñador UI/UX",
      emoji: "🎨",
    },
  ]

  return (
    <section id="equipo" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-secondary-foreground mb-16 text-center">Nuestro Equipo</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-card p-8 rounded-xl text-center border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
              <p className="text-foreground/70 font-semibold">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary p-8 rounded-xl text-center">
          <p className="text-primary-foreground text-lg">
            Juntos transformamos la experiencia de comer en la ciudad para todos
          </p>
        </div>
      </div>
    </section>
  )
}
