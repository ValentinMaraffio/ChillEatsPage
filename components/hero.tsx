"use client"

import Image from "next/image"
import SectionsMenu from "./sections-menu"
import { DownloadModal, useDownloadModal } from "./download-modal"

export default function Hero() {
  const { isOpen, openModal, closeModal } = useDownloadModal()

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary py-32 px-6">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-secondary rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-muted rounded-full opacity-30 blur-3xl animate-pulse"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-in-up">
          <div className="mb-6 animate-bounce" style={{ animationDelay: "0s" }}>
            <Image src="/logo-cubiertos.png" alt="ChillEats Logo" width={100} height={100} className="mx-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance">
            Buscá tu lugar ideal. Comé relajado. Disfrutá.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto text-balance">
            Encuentra tu lugar ideal usando ChillEats, con filtros inteligentes, búsquedas mejoradas y mucho más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-background text-primary font-bold rounded-lg text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Descargar App
            </button>
            <div className="relative">
              <SectionsMenu />
            </div>
          </div>
        </div>
      </section>

      <DownloadModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
