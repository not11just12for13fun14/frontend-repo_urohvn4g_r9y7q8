import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [twoFA, setTwoFA] = useState(false)
  const [code, setCode] = useState('')

  const submit = (e) => {
    e.preventDefault()
    // Simula invio e attiva 2FA
    setTwoFA(true)
  }

  const verify = (e) => {
    e.preventDefault()
    alert('Login eseguito (mock).')
  }

  return (
    <div className="min-h-screen bg-[#0a0218]">
      <Navbar />
      <section className="relative bg-[#0a0218] pt-28 pb-16">
        <div className="relative mx-auto max-w-md px-6">
          <h1 className="text-4xl font-extrabold text-white text-center">Accedi</h1>
          <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div>
              <label className="block text-white/80 mb-1">Email</label>
              <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="tu@esempio.it" />
            </div>
            <div>
              <label className="block text-white/80 mb-1">Password</label>
              <input type="password" required minLength={6} value={password} onChange={e=>setPassword(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="********" />
            </div>
            <button className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 text-white font-semibold">Continua</button>
          </form>

          {twoFA && (
            <form onSubmit={verify} className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div>
                <label className="block text-white/80 mb-1">Codice 2FA</label>
                <input value={code} onChange={e=>setCode(e.target.value)} pattern="\\d{6}" required className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="123456" />
              </div>
              <button className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 text-white font-semibold">Verifica</button>
            </form>
          )}

          <p className="mt-6 text-center text-white/70">Non hai un account? <a href="/register" className="text-fuchsia-400">Registrati</a></p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
