import { motion } from 'framer-motion'
import { Shield, Brain, Sparkles, Star, Crown, Swords, Activity } from 'lucide-react'
import { useMemo } from 'react'

const pros = [
  {
    id: 'valentina',
    name: 'Valentina R.',
    title: 'Psicologa dello Sport',
    rarity: 'epic',
    focus: ['Ansia da performance', 'Routine pre-match'],
    stats: { empatia: 92, focus: 88, mindset: 95 },
    sigil: Brain,
    gradient: 'from-fuchsia-500/30 via-violet-500/20 to-sky-500/20',
    accent: 'fuchsia',
  },
  {
    id: 'yuri',
    name: 'Yuri M.',
    title: 'Esports Coach',
    rarity: 'legendary',
    focus: ['Aim psychology', 'Team dynamics'],
    stats: { empatia: 78, focus: 96, mindset: 90 },
    sigil: Swords,
    gradient: 'from-amber-400/30 via-rose-500/20 to-fuchsia-500/20',
    accent: 'amber',
  },
  {
    id: 'sara',
    name: 'Sara P.',
    title: 'Psicoterapeuta',
    rarity: 'rare',
    focus: ['Gestione stress', 'Sleep & recovery'],
    stats: { empatia: 97, focus: 84, mindset: 88 },
    sigil: Shield,
    gradient: 'from-cyan-400/30 via-emerald-400/20 to-fuchsia-500/20',
    accent: 'cyan',
  },
]

function RarityBadge({ rarity }) {
  const map = {
    common: { label: 'Common', icon: Star, ring: 'ring-white/20', glow: 'shadow-white/10' },
    rare: { label: 'Rare', icon: Sparkles, ring: 'ring-sky-400/40', glow: 'shadow-sky-400/20' },
    epic: { label: 'Epic', icon: Crown, ring: 'ring-violet-400/40', glow: 'shadow-violet-400/20' },
    legendary: { label: 'Legendary', icon: Crown, ring: 'ring-amber-400/50', glow: 'shadow-amber-400/30' },
  }
  const { label, icon: Icon, ring, glow } = map[rarity] ?? map.common
  return (
    <div className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/90 ring-1 ${ring} shadow-lg ${glow}`}>
      <Icon size={14} className="text-white/80" />
      <span className="uppercase tracking-wide">{label}</span>
    </div>
  )
}

function StatBar({ label, value, color='fuchsia' }) {
  const colorMap = {
    fuchsia: 'from-fuchsia-400 to-violet-500',
    violet: 'from-violet-400 to-fuchsia-500',
    amber: 'from-amber-400 to-orange-500',
    cyan: 'from-cyan-400 to-sky-500',
    emerald: 'from-emerald-400 to-teal-500',
  }
  const grad = colorMap[color] || colorMap.fuchsia
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-white/60">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="mt-1 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
        <div className={`h-full rounded-full bg-gradient-to-r ${grad}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

function Card({ pro, idx }) {
  const Sigil = pro.sigil
  const spring = { type: 'spring', stiffness: 120, damping: 12, mass: 0.8 }

  const shineId = useMemo(() => `shine-${pro.id}`,[pro.id])

  return (
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, translateZ: 6 }}
      transition={spring}
      style={{ transformStyle: 'preserve-3d' }}
      className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl shadow-xl hover:shadow-fuchsia-500/20"
    >
      {/* Holo edge */}
      <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${pro.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen`} />
      {/* Animated shine */}
      <svg className="pointer-events-none absolute inset-0 -z-0 opacity-0 group-hover:opacity-100" width="0" height="0">
        <defs>
          <linearGradient id={shineId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="pointer-events-none absolute -inset-[1px] rounded-[calc(1.5rem+1px)] border border-white/10" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between" style={{ transform: 'translateZ(18px)' }}>
        <RarityBadge rarity={pro.rarity} />
        <div className="flex items-center gap-2 text-white/70 text-xs">
          <Activity size={16} />
          <span>+{12 + idx} exp</span>
        </div>
      </div>

      {/* Avatar + sigil */}
      <div className="relative mt-5 flex items-center gap-4" style={{ transform: 'translateZ(14px)' }}>
        <div className="relative h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 grid place-items-center text-white text-xl font-semibold">
          {pro.name.split(' ').map(p=>p[0]).join('').slice(0,2)}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg leading-tight">{pro.name}</h3>
          <p className="text-white/60 text-sm">{pro.title}</p>
        </div>
        <div className="ml-auto inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-white/80">
          <Sigil size={16} className="mr-1" />
          <span className="text-xs">Sigil</span>
        </div>
      </div>

      {/* Focus */}
      <div className="mt-4 flex flex-wrap gap-2" style={{ transform: 'translateZ(10px)' }}>
        {pro.focus.map((f) => (
          <span key={f} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">{f}</span>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-5 space-y-3" style={{ transform: 'translateZ(8px)' }}>
        <StatBar label="Empatia" value={pro.stats.empatia} color={pro.accent} />
        <StatBar label="Focus" value={pro.stats.focus} color={pro.accent} />
        <StatBar label="Mindset" value={pro.stats.mindset} color={pro.accent} />
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center justify-between" style={{ transform: 'translateZ(12px)' }}>
        <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30">
          Ingaggia
        </button>
        <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">
          Profilo
        </button>
      </div>

      {/* Corner deco */}
      <div className="pointer-events-none absolute -top-0.5 -left-0.5 h-8 w-8 rounded-tl-3xl border-l border-t border-white/15" />
      <div className="pointer-events-none absolute -top-0.5 -right-0.5 h-8 w-8 rounded-tr-3xl border-r border-t border-white/15" />
      <div className="pointer-events-none absolute -bottom-0.5 -left-0.5 h-8 w-8 rounded-bl-3xl border-l border-b border-white/15" />
      <div className="pointer-events-none absolute -bottom-0.5 -right-0.5 h-8 w-8 rounded-br-3xl border-r border-b border-white/15" />
    </motion.div>
  )
}

export default function ProRoster() {
  return (
    <section className="relative bg-[#0a0218] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(236,72,153,.12),transparent_45%),radial-gradient(circle_at_90%_0%,rgba(99,102,241,.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Carte Professionisti</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Scopri il tuo party ideale. Colleziona, sblocca perks e costruisci la tua squadra di supporto mentale.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">Filtri</button>
            <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20">Crea Match</button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1200px]">
          {pros.map((pro, idx) => (
            <Card key={pro.id} pro={pro} idx={idx} />
          ))}
        </div>

        {/* Banner quest */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-violet-600/10 to-sky-500/10 p-6 backdrop-blur-xl">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-white text-xl font-semibold">Quest settimanale: Checkpoint mentale</h3>
              <p className="text-white/70 text-sm mt-1">Completa il questionario di matching, ottieni la tua carta Mentor e sblocca uno sconto sul primo appuntamento.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">
                Anteprima
              </button>
              <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20">
                Inizia la Quest
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
