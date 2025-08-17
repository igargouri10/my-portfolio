'use client';

import PageTransition from '@/components/PageTransition';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    subcategories: [
      {
        subtitle: "Models & Algorithms",
        skills: [
          "Deep Learning (CNNs, Feedforward Neural Networks)",
          "Reinforcement Learning (Q-Learning)",
          "Predictive Modeling (Multiple Linear Regression)",
          "Classification (Extra Trees, K-Means)",
          "Anomaly Detection (Isolation Forest)",
          "Clustering",
          "Markov Decision Processes (MDPs)",
          "Natural Language Processing"
        ]
      },
      {
        subtitle: "Techniques & Concepts",
        skills: [
          "Supervised & Unsupervised Learning",
          "Gradient Descent (Stochastic, Batch)",
          "Hyperparameter Tuning & Optimization",
          "Model Evaluation & Validation",
          "Feature Engineering",
          "Data Preprocessing & Standardization",
          "Model Interpretability (Grad-CAM, XAI)",
          "He Initialization",
          "Gradient Clipping",
          "Early Stopping"
        ]
      },
      {
        subtitle: "Domains",
        skills: [
          "Computer Vision (Image Detection)",
          "Autonomous Systems (Control Policies)",
          "Fraud Detection",
          "Natural Language Processing",
          "Predictive Pricing (Automotive)",
          "Aerospace (Flight Dynamics)"
        ]
      }
    ]
  },
  {
    title: "Data Science & Engineering",
    subcategories: [
      {
        subtitle: "Data Pipelines & ETL",
        skills: [
          "ETL Process Design & Optimization",
          "Data Ingestion & Cleaning",
          "Feature Extraction",
          "Text Parsing",
          "Categorical Encoding",
          "Pipeline Orchestration",
          "Cloud Data Warehousing & Data Lakes",
          "Data Transformation & Modeling",
          "Infrastructure & Containerization",
          "Problem Solving & Debugging"
        ]
      },
      {
        subtitle: "Technologies & Tools",
        skills: [
          "Apache Spark",
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Seaborn",
          "Big Data Analytics",
          "Apache Airflow",
          "Snowflake, AWS S3",
          "dbt",
          "Docker",
          "Streamlit",
          "Python, SQL"
        ]
      }
    ]
  },
  {
    title: "Software & Web Development",
    subcategories: [
      {
        subtitle: "Languages",
        skills: [
          "Python",
          "Java",
          "SQL",
          "JavaScript",
          "PHP",
          "Perl",
          "Shell Scripting",
          "HTML",
          "CGI"
        ]
      },
      {
        subtitle: "Frameworks & Tools",
        skills: [
          "React.js",
          "Node.js",
          "Stripe.js API",
          "Git/GitHub/GitLab",
          "VS Code",
          "PyCharm",
          "Jupyter Notebooks"
        ]
      },
      {
        subtitle: "Databases",
        skills: [
          "MySQL",
          "Oracle 21c",
          "MongoDB"
        ]
      }
    ]
  },
  {
    title: "Business, Marketing & Sales",
    subcategories: [
      {
        subtitle: "Marketing",
        skills: [
          "Marketing Strategy",
          "Social Media Management",
          "Campaign Management",
          "Sales Strategy & Prospecting",
          "Lead Conversion Optimization",
          "Client Outreach"
        ]
      },
      {
        subtitle: "Creative & Communication",
          skills: [
            "Graphic Design",
            "Brand Identity Management",
            "Bilingual Translation (English/Tunisian Arabic)",
            "Cultural Adaptation & Localization",
          ]
      }
    ]
  },
  {
    title: "Research, Academia & Education",
    subcategories: [
      {
        skills: [
          "Scientific Writing & Publication",
          "Literature Review & Gap Analysis",
          "Grant Proposal Support",
          "Academic Mentorship",
          "STEM Education"
        ]
      }
    ]
  },
  {
    title: "Human Resources & Training",
    subcategories: [
      {
        skills: [
          "Talent Acquisition & Recruitment",
          "Training & Development",
          "Member Experience & Retention",
          "Volunteer Management"
        ]
      }
    ]
  },
  {
    title: "Operations, Logistics & Management",
    subcategories: [
      {
        skills: [
          "Program Management",
          "Event Planning & Logistics",
          "Process Improvement",
          "Compliance & Protocol Enforcement",
          "Partnership Management"
        ]
      }
    ]
  },
  {
    title: "Professional & Soft Skills",
    subcategories: [
      {
        subtitle: "Leadership & Communication",
        skills: [
          "Cross-functional Teamwork",
          "Technical & Non-Technical Communication",
          "Teaching & Mentoring",
          "Project Management",
          "Technical Writing",
          "Client Engagement"
        ]
      },
      {
        subtitle: "Languages",
        skills: [
          "English (Fluent)",
          "Tunisian Arabic (Native)",
          "French"
        ]
      }
    ]
  }
];

export default function Skills() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <h1 className="text-3xl font-bold text-white">
              Technical & Professional Skills
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300"
              >
                <h2 className="text-xl font-semibold mb-6 text-blue-400">
                  {category.title}
                </h2>
                
                <div className="space-y-6">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex}>
                      {subcategory.subtitle && (
                        <h3 className="text-lg font-medium mb-3 text-gray-300">
                          {subcategory.subtitle}
                        </h3>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {subcategory.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-800/50 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 