"use client"

import { useScrollReveal } from "../hooks/use-scroll-reveal"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  )
}
