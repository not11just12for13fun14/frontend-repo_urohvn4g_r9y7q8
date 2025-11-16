import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Community from './components/Community'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0218]">
      <Navbar />
      <Hero />
      <Features />
      <Community />
      <Testimonials />
      <CTA />
      <footer className="bg-[#090114] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-white/60">
          © {new Date().getFullYear()} HealPlay — Gaming che fa bene.
        </div>
      </footer>
    </div>
  )
}

export default App
