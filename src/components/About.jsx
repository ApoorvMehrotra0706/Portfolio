import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '3+', label: 'Companies' },
  { value: '99.9%', label: 'SLA Achieved' },
  { value: '5x', label: 'Scale Improvement' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title"><span className="gradient-text">About</span> Me</h2>

        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>
              I'm a <span className="text-highlight">Software Engineer II at Microsoft</span>, based in San Jose, CA,
              with over a decade of experience building robust, scalable systems that power real-world impact.
            </p>
            <p>
              My work spans cloud infrastructure, AI tooling, and full-stack development. At Microsoft, I've led
              initiatives that improved service reliability by <span className="text-highlight">27%</span>, scaled
              systems <span className="text-highlight">5x</span>, and built AI assistants with MCP servers to
              accelerate production debugging.
            </p>
            <p>
              I hold an MS in Software Engineering from <span className="text-highlight">San Jose State University</span>
              (GPA 3.8) and thrive at the intersection of performance engineering and intelligent systems.
            </p>
            <div className="about-tags">
              {['C#', 'Go', 'React', 'Azure', 'Kubernetes', 'AI/MCP', 'Node.js', 'Python'].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-card glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="stat-value gradient-text">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
