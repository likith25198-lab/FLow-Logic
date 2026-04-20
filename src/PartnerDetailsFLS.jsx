import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PartnerDetails.css';

const PartnerDetailsFLS = () => {
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
      id: "ball-valves",
      title: "Ball Valves",
      image: "F1.png",
      products: [
        { 
          name: "Cast Steel 2-Piece", 
          type: "Fire Safe Design", 
          detail: "Advanced API 607 certified fire-safe design with options for PTFE, PEEK, or Metal seating.", 
          specs: ["Size: 15-200mm", "Rating: 150-1500", "API 6D Std"] 
        }
      ]
    },
    {
      id: "forged-valves",
      title: "Forged Steel Series",
      image: "F4.png",
      products: [
        { 
          name: "Gate / Globe / Check", 
          type: "Forged High Pressure", 
          detail: "Compact design for high-pressure systems. Available in A105, F11, and F22 materials.", 
          specs: ["800/1500 Class", "Socket/Threaded", "Hard-Faced"] 
        }
      ]
    },
    {
      id: "cast-valves",
      title: "Cast Industrial Valves",
      image: "F5.png",
      products: [
        { 
          name: "Heavy Duty Gate/Globe", 
          type: "API 600 / BS 1873", 
          detail: "Robust outside screw and yoke (OS&Y) design for main steam and water lines.", 
          specs: ["Up to 200mm", "WCB/CF8M MOC", "Gear Operated"] 
        }
      ]
    },
    {
      id: "control-valves",
      title: "Balancing & Control",
      image: "F6.png",
      products: [
        { 
          name: "Pressure Independent", 
          type: "Control Valve (PICV)", 
          detail: "Ensures precise flow control regardless of pressure fluctuations in the system.", 
          specs: ["PN25 to PN40", "Actuator Ready", "Brass/WCB"] 
        }
      ]
    },
    {
      id: "butterfly",
      title: "Butterfly Valves",
      image: "F3.png",
      products: [
        { 
          name: "High Performance", 
          type: "Wafer / Lug Type", 
          detail: "Triple-offset and concentric designs for bubble-tight shutoff in large pipelines.", 
          specs: ["Lightweight", "Low Torque", "ISO 5211 Top"] 
        }
      ]
    },
    {
      id: "specialty",
      title: "Specialty Flow Gear",
      image: "F2.png",
      products: [
        { 
          name: "Strainer & Dual Plate", 
          type: "System Protection", 
          detail: "Y-Strainers and dual-plate check valves to protect pumps and downstream equipment.", 
          specs: ["Minimal ΔP", "316 SS Mesh", "Flanged Ends"] 
        }
      ]
    }
  ];

  return (
    <div className="pd-modern-page">
      <nav className="pd-top-nav">
        <Link to="/" className="pd-back-btn">← Back to Home</Link>
        <div className="pd-nav-links">
          <span className="pd-nav-brand">FLOWLOGIC VALVES</span>
        </div>
      </nav>

      <div className="pd-compact-wrapper">
        <header className="pd-hero animate-on-scroll">
          <div className="hero-inner">
            <span className="pd-chip">Precision Engineering</span>
            <h1 className="pd-title">FLS <span className="light">Industrial Valves</span></h1>
            <p className="pd-lead-small">API & ASME Certified Flow Control Solutions</p>
          </div>
        </header>

        <div className="pd-sections-grid">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="pd-cat-block animate-on-scroll">
              <h2 className="pd-block-title">{cat.title}</h2>
              <div className="pd-block-content">
                <div className="pd-fluid-image">
                  {/* Space reserved for original valve images */}
                  <img src={cat.image} alt={cat.title} className="original-ratio-img" />
                </div>
                <div className="pd-items-stack">
                  {cat.products.map((prod, pIdx) => (
                    <div key={pIdx} className="pd-compact-card">
                      <span className="pd-type-tag">{prod.type}</span>
                      <h3 className="pd-prod-name">{prod.name}</h3>
                      <p className="pd-prod-detail">{prod.detail}</p>
                      <div className="pd-spec-row">
                        {prod.specs.map((s, sIdx) => (<span key={sIdx} className="pd-pill">{s}</span>))}
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

export default PartnerDetailsFLS;
