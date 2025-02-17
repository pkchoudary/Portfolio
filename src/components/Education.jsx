import React from "react";
import "../App.css";

const Skills = () => {
  const educationTimelineData = [
    {
      key: "001",
      dateText: "Sept 2023 – Dec 2024",
      title: "Stevens Institute of technology",
      subtitle: "M.S., Computer Science",
      description: `
        <div class="course-list">
          <h5>Course Work</h5>
          <div class="course-item">CPE 590: Algorithms</div>
          <div class="course-item">CS 550: Computer Organization & Programming</div>
          <div class="course-item">CS 556: Mathematical Foundations of Machine Learning</div>
          <div class="course-item">CS 561: Database Management Systems I</div>
          <div class="course-item">CS 555: Agile Methods for Software Development</div>
          <div class="course-item">CS 573: Fundamentals of Cybersecurity</div>
          <div class="course-item">CS 600: Advanced Algorithm Design & Implementation</div>
          <div class="course-item">CS 703: Practicum in Computer Science</div>
          <div class="course-item">EN 501: Seminar in Sustainability Management</div>
          <div class="course-item">FE 513: Financial Lab: Database Design</div>
          <div class="course-item">FIN 627: Investment Management</div>
          <div class="course-item">MIS 631: Data Management</div>
          <div class="course-item">MIS 632: Data Management Lab</div>

        </div>
      `
    },
    {
      key: "002",
      dateText: "Aug 2019 – May 2023",
      title: "MLRITM College of Engineering",
      subtitle: "B.Tech, Computer Science and Engineering",
      description: `
          <div class="course-list">
          <h5>Course Work</h5>
  <div class="course-item">1910001: Mathematics - I (Linear Algebra and Calculus)</div>
<div class="course-item">1910005: Applied Physics</div>
<div class="course-item">1910020: Programming for Problem Solving</div>
<div class="course-item">1910019: Engineering Graphics</div>
<div class="course-item">1910015: Elements of Electrical Engineering</div>
<div class="course-item">1910006: English</div>
<div class="course-item">1910073: Environmental Science</div>
<div class="course-item">1910074: Induction Program</div>
<div class="course-item">1910002: Mathematics-II</div>
<div class="course-item">1910005: Applied Physics</div>
<div class="course-item">1910020: Programming for Problem Solving</div>
<div class="course-item">1910019: Engineering Graphics</div>
<div class="course-item">1910071: Applied Physics Lab</div>
<div class="course-item">1910072: Programming for Problem Solving Lab</div>
<div class="course-item">1910073: Environmental Science</div>
<div class="course-item">1920002: Analog and Digital Electronics</div>
<div class="course-item">1920006: Data Structures</div>
<div class="course-item">1920509: Computer Oriented Statistical Methods</div>
<div class="course-item">1920510: Computer Organization and Architecture</div>
<div class="course-item">1920511: Object Oriented Programming Using C++</div>
<div class="course-item">1920571: Analog and Digital Electronics Lab</div>
<div class="course-item">1920572: Data Structures Lab</div>
<div class="course-item">1920573: IT Workshop Lab</div>
<div class="course-item">1920574: C++ Programming Lab</div>
<div class="course-item">1920021: Gender Sensitization Lab</div>
<div class="course-item">1940012: Discrete Mathematics</div>
<div class="course-item">1940010: Business Economics & Financial Analysis</div>
<div class="course-item">1940516: Operating Systems</div>
<div class="course-item">1940517: Database Management Systems</div>
<div class="course-item">1940518: Java Programming</div>
<div class="course-item">1940575: Operating Systems Lab</div>
<div class="course-item">1940576: Database Management Systems Lab</div>
<div class="course-item">1940577: Java Programming Lab</div>
<div class="course-item">1940023: Constitution of India</div>
<div class="course-item">1950519: Formal Languages and Automata Theory</div>
<div class="course-item">1950520: Software Engineering</div>
<div class="course-item">1950521: Computer Networks</div>
<div class="course-item">1950522: Web Technologies</div>
<div class="course-item">1950545: Principles of Programming Languages</div>
<div class="course-item">1950548: Information Retrieval Systems</div>
<div class="course-item">1950578: Software Engineering Lab</div>
<div class="course-item">1950579: Computer Networks & Web Technologies Lab</div>
<div class="course-item">1950075: Advanced Communication Skills Lab</div>
<div class="course-item">1950024: Intellectual Property Rights</div>
<div class="course-item">1950027: Artificial Intelligence</div>
<div class="course-item">1960523: Machine Learning</div>
<div class="course-item">1960524: Compiler Design</div>
<div class="course-item">1960525: Design and Analysis of Algorithms</div>
<div class="course-item">1960555: Software Testing Methodologies</div>
<div class="course-item">1960101: Disaster Preparedness & Planning Management</div>
<div class="course-item">1960580: Machine Learning Lab</div>
<div class="course-item">1960581: Compiler Design Lab</div>
<div class="course-item">1960582: Software Testing Methodologies Lab</div>
<div class="course-item">1960026: Cyber Security</div>
<div class="course-item">1970526: Cryptography & Network Security</div>
<div class="course-item">1970527: Data Mining</div>
<div class="course-item">1970559: Cloud Computing</div>
<div class="course-item">1970562: Real Time Systems</div>
<div class="course-item">1970012: Principles of Entrepreneurship</div>
<div class="course-item">1970587: Cryptography & Network Security Lab</div>
<div class="course-item">1970051: Industrial Oriented Mini Project/Summer Internship</div>
<div class="course-item">1970052: Seminar</div>
<div class="course-item">1970053: Project Stage-I</div>
<div class="course-item">1980154: Environmental Impact Assessment</div>
<div class="course-item">1980025: Organizational Behaviour</div>
<div class="course-item">1980567: Distributed System</div>
<div class="course-item">1980053: Project Stage-II</div>
</div>

        </div>
      `
    }
  ];

  return (
    <div name="education" className="education-section w-full min-h-screen flex">
      <div className="education-container max-w-screen-lg p-14">
        <div>
          <h1 className="education-title">
            <span id="Vamsi">Education</span>
          </h1>
          <div className="flex justify-center items-center">
            <div className="timeline">
              {educationTimelineData.map((item) => (
                <div key={item.key} className="timeline-item">
                  <div className="timeline-date">
                    {item.dateText}
                  </div>
                  <div className="timeline-content">
                    <h3 className="institution-name">{item.title}</h3>
                    <h4 className="degree-name">{item.subtitle}</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;