import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0218]/70 via-[#0a0218]/60 to-[#0a0218] pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(168,85,247,0.35)]">
            Il tuo safe space nel mondo del gaming.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-4 text-lg sm:text-xl text-white/80">
            Connettiti con psicologi che capiscono la tua passione. Trova il tuo checkpoint.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-fuchsia-500/30 transition-shadow">Inizia il tuo percorso</a>
            <a href="#programs" className="rounded-xl bg-white/10 backdrop-blur px-6 py-3 text-white font-semibold border border-white/10 hover:bg-white/15">Scopri come funziona</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
