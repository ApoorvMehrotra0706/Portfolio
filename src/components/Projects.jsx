import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'No-Code Web Dev Platform',
    period: 'Fall 2021',
    description: 'A MERN stack platform for SMBs to bring their business online with UI-level website customization. Deployed on Heroku & AWS handling 50k req/sec.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Heroku', 'AWS'],
    color: '#7c3aed',
    featured: true,
    github: 'https://github.com/ApoorvMehrotra0706/SAPS-NoCodeWebPortalApplication-Frontend/tree/master',
  },
  {
    title: 'Glassdoor Prototype',
    period: 'Fall 2020',
    description: 'Distributed MERN-stack clone of Glassdoor with an analytics dashboard, Redis caching for 10k concurrent users, and Apache Kafka for fault-tolerant high-throughput processing.',
    tech: ['React', 'Node.js', 'Redis', 'Kafka', 'MongoDB'],
    color: '#06b6d4',
    featured: true,
    github: 'https://github.com/ApoorvMehrotra0706/GlassdoorPrototype',
  },
  {
    title: 'Currency Remittance App',
    period: 'Fall 2020',
    description: 'Full-stack direct exchange currency remittance app with Spring Boot backend, React frontend, OAuth (Google/Facebook), and AWS API Gateway deployment.',
    tech: ['Java', 'Spring Boot', 'React', 'AWS', 'OAuth', 'Heroku'],
    color: '#f59e0b',
    featured: false,
    github: 'https://github.com/ApoorvMehrotra0706/CurrencyRemittance',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>

        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
              style={{ '--proj-color': project.color }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-top">
                <div className="project-icon" style={{ color: project.color }}>
                  {project.featured ? '★' : '◆'}
                </div>
                <div className="project-top-right">
                  <span className="project-period">{project.period}</span>
                  <FiGithub className="project-github" style={{ color: project.color }} />
                </div>
              </div>
              <h3 className="project-title" style={{ color: project.color }}>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="proj-tech-tag">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
