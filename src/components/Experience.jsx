import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Experience.css'

const jobs = [
  {
    company: 'Microsoft',
    role: 'Software Engineer II',
    location: 'Mountain View, CA',
    period: 'April 2022 – Present',
    color: '#06b6d4',
    tech: ['C#', 'Go', 'Kubernetes', 'Azure', 'Redis', 'Cosmos DB', 'MCP', 'Claude'],
    bullets: [
      'Added caching layer for receiver token retrieval in Arc Agents, improving response time by 75%.',
      'Implemented GA APIs, added Swagger to public repo, and added metrics to track usage.',
      'Designed and automated scale-out solution to improve service reliability score by 27%.',
      'Created Azure Arc Connectivity QoS dashboards, achieving 99.9% SLA.',
      'Redesigned service architecture to increase load handling capacity by 5×.',
      'Developed an AI Assistant and MCP server to accelerate production incident debugging.',
    ],
  },
  {
    company: 'TIBCO Software',
    role: 'Software Engineering Intern',
    location: 'Palo Alto, CA',
    period: 'May 2021 – Aug 2021',
    color: '#7c3aed',
    tech: ['Python', 'RPA', 'AWS EC2', 'MySQL', 'PostgreSQL', 'MS SQL Server'],
    bullets: [
      'Researched viable open-source RPA frameworks for database serialization.',
      'Developed a Python-based tool to integrate databases, reducing manual effort by 75%.',
      'Completed POC for database serialization that became the baseline for 5 new initiatives.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Full Stack Software Developer',
    location: 'Lucknow, India',
    period: 'Mar 2014 – Dec 2019',
    color: '#f59e0b',
    tech: ['Java', 'JavaScript', 'REST API', 'PostgreSQL', 'Docker', 'Jenkins', 'Python'],
    bullets: [
      'Developed Java web applications with REST APIs using microservice architecture.',
      'Improved performance by refactoring and indexing, reducing turnaround time by 80%.',
      'Served as liaison between business units, technology teams, and support teams.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle">where i've worked</p>
        </motion.div>

        <div className="timeline">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="timeline-dot" style={{ background: job.color, boxShadow: `0 0 15px ${job.color}` }}></div>
              <div className="timeline-card glass-card">
                <div className="job-header">
                  <div>
                    <h3 className="job-company" style={{ color: job.color }}>{job.company}</h3>
                    <h4 className="job-role">{job.role}</h4>
                    <p className="job-meta">{job.location} · {job.period}</p>
                  </div>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}><span className="bullet-dot" style={{ color: job.color }}>▹</span> {b}</li>
                  ))}
                </ul>
                <div className="job-tech">
                  {job.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
