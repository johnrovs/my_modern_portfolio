import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionTitle from './SectionTitle'
import CertificationCard from './CertificationCard'
import CarouselDots from './CarouselDots'
import { certifications } from '../data/certifications'
import { useCarousel } from '../hooks/useCarousel'

const PER_SLIDE = 3

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
}

const SWIPE_THRESHOLD = 60

// Group certifications into pages of PER_SLIDE, so the carousel shows
// up to 3 certificates per slide and only adds a new slide (and dot)
// once a 4th, 7th, 10th... certification is added.
function chunk(items, size) {
  const groups = []
  for (let i = 0; i < items.length; i += size) {
    groups.push(items.slice(i, i + size))
  }
  return groups
}

export default function Certifications() {
  const slides = chunk(certifications, PER_SLIDE)
  const { index, direction, next, prev, goTo, pause, resume } = useCarousel(
    slides.length,
    { autoPlay: slides.length > 1, interval: 6000 }
  )
  const activeSlide = slides[index]

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) next()
    else if (info.offset.x > SWIPE_THRESHOLD) prev()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  return (
    <section id="certifications" className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          tag="05"
          file="certifications.js"
          title="Certifications"
          subtitle="Credentials that back up the tools and technologies I work with."
        />

        <div
          className="relative"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          onKeyDown={handleKeyDown}
          role="region"
          aria-roledescription="carousel"
          aria-label="Certifications"
        >
          {/* Slide count + arrows */}
          {slides.length > 1 && (
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-xs text-textSecondary/60">
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </p>
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous certifications"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-textSecondary hover:text-white hover:border-accent/60 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next certifications"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-textSecondary hover:text-white hover:border-accent/60 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Slide viewport */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeOut' }}
                drag={slides.length > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className={slides.length > 1 ? 'cursor-grab active:cursor-grabbing' : ''}
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeSlide.map((cert, i) => (
                    <CertificationCard key={cert.id} cert={cert} index={i} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {slides.length > 1 && (
            <>
              {/* Mobile arrows */}
              <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
                <button
                  onClick={prev}
                  aria-label="Previous certifications"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-textSecondary hover:text-white"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next certifications"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-textSecondary hover:text-white"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Dot indicators — one dot per slide (page of 3) */}
              <div className="mt-8">
                <CarouselDots
                  count={slides.length}
                  active={index}
                  onSelect={goTo}
                  labelPrefix="Certifications page"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
