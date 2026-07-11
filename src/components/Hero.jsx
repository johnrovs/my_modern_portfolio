import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowDown } from 'lucide-react'
import AnimatedBackground from './AnimatedBackground'
import ParticleBackground from './ParticleBackground'
import ResumeButton from './ResumeButton'
import SocialLinks from './SocialLinks'
import { useTypewriter } from '../hooks/useTypewriter'

const roles = [
  'Software Developer',
  'System Developer',
  'Java Developer',
  'Web Developer',
]

export default function Hero() {
  const typed = useTypewriter(roles)
  const containerRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x, y })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 px-6 sm:px-10 lg:px-16"
    >
      <AnimatedBackground />
      <ParticleBackground count={50} />

      <div className="relative z-10 mx-auto max-w-7xl w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left: intro copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="text-sm font-medium text-textSecondary">Available for Work</span>
          </motion.div>

          <p className="font-mono text-accent text-sm sm:text-base mb-3">Hi, I'm</p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
            John Rommel <span className="text-gradient">Rovero</span>
          </h1>

          <div className="mt-4 h-10 sm:h-12 font-display text-xl sm:text-2xl lg:text-3xl text-textSecondary flex items-center">
            <span className="text-white/90">{typed}</span>
            <span className="w-[3px] h-6 sm:h-8 bg-accent ml-1 animate-blink" />
          </div>

          <p className="mt-6 max-w-xl text-textSecondary text-base sm:text-lg leading-relaxed">
            I build scalable, high-performance web applications with Java, Spring, MySQL, and modern web technologies.
          </p>

          <div className="mt-4 flex items-center gap-2 text-textSecondary text-sm">
            <MapPin size={16} className="text-accent" />
            Las Vegas,NV · Open to remote work
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ResumeButton />
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-secondary"
            >
              View Projects
            </motion.button>
          </div>

          <SocialLinks className="mt-8" />
        </motion.div>

        {/* Right: signature terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{
            transform: `perspective(1000px) rotateY(${tilt.x * 6}deg) rotateX(${-tilt.y * 6}deg)`,
          }}
          className="relative transition-transform duration-300 ease-out"
        >
          <div className="gradient-border glass-card overflow-hidden animate-glow">
            {/* window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-textSecondary/70">
                developer.json
              </span>
            </div>

            <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed">
              <p className="text-textSecondary/50">{'{'}</p>
              <p className="pl-4">
                <span className="text-accent">"name"</span>
                <span className="text-textSecondary/60">:</span>{' '}
                <span className="text-secondary">"John Rommel Rovero"</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">"role"</span>
                <span className="text-textSecondary/60">:</span>{' '}
                <span className="text-secondary">"Software Developer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">"stack"</span>
                <span className="text-textSecondary/60">:</span> [
              </p>
              {['Java', 'Spring', 'HTML','CSS', 'MySQL'].map((t) => (
                <p key={t} className="pl-8 text-primary">
                  "{t}",
                </p>
              ))}
              <p className="pl-4">],</p>
              <p className="pl-4">
                <span className="text-accent">"status"</span>
                <span className="text-textSecondary/60">:</span>{' '}
                <span className="text-success">"available"</span>
              </p>
              <p className="text-textSecondary/50">{'}'}</p>
            </div>

            {/* profile photo pinned to corner */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-br from-primary via-secondary to-accent"
              >
                <img
                  src="john_3.jpg"
                  alt="Portrait of John Rommel Rovero"
                  className="w-full h-full object-cover rounded-2xl border-2 border-bg"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-textSecondary/70 hover:text-white transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  )
}
