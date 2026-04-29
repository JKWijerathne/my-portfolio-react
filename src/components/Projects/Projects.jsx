import React from 'react';
import './Projects.css';
import projectImage from '../../assets/project.png';

const Projects = () => {
    return (
        <section id="projects" className="projectsSection">
            <h2 className="sectionTitle">Projects</h2>
            <div className="projectsContainer">
                <div className="projectCard">
                    <div className="projectImageWrapper">
                        <img src={projectImage} alt="Colombo International Bookfair Reservation System" className="projectImage" />
                    </div>
                    <div className="projectContent">
                        <h3 className="projectTitle">Colombo International Bookfair Reservation System</h3>
                        <p className="projectDescription">
                            A comprehensive reservation management system built for the Colombo International Bookfair.
                            It features an interactive stall map allowing book publishers and vendors to reserve small, medium, and large stalls.
                            The system includes automated email confirmations with unique QR code passes, an employee-only portal for organizers,
                            and secure JWT-based authentication.
                        </p>
                        <div className="projectTechnologies">
                            <span className="techTag">Java</span>
                            <span className="techTag">Spring Boot</span>
                            <span className="techTag">React</span>
                            <span className="techTag">MySQL</span>
                            <span className="techTag">JWT</span>
                        </div>
                        <a href="https://github.com/JKWijerathne/architecture_project" target="_blank" rel="noreferrer" className="githubLink">
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
