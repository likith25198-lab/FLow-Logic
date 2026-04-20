import React, { useState } from 'react';

const SplitText = ({ text, className, delay = 0 }) => {
  const letters = text.split("");
  return (
    <span className={className}>
      {letters.map((char, index) => (
        <span 
          key={index} 
          className="split-char" 
          style={{ animationDelay: `${delay + (index * 0.05)}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
 



  return (
    <header 
      className="hero" 
      id="home"
    >
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        

        <h1 className="hero-title">
          <SplitText text="PIONEERING" className="title-part-1" delay={0.2} />
          <br />
          <SplitText text="Sustainable Water" className="title-part-2"  delay={0.8} />
        </h1>

        <p className="hero-subtitle">
          Flowlogic Solutions delivers innovative, full-lifecycle water management systems engineered for global sustainability and environmental stewardship.
        </p>

        
      </div>
    </header>
  );
};

export default Hero;
