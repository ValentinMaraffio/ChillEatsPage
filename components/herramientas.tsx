export default function Herramientas() {
  const tools = [
    { icon: "🎨", name: "Figma", desc: "Diseño de vistas antes de programar" },
    { icon: "📋", name: "Trello", desc: "Designación de tareas y organización" },
    { icon: "💻", name: "GitHub", desc: "Repositorio para compartir código" },
    { icon: "✍️", name: "VS Code", desc: "Editor de código profesional" },
    { icon: "🖼️", name: "Canva", desc: "Diseño de recursos visuales y logotipos" },
    { icon: "🎬", name: "DaVinci Resolve", desc: "Edición de contenido audiovisual" },
  ]

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-center">Herramientas</h2>
        <p className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
          Utilizamos herramientas profesionales para colaborar, organizar y dar forma a ChillEats
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-lg border-2 border-secondary/30 hover:border-primary hover:shadow-lg transition-all hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{tool.name}</h3>
              <p className="text-foreground/70">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
