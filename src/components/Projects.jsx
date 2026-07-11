import { useState } from 'react'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          tag="03"
          file="projects.js"
          title="Featured Projects"
          subtitle="A selection of full stack systems I've designed and built end-to-end."
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onDetails={setSelected} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
