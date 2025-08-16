'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    status: "In Progress",
    expectedDate: "July 2025",
    provider: "Google",
    description: "Comprehensive program covering data analytics fundamentals, including data cleaning, analysis, visualization, and R programming."
  },
  {
    title: "AIESEC Certificate of Membership",
    status: "Achieved",
    expectedDate: "January 2022",
    provider: "AIESEC in Tunisia",
    description: "Certificate of participation in AIESEC's international membership program."
  },
  {
    title: "AIESEC Certificate of Membership",
    status: "Achieved",
    expectedDate: "January 2021",
    provider: "AIESEC in Germany",
    description: "Certificate of participation in AIESEC's international membership program."
  },
  {
    title: "AIESEC Certificate of Membership",
    status: "Achieved",
    expectedDate: "August 2020",
    provider: "AIESEC in the United States",
    description: "Certificate of participation in AIESEC's international membership program."
  },
];

export default function Certifications() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Certifications
        </h1>
        
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-500 dark:text-blue-400 text-2xl mt-1">
                  <FaCertificate />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                        {cert.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {cert.provider}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-gray-600 dark:text-gray-300">
                        Expected: {cert.expectedDate}
                      </p>
                      <span className="inline-block bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-sm px-3 py-1 rounded-full">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
} 