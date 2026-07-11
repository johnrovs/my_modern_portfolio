import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import SkillCard from './SkillCard'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].title)
  const active = skillCategories.find((c) => c.title === activeTab)

  return (
    <section id="skills" className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          tag="02"
          file="skills.js"
          title="Technical Skills"
          subtitle="Tools and technologies I use to design, build, and ship full stack applications."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300 ${
                activeTab === cat.title
                  ? 'text-white'
                  : 'text-textSecondary hover:text-white glass'
              }`}
            >
              {activeTab === cat.title && (
                <motion.span
                  layoutId="skills-tab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{cat.title}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {active.items.map((skill, i) => (
            <SkillCard key={skill.name + i} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
