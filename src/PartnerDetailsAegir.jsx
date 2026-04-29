import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PartnerDetails.css';

const PartnerDetailsAegir = () => {
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
      section: "Metering Solutions",
      products: [
        { 
          name: "Smart Water Meters", 
          type: "Ultrasonic IoT", 
          detail: "Ultrasonic IoT Smart Water Meters with cloud integration and online analytics. Patented technology — ultrasonic meters with no reflectors.", 
          img: "/public/A1.png", 
          specs: ["Highly Accurate", "ISO 4064:2014", "Leakage Alerts", "Cloud Based", "No Pressure Drop", "Doesn't Measure Air"] 
        },
        { 
          name: "Retrofit Boards", 
          type: "Infrastructure Conversion", 
          detail: "Convert your legacy infrastructure of Pulse Count or RS485 Modbus Meters into LoRa/WiFi/GSM Smart Meters with our retrofit communication hats.", 
          img: "/public/A2.png", 
          specs: ["Pulse or RS485 Input", "BMS/BIM Integration", "GSM/WiFi Out Option", "Cloud Based", "Mobile & Web App", "Remote Reading"] 
        }
      ]
    },
    {
      section: "Network Gateways",
      products: [
        { 
          name: "Modbus Gateway", 
          type: "4-Channel / 60 Nodes", 
          detail: "4-Channel Modbus Gateway with 60 nodes connectivity and GSM/WiFi uplink. Monitor and control each channel remotely. OTA available.", 
          img: "/public/A3.png", 
          specs: ["LoRa or RS485 Nodes", "GSM/WiFi Uplink", "Integrate BMS/BIM", "Health Monitoring", "Energy Reporting", "OTA Capable"] 
        },
        { 
          name: "LoRa Gateway", 
          type: "India Band / 100 Nodes", 
          detail: "India band LoRa gateway with 100 nodes connectivity and GSM/WiFi uplink. Telemetry on each node strength available.", 
          img: "/public/A4.png", 
          specs: ["LoRa or RS485 Nodes", "GSM/WiFi Uplink", "Integrate BMS/BIM", "Health Monitoring", "Energy Reporting", "OTA Capable"] 
        }
      ]
    },
    {
      section: "Automation & Monitoring",
      products: [
        { 
          name: "Level Monitor", 
          type: "Solar Powered Lidar", 
          detail: "Solar powered lidar based liquid level controllers. Paired with a smart plug for completely wireless automation of sump and OHT water levels. Remotely monitor and control the pump.", 
          img: "/public/A5.png", 
          specs: ["Solar & Wireless", "Auto Level Control", "Water Usage Report", "Dry Run Protection", "Drop-and-Forget", "Highly Accurate"] 
        },
        { 
          name: "Motor Control", 
          type: "Smart Switch", 
          detail: "Smart switch to accept commands from a level monitor or mobile app, to pair with the level monitor. Offers dry run protection and energy measurement.", 
          img: "/public/A6.png", 
          specs: ["Dry Run Protection", "Energy Measurement", "App Integration", "Pump Pairing"] 
        }
      ]
    },
    {
      section: "Environmental Data",
      products: [
        { 
          name: "Rain Gauge", 
          type: "IoT Solar-Powered", 
          detail: "Auto-drain, solar-powered, IoT rain gauge. Place at any location, pair with a WiFi or put a SIM card — that's all you need for hourly rain reporting.", 
          img: "/public/A7.png", 
          specs: ["Auto-Drain", "Solar-Powered", "Hourly Reporting", "SIM/WiFi Support"] 
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
            <span className="pd-chip">Smart IoT Solutions</span>
            <h1 className="pd-title">Aegir</h1>
            <p className="pd-lead-small">Next-Generation Ultrasonic Metering & Wireless Telemetry</p>
          </div>
        </header>

        {data.map((sec, sIdx) => (
          <div key={sIdx} id={`sec-${sIdx}`} className="pd-section-group animate-on-scroll">
            <h2 className="pd-group-label">{sec.section}</h2>
            <div className="pd-product-row-grid">
              {sec.products.map((prod, pIdx) => (
                <div key={pIdx} className="pd-product-horizontal-card">
                  <div className="pd-product-img-box">
                    {/* Space reserved for image */}
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

export default PartnerDetailsAegir;