"use client"
import Header from "../components/header"
import Hero from "../components/hero"
import Problema from "../components/problema"
import Anecdota from "../components/anecdota"
import Funcionalidades from "../components/funcionalidades"
import Tecnologia from "../components/tecnologia"
import Herramientas from "../components/herramientas"
import Equipo from "../components/equipo"
import Cierre from "../components/cierre"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problema />
      <Anecdota />
      <Funcionalidades />
      <Tecnologia />
      <Herramientas />
      <Equipo />
      <Cierre />
      <Footer />
    </div>
  )
}
