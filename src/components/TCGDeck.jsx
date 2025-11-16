import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Crown, Swords, Brain, Shield, Flame, Sparkles, Heart, Star } from 'lucide-react'

const cards = [
  {
    id: 'mentor-1',
    name: 'Valentina R.',
    class: 'Mentor',
    title: 'Psicologa dello Sport',
    rarity: 'EPIC',
    cost: 3,
    atk: 2,
    def: 6,
    crest: Brain,
    color: 'from-fuchsia-500/30 via-violet-500/30 to-cyan-500/30',
    affinity: ['Mind', 'Calm'],
    abilities: [
      {
        name: 'Rituale Pre-Match',
        text: 'Riduci ansia e +2 Focus al tuo Capitano questo turno.'
      },
      {
        name: 'Biofeedback',
        text: 'Trasforma 1 stress in 1 energia riserva.'
      }
    ]
  },
  {
    id: 'coach-1',
    name: 'Yuri M.',
    class: 'Tactician',
    title: 'Esports Coach',
    rarity: 'LEGENDARY',
    cost: 4,
    atk: 4,
    def: 5,
    crest: Swords,
    color: 'from-amber-400/30 via-rose-500/30 to-fuchsia-500/30',
    affinity: ['Team', 'Aim'],
    abilities: [
      { name: 'Shot Caller', text: '+1 a tutti i compagni. Se coordinati, pesca 1.' },
      { name: 'Drill Mentale', text: 'Il prossimo errore non consuma Focus.' }
    ]
  },
  {
    id: 'therapist-1',
    name: 'Sara P.',
    class: 'Guardian',
    title: 'Psicoterapeuta',
    rarity: 'RARE',
    cost: 2,
    atk: 1,
    def: 7,
    crest: Shield,
    color: 'from-cyan-400/30 via-emerald-400/30 to-fuchsia-500/30',
    affinity: ['Calm', 'Recovery'],
    abilities: [
      { name: 'Sleep Reset', text: 'Rigenera 2. Se notturna, aggiungi 1 extra.' },
      { name: 'Grounding', text: 'Silenzia tilt su un alleato.' }
    ]
  },
  {
    id: 'mindset-1',
    name: 'Alex N.',
    class: 'Alchemist',
    title: 'Mindset Designer',
    rarity: 'EPIC',
    cost: 3,
    atk: 3,
    def: 4,
    crest: Flame,
    color: 'from-violet-500/30 via-fuchsia-500/30 to-sky-500/30',
    affinity: ['Flow', 'Creativity'],
    abilities: [
      { name: 'State Shift', text: 'Converti 1 paura in 1 audacia.' },
      { name: 'Momentum', text: '+2 ATK se hai pescato 2+ questa mano.' }
    ]
  },
  {
    id: 'mentor-2',
    name: 'Giulia K.',
    class: 'Oracle',
    title: 'Performance Analyst',
    rarity: 'RARE',
    cost: 2,
    atk: 2,
    def: 5,
    crest: Star,
    color: 'from-indigo-400/30 via-fuchsia-400/30 to-rose-400/30',
    affinity: ['Insight', 'Data'],
    abilities: [
      { name: 'VHS Review', text: 'Guarda il topdeck, puoi riposizionarlo.' },
      { name: 'Clutch Sense', text: '+1 DEF se sotto pressione.' }
    ]
  }
]

const spring = { type: 'spring', stiffness: 120, damping: 14, mass: 0.9 }

function RarityFrame({ rarity }) {
  const map = {
    COMMON: 'border-white/15 shadow-white/5',
    RARE: 'border-sky-400/40 shadow-sky-400/20',
    EPIC: 'border-violet-400/40 shadow-violet-400/20',
    LEGENDARY: 'border-amber-400/50 shadow-amber-400/30'
  }
  return `border ${map[rarity] || map.COMMON}`
}

