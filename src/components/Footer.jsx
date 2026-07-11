import { SiReact, SiTailwindcss, SiFramer } from 'react-icons/si'
import SocialLinks from './SocialLinks'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <p className="font-display font-bold text-xl text-gradient">{'<JRR />'}</p>
          <p className="mt-3 text-textSecondary text-sm max-w-sm leading-relaxed">
            Software Developer building scalable, high-performance web applications with
            Java, Spring, and MySQL.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        <div>
          <p className="font-heading font-semibold text-white text-sm uppercase tracking-wide mb-4">
            Quick Links
          </p>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="text-sm text-textSecondary hover:text-white transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold text-white text-sm uppercase tracking-wide mb-4">
            Made With
          </p>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2 text-sm text-textSecondary">
              <SiReact className="text-[#61dafb]" size={16} /> React
            </li>
            <li className="flex items-center gap-2 text-sm text-textSecondary">
              <SiTailwindcss className="text-[#38bdf8]" size={16} /> Tailwind CSS
            </li>
            <li className="flex items-center gap-2 text-sm text-textSecondary">
              <SiFramer className="text-white" size={16} /> Framer Motion
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-textSecondary/70">
          © {new Date().getFullYear()} John Rommel Rovero. All rights reserved.
        </p>
        <p className="text-xs text-textSecondary/70 font-mono">Built with intention, line by line.</p>
      </div>
    </footer>
  )
}
