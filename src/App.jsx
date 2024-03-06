import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import SocialLinks from './components/SocialLinks'
import Tools from './components/Tools'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
     <SocialLinks/>
      <About/>
      <Experience/>
      <Tools/>
    <Portfolio/>
    <Contact/>
    </div>
  )
}

export default App
