import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      { name: "Java", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "PHP", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
      { name: "Flutter", img: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" },
      { name: "Spring", img: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      { name: "PostgreSQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" },
      { name: "MongoDB", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "HTML5", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
      { name: "CSS3", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skillsSection">
      <h2 className="sectionTitle">Skills</h2>
      <div className="skillsContainer">
        {skillsData.map((category, index) => (
          <div key={index} className="skillCategoryCard">
            <h3 className="categoryTitle">{category.category}</h3>
            <div className="skillIcons">
              {category.skills.map((skill, i) => (
                <a
                  key={i}
                  href={skill.url}
                  target="_blank"
                  rel="noreferrer"
                  className="skillItem"
                  title={skill.name}
                >
                  <div className="iconBox">
                    <img src={skill.img} alt={skill.name} width="50" height="50" />
                  </div>
                  <span className="skillName">{skill.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
