import React from 'react';
import './References.css';

const References = () => {
  const feedback = [
    { name: "David Chen", role: "Industrial Operations Manager", text: "Flowlogic transformed our water recycling process. Their engineering team is second to none." },
    { name: "Sarah Jenkins", role: "Sustainability Director", text: "The most reliable eco-conscious fluid systems we've integrated into our plants to date." },
    { name: "Marcus Thorne", role: "Chief Engineer", text: "Professional, innovative, and deeply committed to water security. A benchmark in the industry." },
    { name: "Elena Rodriguez", role: "Municipal Lead", text: "Their holistic approach saved us 30% in distribution costs while improving water quality." },
    { name: "James Wilson", role: "Project Consultant", text: "Cutting-edge technology combined with reliable engineering. Flowlogic is the future." },
    { name: "Dr. Linda Wu", role: "Environmental Researcher", text: "Finally, a company that balances industrial power with true environmental stewardship." }
  ];

  // We double the array to create the infinite loop effect
  const loopList = [...feedback, ...feedback];

  return (
    <section className="refs-section" id="references">
      <div className="refs-header">
        <span className="refs-tag">Testimonials</span>
        <h2 className="refs-title">Industry Perspectives</h2>
      </div>

      <div className="slider-container">
        <div className="slider-track">
          {loopList.map((ref, index) => (
            <div className="ref-card" key={index}>
              <div className="ref-quote-mark">“</div>
              <p className="ref-text">{ref.text}</p>
              <div className="ref-footer">
                <div className="ref-avatar">{ref.name.charAt(0)}</div>
                <div className="ref-info">
                  <h4 className="ref-name">{ref.name}</h4>
                  <p className="ref-role">{ref.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;