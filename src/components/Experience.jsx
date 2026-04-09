import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import './Experience.css'

const jobs = [
  {
    chapter: '01',
    company: 'Microsoft',
    initial: 'M',
    role: 'Software Engineer II',
    location: 'Mountain View, CA',
    period: 'Apr 2022 – Present',
    color: '#06b6d4',
    metric: '5×',
    metricLabel: 'scale',
    narrative:
      'Built and scaled Azure Arc connectivity infrastructure — from caching layers to AI-powered incident tooling — serving globally distributed agents at 99.9% SLA.',
    tech: ['C#', 'Go', 'Kubernetes', 'Azure', 'Redis', 'Cosmos DB', 'MCP', 'Claude'],
    details: [
      'Added caching for receiver token retrieval in Arc Agents → 75% faster response time.',
      'Implemented GA APIs with Swagger documentation and usage metrics.',
      'Designed automated scale-out solution → 27% reliability score improvement.',
      'Created Azure Arc Connectivity QoS dashboards → 99.9% SLA achieved.',
      'Redesigned service architecture → 5× load handling capacity.',
      'Developed an AI Assistant and MCP server for production incident debugging.',
    ],
  },
  {
    chapter: '02',
    company: 'TIBCO Software',
    initial: 'T',
    role: 'Software Engineering Intern',
    location: 'Palo Alto, CA',
    period: 'May 2021 – Aug 2021',
    color: '#7c3aed',
    metric: '75%',
    metricLabel: 'less effort',
    narrative:
      'Shipped a Python automation tool that eliminated 75% of manual database integration work and seeded 5 downstream product initiatives from a single POC.',
    tech: ['Python', 'RPA', 'AWS EC2', 'MySQL', 'PostgreSQL', 'MS SQL Server'],
    details: [
      'Researched open-source RPA frameworks for database serialization use cases.',
      'Built Python tool integrating disparate databases — 75% reduction in manual effort.',
      'Delivered database serialization POC that became the baseline for 5 new initiatives.',
    ],
  },
  {
    chapter: '03',
    company: 'Tata Consultancy Services',
    initial: 'T',
    role: 'Full Stack Software Developer',
    location: 'Lucknow, India',
    period: 'Mar 2014 – Dec 2019',
    color: '#f59e0b',
    metric: '80%',
    metricLabel: 'faster',
    narrative:
      'Owned full-stack Java microservices for enterprise data storage clients, slashing turnaround time by 80% through targeted refactoring and deep database optimisation.',
    tech: ['Java', 'JavaScript', 'REST API', 'PostgreSQL', 'Docker', 'Jenkins', 'Python'],
    details: [
      'Built Java web applications with REST APIs using microservice architecture.',
      'Cut turnaround time 80% by refactoring code and optimising database indexing.',
      'Bridged business units, engineering, and support teams with direct exec reporting.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="experience" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle">where impact was made</p>
        </motion.div>

        <div className="chapters">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              className="chapter"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.2 }}
            >
              <span className="chapter-bg-num" aria-hidden="true">{job.chapter}</span>

              <div className="chapter-card glass-card" style={{ '--job-color': job.color }}>
                {/* Left: metric hero */}
                <div className="chapter-left">
                  <div
                    className="metric-hero"
                    style={{ color: job.color, textShadow: `0 0 40px ${job.color}60` }}
                  >
                    {job.metric}
                  </div>
                  <div className="metric-label">{job.metricLabel}</div>
                  <div
                    className="company-badge"
                    style={{
                      background: `${job.color}18`,
                      border: `1px solid ${job.color}50`,
                      color: job.color,
                    }}
                  >
                    {job.initial}
                  </div>
                </div>

                {/* Right: content */}
                <div className="chapter-right">
                  <div className="chapter-header">
                    <div>
                      <h3 className="job-company" style={{ color: job.color }}>{job.company}</h3>
                      <h4 className="job-role">{job.role}</h4>
                      <p className="job-meta">{job.location} · {job.period}</p>
                    </div>
                    <span className="chapter-label" aria-hidden="true">{job.chapter}</span>
                  </div>

                  <p className="job-narrative">{job.narrative}</p>

                  <div className="job-tech">
                    {job.tech.map(t => (
                      <span key={t} className="tech-badge" style={{ '--badge-color': job.color }}>{t}</span>
                    ))}
                  </div>

                  <button
                    className="details-toggle"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    style={{ color: job.color }}
                    aria-expanded={expanded === i}
                  >
                    {expanded === i ? '▲ Hide details' : '▼ Show details'}
                  </button>

                  <AnimatePresence initial={false}>
                    {expanded === i && (
                      <motion.ul
                        className="detail-bullets"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        {job.details.map((d, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.06 }}
                          >
                            <span style={{ color: job.color }} aria-hidden="true">▹</span> {d}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
