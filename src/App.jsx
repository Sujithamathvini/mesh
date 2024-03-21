import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Service from './Components/Service'
import About from './Components/About'
import Contact from './Components/Contact'
import Faq from './Components/Faq'
import Blog from './Components/Blog'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Blog />
      <Faq />
      <Contact />
    </>
  )
}

export default App
