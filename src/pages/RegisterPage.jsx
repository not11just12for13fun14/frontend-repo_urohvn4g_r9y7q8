import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })

  const submit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirm) {
      alert('Le password non coincidono')
      return
    }
    alert('Registrazione inviata (mock).')
  }

  return (
    <div className="min-h-screen bg-[#0a0218]">
      <Navbar />
      <section className="relative bg-[#0a0218] pt-28 pb-16">
        <div className="relative mx-auto max-w-md px-6">
          <h1 className="text-4xl font-extrabold text-white text-center">Registrati</h1>
          <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div>
              <label className="block text-white/80 mb-1">Nome</label>
              <input required value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="Il tuo nome" />
            </div>
            <div>
              <label className="block text-white/80 mb-1">Email</label>
              <input type="email" required value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="tu@esempio.it" />
            </div>
            <div>
              <label className="block text-white/80 mb-1">Password</label>
              <input type="password" required minLength={6} value={form.password} onChange={e=>setForm({ ...form, password: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="********" />
            </div>
            <div>
              <label className="block text-white/80 mb-1">Conferma Password</label>
              <input type="password" required minLength={6} value={form.confirm} onChange={e=>setForm({ ...form, confirm: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="********" />
            </div>
            <button className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 text-white font-semibold">Crea account</button>
          </form>

          <p className="mt-6 text-center text-white/70">Hai già un account? <a href="/login" className="text-fuchsia-400">Accedi</a></p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
