import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Component Imports
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
import PartnerDetails from './PartnerDetails'; 
import PartnerDetailsEKKI from './PartnerDetailsEKKI';
import PartnerDetailsFLS from './PartnerDetailsFLS';

// Styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Main Landing Page Route */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <MissionVision />
              <AboutUs />
              <Associates />
              <Services />
              <References />
              <Consultation />
              <GetInTouch />
              <Chatbot />
            </>
          } />

          {/* Partner Detail Page Route */}
          <Route path="/partner/gopani" element={<PartnerDetails />} />
          <Route path="/partner/ekki" element={<PartnerDetailsEKKI />} />
          <Route path="/partner/fls" element={<PartnerDetailsFLS />} />
          
          {/* Catch-all for 404s */}
          <Route path="*" element={
            <div style={{color: '#fff', padding: '100px', textAlign: 'center'}}>
              <h1>404 - Page Not Found</h1>
              <Link to="/" style={{color: '#00b4d8', textDecoration: 'none'}}>Return to Home</Link>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
