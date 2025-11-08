"use client"
import Image from "next/image"
import { useSmoothScroll } from "../hooks/use-smooth-scroll"
import { useRouter, usePathname } from "next/navigation"

export default function Footer() {
  const { scrollToSection } = useSmoothScroll()
  const router = useRouter()
  const pathname = usePathname()

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId)
  }

  const handleTerminosClick = () => {
    if (pathname === "/terminos") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/terminos")
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 50)
    }
  }

  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo-cubiertos.png" alt="ChillEats Logo" width={32} height={32} />
              <h3 className="text-2xl font-bold">ChillEats</h3>
            </div>
            <p className="text-background/80">Encuentra tu lugar ideal para comer seguro y relajado.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleLinkClick("problema")}
                  className="text-background/80 hover:text-background transition-all font-medium hover:translate-x-1 block text-left"
                >
                  Problema
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("anecdota")}
                  className="text-background/80 hover:text-background transition-all font-medium hover:translate-x-1 block text-left"
                >
                  Anécdota
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("funcionalidades")}
                  className="text-background/80 hover:text-background transition-all font-medium hover:translate-x-1 block text-left"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("tecnologia")}
                  className="text-background/80 hover:text-background transition-all font-medium hover:translate-x-1 block text-left"
                >
                  Tecnología
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("herramientas")}
                  className="text-background/80 hover:text-background transition-all font-medium hover:translate-x-1 block text-left"
                >
                  Herramientas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("equipo")}
                  className="text-background/80 hover:text-background transition-all font-medium hover:translate-x-1 block text-left"
                >
                  Equipo
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleTerminosClick}
                  className="text-background/80 hover:text-background transition-colors block text-left font-medium"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                {/*}<a href="#" className="text-background/80 hover:text-background transition-colors">
                  Privacidad
                </a>{*/}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Síguenos</h4>
            <a
              href="https://www.instagram.com/chilleatsapp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-background/80 hover:text-primary hover:scale-110 transition-all text-lg font-semibold"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162 3.403 0 6.162 2.759 6.162 6.162 0 3.403-2.759 6.162-6.162 6.162-3.403 0-6.162-2.759-6.162-6.162zm2.889 0c0 1.821 1.453 3.293 3.273 3.293 1.821 0 3.273-1.472 3.273-3.293 0-1.82-1.452-3.293-3.273-3.293-1.82 0-3.273 1.473-3.273 3.293zm11.294-5.874c0 .795.645 1.44 1.44 1.44.795 0 1.44-.645 1.44-1.44 0-.794-.645-1.439-1.44-1.439-.795 0-1.44.645-1.44 1.439z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60">
            © 2025 ChillEats. Buscá tu lugar ideal. Comé relajado. Disfrutá.
          </p>
        </div>
      </div>
    </footer>
  )
}
