import React from 'react';
import './Roles.css'; // Import the CSS file

const Roles = () => {
  return (
    <section id="roles" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Roles</h2>
        <div className="row">
          {/* Role 1 */}
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body" data-timestamp="May 2024 - Present">
                <h5 className="card-title fw-bold">Technical Lead</h5>
                <p className="card-subtitle text-muted">Datalytics Club — CIT</p>
                <p className="card-text mt-2">
                  Orchestrated innovative events blending technical challenges with fun activities and served as the spokesperson for workshops.
                </p>
              </div>
            </div>
          </div>
          {/* Role 2 */}
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body" data-timestamp="June 2024 - Present">
                <h5 className="card-title fw-bold">Office Bearer</h5>
                <p className="card-subtitle text-muted">Literary Club — CIT</p>
                <p className="card-text mt-2">
                  Directed strategic initiatives, organized events, and represented the club, fostering collaboration and enhancing engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roles;
