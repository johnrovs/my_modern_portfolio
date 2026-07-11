import { motion } from 'framer-motion'
import { Award, Eye, ExternalLink } from 'lucide-react'
import PdfThumbnail from './PdfThumbnail'

export default function CertificationCard({ cert, index, layout = 'grid', onPreview }) {
  if (layout === 'carousel') {
    return (
      <div className="group gradient-border glass-card overflow-hidden grid md:grid-cols-2 h-full">
        <button
          onClick={() => onPreview?.(cert)}
          aria-label={`Preview ${cert.title} certificate`}
          className="relative block w-full text-left"
        >
          <PdfThumbnail
            src={cert.pdf}
            title={cert.title}
            className="aspect-video md:aspect-auto md:h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-bg-deep/0 group-hover:bg-bg-deep/30 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-deep/80 text-white text-xs font-medium">
              <Eye size={13} /> Preview
            </span>
          </div>
          <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-bg-deep/70 backdrop-blur flex items-center justify-center">
            <Award size={16} className="text-accent" />
          </div>
        </button>

        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <p className="font-mono text-xs text-accent mb-2">{cert.date}</p>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">{cert.title}</h3>
          <p className="text-textSecondary mt-2">{cert.organization}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onPreview?.(cert)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-white transition-colors w-fit"
            >
              <Eye size={14} /> View Certificate
            </button>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-textSecondary hover:text-white transition-colors w-fit"
              >
                Verify Online <ExternalLink size={14} />
              </a>
            )}
          </div>
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
      <button
        onClick={() => onPreview?.(cert)}
        aria-label={`Preview ${cert.title} certificate`}
        className="relative aspect-video overflow-hidden w-full block text-left"
      >
        <PdfThumbnail
          src={cert.pdf}
          title={cert.title}
          className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-bg-deep/0 group-hover:bg-bg-deep/40 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-deep/80 text-white text-xs font-medium">
            <Eye size={13} /> Preview
          </span>
        </div>
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-bg-deep/70 backdrop-blur flex items-center justify-center">
          <Award size={16} className="text-accent" />
        </div>
      </button>

      <div className="p-5">
        <h3 className="font-heading font-semibold text-white">{cert.title}</h3>
        <p className="text-sm text-textSecondary mt-1">{cert.organization}</p>
        <p className="text-xs font-mono text-accent mt-2">{cert.date}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onPreview?.(cert)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-textSecondary hover:text-white transition-colors"
          >
            <Eye size={14} /> View Certificate
          </button>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-textSecondary hover:text-white transition-colors"
            >
              Verify <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
