import React, { useState } from 'react';
import { Menu, Github, Linkedin, Mail, Moon, ExternalLink, Code, Newspaper, GraduationCap, BookOpen, FileText} from 'lucide-react';
import auebBadge from '../assets/AUEB_alumni_badge.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Open Source Contributor | IBM mcp-context-forge",
      description: "Contributed to IBM's Model Context Protocol ecosystem by addressing critical security configurations. Designed and implemented a secrets generation CLI and enforced environment-aware, 'fail-closed' secrets mechanisms for JWT and Auth credentials, significantly improving the framework's enterprise security posture.",
      type: "image",
      sourceUrl: "https://github.com/EleniKechrioti/mcp-context-forge",
      techStack: ["Python", "CLI", "JWT", "IAM Security"]
    },
    {
      title: "Automated SOC Lab with AI-driven Log Analysis",
      description: "Developed a containerized security infrastructure (Docker/WSL2) featuring Suricata IDS and a full ELK Stack pipeline for real-time monitoring. Configured stateful firewalls and created Kibana dashboards to analyze network threats and identify Indicators of Compromise. Integrated a local LLM (Ollama/Phi-3) to automate alert correlation.",
      type: "image",
      sourceUrl: "https://github.com/EleniKechrioti",
      techStack: ["ELK Stack", "Docker", "Suricata IDS", "Ollama (LLM)"]
    },
    {
      title: "Comprehensive Penetration Testing & Risk Assessment",
      description: "Conducted full-lifecycle penetration tests on lab environments (Juice Shop, Mr. Robot CTF) using Kali Linux, Nmap, OpenVAS, and OWASP Zap. Identified and exploited vulnerabilities such as SQLi, XSS, JWT Forgery. Mapped findings to CVE/CWE identifiers and calculated risk severity using the CVSS scale.",
      type: "image",
      sourceUrl: "https://github.com/EleniKechrioti",
      techStack: ["Kali Linux", "OWASP ZAP", "OpenVAS", "Nmap", "Vulnerability Assessment"]
    },
    {
      title: "Malware & Phishing Detection Workshop",
      description: "Designed and led a hands-on workshop that introduced participants to URL and EXE file inspection through an interactive machine learning project. The project classifies malicious and phishing links using real-world datasets (Ember, PhishTank).",
      type: "image",
      sourceUrl: "https://github.com/EleniKechrioti/Malware-and-Phishing-URL-Detection",
      techStack: ["Python", "Machine Learning", "Data Analysis"]
    }
  ];

  const skillCategories = [
    {
      title: "Security Operations & Monitoring",
      skills: ["ELK Stack", "Snort/Suricata IDS", "Wireshark", "Nmap/zenmap", "Autopsy", "Volatility", "FTK", "Memdump"]
    },
    {
      title: "Vulnerability & Web Security",
      skills: ["Kali Linux", "OWASP ZAP", "Penetration Testing"]
    },
    {
      title: "Programming & Data",
      skills: ["Python", "SQL", "C", "C++", "HTML", "JavaScript", "CSS"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["Git & GitHub", "Docker", "JUnit", "Flask", "React", "Node.js"]
    },
    {
      title: "Data Visualization & Management",
      skills: ["Power BI", "Jira"]
    },
    {
      title: "Cryptography & Blockchain",
      skills: ["Applied Cryptography", "Blockchain Architecture", "CapBAC", "JWT Security"]
    },
  ];

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen  w-full ">
      {/* Navigation */}
      <nav className="fixed w-full bg-gradient-to-br from-indigo-500 to-slate-500 border-b border-gray-200 dark:border-gray-800 z-50 text-white dark:bg-gradient-to-br dark:from-indigo-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Eleni Kechrioti</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-gray-200">About</a>
              <a href="#projects" className="text-white hover:text-gray-200">Projects</a>
              <a href="#publications" className="text-white hover:text-gray-200">Publications</a>
              <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
              <a 
                href="https://drive.google.com/file/d/1nYNfTUuVqP68QbmTtEM5VxUQnj0esBtl/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FileText className="w-4 h-4 mr-1" />
                Resume
              </a>
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-white/10">
                <Moon className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-white hover:text-gray-200 hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-indigo-600/90">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-white hover:text-gray-200">About</a>
              <a href="#projects" className="block px-3 py-2 text-white hover:text-gray-200">Projects</a>
              <a href="#experience" className="block px-3 py-2 text-white hover:text-gray-200">Experience</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-gray-200">Contact</a>
              <a 
                href="https://drive.google.com/file/d/1SkcTzpbWYrMcyeeMTRIQwMfOgsv3aslb/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block px-3 py-2 text-white hover:text-gray-200"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="w-64 h-64 md:w-96 md:h-96 relative">
              <img 
              src="https://avatars.githubusercontent.com/u/109429469?v=4" 
              alt="Eleni Kechrioti" 
              className="rounded-2xl object-cover w-full h-full border border-gray-300 dark:border-gray-700 grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="text-center md:text-left max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-white">
                Hi, I'm <span className="text-indigo-600">Eleni!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed dark:text-white">
                I think I was drawn towards a career in tech because I am a huge fan of iterative processes 
                and making things better. I enjoy digging into how systems break, how to protect them, and how to trace digital evidence. 
                Whether it’s low-level exploits or high-level architecture, I’m driven by curiosity and a need to 
                understand what’s really happening under the hood.
              </p>
              <p className="text-xl text-gray-600 mb-8 dark:text-white">
                I recently completed my BSc in Computer Science at <a href="https://aueb.gr" className="text-indigo-600 hover:text-indigo-700">AUEB</a>, where I completed my thesis
                on evaluating blockchain's role in enhancing Capability-Based access control in IIoT environments.
              </p>
              <p className="text-xl text-gray-600 mb-8 dark:text-white">
                I am currently pursuing my Master's (MSc) in Information Systems Security & Development at <a href="https://mscis.cs.aueb.gr/en/normal/home" className="text-indigo-600 hover:text-indigo-700">AUEB</a>.
                My focus is combining strong programming skills with hands-on experience in security monitoring and vulnerability assessment.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 mt-4">
                {/* GitHub */}
                <a href="https://github.com/EleniKechrioti" className="text-gray-600 hover:text-indigo-600 dark:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/eleni-kechrioti-092137239" className="text-gray-600 hover:text-indigo-600 dark:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                
                {/* Email */}
                <a href="mailto:elenikehrioti@gmail.com" className="text-gray-600 hover:text-indigo-600 dark:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                
                {/* AUEB Badge */}
                <a href="https://alumni.aueb.gr/el/aueb-alumni-mybadge/1952/3efbb6a145a0fb8dc9d29db84307f9eb3538887f479e8c2fd41e7f0d30083b1e" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img src={auebBadge} alt="AUEB Alumni" className="h-6 w-auto" />
                </a>

                {/* TryHackMe */}
                <a href="https://tryhackme.com/p/elenikehrioti" title="TryHackMe Profile" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img 
                    src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg" 
                    alt="TryHackMe" 
                    className="h-5 w-auto invert opacity-70 hover:opacity-100 dark:invert-0 dark:opacity-100 transition-all" 
                  />
                </a>

                {/* CryptoHack */}
                <a href="https://cryptohack.org/user/271leni/" title="CryptoHack Profile" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img 
                    src="https://cryptohack.org/static/img/main.png" 
                    alt="CryptoHack" 
                    className="h-6 w-auto opacity-70 hover:opacity-100 dark:brightness-200 transition-all" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="md:flex">
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white font-mono">{project.title}</h3>
                    <p className="text-gray-600 mb-4 dark:text-white">{project.description}</p>
                    {/* Tech Stack */}
                    {project.techStack && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md text-xs font-semibold border border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800/50 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex space-x-4">
                      <a href={project.sourceUrl} className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                        <Code className="w-4 h-4 mr-1" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12  dark:text-white">Publications & Education</h2>
          <div className="grid md:grid-cols-2 gap-12">
            
            <div>
              <div className="flex items-center mb-6">
                <Newspaper className="w-6 h-6 text-indigo-600 mr-2" />
                <h3 className="text-2xl font-semibold">Publications</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-indigo-600 pl-4">
                  <h4 className="text-lg font-semibold dark:text-white">Bolstering IIoT Resilience: The Synergy of Blockchain and CapBAC</h4>
                  <p className="text-gray-600 dark:text-white">22nd International Conference on <br></br>Security & Cryptography (SECRYPT-2025)</p>
                  <p className="text-gray-600 mt-2 dark:text-white"><a href="https://www.scitepress.org/Papers/2025/135138/135138.pdf"> Link </a></p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-indigo-600 pl-4">
                  <h4 className="text-lg font-semibold dark:text-white">Evaluating Blockchain’s Role in Enhancing Capability-Based Access Control in IIoT Environments</h4>
                  <p className="text-gray-600 dark:text-white">BSc Thesis</p>
                  <p className="text-gray-600 mt-2 dark:text-white"><a href="https://drive.google.com/file/d/1ZpWAWATM5w20nI6Ctk6zv1njeAr4_iPk/view?usp=sharing"> Link </a></p>
                </div>
              </div>
            </div>
            
            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-indigo-600 mr-2" />
                <h3 className="text-2xl font-semibold dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-indigo-600 pl-4">
                  <h4 className="text-lg font-semibold dark:text-white">MSc in Information Systems Development and Security</h4>
                  <p className="text-gray-600 dark:text-white">Athens University of Economics and Business</p>
                  <p className="text-gray-600 dark:text-white">2025 - Present</p>
                  <p className="text-gray-600 dark:text-white">Grade: 8.83/10</p>
                </div>
                <div className="border-l-2 border-indigo-600 pl-4">
                  <h4 className="text-lg font-semibold dark:text-white">BSc in Informatics</h4>
                  <p className="text-gray-600 dark:text-white">Athens University of Economics and Business</p>
                  <p className="text-gray-600 dark:text-white">2021 - 2025</p>
                  <p className="text-gray-600 dark:text-white">Grade: 8.75/10</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16">
            <div className="flex items-center mb-6">
              <BookOpen className="w-6 h-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold dark:text-white">Core Skills</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-md text-sm font-medium border border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800/50 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-500 to-slate-500 text-white dark:bg-gradient-to-br dark:from-indigo-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-8">I'm always interested in hearing about new projects and opportunities.</p>
          <a
            href="mailto:elenikehrioti@gmail.com"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <span className="text-2xl font-bold text-white">EK</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/EleniKechrioti" className="hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/eleni-kechrioti-092137239" className="hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:elenikehrioti@gmail.com" className="hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Eleni Kechrioti. All rights reserved.</p>
          </div>
          <img 
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Felenikechrioti.github.io%2FPortfolio%2F&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" 
            className="hidden"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;