import React from 'react';
import './References.css';

const References = () => {
  const feedback = [
    { name: "Ramesh", role: "Industrial Operations Manager", text: "Flowlogic experts helped us to optimize selection and saved on project cost." },
    { name: "Kumar", role: "Senior Associate", text: "Their innovative solution and commitment to excellence ensure a project is delivered with highest standards of quality." },
    { name: "ChandraMouli", role: "Project Head", text: "From problem solving to execution their services consistently drive progress and reliability." },
    { name: "Gowrish", role: "Director", text: "Their expert teams transform complex challenges into practical solutions which is truly commandable." },
    { name: "Dayanda", role: "Project Consultant", text: "One stop for all your water challenges, offering end-to-end solution under one roof." }
    
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
