import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
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
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <footer className="footer">
        <p>Designed by <span className="gradient-text">Apoorv Mehrotra</span></p>
      </footer>
    </div>
  )
}

export default App
