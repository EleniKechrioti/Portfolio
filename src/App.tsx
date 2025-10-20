import React, { useState } from 'react';
import { Menu, Github, Linkedin, Mail, Moon, ExternalLink, Code, Newspaper, GraduationCap, BookOpen, FileText, Play, Pause } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const projects = [
    {
      title: "ACCESS",
      description: "ACCESS is an accessibility-focused web and mobile platform designed to assist people with disabilities in navigating urban environments. Built with Flutter, Dart, and Mapbox, it features real-time geolocation, geofencing-based notifications, and crowdsourced reports. A public web dashboard offers analytics with Power BI, while a modular microservices backend supports scalability and data processing.",
      type: "image",
      image: "https://github.com/user-attachments/assets/e282bbde-a32d-4079-b9dc-67cb6d140c5e",
      liveUrl: "https://drive.google.com/file/d/1coYtmAbKNWtAcGz6Zxd1Ak_M5o4avgtl/view",
      sourceUrl: "https://github.com/EleniKechrioti/ACCESS"
    },
    {
      title: "Thea",
      description: "Thea is a full-stack theater booking web app that provides a clean and accessible user experience for exploring plays, booking seats, and storing e-tickets. Built with Flutter (frontend), Firebase, and PDF generation for ticketing, it features seat-specific booking logic, favorite shows, and a customizable admin panel for managing performances and availability.",
      type: "image",
      image: "https://github.com/user-attachments/assets/f76b6e38-d693-4221-b3c3-438f0ee63191", 
      liveUrl: "https://youtu.be/mclSJEVypuQ?si=w-X5gPzh7WQq9Buu",
      sourceUrl: "https://github.com/EleniKechrioti/Thea"
    },
    {
      title: "Malware & Phishing Detection Workshop",
      description: "Designed and led a hands-on workshop that introduced participants to URL and EXE file inspection through an interactive machine learning project. The project classifies malicious and phishing links using real-world datasets, and was used as both an educational tool and a demo in a cybersecurity learning context.",
      type: "image",
      image: "https://github.com/user-attachments/assets/965586ba-6838-4280-8408-4062783d860b",
      sourceUrl: "https://github.com/EleniKechrioti/Malware-and-Phishing-URL-Detection"
    }
  ];

  const handleVideoPlay = (videoElement: HTMLVideoElement) => {
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen  w-full ">
      {/* Navigation */}
      <nav className="fixed w-full bg-gradient-to-br from-rose-500 to-purple-500 shadow-sm z-50 text-white dark:bg-gradient-to-br dark:from-rose-900 dark:to-purple-900">
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
                href="https://drive.google.com/file/d/1SkcTzpbWYrMcyeeMTRIQwMfOgsv3aslb/view?usp=sharing" 
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
          <div className="md:hidden bg-rose-600/90">
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
                className="rounded-full object-cover w-full h-full shadow-lg border-4 border-white dark:border-gray-900"
              />
            </div>
            <div className="text-center md:text-left max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-white">
                Hi, I'm <span className="text-rose-600">Eleni!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed dark:text-white">
                I think I was drawn towards a career in tech because I am a huge fan of iterative processes 
                and making things better. I enjoy digging into how systems break, how to protect them, and how to trace digital evidence. 
                Whether it’s low-level exploits or high-level architecture, I’m driven by curiosity and a need to 
                understand what’s really happening under the hood.
              </p>
              <p className="text-xl text-gray-600 mb-8 dark:text-white">
                I recently completed my BSc in Computer Science at <a href="https://aueb.gr" className="text-rose-600 hover:text-rose-700">AUEB</a>, where I completed my thesis
                on evaluating blockchain's role in enhancing Capability-Based access control in IIoT environments.
              </p>
              <p className="text-xl text-gray-600 mb-8 dark:text-white">
                I am currently pursuing my Master's (MSc) in Information Systems Security & Development at <a href="https://mscis.cs.aueb.gr/en/normal/home" className="text-rose-600 hover:text-rose-700">AUEB</a>.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/EleniKechrioti" className="text-gray-600 hover:text-rose-600 dark:text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/eleni-kechrioti-092137239" className="text-gray-600 hover:text-rose-600 dark:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:elenikehrioti@gmail.com" className="text-gray-600 hover:text-rose-600 dark:text-white">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://alumni.aueb.gr/el/aueb-alumni-mybadge/1952/3efbb6a145a0fb8dc9d29db84307f9eb3538887f479e8c2fd41e7f0d30083b1e" className="text-gray-600 hover:text-rose-600 dark:text-white">
                  <img src="assets\AUEB_alumni_badge.png" width="10%"/>
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
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 relative">
                    {/* {project.type === 'video' ? (
                      <div className="relative h-48 md:h-full md:w-64">
                        <video
                          className="h-full w-full object-cover"
                          poster={project.thumbnail}
                          onClick={(e) => handleVideoPlay(e.target as HTMLVideoElement)}
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const video = e.currentTarget.parentElement?.querySelector('video');
                            if (video) handleVideoPlay(video);
                          }}
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-30 transition-opacity"
                        >
                          {isPlaying ? (
                            <Pause className="w-12 h-12 text-white" />
                          ) : (
                            <Play className="w-12 h-12 text-white" />
                          )}
                        </button>
                      </div>
                    ) : ( */}
                      <img className="h-full object-cover md:h-64" src={project.image} alt={project.title} />
                    {/* )} */}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 mb-4 dark:text-white">{project.description}</p>
                    <div className="flex space-x-4">
                      {project.type === 'image' && (
                        <a href={project.liveUrl} className="inline-flex items-center text-rose-600 hover:text-rose-500">
                          <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                        </a>
                      )}
                      <a href={project.sourceUrl} className="inline-flex items-center text-rose-600 hover:text-rose-500">
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
                <Newspaper className="w-6 h-6 text-rose-600 mr-2" />
                <h3 className="text-2xl font-semibold">Publications</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-rose-600 pl-4">
                  <h4 className="text-lg font-semibold dark:text-white">Bolstering IIoT Resilience: The Synergy of Blockchain and CapBAC</h4>
                  <p className="text-gray-600 dark:text-white">22nd International Conference on <br></br>Security & Cryptography (SECRYPT-2025)</p>
                  <p className="text-gray-600 mt-2 dark:text-white"><a href="https://www.scitepress.org/Papers/2025/135138/135138.pdf"> Link </a></p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-rose-600 pl-4">
                  <h4 className="text-lg font-semibold dark:text-white">Evaluating Blockchain’s Role in Enhancing Capability-Based Access Control in IIoT Environments</h4>
                  <p className="text-gray-600 dark:text-white">BSc Thesis</p>
                  <p className="text-gray-600 mt-2 dark:text-white"><a href="https://drive.google.com/file/d/1ZpWAWATM5w20nI6Ctk6zv1njeAr4_iPk/view?usp=sharing"> Link </a></p>
                </div>
              </div>
            </div>
            
            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-rose-600 mr-2" />
                <h3 className="text-2xl font-semibold dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-rose-600 pl-4">
                  <h4 className="text-lg font-semibold dark:text-white">BSc in Computer Science</h4>
                  <p className="text-gray-600 dark:text-white">Athens University of Economic and Business</p>
                  <p className="text-gray-600 dark:text-white">Oct 2021 - June 2025</p>
                  <p className="text-gray-600 dark:text-white">Grade 8.75/10</p>
                </div>
                <div className="border-l-2 border-rose-600 pl-4">
                  <h4 className="text-lg font-semibold dark:text-white">High School Diploma</h4>
                  <p className="text-gray-600 dark:text-white">Third High School of Chalkida • 2021</p>
                  <p className="text-gray-600 dark:text-white">Grade 19.6/20</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16">
            <div className="flex items-center mb-6">
              <BookOpen className="w-6 h-6 text-rose-600 mr-2" />
              <h3 className="text-2xl font-semibold dark:text-white">Skills</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Python', 'Java', 'Kotlin', 'Dart', 'Flutter', 'React', 'Kali', 'NMAP', 'Jira', 'Node.js', 'TypeScript', 'Docker', 'Git', 'Android studio', 'Jupyter', 'Pytorch'].map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-lg px-4 py-2 text-center  dark:bg-gray-800 dark:text-white">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-rose-500 to-purple-500 text-white dark:bg-gradient-to-br dark:from-rose-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-8">I'm always interested in hearing about new projects and opportunities.</p>
          <a
            href="mailto:elenikehrioti@gmail.com"
            className="inline-block bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
        </div>
      </footer>
    </div>
  );
}

export default App;