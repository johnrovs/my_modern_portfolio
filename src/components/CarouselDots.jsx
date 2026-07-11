import { motion } from 'framer-motion'

/**
 * Dot indicators showing total slide count and current position.
 * Each dot is a real button so the carousel is keyboard/screen-reader navigable.
 */
export default function CarouselDots({ count, active, onSelect, labelPrefix = 'Slide' }) {
  return (
    <div className="flex items-center justify-center gap-2.5" role="tablist" aria-label={`${labelPrefix} navigation`}>
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === active
        return (
          <button
            key={i}
            role="tab"
            aria-selected={isActive}
            aria-label={`${labelPrefix} ${i + 1} of ${count}`}
            onClick={() => onSelect(i)}
            className="relative h-2.5 flex items-center focus-visible:outline-none group"
          >
            <span
              className={`block h-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-7 bg-gradient-to-r from-primary to-accent'
                  : 'w-2.5 bg-white/20 group-hover:bg-white/40'
              }`}
            />
            {isActive && (
              <motion.span
                layoutId="active-dot-ring"
                className="absolute -inset-1.5 rounded-full ring-1 ring-accent/40"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
