import React from 'react';


const AboutUs = () => {
  return (
    <section className="about-section" id="aboutus">
      <div className="about-container">
        
        {/* Left Side: Content */}
        <div className="about-content">
          <div className="about-header">
            <span className="about-tag">About Us</span>
            <h2 className="about-main-title">Engineering a Water-Secure Future</h2>
          </div>

          <div className="content-block">
            <h3 className="content-title">Who are we?</h3>
            <p className="content-text">
              Flowlogic Solutions is a premier provider of comprehensive water management systems, 
              committed to solving one of the planet’s most pressing challenges—<strong>water sustainability</strong>. 
              With a foundation built on engineering excellence, innovation, and environmental stewardship, 
              we deliver customized solutions across the entire water lifecycle—from sourcing and treatment 
              to distribution, recycling, and conservation.
            </p>
          </div>

          <div className="content-block approach-card">
            <h3 className="content-title">Our Approach</h3>
            <p className="content-text">
              At Flowlogic, we believe that effective water management requires a <strong>holistic approach</strong>. 
              We work closely with our clients to understand their unique challenges and deliver customized 
              solutions that combine cutting-edge technology, reliable engineering, and eco-friendly practices. 
              Our projects are designed not just to meet today’s needs but to secure water for future generations.
            </p>
          </div>
        </div>

        {/* Right Side: Image Space */}
        <div className="about-image-wrapper">
  <div className="image-placeholder">
    <div className="image-overlay"></div>
    {/* Replace your placeholder text with this: */}
    <img 
      src="serve.png" 
      alt="Flowlogic Solutions Water Management" 
      className="about-img" 
    />
  </div>
  <div className="decoration-dash"></div>
</div>

      </div>
    </section>
  );
};

export default AboutUs;
