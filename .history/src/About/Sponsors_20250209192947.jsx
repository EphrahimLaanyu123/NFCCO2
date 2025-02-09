import React from 'react';
import './Sponsors.css'; // Import the CSS file for styling

const Sponsors = () => {
  const sponsors = [
    {
      name: "UNDP",
      logo: "https://ik.imagekit.io/fcuzgktdi/assets/undp-logo-blue.svg",
    },
    {
      name: "Climatepromise",
      logo: "https://ik.imagekit.io/fcuzgktdi/assets/cp-new-logo-white.png",
    },
    {
      name: "German Embassy",
      logo: "https://ik.imagekit.io/fcuzgktdi/assets/aamt-logo-dt-data.svg",
    },
  ];

  return (
    <div className="sponsors-container">
      {/* Cover Image */}
      <div className="cover-image">
        <img 
          src="https://ik.imagekit.io/fcuzgktdi/assets/_KGP6661.JPG" 
          alt="Cover" 
          className="cover-img" 
        />
        <div className="cover-text">
          <h1>Our Esteemed Sponsors</h1>
        </div>
      </div>
      
      {/* Sponsors List */}
      <div className="sponsors-list">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              className="sponsor-logo" 
            />
            <h3>{sponsor.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
