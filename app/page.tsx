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
      <div id="problema">
        <Problema />
      </div>
      <div id="anecdota">
        <Anecdota />
      </div>
      <div id="funcionalidades">
        <Funcionalidades />
      </div>
      <div id="tecnologia">
        <Tecnologia />
      </div>
      <div id="herramientas">
        <Herramientas />
      </div>
      <div id="equipo">
        <Equipo />
      </div>
      <Cierre />
      <Footer />
    </div>
  )
}
