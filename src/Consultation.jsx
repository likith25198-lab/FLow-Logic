import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Consultation.css';

const Consultation = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // To track 'sending', 'success', or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace the strings below with your actual IDs from EmailJS
    emailjs.sendForm(
      'service_nuv5kq4',
      'template_6a3gm4f', 
      form.current, 
      'ioi67JkkbtWPIziCW'
    )
    .then((result) => {
        setStatus('success');
        e.target.reset(); // Clears the form
        setTimeout(() => setStatus(''), 5000); // Clears success message after 5 seconds
    }, (error) => {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
    });
  };

  return (
    <section className="consult-section" id="contact">
      <div className="consult-container">
        
        {/* Left Side: Call to Action */}
        <div className="consult-cta">
          <div className="consult-tag-line">
            <span className="dot"></span>
            Engineering Partnership
          </div>
          <h2 className="consult-title">Book Your Consultation</h2>
          <p className="consult-text">
            Partner with Flowlogic Solutions to optimize your water lifecycle. 
            Our consultants provide technical expertise in treatment, distribution, 
            and energy-efficient retrofitting for industrial and commercial projects.
          </p>
          <div className="consult-decoration-element"></div>
        </div>

        {/* Right Side: The Form */}
        <div className="consult-form-wrapper">
          <form ref={form} onSubmit={sendEmail} className="consult-form-card">
            <h3 className="form-subtitle">Project Inquiry & Strategy</h3>
            
            <div className="form-grid">
              <div className="input-group">
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  placeholder="Full Name*" 
                  className="form-input" 
                />
              </div>
              <div className="input-group">
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  placeholder="Email Address*" 
                  className="form-input" 
                />
              </div>
              <div className="input-group">
                <input 
                  type="tel" 
                  name="user_phone" 
                  required 
                  placeholder="Phone Number*" 
                  className="form-input" 
                />
              </div>
            </div>

            {/* Open-Ended Challenge Question */}
            <div className="input-group full-width">
              <textarea 
                name="message" 
                required 
                placeholder="Briefly describe your current water management challenges or project goals*" 
                className="form-textarea"
                rows="5"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="form-submit-btn" 
              disabled={status === 'sending'}
            >
              <span>
                {status === 'sending' ? 'Processing...' : 'Submit Request'}
              </span>
              <div className="btn-glow"></div>
            </button>

            {/* Feedback Messages */}
            {status === 'success' && (
              <p className="form-status success">Message sent! We will contact you shortly.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Failed to send. Please try again later.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Consultation;
