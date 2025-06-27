'use client';

import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      school: "University of North Dakota",
      location: "Grand Forks, ND",
      degree: "PhD Student in Computer Science",
      date: "Expected Graduation: August 2029",
      gpa: "4.0",
      courses: [
        "Machine Learning",
        "Predictive Modeling",
        "Advanced Database Systems",
        "Artificial Intelligence",
        "Data Mining",
        "Statistical Methods"
      ]
    },
    {
      school: "University of Sfax",
      location: "Sfax, Tunisia",
      degree: "Bachelor of Science in Computer Science",
      date: "June 2023",
      gpa: "3.2",
      courses: [
        "Big Data Analytics",
        "Cloud Computing",
        "Object-Oriented Programming",
        "Software Engineering",
        "Database Management"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Education
        </h1>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{edu.school}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{edu.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-300">{edu.date}</p>
                  <p className="text-gray-600 dark:text-gray-300">GPA: {edu.gpa}</p>
                </div>
              </div>
              <p className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{edu.degree}</p>
              <div>
                <h3 className="text-md font-medium mb-2 text-gray-700 dark:text-gray-300">Relevant Coursework:</h3>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, courseIndex) => (
                    <motion.span
                      key={courseIndex}
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
} 