import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const values = [
  { title: 'Empatia', desc: 'Accogliamo ogni percorso con rispetto e ascolto attivo.' },
  { title: 'Community', desc: 'Crescita condivisa, co-op e supporto tra pari.' },
  { title: 'Consapevolezza', desc: 'Strumenti pratici per conoscere te stesso e migliorare.' },
]

const team = [
  { name: 'Dr.ssa Elena Rossi', role: 'Psicoterapeuta', avatar: 'https://i.pravatar.cc/150?img=47', bio: 'Specializzata in dipendenze comportamentali e benessere digitale.' },
  { name: 'Dr. Marco Bianchi', role: 'Psicologo dello sport', avatar: 'https://i.pravatar.cc/150?img=54', bio: 'Performance mentale per gamer e team competitivi.' },
  { name: 'Sara Conti', role: 'Community Lead', avatar: 'https://i.pravatar.cc/150?img=65', bio: 'Facilita gruppi, eventi live e moderazione sicura.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0218]">
      <Navbar />

      <section className="relative bg-[#0a0218] pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(236,72,153,.12),transparent_45%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">Chi siamo</h1>
          <p className="mt-4 text-white/70 max-w-3xl mx-auto">Costruiamo percorsi di benessere per gamer e creator, unendo psicologia, esperienza di gioco e community.</p>
        </div>
      </section>

      <section className="relative bg-[#0a0218] py-16">
        <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">Cosa facciamo</h2>
            <p className="mt-3 text-white/70">Percorsi personalizzati, questionari di matching, sessioni 1:1 e co-op, eventi e contenuti educativi. Tutto con un linguaggio vicino al gaming.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">I nostri valori</h2>
            <ul className="mt-3 space-y-3">
              {values.map(v => (
                <li key={v.title} className="text-white/80"><span className="font-medium text-white">{v.title}:</span> {v.desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a0218] py-16">
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-white text-center">Team</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map(m => (
              <div key={m.name} className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <img src={m.avatar} alt={m.name} className="h-40 w-full object-cover rounded-xl border border-white/10" />
                <h3 className="mt-3 text-white font-semibold">{m.name}</h3>
                <p className="text-white/60 text-sm">{m.role}</p>
                <p className="mt-2 text-white/70 text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="/register" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 text-white font-semibold shadow-lg">Inizia il Questionario</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
