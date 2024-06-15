import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ContentBreak from './components/ContentBreak'
import InfoSection from './components/InfoSection'
import SecondSection from './components/SecondSection'
import BigContentBreak from './components/BigContentBreak'
import Footer from './components/Footer'

function App() {
  

  return (
      <>
      <Navbar/>
      <HeroSection/>
      <ContentBreak/>
      <InfoSection/>
      <BigContentBreak/>
      <SecondSection/>
      <ContentBreak/>
      <Footer/>
      </>
  )
}

export default App
