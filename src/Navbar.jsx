// Simplified Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Removed dynamic class since it's now constant */}
      <div className="nav-container">
        <div className="nav-logo-wrapper">
          <a href="/" className="logo-anchor">
            <img 
              src="logo.png" 
              alt="Logo" 
              className="logo-img" 
            />
            <div className="logo-glow"></div>
          </a>
        </div>
        
        <ul className="nav-links">
          {['Home', 'About Us', 'Services', 'References'].map((item, index) => (
            <li key={index} className="nav-li" style={{ '--i': index }}>
              <a href={`#${item.toLowerCase().replace(' ', '')}`} className="nav-item">
                <div className="tab-glow"></div>
                <span className="nav-text">{item}</span>
                <span className="nav-dot"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="premium-btn">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
