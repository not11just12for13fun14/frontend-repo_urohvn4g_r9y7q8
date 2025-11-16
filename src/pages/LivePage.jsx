import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LivePage() {
  return (
    <div className="min-h-screen bg-[#0a0218]">
      <Navbar />
      <section className="relative bg-[#0a0218] pt-28 pb-16">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white">Live</h1>
            <div className="flex gap-2">
              <select className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white">
                <option>Prossimi</option>
                <option>Passati</option>
              </select>
              <select className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white">
                <option>Tutti i canali</option>
                <option>Twitch</option>
                <option>YouTube</option>
              </select>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-tr from-fuchsia-500/20 to-violet-600/20" />
                <div className="p-4">
                  <h3 className="text-white font-semibold">Evento Live #{i}</h3>
                  <p className="text-white/70 text-sm mt-1">Descrizione rapida e tag.</p>
                  <a href="#" className="mt-3 inline-block text-fuchsia-400 hover:text-fuchsia-300">Apri</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
