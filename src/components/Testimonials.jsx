import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Luca R.',
    avatar: 'https://i.pravatar.cc/100?img=12',
    rating: 5,
    text:
      'Ho trovato un terapeuta che capisce davvero il mio rapporto con i videogiochi. Finalmente mi sento compreso e non giudicato.',
  },
  {
    name: 'Giulia P.',
    avatar: 'https://i.pravatar.cc/100?img=5',
    rating: 5,
    text:
      'La modalità co-op di gruppo mi ha aiutata a condividere esperienze con altri gamer. È stato come sbloccare un nuovo livello nella mia vita.',
  },
  {
    name: 'Marco S.',
    avatar: 'https://i.pravatar.cc/100?img=20',
    rating: 4,
    text:
      'Percorso chiaro, appuntamenti semplici da prenotare e community super accogliente. Consigliatissimo.',
  },
  {
    name: 'Serena T.',
    avatar: 'https://i.pravatar.cc/100?img=32',
    rating: 5,
    text:
      'Mi piace il tono gaming-friendly e gli step guidati. Ho trovato il mio “checkpoint” quando ne avevo più bisogno.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#0a0218] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(236,72,153,.12),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(99,102,241,.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Testimonianze</h2>
          <p className="mt-3 text-white/70">
            Recensioni verificate dei pazienti: storie reali di chi ha trovato il proprio checkpoint.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl overflow-hidden hover:translate-y-[-2px] transition-transform"
            >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-tr from-fuchsia-500/25 to-violet-600/25 blur-2xl" />

              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="h-12 w-12 rounded-xl object-cover border border-white/10" />
                <div>
                  <p className="text-white font-semibold leading-tight">{r.name}</p>
                  <div className="mt-1 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className={i < r.rating ? 'fill-amber-400 text-amber-400' : 'text-amber-400/30'} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-white/80">“{r.text}”</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-fuchsia-500/30 transition-shadow"
          >
            Inizia il tuo percorso
          </a>
        </div>
      </div>
    </section>
  )
}
