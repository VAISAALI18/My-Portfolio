import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <h2>Let's Connect</h2>
        <p className="mt-3">Feel free to reach out to me</p>
        <ul className="list-inline mt-4">
          {/* Email */}
          <li className="list-inline-item mx-2">
            <a href="mailto:your-email@example.com" className="contact-link">
              <i className="fas fa-envelope fa-3x"></i>
              <br />
              Email
            </a>
          </li>
          {/* LinkedIn */}
          <li className="list-inline-item mx-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-linkedin fa-3x"></i>
              <br />
              LinkedIn
            </a>
          </li>
          {/* GitHub */}
          <li className="list-inline-item mx-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-github fa-3x"></i>
              <br />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
