import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Statistics from './Components/Statistics'
import Contact from './Components/Contact'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Statistics id="statistics" />
      <Contact id="contact" />
    </>
  )
}

export default App
