import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import './App.css'

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <footer className="footer">
        <p>Designed &amp; Built by <span className="gradient-text">Apoorv Mehrotra</span></p>
      </footer>
    </div>
  )
}

export default App
