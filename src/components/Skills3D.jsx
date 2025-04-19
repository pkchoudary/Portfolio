import React from 'react';
import './Skills3D.css';

const skills = [
  { name: 'Java', src: '/logos/java.png' },
  { name: 'JavaScript', src: '/logos/javascript.png' },
  { name: 'HTML5', src: '/logos/html5.png' },
  { name: 'CSS3', src: '/logos/css3.png' },
  { name: 'React.js', src: '/logos/react.png' },
  { name: 'Vue.js', src: '/logos/vue.png' },
  { name: 'Spring Boot', src: '/logos/spring.png' },
  { name: 'Node.js', src: '/logos/nodejs.png' },
  { name: 'MySQL', src: '/logos/mysql.png' },
  { name: 'MongoDB', src: '/logos/mongodb.png' },
  { name: 'Postman', src: '/logos/postman.png' },
  { name: 'Jenkins', src: '/logos/jenkins.png' },
  { name: 'Vercel', src: '/logos/vercel.png' }
];

const Skills3D = () => {
  return (
    <section className="skills-3d-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-3d-grid">
        {skills.map((skill, index) => (
          <div className="skills-icon-3d" key={index}>
            <img src={skill.src} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="skills-details">
        <h3>Languages</h3>
        <p>Python, Java, JavaScript, HTML5, CSS3, SQL, R, PHP</p>

        <h3>Frameworks & Libraries</h3>
        <p>React.js, React Native, Node.js, Flask, TensorFlow, Keras, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, SpaCy, Spring Boot</p>

        <h3>Tools & Technologies</h3>
        <p>Git, GitHub, Firebase, Docker, Postman, Excel, Power BI, Tableau, Jupyter Notebook, Visual Studio, Microsoft Office Suite, Replit.com, MySQL, PostgreSQL, PySpark, Google Sheets</p>

        <h3>Soft Skills</h3>
        <p>Adaptability, Leadership, Critical Thinking, Time Management, Problem Solving, Teamwork, Collaboration</p>
      </div>
    </section>
  );
};

export default Skills3D;