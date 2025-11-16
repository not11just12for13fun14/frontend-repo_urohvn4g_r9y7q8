import { Trophy, HeartHandshake, BrainCircuit, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Trophy,
    title: 'Sfide & Progressi',
    desc: 'Percorsi a livelli, badge e quest per mantenere alta la motivazione.',
  },
  {
    icon: HeartHandshake,
    title: 'Benessere al centro',
    desc: 'Attività studiate per equilibrio tra gioco, mente e corpo.',
  },
  {
    icon: BrainCircuit,
    title: 'Mindset da Pro',
    desc: 'Allenamenti mentali e coaching per migliorare focus e performance.',
  },
  {
    icon: Sparkles,
    title: 'Eventi & Community',
    desc: 'Live, tornei e meet-up per giocare e crescere insieme.',
  },
]

export default function Features() {
  return (
    <section id="programs" className="relative bg-[#0a0218] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Level up il tuo benessere</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Programmi ispirati al gaming, progettati per farti crescere divertendoti.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl overflow-hidden hover:translate-y-[-2px] transition-transform">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-tr from-fuchsia-500/30 to-violet-600/30 blur-2xl" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-violet-600 text-white shadow-lg">
                <f.icon size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
