import React from 'react';
import { Link } from 'react-router-dom';
import './Associates.css';

const Associates = () => {
  const associates = [
    { id: 1, logo: "public/L2.png", name: "Gopani", path: "/partner/gopani" },
    { id: 2, logo: "public/L3.png", name: "EKKI", path: "/partner/ekki" },
    { id: 3, logo: "public/L1.png", name: "FLS Valves", path: "/partner/fls" }
  ];

  return (
    <section className="associates-section" id="partners">
      <div className="associates-container">
        <div className="associates-header">
          <span className="associates-tag">Strategic Partnerships</span>
          <h2 className="associates-title">Trusted by Industry Leaders</h2>
        </div>

        <div className="associates-grid">
          {associates.map((brand) => (
            <Link 
              to={brand.path} 
              key={brand.id} 
              className="brand-link"
              style={{ textDecoration: 'none' }}
            >
              <div className="brand-card">
                <div className="brand-card-inner">
                  <div className="brand-corner-accent"></div>
                  <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
                  
                </div>
                <div className="brand-card-shadow"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associates;
