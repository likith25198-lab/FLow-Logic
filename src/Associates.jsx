import React from 'react';
import './Associates.css';

const Associates = () => {
  const associates = [
    { id: 1, logo: "public/L1.png", name: "Partner One" },
    { id: 2, logo: "public/L2.png", name: "Partner Two" },
    { id: 3, logo: "public/L3.png", name: "Partner Three" }
  ];

  return (
    <section className="associates-section">
      <div className="associates-container">
        <div className="associates-header">
          <span className="associates-tag">Strategic Partnerships</span>
          <h2 className="associates-title">Trusted by Industry Leaders</h2>
        </div>

        <div className="associates-grid">
          {associates.map((brand) => (
            <div key={brand.id} className="brand-card">
              <div className="brand-card-inner">
                <div className="brand-corner-accent"></div>
                <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
              </div>
              <div className="brand-card-shadow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associates;