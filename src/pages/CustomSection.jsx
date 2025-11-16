import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CustomSection() {
  return (
    <div className="min-h-screen bg-[#0a0218]">
      <Navbar />
      <section className="relative bg-[#0a0218] pt-28 pb-16">
        <div className="relative mx-auto max-w-6xl px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">Sezione personalizzata</h1>
          <p className="mt-3 text-white/70 max-w-3xl">Area attivabile dall'admin per campagne temporanee o contenuti speciali.</p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-fuchsia-500/20 to-violet-600/20" />
            <div className="mt-4 text-white/80">Contenuto placeholder. In futuro sarà popolato da CMS/backend.</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
