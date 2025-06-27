'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const volunteerExperience = [
  {
    title: "Head of Human Resources",
    organization: "AIESEC in Sfax",
    location: "Tunisia",
    period: "February 2021 - January 2022",
    achievements: [
      "Led talent acquisition, managing a pipeline of 1000+ candidates and increasing recruitment efficiency by 25%.",
      "Mapped and optimized the journey of 100+ members, improving retention and satisfaction.",
      "Designed and delivered 30+ training sessions on leadership, engagement, and professional development."
    ]
  },
  {
    title: "Marketing and Design Manager",
    organization: "AIESEC in Germany",
    location: "Remote",
    period: "September 2020 - January 2021",
    achievements: [
      "Developed and executed marketing strategies, driving a 20% increase in project visibility.",
      "Managed and created content for multiple social media accounts, growing audience engagement by 18%.",
      "Designed email marketing templates and promotional graphics, ensuring consistent brand communication."
    ]
  },
  {
    title: "Project Manager and Team Leader",
    organization: "AIESEC in Sfax",
    location: "Tunisia",
    period: "February 2020 - January 2021",
    department: "Incoming Global Volunteer Department",
    achievements: [
      "Led a team of volunteers in managing international exchange programs.",
      "Coordinated with global partners to facilitate volunteer placements.",
      "Ensured successful completion of volunteer projects and participant satisfaction."
    ]
  },
  {
    title: "Customer Operations Manager",
    organization: "AIESEC in the United States",
    location: "Remote",
    period: "March 2020 - August 2020",
    achievements: [
      "Monitored exchange participants across 10+ countries, ensuring real-time updates on status and experience.",
      "Developed new data auditing tools, increasing record accuracy and efficiency by 30%.",
      "Implemented continuous process improvements based on participant feedback, enhancing the overall exchange experience."
    ]
  },
  {
    title: "Marketing Organizing Committee Member",
    organization: "AIESEC in Sfax",
    location: "Tunisia",
    period: "June 2020 - September 2020",
    achievements: [
      "Contributed to marketing campaigns and event promotions.",
      "Created engaging social media content and promotional materials.",
      "Supported the organization of local AIESEC events and initiatives."
    ]
  },
  {
    title: "Logistics Organizing Committee Member",
    organization: "AIESEC in Sfax",
    location: "Tunisia",
    period: "October 2019 - January 2020",
    achievements: [
      "Coordinated logistics for AIESEC events and activities.",
      "Managed resource allocation and event planning.",
      "Supported successful execution of organizational initiatives."
    ]
  }
];

export default function Volunteer() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Volunteer Experience
        </h1>
        
        <div className="space-y-8">
          {volunteerExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {exp.title}
                    {exp.department && <span className="text-gray-600 dark:text-gray-300 text-base"> - {exp.department}</span>}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">{exp.organization}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.location}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0 whitespace-nowrap">
                  {exp.period}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-base">
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
} 