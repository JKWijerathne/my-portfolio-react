import React from 'react';
import './Education.css';
import uniLogo from '../../assets/University.jpg';
import schoolLogo from '../../assets/School.jpg';

const educationData = [
  {
    title: "Bachelor of Science in Software Engineering",
    institution: "University of Kelaniya",
    duration: "2024 - Present",
    grade: "CGPA: 3.79/4.0",
    description: "Specializing in Net-Centric Web Application Development, Data Science and Engineering Application, Health Informatic Engineering, Business Engineering Applications domains.",
    logo: uniLogo
  },
  {
    title: "GCE Advanced Level - Physical Science",
    institution: "Pushpadana Girls' College",
    duration: "2022",
    results: "Results: 3 Bs",
    grade: "Z-Score: 1.5632",
    description: "",
    logo: schoolLogo
  }
];

const Education = () => {
  return (
    <section id="education" className="educationSection">
      <h2 className="sectionTitle">Education</h2>
      <div className="educationContainer">
        {educationData.map((edu, index) => (
          <div key={index} className="educationCard">
            <div className="eduLogoContainer">
              <img src={edu.logo} alt={edu.institution} className="eduLogo" />
            </div>
            <div className="eduDetails">
              <h3 className="eduTitle">{edu.title}</h3>
              <h4 className="eduInstitution">{edu.institution}</h4>
              <span className="eduDuration">{edu.duration}</span>
              <div className="eduHighlights">
                <span className="eduGrade">{edu.results}</span><br></br>
                <span className="eduGrade">{edu.grade}</span>
              </div>
              {edu.description && (
                <p className="eduDesc">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
