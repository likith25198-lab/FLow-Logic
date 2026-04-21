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
              <span className="mv-indicator">Vision</span>
              <div className="mv-pulse-dot"></div>
            </div>
            <p className="mv-summary">
             To be the <span className="blue-glow">industry benchmark </span> in water and wastewater engineering, driving innovation, reliability, and sustainability.
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
              To<span className="blue-glow">empower</span> industries and communities with intelligent, eco-conscious fluid management systems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
