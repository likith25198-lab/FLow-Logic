import React from 'react';


const MissionVision = () => {
  return (
    <section className="mv-section" id="aboutus">
      <div className="mv-container">
        
        {/* Mission Card */}
        <div className="mv-card mission">
          <div className="mv-icon-wrapper">
            <div className="mv-pulse"></div>
            <span className="mv-icon">🎯</span>
          </div>
          <h2 className="mv-title">Our Mission</h2>
          <p className="mv-text">
            To empower industries and communities with <strong>intelligent, eco-conscious</strong> fluid management systems.
          </p>
          <div className="mv-glow"></div>
        </div>

        {/* Vision Card */}
        <div className="mv-card vision">
          <div className="mv-icon-wrapper">
            <div className="mv-pulse"></div>
            <span className="mv-icon">👁️</span>
          </div>
          <h2 className="mv-title">Our Vision</h2>
          <p className="mv-text">
            To be the <strong>industry benchmark</strong> in water and wastewater engineering—driving innovation, reliability, and sustainability.
          </p>
          <div className="mv-glow"></div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;