import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PartnerDetails.css';

const PartnerDetailsNeer = () => {
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
      section: "Floor Drainage",
      products: [
        { name: "Square Podium / Parking Drain", type: "NRG Series", detail: "Heavy-duty square drain for podium and parking surfaces handling high load and water volume.", img: "/public/N1.png", specs: ["High Load", "Parking Grade"] },
        { name: "Nickle Bronze Strainer", type: "NRG-7015", detail: "Decorative nickel-bronze finish strainer drain ideal for premium residential and hotel flooring.", img: "/public/N2.png", specs: ["Premium Finish", "Decorative"] },
        { name: "Round Floor Drain", type: "NRG-7002", detail: "Screw-secured round floor drain for easy removal and cleaning.", img: "/public/N3.png", specs: ["Screw Type", "Utility Fit"] },
        { name: "Luxury SS Popup Drain", type: "NCT-LS-Popup", detail: "AISI 304 Stainless steel floor drain with popup mechanism for tool-free operation.", img: "/public/N4.png", specs: ["AISI 304", "Popup Tech"] }
      ]
    },
    {
      section: "Rooftop & Outdoor Drainage",
      products: [
        { name: "UniSquare SS Roof Drain", type: "NK-AK-SCFC", detail: "Square SS roof drain engineered for flat rooftops with controlled water flow.", img: "/public/N5.png", specs: ["Grade 304", "Controlled Flow"] },
        { name: "Aluminium Roof Drain", type: "Standard Series", detail: "Lightweight, corrosion-resistant aluminium drain for low-slope roofs.", img: "/public/N6.png", specs: ["Lightweight", "Anti-Corrosive"] },
        { name: "Dome Type Roof Drain", type: "NDG1001-3", detail: "Dome-shaped cast iron roof drain with wide catchment area and built-in straining.", img: "/public/N7.png", specs: ["Cast Iron", "High Catchment"] },
        { name: "PVC Parapet Drain", type: "NPS-3013-3", detail: "L-shaped PVC body drain with SS Grating mounted at parapet walls.", img: "/public/N8.png", specs: ["L-Shaped", "SS Grating"] }
      ]
    },
    {
      section: "CI Hopper & Parking Drains",
      products: [
        { name: "CI Hopper (Flat Grate)", type: "Standard Series", detail: "Robust cast iron hopper drain suitable for industrial floors and commercial points.", img: "/public/N9.png", specs: ["Industrial Grade", "Flat Grate"] },
        { name: "Hopper Roof Drain", type: "NFG-2001-3", detail: "Purpose-built cast iron hopper for rooftop drainage; handles high water volume.", img: "/public/N10.png", specs: ["High Volume", "Debris Guard"] },
        { name: "Long Body CI Hopper", type: "NFL-2002-4", detail: "Designed for surface-level parking areas with high vehicular traffic.", img: "/public/N11.png", specs: ["Long Body", "Traffic Rated"] },
        { name: "Compact CI Hopper", type: "NFG-2001-75mm", detail: "Optimised for basement parking where space and efficiency are critical.", img: "/public/N12.png", specs: ["75mm Size", "Basement Fit"] }
      ]
    },
    {
      section: "Jalis & Gratings",
      products: [
        { name: "UniSquare Floor Jali", type: "NK-AK-SVFC", detail: "Square SS strainer cover with snap-fit design for easy access.", img: "/public/N13.png", specs: ["SS 304", "Snap-Fit"] },
        { name: "SS Clean Out Jali", type: "NCO8000", detail: "High-grade jali with built-in clean-out access for easy maintenance.", img: "/public/N14.png", specs: ["Grade 316", "Maintenance Access"] },
        { name: "Round SS Grating Cover", type: "NK-RCGFCFT", detail: "Round stainless steel grating cover; polished finish for washrooms.", img: "/public/N15.png", specs: ["Polished SS", "Round Profile"] },
        { name: "Heavy-Duty Gratings", type: "HD Series", detail: "Robust panels for commercial openings requiring high load-bearing capacity.", img: "/public/N16.png", specs: ["Commercial Load", "SS Grating"] }
      ]
    },
    {
      section: "Bathroom Fittings",
      products: [
        { name: "Overhead Shower Arm", type: "SS-SAR Series", detail: "SS shower arm with standard threading for all shower head types.", img: "/public/N17.png", specs: ["SS Body", "Ceiling/Wall"] },
        { name: "Health Faucet", type: "HF-01", detail: "Handheld bidet jet spray with flexible hose for residential bathrooms.", img: "/public/N18.png", specs: ["8481.80.90", "Flexible Hose"] },
        { name: "Jet Spray Multi Plus", type: "JSMP-02", detail: "Multi-function SS jet spray with adjustable spray modes.", img: "/public/N19.png", specs: ["Stainless Steel", "Adjustable"] },
        { name: "Soap Dispenser", type: "PL-01", detail: "Wall-mounted push-pump dispenser available in Pearl and Kanchan variants.", img: "/public/N20.png", specs: ["Pearl Series", "Wall Mount"] }
      ]
    },
    {
      section: "Plumbing Hardware",
      products: [
        { name: "Extension Nipple", type: "EN Series", detail: "SS nipples used to extend pipe length between fittings and drain bodies.", img: "/public/N21.png", specs: ["1.5\" to 2.5\"", "SS 304"] },
        { name: "Cast Brass Plug Clean Out", type: "NCO8003-B", detail: "4-inch clean-out plug with sealing cap for underground pipework.", img: "/public/N22.png", specs: ["4 Inch", "Brass Body"] },
        { name: "Bottle Trap Pipe", type: "BTP Series", detail: "Water seal fitting installed under basins to prevent sewer gas entry.", img: "/public/N23.png", specs: ["12/18/24 Inch", "Gas Block"] },
        { name: "Golden Classic Flange", type: "FS-01", detail: "Square SS flanges providing decorative connection for drain bodies.", img: "/public/N24.png", specs: ["German Type", "Square Profile"] }
      ]
    },
    {
      section: "Safety, Access & Cleanouts",
      products: [
        { name: "S.S 304 Grab Bar", type: "Safety Series", detail: "Wall-mounted safety bar to aid mobility for differently-abled users.", img: "/public/N25.png", specs: ["Mobility Aid", "Grade 304"] },
        { name: "S.S Manhole Cover", type: "Recess Type", detail: "Stainless steel recess cover that sits flush with floor finish.", img: "/public/N26.png", specs: ["Flush Fit", "Inspection Access"] },
        { name: "Sealing Clean Out", type: "NCO8002A", detail: "Cast brass clean-out with threaded cap for accessible maintenance.", img: "/public/N27.png", specs: ["3 Inch", "Brass Cap"] },
        { name: "Adjustable Floor Drain", type: "NAS-4002-4", detail: "Height-adjustable drain compatible with waterproofing membranes.", img: "/public/N28.png", specs: ["Adjustable", "Renovation Fit"] }
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
            <h1 className="pd-title">Neer Drains</h1>
            <p className="pd-lead-small">Professional Drainage & Plumbing Solutions in AISI 304 Stainless Steel</p>
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

export default PartnerDetailsNeer;