import SectionTitle from './SectionTitle'
import CertificationCard from './CertificationCard'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          tag="05"
          file="certifications.js"
          title="Certifications"
          subtitle="Credentials that back up the tools and technologies I work with."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
