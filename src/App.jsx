import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, ExternalLink, Code, Brain, Database, Award, ChevronRight, Menu, X, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const projects = [
    {
      title: 'Bias Audit and Mitigation',
      description: 'Comprehensive bias audit of ML models using AI Fairness 360 and Fairlearn. Implemented pre-processing (Reweighing) and post-processing (Reject Option Classification) techniques to mitigate gender bias in income prediction.',
      technologies: ['Python', 'AI Fairness 360', 'Fairlearn', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/Lutho123-Pe/Bias-Report-Notebook',
      achievements: ['Quantified bias using Statistical Parity Difference, Equal Opportunity Difference, and Average Odds Difference', 'Successfully reduced bias while maintaining model accuracy', 'Developed reproducible workflow for bias auditing'],
      featured: true
    },
    {
      title: 'AI Resume Builder',
      description: 'AI-powered resume generator using NLP to analyze user inputs and automatically generate professional summaries and relevant keywords. Optimized for Applicant Tracking Systems (ATS).',
      technologies: ['Python', 'OpenAI API', 'NLTK', 'Pandas', 'Streamlit', 'Next.js'],
      github: 'https://github.com/Lutho123-Pe/Resume-Builder',
      liveDemo: 'https://vercel.com/alus-projects-4e1ab409/v0-new-chat',
      achievements: ['Automated resume generation reducing preparation time by 70%', 'Integrated NLP for keyword optimization', 'Deployed full-stack application with modern UI'],
      featured: true
    },
    {
      title: 'StudyBuddy (AI Learning Assistant)',
      description: 'Intelligent study assistant with concept explanations, quiz generation, flashcards, and adaptive question recommendations. Features RAG architecture for contextual understanding and voice note transcription.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Streamlit', 'Gradio', 'Plotly'],
      github: 'https://github.com/Lutho123-Pe/Study-Buddy-Assistant',
      achievements: ['Implemented RAG-based contextual Q&A system', 'Automated flashcard generation from documents', 'Integrated speech-to-text for voice notes', 'Built progress tracking with interactive visualizations'],
      featured: true
    }
  ]

  const skills = {
    'Programming Languages': ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    'AI/ML Tools': ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'AI Fairness 360', 'Fairlearn'],
    'Web Development': ['React', 'Next.js', 'Flask', 'Streamlit', 'Tailwind CSS'],
    'Databases': ['MySQL', 'SQLite'],
    'Tools & Platforms': ['Git/GitHub', 'Jupyter', 'Google Cloud', 'AWS', 'Vercel', 'MS Office']
  }

  const certifications = [
    { name: 'Advanced Learning Algorithms', issuer: 'DeepLearning.AI / Stanford University', date: 'Sep 2025' },
    { name: 'Generative AI with Large Language Models', issuer: 'DeepLearning.AI / AWS', date: 'Sep 2025' },
    { name: 'Supervised Machine Learning', issuer: 'DeepLearning.AI / Stanford University', date: 'Sep 2025' },
    { name: 'Trustworthy AI: Managing Bias, Ethics, and Accountability', issuer: 'Johns Hopkins University', date: 'Oct 2025' },
    { name: 'AI Foundations: Prompt Engineering with ChatGPT', issuer: 'Arizona State University', date: 'Sep 2025' },
    { name: 'Python for Data Science, AI & Development', issuer: 'IBM', date: 'Sep 2025' }
  ]

  const experience = [
    {
      title: 'Software Testing & Cybersecurity Programme Participant',
      company: 'Capaciti',
      location: 'Gqeberha, South Africa',
      period: 'Aug 2025 – Present',
      responsibilities: [
        'Engaged in an intensive, industry-aligned programme focusing primarily on Software Testing within the Gqeberha branch.',
        'Developed practical skills in manual and automated testing, bug reporting, and test case design.',
        'Applied Agile and Scrum principles in collaborative project environments.',
        'Gained exposure to foundational cybersecurity concepts, emphasizing secure testing practices and data protection.',
        'Strengthened analytical thinking, problem-solving, and documentation skills essential for software quality assurance.'
      ]
    }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Alulutho Tokwe
          </motion.h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
          >
            {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <img 
                src="/Profile.jpg" 
                alt="Alulutho Tokwe" 
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-lg"
              />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI/ML Engineer & Developer
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Passionate about using technology to solve business and societal problems. Specializing in artificial intelligence, machine learning, and ethical AI development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection('projects')}>
                View Projects
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </Button>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://github.com/Lutho123-Pe" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/lutho-alulutho-84a122295" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="mailto:tokwealulutho@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                  I am a motivated ICT graduate from IIE Rosebank College with a Diploma in Information Technology in Management. My passion lies in leveraging technology to create innovative solutions that address real-world challenges in business and society.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                  With specialized training in artificial intelligence and machine learning from leading institutions including Stanford University, DeepLearning.AI, Johns Hopkins University, and IBM, I have developed a strong foundation in both the technical and ethical aspects of AI development.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                  My expertise spans system analysis, web development, and project management, with a growing specialization in AI-driven software development. I am particularly focused on developing trustworthy AI systems that prioritize fairness, transparency, and accountability.
                </p>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-600">
                  <p className="text-lg italic text-slate-700 dark:text-slate-300">
                    "As a tech-driven problem solver, I aim to combine data, AI, and strategic thinking to deliver solutions that improve business performance and user experience."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-8 text-center">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 hover:border-blue-500 transition-colors">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2">
                            <Briefcase size={20} className="text-blue-600" />
                            {job.title}
                          </CardTitle>
                          <CardDescription className="text-base mt-1">
                            <span className="font-medium">{job.company}</span> | {job.location}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="md:mt-0 w-fit">
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-slate-700 dark:text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-12 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-500">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        {project.featured && (
                          <Badge variant="default" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Code size={16} />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Award size={16} />
                            Key Achievements
                          </h4>
                          <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                            {project.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button variant="outline" size="sm" className="flex-1" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github size={16} className="mr-2" />
                              Code
                            </a>
                          </Button>
                          {project.liveDemo && (
                            <Button size="sm" className="flex-1" asChild>
                              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={16} className="mr-2" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-12 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-2 hover:border-blue-500 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category === 'AI/ML Tools' && <Brain size={20} className="text-blue-600" />}
                        {category === 'Programming Languages' && <Code size={20} className="text-blue-600" />}
                        {category === 'Databases' && <Database size={20} className="text-blue-600" />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-12 text-center">Certifications & Training</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{cert.name}</h4>
                          <p className="text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                        </div>
                        <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">
                          {cert.date}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 text-white">Let's Work Together</h3>
            <p className="text-xl text-blue-100 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:tokwealulutho@gmail.com" className="flex items-center gap-2">
                  <Mail size={20} />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <a href="https://linkedin.com/in/lutho-alulutho-84a122295" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-slate-300">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 Alulutho Tokwe. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Lutho123-Pe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/lutho-alulutho-84a122295" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:tokwealulutho@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
