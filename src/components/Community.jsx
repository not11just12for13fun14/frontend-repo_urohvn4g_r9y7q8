import { Users, MessageSquareMore, Rocket } from 'lucide-react'

export default function Community() {
  return (
    <section id="community" className="relative bg-[#0a0218] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Una community che ti spinge avanti</h2>
            <p className="mt-4 text-white/70">
              Connettiti con altri giocatori, partecipa a eventi live e trova compagni di squadra per le prossime sfide.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90"><Users className="mb-2" /> 10k+ membri</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90"><MessageSquareMore className="mb-2" /> Forum & chat</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90"><Rocket className="mb-2" /> Eventi mensili</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 backdrop-blur-xl p-2">
              <div className="h-full w-full rounded-xl bg-[#0f0722] flex items-center justify-center text-white/70">
                <span className="text-center px-6">Visual di community, server Discord, eventi live e contenuti esclusivi.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
