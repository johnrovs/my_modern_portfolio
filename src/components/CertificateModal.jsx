import { AnimatePresence, motion } from 'framer-motion'
import { X, Download, ExternalLink, FileWarning } from 'lucide-react'
import { useState } from 'react'

export default function CertificateModal({ cert, onClose }) {
  const [failed, setFailed] = useState(false)

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-deep/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${cert.title} certificate preview`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-white/10 shrink-0">
              <div className="min-w-0">
                <h3 className="font-heading font-semibold text-white truncate">{cert.title}</h3>
                <p className="text-xs text-textSecondary mt-0.5 truncate">{cert.organization}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open certificate in a new tab"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-textSecondary hover:text-white hover:border-accent/60 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
                <a
                  href={cert.pdf}
                  download
                  aria-label="Download certificate PDF"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-textSecondary hover:text-white hover:border-accent/60 transition-colors"
                >
                  <Download size={16} />
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close preview"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-textSecondary hover:text-white hover:border-accent/60 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* PDF preview */}
            <div className="relative flex-1 min-h-[60vh] bg-bg-deep">
              {!failed ? (
                <iframe
                  key={cert.pdf}
                  src={`${cert.pdf}#toolbar=0`}
                  title={`${cert.title} certificate PDF`}
                  className="w-full h-full min-h-[60vh]"
                  onError={() => setFailed(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 h-full min-h-[60vh] text-center px-6">
                  <FileWarning size={28} className="text-accent" />
                  <p className="text-textSecondary text-sm max-w-xs">
                    This PDF can't be previewed inline in your browser. Open it in a new tab or
                    download it instead.
                  </p>
                </div>
              )}
            </div>

            {/* Mobile-friendly note — many mobile browsers can't render PDFs inside an iframe */}
            <p className="sm:hidden px-5 py-3 text-xs text-textSecondary/60 border-t border-white/10 text-center">
              Having trouble viewing the preview? Use the download or open-in-new-tab icons above.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
