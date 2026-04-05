import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    color: '#7c3aed',
    skills: ['C#', 'JavaScript', 'Java', 'Python', 'Go Lang'],
  },
  {
    title: 'Frontend',
    icon: '◈',
    color: '#06b6d4',
    skills: ['React', 'Redux', 'HTML5', 'CSS3', 'GraphQL'],
  },
  {
    title: 'Backend',
    icon: '⟁',
    color: '#f59e0b',
    skills: ['Node.js', 'REST API', 'Kafka', 'Spring Boot'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '⬡',
    color: '#10b981',
    skills: ['Docker', 'Azure AKS', 'AWS', 'Kubernetes'],
  },
  {
    title: 'Databases',
    icon: '◫',
    color: '#ec4899',
    skills: ['MySQL', 'MongoDB', 'Cosmos DB', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'AI & Others',
    icon: '✦',
    color: '#a78bfa',
    skills: ['MCP', 'Copilot', 'Claude AI', 'RPA', 'Tableau'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>

        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-category glass-card"
              style={{ '--cat-color': cat.color }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="cat-header">
                <span className="cat-icon" style={{ color: cat.color }}>{cat.icon}</span>
                <h3 className="cat-title" style={{ color: cat.color }}>{cat.title}</h3>
              </div>
              <div className="skill-pills">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    className="skill-pill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
