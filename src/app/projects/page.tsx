'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "YouTube ETL Pipeline and Streamlit Dashboard",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/youtube-etl-project",
    achievements: [
      "Developed a full-stack ETL pipeline to automate the extraction of public video data from the YouTube Data API, including metadata like title, views, likes, and publish dates.",
      "Implemented a modular architecture (extract, transform, load) using Python and pandas, saving data to a local SQLite database for storage and future analysis.",
      "Designed transformation functions to clean and enrich the dataset by converting formats, generating video age metrics, and removing duplicates."
    ]
  },
  {
    title: "Robust Reinforcement Learning for Autonomous UAV Landing",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/dqn_aircraft_control",
    achievements: [
      "Engineered a Deep Q-Network (DQN) control system in PyTorch to autonomously land a UAV, implementing the full agent lifecycle including an epsilon-greedy policy, experience replay, and a custom trainer to solve the Bellman equation for optimal throttle control.",
      "Designed and built a high-fidelity 2D aircraft simulation in Python using the Pymunk physics engine, modeling complex aerodynamics with force-lookup tables and architecting a state representation that incorporates temporal dynamics for improved agent decision-making.",
      "Developed a resilient learning framework by introducing a simulated communication loss module within the environment, successfully training the agent to maintain flight stability and achieve a 100% landing success rate despite receiving delayed state information."
    ]
  },
  {
    title: "Feed-Forward Neural Network for Aircraft Pitch Prediction",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/ffnn_aircraft_pitch_detection",
    achievements: [
      "Developed a feed-forward neural network (FNN) in Python to predict aircraft pitch from flight characteristics (5400+ data points), incorporating He initialization, gradient clipping, and early stopping (patience=20) for robust training.",
      "Optimized model performance through automated hyperparameter tuning (10+ randomized trials), identifying stochastic gradient descent with ReLU activation and a 0.05 learning rate as the superior configuration, achieving a minimum training MSE of 0.0350.",
      "Evaluated the optimized model's generalization on unseen test data, yielding a rescaled Test MSE of 2.5609, and implemented visualization tools (loss curves, actual vs. predicted plots) for comprehensive performance analysis and reporting."
    ]
  },
  {
    title: "Feedforward Neural Network for Car Price Prediction",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/ffnn_car_price_prediction",
    achievements: [
      "Developed a NumPy-based Feedforward Neural Network to predict used car prices, implementing a comprehensive preprocessing pipeline handling currency/unit conversions, text parsing, and engineering a 'Car Brand Region' feature from raw data (5500+ entries).",
      "Analyzed complex feature interactions and data distributions through 13+ visualizations (histograms, scatterplots, heatmap) and compared Batch vs. Stochastic Gradient Descent, demonstrating SGD's superior convergence via RMSE tracking over 100 epochs.",
      "Implemented feature normalization (z-score) and a prediction function capable of handling scaled/unscaled inputs, saving trained model parameters, and visualizing learning curves for performance evaluation and model persistence."
    ]
  },
  {
    title: "Modeling Multiple Relationships Utilizing Multiple Linear Regression with Gradient Descent",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/multiple_lr_gradient_descent",
    achievements: [
      "Developed an MLR model optimized with Gradient Descent, achieving an R² score of 0.683.",
      "Implemented data preprocessing (standardization) and hyperparameter tuning (learning rate=0.01) to enhance stability and convergence.",
      "Evaluated performance using MSE, MAE, R², SMAPE and visualized results with actual vs. predicted plots and 3D regression surfaces."
    ]
  },
  {
    title: "Training a Feedforward Neural Network for XOR Classification: A Comparative Study",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/ffnxorimplementation",
    achievements: [
      "Designed and trained a feedforward neural network using stochastic and batch gradient descent, achieving a minimum MSE of 0.0073.",
      "Conducted comprehensive hyperparameter analysis across 12 configurations (varying learning rates, bias inclusion, training strategies).",
      "Visualized and evaluated convergence, demonstrating stochastic training with bias and a learning rate of 0.10 as the fastest and most accurate."
    ]
  },
  {
    title: "Pixel-Level Detection of AI-Generated Images Using CNNs and Grad-CAM",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/gradcam_ai_image_detection",
    achievements: [
      "Conducted an in-depth literature review and proposed a CNN-based pixel-level anomaly detection framework.",
      "Curated and partially preprocessed the ArtiFact dataset (31,933 images), targeting over 95% classification accuracy.",
      "Designed a supervised learning pipeline incorporating Grad-CAM visualizations for model interpretability and benchmarking."
    ]
  },
  {
    title: "Development of a Focused Web Search Engine with TF-IDF-Based Page Ranking",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/tensorflow_web_engine",
    achievements: [
      "Developed a focused web crawler extracting and ranking pages based on TF-IDF relevance, starting from seed URLs.",
      "Designed a Python back-end integrating content extraction, hyperlink crawling, and dynamic priority ranking.",
      "Engineered a user interface for queries and ranked results, optimizing for scalability to 100+ pages."
    ]
  },
  {
    title: "Focused Web Crawler and Search Engine with PHP and MySQL",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/webcrawler",
    achievements: [
      "Designed and implemented a focused web crawler (using lynx, PHP, shell scripting) to retrieve and index up to 100 topic-relevant pages.",
      "Engineered a relational MySQL database to store crawled data, keywords, and relevance scores for efficient search.",
      "Developed an interactive PHP front-end for crawling, indexing, searching, resetting datasets, and visualizing ranked results."
    ]
  },
  {
    title: "Labeling & Classification of Income Tax Fraud (NY State Dataset) using Python",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/nytaxfrauddetect",
    achievements: [
      "Detected and classified fraudulent records with 99% accuracy using K-Means clustering and Isolation Forest anomaly detection.",
      "Engineered and assessed three classification models, selecting Extra Trees as optimal (99% accuracy, 1.09s compute time)."
    ]
  },
  {
    title: "Graph Search Algorithms: DFS & BFS for Maze Exploration",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/dfs-maze-pathfinder",
    achievements: [
      "Deployed DFS and BFS algorithms in Python, achieving a 15% improvement in pathfinding efficiency over baseline.",
      "Established a systematic approach for node data management (using dictionaries and stacks), leading to a 40% improvement in system responsiveness."
    ]
  },
  {
    title: "Optimized Q-Learning for Continuous State Control in CartPole-v1",
    location: "Grand Forks, ND",
    github: "https://github.com/igarg2001/cartpole-q-learning",
    achievements: [
      "Developed a Python Q-learning agent achieving an average reward of 195 after 500 training episodes.",
      "Engineered state-space discretization to adapt tabular Q-learning for continuous state variables.",
      "Improved agent performance by ~200% over baseline through strategic hyperparameter tuning (learning rate, discount factor, epsilon decay)."
    ]
  },
  {
    title: "Database-Driven E-commerce Bookstore with User and Admin Functionalities",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/ecom_bookstore_web",
    achievements: [
      "Engineered a functional online bookstore using Oracle 21c supporting user accounts, browsing, purchasing for 50+ users, and admin book management (100+ titles).",
      "Implemented secure registration/login/logout and admin functionalities using HTML, CGI, Perl, Java, SQL.",
      "Developed dynamic title-based search and detailed book/customer info display with clickable hyperlinks, including a \"Display Source\" feature for 5000+ lines of code."
    ]
  },
  {
    title: "User-Friendly Mobile App for Browsing and Purchasing Books",
    location: "Grand Forks, ND",
    github: "https://github.com/igargouri10/ecom_bookstore_mobile",
    achievements: [
      "Developed a mobile commerce app for book browsing, purchasing, and user account management with secure login.",
      "Implemented dynamic price range searching (0−10, 10−20, etc.) via a streamlined mobile interface.",
      "Engineered administrator functions for data entry, system reset, and detailed book/customer views via hyperlinks."
    ]
  },
  {
    title: "Sales Focused Job Finding Web Application",
    location: "Sfax, TUNISIA",
    github: "https://github.com/igargouri10/career.spot.git",
    achievements: [
      "Designed and developed a full-stack web application using React.js (front-end) and Node.js/Express.js (back-end) following the MVC architecture, resulting in a scalable and maintainable codebase.",
      "Integrated Stripe.js for online payment processing, reducing transaction errors by 20%, and implemented JWT-based authentication to ensure secure user access.",
      "Optimized application data storage by utilizing MongoDB NoSQL SaaS solutions, improving database query performance by 25% and enhancing user experience."
    ]
  }
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Projects
        </h1>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
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
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">{project.location}</p>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 md:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>View Code</span>
                  </a>
                )}
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {project.achievements.map((achievement, achievementIndex) => (
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