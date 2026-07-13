import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, FileText } from "lucide-react";
import { isFilled } from "../utils/isFilled";

export default function ProjectCard({ project, index, onDetails }) {
  const reversed = index % 2 === 1;
  const hasDocs = isFilled(project.documentation);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="gradient-border glass-card overflow-hidden grid md:grid-cols-2"
    >
      <div
        className={`relative overflow-hidden aspect-video md:aspect-auto ${reversed ? "md:order-2" : ""}`}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
      </div>

      <div className="p-6 sm:p-8 flex flex-col">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-textSecondary text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-4 space-y-2">
          {project.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-textSecondary"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-textSecondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !py-2 !px-4 text-sm"
          >
            <Github size={16} /> GitHub
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-4 text-sm"
          >
            <ExternalLink size={16} /> Live Demo
          </motion.a> */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onDetails(project)}
            className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-accent hover:text-white transition-colors"
          >
            Project Details <ArrowUpRight size={16} />
          </motion.button>

          {/* {hasDocs && (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={project.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-textSecondary hover:text-white transition-colors"
            >
              <FileText size={15} /> View Documentation
            </motion.a>
          )} */}
        </div>
      </div>
    </motion.div>
  );
}
