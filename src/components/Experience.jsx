import React from "react";
import "../App.css";

const Skills = () => {
  const experienceTimelineData = [
    {
      "key": "001",
      "dateText": "Sep 2024 - Dec 2024",
      "title": "The P Foundation",
      "subtitle": "Full-Stack Web Developer with AI Focus",
      "details": [
        "Location: Norman, Oklahoma, United States",
        "Developed a high-performance AI-driven web platform using JavaScript, Python, and Java, implementing scalable frontend features for personalized user experiences.",
        "Engineered a secure authentication system with OTP verification to ensure user data security and seamless interaction with the platform.",
        "Integrated RESTful APIs and microservices to enhance platform scalability and maintainability."
      ]
    },
    {
      "key": "002",
      "dateText": "May 2024 - Aug 2024",
      "title": "The P Foundation",
      "subtitle": "Data Science and Product Developer Intern",
      "details": [
        "Location: Norman, Oklahoma, United States",
        "Developed and optimized deep learning models using Python, TensorFlow, and Keras to achieve high detection accuracy (95%) for medical image analysis (Glaucoma and Cataract).",
        "Managed and transformed large datasets (10,000+ images) through preprocessing and augmentation to improve model accuracy and reduce training time, leveraging Python, TensorFlow, and Keras.",
        "Automated ML workflows, streamlining data preprocessing, training, and evaluation to improve efficiency."
      ]
    },
    {
      "key": "003",
      "dateText": "Jun 2020 - Jun 2023",
      "title": "SRI SAI VIVEKA TECHNOLOGIES (SSVT)",
      "subtitle": "Web Developer",
      "details": [
        "Location: Hyderabad, Telangana, India",
        "Redesigned a web-based packaging solutions portal, boosting customer engagement by 40% through enhanced interactivity and intuitive navigation.",
        "Developed responsive and accessible web applications using HTML5, CSS3, JavaScript, and React.js, ensuring seamless functionality across all devices.",
        "Integrated APIs and optimized front-end performance, collaborating with back-end developers to enhance data interaction and user experience."
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
