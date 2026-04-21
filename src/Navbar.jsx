import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo-wrapper">
          <a href="/" className="logo-anchor">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </a>
        </div>

        {/* Hamburger Button - Visible only on mobile via CSS */}
        <div 
          className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          {/* Added 'Partners' to this list */}
          {['Home', 'About Us', 'Partners', 'Services', 'References'].map((item, index) => (
            <li key={index} className="nav-li">
              <a 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-text">{item}</span>
              </a>
            </li>
          ))}
          
          {/* MOBILE ONLY CONTACT BUTTON (Hidden on Laptops) */}
          <li className="nav-li mobile-contact-wrapper">
            <a href="#contact" className="premium-btn" onClick={() => setIsMenuOpen(false)}>
              <span>Contact Us</span>
            </a>
          </li>
        </ul>

        {/* DESKTOP ONLY CONTACT BUTTON (Hidden on Phones) */}
        <div className="nav-actions desktop-contact-only">
          <a href="#contact" className="premium-btn">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
