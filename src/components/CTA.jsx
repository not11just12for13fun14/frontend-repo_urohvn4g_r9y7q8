export default function CTA() {
  return (
    <section id="cta" className="relative bg-[#0a0218] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">Pronto a salire di livello?</h2>
        <p className="mt-3 text-white/70">Iscriviti per ricevere anteprime, sfide esclusive e i nostri prossimi eventi.</p>
        <form className="mt-8 mx-auto flex max-w-xl items-center gap-3">
          <input type="email" required placeholder="La tua email" className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-fuchsia-500/30 transition-shadow">
            Iscriviti
          </button>
        </form>
      </div>
    </section>
  )
}
