import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Newspaper, GraduationCap, BookOpen, FileText, Sun, Moon, Briefcase } from 'lucide-react';
import auebBadge from '../assets/AUEB_alumni_badge.png';

const RESUME_URL = "https://drive.google.com/file/d/1QZJ31cJcaurM2zMgdJ5_mDcBx96WPfyi/view?usp=sharing";

const THM_STAT = "Top 45% — 3 rooms completed";
const CRYPTOHACK_STAT = "65+ challenges solved";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const projects = [
    {
      title: "Open Source Contributor | IBM mcp-context-forge",
      description: "Contributed to IBM's Model Context Protocol ecosystem by addressing critical security configurations. Designed and implemented a secrets generation CLI and enforced environment-aware, 'fail-closed' secrets mechanisms for JWT and Auth credentials, significantly improving the framework's enterprise security posture.",
      sourceUrl: "https://github.com/EleniKechrioti/mcp-context-forge",
      techStack: ["Python", "CLI", "JWT", "IAM Security"]
    },
    {
      title: "Automated SOC Lab with AI-driven Log Analysis",
      description: "Developed a containerized security infrastructure (Docker/WSL2) featuring Suricata IDS and a full ELK Stack pipeline for real-time monitoring. Configured stateful firewalls and created Kibana dashboards to analyze network threats and identify Indicators of Compromise. Integrated a local LLM (Ollama/Phi-3) to automate alert correlation.",
      sourceUrl: "https://github.com/EleniKechrioti/soc-incident-response-lab",
      techStack: ["ELK Stack", "Docker", "Suricata IDS", "Ollama (LLM)"]
    },
    {
      title: "Comprehensive Penetration Testing & Risk Assessment",
      description: "Conducted full-lifecycle penetration tests on lab environments (Juice Shop, Mr. Robot CTF) using Kali Linux, Nmap, OpenVAS, and OWASP Zap. Identified and exploited vulnerabilities such as SQLi, XSS, JWT Forgery. Mapped findings to CVE/CWE identifiers and calculated risk severity using the CVSS scale.",
      sourceUrl: "https://github.com/EleniKechrioti/penetration-testing-project",
      techStack: ["Kali Linux", "OWASP ZAP", "OpenVAS", "Nmap", "Vulnerability Assessment"]
    },
    {
      title: "Malware & Phishing Detection — ML Classifier",
      description: "Built a machine learning pipeline that classifies malicious and phishing links/executables using real-world datasets (Ember, PhishTank).",
      sourceUrl: "https://github.com/EleniKechrioti/Malware-and-Phishing-URL-Detection",
      techStack: ["Python", "Machine Learning", "Data Analysis"]
    }
  ];

  
  const experience = [
    {
      role: "Open Source Contributor",
      org: "IBM mcp-context-forge (GitHub)",
      period: "Feb 2026 - May 2026",
      description: "Hardened IBM's production MCP gateway by implementing security user stories for fail-closed secret enforcement and sentinel value detection, preventing credential exposure and unauthorized JWT token forgery."
    },
    {
      role: "Workshop Organizer & Instructor",
      org: "Information Science Association",
      period: "Oct 2024 - Jun 2025",
      description: "Designed and led a hands-on workshop introducing 40+ participants to URL and executable file inspection through an interactive machine learning project."
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

  const navLinks = [
    { href: "#about", label: "about" },
    { href: "#projects", label: "projects" },
    { href: "#experience", label: "experience" },
    { href: "#publications", label: "publications" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <div className="min-h-screen w-full bg-charcoal-50 dark:bg-charcoal-950 text-charcoal-900 dark:text-charcoal-50 transition-colors">
      {/* Navigation */}
      <nav className="fixed w-full bg-charcoal-50/95 dark:bg-charcoal-950/95 backdrop-blur-sm border-b border-charcoal-200 dark:border-charcoal-700 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="font-mono text-lg text-charcoal-900 dark:text-charcoal-50">
              eleni<span className="text-charcoal-700 dark:text-charcoal-200">@</span>portfolio
              <span className="text-amber-600 dark:text-amber-400">:~$</span>
              <span className="inline-block w-1 h-5 ml-0.5 -mb-0.5 bg-amber-600 dark:bg-amber-400 animate-blink" aria-hidden="true" /> {/**cursor */}
            </span>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-mono text-sm">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  ./{link.label}
                </a>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <FileText className="w-4 h-4 mr-1" />
                resume
              </a>
              <button
                onClick={() => setIsDark(!isDark)}
                aria-label="Toggle dark mode"
                className="p-2 rounded-full text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-charcoal-200/50 dark:hover:bg-charcoal-800"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsDark(!isDark)}
                aria-label="Toggle dark mode"
                className="p-2 text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-charcoal-100 dark:bg-charcoal-900 border-t border-charcoal-200 dark:border-charcoal-700 font-mono text-sm">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-2 py-2 text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  ./{link.label}
                </a>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-2 py-2 text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400"
              >
                ./resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="text-center md:text-left max-w-xl order-2 md:order-1">
              <p className="font-mono text-sm text-charcoal-700 dark:text-charcoal-200 mb-4">
                &gt; whoami <span className="text-amber-600 dark:text-amber-400">--verbose</span>
              </p>
              <h1 className="font-mono text-4xl md:text-5xl font-bold mb-3 leading-tight">
                Eleni Kechrioti
                <br />
                <span className="text-amber-600 dark:text-amber-400">security engineer</span> &amp; researcher
              </h1>
              {/* open to x roles */}
              <p className="font-mono text-xs uppercase tracking-wide text-charcoal-700 dark:text-charcoal-200 mb-6">
                
              </p>
              <p className="text-lg text-charcoal-700 dark:text-charcoal-200 mb-6 leading-relaxed">
                I think I was drawn towards a career in tech because I am a huge fan of iterative processes
                and making things better. I enjoy digging into how systems break, how to protect them, and how to trace digital evidence.
                Whether it's low-level exploits or high-level architecture, I'm driven by curiosity and a need to
                understand what's really happening under the hood.
              </p>
              <p className="text-lg text-charcoal-700 dark:text-charcoal-200 mb-6">
                I recently completed my BSc in Informatics at{" "}
                <a href="https://aueb.gr" className="text-amber-600 dark:text-amber-400 hover:underline">AUEB</a>, where I completed my thesis
                on evaluating blockchain's role in enhancing Capability-Based access control in IIoT environments.
              </p>
              <p className="text-lg text-charcoal-700 dark:text-charcoal-200 mb-8">
                I am currently pursuing my Master's (MSc) in Information Systems Security &amp; Development at{" "}
                <a href="https://mscis.cs.aueb.gr/en/normal/home" className="text-amber-600 dark:text-amber-400 hover:underline">AUEB</a>.
                My focus is combining strong programming skills with hands-on experience in security monitoring and vulnerability assessment.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-5">
                <a href="https://github.com/EleniKechrioti" className="text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/eleni-kechrioti-092137239" className="text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:elenikehrioti@gmail.com" className="text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://alumni.aueb.gr/el/aueb-alumni-mybadge/1952/3efbb6a145a0fb8dc9d29db84307f9eb3538887f479e8c2fd41e7f0d30083b1e" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                  <img src={auebBadge} alt="AUEB Alumni" className="h-6 w-auto" />
                </a>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <a href="https://tryhackme.com/p/elenikehrioti" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 border border-charcoal-200 dark:border-charcoal-700 px-3 py-1.5 hover:border-amber-600 dark:hover:border-amber-400 transition-colors">
                  <img src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg" alt="TryHackMe" className="h-4 w-auto invert dark:invert-0" />
                  <span className="font-mono text-xs text-charcoal-700 dark:text-charcoal-200">{THM_STAT}</span>
                </a>
                <a href="https://cryptohack.org/user/271leni/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 border border-charcoal-200 dark:border-charcoal-700 px-3 py-1.5 hover:border-amber-600 dark:hover:border-amber-400 transition-colors">
                  <img src="https://cryptohack.org/static/img/main.png" alt="CryptoHack" className="h-5 w-auto" />
                  <span className="font-mono text-xs text-charcoal-700 dark:text-charcoal-200">{CRYPTOHACK_STAT}</span>
                </a>
              </div>
            </div>
            <div className="w-64 h-64 md:w-80 md:h-80 relative order-1 md:order-2 shrink-0">
              <div className="border border-charcoal-200 dark:border-charcoal-700 bg-charcoal-100 dark:bg-charcoal-900 p-2">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEuiw2buLf_yQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707838228790?e=1785369600&v=beta&t=k4EP3TL5QZZ7Lhr-WCYgXgOPgOirIxw9-Lo4Opbe6Is"
                  alt="Eleni Kechrioti"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="font-mono text-xs text-charcoal-700 dark:text-charcoal-200 flex justify-between px-1 pt-2">
                  <span>eleni.jpg</span>
                  <span className="text-charcoal-700/60 dark:text-charcoal-200/60">hover:grayscale-0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-t border-charcoal-200 dark:border-charcoal-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-amber-600 dark:text-amber-400 mb-2">// 02_experience</p>
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <h2 className="font-mono text-2xl font-semibold">experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <div key={index} className="border-l-2 border-amber-600/60 dark:border-amber-400/60 pl-4">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-semibold text-charcoal-900 dark:text-charcoal-50">{item.role}</h3>
                  <span className="text-charcoal-700 dark:text-charcoal-200 text-sm">— {item.org}</span>
                </div>
                {item.period && <p className="text-charcoal-700 dark:text-charcoal-200 text-sm mt-1">{item.period}</p>}
                <p className="text-charcoal-700 dark:text-charcoal-200 text-sm mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-charcoal-200 dark:border-charcoal-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-amber-600 dark:text-amber-400 mb-2">// 03_projects</p>
          <h2 className="font-mono text-2xl font-semibold mb-12">selected work</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-charcoal-100 dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-700 p-6 md:p-8">
                <h3 className="font-mono text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-charcoal-700 dark:text-charcoal-200 mb-5 leading-relaxed">{project.description}</p>
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="font-mono bg-charcoal-50 dark:bg-charcoal-800 text-charcoal-700 dark:text-charcoal-200 px-2.5 py-1 text-xs border border-charcoal-200 dark:border-charcoal-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-mono text-sm text-amber-600 dark:text-amber-400 hover:underline">
                  <Code className="w-4 h-4 mr-1" /> source code
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 border-t border-charcoal-200 dark:border-charcoal-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-amber-600 dark:text-amber-400 mb-2">// 04_publications</p>
          <h2 className="font-mono text-2xl font-semibold mb-12">publications &amp; education</h2>
          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <div className="flex items-center mb-6">
                <Newspaper className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2" />
                <h3 className="font-mono text-lg font-semibold">Publications</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-amber-600/60 dark:border-amber-400/60 pl-4">
                  <h4 className="font-semibold text-charcoal-900 dark:text-charcoal-50">Bolstering IIoT Resilience: The Synergy of Blockchain and CapBAC</h4>
                  <p className="text-charcoal-700 dark:text-charcoal-200 text-sm mt-1">22nd International Conference on Security &amp; Cryptography (SECRYPT-2025)</p>
                  <a href="https://www.scitepress.org/Papers/2025/135138/135138.pdf" className="text-amber-600 dark:text-amber-400 hover:underline text-sm inline-block mt-2">Link ↗</a>
                </div>
                <div className="border-l-2 border-amber-600/60 dark:border-amber-400/60 pl-4">
                  <h4 className="font-semibold text-charcoal-900 dark:text-charcoal-50">Evaluating Blockchain's Role in Enhancing Capability-Based Access Control in IIoT Environments</h4>
                  <p className="text-charcoal-700 dark:text-charcoal-200 text-sm mt-1">BSc Thesis</p>
                  <a href="https://drive.google.com/file/d/1ZpWAWATM5w20nI6Ctk6zv1njeAr4_iPk/view?usp=sharing" className="text-amber-600 dark:text-amber-400 hover:underline text-sm inline-block mt-2">Link ↗</a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2" />
                <h3 className="font-mono text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-amber-600/60 dark:border-amber-400/60 pl-4">
                  <h4 className="font-semibold text-charcoal-900 dark:text-charcoal-50">MSc in Information Systems Development and Security</h4>
                  <p className="text-charcoal-700 dark:text-charcoal-200 text-sm mt-1">Athens University of Economics and Business</p>
                  <p className="text-charcoal-700 dark:text-charcoal-200 text-sm">2025 - Present</p>
                  <p className="text-charcoal-700 dark:text-charcoal-200 text-sm">Grade: 8.94/10</p>
                </div>
                <div className="border-l-2 border-amber-600/60 dark:border-amber-400/60 pl-4">
                  <h4 className="font-semibold text-charcoal-900 dark:text-charcoal-50">BSc in Informatics</h4>
                  <p className="text-charcoal-700 dark:text-charcoal-200 text-sm mt-1">Athens University of Economics and Business</p>
                  <p className="text-charcoal-700 dark:text-charcoal-200 text-sm">2021 - 2025</p>
                  <p className="text-charcoal-700 dark:text-charcoal-200 text-sm">Grade: 8.75/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 border-t border-charcoal-200 dark:border-charcoal-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-amber-600 dark:text-amber-400 mb-2">// 05_skills</p>
          <div className="mt-5">
            <div className="flex items-center mb-6">
              <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2" />
              <h3 className="font-mono text-lg font-semibold">Core Skills</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-charcoal-100 dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-700 p-6">
                  <h4 className="font-mono text-sm text-charcoal-700 dark:text-charcoal-200 mb-4">
                    {category.title.toLowerCase()}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="font-mono bg-charcoal-50 dark:bg-charcoal-800 text-charcoal-700 dark:text-charcoal-200 px-2.5 py-1 text-xs border border-charcoal-200 dark:border-charcoal-700">
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
      <section id="contact" className="py-20 border-t border-charcoal-200 dark:border-charcoal-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-sm text-amber-600 dark:text-amber-400 mb-2">// 06_contact</p>
          <h2 className="font-mono text-2xl font-semibold mb-4">let's work together</h2>
          <p className="text-charcoal-700 dark:text-charcoal-200 mb-8">I'm always interested in hearing about new projects and opportunities.</p>
          <a
            href="mailto:elenikehrioti@gmail.com"
            className="inline-block font-mono border border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 px-8 py-3 hover:bg-amber-600/10 dark:hover:bg-amber-400/10 transition-colors"
          >
            get in touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-charcoal-200 dark:border-charcoal-700 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-mono text-charcoal-700 dark:text-charcoal-200 text-sm">EK</span>
            <div className="flex space-x-6">
              <a href="https://github.com/EleniKechrioti" className="text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/eleni-kechrioti-092137239" className="text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:elenikehrioti@gmail.com" className="text-charcoal-700 dark:text-charcoal-200 hover:text-amber-600 dark:hover:text-amber-400">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Copyright & Last Updated */}
          <div className="mt-6 flex flex-col items-center gap-2 text-center font-mono text-xs text-charcoal-700/70 dark:text-charcoal-200/70">
            <p>&copy; {new Date().getFullYear()} Eleni Kechrioti. All rights reserved.</p>
            <p className="opacity-80">last_updated: 10/07/2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;