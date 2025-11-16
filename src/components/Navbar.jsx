import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Gamepad2, LogIn, UserPlus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Live', to: '/live' },
  { label: 'Podcast', to: '/podcast' },
  { label: 'Articoli', to: '/articles' },
  { label: 'Business', to: '/business' },
  { label: 'Custom', to: '/custom-section' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-[0_0_25px_rgba(124,58,237,0.25)]"
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-violet-600 text-white shadow-lg">
              <Gamepad2 size={22} />
            </span>
            <span className="text-white font-semibold tracking-wide">HealPlay</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm rounded-xl transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="inline-flex items-center">
                    {item.label}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-violet-600/20 border border-white/10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </span>
                )}
              </NavLink>
            ))}

            <div className="mx-2 h-6 w-px bg-white/10" />

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              <LogIn size={18} />
              Accedi
            </NavLink>
            <Link
              to="/register"
              className="ml-1 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-4 py-2 text-white text-sm font-medium shadow-lg hover:shadow-fuchsia-500/30 transition-shadow"
            >
              <UserPlus size={18} />
              Inizia ora
            </Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_0_25px_rgba(124,58,237,0.25)]"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.05 } },
              }}
              className="flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <motion.div key={item.to} variants={{ hidden: { y: 6, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block w-full rounded-xl px-3 py-2 ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-fuchsia-500/20 to-violet-600/20 border border-white/10'
                          : 'text-white/90 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}

              <div className="my-2 h-px w-full bg-white/10" />

              <motion.div variants={{ hidden: { y: 6, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="flex items-center gap-2">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-white/90 hover:text-white border border-white/10"
                >
                  <LogIn size={18} />
                  Accedi
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-3 py-2 text-white font-medium shadow-lg"
                >
                  <UserPlus size={18} />
                  Inizia
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
