'use client';

// Updated design with dark theme and blue colors - v2.0
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaSearch, FaFileAlt, FaCog, FaPaperPlane, FaGraduationCap, FaBriefcase, FaCode, FaAward, FaUsers, FaTools, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dynamicTexts = [
    "Hello! I'm a Computer Science PhD Student",
    "Add > Commit > Push >",
    "Let's Monitor Incredible Work Together"
  ];

  useEffect(() => {
    const currentText = dynamicTexts[currentTextIndex];
    
    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
      }
    }
  }, [displayText, isDeleting, currentTextIndex, dynamicTexts]);

  const navItems = [
    { name: 'Home', path: '/', icon: FaSearch },
    { name: 'Education', path: '/education', icon: FaGraduationCap },
    { name: 'Experience', path: '/experience', icon: FaBriefcase },
    { name: 'Projects', path: '/projects', icon: FaCode },
    { name: 'Skills', path: '/skills', icon: FaTools },
    { name: 'Certifications', path: '/certifications', icon: FaAward },
    { name: 'Volunteer', path: '/volunteer', icon: FaUsers },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <FaTimes className="w-5 h-5 text-blue-400" /> : <FaBars className="w-5 h-5 text-blue-400" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 right-4 z-50 bg-gray-800 rounded-lg p-4 shadow-xl">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <item.icon className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Fixed Navigation Icons */}
      <div className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="block p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            title={item.name}
          >
            <item.icon className="w-5 h-5 text-blue-400" />
          </Link>
        ))}
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Profile */}
          <div className="space-y-6">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl mb-6">
                <Image
                  src="/profile-photo.jpg"
                  alt="Ismail Gargouri"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2 text-center lg:text-left">Ismail Gargouri</h1>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center lg:text-left">COMPUTER SCIENCE PHD STUDENT</h2>
              <p className="text-gray-300 mb-2 text-center lg:text-left">ismail.gargouri@und.edu</p>
              <p className="text-gray-300 mb-6 text-center lg:text-left">Based in Grand Forks, ND</p>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                <a href="https://linkedin.com/in/ismail-gargouri" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/igargouri10" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="mailto:ismail.gargouri@und.edu" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
              
              <a
                href="https://drive.google.com/file/d/1_Nhnc9q6_y5xyFLnAXzd_gTx5LmJAWeg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
              >
                View My CV
              </a>
            </div>
          </div>

          {/* Right Column - About */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-blue-400 font-semibold">ABOUT</h3>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {displayText}
                <span className="text-blue-400">|</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Dynamic and rigorous computer science PhD student with advanced technical skills in machine learning, 
                AI, and full-stack development. Proven ability to lead complex projects under tight deadlines.
              </p>
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-blue-400 font-semibold">RESUME</h3>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">Education & Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h5 className="font-semibold text-blue-400">Computer Science PhD</h5>
                    <p className="text-gray-300">University of North Dakota</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-1 sm:mt-0">2024 - Present</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h5 className="font-semibold text-blue-400">Master's in Computer Science</h5>
                    <p className="text-gray-300">University of North Dakota</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-1 sm:mt-0">2022 - 2024</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h5 className="font-semibold text-blue-400">Bachelor's in Computer Science</h5>
                    <p className="text-gray-300">Higher Institute of Computer Science and Multimedia of Sfax</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-1 sm:mt-0">2018 - 2022</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Key Experience</h4>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h5 className="font-semibold text-blue-400">Graduate Research Assistant</h5>
                    <p className="text-gray-300">University of North Dakota</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-1 sm:mt-0">2025 - Present</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h5 className="font-semibold text-blue-400">Automotive Data Scientist</h5>
                    <p className="text-gray-300">KPIT</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-1 sm:mt-0">2024</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h5 className="font-semibold text-blue-400">Full Stack Developer</h5>
                    <p className="text-gray-300">Reach Volt</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-1 sm:mt-0">2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-blue-400 font-semibold">CERTIFICATIONS & COMMUNITY INVOLVEMENT</h3>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex flex-wrap space-x-4 mb-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">Certifications</button>
              <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Community Involvement</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300">Machine Learning & AI</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300">Data Science & Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300">Full Stack Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300">Cloud Computing</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Link href="/certifications" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                View All Certificates
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-blue-400 font-semibold">FRAMEWORKS, LANGUAGES AND TOOLS</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'SQL', icon: '🗄️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'AWS', icon: '☁️' },
              { name: 'TensorFlow', icon: '🧠' },
              { name: 'Git', icon: '📝' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'Apache Spark', icon: '⚡' },
              { name: 'Java', icon: '☕' },
              { name: 'Linux', icon: '🐧' }
            ].map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 lg:p-4 text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="text-2xl lg:text-3xl mb-2">{skill.icon}</div>
                <div className="text-xs lg:text-sm text-gray-300">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-blue-400 font-semibold">CONTACT</h3>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 lg:p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Let's Monitor Incredible Work Together
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <p className="text-gray-300 mb-2">ismail.gargouri@und.edu</p>
                <p className="text-gray-300">Based in Grand Forks, ND</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/ismail-gargouri" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/igargouri10" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="mailto:ismail.gargouri@und.edu" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-800">
          <p className="text-gray-400">© 2025 Ismail Gargouri. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
