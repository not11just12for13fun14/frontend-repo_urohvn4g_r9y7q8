import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Community from '../components/Community'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0218]">
      <Navbar />
      <Hero />
      {/* Video Presentazione */}
      <section className="relative bg-[#0a0218] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,72,153,.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Guarda come funziona</h2>
            <p className="mt-3 text-white/70">Una panoramica in 90 secondi su come iniziare il tuo percorso.</p>
          </div>
          <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            <iframe
              className="h-full w-full rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
              title="Video presentazione"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Come Funziona */}
      <Features />

      {/* Ultimi Contenuti */}
      <section className="relative bg-[#0a0218] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Ultimi contenuti</h2>
            <a href="/articles" className="text-fuchsia-400 hover:text-fuchsia-300">Leggi tutti</a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <article key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:translate-y-[-2px] transition-transform">
                <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-fuchsia-500/20 to-violet-600/20" />
                <h3 className="mt-4 text-xl font-semibold text-white">Titolo articolo {i}</h3>
                <p className="mt-2 text-white/70">Anteprima breve del contenuto. Testo descrittivo di esempio.</p>
                <div className="mt-4 flex items-center justify-between text-sm text-white/60">
                  <span>5 min</span>
                  <a href="/articles" className="text-fuchsia-400 hover:text-fuchsia-300">Apri</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recensioni pubbliche */}
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
