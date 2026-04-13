import React from 'react';
import Navbar from './Navbar';
import Hero from './hero';
import MissionVision from './MissionVision';
import AboutUs from './AboutUs.jsx';
import References from './References.jsx';
import Associates from './Associates.jsx';
import Services from './Services.jsx';
import Consultation from './Consultation.jsx';
import GetInTouch from './GetInTouch.jsx';
import Chatbot from './Chatbot.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MissionVision />
      <AboutUs />
      <Associates/>
      <Services/>
      <References/>
      <Consultation/>
      <GetInTouch/>
      <Chatbot/>
      {/* You can add more sections here later like <About /> or <Services /> */}
     
    </div>
  );
}

export default App;