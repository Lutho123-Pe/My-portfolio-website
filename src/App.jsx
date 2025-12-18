import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, ExternalLink, Code, Brain, Database, Award, ChevronRight, Menu, X, Briefcase, Download, Shield, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [activeCertificate, setActiveCertificate] = useState(null)
  const [showCertificateModal, setShowCertificateModal] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [showResumePreview, setShowResumePreview] = useState(false)

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
      liveDemo: 'https://v0-new-chat-delta-ebon.vercel.app/',
      achievements: ['Automated resume generation reducing preparation time by 70%', 'Integrated NLP for keyword optimization', 'Deployed full-stack application with modern UI'],
      featured: true
    },
    {
      title: 'StudyMate-edu-bot',
      description: 'Intelligent study assistant with concept explanations, quiz generation, flashcards, and adaptive question recommendations. Features RAG architecture for contextual understanding and voice note transcription.',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'AI SDK', 'Groq API', 'PDF.js', 'Recharts', 'Radix UI'],
      github: 'https://github.com/Lutho123-Pe/study-mate-edu-bot-fv',
      liveDemo: 'https://v0-study-mate-edu-bot.vercel.app/',
      achievements: ['Implemented RAG-based contextual Q&A system', 'Created interactive flashcards and quizzes', 'Built Pomodoro timer for productivity', 'Developed progress tracking with visualizations'],
      featured: true
    },
    {
      title: 'OrangeHRM Test Automation',
      description: 'Selenium WebDriver test automation for OrangeHRM demo platform, covering Week 3 requirements and verifying bugs from manual testing reports. This project demonstrates automated testing capabilities by validating both functionality and identified defects from previous manual testing phases.',
      technologies: ['Python', 'Selenium WebDriver 4.15.0', 'pytest', 'pytest-html', 'Chrome WebDriver', 'Page Object Model (POM)'],
      github: 'https://github.com/Lutho123-Pe/OrangeHRM',
      achievements: ['Implemented 6 comprehensive test cases covering login functionality, security vulnerabilities, and form submission', 'Automated detection of 3 critical bugs: missing password reset link, username case insensitivity, and form submission issues', 'Achieved 67% test pass rate with 100% success for intended functionality', 'Generated detailed HTML test reports with pytest-html for comprehensive test documentation'],
      featured: true
    }
  ]

  const skills = {
    'Programming Languages': ['Python', 'SQL', 'Java', 'JavaScript', 'HTML', 'CSS', 'TypeScript'],
    'AI/ML Tools': ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'AI Fairness 360', 'Fairlearn', 'Groq API'],
    'Web Development': ['React', 'Next.js', 'Flask', 'Streamlit', 'Tailwind CSS', 'Radix UI'],
    'Testing & Security': ['Manual Testing', 'Test Case Design', 'Bug Reporting', 'Secure Testing', 'Data Protection', 'Automated Software Testing', 'Black-box Testing', 'White-box Testing', 'Selenium Testing', 'Software Testing Life Cycle (STLC)', 'Software Development Life Cycle (SDLC)'],
    'Tools & Platforms': ['Git/GitHub', 'Jupyter', 'Google Cloud', 'AWS', 'Vercel', 'MS Office'],

    'IT & Support': ['System Analysis', 'IT Customer Support', 'Help Desk Support', 'Network Fundamentals', 'Knowledge Management', 'Risk Management', 'Databases'],
    'Additional Skills': ['Attention to Detail', 'Artificial Intelligence (AI)', 'Customer Support', 'Technical Support']
  }

  const certifications = [
    { 
      name: 'Advanced Learning Algorithms', 
      issuer: 'DeepLearning.AI / Stanford University', 
      date: 'Sep 2025',
      file: 'certificates/Advanced Learning algorithms.pdf',
      image: 'certificate_images/Advanced Learning algorithms.PNG'
    },
    { 
      name: 'Generative AI with Large Language Models', 
      issuer: 'DeepLearning.AI / AWS', 
      date: 'Sep 2025',
      file: 'certificates/Generative AI with Large Language Models.pdf',
      image: 'certificate_images/Generative AI with Large Language Models.PNG'
    },
    { 
      name: 'Supervised Machine Learning', 
      issuer: 'DeepLearning.AI / Stanford University', 
      date: 'Sep 2025',
      file: 'certificates/Supervised Machine Learning.pdf',
      image: 'certificate_images/Superised Machine Learning Regression and Classification.PNG'
    },
    { 
      name: 'Trustworthy AI: Managing Bias, Ethics, and Accountability', 
      issuer: 'Johns Hopkins University', 
      date: 'Oct 2025',
      file: 'certificates/Trustworthy AI Managing Bias, Ethics, and Accountability.pdf',
      image: 'certificate_images/Trustworthy AI Managing Bias, Ethics, and Accountability.PNG'
    },
    { 
      name: 'AI Foundations: Prompt Engineering with ChatGPT', 
      issuer: 'Arizona State University', 
      date: 'Sep 2025',
      file: 'certificates/Prompt Engineering with ChatGPT.pdf',
      image: 'certificate_images/AI Foundations  Prompt Engineering with Chatgpt.PNG'
    },
    { 
      name: 'Python for Data Science, AI & Development', 
      issuer: 'IBM', 
      date: 'Sep 2025',
      file: 'certificates/Python for Data Science, AI & Development.pdf',
      image: 'certificate_images/Python for Data Science, AI & Development.PNG'
    },
    { 
      name: 'Introduction to Responsible AI', 
      issuer: 'Google Cloud', 
      date: 'Sep 2025',
      file: 'certificates/Introduction to Responsible AI.pdf',
      image: 'certificate_images/Introduction to Responsible AI.PNG'
    },

    { 
      name: 'AI Essentials', 
      issuer: 'Intel', 
      date: 'Aug 2025',
      file: 'certificates/AI Essentials.pdf',
      image: 'certificate_images/AI Essentials.PNG'
    },
    { 
      name: 'IT Customer Support Basics', 
      issuer: 'Cisco', 
      date: 'Nov 2025',
      file: 'certificates/IT Customer Support Basics.pdf',
      image: 'certificate_images/IT Customer Support Basics.PNG'
    },
    { 
      name: 'Web and Mobile Testing with Selenium', 
      issuer: 'University of Minnesota', 
      date: 'Nov 2025',
      file: 'certificates/Web and Mobile Testing with Selenium.pdf',
      image: 'certificate_images/Web and Mobile Testing with Selenium.PNG'
    },
    { 
      name: 'Black-box and White-box Testing', 
      issuer: 'University of Minnesota', 
      date: 'Oct 2025',
      file: 'certificates/Black-box and White-box Testing.pdf',
      image: 'certificate_images/Black-box and White-box Testing.PNG'
    },

    { 
      name: 'Introduction to Automated Analysis', 
      issuer: 'University of Minnesota', 
      date: 'Oct 2025',
      file: 'certificates/Introduction to Automated Analysis.pdf',
      image: 'certificate_images/Introduction to Automated Analysis.PNG'
    },
    { 
      name: 'Introduction to Software Testing', 
      issuer: 'University of Minnesota', 
      date: 'Oct 2025',
      file: 'certificates/Introduction to Software Testing.pdf',
      image: 'certificate_images/Introduction to Software Testing.PNG'
    },















    { 
      name: 'AI For Everyone', 
      issuer: 'DeepLearning.AI', 
      date: 'Aug 2025',
      file: 'certificates/AI For Everyone.pdf',
      image: 'certificate_images/AIForEveryone.PNG'
    },
    { 
      name: 'Introduction to Generative AI', 
      issuer: 'Google Cloud', 
      date: 'Aug 2025',
      file: 'certificates/Introduction to Generative AI.pdf',
      image: 'certificate_images/Introduction to Generative AI.PNG'
    },

    { 
      name: 'Black-box and White-box Testing', 
      issuer: 'University of Minnesota', 
      date: 'Nov 2025',
      file: 'certificates/Alulutho_Tokwe_ Black-box and White-box Testing.pdf',
      image: 'certificate_images/Black-box and White-box Testing.PNG'
    },
    { 
      name: 'Foundations of Software Testing and Validation', 
      issuer: 'University of Minnesota', 
      date: 'Nov 2025',
      file: 'certificates/Alulutho_Tokwe_ Foundations of Software Testing and Validation.pdf',
      image: 'certificate_images/Foundations of Software Testing and Validation.PNG'
    },
    { 
      name: 'Introduction to Automated Analysis', 
      issuer: 'University of Minnesota', 
      date: 'Nov 2025',
      file: 'certificates/Alulutho_Tokwe_Introduction to Automated  Analysis.pdf',
      image: 'certificate_images/Introduction to Automated Analysis.PNG'
    },
    { 
      name: 'Introduction to Software Testing', 
      issuer: 'University of Minnesota', 
      date: 'Nov 2025',
      file: 'certificates/Alulutho_Tokwe_Introduction to Software Testing.pdf',
      image: 'certificate_images/Introduction to Software Testing.PNG'
    },
    { 
      name: 'Web and Mobile Testing with Selenium', 
      issuer: 'University of Minnesota', 
      date: 'Nov 2025',
      file: 'certificates/Alulutho_Tokwe_Web and Mobile Testing with Selenium.pdf',
      image: 'certificate_images/Web and Mobile Testing with Selenium.PNG'
    }
  ]

  const experience = [
    {
      title: 'Software Tester Candidate',
      company: 'CAPACITI',
      location: 'Gqeberha, South Africa',
      period: 'Aug 2025 – Present',
      responsibilities: [
        'Mastering industry-standard testing methodologies and tools in an intensive, hands-on training environment focused on real-world applications.',
        'Developing comprehensive test plans and executing detailed test cases that uncover critical software vulnerabilities and usability issues.',
        'Collaborating in Agile teams to implement continuous testing practices that enhance software quality throughout the development lifecycle.',
        'Building foundational cybersecurity knowledge with emphasis on secure coding practices, vulnerability assessment, and data protection protocols.',
        'Applying analytical problem-solving to complex software issues, delivering detailed documentation that accelerates resolution and improves product quality.'
      ]
    }
  ]

  // Purple highlight color for all elements
  const highlightColor = "#9b59b6";
  
  // Project card highlight color - medium purple
  const projectHighlightColor = "#9b59b6";

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert);
    setShowCertificateModal(true);
  };

  const closeCertificateModal = () => {
    setShowCertificateModal(false);
    setSelectedCertificate(null);
  };

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

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closeCertificateModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Preload the profile image
  useEffect(() => {
    const img = new Image();
    img.src = "/Profile.jpg";
    img.onload = () => setImageLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Image styles with enhanced shadow and glow effect
  const profileImageStyle = {
    borderColor: highlightColor,
    boxShadow: `0 0 20px ${highlightColor}80, 0 0 30px ${highlightColor}40`,
    transition: "all 0.3s ease-in-out"
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
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
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
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
            className="md:hidden bg-black border-t border-zinc-800"
          >
            {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-zinc-900 text-zinc-300"
              >
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative w-40 h-40 rounded-full overflow-hidden"
                style={profileImageStyle}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="/Profile.jpg" 
                  alt="Alulutho Tokwe" 
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 rounded-full border-4" style={{ borderColor: highlightColor }}></div>
              </motion.div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              ICT Graduate // Aspiring Software Tester<br />
              <span className="text-zinc-400">No-code Developer // AI Developer</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Passionate about building reliable, secure software solutions through rigorous testing and cybersecurity best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group bg-white text-black hover:bg-zinc-200" onClick={() => scrollToSection('projects')}>
                Feature Programs
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 flex items-center gap-2" onClick={() => scrollToSection('contact')}>
                <Mail size={18} />
                Contact Me
              </Button>
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 flex items-center gap-2" onClick={() => scrollToSection('certifications')}>
                <Award size={18} />
                View Certifications
              </Button>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Lutho123-Pe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/alulutho-tokwe-84a122295/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="mailto:tokwealulutho@gmail.com" 
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Mail size={28} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-4xl font-bold mb-8 text-center text-white">About Alulutho Tokwe</h3>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image for Desktop */}
              <div className="hidden md:block md:w-1/3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="h-full flex items-center justify-center"
                >
                  <motion.div 
                    className="relative w-64 h-64 rounded-full overflow-hidden"
                    style={profileImageStyle}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src="/Profile.jpg" 
                      alt="Alulutho Tokwe" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full border-4" style={{ borderColor: highlightColor }}></div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* About Content */}
              <div className="md:w-2/3">
                <Card className="border-4 border-black bg-black text-white" style={{ borderColor: highlightColor, boxShadow: `0 0 15px ${highlightColor}40` }}>
                  <CardContent className="pt-6">
                    {/* Profile Image for Mobile */}
                    <div className="md:hidden flex justify-center mb-6">
                      <motion.div 
                        className="relative w-40 h-40 rounded-full overflow-hidden"
                        style={profileImageStyle}
                        whileHover={{ scale: 1.05 }}
                      >
                        <img 
                          src="/Profile.jpg" 
                          alt="Alulutho Tokwe" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 rounded-full border-4" style={{ borderColor: highlightColor }}></div>
                      </motion.div>
                    </div>
                    
                    <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
                      I am a forward-thinking ICT graduate with a passion for creating technology that's both intelligent and trustworthy. My journey combines attentive academic training with hands-on experience in software testing and quality assurance through the respected Capaciti Programme in Gqeberha.
                    </p>
                    <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
                      What sets me apart is my unique blend of AI/ML knowledge and emerging expertise in software testing and cybersecurity. I believe that truly exceptional software must be both innovative and reliable—a philosophy that guides my approach to every project I undertake. My technical foundation in AI and machine learning, complemented by practical experience in test case design and security protocols, positions me at the intersection of innovation and quality assurance, where the most valuable solutions are created.
                    </p>
                    <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
                      I am a proactive and detail-oriented individual with strong communication, teamwork, and problem-solving abilities. I have completed over 40 certifications in AI, Python, software testing, and professional development, further strengthening my ability to adapt and innovate in the tech industry. I am currently open to opportunities in Software Testing, Quality Assurance, IT Support, or related ICT roles, where I can apply my technical knowledge, grow professionally, and contribute to organizational success.
                    </p>
                    <div className="mt-6 p-4 bg-zinc-800/50 rounded-lg border-l-4 border-white">
                      <p className="text-lg italic text-zinc-300">
                        "As a tech-driven problem solver, I aim to combine data, AI, and strategic thinking to deliver solutions that improve business performance and user experience."
                      </p>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <div className="relative" onMouseEnter={() => setShowResumePreview(true)} onMouseLeave={() => setShowResumePreview(false)}>
                        <Button size="lg" className="bg-white text-black hover:bg-zinc-200 flex items-center gap-2" asChild>
                          <a href="/MyResume.pdf" download>
                            <Download size={18} />
                            View Resume
                          </a>
                        </Button>
                        
                        {/* Resume Preview on Hover */}
                        {showResumePreview && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute z-10 left-1/2 bottom-full mb-2 transform -translate-x-1/2 bg-black border border-zinc-700 rounded-lg shadow-xl overflow-hidden"
                            style={{ width: '300px', height: '400px' }}
                          >
                            <div className="relative w-full h-full">
                              <iframe 
                                src="/MyResume.pdf#toolbar=0&navpanes=0" 
                                className="w-full h-full"
                                title="Resume Preview"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                <Button 
                                  className="bg-white text-black hover:bg-zinc-200"
                                  asChild
                                >
                                  <a href="/MyResume.pdf" download>
                                    Download Resume
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-4xl font-bold mb-8 text-center text-white">Work Experience</h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  viewport={{ once: true }}
                >
                  <Card className="border-4 border-black bg-black text-white" style={{ borderColor: highlightColor, boxShadow: `0 0 15px ${highlightColor}40` }}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2 text-white">
                            <Shield size={20} className="text-white" />
                            {job.title}
                          </CardTitle>
                          <CardDescription className="text-base mt-1 text-zinc-400">
                            <span className="font-medium">{job.company}</span> | {job.location}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="md:mt-0 w-fit border-zinc-700 text-zinc-300">
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {job.responsibilities.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-white mt-1">•</span>
                            <span className="text-zinc-300">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-4xl font-bold mb-12 text-center text-white">Featured Projects</h3>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  viewport={{ once: true }}
                >
                  <Card 
                    className="h-full hover:shadow-xl transition-shadow duration-300 border-2 bg-black text-white hover:border-white"
                    style={{ borderColor: projectHighlightColor }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                        {project.featured && (
                          <Badge variant="default" className="bg-white text-black">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-base text-zinc-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2 text-white">
                            <Code size={16} />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2 text-white">
                            <Award size={16} />
                            Key Achievements
                          </h4>
                          <ul className="text-sm space-y-1 text-zinc-400">
                            {project.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button variant="outline" size="sm" className="flex-1 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github size={16} className="mr-2" />
                              Code
                            </a>
                          </Button>
                          {project.liveDemo && (
                            <Button size="sm" className="flex-1 bg-white text-black hover:bg-zinc-200" asChild>
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-4xl font-bold mb-12 text-center text-white">Technical Skills</h3>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-2 border-zinc-800 bg-black text-white hover:border-white transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        {category === 'AI/ML Tools' && <Brain size={20} className="text-white" />}
                        {category === 'Programming Languages' && <Code size={20} className="text-white" />}
                        {category === 'Databases' && <Database size={20} className="text-white" />}
                        {category === 'Testing & Security' && <Shield size={20} className="text-white" />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="outline" className="text-sm border-zinc-700 text-zinc-300">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-4xl font-bold mb-12 text-center text-white">Certifications & Training</h3>
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  className="relative"
                  onMouseEnter={() => setActiveCertificate(index)}
                  onMouseLeave={() => setActiveCertificate(null)}
                >
                  <Card 
                    className="border-l-4 border-l-white border border-zinc-800 bg-black text-white hover:shadow-lg transition-shadow"
                    style={{ borderColor: highlightColor }}
                  >
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1 text-white">{cert.name}</h4>
                          <p className="text-zinc-400">{cert.issuer}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <Badge variant="secondary" className="w-fit bg-zinc-800 text-zinc-300">
                            {cert.date}
                          </Badge>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-full hover:bg-zinc-800"
                            onClick={() => openCertificateModal(cert)}
                          >
                            <Eye size={16} className="text-zinc-400 hover:text-white" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Certificate Preview on Hover */}
                  {activeCertificate === index && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute z-10 right-0 top-full mt-2 bg-black border border-zinc-700 rounded-lg shadow-xl overflow-hidden"
                      style={{ width: '300px', height: '200px' }}
                    >
                      <div className="relative w-full h-full">
                        <img 
                          src={`/certificate_images/${cert.image}`} 
                          alt={cert.name}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <Button 
                            className="bg-white text-black hover:bg-zinc-200"
                            onClick={() => openCertificateModal(cert)}
                          >
                            View Certificate
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-4xl font-bold mb-6 text-white">Let's Work Together</h3>
            <p className="text-xl text-zinc-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-zinc-200 flex items-center gap-2" asChild>
                  <a href="mailto:tokwealulutho@gmail.com">
                    <Mail size={20} />
                    Email Me
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 flex items-center gap-2" asChild>
                  <a href="https://www.linkedin.com/in/alulutho-tokwe-84a122295/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                    Connect on LinkedIn
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-zinc-950 text-zinc-400">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 Alulutho Tokwe. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://github.com/Lutho123-Pe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://www.linkedin.com/in/alulutho-tokwe-84a122295/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="mailto:tokwealulutho@gmail.com" 
              className="hover:text-white transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </footer>

      {/* Certificate Modal */}
      {showCertificateModal && selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900 rounded-lg overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <h3 className="text-xl font-semibold text-white">{selectedCertificate.name}</h3>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-zinc-800"
                onClick={closeCertificateModal}
              >
                <X size={20} className="text-zinc-400 hover:text-white" />
              </Button>
            </div>
            <div className="flex-1 overflow-hidden bg-white p-4">
              <img 
                src={`/certificate_images/${selectedCertificate.image}`} 
                alt={selectedCertificate.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 border-t border-zinc-800 flex justify-between items-center">
              <p className="text-zinc-400">{selectedCertificate.issuer}</p>
              <Button 
                className="bg-white text-black hover:bg-zinc-200"
                asChild
              >
                <a href={`/certificate_images/${selectedCertificate.image}`} target="_blank" rel="noopener noreferrer" download>
                  <Download size={16} className="mr-2" />
                  Download
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default App
