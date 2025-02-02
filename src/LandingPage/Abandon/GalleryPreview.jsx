import React, { useState } from "react";
import "./GalleryPreview.css";

import image1 from "../assets/_KGP5985.JPG";
import image2 from "../assets/_KGP6196.JPG";
import image3 from "../assets/_KGP6384.JPG";
import image4 from "../assets/pexels-joe-arts-1830507-3505000.jpg";
import image5 from "../assets/pexels-thu-trang-1190570-2265090.jpg";

const images = ["https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497", "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497", "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497", "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497", "https://ik.imagekit.io/fcuzgktdi/assets/pexels-joe-arts-1830507-3505000.jpg?updatedAt=1735723666739"];

const GalleryPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="gallery-preview">
      <div className="gallery-preview-top">
        <h1>
          GET TO <span className="highlight">SEE</span> OUR <br />
          LATEST FOREST <span className="highlight">WORKS</span>
        </h1>
        <button>[ View Gallery ]</button>
      </div>

      <div className="gallery-images">
        <img 
          src={images[currentIndex]}
          alt={`Current ${currentIndex}`}
          className="current-image"
        />
        <div className="next-image-container">
          <img
            src={images[nextIndex]}
            alt={`Next ${nextIndex}`}
            className="next-image"
          />
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
      {/* mobile */}
      <div className="horizontal-scroll-container">
      <h1 className="header">
      GET TO <span className="header-highlight">SEE</span> OUR <br />
      LATEST FOREST <span className="header-highlight">WORKS</span>
      </h1>
      <div className="scroll-area">
        <div className="scroll-content">
          <img src={image1} alt="Image 1" className="scroll-image" />
          <img src={image2} alt="Image 2" className="scroll-image" />
          <img src={image3} alt="Image 3" className="scroll-image" />
          <img src={image4} alt="Image 4" className="scroll-image" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default GalleryPreview;
