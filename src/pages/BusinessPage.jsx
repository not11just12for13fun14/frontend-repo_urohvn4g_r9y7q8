import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-[#0a0218]">
      <Navbar />
      <section className="relative bg-[#0a0218] pt-28 pb-16">
        <div className="relative mx-auto max-w-6xl px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">Business</h1>
          <p className="mt-3 text-white/70 max-w-3xl">Servizi per aziende, team e scuole: workshop, programmi di prevenzione, coaching per eSport.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="h-24 w-24 rounded-xl bg-gradient-to-tr from-fuchsia-500/20 to-violet-600/20" />
                <h3 className="mt-4 text-white font-semibold">Pacchetto #{i}</h3>
                <p className="text-white/70 text-sm">Descrizione sintetica del servizio offerto.</p>
                <a href="#" className="mt-3 inline-block text-fuchsia-400 hover:text-fuchsia-300">Dettagli</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
