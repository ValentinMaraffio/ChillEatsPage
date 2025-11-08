"use client"

import { useState } from "react"

export function useDownloadModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return { isOpen, openModal, closeModal }
}

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-99999 w-full max-w-md mx-4">
        <div className="bg-gradient-to-br from-primary via-secondary to-primary p-8 rounded-2xl shadow-2xl border-2 border-primary-foreground/30 text-center animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">¡Pronto disponible!</h3>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">
            La aplicación de ChillEats estará disponible a partir del <span className="font-bold">14 de Noviembre</span>
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-primary-foreground text-primary font-bold rounded-lg hover:scale-105 transition-transform shadow-lg"
          >
            Entendido
          </button>
        </div>
      </div>
    </>
  )
}
