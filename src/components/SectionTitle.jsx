import { motion } from 'framer-motion'

/**
 * Signature element: section headers are styled like a code comment,
 * e.g. "// 02  skills.js" — reinforcing the developer subject matter
 * instead of a generic numbered-circle eyebrow.
 */
export default function SectionTitle({ tag, file, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl`}
    >
      <p className="section-tag mb-3">
        <span className="text-textSecondary/60">// </span>
        {tag}
        {file && <span className="text-textSecondary/50">  {file}</span>}
      </p>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-textSecondary text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-20 bg-gradient-to-r from-primary via-secondary to-transparent" />
    </motion.div>
  )
}