function ManaOrb({ cost }) {
  return (
    <div className="relative h-9 w-9 grid place-items-center rounded-full bg-black/40 border border-white/10">
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        style={{
          background:
            'conic-gradient(from 0deg, rgba(236,72,153,.6), rgba(99,102,241,.6), rgba(56,189,248,.6), rgba(236,72,153,.6))'
        }}
      />
      <div className="absolute inset-[2px] rounded-full bg-[#0b0618] grid place-items-center text-white font-bold text-sm">
        {cost}
      </div>
    </div>
  )
}

function FoilLayer({ color }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[22px] mix-blend-screen"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      style={{
        background:
          `conic-gradient(from 0deg, rgba(255,255,255,.0) 0%, rgba(255,255,255,.15) 12%, rgba(255,255,255,.0) 25%, rgba(255,255,255,.12) 37%, rgba(255,255,255,.0) 50%, rgba(255,255,255,.15) 62%, rgba(255,255,255,.0) 75%, rgba(255,255,255,.12) 87%, rgba(255,255,255,.0) 100%)`,
        maskImage:
          'radial-gradient(circle at 30% 20%, rgba(255,255,255,.9), transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,255,255,.8), transparent 55%)'
      }}
    />
  )
}

function Crest({ Icon }) {
  return (
    <div className="relative h-9 w-9 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-white/90">
      <Icon size={16} />
    </div>
  )
}

function StatChip({ label, value }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80">
      <span className="opacity-80">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  )
}

function Ability({ name, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
      <div className="text-[11px] font-semibold text-white">{name}</div>
      <div className="mt-0.5 text-[10px] text-white/70">{text}</div>
    </div>
  )
}

