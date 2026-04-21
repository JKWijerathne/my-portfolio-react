import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", url: "https://www.cprogramming.com/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      { name: "Java", url: "https://www.java.com", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "PHP", url: "https://www.php.net", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", url: "https://reactjs.org/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
      { name: "Flutter", url: "https://flutter.dev", img: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" },
      { name: "Spring", url: "https://spring.io/", img: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", url: "https://www.mysql.com/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      { name: "PostgreSQL", url: "https://www.postgresql.org", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" },
      { name: "MongoDB", url: "https://www.mongodb.com/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", url: "https://git-scm.com/", img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "HTML5", url: "https://www.w3.org/html/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
      { name: "CSS3", url: "https://www.w3schools.com/css/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" }
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
