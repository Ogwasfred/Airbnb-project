import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'
import HomeHero from '../Components/Home/HomeHero'

function Home() {
  return (
    <div>
        <Navbar />
        <HomeHero />
        <Footer />
    </div>
  )
}

export default Home