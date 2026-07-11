import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false)
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="relative glass-card p-4 flex flex-col items-center gap-3 cursor-default"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-bg-deep border border-white/10 text-xs font-medium text-white shadow-lg z-10"
          >
            {skill.level}% proficient
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={hovered ? { scale: 1.15, rotate: 6 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5"
      >
        <Icon size={24} style={{ color: skill.color }} />
      </motion.div>

      <p className="text-sm font-medium text-textPrimary text-center">{skill.name}</p>

      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  )
}
