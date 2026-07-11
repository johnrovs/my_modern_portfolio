import { FileText } from 'lucide-react'

/**
 * Renders the certificate PDF itself as the "picture" — the browser's native
 * PDF viewer draws page 1 inside the box. If the browser/device can't render
 * embedded PDFs (common on mobile), the <object> falls back to its children
 * automatically, so there's always something sensible on screen.
 *
 * The <object> is pointer-events-none so it behaves like a static image
 * (no scrollbars/toolbars to fight with) — the parent element handles clicks.
 */
export default function PdfThumbnail({ src, title, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-bg-deep ${className}`}>
      <object
        data={`${src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        type="application/pdf"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 text-textSecondary px-4 text-center">
          <FileText size={24} className="text-accent" />
          <span className="text-xs font-medium line-clamp-2">{title}</span>
        </div>
      </object>
    </div>
  )
}
