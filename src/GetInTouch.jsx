import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <section className="git-section" id="contact-info">
      <div className="git-container">
        <div className="git-header">
          <span className="git-tag">Connectivity</span>
          <h2 className="git-title">Get In Touch</h2>
        </div>

        <div className="git-grid">
          <div className="git-card">
            <span className="git-icon">📍</span>
            <div className="git-card-info">
              <span className="git-label">Address</span>
              <p className="git-value">F-152, 4th Flr, Srinidhi Arcade, Bel Layout, Bengaluru 560091</p>
            </div>
          </div>

          <div className="git-card">
            <span className="git-icon">📞</span>
            <div className="git-card-info">
              <span className="git-label">Phone</span>
              <a href="tel:+919148983776" className="git-value">+91-91489 83776</a>
            </div>
          </div>

          <div className="git-card">
            <span className="git-icon">📧</span>
            <div className="git-card-info">
              <span className="git-label">Email</span>
              <a href="mailto:info@flowlogic.in" className="git-value">info@flowlogic.in</a>
            </div>
          </div>
        </div>

        <div className="git-footer-brand">
          <p>© 2026 Flowlogic Solutions</p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;