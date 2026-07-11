import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.map((l) => l.id))

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 mt-3">
        <div className="glass-card flex items-center justify-between px-5 py-3">
          <button
            onClick={() => scrollTo('home')}
            className="font-display font-bold text-lg tracking-tight text-white"
          >
            <span className="text-gradient">{'<JRR />'}</span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    active === l.id
                      ? 'text-white'
                      : 'text-textSecondary hover:text-white'
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <button onClick={() => scrollTo('contact')} className="btn-primary !py-2.5 !px-5 text-sm">
              Let's Talk
            </button>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg glass text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-2"
            >
              <ul className="glass-card flex flex-col p-3 gap-1">
                {links.map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() => scrollTo(l.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        active === l.id
                          ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-white'
                          : 'text-textSecondary hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
