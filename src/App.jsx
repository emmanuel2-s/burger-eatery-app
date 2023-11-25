import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HeadLineCards from "./components/HeadLineCards"
import TopRatedFoods from "./components/TopRatedFoods"
import HotMenuItems from "./components/HotMenuItems"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <TopRatedFoods />
      <HotMenuItems />
      <Footer />
    </>
  )
}

export default App
