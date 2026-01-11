import { motion } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C/C++', 'Rust', 'JavaScript', 'Go', 'SQL'],
  },
  {
    title: 'ML / AI',
    skills: ['PyTorch', 'TensorFlow', 'JAX', 'Scikit-learn', 'Hugging Face', 'CUDA'],
  },
  {
    title: 'Security',
    skills: ['Cryptography', 'Fuzzing', 'Reverse Engineering', 'Binary Analysis', 'Secure Systems'],
  },
  {
    title: 'Tools & Infrastructure',
    skills: ['Git', 'Docker', 'Linux', 'AWS', 'Kubernetes', 'CI/CD'],
  },
]

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-pills">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
