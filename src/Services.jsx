import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    { 
      id: "", 
      title: "Advanced Water Treatment", 
      img: "adv.jpg", // Replace with your image path
      desc: "Clean water isn’t optional—it’s essential. We design and deliver water treatment systems that make water safe for everyday use across industrial, commercial, and residential sectors." 
    },
    { 
      id: "02", 
      title: "Energy-Efficient Hot Water", 
      img: "hot.jpg", 
      desc: "In partnership with Energen, we provide smart hybrid systems that reduce energy usage while ensuring a steady, reliable hot water supply—saving costs without compromising comfort." 
    },
    { 
      id: "03", 
      title: "Integrated Distribution", 
      img: "int.png", 
      desc: "We build distribution systems that work seamlessly in the background, ensuring uninterrupted water supply at the right pressure and quality across large-scale projects." 
    },
    { 
      id: "04", 
      title: "Fire Protection Systems", 
      img: "fire.jpg", 
      desc: "Our fire pump solutions are designed for immediate response and absolute reliability, supporting sprinkler systems to protect lives and property when it matters most." 
    },
    { 
      id: "05", 
      title: "Sewage & Effluent Treatment", 
      img: "Sew.jpg", 
      desc: "Using advanced Daiki Axis (Japan) technology, we treat and recycle wastewater, making it safe for reuse or discharge while supporting environmental responsibility." 
    },
    { 
      id: "06", 
      title: "HVAC Pumping & Control", 
      img: "HVAC.jpg", 
      desc: "Our HVAC systems ensure smooth circulation of chilled water to maintain optimal building temperatures efficiently, adapting to demand without unnecessary energy use." 
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="services-tag">Our Expertise</span>
          <h2 className="services-main-title">Engineering Excellence in Every Drop</h2>
        </div>

        <div className="accordion-wrapper">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-blade ${activeService === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(index)}
              onClick={() => setActiveService(index)}
            >
              {/* Background Reveal Image */}
              <div 
                className="blade-bg-img" 
                style={{ backgroundImage: `url(${service.img})` }}
              ></div>
              <div className="blade-overlay"></div>

              {/* Vertical Title (Visible when closed) */}
              <div className="blade-vertical-title">
                
                <h3 className="blade-label">{service.title}</h3>
              </div>

              {/* Horizontal Content (Visible when expanded) */}
              <div className="blade-content">
                
                <h3 className="content-title" >{service.title}</h3>
                <p className="content-desc">{service.desc}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
