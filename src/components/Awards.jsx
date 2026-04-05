import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Awards.css'

const awards = [
  {
    title: 'Azure Core Quality Champ',
    org: 'Microsoft',
    description: 'Won for automating Arc connectivity migrations, boosting service reliability and achieving consistent SLA targets.',
    icon: '🏆',
    color: '#06b6d4',
  },
  {
    title: 'Star Performer Award',
    org: 'NetApp (via TCS)',
    description: 'Awarded for delivering a priority feature ahead of deadline, demonstrating exceptional speed and code quality under pressure.',
    icon: '⭐',
    color: '#f59e0b',
  },
  {
    title: 'Technical Excellence Award',
    org: 'Tata Consultancy Services',
    description: 'Recognized for mastering multiple new technologies and delivering high-impact solutions across client projects.',
    icon: '💎',
    color: '#7c3aed',
  },
]

export default function Awards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="awards" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Awards &amp; <span className="gradient-text">Recognition</span></h2>
          <p className="section-subtitle">milestones & achievements</p>
        </motion.div>

        <div className="awards-grid">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              className="award-card glass-card"
              style={{ '--award-color': award.color }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="award-icon">{award.icon}</div>
              <h3 className="award-title" style={{ color: award.color }}>{award.title}</h3>
              <p className="award-org">{award.org}</p>
              <p className="award-desc">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
