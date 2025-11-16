import { useState } from 'react'
import { Menu, X, Gamepad2 } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Programmi', href: '#programs' },
  { label: 'Community', href: '#community' },
  { label: 'Testimonianze', href: '#testimonials' },
  { label: 'Contatti', href: '#cta' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-[0_0_25px_rgba(124,58,237,0.25)]">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-violet-600 text-white shadow-lg">
              <Gamepad2 size={22} />
            </span>
            <span className="text-white font-semibold tracking-wide">HealPlay</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="ml-4 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-4 py-2 text-white font-medium shadow-lg hover:shadow-fuchsia-500/30 transition-shadow">
              Inizia ora
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-white/90 py-2">
                {item.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-4 py-2 text-white text-center font-medium shadow-lg">
              Inizia ora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
