import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GithubStats from './components/GithubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

function App() {
  const containerRef = useReveal()

  return (
    <div ref={containerRef} className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-ink-800">
          <About />
        </div>
        <div className="border-t border-ink-800">
          <Skills />
        </div>
        <div className="border-t border-ink-800">
          <Projects />
        </div>
        <div className="border-t border-ink-800">
          <GithubStats />
        </div>
        <div className="border-t border-ink-800">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
