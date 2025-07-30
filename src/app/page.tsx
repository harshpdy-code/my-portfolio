"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "../../components/animated-section"
import { StaggeredContainer } from "../../components/staggered-container"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Brain,
  Zap,
  Database,
  ChevronDown,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Add your social links here
  const socialLinks = {
    github: "https://github.com/harshpdy-code", // Replace with your actual GitHub username
    linkedin: "https://linkedin.com/in/harshit-pandey45",
    email: "harshitpandey0110@gmail.com",
  }

  const skills = {
    "Programming Languages": ["C/C++", "Python", "JavaScript", "Embedded C"],
    "AI/ML & Data Science": [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Hugging Face",
      "TF-IDF Vectorizer",
      "Machine Learning",
      "NLP",
    ],
    "Web Development": ["HTML/CSS/JS", "ReactJS", "Next.js", "Tailwind CSS", "REST APIs"],
    "Tools & Technologies": ["Git", "Jupyter Notebook", "Google Colab", "MATLAB", "Arduino", "Raspberry Pi"],
  }

  const projects = [
    {
      title: "Movie Recommendation System with Chatterbot",
      description:
        "Developed a hybrid movie recommendation system using unsupervised learning with Content and Collaborative filtering, and integrated it with a Telegram rule-based chatbot for front-end.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "TF-IDF Vectorizer", "Telegram Bot API"],
      category: "AI/ML + Chatbot",
      period: "Jun 2024 – Oct 2024",
      github: "https://github.com/harshpdy-code/Movie-recommendation-system-",
      demo: null, // Add demo link if available
    },
    {
      title: "Structured Data Extractor for PDF Documents",
      description:
        "Automated extraction of text, tables, and metadata from complex PDFs including invoices and reports using PaddleOCR and Pdfminer.",
      tech: ["Python", "PDF Processing", "Machine Learning", "PaddleOCR", "Pdfminer", "Docker"],
      category: "AI/ML + Data Processing",
      period: "July 2024 – Present",
      github: "https://github.com/harshitpdy-code/pdf-data-extractor",
      demo: null,
    },
    {
      title: "AUV for Gujarat Robofest 4.0",
      description:
        "Built an Autonomous Underwater Vehicle (AUV) with a team of like minded individuals for Gujarat Robofest 4.0 Underwater category competition.",
      tech: ["Embedded C", "Arduino", "Sensors", "Robotics", "Raspberry Pi", "ROS"],
      category: "Robotics + Hardware",
      period: "2023",
      demo: null,
    },
  ]

  const education = [
    {
      degree: "B.Tech in Electrical Engineering",
      institution: "National Institute of Technology, Surat",
      period: "2022 - Present",
      status: "Current",
      description:
        "Relevant Coursework: Control Systems, Data Structures & Algorithms, Machine Learning, Web Development, Embedded C Programming",
      gpa: "6.97/10.0",
    },
  ]

  const experience = [
    {
      title: "Student Intern",
      company: "Raychem RPG",
      period: "May 2024 - July 2024",
      location: "Vadodara, Gujarat",
      description:
        "Worked on surge arresters, insulators and insulation coordination of transmission lines. Collaborated with the Quality team for testing different classes of surge arresters including OCP, DA and low voltage arresters.",
      achievements: [
        "Implemented Lightning Simulation model on 400KV transmission line",
        "Conducted lightning and switching impedance studies",
        "Improved annual outage rates through simulation analysis",
        "Tested various surge arrester classes with Quality team",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Harshit's Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="hover:text-blue-400 transition-colors duration-300">
                About
              </Link>
              <Link href="#education" className="hover:text-blue-400 transition-colors duration-300">
                Education
              </Link>
              <Link href="#experience" className="hover:text-blue-400 transition-colors duration-300">
                Experience
              </Link>
              <Link href="#projects" className="hover:text-blue-400 transition-colors duration-300">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-blue-400 transition-colors duration-300">
                Skills
              </Link>
              <Link href="#contact" className="hover:text-blue-400 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Harshit Pandey
              </span>
              <br />
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              B.Tech Electrical Engineering student at NIT Surat with expertise in AI/ML, Web Development, and embedded
              systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={`mailto:${socialLinks.email}`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </Link>
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="h-6 w-6 mx-auto text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="transform transition-all duration-700 hover:scale-105">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-slate-700 shadow-2xl">
                <Zap className="h-24 w-24 text-blue-400" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="transform transition-all duration-700 delay-200">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I&apos;m a B.Tech Electrical Engineering student at NIT Surat with a passion for software solutions.
                  My experience spans across machine learning, web development, and electrical protection Technologies.
                </p>
              </div>
              <div className="transform transition-all duration-700 delay-400">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I enjoy tackling complex engineering challenges that bridge theoretical knowledge with practical
                  applications.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 transform transition-all duration-700 delay-600">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">Electrical Engineering Student</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">Available for Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <StaggeredContainer className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-700/80 to-slate-800/80 border-slate-600/50 hover:from-slate-600/80 hover:to-slate-700/80 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-slate-100 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-blue-400" />
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-slate-300 mt-1">
                        {edu.institution} • {edu.period}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className="border-blue-400/50 text-blue-300 bg-blue-500/10">
                        {edu.status}
                      </Badge>
                      <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">GPA: {edu.gpa}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-200">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <StaggeredContainer className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-700/80 to-slate-800/80 border-slate-600/50 hover:from-slate-600/80 hover:to-slate-700/80 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-slate-100 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-blue-400" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-slate-300 mt-1 flex items-center gap-2">
                        <span>{exp.company}</span>
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-200">{exp.description}</p>
                  <div>
                    <h4 className="text-slate-100 font-semibold mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-400" />
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-200 ml-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/30 hover:from-indigo-800/50 hover:to-purple-800/50 transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-slate-100 group-hover:text-indigo-300 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-indigo-300 mt-2 font-medium">{project.category}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-slate-300 hover:text-indigo-300 hover:bg-indigo-500/20 transform hover:scale-110 transition-all duration-300"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {project.demo && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-slate-300 hover:text-indigo-300 hover:bg-indigo-500/20 transform hover:scale-110 transition-all duration-300"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-indigo-400/50 text-indigo-200 bg-indigo-500/10 hover:border-indigo-300 hover:text-indigo-100 hover:bg-indigo-500/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-2 gap-8" staggerDelay={200}>
            {Object.entries(skills).map(([category, skillList]) => {
              const icons = {
                "Programming Languages": Brain,
                "AI/ML & Data Science": Code,
                "Web Development": Database,
                "Tools & Technologies": Zap,
              }
              const colors = {
                "Programming Languages":
                  "from-emerald-900/40 to-teal-900/40 border-emerald-500/30 hover:from-emerald-800/50 hover:to-teal-800/50 hover:shadow-emerald-500/20",
                "AI/ML & Data Science":
                  "from-orange-900/40 to-red-900/40 border-orange-500/30 hover:from-orange-800/50 hover:to-red-800/50 hover:shadow-orange-500/20",
                "Web Development":
                  "from-cyan-900/40 to-blue-900/40 border-cyan-500/30 hover:from-cyan-800/50 hover:to-blue-800/50 hover:shadow-cyan-500/20",
                "Tools & Technologies":
                  "from-violet-900/40 to-purple-900/40 border-violet-500/30 hover:from-violet-800/50 hover:to-purple-800/50 hover:shadow-violet-500/20",
              }
              const iconColors = {
                "Programming Languages": "text-emerald-400",
                "AI/ML & Data Science": "text-orange-400",
                "Web Development": "text-cyan-400",
                "Tools & Technologies": "text-violet-400",
              }
              const badgeColors = {
                "Programming Languages": "bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500/30",
                "AI/ML & Data Science": "bg-orange-500/20 text-orange-200 hover:bg-orange-500/30",
                "Web Development": "bg-cyan-500/20 text-cyan-200 hover:bg-cyan-500/30",
                "Tools & Technologies": "bg-violet-500/20 text-violet-200 hover:bg-violet-500/30",
              }

              const Icon = icons[category as keyof typeof icons]
              const colorClass = colors[category as keyof typeof colors]
              const iconColor = iconColors[category as keyof typeof iconColors]
              const badgeColor = badgeColors[category as keyof typeof badgeColors]

              return (
                <Card
                  key={category}
                  className={`bg-gradient-to-br ${colorClass} transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-slate-100">
                      <Icon className={`h-6 w-6 ${iconColor}`} />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`${badgeColor} transition-all duration-300 transform hover:scale-105`}
                          style={{ animationDelay: `${skillIndex * 50}ms` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Achievements Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Leadership
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-700/60 to-indigo-900/60 border-indigo-400/30 hover:from-slate-600/70 hover:to-indigo-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-slate-100 flex items-center gap-2">
                  <Award className="h-5 w-5 text-indigo-400" />
                  Academic Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-500/30 text-blue-200 border-blue-400/50">JEE Mains 2022</Badge>
                  <span className="text-slate-200">96.7 percentile</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-500/30 text-purple-200 border-purple-400/50">JEE Advanced 2022</Badge>
                  <span className="text-slate-200">Rank 17k among 150K students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-emerald-500/30 text-emerald-200 border-emerald-400/50">
                    Adobe Hackathon 2025
                  </Badge>
                  <span className="text-slate-200">Top 4000 among 2.62 lakh participants</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-700/60 to-purple-900/60 border-purple-400/30 hover:from-slate-600/70 hover:to-purple-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-slate-100 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-purple-400" />
                  Leadership & Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-slate-200">
                  <strong className="text-purple-300">Event Co-Head:</strong> Mindbend, Techfest NIT Surat (March 2023)
                </div>
                <div className="text-slate-200">
                  <strong className="text-purple-300">Event Coordinator:</strong> Sparsh, Cultural Fest NIT Surat (March
                  2023)
                </div>
                <div className="text-slate-200">
                  <strong className="text-purple-300">Sports:</strong> Silver Medalist in CBSE Cluster Kho-Kho
                </div>
                <div className="text-slate-200">
                  <strong className="text-purple-300">Robotics:</strong> Selected for finals of Gujarat Robofest 4.0
                  (Underwater Category)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            I&apos;m always interested in discussing new opportunities, innovative projects, or just connecting with
            fellow engineers and developers.
          </p>
          <StaggeredContainer className="flex flex-col sm:flex-row gap-6 justify-center" staggerDelay={150}>
            <Link href={`mailto:${socialLinks.email}`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                {socialLinks.email}
              </Button>
            </Link>
            <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent transform hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn Profile
              </Button>
            </Link>
            <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent transform hover:scale-105 transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub Profile
              </Button>
            </Link>
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2025 Harshit Pandey. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
