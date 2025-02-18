import React from "react";
import Online from "/src/assets/maxr.jpg";
import Library from "/src/assets/ji.webp";
import Stream from "/src/assets/Screenshot 2025-02-17 161631.png";
import ASD from "/src/assets/AutismPredictionusingMachineLearning20240826171912.png";
import Diabetes from "/src/assets/max.jpg";
// import mancala from '../assets/portfolio/mancala.png';
// import valet from '../assets/portfolio/valet.png';
// import exercisetrack from '../assets/portfolio/exercisetrack.png';
import "../App.css";

// PROJECTS SECTION //
const Portfolio = () => {
  // Array for displaying projects
  const portfolios = [
    {
      id: 1,
      src: Online,
      href: "https://github.com/pkchoudary/Online-Doctor-Appointment-Booking-System-PHP-and-MySQL",
    },
    {
      id: 2,
      src: Library,
      href: "https://github.com/pkchoudary/Library-Management-System",
    },
    {
      id: 3,
      src:  Stream,
      href: "https://github.com/pkchoudary/StreamZ",
    },
    {
      id: 4,
      src: ASD,
      href: "https://github.com/pkchoudary/ASD-prediction-tool-using-Python",
    },
    {
      id: 5,
      src: Diabetes,
      href: "https://github.com/pkchoudary/Diabetes-Prediction-Using-Machine-Learning",
    },
  ];

  return (
    <div name="Projects" className="w-full min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-6xl inline font-bold">
            <span id="Pavan">Projects</span>
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div
              key={id}
              className="rounded-lg border-2 border-solid border-gray-300 bg-white"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-t hover:opacity-30 transition duration-300 ease-in-out"
                />
              </a>
              {id === 1 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">
                  Online-Doctor-Appointment-Booking-System-PHP-and-MySQL
                  </p>
                  <p className="text-sm text-gray-500">
                  #PHP, #HTML, #CSS, #JavaScript, #SQL, #Bootstrap, #jQuery, #Session Management, #Password Hashing, #CSRF Protection, #Input Validation & Sanitization, #AJAX, #REST API
                  </p>
                </div>
              )}
              {id === 2 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">Library-Management-System-Using-PHP, HTML, CSS, MySQL</p>
                  <p className="text-sm text-gray-500">
                  #PHP, #HTML, #CSS, #MySQL, #JavaScript, #Bootstrap, #jQuery, #Session Management, #Password Hashing, #Input Validation & Sanitization, #CRUD Operations, #Database Design, #AJAX
                  </p>
                </div>
              )}
              {id === 3 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">Stream-Z: AI-Powered-Global-Streaming-Search-Platform</p>
                  <p className="text-sm text-gray-500">
                  #React, #JavaScript, #HTML, #CSS, #TMDb API, #Node.js, #Express, #REST API, #AJAX, #Redux, #Bootstrap, #jQuery, #API Integration, #Responsive Design, #Web Performance Optimization, #State Management, #React Router, #Database Management, #User Authentication, #Search Algorithms, #Multi-Country Support
                  </p>
                </div>
              )}
              {id === 4 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">ASD-prediction-tool-using-Python</p>
                  <p className="text-sm text-gray-500">
                  #Python, #Machine Learning, #Pandas, #NumPy, #Scikit-learn, #TensorFlow, #Keras, #Data Preprocessing, #Model Training, #Feature Engineering, #Model Evaluation, #Cross-validation, #Accuracy Metrics, #Data Visualization, #Seaborn, #Matplotlib, #Deep Learning, #Neural Networks, #Random Forest, #Logistic Regression, #Support Vector Machine (SVM), #Hyperparameter Tuning
                  </p>
                </div>
              )}
              {id === 5 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">
                  Diabetes-Prediction-Using-Machine-Learning
                  </p>
                  <p className="text-sm text-gray-500">
                  #Python, #Machine Learning, #Pandas, #NumPy, #Scikit-learn, #Logistic Regression, #Random Forest, #Support Vector Machine (SVM), #K-Nearest Neighbors (KNN), #Data Preprocessing, #Feature Engineering, #Model Evaluation, #Accuracy Metrics, #Cross-validation, #Data Visualization, #Seaborn, #Matplotlib, #Hyperparameter Tuning, #Decision Trees, #Neural Networks
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* This <style jsx> block is used in Next.js projects.
          If you're using Create React App or another setup, move these styles to your CSS file. */}
      <style jsx>{`
        @media (max-width: 850px) {
          .max-w-screen-lg {
            margin-top: 9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
