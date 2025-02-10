import React from "react";
import "./Gallery.css";

// Import local images
import image1 from "../assets/_KGP5985.JPG";
import image2 from "../assets/_KGP6196.JPG";
import image3 from "../assets/_KGP6384.JPG";
import image4 from "../assets/pexels-joe-arts-1830507-3505000.jpg";
import image5 from "../assets/pexels-thu-trang-1190570-2265090.jpg";

// Combine local and external images
const initialImages = [
  image1,
  image2,
  image3,
  "",
  "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6413.JPG?updatedAt=1739167303126",
  "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497",
  "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497",
  "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497",
  "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497",
  "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6617.JPG?updatedAt=1739167769777",
];

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__scroll">
        {initialImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`gallery-img-${index}`}
            className="gallery__image"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
