import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PartnerDetails.css';

const PartnerDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
      });
    }, { threshold: 0.05 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }, []);

  const categories = [
    {
      id: "cartridges",
      title: "Cartridge Systems",
      image: "images.jpeg",
      products: [
        { name: "RO Protect", type: "Melt Blown", detail: "Thermally moulded layers for absolute depth filtration.", specs: ["FDA Compliant", "99% Eff."] },
        { name: "Clarypleat", type: "Pleated PP", detail: "Max surface area for high-purity water.", specs: ["Low ΔP", "High Capacity"] },
        { name: "Clarywound", type: "String Wound", detail: "CNC precision weaving for gradient removal.", specs: ["Zero Migration", "Chemical Proof"] }
      ]
    },
    {
      id: "highflow",
      title: "High Flow & Sintered",
      image: "G1.png",
      products: [
        { name: "RO Protect HF", type: "6\" High Flow", detail: "Handles up to 114 m³/hr. 50% smaller footprint.", specs: ["Inside-Out", "Ergonomic"] },
        { name: "Sintered SS", type: "316L Metal", detail: "Cleanable media for steam and high-viscosity polymers.", specs: ["Reusable", "Heat Resistant"] }
      ]
    },
    {
      id: "housings",
      title: "Engineering Vessels",
      image: "G2.png",
      products: [
        { name: "ClarySEA", type: "FRP Housing", detail: "Exceptional resistance for seawater desalination.", specs: ["ASME Section-X", "Zero Bypass"] },
        { name: "Polyfilt", type: "uPVC Series", detail: "UV-stabilized, corrosion-proof alternative to SS.", specs: ["6 Bar Rated", "Economical"] }
      ]
    }
  ];

  return (
    <div className="pd-modern-page">
      <div className="bg-blob blob-1"></div>

      <nav className="pd-top-nav">
        <Link to="/" className="pd-back-btn">
          <span className="arrow">←</span> <span>Back to Home</span>
        </Link>
      </nav>

      <div className="pd-compact-wrapper">
        <header className="pd-hero animate-on-scroll">
          <div className="hero-inner">
            
            <h1 className="pd-title">Gopani <span className="light"></span></h1>
          </div>
        </header>

        <div className="pd-sections-grid">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="pd-cat-block animate-on-scroll">
              <div className="pd-block-header">
                <h2 className="pd-block-title">{cat.title}</h2>
              </div>

              <div className="pd-block-content">
                <div className="pd-mini-image">
                  <img src={cat.image} alt={cat.title} />
                  
                </div>

                <div className="pd-items-stack">
                  {cat.products.map((prod, pIdx) => (
                    <div key={pIdx} className="pd-compact-card">
                      <div className="card-top">
                        <span className="pd-type-tag">{prod.type}</span>
                        <h3 className="pd-prod-name">{prod.name}</h3>
                      </div>
                      <p className="pd-prod-detail">{prod.detail}</p>
                      <div className="pd-spec-row">
                        {prod.specs.map((s, sIdx) => (
                          <span key={sIdx} className="pd-pill">{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