function TCGCard({ data, index }) {
  const [hovered, setHovered] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const CrestIcon = data.crest

  const tilt = hovered ? { rotateX: -6, rotateY: 6, z: 20 } : { rotateX: 0, rotateY: 0, z: 0 }

  return (
    <motion.div
      className="relative h-[380px] w-[260px] select-none"
      style={{ perspective: 1200 }}
    >
      <motion.div
        className={`relative h-full w-full rounded-[22px] bg-[#0c071b]/95 backdrop-blur-xl ${RarityFrame({ rarity: data.rarity })} shadow-xl`}
        animate={flipped ? { rotateY: 180 } : { rotateY: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ ...spring, duration: 0.5 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setFlipped(v => !v)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT */}
        <motion.div
          className="absolute inset-0 p-3"
          style={{ backfaceVisibility: 'hidden' }}
          animate={tilt}
          transition={spring}
        >
          {/* Outer glow frame */}
          <div className={`absolute inset-[1px] rounded-[20px] bg-gradient-to-br ${data.color} opacity-40`} />
          <div className="absolute inset-[2px] rounded-[18px] bg-[#0d081d]" />

          {/* Foil shimmer */}
          <FoilLayer color={data.color} />

          {/* Top bar */}
          <div className="relative z-10 flex items-center justify-between">
            <ManaOrb cost={data.cost} />
            <div className="text-[10px] tracking-widest text-white/70">{data.rarity}</div>
            <Crest Icon={CrestIcon} />
          </div>

          {/* Art area with parallax layers */}
          <div className="relative z-10 mt-3 h-40 w-full overflow-hidden rounded-xl border border-white/10">
            <motion.div
              className="absolute inset-0"
              animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
              transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
              style={{
                backgroundImage:
                  'radial-gradient(120px 80px at 20% 30%, rgba(236,72,153,.18), transparent), radial-gradient(100px 60px at 80% 20%, rgba(99,102,241,.18), transparent), radial-gradient(160px 100px at 70% 90%, rgba(56,189,248,.15), transparent)'
              }}
            />
            <motion.div
              className="absolute inset-0"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              style={{ background:
                'linear-gradient(130deg, rgba(255,255,255,.06), rgba(255,255,255,0))' }}
            />
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: [0, 2, -1, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
              style={{
                background:
                  'conic-gradient(from 90deg, rgba(255,255,255,.06), rgba(255,255,255,0) 25%, rgba(255,255,255,.04) 50%, rgba(255,255,255,0) 75%, rgba(255,255,255,.06) 100%)',
                mixBlendMode: 'overlay'
              }}
            />
          </div>

          {/* Title banner */}
          <div className="relative z-10 mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-semibold text-sm leading-tight">{data.name}</div>
                <div className="text-[11px] text-white/70">{data.title}</div>
              </div>
              <div className="flex items-center gap-2">
                <StatChip label="ATK" value={data.atk} />
                <StatChip label="DEF" value={data.def} />
              </div>
            </div>
          </div>

          {/* Abilities list */}
          <div className="relative z-10 mt-2 space-y-2">
            {data.abilities.map((a) => (
              <Ability key={a.name} name={a.name} text={a.text} />
            ))}
          </div>

          {/* Footer tags */}
          <div className="relative z-10 mt-2 flex items-center justify-between">
            <div className="flex gap-2">
              {data.affinity.map(tag => (
                <span key={tag} className="text-[10px] rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/70">{tag}</span>
              ))}
            </div>
            <button className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow-fuchsia-500/20">
              Ingaggia
            </button>
          </div>
        </motion.div>

        {/* BACK */}
        <motion.div
          className="absolute inset-0 p-3"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="absolute inset-[1px] rounded-[20px] bg-gradient-to-br from-white/5 to-white/0" />
          <div className="absolute inset-[2px] rounded-[18px] bg-[#0b0618]" />
          <FoilLayer />

          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center justify-between">
              <div className="text-xs tracking-widest text-white/60">{data.class}</div>
              <div className="text-xs text-white/60">Serie: Healplay Alpha</div>
            </div>

            <div className="mt-3 text-[11px] leading-relaxed text-white/80">
              Profilo: orientata a {data.affinity.join(' + ')}. Ideale per playstyle che richiedono controllo emotivo e decision making rapido. Sinergizza con ruoli Support e Capitano.
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
                <div className="text-[10px] font-semibold text-white">Combo</div>
                <div className="mt-1 text-[10px] text-white/70">Se giochi questa carta dopo un Allenamento, pesca 1 e guadagni +1 Focus.</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
                <div className="text-[10px] font-semibold text-white">Debolezza</div>
                <div className="mt-1 text-[10px] text-white/70">Vulnerabile a Burnout: se la mano è vuota, -1 DEF.</div>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between">
              <div className="text-[10px] text-white/50">© Healplay TCG – Proto</div>
              <div className="inline-flex items-center gap-2 text-[10px] text-white/70">
                <Sparkles size={12} />
                <span>Foil</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function TCGDeck() {
  const hand = useMemo(() => cards.slice(0, 5), [])

  return (
    <section className="relative bg-[#090417] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(236,72,153,.12),transparent),radial-gradient(50%_30%_at_80%_10%,rgba(99,102,241,.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Roster TCG – Mentori</h2>
            <p className="mt-2 max-w-2xl text-white/70">Cartucce da gioco, non semplici card UI. Ogni mentore ha costo, rarità, statistiche e abilità sinergiche.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">Collezione</button>
            <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20">Crea Mazzo</button>
          </div>
        </div>

        {/* Grid showcase */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.slice(0,3).map((c, i) => (
            <div key={c.id} className="flex justify-center">
              <TCGCard data={c} index={i} />
            </div>
          ))}
        </div>

        {/* Hand fan */}
        <div className="relative mt-16">
          <div className="text-white/70 text-sm">La tua mano</div>
          <div className="mt-4 relative h-[340px]">
            {hand.map((c, i) => {
              const spread = [-20, -10, 0, 10, 20][i]
              const offset = [-40, -20, 0, 20, 40][i]
              return (
                <motion.div
                  key={c.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ zIndex: 10 + i }}
                  initial={{ rotate: spread, x: offset, y: 30 + Math.abs(spread) / 2, scale: 0.95 }}
                  whileHover={{ y: -40, scale: 1 }}
                  transition={spring}
                >
                  <TCGCard data={c} index={i} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
