import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Rocket, ExternalLink, Briefcase, GraduationCap, Heart, Phone, User, Sun, Moon } from 'lucide-react';
function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-blue-50 to-white text-gray-900'
    }`}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-[60] p-3 rounded-full transition-colors duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
            : 'bg-white hover:bg-gray-100 text-gray-900 shadow-lg'
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <header className={`hero-wrap ${isDark ? 'hero-wrap-dark' : 'hero-wrap-light'}`}>
        <div className={`hero-overlay ${isDark ? 'hero-overlay-dark' : 'hero-overlay-light'}`}></div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-8 md:pb-24 md:pt-10">
          <nav className="flex items-center justify-between">
            <p className={`text-xl font-bold tracking-[0.2em] ${isDark ? 'text-white' : 'text-slate-900'}`}>MANDEEP</p>
            <ul className={`hidden items-center gap-8 text-sm font-semibold md:flex ${isDark ? 'text-white/85' : 'text-slate-700'}`}>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Skills</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Contact</a></li>
            </ul>
          </nav>

          <div className="mt-12 grid items-center gap-12 md:mt-16 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className={`text-4xl font-bold leading-tight md:text-6xl ${isDark ? 'text-white' : 'text-slate-900'}`}>MANDEEP KUMAR</h1>
              <h2 className={`mt-3 text-2xl font-semibold md:text-4xl ${isDark ? 'text-white' : 'text-slate-800'}`}>
                And I&apos;m a <span className="text-gradient-common">Backend Developer</span>
              </h2>
              <p className={`mx-auto mt-5 max-w-xl text-base leading-7 md:mx-0 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                  I'm a passionate developer with 2+ years of experience building web applications.
              I specialize in ASP.NET Core with C#. When I'm not coding,
              you can find me contributing to open source projects or writing technical blogs.
              </p>

              <div className="mt-7 flex justify-center gap-3 md:justify-start">
                <a href="#" className="hero-social"><Github className="h-5 w-5" /></a>
                <a href="#" className="hero-social"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="hero-social"><Mail className="h-5 w-5" /></a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <a href="#" className="hero-btn">Download CV</a>
                <a href="#" className="hero-btn">Portfolio</a>
              </div>  
            </div>

            <div className="animate-bounce [animation-duration:4.5s]  flex justify-center md:justify-end">
              <div className="heroFloat hero-hexagon-wrap">
                <div className="hero-hexagon">
                  <img
                    src="./assests/profile.png"
                    alt="Mandeep profile"
                    className="hero-image"
                  />
                </div>
                <div className="hero-v-glow" aria-hidden="true">
                  <span className="hero-v-line hero-v-line-left"></span>
                  <span className="hero-v-line hero-v-line-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      

      {/* About Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <User className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate developer with 2+ years of experience building web applications.
              I specialize in ASP.NET Core with C#. When I'm not coding,
              you can find me contributing to open source projects or writing technical blogs.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark 
                          ? 'bg-blue-500/10 text-blue-400' 
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>English (Native)</li>
                  <li>Hindi (Fluent)</li>
                  <li>Punjabi (Fluent)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2"></div>
                <div className={`mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{exp.period}</div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>{exp.company}</div>
                <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <GraduationCap className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={index} className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-900/50' : 'bg-white shadow-lg'
              }`}>
                <div className={isDark ? 'text-blue-400' : 'text-blue-600'}>{edu.period}</div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>{edu.school}</div>
                <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Rocket className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 ${
                  isDark ? 'bg-gray-800/50' : 'bg-white shadow-lg'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark 
                            ? 'bg-blue-500/10 text-blue-400' 
                            : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className={`mt-4 inline-flex items-center gap-1 ${
                      isDark 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-500'
                    }`}
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Heart className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            Hobbies & Interests
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-900/50' : 'bg-white shadow-lg'
                }`}
              >
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Phone className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            Contact Me
          </h2>
          <div className={`max-w-3xl mx-auto p-8 rounded-lg ${
            isDark ? 'bg-gray-800/50' : 'bg-white shadow-lg'
          }`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  <a 
                    href="mailto:john@example.com" 
                    className={`flex items-center gap-2 ${
                      isDark 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-500'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    john@example.com
                  </a>
                  <a 
                    href="tel:+1234567890" 
                    className={`flex items-center gap-2 ${
                      isDark 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-500'
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                <a 
                  href="#" 
                  className={`flex items-center gap-2 ${
                    isDark 
                      ? 'text-blue-400 hover:text-blue-300' 
                      : 'text-blue-600 hover:text-blue-500'
                  }`}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a 
                  href="#" 
                  className={`flex items-center gap-2 ${
                    isDark 
                      ? 'text-blue-400 hover:text-blue-300' 
                      : 'text-blue-600 hover:text-blue-500'
                  }`}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 John Developer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const skills = [
  "ASP.NET Core", "ASP.NET Mvc", "C#" , "SQL Server", "JQuery", "React", "HTML", "CSS", "TailwindCSS", "Git", "CI/CD"
];

const experience = [
  {
    period: "2021 - Present",
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of enterprise-scale applications, mentoring junior developers, and implementing best practices for code quality and deployment."
  },
  {
    period: "2019 - 2021",
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed and maintained multiple client projects using React, Node.js, and AWS. Improved application performance by 40%."
  },
  {
    period: "2017 - 2019",
    role: "Frontend Developer",
    company: "WebCraft Agency",
    description: "Created responsive web applications for various clients using React and modern CSS frameworks."
  }
];

const education = [
  {
    period: "2013 - 2017",
    degree: "Bachelor of Science in Computer Science",
    school: "Tech University",
    description: "Focused on software engineering and web technologies. Graduated with honors."
  },
  {
    period: "2017",
    degree: "Full Stack Web Development",
    school: "CodeCamp Academy",
    description: "Intensive bootcamp covering modern web development technologies and practices."
  }
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "AI Task Manager",
    description: "Smart task management app with AI-powered prioritization",
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "TensorFlow", "React"],
    link: "#"
  },
  {
    title: "Cloud Dashboard",
    description: "Real-time cloud infrastructure monitoring dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["Vue.js", "AWS", "D3.js"],
    link: "#"
  }
];

const hobbies = [
  {
    title: "Photography",
    description: "Capturing moments and exploring urban landscapes through street photography.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hiking",
    description: "Exploring nature trails and mountain peaks during weekends.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Reading",
    description: "Diving into technical books and sci-fi novels in my free time.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800"
  }
];

export default App;
