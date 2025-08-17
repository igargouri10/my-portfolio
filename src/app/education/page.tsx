'use client';

import PageTransition from '@/components/PageTransition';

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
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <h1 className="text-3xl font-bold text-white">
              Education
            </h1>
          </div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-blue-400">{edu.school}</h2>
                    <p className="text-gray-300">{edu.location}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-400">{edu.date}</p>
                    <p className="text-gray-400">GPA: {edu.gpa}</p>
                  </div>
                </div>
                <p className="text-lg font-medium mb-4 text-white">{edu.degree}</p>
                <div>
                  <h3 className="text-md font-medium mb-2 text-gray-300">Relevant Coursework:</h3>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-800/50 transition-colors duration-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 