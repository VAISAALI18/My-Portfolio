import React from 'react';
import './Education.css'; // Ensure to include the custom CSS file

const Education = () => {
  return (
    <section id="education" className="education-section py-5">
      <div className="container">
        <h2 className="text-dark">Education</h2>
        
        <div className="education-content">
          {/* Section 1: Coimbatore Institute of Technology */}
          <div className="education-item">
            <h3 className="institution-name">Coimbatore Institute of Technology (CIT)</h3>
            <p className="degree">M.Sc. Decision and Computing Science (DCS)</p>
            <p className="year">(2022 - 2027)</p>
            <p className="cgpa">CGPA: 9.44</p>
          </div>

          {/* Section 2: Bala Matriculation Higher Secondary School */}
          <div className="education-item">
            <h3 className="institution-name">Bala Matriculation Higher Secondary School</h3>
            <p className="degree">Higher Secondary Certificate (HSC)</p>
            <p className="year">(2021 - 2022)</p>
            <p className="percentage">Percentage: 98.5%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
