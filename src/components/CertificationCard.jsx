import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

export default function CertificationCard({ cert, index, layout = 'grid' }) {
  if (layout === 'carousel') {
    return (
      <div className="group gradient-border glass-card overflow-hidden grid md:grid-cols-2 h-full">
        <div className="relative overflow-hidden aspect-video md:aspect-auto">
          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            loading="lazy"
            draggable="false"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-bg-deep/70 backdrop-blur flex items-center justify-center">
            <Award size={16} className="text-accent" />
          </div>
        </div>

        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <p className="font-mono text-xs text-accent mb-2">{cert.date}</p>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">{cert.title}</h3>
          <p className="text-textSecondary mt-2">{cert.organization}</p>

          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-white transition-colors w-fit"
          >
            View Credential <ExternalLink size={14} />
          </a>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group gradient-border glass-card overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-bg-deep/70 backdrop-blur flex items-center justify-center">
          <Award size={16} className="text-accent" />
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading font-semibold text-white">{cert.title}</h3>
        <p className="text-sm text-textSecondary mt-1">{cert.organization}</p>
        <p className="text-xs font-mono text-accent mt-2">{cert.date}</p>

        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-textSecondary hover:text-white transition-colors"
        >
          View Credential <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  )
}
