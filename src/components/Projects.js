import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import './Project.css';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row mt-4">
          {/* Project 1 */}
          <div className="col-md-4 text-center project-container">
            <div className="project-item">
              <img src={project1} alt="Phishing URL Detection" className="img-fluid mb-2 project-image" />
              <div className="project-title-overlay">
                <h5>Phishing URL Detection</h5>
              </div>
            </div>
            <a href="https://github.com/VAISAALI18/Phishing-URL-Detection" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">View Project</a>
          </div>
          {/* Project 2 */}
          <div className="col-md-4 text-center project-container">
            <div className="project-item">
              <img src={project2} alt="Real Estate Website" className="img-fluid mb-2 project-image" />
              <div className="project-title-overlay">
                <h5>Real Estate Website</h5>
              </div>
            </div>
            <a href="https://github.com/VAISAALI18/Property-Explorer" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">View Project</a>
          </div>
          {/* Project 3 */}
          <div className="col-md-4 text-center project-container">
            <div className="project-item">
              <img src={project3} alt="OTT Analysis" className="img-fluid mb-2 project-image" />
              <div className="project-title-overlay">
                <h5>OTT Analysis</h5>
              </div>
            </div>
            <a href="https://github.com/VAISAALI18/OTT-Analysis" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">View Project</a>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="https://github.com/VAISAALI18" target="_blank" rel="noopener noreferrer" className="view-all-projects">View All My Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
