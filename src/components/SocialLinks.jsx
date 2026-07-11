import { motion } from 'framer-motion'
import { socials } from '../data/socials'

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s, i) => (
        <motion.a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.4 }}
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-11 h-11 rounded-xl glass flex items-center justify-center text-textSecondary hover:text-white hover:border-accent/60 transition-colors duration-300"
        >
          <s.icon size={18} />
        </motion.a>
      ))}
    </div>
  )
}
