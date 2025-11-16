import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Heart } from 'lucide-react'

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#0a0218]">
      <Navbar />
      <section className="relative bg-[#0a0218] pt-28 pb-16">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white">Articoli</h1>
            <div className="flex gap-2">
              <input placeholder="Cerca..." className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50" />
              <select className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white">
                <option>Tutti</option>
                <option>Gaming</option>
                <option>Benessere</option>
                <option>Pro</option>
              </select>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <article key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-fuchsia-500/20 to-violet-600/20" />
                <h3 className="mt-4 text-white font-semibold">Titolo post #{i+1}</h3>
                <p className="mt-1 text-white/70 text-sm">Breve descrizione del contenuto. Anteprima testo di esempio.</p>
                <div className="mt-3 flex items-center justify-between text-sm text-white/60">
                  <span>5 min</span>
                  <button className="inline-flex items-center gap-1 text-fuchsia-400 hover:text-fuchsia-300"><Heart size={16}/> 42</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
