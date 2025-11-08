"use client"

import { ScrollReveal } from "./scroll-reveal"
import { DownloadModal, useDownloadModal } from "./download-modal"

export default function Cierre() {
  const { isOpen, openModal, closeModal } = useDownloadModal()

  return (
    <>
      <section className="py-32 px-6 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full opacity-20 blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-8 text-balance">
              ChillEats no es solo una aplicación
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
              Es la respuesta a una necesidad real: la de <span className="font-bold">miles de personas</span> que día a
              día buscan un lugar donde puedan comer tranquilos, seguros y sin renunciar a lo que son o lo que eligen.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6 mb-12">
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
                En pleno 2025, que alguien tenga que preocuparse por{" "}
                <span className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
                  "¿dónde voy a poder comer?"
                </span>{" "}
                debería ser cosa del pasado, sin embargo, todavía no lo es. Con ChillEats transformamos esa preocupación
                en una certeza: la certeza de que siempre vas a tener un lugar pensado para vos
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="space-y-6 mb-12">
              <div className="bg-gradient-to-r from-secondary via-primary to-secondary p-8 rounded-2xl border-2 border-primary-foreground/50 shadow-xl">
                <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  Porque comer no debería ser un problema, sino un placer.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <button
              onClick={openModal}
              className="px-12 py-4 bg-primary-foreground text-primary font-bold text-xl rounded-lg hover:scale-105 transition-transform shadow-xl"
            >
              Descargar ChillEats Ahora
            </button>
          </ScrollReveal>
        </div>
      </section>

      <DownloadModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
