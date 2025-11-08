"use client"
import Image from "next/image"
import { useSmoothScroll } from "../../hooks/use-smooth-scroll"
import { useRouter } from "next/navigation"

export default function TerminosPage() {
  const { scrollToSection } = useSmoothScroll()
  const router = useRouter()

  const handleBackToHome = () => {
    router.push("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 50)
  }

  // Logo click navigates to home with animation
  const handleLogoClick = () => {
    handleBackToHome()
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary shadow-lg">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={handleLogoClick} className="flex items-center gap-2 group cursor-pointer">
            <Image
              src="/logo-cubiertos.png"
              alt="ChillEats Logo"
              width={40}
              height={40}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-2xl font-bold text-primary-foreground group-hover:scale-105 transition-transform">
              ChillEats
            </span>
          </button>
          <button
            onClick={handleBackToHome}
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:scale-105 transition-transform"
          >
            Volver
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Términos y Condiciones</h1>
          <p className="text-foreground/70 text-lg mb-12">Última actualización: Noviembre 2025</p>

          <div className="space-y-12">
            {/* Section 1 */}
            <section className="bg-card p-8 rounded-xl border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-primary mb-4">1. Aceptación de Términos</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Al acceder y utilizar la aplicación ChillEats, aceptas estar vinculado por estos Términos y Condiciones.
                Si no estás de acuerdo con alguna parte de estos términos, no puedes utilizar la aplicación.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                ChillEats se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán
                notificados en la aplicación, y tu uso continuado constituye aceptación de los cambios.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-card p-8 rounded-xl border-l-4 border-secondary">
              <h2 className="text-3xl font-bold text-primary mb-4">2. Descripción del Servicio</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                ChillEats es una plataforma que permite a usuarios buscar y descubrir establecimientos de comida
                especializados en dietas específicas, incluyendo opciones para celíacos, veganos y vegetarianos.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">La aplicación proporciona:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                <li>Filtros especializados para búsquedas de establecimientos</li>
                <li>Información de menús y ubicaciones</li>
                <li>Sistema de reseñas y calificaciones</li>
                <li>Funcionalidad de favoritos personales</li>
                <li>Etiquetas especializadas para dietas</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="bg-card p-8 rounded-xl border-l-4 border-muted">
              <h2 className="text-3xl font-bold text-primary mb-4">3. Registro de Cuenta</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Para acceder a ciertas características de ChillEats, debes crear una cuenta. Al hacerlo, aceptas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                <li>Proporcionar información precisa y completa</li>
                <li>Mantener la confidencialidad de tu contraseña</li>
                <li>Ser responsable de todas las actividades en tu cuenta</li>
                <li>Notificar inmediatamente sobre acceso no autorizado</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                ChillEats se reserva el derecho de suspender o eliminar cuentas que violen estos términos.
              </p>
            </section>

            {/* Section 4 */}
            <section className="bg-card p-8 rounded-xl border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-primary mb-4">4. Contenido de Usuario</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Al enviar reseñas, calificaciones o comentarios, otorgas a ChillEats el derecho de usar este contenido
                en la aplicación y en marketing, siempre manteniendo tu privacidad.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Eres responsable del contenido que publiques. No debes publicar contenido que sea:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Difamatorio, ofensivo o ilegal</li>
                <li>Falso o engañoso</li>
                <li>Violación de derechos de terceros</li>
                <li>Spam o promoción no autorizada</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="bg-card p-8 rounded-xl border-l-4 border-secondary">
              <h2 className="text-3xl font-bold text-primary mb-4">5. Limitación de Responsabilidad</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                ChillEats proporciona la información en la aplicación "tal como está". No garantizamos que la
                información sea completamente precisa, actual o completa.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Los establecimientos enlistados, sus menús y opciones especializadas pueden cambiar sin previo aviso. Te
                recomendamos verificar directamente con los establecimientos.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                ChillEats no se hace responsable de reacciones alérgicas o problemas de salud relacionados con la
                información proporcionada por establecimientos terceros.
              </p>
            </section>

            {/* Section 6 */}
            <section className="bg-card p-8 rounded-xl border-l-4 border-muted">
              <h2 className="text-3xl font-bold text-primary mb-4">6. Privacidad y Datos</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Tu privacidad es importante para nosotros. Utilizamos tu información de ubicación para proporcionar
                resultados personalizados.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Consulta nuestra Política de Privacidad para entender cómo recopilamos, usamos y protegemos tus datos
                personales.
              </p>
            </section>

            {/* Section 7 */}
            <section className="bg-card p-8 rounded-xl border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-primary mb-4">7. Propiedad Intelectual</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Todo el contenido de ChillEats, incluyendo logos, diseño, funcionalidades y código, está protegido por
                derechos de autor y otros derechos de propiedad intelectual.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                No puedes reproducir, distribuir o transmitir ningún contenido sin autorización escrita de ChillEats.
              </p>
            </section>

            {/* Section 8 */}
            <section className="bg-card p-8 rounded-xl border-l-4 border-secondary">
              <h2 className="text-3xl font-bold text-primary mb-4">8. Modificaciones y Discontinuación del Servicio</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                ChillEats se reserva el derecho de modificar o discontinuar el servicio en cualquier momento, con o sin
                aviso previo.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                No seremos responsables por daños resultantes de la modificación o discontinuación del servicio.
              </p>
            </section>

            {/* Section 9 */}
            <section className="bg-card p-8 rounded-xl border-l-4 border-muted">
              <h2 className="text-3xl font-bold text-primary mb-4">9. Limitación de Responsabilidad</h2>
              <p className="text-foreground/80 leading-relaxed">
                En la máxima medida permitida por la ley, ChillEats no será responsable por daños indirectos,
                incidentales, especiales, consecuentes o punitivos resultantes del uso o la imposibilidad de usar la
                aplicación.
              </p>
            </section>

            {/* Section 10 */}
            <section className="bg-card p-8 rounded-xl border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-primary mb-4">10. Contacto</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Si tienes preguntas o comentarios sobre estos Términos y Condiciones, por favor contáctanos a través de:
              </p>
              <div className="bg-secondary/20 p-6 rounded-lg mt-4">
                <p className="text-foreground font-semibold mb-2">📱 Instagram:</p>
                <a
                  href="https://www.instagram.com/chilleatsapp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary font-bold"
                >
                  @chilleatsapp
                </a>
              </div>
            </section>
          </div>

          {/* Acceptance Box */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-xl mt-12 text-center">
            <p className="text-primary-foreground text-lg font-semibold mb-6">
              Al usar ChillEats, aceptas estos Términos y Condiciones
            </p>
            <button
              onClick={handleBackToHome}
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-bold rounded-lg hover:scale-105 transition-transform"
            >
              Volver a Inicio
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-background/80 mb-4">© 2025 ChillEats. Buscá tu lugar ideal. Comé relajado. Disfrutá.</p>
          <button
            onClick={handleScrollToTop}
            className="inline-block mr-4 text-background/80 hover:text-primary transition-colors font-semibold mb-4"
          >
            ↑ Volver al inicio
          </button>
          <a
            href="https://www.instagram.com/chilleatsapp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
          >
            <span className="text-xl">📱</span>
            Síguenos en Instagram
          </a>
        </div>
      </footer>
    </div>
  )
}
