import React from 'react';
import profilePhoto from '../assets/Profile.jpg';
import './About.css'; // Ensure to include the custom CSS file

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Photo Section */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={profilePhoto}
              alt="Vaisaali"
              className="img-fluid rounded-rectangle profile-photo"
            />
          </div>
          {/* About Content Section */}
          <div className="col-md-6">
            <h2 className="text-dark">About Me</h2>
            <p className="lead mt-3 text-dark">
              I’m Vaisaali, a passionate and motivated student with strong SQL expertise and a solid foundation in machine learning. My journey in data-driven technologies has fueled my ambition to become an ML Engineer, where I can develop intelligent systems and innovative solutions. With a keen interest in leveraging data to solve real-world challenges, I am also exploring deep learning to broaden my skill set and contribute to impactful projects that create meaningful change.
            </p>
            <a
              href="https://www.linkedin.com/in/vaisaali18/"
              className="btn btn-custom mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
