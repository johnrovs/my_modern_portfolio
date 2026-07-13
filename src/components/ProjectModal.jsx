import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink, FileText } from "lucide-react";
import { isFilled } from "../utils/isFilled";

export default function ProjectModal({ project, onClose }) {
  const hasDemo = project ? isFilled(project.demo) : false;
  const hasDocs = project ? isFilled(project.documentation) : false;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-deep/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full aspect-video object-cover"
              />
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg-deep/80 flex items-center justify-center text-white hover:bg-bg-deep"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-heading font-bold text-2xl text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-textSecondary leading-relaxed">
                {project.description}
              </p>

              <h4 className="mt-6 font-heading font-semibold text-white text-sm uppercase tracking-wide">
                Key Features
              </h4>
              <ul className="mt-3 space-y-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-textSecondary"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-textSecondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {/* <a
                               href={project.github}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="btn-secondary text-sm"
                             >
                               <Github size={16} /> View Code
                             </a> */}
                {hasDemo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    <ExternalLink size={16} /> View Project
                  </a>
                )}
                {hasDocs && (
                  <a
                    href={project.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <FileText size={16} /> View Documentation
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
