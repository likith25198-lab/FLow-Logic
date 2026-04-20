import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PartnerDetails.css';

const PartnerDetailsEKKI = () => {
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
      id: "sewage",
      title: "Sewage Submersibles (EKKI HOMA)",
      image: "/public/E1.png",
      products: [
        { name: "LINUS 1028", type: "Compact Sewage", detail: "Compact, easy-to-handle submersible for lighter building applications with oil-filled construction.", specs: ["0.7-0.9 kW", "13m Head", "25 m³/h Max"] },
        { name: "LINUS 1030", type: "Mid-Range Sewage", detail: "Engineered for endurance with dual-coated copper windings and sealed terminal boards.", specs: ["0.7-1.2 kW", "19m Head", "43 m³/h Max"] },
        { name: "LINUS 1048", type: "Automatic Sewage", detail: "Lightweight modular design featuring a float switch for fully automatic, clog-free operation.", specs: ["1.1 kW", "14m Head", "36 m³/h Max"] },
        { name: "LINUS 1050", type: "Industrial Sewage", detail: "Powerful series with a large inlet for long-fibre waste and oil chamber lubrication.", specs: ["0.8-4.4 kW", "32m Head", "84 m³/h Max"] },
        { name: "Flo Series", type: "German Engineered", detail: "Designed for heavy-duty sewage handling in residential and industrial buildings.", specs: ["Vortex Impeller", "Solid Handling"] },
        { name: "HYNA Series", type: "Wastewater Specialist", detail: "Premium efficiency wastewater management with German-engineered hydraulic parts.", specs: ["Top 5 Global Tech", "SiC Seals"] }
      ]
    },
    {
      id: "borehole",
      title: "Borehole Submersibles",
      image: "/public/E2.png",
      products: [
        { name: "ULAV 4JVR", type: "4\" Vertical", detail: "High-performance vertical borehole extraction with precision-engineered stages.", specs: ["Stainless Steel", "Corrosion Proof"] },
        { name: "4J / 4JO Series", type: "Standard Borehole", detail: "Reliable extraction for deep-well water supply in residential and agricultural sectors.", specs: ["Energy Efficient", "Sand Resistant"] },
        { name: "4H / 4S Series", type: "Heavy Duty Bore", detail: "High-head delivery borehole pumps built for consistent flow in demanding conditions.", specs: ["Precision Flow", "Multi-Stage"] }
      ]
    },
    {
      id: "openwell",
      title: "Open-Well Sump Submersibles",
      image: "/public/E3.png",
      products: [
        { name: "SUBSEVAK", type: "Sump Submersible", detail: "Submersible pump designed for domestic sumps and overhead tank water transfer.", specs: ["Silent", "Easy Install"] },
        { name: "VOK / VOSVR", type: "Vertical Open-well", detail: "Vertical configuration for narrow sumps and pits, featuring energy-efficient motors.", specs: ["Space Saving", "Robust"] },
        { name: "HOK / HOT", type: "Horizontal Open-well", detail: "Horizontal sump pumps with wide-range performance for building water management.", specs: ["Wide Range", "Durable"] }
      ]
    },
    {
      id: "surface",
      title: "Surface & Monoblocs",
      image: "/public/E4.png",
      products: [
        { name: "HOS / HOSVR", type: "Horizontal Monobloc", detail: "Efficient surface water pumping for boosting and general liquid transfer.", specs: ["High Flow", "Reliable"] },
        { name: "IRAI ESK", type: "Compact Monobloc", detail: "Shield bearing and mechanical seals for extended motor life in residential settings.", specs: ["0.5-2.0 HP", "54 m³/hr Max"] },
        { name: "IRAI ESL", type: "Ultra Quiet Monobloc", detail: "Widest power range in EKKI's surface lineup with exceptionally quiet operation.", specs: ["0.5-10.0 HP", "102 m³/hr Max"] }
      ]
    }
  ];

  return (
    <div className="pd-modern-page">
      <nav className="pd-top-nav">
        <Link to="/" className="pd-back-btn">← Back to Home</Link>
        <div className="pd-nav-links">
          {categories.map(cat => (<a key={cat.id} href={`#${cat.id}`}>{cat.title.split(' ')[0]}</a>))}
        </div>
      </nav>

      <div className="pd-compact-wrapper">
        <header className="pd-hero animate-on-scroll">
          <div className="hero-inner">
            <span className="pd-chip">Top 5 Globally in Sewage Tech</span>
            <h1 className="pd-title">EKKI</h1>
          </div>
        </header>

        <div className="pd-sections-grid">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="pd-cat-block animate-on-scroll">
              <h2 className="pd-block-title">{cat.title}</h2>
              <div className="pd-block-content">
                <div className="pd-fluid-image">
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

export default PartnerDetailsEKKI;