import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PartnerDetails.css';

const PartnerDetailsGrundfos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
      });
    }, { threshold: 0.05 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }, []);

  const data = [
    {
      section: "Pressure Boosting Systems",
      products: [
        { name: "Hydro Multi-E", type: "Master Redundancy", detail: "Distributed control where every pump acts as a master. IE5 high-efficiency motors.", img: "/GF1.png", specs: ["IE5 Motor", "App Control"] },
        { name: "Hydro MPC", type: "Advanced Control", detail: "CU 352 controller manages up to 6 pumps for maximum energy optimization.", img: "/GF2.png", specs: ["6 Pump Max", "IE3/IE5"] },
        { name: "Hydro Multi-B", type: "CR/CM Range", detail: "Constant pressure system with external VFD for high-demand residential use.", img: "/GF3.png", specs: ["PN10/16", "VFD Control"] },
        { name: "Hydro Multi-S", type: "Cascade Control", detail: "Simple, reliable automatic cascade control for apartment buildings.", img: "/GG1.png", specs: ["Up to 103m", "2-3 Pumps"] }
      ]
    },
    {
      section: "Individual Pump Units",
      products: [
        { name: "CRE Series", type: "E-Pump", detail: "Variable speed pump with integrated frequency converter for plug-and-pump constant pressure.", img: "/GF4.png", specs: ["SOLO Mode", "0.37-22kW"] },
        { name: "CR/CRI/CRN", type: "Vertical Multistage", detail: "The industry standard for reliability. Features LiqTec dry-run protection.", img: "/GF5.png", specs: ["35 Bar Max", "Cartridge Seal"] }
      ]
    },
    {
      section: "Wastewater & Drainage",
      products: [
        { name: "SEG Grinder", type: "Sewage Pump", detail: "Patented grinder system to prevent clogging in small-bore pressure pipes.", img: "/GF6.png", specs: ["High Head", "Cast Iron"] },
        { name: "DPK / DPK.V", type: "Submersible", detail: "Heavy-duty drainage and vortex sewage pumps for flood and basement pits.", img: "/GF7.png", specs: ["Vortex Impeller", "Thermal Protection"] },
        { name: "DWK Series", type: "Dewatering", detail: "Contractor-grade dewatering pumps for construction and emergency flood removal.", img: "/GF8.png", specs: ["Portable", "90m+ Head"] },
        { name: "UNILIFT AP", type: "Utility Pump", detail: "Stainless steel residential drainage for pools, gardens, and light greywater.", img: "/GF9.png", specs: ["304/316 SS", "Float Switch"] }
      ]
    }
  ];

  return (
    <div className="pd-modern-page">
      <nav className="pd-top-nav">
        <Link to="/" className="pd-back-btn">← Back to Home</Link>
        <div className="pd-nav-links">
          {data.map((item, i) => (
            <a key={i} href={`#sec-${i}`}>{item.section.split(' ')[0]}</a>
          ))}
        </div>
      </nav>

      <div className="pd-compact-wrapper">
        <header className="pd-hero animate-on-scroll">
          <div className="hero-inner">
            
            <h1 className="pd-title">Grundfos </h1>
            <p className="pd-lead-small">Intelligent Water Solutions for Modern Buildings</p>
          </div>
        </header>

        {data.map((sec, sIdx) => (
          <div key={sIdx} id={`sec-${sIdx}`} className="pd-section-group animate-on-scroll">
            <h2 className="pd-group-label">{sec.section}</h2>
            <div className="pd-product-row-grid">
              {sec.products.map((prod, pIdx) => (
                <div key={pIdx} className="pd-product-horizontal-card">
                  <div className="pd-product-img-box">
                    {/* Placeholder for the product image */}
                    <img src={prod.img} alt={prod.name} className="pd-fit-img" />
                    
                  </div>
                  <div className="pd-product-info-box">
                    <span className="pd-type-tag">{prod.type}</span>
                    <h3 className="pd-prod-name">{prod.name}</h3>
                    <p className="pd-prod-detail">{prod.detail}</p>
                    <div className="pd-spec-row">
                      {prod.specs.map((s, idx) => (
                        <span key={idx} className="pd-pill">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerDetailsGrundfos;
