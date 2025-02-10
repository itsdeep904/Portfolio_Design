import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Code2, Rocket, ExternalLink, Briefcase, GraduationCap, Heart, Phone, User, Sun, Moon } from 'lucide-react';

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
        className={`fixed top-6 right-6 p-3 rounded-full transition-colors duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
            : 'bg-white hover:bg-gray-100 text-gray-900 shadow-lg'
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-500 p-2 rounded-full">
              <Code2 className="w-5 h-5 text-white" />
            </div>
          </div>
          <h1 className="mt-8 text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            John Developer
          </h1>
          <p className={`mt-4 text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Full Stack Developer</p>
          <div className="flex gap-4 mt-6">
            <a href="#" className={`transition-colors ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className={`transition-colors ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className={`transition-colors ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
              <Mail className="w-6 h-6" />
            </a>
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
              I'm a passionate developer with 5 years of experience building web applications.
              I specialize in React, Node.js, and cloud technologies. When I'm not coding,
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
                  <li>Spanish (Fluent)</li>
                  <li>French (Intermediate)</li>
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
  "React", "Node.js", "TypeScript", "Python",
  "AWS", "Docker", "GraphQL", "MongoDB",
  "Next.js", "TailwindCSS", "Git", "CI/CD"
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