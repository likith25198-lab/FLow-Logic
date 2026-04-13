import React from 'react';
import './MissionVission.css';

const MissionVision = () => {
  return (
    <section className="mv-compact-section">
      <div className="mv-compact-container">
        
        {/* The Vision Card */}
        <div className="mv-compact-card">
          <div className="mv-scanner-line"></div>
          <div className="mv-card-content">
            <div className="mv-top-row">
              <span className="mv-indicator">Vision 2030</span>
              <div className="mv-pulse-dot"></div>
            </div>
            <p className="mv-summary">
              Architecting <span className="blue-glow">autonomous water intelligence</span> for zero-waste industrial ecosystems.
            </p>
          </div>
        </div>

        {/* The Mission Card */}
        <div className="mv-compact-card">
          <div className="mv-scanner-line delay"></div>
          <div className="mv-card-content">
            <div className="mv-top-row">
              <span className="mv-indicator">Mission</span>
              <div className="mv-pulse-dot"></div>
            </div>
            <p className="mv-summary">
              Engineering <span className="blue-glow">precision-grade solutions</span> to optimize global industrial water lifecycles.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
