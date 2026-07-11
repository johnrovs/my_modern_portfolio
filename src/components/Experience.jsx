import SectionTitle from './SectionTitle'
import TimelineItem from './TimelineItem'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="relative section-pad">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          tag="04"
          file="experience.js"
          title="Experience"
          subtitle="Where I've worked and what I've built along the way."
        />

        <div>
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
