'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const experiences = [
  {
    title: "Graduate Research Assistant",
    company: "University of North Dakota - College of Engineering and Mines",
    location: "Grand Forks, ND",
    period: "February 2025 - Present",
    achievements: [
      "Authored and edited 5+ sections of a scientific research paper (Introduction, Literature Review, Methodology, Implementation, Conclusion), contributing to publication-quality outputs.",
      "Designed and implemented a Markov Decision Process (MDP) model simulating aircraft landing under control delay, achieving a 30% improvement in landing success rate compared to baseline models.",
      "Conducted over 1000 simulation episodes, optimizing control policies under delayed feedback conditions, leading to significant advancements in autonomous landing system performance."
    ]
  },
  {
    title: "Teaching Assistant - Engineering",
    company: "University of North Dakota - College of Engineering and Mines",
    location: "Grand Forks, ND",
    period: "September 2024 - Present",
    achievements: [
      "Supported faculty in delivering course content and mentoring over 100 undergraduate students in engineering ethics and design.",
      "Assisted in grading assignments and provided detailed feedback to improve student academic performance."
    ]
  },
  {
    title: "Research Lab Assistant - Cybersecurity and AI",
    company: "University of North Dakota - College of Engineering and Mines",
    location: "Grand Forks, ND",
    period: "September 2024 - January 2025",
    achievements: [
      "Identified 3 key research gaps in cybersecurity and AI through comprehensive literature reviews, guiding subsequent research projects and grant proposals.",
      "Developed and implemented Python-based data analysis pipelines, improving data processing efficiency by 15% and contributing to 3 successful grant applications.",
      "Streamlined research processes, resulting in a 10% increase in publication output and enhanced team collaboration."
    ]
  },
  {
    title: "Automotive Data Scientist Engineer",
    company: "KPIT",
    location: "Sfax, Tunisia",
    period: "February 2024 - August 2024",
    achievements: [
      "Designed and optimized ETL pipelines using Python and SQL to extract, transform, and load large datasets, improving data ingestion efficiency by 20%.",
      "Built and deployed data models using tools like Apache Spark and AWS S3 to support real-time analytics, enabling faster business insights for client projects.",
      "Collaborated cross-functionally with data science and engineering teams to automate data validation processes, reducing manual errors by 30% and enhancing data quality compliance."
    ]
  },
  {
    title: "Full Stack Web Developer",
    company: "Reach Volt",
    location: "Sfax, Tunisia",
    period: "February 2023 - June 2023",
    achievements: [
      "Designed and developed a responsive web application using React.js and Node.js, featuring user-friendly interfaces (account creation, login, job posting/search, online payment), driving a 30% increase in user engagement.",
      "Integrated secure online payment functionality with Stripe.js, ensuring 100% transaction success rate and enhancing user trust.",
      "Implemented a scalable MongoDB NoSQL database solution, efficiently managing over 50,000 data entries and maintaining optimal application performance during high user activity."
    ]
  },
  {
    title: "Testing Services Assistant",
    company: "UND Testing Services",
    location: "Grand Forks, ND",
    period: "June 2025 - Present",
    achievements: [
      "Proctored and monitored up to 70 candidates per session, meticulously enforcing test security and confidentiality protocols to maintain the integrity of standardized exams.",
      "Achieved and maintained certifications with 7 national testing companies, including Prometric and Pearson Vue, administering a high volume of online exams and processing all corresponding data and reports with strong attention to detail."
    ]
  },
  {
    title: "Nature Camp Mentor",
    company: "ND EPSCoR",
    location: "Grand Forks, ND",
    period: "May 2025 - June 2025",
    achievements: [
      "Mentored a cohort of 10-20 Tribal College and University (TCU) students, facilitating their acclimation to a university campus and STEM research environments.",
      "Guided students through hands-on work in university STEM labs and supported their preparation for final research presentations.",
      "Acted as a liaison between students and faculty, fostering direct engagement and providing support during social and academic activities to ensure a positive camp experience."
    ]
  },
  {
    title: "Freelance Translator",
    company: "Ithaca Bound Languages",
    location: "Remote - Sfax, Tunisia",
    period: "August 2022 - Present",
    achievements: [
      "Translated over 400 pages and 2800+ statements from English to Tunisian Arabic, maintaining a 99% client satisfaction rate.",
      "Reviewed and optimized contributor content, proposing improvements to enhance platform quality and readability.",
      "Collaborated with cross-functional teams to align translation outputs with platform tone and cultural context requirements."
    ]
  },
  {
    title: "Sales Agent – UK Market",
    company: "Foodomarket",
    location: "Sfax, Tunisia",
    period: "June 2023 - December 2023",
    achievements: [
      "Completed intensive training in sales fundamentals, conversion funnel optimization, and customer engagement strategies.",
      "Prospected and engaged with 100+ potential clients, improving lead conversion rates by 15% through targeted communication and follow-ups.",
      "Drafted and sent personalized outreach emails, maintaining a 90% response follow-up rate."
    ]
  },
  {
    title: "Dining Center Assistant – Allergy Free Section",
    company: "University of North Dakota Dining Services",
    location: "Grand Forks, ND",
    period: "September 2024 - December 2024",
    achievements: [
      "Managed the Allergy Free food station, ensuring strict adherence to health and safety standards.",
      "Maintained cleanliness, restocked supplies, and supported kitchen operations during peak hours."
    ]
  },
  {
    title: "Marketing Manager",
    company: "NEXTWAVE CONSULTING & TRAINING",
    location: "Sfax, Tunisia",
    period: "November 2023 - March 2024",
    achievements: [
      "Developed marketing strategies and managed social media, boosting client engagement by 40%.",
      "Exhibited leadership in developing content and managing campaigns."
    ]
  },
  {
    title: "Graphic Designer Intern",
    company: "Med Two Com Agency",
    location: "Sfax, Tunisia",
    period: "June 2020 - August 2020",
    achievements: [
      "Designed and delivered 200+ graphic assets (logos, posters, brochures), aligning with brand identity standards.",
      "Edited and retouched images to enhance visual quality, improving client satisfaction and retention by 20%.",
      "Researched and applied latest graphic design trends for innovative and client-centric creative outputs."
    ]
  }
];

export default function Experience() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Professional Experience
        </h1>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
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
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
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