import React from "react";
import "../App.css";

const Skills = () => {
  const experienceTimelineData = [
    
    {
      key: "001",
      dateText: "Sep 2024 - Present",
      title: "StreamX",
      subtitle: "Founder & Lead Developer",
      details: [
        "Location: United States · Remote",
        "Built a cross-platform movie/TV discovery app using React, TypeScript & Capacitor.",
        "Integrated Firebase Authentication and created real-time search, watchlists, and filters.",
        "Optimized SEO & ASO with branded assets, metadata, and Play Store polish."
      ]
    },
    {
      key: "002",
      dateText: "Oct 2024 - Present",
      title: "PersonalBudget",
      subtitle: "Founder & Lead Developer",
      details: [
        "Location: United States · Remote",
        "Developed a React + Capacitor personal finance app with Firebase Authentication & Firestore.",
        "Created interactive dashboards and deployed app to Google Play with full ASO presence."
      ]
    },
    {
      key: "003",
      dateText: "Nov 2024 - Present",
      title: "TicTacToe",
      subtitle: "Founder & Lead Developer",
      details: [
        "Location: United States · Remote",
        "Built modern Tic Tac Toe using HTML, CSS, JS with smooth animations & custom win logic.",
        "Ported to Android via CapacitorJS and launched on Play Store with staged rollout.",
        "Planned features: score tracking, AI difficulty, and real-time multiplayer."
      ]
    },
    {
      key: "004",
      dateText: "Sep 2024 - Dec 2024",
      title: "The P Foundation",
      subtitle: "Full-Stack Web Developer with AI Focus",
      details: [
        "Location: United States · Remote",
        "Developed a high-performance AI-driven web platform on Replit.com for human behavior analysis, delivering personalized recommendations.",
        "Engineered a secure authentication system with OTP verification and automated AI-generated insights for seamless UX.",
        "Streamlined secure login workflows and built user-friendly interfaces to optimize engagement."
      ]
    },
    {
      key: "005",
      dateText: "May 2024 - Aug 2024",
      title: "The P Foundation",
      subtitle: "Data Science and Product Developer Intern",
      details: [
        "Location: United States · Remote",
        "Built a deep learning model for eye disease detection with 95% accuracy (Glaucoma & Cataract).",
        "Processed and augmented over 10,000 images to optimize model performance using TensorFlow and Keras.",
        "Automated ML workflows and integrated advanced data pipelines to increase training efficiency."
      ]
    },
    {
      key: "006",
      dateText: "Jan 2015 - Aug 2023",
      title: "Danalaxmi General Store",
      subtitle: "Technical Operations Assistant",
      details: [
        "Location: Hyderabad, Telangana, India · On-site",
        "Digitized inventory/sales tracking via Excel and Google Sheets, improving accuracy.",
        "Maintained POS systems and supported basic software troubleshooting.",
        "Collaborated with management on workflow optimization and analytics."
      ]
    },
    {
      key: "007",
      dateText: "Jun 2020 - Jun 2023",
      title: "Sri Sai Viveka Technologies (SSVT)",
      subtitle: "Web Developer",
      details: [
        "Location: India · Hybrid",
        "Developed web apps using HTML, CSS, JS, PHP, MySQL, and React.js.",
        "Created responsive UIs and optimized API integration for performance."
      ]
    }
  ];

  return (
    <section 
      name="experience" 
      id="experience" 
      className="education-section"
    >
      <div className="education-container">
        <h1 className="education-title">
          <span id="Vamsi">Experience</span>
        </h1>
        <div className="timeline">
          {experienceTimelineData.map((item) => (
            <div key={item.key} className="timeline-item">
              <div className="timeline-date">{item.dateText}</div>
              <div className="timeline-content">
                <h3 className="institution-name">{item.title}</h3>
                <h4 className="degree-name">{item.subtitle}</h4>
                <div className="course-list">
                  {item.details.map((detail, index) => (
                    <div key={index} className="course-item">{detail}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
