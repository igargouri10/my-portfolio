'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                <Image
                  src="/profile-photo.jpg"
                  alt="Ismail Gargouri - Computer Science PhD Student"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 192px"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-left"
            >
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Ismail Gargouri
              </h1>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Computer Science PhD Student
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                University of North Dakota | Machine Learning & AI Specialist
              </p>
            </motion.div>
          </div>

          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 prose prose-lg dark:prose-invert mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Highly motivated and accomplished Computer Science PhD student with a 4.0 GPA at the University of North Dakota, 
              specializing in Machine Learning, AI, and Data Science. Possesses a strong foundation in software engineering, 
              full-stack development, and data analysis, demonstrated through academic projects, research contributions, 
              and diverse professional experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Proven ability to design, implement, and optimize complex systems, including MDP models for autonomous landing, 
              ETL pipelines, web applications, and machine learning algorithms for classification and regression tasks. 
              Experienced in research methodologies, technical writing, teaching, and collaborating in cross-functional teams.
            </p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/igargouri10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-3xl transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/ismail-gargouri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-3xl transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ismail.gargouri@und.edu"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-3xl transition-colors duration-300"
              aria-label="Email Contact"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
