import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PartnerDetails.css';

const PartnerDetailsAOSmith = () => {
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
      section: "Wall-Mounted Heat Pumps",
      products: [
        {
          name: "HPW 80",
          type: "Wall-Mounted | 80 L",
          detail: "A wall-mounted heat pump water heater that absorbs heat from surroundings to produce hot water with minimal energy. Features AES (Adaptive Energy-Saving System), two backup heating elements for quick recovery, and a patented glass-lined protective tank for longer life.",
          img: "/AS1.png",
          specs: ["80 L Tank", "210 W Input", "55°C Heat Pump", "Glass-Lined Tank", "Remote Control", "45 kg"]
        }
      ]
    },
    {
      section: "Integrated Heat Pumps",
      products: [
        {
          name: "HPI 40",
          type: "Integrated | 150 L",
          detail: "An integrated heat pump water heater (heat pump and tank in one unit) for service areas or balconies. AES and interactive remote control cut water heating cost by up to 75%. A MAX function provides more hot water output.",
          img: "/AS2.png",
          specs: ["150 L Tank", "460 W Input", "55°C Heat Pump", "75% Cost Saving", "MAX Function", "87 kg"]
        },
        {
          name: "HPI 50",
          type: "Integrated | 180 L",
          detail: "The larger model of the HPI series — an integrated heat pump water heater for service areas or balconies, with AES, interactive remote control, and a claimed 75% reduction in water heating cost. MAX function gives more hot water output.",
          img: "/AS3.png",
          specs: ["180 L Tank", "460 W Input", "55°C Heat Pump", "75% Cost Saving", "Glass-Lined Tank", "92 kg"]
        }
      ]
    },
    {
      section: "Split Heat Pumps",
      products: [
        {
          name: "HPA 80",
          type: "Split Type | 300 L",
          detail: "A split-type air-to-water heat pump with a dedicated outdoor unit for terraces, balconies, or service areas. High COP ratings of 3.6 and 4.2 ensure maximum energy efficiency. Features AES, time setting, and remote control.",
          img: "/AS4.png",
          specs: ["300 L Tank", "1010 W Input", "65°C Heat Pump", "Split Design", "High COP", "98 kg + 37 kg"]
        },
        {
          name: "HPA 120",
          type: "Split Type | 450 L",
          detail: "The larger model of the HPA split series with a dedicated outdoor unit. Quoted COPs are 3.6 and 4.2 for outstanding energy savings. Patented glass-lined protective tank and high efficiency insulation ensure durability and performance.",
          img: "/AS5.png",
          specs: ["450 L Tank", "1380 W Input", "65°C Heat Pump", "Split Design", "High COP", "133 kg + 55 kg"]
        }
      ]
    },
    {
      section: "Commercial Heat Pumps",
      products: [
        {
          name: "CAHP 80-06",
          type: "Commercial Integrated | 455 L",
          detail: "Designed for a premium bathing experience. A unique heat exchanger reaches 65°C in heat pump mode with 6 kW electrical heating capacity. Automatic intelligent defrost prevents freezing in extreme cold conditions. R134a green refrigerant.",
          img: "/AS6.png",
          specs: ["455 L Tank", "65°C Heat Pump", "6 kW Backup", "R134a Refrigerant", "Auto Defrost", "229 kg"]
        },
        {
          name: "CAHP 120-06",
          type: "Commercial Integrated | 455 L",
          detail: "Same robust design as the CAHP 80-06 — premium bathing experience, 65°C in heat pump mode, 6 kW electrical heating capacity, and automatic defrost for cold conditions. The most popular commercial heat pump model.",
          img: "/AS7.png",
          specs: ["455 L Tank", "65°C Heat Pump", "6 kW Backup", "LCD Display", "Auto Defrost", "229 kg"]
        },
        {
          name: "CAHP 3HP",
          type: "Dual Fan Commercial | 455 L",
          detail: "The dual fan version of the CAHP series. Reaches 65°C in heat pump mode with 12 kW electrical heating capacity — double the single-fan models. Automatic intelligent defrost handles freezing in extreme cold. Built for high-demand commercial applications.",
          img: "/AS8.png",
          specs: ["455 L Tank", "65°C Heat Pump", "12 kW Backup", "Dual Fan", "Auto Defrost", "229 kg"]
        }
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
            <span className="pd-chip">Heat Pump Water Heaters</span>
            <h1 className="pd-title">A.O. Smith</h1>
            <p className="pd-lead-small">Energy-Efficient Heat Pump Water Heating Solutions for Homes & Businesses</p>
          </div>
        </header>

        {data.map((sec, sIdx) => (
          <div key={sIdx} id={`sec-${sIdx}`} className="pd-section-group animate-on-scroll">
            <h2 className="pd-group-label">{sec.section}</h2>
            <div className="pd-product-row-grid">
              {sec.products.map((prod, pIdx) => (
                <div key={pIdx} className="pd-product-horizontal-card">
                  <div className="pd-product-img-box">
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

export default PartnerDetailsAOSmith;

