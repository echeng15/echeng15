import { motion } from 'framer-motion'
import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a graduate student in Computer Science at <span className="text-accent">Duke University</span>, 
                where I focus on the intersection of machine learning and security. My research explores 
                how we can build AI systems that are not only powerful but also robust, secure, and trustworthy.
              </p>
              <p>
                My work spans adversarial machine learning, privacy-preserving computation, and secure 
                systems design. I'm particularly interested in understanding and defending against 
                attacks on ML models, as well as developing new techniques for secure inference.
              </p>
              <p>
                When I'm not in the lab, you'll find me contributing to open-source projects, 
                reading papers, or exploring the intersection of technology and society.
              </p>
              
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Research</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Publications</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="image-wrapper">
                <div className="image-placeholder">
                  <span>Your Photo</span>
                </div>
                <div className="image-border"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
