import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>

        </motion.div>

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="contact-heading">Let's build something <span className="gradient-text">extraordinary</span></h3>
          <p className="contact-sub">
            Whether it's a new opportunity, a project collaboration, or just a chat about tech — my inbox is always open.
          </p>

          <div className="contact-info">
            <a href="mailto:apoorv.mehrotra1991@gmail.com" className="contact-item">
              <FiMail className="contact-icon" />
              <span>apoorv.mehrotra1991@gmail.com</span>
            </a>
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <span>+1 (669) 204-5408</span>
            </div>
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <span>San Jose, CA</span>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/ApoorvMehrotra0706" target="_blank" rel="noopener noreferrer" className="contact-social">
              <FiGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/mehrotraapoorv" target="_blank" rel="noopener noreferrer" className="contact-social">
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
