import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function TimelineItem({ item, index, isLast }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative grid md:grid-cols-2 gap-6 md:gap-12">
      {/* connector line + dot (desktop, centered) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10">
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-primary/60 to-transparent" />}
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center ring-4 ring-bg z-10"
      >
        <Briefcase size={16} className="text-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className={`glass-card p-6 sm:p-7 mb-10 md:mb-16 ${
          isEven ? 'md:col-start-1' : 'md:col-start-2'
        }`}
      >
        <div className="md:hidden flex items-center gap-2 mb-3">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Briefcase size={14} className="text-white" />
          </span>
          <span className="font-mono text-xs text-accent">{item.duration}</span>
        </div>

        <p className="hidden md:block font-mono text-xs text-accent mb-2">{item.duration}</p>
        <h3 className="font-heading font-bold text-lg sm:text-xl text-white">{item.position}</h3>
        <p className="text-textSecondary font-medium">{item.company}</p>

        <ul className="mt-4 space-y-2">
          {item.responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-textSecondary">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-textSecondary"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
